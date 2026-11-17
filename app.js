/* ================================================================
   LOGIKA APLIKASI — Ruang Latihan CPNS
   1) Mengatur tab utama dan tab turunan.
   2) Mengambil paket soal acak dengan algoritma Fisher–Yates.
   3) Menangani jawaban, navigasi, timer, penilaian, dan pembahasan.
   ================================================================ */

const MAIN_SECTIONS = {
  TWK: { label: "TES WAWASAN KEBANGSAAN", theme: "twk", topics: ["INTEGRITAS", "NASIONALISME", "BELA NEGARA", "PILAR NEGARA", "BAHASA INDONESIA"] },
  TIU: { label: "TES INTELEGENSIA UMUM", theme: "tiu", topics: ["RELASI ARGUMEN", "KECUKUPAN DATA", "BARIS DAN DERET", "PERBANDINGAN NILAI", "KOMBINASI"] },
  TKP: { label: "TES KARAKTERISTIK PRIBADI", theme: "tkp", topics: ["PROFESIONALISME", "PELAYANAN PUBLIK", "JEJARING KERJA", "SOSIAL BUDAYA", "TIK", "ANTI RADIKALISME"] }
};
const SUBTOPICS = {
  "KOMBINASI": ["Pernyataan Benar", "Biaya Termurah", "Kombinasi dengan Ketentuan Tambahan"]
};
const ANSWER_TEXT = {
  A: "Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup.",
  B: "Pernyataan (2) saja cukup, tetapi pernyataan (1) saja tidak cukup.",
  C: "Kedua pernyataan bersama-sama cukup, tetapi satu pernyataan saja tidak cukup.",
  D: "Salah satu pernyataan saja cukup (pernyataan (1) saja atau pernyataan (2) saja).",
  E: "Kedua pernyataan tidak cukup untuk menjawab pertanyaan."
};

// State sesi ujian yang sedang berlangsung.
let activeMain = "TIU";
let activeTopic = "KECUKUPAN DATA";
let activeSubtopic = null;
let packageQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let examStarted = false;
let examFinished = false;
let remainingSeconds = 0;
let timerInterval = null;
let celebrationAnimation = null;

const $ = (id) => document.getElementById(id);
const mainTabButtons = [...document.querySelectorAll(".main-tab")];

function getActiveBank() {
  const bank = QUESTION_BANKS?.[activeMain]?.[activeTopic];
  if (activeSubtopic) return Array.isArray(bank) ? [] : (bank?.[activeSubtopic] || []);
  return Array.isArray(bank) ? bank : [];
}

