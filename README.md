# Ruang Latihan CPNS

Web app statis untuk latihan TWK, TIU, dan TKP. Proyek ini tidak memerlukan server, database online, akun, atau backend. Cukup unggah seluruh file ke repository GitHub dan aktifkan GitHub Pages.

## Isi folder

- `index.html` — kerangka laman, tab utama, area soal, navigasi, timer, hasil ujian, serta pemanggilan file CSS dan JavaScript.
- `styles.css` — seluruh tampilan, warna tema, layout desktop/mobile, tombol, kartu soal, dan animasi CSS.
- `data.js` — konfigurasi ujian dan bank soal. Saat ini berisi 100 soal Kecukupan Data dari file LaTeX yang dilampirkan, berikut kunci dan pembahasannya.
- `app.js` — logika tab, pengacakan paket, navigasi soal, timer, penilaian, review, dan animasi kembang api.

## Menjalankan di komputer

1. Ekstrak ZIP.
2. Buka `index.html` dengan browser modern.
3. Pastikan koneksi internet aktif agar MathJax dari CDN dapat merender rumus LaTeX.

Tidak perlu instalasi Node.js, Python, atau paket tambahan.

## Mengunggah ke GitHub Pages

1. Buat repository GitHub baru, misalnya `latihan-cpns`.
2. Unggah `index.html`, `styles.css`, `data.js`, dan `app.js` ke root repository.
3. Buka **Settings → Pages**.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
6. Tunggu proses deploy GitHub Pages selesai. URL situs akan muncul pada halaman Pages repository.

## Penjelasan bagian kode dan cara mengedit

### 1. Mengubah durasi dan jumlah soal — `data.js`

Di bagian paling atas:

```js
const EXAM_CONFIG = {
  questionsPerPackage: 10,
  durationMinutes: 30
};
```

- `questionsPerPackage`: jumlah soal acak per paket.
- `durationMinutes`: durasi hitung mundur dalam menit.

Ubah `30` menjadi durasi yang diinginkan. Algoritma akan mengambil maksimal sebanyak `questionsPerPackage` soal dari bank kategori aktif.

### 2. Menambah atau mengedit soal — `data.js`

Setiap soal menggunakan struktur berikut:

```js
{
  id: 101,
  question: "Berapakah nilai $x$?",
  statement1: "$x + 2 = 5$",
  statement2: "$2x = 6$",
  answer: "A",
  explanation: "Dari pernyataan (1), diperoleh $x=3$."
}
```

- `id` harus unik dalam satu bank soal.
- `question`: teks pertanyaan.
- `statement1` dan `statement2`: pernyataan (1) serta (2).
- `answer`: kunci jawaban, hanya `A`, `B`, `C`, `D`, atau `E`.
- `explanation`: pembahasan yang muncul pada halaman hasil.

Rumus dapat ditulis dengan LaTeX di antara tanda dolar, misalnya `$x^2 + y^2 = 25$`, `rac{1}{2}`, atau `\sqrt{16}`. Jangan menghapus tanda kutip dan koma pemisah properti saat mengedit objek JavaScript.

Saat ini array `DATA_SUFFICIENCY_QUESTIONS` berisi 100 soal dari dokumen sumber. Data itu dipasang pada `QUESTION_BANKS.TIU["KECUKUPAN DATA"]`.

### 3. Mengisi kategori lainnya — `data.js`

Objek `QUESTION_BANKS` sudah menyediakan susunan kategori TWK, TIU, dan TKP. Array kosong `[]` berarti kategori tersebut belum memiliki bank soal. Tambahkan objek soal dengan format yang sama seperti contoh di atas.

Untuk tiga jenis Kombinasi, datanya berada di:

- `QUESTION_BANKS.TIU.KOMBINASI["Pernyataan Benar"]`
- `QUESTION_BANKS.TIU.KOMBINASI["Biaya Termurah"]`
- `QUESTION_BANKS.TIU.KOMBINASI["Kombinasi dengan Ketentuan Tambahan"]`

Jangan mengubah struktur nama kategori jika tidak sekaligus mengubah `MAIN_SECTIONS` dan `SUBTOPICS` di `app.js`.

### 4. Mengubah pilihan jawaban — `app.js`

Cari objek `ANSWER_TEXT`. Di situlah teks pilihan A–E ditulis. Kunci dari setiap soal dibandingkan dengan pilihan yang dipilih peserta. Teks pilihan yang ditampilkan di panduan juga ditulis di bagian `guide-grid` dalam `index.html`, jadi ubah keduanya bila ingin mengganti redaksi.

### 5. Mengubah warna tema — `styles.css`

Cari selector:

```css
body[data-theme="twk"] { ... }
body[data-theme="tiu"] { ... }
body[data-theme="tkp"] { ... }
```

Variabel `--accent`, `--accent-dark`, dan `--accent-soft` mengatur warna utama, hover, dan latar lembut. Nilai awal: navy untuk TWK, hijau gelap untuk TIU, serta cokelat seragam untuk TKP.

### 6. Mengubah tampilan laman — `index.html` dan `styles.css`

`index.html` berisi struktur elemen dan ID, misalnya `questionText`, `timer`, `questionGrid`, dan `resultPanel`. `app.js` mencari elemen berdasarkan ID tersebut. Bila mengganti ID pada HTML, perbarui juga referensinya pada JavaScript.

`styles.css` mengatur ukuran, jarak, responsivitas, dan tampilan elemen. Bagian `@media` di akhir file mengatur tampilan layar ponsel.

### 7. Mengubah ambang kelulusan animasi — `app.js`

Di dalam fungsi `showResults()`, cari kondisi:

```js
if (score >= 80) {
```

Ubah angka `80` untuk mengatur batas animasi nilai tinggi. Kembang api dibuat langsung dengan Canvas, tanpa library berbayar atau dependensi tambahan.

## Alur kerja aplikasi

1. Saat laman dibuka atau pengguna memilih subtab, aplikasi mengambil bank kategori aktif.
2. Array diacak menggunakan algoritma Fisher–Yates, lalu dipotong menjadi 10 soal (atau sebanyak pengaturan paket jika bank berisi kurang dari itu).
3. Satu soal ditampilkan pada satu waktu. Peserta berpindah dengan tombol Sebelumnya/Selanjutnya atau kotak nomor.
4. Timer mulai berjalan hanya setelah tombol **Mulai Mengerjakan** ditekan.
5. Saat waktu habis atau peserta menekan **Akhiri Ujian**, aplikasi menghitung skor 10 poin per soal benar (dinormalisasi ke skala 100), lalu menampilkan hasil dan pembahasan.
6. Nilai 80 atau lebih memunculkan animasi selamat dan kembang api; nilai di bawah 80 memunculkan pesan penyemangat.
7. **Paket Soal Baru** mengambil sampel acak baru dari bank kategori aktif dan menghapus jawaban dari paket sebelumnya.

## Catatan penting

- Seluruh data dan jawaban diproses di browser peserta. Tidak ada pengiriman skor ke server.
- Jangan mengubah `id` soal menjadi sama karena aplikasi menggunakan ID untuk menyimpan jawaban.
- MathJax diambil dari CDN; rumus akan tampil lebih baik ketika peserta memiliki koneksi internet.
- Database soal diambil dari file `100_latihan_soal_kecukupan_data.tex`. Jika dokumen sumber menuliskan koreksi eksplisit pada kunci jawaban, huruf kunci final mengikuti koreksi eksplisit tersebut.
