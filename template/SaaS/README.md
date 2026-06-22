![HTML5](https://img.shields.io/badge/HTML5-100%25-orange)
![CSS3](https://img.shields.io/badge/CSS3-Premium-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![License](https://img.shields.io/badge/License-Commercial-purple)

# Nexify — Template Landing Page SaaS Modern

Template landing page SaaS dengan tema gelap (_dark mode_) premium, dibangun dengan HTML, CSS, dan JavaScript murni. Tanpa ketergantungan framework. Siap di-deploy.

![Pratinjau](assets/images/og-image.svg)

---

## ✨ Fitur

- **7 Bagian**: Navbar, Hero, Fitur, Cara Kerja, Harga, Testimoni, FAQ, CTA + Pendaftaran Email, Footer
- **Tema Gelap** secara default dengan aksen ungu/violet
- **Fully Responsive** — mobile, tablet, desktop
- **Navigasi Smooth Scroll** dengan pelacakan status aktif
- **Animasi Scroll** via Intersection Observer API (fade-in + slide-up)
- **Akordeon FAQ** interaktif dengan animasi buka/tutup
- **Form Pendaftaran Email** di bagian CTA
- **Halaman Tambahan**: Login/Daftar (`login.html`) dan halaman error 404 (`404.html`)
- **Siap SEO**: Tag Open Graph, meta deskripsi, HTML semantik
- **Aksesibel**: Label ARIA, ramah keyboard, dukungan `prefers-reduced-motion`
- **Cross-browser**: Berfungsi di Chrome, Firefox, Safari, Edge

---

## 📁 Struktur Proyek

```
nexify/
├── index.html              # Halaman utama (landing page)
├── login.html              # Halaman Login & Daftar
├── 404.html                # Halaman error
├── favicon.svg             # Favicon SVG
├── README.md               # File ini
└── assets/
    ├── css/
    │   └── style.css       # Semua gaya
    ├── js/
    │   └── main.js         # Semua JavaScript
    └── images/
        └── og-image.svg    # Gambar Open Graph
```

---

## 🚀 Mulai Cepat

### Opsi 1: Buka langsung

```bash
open index.html
```

### Opsi 2: Gunakan server lokal (disarankan)

```bash
# Menggunakan Python
python3 -m http.server 8000

# Menggunakan Node.js
npx serve .
```

Kemudian buka `http://localhost:8000` di browser Anda.

---

## 🎨 Panduan Kustomisasi

### Warna

Edit variabel CSS di `assets/css/style.css`:

```css
:root {
  --bg-primary: #0b0b12;     /* Latar belakang halaman */
  --bg-card: #181826;        /* Latar belakang kartu */
  --accent: #8b5cf6;         /* Aksen utama (ungu) */
  --accent-hover: #a78bfa;   /* Aksen saat hover */
  --text-primary: #f1f1f7;   /* Teks utama */
  --text-secondary: #8888a0; /* Teks sekunder */
}
```

### Konten

Semua teks konten ada di `index.html`. Area utama yang bisa dikustomisasi:

| Bagian | File | Baris |
|--------|------|-------|
| Headline Hero | `index.html` | ~80–90 |
| Fitur | `index.html` | ~140–195 |
| Harga | `index.html` | ~220–275 |
| Testimoni | `index.html` | ~280–335 |
| FAQ | `index.html` | ~345–405 |
| Footer | `index.html` | ~425–460 |

### Font

Template menggunakan **Inter** dari Google Fonts. Untuk mengganti:

1. Ganti `<link>` Google Fonts di `<head>`
2. Perbarui `font-family` di `body` pada `style.css`

### Gambar

Tambahkan gambar Anda sendiri ke `assets/images/`. Bagian hero menggunakan mockup CSS/HTML murni — ganti dengan tag `<img>` jika Anda memiliki tangkapan layar.

---

## 📄 Halaman

| Halaman | File | Deskripsi |
|---------|------|-----------|
| Landing Page | `index.html` | Halaman pemasaran utama dengan semua bagian |
| Login / Daftar | `login.html` | Form auth dengan tab ganda dan login sosial |
| Error 404 | `404.html` | Halaman error ramah dengan navigasi |

---

## 🌐 Tag Meta Sosial

Template menyertakan tag Open Graph dan Twitter Card untuk berbagi di media sosial. Perbarui ini di setiap halaman pada `<head>`:

```html
<meta property="og:title" content="Judul Anda Di Sini">
<meta property="og:description" content="Deskripsi Anda di sini.">
<meta property="og:image" content="assets/images/og-image.svg">
```

Hasilkan gambar OG berukuran 1200×630px dan tempatkan di `assets/images/og-image.svg`.

---

## ⚡ Performa

- **Tanpa overhead framework** — kode vanilla murni
- **Minim ketergantungan** — hanya Google Fonts + Font Awesome (CDN)
- **Animasi teroptimasi** — menggunakan `IntersectionObserver` dengan `passive` scroll listeners
- **Gerakan tereduksi** — termasuk `prefers-reduced-motion`

---

## ♿ Aksesibilitas

- HTML semantik (`<nav>`, `<section>`, `<footer>`, `<main>`)
- Atribut ARIA pada elemen interaktif
- Status fokus yang terlihat
- Dukungan `prefers-reduced-motion`
- Hierarki heading yang tepat (h1 → h2 → h3)

---

## 📦 Dependensi

- [Google Fonts: Inter](https://fonts.google.com/specimen/Inter) — tipografi
- [Font Awesome 6](https://fontawesome.com/) — ikon (versi gratis)

Keduanya dimuat melalui CDN — tidak perlu mengunduh file.

---

## 📃 Lisensi Komersial

Dengan membeli template ini, Anda mendapatkan:

✅ **Hak pakai untuk 1 project/end product** — Gunakan template ini untuk satu proyek klien atau produk Anda sendiri.
✅ **Boleh dimodifikasi** — Ubah sesuai kebutuhan project Anda.
❌ **TIDAK boleh dijual ulang atau didistribusikan ulang** — Template ini tidak boleh dijual kembali, dibagikan gratis, atau disertakan dalam bundle template lain.
❌ **TIDAK boleh diklaim sebagai karya sendiri** — Hak cipta tetap milik penulis.

> Untuk lisensi multi-project, silakan hubungi penulis.

---

## 💬 Dukungan

Untuk pertanyaan, permintaan fitur, atau laporan bug, silakan kirim email ke **[jefry4977@email.com]**.

- ⏱ **Waktu respons:** Kami merespons dalam 1-2 hari kerja.
- 📝 Sertakan nama file dan deskripsi masalah saat menghubungi agar kami dapat membantu lebih cepat.

---

## 🔄 Changelog

| Tanggal | Versi | Deskripsi |
|---------|-------|-----------|
| 22 Juni 2026 | v1.0.0 | Rilis perdana |