// Fisher–Yates menghasilkan pengacakan tanpa pengulangan dalam satu paket.
function shuffleArray(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getPackageSize(bank) {
  return Math.min(EXAM_CONFIG.questionsPerPackage, bank.length);
}

function createNewPackage() {
  stopTimer();
  const bank = getActiveBank();
  if (!bank.length) {
    packageQuestions = [];
    showEmptyState();
    return;
  }
  const size = getPackageSize(bank);
  packageQuestions = shuffleArray(bank).slice(0, size);
  resetExamState();
  renderExam();
}

function resetExamState() {
  currentIndex = 0;
  userAnswers = {};
  examStarted = false;
  examFinished = false;
  remainingSeconds = EXAM_CONFIG.durationMinutes * 60;
  $("resultPanel").hidden = true;
  $("examLayout").hidden = false;
  $("startBtn").hidden = false;
  $("finishBtn").hidden = true;
  $("startBtn").disabled = false;
  $("timerStatus").textContent = "Belum dimulai";
  $("timer").textContent = formatTime(remainingSeconds);
  $("timer").parentElement.classList.remove("running", "urgent");
  $("actionTitle").textContent = "Siap memulai latihan?";
  $("actionDescription").textContent = `Paket berisi ${packageQuestions.length} soal. Tekan Mulai Mengerjakan untuk menjalankan timer.`;
  renderTimerState();
}

function showEmptyState() {
  examStarted = false;
  examFinished = false;
  userAnswers = {};
  remainingSeconds = EXAM_CONFIG.durationMinutes * 60;
  $("examLayout").hidden = true;
  $("resultPanel").hidden = true;
  $("emptyState").hidden = false;
  $("guidePanel").hidden = activeTopic !== "KECUKUPAN DATA";
  $("startBtn").hidden = false;
  $("startBtn").disabled = true;
  $("finishBtn").hidden = true;
  $("timer").textContent = formatTime(EXAM_CONFIG.durationMinutes * 60);
  $("timer").parentElement.classList.remove("running", "urgent");
  $("timerStatus").textContent = "Belum tersedia";
  $("actionTitle").textContent = "Bank soal belum tersedia";
  $("actionDescription").textContent = "Tambahkan soal ke kategori ini pada file data.js.";
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function renderTimerState() {
  $("timer").parentElement.classList.toggle("running", examStarted && !examFinished);
  $("timer").parentElement.classList.toggle("urgent", examStarted && remainingSeconds <= 60 && !examFinished);
}

function startExam() {
  if (!packageQuestions.length || examStarted || examFinished) return;
  examStarted = true;
  $("timerStatus").textContent = "Sedang berjalan";
  $("startBtn").hidden = true;
  $("finishBtn").hidden = false;
  $("actionTitle").textContent = "Ujian sedang berlangsung";
  $("actionDescription").textContent = "Pilih jawaban, gunakan navigasi nomor, dan akhiri ujian saat siap.";
  renderQuestion();
  renderNavigator();
  renderTimerState();
  timerInterval = window.setInterval(() => {
    remainingSeconds -= 1;
    $("timer").textContent = formatTime(Math.max(remainingSeconds, 0));
    renderTimerState();
    if (remainingSeconds <= 0) finishExam(true);
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
}

function finishExam(timeIsUp = false) {
  if (!examStarted || examFinished) return;
  examFinished = true;
  examStarted = false;
  stopTimer();
  $("timerStatus").textContent = timeIsUp ? "Waktu habis" : "Ujian selesai";
  $("finishBtn").hidden = true;
  $("startBtn").hidden = true;
  $("actionTitle").textContent = "Paket latihan telah selesai";
  $("actionDescription").textContent = timeIsUp ? "Waktu habis. Berikut hasil pengerjaan Anda." : "Berikut hasil pengerjaan Anda.";
  showResults(timeIsUp);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderMath(container) {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([container]).catch((error) => console.warn("MathJax render warning:", error));
  }
}

function renderExam() {
  $("emptyState").hidden = true;
  $("examLayout").hidden = false;
  $("resultPanel").hidden = true;
  $("guidePanel").hidden = activeTopic !== "KECUKUPAN DATA";
  $("questionArea").hidden = false;
  $("navigatorCount").textContent = packageQuestions.length;
  renderQuestion();
  renderNavigator();
  renderMath($("questionArea"));
}

function renderQuestion() {
  if (!packageQuestions.length) return;
  const question = packageQuestions[currentIndex];
  $("questionCounter").textContent = `Soal ${currentIndex + 1} dari ${packageQuestions.length}`;
  $("questionText").innerHTML = escapeHTML(question.question);
  $("statement1").innerHTML = escapeHTML(question.statement1);
  $("statement2").innerHTML = escapeHTML(question.statement2);
  $("answeredCount").textContent = `${Object.keys(userAnswers).length} / ${packageQuestions.length} dijawab`;
  $("previousBtn").disabled = currentIndex === 0;
  $("nextBtn").disabled = currentIndex === packageQuestions.length - 1;
  $("progressText").textContent = examStarted ? "Jawaban tersimpan otomatis" : "Tekan Mulai Mengerjakan untuk menjawab";
  renderAnswerOptions();
  renderMath($("questionArea"));
}

function renderAnswerOptions() {
  const host = $("answerOptions");
  host.innerHTML = "";
  Object.entries(ANSWER_TEXT).forEach(([letter, description]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `answer-option${userAnswers[packageQuestions[currentIndex].id] === letter ? " selected" : ""}`;
    button.disabled = !examStarted || examFinished;
    button.innerHTML = `<span class="option-letter">${letter}</span><span class="option-copy">${escapeHTML(description)}</span>`;
    button.addEventListener("click", () => {
      userAnswers[packageQuestions[currentIndex].id] = letter;
      renderQuestion();
      renderNavigator();
    });
    host.appendChild(button);
  });
}

function renderNavigator() {
  const grid = $("questionGrid");
  grid.innerHTML = "";
  packageQuestions.forEach((question, index) => {
    const number = document.createElement("button");
    number.type = "button";
    number.className = "question-number";
    if (index === currentIndex) number.classList.add("current");
    if (userAnswers[question.id]) number.classList.add("done");
    number.textContent = index + 1;
    number.setAttribute("aria-label", `Buka soal nomor ${index + 1}`);
    number.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
      renderNavigator();
    });
    grid.appendChild(number);
  });
  $("answeredCount").textContent = `${Object.keys(userAnswers).length} / ${packageQuestions.length} dijawab`;
}

function showResults(timeIsUp) {
  const correct = packageQuestions.filter(q => userAnswers[q.id] === q.answer).length;
  const answered = Object.keys(userAnswers).length;
  const blank = packageQuestions.length - answered;
  const wrong = answered - correct;
  const score = packageQuestions.length ? Math.round(correct / packageQuestions.length * 100) : 0;
  $("examLayout").hidden = true;
  $("resultPanel").hidden = false;
  $("scoreValue").textContent = score;
  $("correctValue").textContent = correct;
  $("wrongValue").textContent = wrong;
  $("blankValue").textContent = blank;
  $("scoreCircle").style.setProperty("--score", `${score}%`);

  if (score >= 80) {
    $("resultTitle").textContent = "Selamat! Hasil yang luar biasa!";
    $("resultMessage").textContent = timeIsUp ? "Waktu telah habis, tetapi Anda berhasil mencapai target. Pertahankan konsistensi belajar!" : "Anda mencapai target latihan. Pertahankan konsistensi dan terus tingkatkan kemampuan!";
    $("resultCelebration").textContent = "🎉 ✨ 🎊 ✨ 🎉";
    $("scoreCircle").style.borderTopColor = "#d39a27";
    launchFireworks();
  } else {
    $("resultTitle").textContent = "Tetap semangat, terus berlatih!";
    $("resultMessage").textContent = "Tidak apa-apa. Pelajari pembahasannya, kenali bagian yang belum dikuasai, lalu coba paket berikutnya.";
    $("resultCelebration").textContent = "😢 💪 📚 💪";
    $("scoreCircle").style.borderTopColor = "#b97755";
    stopFireworks();
  }
  renderReview();
  renderMath($("reviewList"));
}

function renderReview() {
  const host = $("reviewList");
  host.innerHTML = `<h3>Pembahasan dan evaluasi per soal</h3>`;
  packageQuestions.forEach((question, index) => {
    const picked = userAnswers[question.id] || "Tidak dijawab";
    const isCorrect = picked === question.answer;
    const detail = document.createElement("details");
    detail.className = "review-item";
    const status = picked === "Tidak dijawab" ? "Tidak dijawab" : (isCorrect ? "Benar" : "Belum tepat");
    detail.innerHTML = `
      <summary>
        <span>Soal ${index + 1} · ${escapeHTML(question.question)}</span>
        <span class="review-status ${isCorrect ? "correct" : "incorrect"}">${status}</span>
      </summary>
      <div class="review-body">
        <p><b>(1)</b> ${escapeHTML(question.statement1)}</p>
        <p><b>(2)</b> ${escapeHTML(question.statement2)}</p>
        <div class="review-answer"><b>Jawaban Anda:</b> ${picked} &nbsp; · &nbsp; <b>Kunci:</b> ${question.answer}<br><b>Pedoman:</b> ${escapeHTML(ANSWER_TEXT[question.answer])}</div>
        <div class="review-explanation"><b>Pembahasan:</b><br>${escapeHTML(question.explanation)}</div>
      </div>`;
    host.appendChild(detail);
  });
}

// Fungsi kembang api dibuat tanpa library tambahan agar tetap gratis dan ringan.
function launchFireworks() {
  stopFireworks();
  const canvas = $("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  const resize = () => { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; };
  resize();
  const particles = [];
  const colors = ["#f6bd4b", "#ed6a5a", "#69b6a1", "#7798d8", "#bd83d5", "#f28fbd"];
  for (let burst = 0; burst < 6; burst++) {
    const cx = (0.16 + Math.random() * 0.68) * canvas.width;
    const cy = (0.12 + Math.random() * 0.48) * canvas.height;
    for (let i = 0; i < 42; i++) {
      const angle = Math.PI * 2 * i / 42;
      const speed = (1.2 + Math.random() * 3.3) * devicePixelRatio;
      particles.push({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 55 + Math.random() * 35, color: colors[burst % colors.length], size: 1.5 + Math.random() * 2.2 });
    }
  }
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      if (p.life <= 0) return;
      p.x += p.vx; p.y += p.vy; p.vy += 0.025 * devicePixelRatio; p.vx *= 0.992; p.vy *= 0.992; p.life--;
      ctx.globalAlpha = Math.max(0, p.life / 80);
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
    frame++;
    if (frame < 100 && particles.some(p => p.life > 0)) celebrationAnimation = requestAnimationFrame(animate);
    else stopFireworks();
  }
  celebrationAnimation = requestAnimationFrame(animate);
  window.addEventListener("resize", resize, { once: true });
}

function stopFireworks() {
  if (celebrationAnimation) cancelAnimationFrame(celebrationAnimation);
  celebrationAnimation = null;
  const canvas = $("fireworksCanvas");
  if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
}

function renderTopicTabs() {
  const host = $("topicTabs");
  host.innerHTML = "";
  MAIN_SECTIONS[activeMain].topics.forEach(topic => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-tab${activeTopic === topic ? " active" : ""}`;
    button.textContent = topic;
    button.addEventListener("click", () => {
      activeTopic = topic;
      activeSubtopic = null;
      renderTopicTabs();
      updateTopicHeading();
      createNewPackage(); // Membuka tab turunan selalu mengambil paket acak baru.
    });
    host.appendChild(button);

    // Tab turunan bertingkat untuk TIU > Kombinasi.
    if (topic === "KOMBINASI" && activeMain === "TIU" && activeTopic === "KOMBINASI") {
      SUBTOPICS[topic].forEach(subtopic => {
        const subButton = document.createElement("button");
        subButton.type = "button";
        subButton.className = `topic-tab nested${activeSubtopic === subtopic ? " active" : ""}`;
        subButton.textContent = subtopic;
        subButton.addEventListener("click", () => {
          activeTopic = "KOMBINASI";
          activeSubtopic = subtopic;
          renderTopicTabs();
          updateTopicHeading();
          createNewPackage();
        });
        host.appendChild(subButton);
      });
    }
  });
}

function updateTopicHeading() {
  $("sectionEyebrow").textContent = MAIN_SECTIONS[activeMain].label;
  $("topicHeading").textContent = activeSubtopic || titleCase(activeTopic);
  $("topicDescription").textContent = activeTopic === "KECUKUPAN DATA"
    ? "Tentukan apakah informasi pada pernyataan (1), (2), atau keduanya cukup untuk menjawab pertanyaan."
    : "Pilih submateri untuk berlatih. Bank soal kategori ini dapat ditambahkan melalui file data.js.";
  document.body.dataset.theme = MAIN_SECTIONS[activeMain].theme;
  $("guidePanel").hidden = activeTopic !== "KECUKUPAN DATA";
}

function titleCase(value) {
  return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function selectMainSection(main) {
  activeMain = main;
  activeTopic = MAIN_SECTIONS[main].topics[0];
  activeSubtopic = null;
  mainTabButtons.forEach(button => button.classList.toggle("active", button.dataset.main === main));
  renderTopicTabs();
  updateTopicHeading();
  createNewPackage();
}

// Event handlers untuk kontrol navigasi dan aksi ujian.
mainTabButtons.forEach(button => button.addEventListener("click", () => selectMainSection(button.dataset.main)));
$("previousBtn").addEventListener("click", () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); renderNavigator(); } });
$("nextBtn").addEventListener("click", () => { if (currentIndex < packageQuestions.length - 1) { currentIndex++; renderQuestion(); renderNavigator(); } });
$("startBtn").addEventListener("click", startExam);
$("finishBtn").addEventListener("click", () => {
  const unanswered = packageQuestions.length - Object.keys(userAnswers).length;
  const message = unanswered ? `Masih ada ${unanswered} soal yang belum dijawab. Akhiri ujian sekarang?` : "Akhiri ujian dan tampilkan hasil?";
  if (window.confirm(message)) finishExam(false);
});
$("newPackageBtn").addEventListener("click", () => {
  if (examStarted && !window.confirm("Paket saat ini belum selesai. Buat paket baru dan hapus jawaban saat ini?")) return;
  createNewPackage();
});
$("newPackageFromResult").addEventListener("click", createNewPackage);
$("backToReview").addEventListener("click", () => $("reviewList").scrollIntoView({ behavior: "smooth", block: "start" }));

// Inisialisasi: laman pertama kali dibuka pada TIU > Kecukupan Data.
renderTopicTabs();
updateTopicHeading();
createNewPackage();
