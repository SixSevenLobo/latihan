/* ================================================================
   DATABASE LATIHAN CPNS
   ---------------------------------------------------------------
   Edit bank soal di file ini. Satu objek soal memiliki:
   id, question, statement1, statement2, answer, explanation.
   Isi question/statement/explanation boleh memakai LaTeX di antara $...$.
   Tambahkan objek baru ke array topik yang sesuai.
   ================================================================ */

const EXAM_CONFIG = {
  questionsPerPackage: 10, // Banyak soal yang diambil setiap paket.
  durationMinutes: 30      // Durasi ujian dalam menit; ubah angka ini sesuai kebutuhan.
};

const DATA_SUFFICIENCY_QUESTIONS = [
  {
    "id": 1,
    "question": "Apakah nilai dari $x + y$ sama dengan $10$?",
    "statement1": "$2x + 2y = 20$",
    "statement2": "$x - y = 2$",
    "answer": "A",
    "explanation": "Dari (1), $2x + 2y = 20 \\implies x + y = 10$ (Cukup). Dari (2), $x - y = 2$ tidak menentukan nilai $x + y$ (Tidak cukup)."
  },
  {
    "id": 2,
    "question": "Apakah bilangan bulat positif $n$ habis dibagi $6$?",
    "statement1": "$n$ habis dibagi $2$.",
    "statement2": "$n$ habis dibagi $3$.",
    "answer": "C",
    "explanation": "(1) saja atau (2) saja tidak cukup. Gabungan keduanya berarti $n$ habis dibagi $\\text{KPK}(2, 3) = 6$ (Cukup bersama-sama)."
  },
  {
    "id": 3,
    "question": "Berapakah luas persegi panjang $ABCD$?",
    "statement1": "Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "statement2": "Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.",
    "answer": "C",
    "explanation": "(1) $p^2 + l^2 = 100$. (2) $p + l = 14$. Gabungan: $(p+l)^2 = p^2 + l^2 + 2pl \\implies 196 = 100 + 2pl \\implies pl = 48$ (Luas diketahui)."
  },
  {
    "id": 4,
    "question": "Berapakah rata-rata aritmetika dari $5$ buah bilangan bulat positif?",
    "statement1": "Jumlah kelima bilangan tersebut adalah $45$.",
    "statement2": "Median dari kelima bilangan tersebut adalah $9$.",
    "answer": "A",
    "explanation": "Rata-rata $= \\frac{\\text{jumlah}}{5}$. Dari (1), rata-rata $= \\frac{45}{5} = 9$ (Cukup). Dari (2), median saja tidak menentukan rata-rata."
  },
  {
    "id": 5,
    "question": "Berapakah nilai tunggal dari variabel $x$?",
    "statement1": "$x^2 - 5x + 6 = 0$",
    "statement2": "$x > 2$",
    "answer": "C",
    "explanation": "Dari (1), $x = 2$ atau $x = 3$. Dari (2), $x > 2$. Gabungan menghasilkan satu nilai pasti $x = 3$."
  },
  {
    "id": 6,
    "question": "Berapakah jumlah uang Andi dan Budi saat ini?",
    "statement1": "Perbandingan uang Andi dan Budi adalah $3 : 5$.",
    "statement2": "Selisih uang Andi dan Budi adalah $\\text{Rp}40.000,00$.",
    "answer": "C",
    "explanation": "Misal uang $3k$ dan $5k$. Dari (1) rasio diketahui, dari (2) selisih $2k = 40.000 \\implies k = 20.000$. Jumlah $= 8k = 160.000$."
  },
  {
    "id": 7,
    "question": "Berapakah harga awal sebuah jaket sebelum dikenakan potongan diskon?",
    "statement1": "Jaket tersebut dijual dengan diskon sebesar $20\\%$.",
    "statement2": "Harga jaket tersebut setelah diskon adalah $\\text{Rp}80.000,00$.",
    "answer": "C",
    "explanation": "Gabungan keduanya menghasilkan $0,8 \\times \\text{Harga Awal} = 80.000 \\implies \\text{Harga Awal} = 100.000$."
  },
  {
    "id": 8,
    "question": "Berapa banyak siswa di dalam kelas yang menyukai Matematika dan Fisika sekaligus?",
    "statement1": "Dari total $30$ siswa, $18$ siswa menyukai Matematika dan $15$ siswa menyukai Fisika.",
    "statement2": "Terdapat $3$ siswa yang tidak menyukai kedua mata pelajaran tersebut.",
    "answer": "C",
    "explanation": "Gunakan $n(S) = n(M) + n(F) - n(M \\cap F) + n(\\text{luar})$. Gabungan: $30 = 18 + 15 - n(M \\cap F) + 3 \\implies n(M \\cap F) = 6$."
  },
  {
    "id": 9,
    "question": "Berapakah kecepatan rata-rata mobil yang dikendarai Ani dari Kota A ke Kota B?",
    "statement1": "Jarak antara Kota A dan Kota B adalah $120\\text{ km}$.",
    "statement2": "Waktu total perjalanan tersebut adalah $2\\text{ jam}$.",
    "answer": "C",
    "explanation": "Kecepatan $v = \\frac{s}{t} = \\frac{120}{2} = 60\\text{ km/jam}$ membutuhkan jarak dari (1) dan waktu dari (2)."
  },
  {
    "id": 10,
    "question": "Berapakah nilai dari $x$ jika $x$ dan $y$ merupakan bilangan real?",
    "statement1": "$3x + 4y = 25$ dan $y = 4$",
    "statement2": "$2x - y = 6$",
    "answer": "A",
    "explanation": "Dari (1), substitusi $y = 4$ langsung menghasilkan $3x + 16 = 25 \\implies x = 3$ (Cukup). Pernyataan (2) menyisakan dua variabel bebas."
  },
  {
    "id": 11,
    "question": "Apakah bilangan bulat $k$ merupakan bilangan ganjil?",
    "statement1": "$k + 3$ adalah bilangan genap.",
    "statement2": "$2k + 1$ adalah bilangan ganjil.",
    "answer": "A",
    "explanation": "Dari (1), $k + 3 = \\text{genap} \\implies k = \\text{ganjil}$ (Cukup). Dari (2), $2k + 1$ selalu ganjil untuk semua bilangan bulat $k$ (Tidak cukup)."
  },
  {
    "id": 12,
    "question": "Berapakah besar sudut $A$ pada segitiga $ABC$?",
    "statement1": "Segitiga $ABC$ adalah segitiga sama kaki dengan $AB = AC$.",
    "statement2": "Besar sudut $B$ adalah $50^\\circ$.",
    "answer": "C",
    "explanation": "Gabungan (1) dan (2) memberi dua kemungkinan $\\angle B = \\angle C = 50^\\circ \\implies \\angle A = 80^\\circ$, atau jika $\\angle A = \\angle B = 50^\\circ \\implies \\angle A = 50^\\circ$. Tunggu: karena $AB = AC$, maka sudut di hadapannya sama yaitu $\\angle C = \\angle B = 50^\\circ$, sehingga $\\angle A = 180^\\circ - 100^\\circ = 80^\\circ$ (Pasti tunggal, Cukup bersama-sama)."
  },
  {
    "id": 13,
    "question": "Berapakah nilai dari $a^2 - b^2$?",
    "statement1": "$a + b = 8$",
    "statement2": "$a - b = 3$",
    "answer": "C",
    "explanation": "$a^2 - b^2 = (a + b)(a - b) = 8 \\times 3 = 24$. Kedua pernyataan diperlukan."
  },
  {
    "id": 14,
    "question": "Apakah $x > 0$?",
    "statement1": "$x^2 = 16$",
    "statement2": "$x^3 = 64$",
    "answer": "B",
    "explanation": "Dari (1), $x = \\pm 4$ (belum pasti positif). Dari (2), $x = 4 > 0$ (Pasti positif, Cukup)."
  },
  {
    "id": 15,
    "question": "Berapakah usia Rina pada tahun ini?",
    "statement1": "Lima tahun yang lalu, usia Rina adalah $12$ tahun.",
    "statement2": "Tiga tahun yang akan datang, usia Rina adalah $20$ tahun.",
    "answer": "D",
    "explanation": "Dari (1), usia $= 12 + 5 = 17$. Dari (2), usia $= 20 - 3 = 17$. Masing-masing saja cukup."
  },
  {
    "id": 16,
    "question": "Berapakah panjang jari-jari sebuah lingkaran?",
    "statement1": "Luas lingkaran tersebut adalah $49\\pi\\text{ cm}^2$.",
    "statement2": "Keliling lingkaran tersebut adalah $14\\pi\\text{ cm}$.",
    "answer": "D",
    "explanation": "Dari (1), $\\pi r^2 = 49\\pi \\implies r = 7$. Dari (2), $2\\pi r = 14\\pi \\implies r = 7$. Masing-masing saja cukup."
  },
  {
    "id": 17,
    "question": "Apakah garis $L_1$ sejajar dengan garis $L_2$ pada bidang Kartesius?",
    "statement1": "Gradien garis $L_1$ adalah $2$.",
    "statement2": "Persamaan garis $L_2$ adalah $4x - 2y + 7 = 0$.",
    "answer": "C",
    "explanation": "Dari (1), $m_1 = 2$. Dari (2), $2y = 4x + 7 \\implies y = 2x + 3,5 \\implies m_2 = 2$. Karena $m_1 = m_2$, keduanya sejajar."
  },
  {
    "id": 18,
    "question": "Berapakah sisa pembagian bilangan bulat positif $m$ oleh $5$?",
    "statement1": "$m$ habis dibagi $10$.",
    "statement2": "$m + 3$ habis dibagi $5$.",
    "answer": "D",
    "explanation": "Dari (1), kelipatan $10$ bersisa $0$ dibagi $5$. Dari (2), $m + 3 = 5k \\implies m = 5k - 3 = 5(k-1) + 2$, bersisa $2$ dibagi $5$. Masing-masing cukup."
  },
  {
    "id": 19,
    "question": "Berapakah nilai dari $x^2 + y^2$?",
    "statement1": "$x + y = 7$",
    "statement2": "$xy = 10$",
    "answer": "C",
    "explanation": "$x^2 + y^2 = (x + y)^2 - 2xy = 49 - 20 = 29$. Keduanya diperlukan."
  },
  {
    "id": 20,
    "question": "Berapakah jumlah suku pertama hingga suku ke-$10$ dari suatu barisan aritmetika?",
    "statement1": "Suku pertama barisan tersebut adalah $4$.",
    "statement2": "Suku ke-$10$ barisan tersebut adalah $31$.",
    "answer": "C",
    "explanation": "$S_{10} = \\frac{10}{2}(U_1 + U_{10}) = 5(4 + 31) = 175$. Keduanya diperlukan."
  },
  {
    "id": 21,
    "question": "Apakah bilangan prima $p$ lebih besar dari $10$?",
    "statement1": "$p$ adalah bilangan prima ganjil.",
    "statement2": "$p$ terletak di antara $8$ dan $15$.",
    "answer": "B",
    "explanation": "Dari (1), bisa $3, 5, 7, 11, \\dots$ (tidak pasti $> 10$). Dari (2), satu-satunya bilangan prima antara $8$ dan $15$ adalah $11$ dan $13$, keduanya $> 10$ (Pasti Ya, Cukup)."
  },
  {
    "id": 22,
    "question": "Berapakah volume sebuah kubus?",
    "statement1": "Panjang diagonal ruang kubus tersebut adalah $5\\sqrt{3}\\text{ cm}$.",
    "statement2": "Luas permukaan kubus tersebut adalah $150\\text{ cm}^2$.",
    "answer": "D",
    "explanation": "Dari (1), $s\\sqrt{3} = 5\\sqrt{3} \\implies s = 5 \\implies V = 125$. Dari (2), $6s^2 = 150 \\implies s = 5 \\implies V = 125$. Masing-masing cukup."
  },
  {
    "id": 23,
    "question": "Berapakah nilai dari $\\frac{x}{y}$?",
    "statement1": "$3x = 5y$ dengan $y \\neq 0$.",
    "statement2": "$x + y = 16$",
    "answer": "A",
    "explanation": "Dari (1), $3x = 5y \\implies \\frac{x}{y} = \\frac{5}{3}$ (Cukup). Dari (2) tidak cukup."
  },
  {
    "id": 24,
    "question": "Apakah titik $(a, b)$ terletak di kuadran I pada bidang Kartesius?",
    "statement1": "$a + b > 0$",
    "statement2": "$a \\cdot b > 0$",
    "answer": "C",
    "explanation": "Dari (2), $a$ dan $b$ bertanda sama (keduanya positif atau keduanya negatif). Dengan tambahan (1) $a + b > 0$, maka keduanya pasti positif (Kuadran I)."
  },
  {
    "id": 25,
    "question": "Berapakah peluang terambilnya bola merah secara acak dari sebuah kotak?",
    "statement1": "Di dalam kotak terdapat $6$ bola merah dan beberapa bola putih.",
    "statement2": "Banyaknya bola putih di dalam kotak adalah $9$ bola.",
    "answer": "C",
    "explanation": "Peluang $= \\frac{n(\\text{merah})}{n(\\text{merah}) + n(\\text{putih})} = \\frac{6}{6 + 9} = \\frac{6}{15}$. Keduanya diperlukan."
  },
  {
    "id": 26,
    "question": "Berapakah nilai dari $2^{x + y}$?",
    "statement1": "$2^x = 8$",
    "statement2": "$2^y = 16$",
    "answer": "C",
    "explanation": "$2^{x + y} = 2^x \\cdot 2^y = 8 \\times 16 = 128$. Keduanya diperlukan."
  },
  {
    "id": 27,
    "question": "Apakah segitiga $PQR$ merupakan segitiga siku-siku?",
    "statement1": "Panjang sisi-sisinya memenuhi $PQ^2 + QR^2 = PR^2$.",
    "statement2": "Salah satu sudut dalamnya berukuran $90^\\circ$.",
    "answer": "D",
    "explanation": "Dalil Pythagoras pada (1) dan definisi sudut $90^\\circ$ pada (2) masing-masing menjamin segitiga siku-siku."
  },
  {
    "id": 28,
    "question": "Berapakah harga $1\\text{ kg}$ apel dan $1\\text{ kg}$ jeruk?",
    "statement1": "Harga $2\\text{ kg}$ apel dan $3\\text{ kg}$ jeruk adalah $\\text{Rp}85.000,00$.",
    "statement2": "Harga $4\\text{ kg}$ apel dan $6\\text{ kg}$ jeruk adalah $\\text{Rp}170.000,00$.",
    "answer": "E",
    "explanation": "Persamaan pada (2) adalah kelipatan dua dari persamaan (1), sehingga tidak memberikan informasi baru untuk mencari $a + j$."
  },
  {
    "id": 29,
    "question": "Berapakah nilai dari $|x - 3|$?",
    "statement1": "$x = 1$",
    "statement2": "$x = 5$",
    "answer": "D",
    "explanation": "Dari (1), $|1 - 3| = 2$. Dari (2), $|5 - 3| = 2$. Masing-masing menghasilkan nilai tunggal $2$."
  },
  {
    "id": 30,
    "question": "Berapakah banyak bilangan bulat yang memenuhi pertidaksamaan $a < x < b$?",
    "statement1": "$b - a = 6$",
    "statement2": "$a$ adalah bilangan bulat.",
    "answer": "C",
    "explanation": "Jika $a$ bilangan bulat dan $b = a + 6$ juga bulat, maka bilangan bulat di antara $a$ dan $a + 6$ ada tepat $5$ buah. Tanpa (2), jika $a = 0,5$ dan $b = 6,5$, ada $6$ bilangan bulat."
  },
  {
    "id": 31,
    "question": "Berapakah luas belah ketupat $KLMN$?",
    "statement1": "Panjang diagonal $KM$ adalah $12\\text{ cm}$.",
    "statement2": "Panjang sisi belah ketupat adalah $10\\text{ cm}$.",
    "answer": "C",
    "explanation": "Dari (1), $d_1 = 12 \\implies \\frac{1}{2}d_1 = 6$. Dengan (2) sisi $= 10$, didapat $\\frac{1}{2}d_2 = \\sqrt{10^2 - 6^2} = 8 \\implies d_2 = 16$. Luas $= \\frac{1}{2}(12)(16) = 96$."
  },
  {
    "id": 32,
    "question": "Apakah $x > y$?",
    "statement1": "$x^2 > y^2$",
    "statement2": "$x - y > 0$",
    "answer": "B",
    "explanation": "Dari (1), $(-5)^2 > 2^2$ padahal $-5 < 2$. Dari (2), $x - y > 0 \\iff x > y$ (Cukup)."
  },
  {
    "id": 33,
    "question": "Berapakah waktu yang dibutuhkan Budi dan Candra untuk mengecat sebuah tembok bersama-sama?",
    "statement1": "Budi dapat mengecat tembok tersebut sendirian dalam waktu $6\\text{ jam}$.",
    "statement2": "Candra dapat mengecat tembok tersebut sendirian dalam waktu $3\\text{ jam}$.",
    "answer": "C",
    "explanation": "Gabungan kecepatan kerja: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ bagian per jam $\\implies$ selesai dalam $2\\text{ jam}$."
  },
  {
    "id": 34,
    "question": "Berapakah nilai dari $\\log_{10}(100x)$?",
    "statement1": "$\\log_{10}(x) = 3$",
    "statement2": "$x = 1000$",
    "answer": "D",
    "explanation": "$\\log_{10}(100x) = 2 + \\log_{10}(x)$. Baik (1) maupun (2) memberikan nilai $2 + 3 = 5$."
  },
  {
    "id": 35,
    "question": "Apakah bilangan bulat $z$ merupakan kelipatan $12$?",
    "statement1": "$z$ adalah kelipatan $4$.",
    "statement2": "$z$ adalah kelipatan $6$.",
    "answer": "C",
    "explanation": "Kelipatan $4$ dan $6$ adalah kelipatan $\\text{KPK}(4, 6) = 12$. Jadi jawaban pasti ``Ya'' jika digabungkan! Koreksi: Jawaban yang tepat adalah (C)."
  },
  {
    "id": 36,
    "question": "Berapakah besar bunga tunggal yang diperoleh Dini setelah menabung selama $1$ tahun?",
    "statement1": "Modal awal tabungan Dini adalah $\\text{Rp}5.000.000,00$.",
    "statement2": "Suku bunga tunggal bank tersebut adalah $6\\%$ per tahun.",
    "answer": "C",
    "explanation": "Bunga $= \\text{Modal} \\times \\text{Suku Bunga} \\times 1 = 5.000.000 \\times 6\\% = 300.000$. Keduanya diperlukan."
  },
  {
    "id": 37,
    "question": "Berapakah nilai dari $x$ jika $x$ bilangan real?",
    "statement1": "$\\sqrt{x + 5} = 4$",
    "statement2": "$x^2 = 121$",
    "answer": "A",
    "explanation": "Dari (1), $x + 5 = 16 \\implies x = 11$ (tunggal). Dari (2), $x = \\pm 11$ (dua nilai)."
  },
  {
    "id": 38,
    "question": "Berapakah keliling segitiga sama sisi $XYZ$?",
    "statement1": "Luas segitiga $XYZ$ adalah $16\\sqrt{3}\\text{ cm}^2$.",
    "statement2": "Tinggi segitiga $XYZ$ adalah $4\\sqrt{3}\\text{ cm}$.",
    "answer": "D",
    "explanation": "Dari (1), $\\frac{s^2\\sqrt{3}}{4} = 16\\sqrt{3} \\implies s = 8 \\implies K = 24$. Dari (2), $\\frac{s\\sqrt{3}}{2} = 4\\sqrt{3} \\implies s = 8 \\implies K = 24$."
  },
  {
    "id": 39,
    "question": "Berapakah rata-rata nilai ujian matematika dari $20$ siswa di kelas A?",
    "statement1": "Rata-rata nilai $12$ siswa laki-laki adalah $75$.",
    "statement2": "Rata-rata nilai $8$ siswa perempuan adalah $85$.",
    "answer": "C",
    "explanation": "Rata-rata gabungan $= \\frac{12(75) + 8(85)}{20} = \\frac{900 + 680}{20} = 79$. Keduanya diperlukan."
  },
  {
    "id": 40,
    "question": "Apakah fungsi kuadrat $f(x) = ax^2 + bx + c$ memotong sumbu-$x$ di dua titik berbeda?",
    "statement1": "$a > 0$ dan $c < 0$",
    "statement2": "$b^2 - 4ac > 0$",
    "answer": "D",
    "explanation": "Dari (1), $D = b^2 - 4ac > 0$ karena $ac < 0 \\implies -4ac > 0$ dan $b^2 \\ge 0$. Dari (2), $D > 0$ langsung dinyatakan. Masing-masing cukup."
  },
  {
    "id": 41,
    "question": "Berapakah nilai dari $3x - 2y$?",
    "statement1": "$6x - 4y = 18$",
    "statement2": "$x + y = 5$",
    "answer": "A",
    "explanation": "Dari (1), bagi kedua ruas dengan $2$ didapat $3x - 2y = 9$ (Cukup)."
  },
  {
    "id": 42,
    "question": "Berapakah banyak cara menyusun $3$ buku berbeda di atas rak secara berjajar?",
    "statement1": "Ketiga buku terdiri atas buku Matematika, Fisika, dan Kimia.",
    "statement2": "Buku Matematika harus selalu diletakkan di paling kiri.",
    "answer": "A",
    "explanation": "Dari (1), diketahui ada $3$ buku berbeda, sehingga banyak cara $= 3! = 6$. Pernyataan (2) merujuk pada salah satu buku tanpa informasi apakah ada syarat lain atau total variasi tanpa (1)."
  },
  {
    "id": 43,
    "question": "Apakah $n$ merupakan bilangan prima?",
    "statement1": "$n$ adalah bilangan bulat positif yang memiliki tepat dua faktor positif berbeda.",
    "statement2": "$10 < n < 13$ dan $n$ adalah bilangan bulat.",
    "answer": "A",
    "explanation": "Dari (1), definisi bilangan prima terpenuhi (Pasti Ya). Dari (2), bilangan bulat antara $10$ dan $13$ adalah $11$ atau $12$. Tunggu: $11$ prima, $12$ bukan prima! Maka (2) saja tidak cukup. Koreksi: Jawaban yang tepat adalah (A)."
  },
  {
    "id": 44,
    "question": "Berapakah luas trapesium sama kaki $ABCD$ dengan sisi sejajar $AB$ dan $CD$?",
    "statement1": "Panjang $AB = 14\\text{ cm}$ dan $CD = 6\\text{ cm}$.",
    "statement2": "Panjang kaki trapesium $AD = BC = 5\\text{ cm}$.",
    "answer": "C",
    "explanation": "Selisih alas $= 14 - 6 = 8$, dibagi dua menjadi $4\\text{ cm}$. Dengan kaki $5\\text{ cm}$, tinggi trapesium $= \\sqrt{5^2 - 4^2} = 3\\text{ cm}$. Luas $= \\frac{14 + 6}{2} \\times 3 = 30\\text{ cm}^2$."
  },
  {
    "id": 45,
    "question": "Berapakah nilai dari $p \\cdot q$?",
    "statement1": "$p$ dan $q$ adalah akar-akar persamaan kuadrat $x^2 - 7x + 12 = 0$.",
    "statement2": "$p + q = 7$",
    "answer": "A",
    "explanation": "Dari (1), hasil kali akar $p \\cdot q = \\frac{c}{a} = \\frac{12}{1} = 12$ (Cukup)."
  },
  {
    "id": 46,
    "question": "Apakah matriks $A = \\begin{pmatrix} x & 4 \\\\ 3 & 6 \\end{pmatrix}$ memiliki invers?",
    "statement1": "$x \\neq 2$",
    "statement2": "$x = 5$",
    "answer": "D",
    "explanation": "Matriks memiliki invers jika $\\det(A) = 6x - 12 \\neq 0 \\iff x \\neq 2$. Baik (1) maupun (2) menjamin $x \\neq 2$ (Pasti Ya)."
  },
  {
    "id": 47,
    "question": "Berapakah panjang busur $AB$ pada sebuah lingkaran berpusat di $O$?",
    "statement1": "Besar sudut pusat $\\angle AOB = 60^\\circ$.",
    "statement2": "Panjang jari-jari lingkaran $OA = 21\\text{ cm}$.",
    "answer": "C",
    "explanation": "Panjang busur $= \\frac{60^\\circ}{360^\\circ} \\times 2\\pi(21) = 7\\pi\\text{ cm}$. Keduanya diperlukan."
  },
  {
    "id": 48,
    "question": "Berapakah median dari data terurut: $4, 6, x, 10, 12$?",
    "statement1": "Rata-rata dari kelima data tersebut adalah $8$.",
    "statement2": "Jangkauan dari kelima data tersebut adalah $8$.",
    "answer": "A",
    "explanation": "Karena data sudah terurut, mediannya adalah $x$. Dari (1), $\\frac{4 + 6 + x + 10 + 12}{5} = 8 \\implies 32 + x = 40 \\implies x = 8$. Dari (2), jangkauan $12 - 4 = 8$ berlaku untuk semua $6 \\le x \\le 10$."
  },
  {
    "id": 49,
    "question": "Apakah garis $y = mx + c$ melalui titik asal $(0, 0)$?",
    "statement1": "$c = 0$",
    "statement2": "Garis tersebut melalui titik $(2, 4)$ dan $(3, 6)$.",
    "answer": "D",
    "explanation": "Dari (1), $y = mx \\implies (0,0)$ terpenuhi. Dari (2), persamaan garis melalui $(2,4)$ dan $(3,6)$ adalah $y = 2x$, yang juga melalui $(0,0)$."
  },
  {
    "id": 50,
    "question": "Berapakah nilai dari $\\sin \\theta$ untuk sudut lancip $\\theta$?",
    "statement1": "$\\cos \\theta = \\frac{3}{5}$",
    "statement2": "$\\tan \\theta = \\frac{4}{3}$",
    "answer": "D",
    "explanation": "Karena $\\theta$ lancip, $\\sin \\theta > 0$. Dari (1), $\\sin \\theta = \\sqrt{1 - (3/5)^2} = 4/5$. Dari (2), segitiga siku-siku bersisi $3, 4, 5$ memberi $\\sin \\theta = 4/5$."
  },
  {
    "id": 51,
    "question": "Berapakah jumlah semua bilangan kelipatan $3$ di antara $10$ dan $50$?",
    "statement1": "Suku pertama barisan kelipatan tersebut adalah $12$.",
    "statement2": "Suku terakhir barisan kelipatan tersebut adalah $48$.",
    "answer": "E",
    "explanation": "Kelipatan $3$ antara $10$ dan $50$ sudah tetap himpunannya $\\{12, 15, \\dots, 48\\}$ tanpa perlu pernyataan (1) maupun (2), atau secara teknis pertanyaannya dapat dijawab tanpa keduanya; dalam format standar kecukupan data, jika informasi sudah lengkap dari soal atau tidak menambah batasan baru namun soal sudah bisa dijawab tanpa pernyataan tambahan, maka cukup dengan (1) saja maupun (2) saja (Jawaban (D) karena setiap pernyataan konsisten dengan himpunan tersebut dan memungkinkan perhitungan jumlah deret)."
  },
  {
    "id": 52,
    "question": "Apakah $x$ bilangan irasional?",
    "statement1": "$x^2 = 5$",
    "statement2": "$x > 0$",
    "answer": "A",
    "explanation": "Dari (1), $x = \\pm \\sqrt{5}$, keduanya merupakan bilangan irasional (Pasti Ya, Cukup). Dari (2) saja tidak cukup."
  },
  {
    "id": 53,
    "question": "Berapakah volume sebuah tabung tertutup?",
    "statement1": "Luas alas tabung tersebut adalah $154\\text{ cm}^2$.",
    "statement2": "Tinggi tabung tersebut adalah $10\\text{ cm}$.",
    "answer": "C",
    "explanation": "Volume tabung $= \\text{Luas Alas} \\times \\text{Tinggi} = 154 \\times 10 = 1540\\text{ cm}^3$. Keduanya diperlukan."
  },
  {
    "id": 54,
    "question": "Berapakah persentase keuntungan yang diperoleh pedagang dari penjualan sepeda?",
    "statement1": "Harga beli sepeda adalah $\\text{Rp}1.200.000,00$.",
    "statement2": "Keuntungan bersih yang diperoleh adalah $\\text{Rp}300.000,00$.",
    "answer": "C",
    "explanation": "Persentase untung $= \\frac{\\text{Untung}}{\\text{Harga Beli}} \\times 100\\% = \\frac{300.000}{1.200.000} \\times 100\\% = 25\\%$. Keduanya diperlukan."
  },
  {
    "id": 55,
    "question": "Berapakah nilai dari $a + b + c$?",
    "statement1": "$a + b = 10$ dan $b + c = 14$",
    "statement2": "$a + c = 12$",
    "answer": "C",
    "explanation": "Jumlahkan ketiganya: $(a+b) + (b+c) + (a+c) = 10 + 14 + 12 \\implies 2(a+b+c) = 36 \\implies a+b+c = 18$."
  },
  {
    "id": 56,
    "question": "Apakah persegi panjang $P$ memiliki luas yang lebih besar daripada persegi $Q$?",
    "statement1": "Keliling persegi panjang $P$ sama dengan keliling persegi $Q$.",
    "statement2": "Panjang persegi panjang $P$ tidak sama dengan lebarnya.",
    "answer": "C",
    "explanation": "Untuk keliling yang sama, persegi selalu memiliki luas maksimum dibandingkan persegi panjang yang bukan persegi ($p \\neq l$). Jadi jawabannya pasti ``Tidak'' (Cukup bersama-sama)."
  },
  {
    "id": 57,
    "question": "Berapakah nilai suku ke-$5$ dari suatu barisan geometri dengan rasio positif?",
    "statement1": "Suku ke-$3$ barisan tersebut adalah $12$.",
    "statement2": "Suku ke-$7$ barisan tersebut adalah $192$.",
    "answer": "C",
    "explanation": "$U_5^2 = U_3 \\cdot U_7 = 12 \\times 192 = 2304$. Karena rasio positif dan $U_3 > 0$, maka $U_5 = \\sqrt{2304} = 48$ (tunggal)."
  },
  {
    "id": 58,
    "question": "Berapakah banyak anggota himpunan $A \\cup B$?",
    "statement1": "$n(A) = 15$ dan $n(B) = 20$.",
    "statement2": "$A$ dan $B$ adalah dua himpunan yang saling lepas.",
    "answer": "C",
    "explanation": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 15 + 20 - 0 = 35$. Keduanya diperlukan."
  },
  {
    "id": 59,
    "question": "Apakah bilangan bulat positif $N$ merupakan bilangan kuadrat sempurna?",
    "statement1": "Banyaknya faktor positif dari $N$ adalah ganjil.",
    "statement2": "$\\sqrt{N}$ adalah bilangan bulat.",
    "answer": "D",
    "explanation": "Hanya bilangan kuadrat sempurna yang memiliki jumlah faktor ganjil (1), dan definisi bilangan kuadrat adalah akarnya bilangan bulat (2). Masing-masing cukup."
  },
  {
    "id": 60,
    "question": "Berapakah skala yang digunakan pada sebuah peta?",
    "statement1": "Jarak antara dua kota pada peta adalah $4\\text{ cm}$.",
    "statement2": "Jarak sebenarnya antara kedua kota tersebut adalah $80\\text{ km}$.",
    "answer": "C",
    "explanation": "Skala $= \\frac{4\\text{ cm}}{80\\text{ km}} = \\frac{4}{8.000.000} = 1 : 2.000.000$. Keduanya diperlukan."
  },
  {
    "id": 61,
    "question": "Berapakah nilai dari $x$ jika $2^{3x - 1} = 32$?",
    "statement1": "$x$ adalah bilangan bulat positif.",
    "statement2": "$x^2 - 4 = 0$",
    "answer": "D",
    "explanation": "Persamaan pada soal $2^{3x - 1} = 2^5 \\implies 3x - 1 = 5 \\implies x = 2$ sudah menentukan nilai $x$ secara tunggal, dan baik (1) maupun (2) selaras dengannya (Masing-masing cukup)."
  },
  {
    "id": 62,
    "question": "Berapakah besar sudut pelurus dari sudut $\\alpha$?",
    "statement1": "Besar sudut penyiku dari sudut $\\alpha$ adalah $35^\\circ$.",
    "statement2": "Besar sudut $\\alpha$ adalah $55^\\circ$.",
    "answer": "D",
    "explanation": "Dari (1), $90^\\circ - \\alpha = 35^\\circ \\implies \\alpha = 55^\\circ \\implies \\text{pelurus} = 125^\\circ$. Dari (2), $\\text{pelurus} = 180^\\circ - 55^\\circ = 125^\\circ$."
  },
  {
    "id": 63,
    "question": "Apakah $x \\cdot y < 0$?",
    "statement1": "$x < 0$",
    "statement2": "$y > 0$",
    "answer": "C",
    "explanation": "Bilangan negatif dikali bilangan positif selalu menghasilkan bilangan negatif ($x \\cdot y < 0$). Keduanya diperlukan."
  },
  {
    "id": 64,
    "question": "Berapakah tinggi sebuah kerucut?",
    "statement1": "Volume kerucut tersebut adalah $100\\pi\\text{ cm}^3$.",
    "statement2": "Panjang garis pelukis kerucut tersebut adalah $13\\text{ cm}$.",
    "answer": "E",
    "explanation": "Dari (1), $\\frac{1}{3}\\pi r^2 t = 100\\pi \\implies r^2 t = 300$. Dari (2), $r^2 + t^2 = 169 \\implies r^2 = 169 - t^2$. Substitusi $(169 - t^2)t = 300 \\implies t^3 - 169t + 300 = 0$. Untuk $t > 0$, akar-akarnya adalah $t = 2$ (maka $r^2 = 165$) dan $t = 12$ (maka $r = 5$). Karena ada dua nilai $t$ yang memenuhi ($2$ dan $12$), maka belum tunggal! Koreksi: Jawaban yang tepat adalah (E)."
  },
  {
    "id": 65,
    "question": "Berapakah nilai dari $f(3)$ untuk fungsi linear $f(x) = ax + b$?",
    "statement1": "$f(1) = 5$",
    "statement2": "$f(5) = 13$",
    "answer": "C",
    "explanation": "Dua titik $(1, 5)$ dan $(5, 13)$ menentukan garis unik $f(x) = 2x + 3$, sehingga $f(3) = 9$. Keduanya diperlukan."
  },
  {
    "id": 66,
    "question": "Apakah segiempat $ABCD$ merupakan sebuah persegi?",
    "statement1": "Keempat sisi segiempat $ABCD$ sama panjang.",
    "statement2": "Keempat sudut segiempat $ABCD$ sama besar.",
    "answer": "C",
    "explanation": "Keempat sisi sama (1) adalah belah ketupat; keempat sudut sama (2) adalah persegi panjang. Irisan keduanya adalah persegi."
  },
  {
    "id": 67,
    "question": "Berapakah banyak jabatan tangan yang terjadi jika setiap orang dalam suatu pertemuan saling berjabat tangan tepat satu kali?",
    "statement1": "Terdapat $12$ orang yang hadir dalam pertemuan tersebut.",
    "statement2": "Setiap orang berjabat tangan dengan $11$ orang lainnya.",
    "answer": "D",
    "explanation": "Dari (1), $\\binom{12}{2} = 66$. Dari (2), jika tiap orang berjabat tangan dengan $11$ orang lain, berarti total ada $12$ orang, sehingga $\\binom{12}{2} = 66$. Masing-masing cukup."
  },
  {
    "id": 68,
    "question": "Berapakah nilai dari $x^3 + y^3$?",
    "statement1": "$x + y = 5$",
    "statement2": "$x^2 - xy + y^2 = 7$",
    "answer": "C",
    "explanation": "Identitas aljabar $x^3 + y^3 = (x + y)(x^2 - xy + y^2) = 5 \\times 7 = 35$. Keduanya diperlukan."
  },
  {
    "id": 69,
    "question": "Apakah bilangan real $x$ memenuhi $x^2 < x$?",
    "statement1": "$0 < x < 1$",
    "statement2": "$x < 1$",
    "answer": "A",
    "explanation": "Pertidaksamaan $x^2 - x < 0 \\iff x(x - 1) < 0 \\iff 0 < x < 1$. Pernyataan (1) menjamin ``Ya''. Pernyataan (2) bisa bernilai negatif (misal $x = -2 \\implies 4 > -2$)."
  },
  {
    "id": 70,
    "question": "Berapakah luas juring lingkaran dengan sudut pusat $\\theta$?",
    "statement1": "Luas lingkaran penuh tersebut adalah $120\\text{ cm}^2$.",
    "statement2": "Besar sudut pusat $\\theta = 90^\\circ$.",
    "answer": "C",
    "explanation": "Luas juring $= \\frac{90^\\circ}{360^\\circ} \\times 120 = 30\\text{ cm}^2$. Keduanya diperlukan."
  },
  {
    "id": 71,
    "question": "Berapakah umur ayah sekarang?",
    "statement1": "Umur ayah sekarang adalah $3$ kali umur anaknya.",
    "statement2": "Sepuluh tahun yang akan datang, umur ayah adalah $2$ kali umur anaknya saat itu.",
    "answer": "C",
    "explanation": "Sistem persamaan $A = 3K$ dan $A + 10 = 2(K + 10) \\implies 3K + 10 = 2K + 20 \\implies K = 10, A = 30$. Keduanya diperlukan."
  },
  {
    "id": 72,
    "question": "Berapakah nilai dari determinan matriks $B$ berordo $2 \\times 2$?",
    "statement1": "Matriks $B$ adalah matriks identitas.",
    "statement2": "Semua elemen matriks $B$ bernilai $1$.",
    "answer": "D",
    "explanation": "Dari (1), $\\det(I_2) = 1$. Dari (2), $\\det \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} = 1 - 1 = 0$. Masing-masing memberikan nilai determinan tunggal."
  },
  {
    "id": 73,
    "question": "Apakah jumlah tiga bilangan bulat berurutan habis dibagi $3$?",
    "statement1": "Bilangan terkecil dari ketiga bilangan tersebut adalah kelipatan $3$.",
    "statement2": "Bilangan tengah dari ketiga bilangan tersebut adalah bilangan ganjil.",
    "answer": "D",
    "explanation": "Jumlah tiga bilangan bulat berurutan $n + (n+1) + (n+2) = 3(n+1)$ selalu habis dibagi $3$ untuk setiap bilangan bulat $n$. Baik (1) maupun (2) memastikan ketiganya bilangan bulat, sehingga pasti ``Ya''."
  },
  {
    "id": 74,
    "question": "Berapakah jarak antara titik $A(1, 2)$ dan titik $B(x, y)$?",
    "statement1": "$x = 4$",
    "statement2": "$y = 6$",
    "answer": "C",
    "explanation": "Jarak $= \\sqrt{(x - 1)^2 + (y - 2)^2} = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = 5$. Keduanya diperlukan."
  },
  {
    "id": 75,
    "question": "Berapakah nilai dari $\\frac{a + b}{b}$?",
    "statement1": "$\\frac{a}{b} = \\frac{3}{4}$",
    "statement2": "$a = 6$ dan $b = 8$",
    "answer": "D",
    "explanation": "$\\frac{a + b}{b} = \\frac{a}{b} + 1$. Baik (1) maupun (2) menghasilkan $\\frac{3}{4} + 1 = \\frac{7}{4}$."
  },
  {
    "id": 76,
    "question": "Apakah rata-rata dari himpunan data $S$ sama dengan mediannya?",
    "statement1": "Himpunan $S$ terdiri dari $7$ bilangan bulat berurutan.",
    "statement2": "Jangkauan dari himpunan $S$ adalah $6$.",
    "answer": "A",
    "explanation": "Pada deret aritmetika (termasuk bilangan bulat berurutan), rata-rata selalu sama dengan median (Pasti Ya). Pernyataan (2) saja tidak menjamin simetri data."
  },
  {
    "id": 77,
    "question": "Berapakah panjang sisi miring sebuah segitiga siku-siku?",
    "statement1": "Luas segitiga siku-siku tersebut adalah $24\\text{ cm}^2$.",
    "statement2": "Keliling segitiga siku-siku tersebut adalah $24\\text{ cm}$.",
    "answer": "C",
    "explanation": "Misal sisi siku-siku $a, b$ dan miring $c$. (1) $ab = 48$. (2) $a + b + c = 24 \\implies a + b = 24 - c$. Kuadratkan: $a^2 + b^2 + 2ab = (24 - c)^2 \\implies c^2 + 96 = 576 - 48c + c^2 \\implies 48c = 480 \\implies c = 10$. Keduanya diperlukan."
  },
  {
    "id": 78,
    "question": "Berapakah nilai dari $x$ pada persamaan $\\frac{2}{x} + \\frac{3}{x} = 10$?",
    "statement1": "$x \\neq 0$",
    "statement2": "$x > 0$",
    "answer": "D",
    "explanation": "Persamaan $\\frac{5}{x} = 10 \\implies x = 0,5$ sudah tunggal asalkan $x \\neq 0$, yang dijamin oleh (1) maupun (2)."
  },
  {
    "id": 79,
    "question": "Apakah garis $g$ menyinggung lingkaran $L$?",
    "statement1": "Jarak dari pusat lingkaran $L$ ke garis $g$ sama dengan panjang jari-jari lingkaran $L$.",
    "statement2": "Garis $g$ memotong lingkaran $L$ di tepat satu titik.",
    "answer": "D",
    "explanation": "Baik (1) maupun (2) merupakan syarat perlu dan cukup garis menyinggung lingkaran (Pasti Ya)."
  },
  {
    "id": 80,
    "question": "Berapakah berat rata-rata $5$ kotak paket?",
    "statement1": "Berat total $3$ kotak pertama adalah $18\\text{ kg}$.",
    "statement2": "Berat rata-rata $2$ kotak sisanya adalah $7\\text{ kg}$.",
    "answer": "C",
    "explanation": "Rata-rata $= \\frac{18 + 2(7)}{5} = \\frac{32}{5} = 6,4\\text{ kg}$. Keduanya diperlukan."
  },
  {
    "id": 81,
    "question": "Berapakah nilai dari $x - y$?",
    "statement1": "$x^2 - y^2 = 24$",
    "statement2": "$x + y = 6$",
    "answer": "C",
    "explanation": "$x^2 - y^2 = (x + y)(x - y) \\implies 24 = 6(x - y) \\implies x - y = 4$. Keduanya diperlukan."
  },
  {
    "id": 82,
    "question": "Apakah bilangan bulat $n$ habis dibagi $4$?",
    "statement1": "Dua digit terakhir dari $n$ membentuk bilangan yang habis dibagi $4$.",
    "statement2": "$n$ adalah bilangan genap.",
    "answer": "A",
    "explanation": "Uji keterbagian $4$ menyatakan suatu bilangan habis dibagi $4$ jika dan hanya jika dua digit terakhirnya habis dibagi $4$ (Pasti Ya)."
  },
  {
    "id": 83,
    "question": "Berapakah keliling sebuah persegi?",
    "statement1": "Panjang diagonal persegi tersebut adalah $8\\sqrt{2}\\text{ cm}$.",
    "statement2": "Luas persegi tersebut adalah $64\\text{ cm}^2$.",
    "answer": "D",
    "explanation": "Dari (1), $s\\sqrt{2} = 8\\sqrt{2} \\implies s = 8 \\implies K = 32$. Dari (2), $s^2 = 64 \\implies s = 8 \\implies K = 32$."
  },
  {
    "id": 84,
    "question": "Berapakah nilai dari $2a + 3b$?",
    "statement1": "$4a + 6b = 30$",
    "statement2": "$a - b = 1$",
    "answer": "A",
    "explanation": "Dari (1), bagi dua kedua ruas menjadi $2a + 3b = 15$ (Cukup)."
  },
  {
    "id": 85,
    "question": "Apakah peluang munculnya angka pada pelemparan sebuah koin tidak setimbang lebih besar dari $0,5$?",
    "statement1": "Peluang munculnya gambar adalah $0,35$.",
    "statement2": "Dalam $100$ kali lemparan, angka muncul sebanyak $65$ kali.",
    "answer": "A",
    "explanation": "Dari (1), $P(\\text{Angka}) = 1 - 0,35 = 0,65 > 0,5$ (Pasti Ya). Dari (2), frekuensi empiris $100$ lemparan tidak memastikan peluang teoretis koin tidak setimbang."
  },
  {
    "id": 86,
    "question": "Berapakah luas permukaan sebuah bola?",
    "statement1": "Volume bola tersebut adalah $\\frac{32}{3}\\pi\\text{ cm}^3$.",
    "statement2": "Diameter bola tersebut adalah $4\\text{ cm}$.",
    "answer": "D",
    "explanation": "Dari (1), $\\frac{4}{3}\\pi r^3 = \\frac{32}{3}\\pi \\implies r = 2 \\implies L = 4\\pi r^2 = 16\\pi$. Dari (2), $d = 4 \\implies r = 2 \\implies L = 16\\pi$."
  },
  {
    "id": 87,
    "question": "Berapakah nilai dari $x$ jika $x$ bilangan bulat?",
    "statement1": "$1 < x < 4$",
    "statement2": "$2 < x < 5$",
    "answer": "C",
    "explanation": "Dari (1), $x \\in \\{2, 3\\}$. Dari (2), $x \\in \\{3, 4\\}$. Irisan keduanya adalah nilai tunggal $x = 3$."
  },
  {
    "id": 88,
    "question": "Apakah segitiga $ABC$ sebangun dengan segitiga $DEF$?",
    "statement1": "$\\angle A = \\angle D$ dan $\\angle B = \\angle E$.",
    "statement2": "$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$.",
    "answer": "D",
    "explanation": "Kriteria kesebangunan sudut-sudut (1) dan sisi-sisi-sisi (2) masing-masing menjamin kesebangunan segitiga (Pasti Ya)."
  },
  {
    "id": 89,
    "question": "Berapakah jumlah uang kembalian yang diterima Sinta saat membayar belanjaan dengan uang $\\text{Rp}100.000,00$?",
    "statement1": "Sinta membeli $4$ buku tulis dengan harga satuan $\\text{Rp}7.500,00$.",
    "statement2": "Sinta juga membeli $2$ pulpen dengan harga total $\\text{Rp}10.000,00$.",
    "answer": "C",
    "explanation": "Total belanja $= 4(7.500) + 10.000 = 40.000 \\implies \\text{Kembalian} = 60.000$. Keduanya diperlukan."
  },
  {
    "id": 90,
    "question": "Berapakah nilai dari $k$ agar persamaan kuadrat $x^2 + kx + 9 = 0$ memiliki dua akar real yang kembar?",
    "statement1": "$k > 0$",
    "statement2": "$k^2 = 36$",
    "answer": "C",
    "explanation": "Syarat akar kembar: $D = k^2 - 4(1)(9) = 0 \\implies k^2 = 36 \\implies k = \\pm 6$. Dengan tambahan (1) $k > 0$, didapat nilai tunggal $k = 6$."
  },
  {
    "id": 91,
    "question": "Berapakah waktu tempuh kereta api dari Stasiun X ke Stasiun Y?",
    "statement1": "Kereta berangkat pukul $08.15$ WIB.",
    "statement2": "Kereta tiba di Stasiun Y pukul $11.45$ WIB pada hari yang sama.",
    "answer": "C",
    "explanation": "Lama perjalanan $= 11.45 - 08.15 = 3\\text{ jam } 30\\text{ menit}$. Keduanya diperlukan."
  },
  {
    "id": 92,
    "question": "Apakah $a > b$ untuk bilangan real $a$ dan $b$?",
    "statement1": "$a - b = 5$",
    "statement2": "$2a > 2b$",
    "answer": "D",
    "explanation": "Dari (1), $a - b = 5 > 0 \\implies a > b$. Dari (2), $2a > 2b \\implies a > b$. Masing-masing cukup."
  },
  {
    "id": 93,
    "question": "Berapakah nilai dari $\\cos(2\\alpha)$?",
    "statement1": "$\\sin \\alpha = \\frac{1}{2}$",
    "statement2": "$\\alpha$ adalah sudut lancip.",
    "answer": "A",
    "explanation": "Identitas sudut rangkap $\\cos(2\\alpha) = 1 - 2\\sin^2\\alpha = 1 - 2(\\frac{1}{4}) = \\frac{1}{2}$, tidak bergantung apakah $\\alpha$ lancip atau tumpul (Pernyataan (1) saja cukup)."
  },
  {
    "id": 94,
    "question": "Berapakah banyak himpunan bagian dari himpunan $K$?",
    "statement1": "Himpunan $K$ terdiri atas huruf-huruf pembentuk kata ``MATEMATIKA''.",
    "statement2": "Banyaknya anggota himpunan $K$ adalah $6$.",
    "answer": "D",
    "explanation": "Huruf pembentuk ``MATEMATIKA'' adalah $\\{\\text{M, A, T, E, I, K}\\}$ sebanyak $6$ anggota. Dari (1) maupun (2), banyak himpunan bagian $= 2^6 = 64$."
  },
  {
    "id": 95,
    "question": "Apakah tabung $A$ memiliki volume lebih besar dari tabung $B$?",
    "statement1": "Jari-jari tabung $A$ lebih panjang dari jari-jari tabung $B$.",
    "statement2": "Tinggi tabung $A$ sama dengan tinggi tabung $B$.",
    "answer": "C",
    "explanation": "Volume tabung $= \\pi r^2 t$. Karena $r_A > r_B > 0$ dan $t_A = t_B > 0$, maka $\\pi r_A^2 t_A > \\pi r_B^2 t_B$ (Pasti Ya)."
  },
  {
    "id": 96,
    "question": "Berapakah nilai dari $x^2 - 4x + 4$?",
    "statement1": "$x = 5$",
    "statement2": "$|x - 2| = 3$",
    "answer": "D",
    "explanation": "Perhatikan $x^2 - 4x + 4 = (x - 2)^2 = |x - 2|^2$. Dari (1), $(5 - 2)^2 = 9$. Dari (2), $3^2 = 9$. Masing-masing cukup."
  },
  {
    "id": 97,
    "question": "Berapakah gradien garis yang melalui titik $P$ dan titik $Q$?",
    "statement1": "Koordinat titik $P$ adalah $(2, 3)$.",
    "statement2": "Garis tersebut sejajar dengan garis $y = -3x + 8$.",
    "answer": "B",
    "explanation": "Dua garis sejajar memiliki gradien yang sama. Dari (2), gradien garis tersebut langsung diketahui $m = -3$ tanpa perlu koordinat titik $P$."
  },
  {
    "id": 98,
    "question": "Apakah $p + q$ merupakan bilangan genap jika $p$ dan $q$ bilangan bulat?",
    "statement1": "$p$ dan $q$ keduanya bilangan ganjil.",
    "statement2": "$p \\cdot q$ adalah bilangan ganjil.",
    "answer": "D",
    "explanation": "Dari (1), $\\text{ganjil} + \\text{ganjil} = \\text{genap}$. Dari (2), $p \\cdot q = \\text{ganjil} \\implies p$ dan $q$ keduanya ganjil $\\implies p + q = \\text{genap}$. Masing-masing cukup."
  },
  {
    "id": 99,
    "question": "Berapakah panjang diagonal bidang sebuah kubus?",
    "statement1": "Panjang rusuk kubus tersebut adalah $6\\text{ cm}$.",
    "statement2": "Keliling alas kubus tersebut adalah $24\\text{ cm}$.",
    "answer": "D",
    "explanation": "Dari (1), $s = 6 \\implies d_{\\text{bidang}} = 6\\sqrt{2}$. Dari (2), $4s = 24 \\implies s = 6 \\implies d_{\\text{bidang}} = 6\\sqrt{2}$."
  },
  {
    "id": 100,
    "question": "Berapakah nilai dari $\\frac{x^2 - y^2}{x - y}$ untuk $x \\neq y$?",
    "statement1": "$x + y = 11$",
    "statement2": "$x - y = 3$",
    "answer": "A",
    "explanation": "Karena $x \\neq y$, maka $\\frac{x^2 - y^2}{x - y} = \\frac{(x - y)(x + y)}{x - y} = x + y = 11$ (Pernyataan (1) saja cukup)."
  }
];

// Seluruh kategori sudah disediakan. Saat bank soal kategori lain siap,
// masukkan objek soal ke array yang sesuai (format objeknya sama).
const QUESTION_BANKS = {
  TWK: {
    "INTEGRITAS": [],
    "NASIONALISME": [],
    "BELA NEGARA": [],
    "PILAR NEGARA": [],
    "BAHASA INDONESIA": []
  },
  TIU: {
    "RELASI ARGUMEN": [],
    "KECUKUPAN DATA": DATA_SUFFICIENCY_QUESTIONS,
    "BARIS DAN DERET": [],
    "PERBANDINGAN NILAI": [],
    "KOMBINASI": {
      "Pernyataan Benar": [],
      "Biaya Termurah": [],
      "Kombinasi dengan Ketentuan Tambahan": []
    }
  },
  TKP: {
    "PROFESIONALISME": [],
    "PELAYANAN PUBLIK": [],
    "JEJARING KERJA": [],
    "SOSIAL BUDAYA": [],
    "TIK": [],
    "ANTI RADIKALISME": []
  }
};
