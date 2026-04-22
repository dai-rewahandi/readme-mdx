# Portfolio Web (readme)

Proyek ini adalah web portofolio pribadi yang dibangun menggunakan **SvelteKit** dan **Svelte 5**. Web ini menampilkan informasi tentang pengembang, repositori pilihan, teknologi yang digunakan, dan informasi kontak.

## 🚀 Teknologi yang Digunakan

- **Framework:** [Svelte 5](https://svelte.dev/) & [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasi:** [GSAP](https://gsap.com/)
- **Runtime:** [Bun](https://bun.sh/)
- **Language:** TypeScript

## ✨ Fitur

- **Tentang Saya:** Cerita singkat mengenai latar belakang koding.
- **Repositori Pilihan:** Daftar proyek open-source seperti `basicshoot` dan `Vscode Extension Downloader`.
- **Daftar Skill:** Tabel yang menampilkan framework, alat, dan bahasa pemrograman yang digunakan.
- **Animasi GSAP:** Implementasi animasi yang halus pada elemen halaman.
- **Responsif:** Desain yang menyesuaikan dengan berbagai ukuran layar.

## 🛠️ Persiapan Pengembangan

Pastikan Anda sudah menginstal [Bun](https://bun.sh/) di sistem Anda.

### 1. Kloning Repositori
```bash
git clone https://github.com/dai-rewahandi/readme.git
cd readme
```

### 2. Instalasi Dependensi
```bash
bun install
```

### 3. Jalankan Mode Pengembangan
```bash
bun run dev
```
Buka [http://localhost:5173](http://localhost:5173) di browser Anda.

### 4. Build untuk Produksi
```bash
bun run build
```

## 📂 Struktur Folder Utama

- `src/lib/`: Berisi aset (favicon, gif) dan komponen yang dapat digunakan kembali.
- `src/routes/`: Berisi halaman utama (`+page.svelte`) dan layout.
- `src/routes/sections/`: Berisi potongan komponen untuk header dan footer.
- `static/`: File statis seperti `robots.txt`.

## 🤝 Kontak

Jika Anda ingin berkolaborasi atau sekadar menyapa, hubungi saya melalui:

- **Email:** niktodaire@gmail.com
- **GitHub:** [dai-rewahandi](https://github.com/dai-rewahandi)
- **Instagram:** [@dai_rewahandi](https://instagram.com/dai_rewahandi)

---
Dibuat dengan ❤️ menggunakan Svelte.
