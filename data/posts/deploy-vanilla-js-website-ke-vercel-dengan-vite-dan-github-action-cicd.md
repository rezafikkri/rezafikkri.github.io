---
id: "5854fc0e-d2a8-4ffc-acc8-374d3d2cec53"
title: "Deploy Vanilla JS Website ke Vercel Dengan Vite dan Github Action (CI/CD)"
date: "2024-06-14T07:44:29.691Z"
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-vanilla-js-website-ke-vercel-dengan-vite-dan-github-action-cicd"
ogImage: ""
---

Bismillah, pada tutorial ini kita hanya akan berfokus pada cara deploy ke Vercel dengan Vite dan Github Action, **sehingga website yang digunakan untuk deploy sudah saya siapkan dan bisa didownload [disini](https://github.com/rezafikkri/counter-js/archive/refs/tags/for-download.zip)**, <!-- excerpt -->selain cara deploy, nantinya akan sedikit disinggung mengenai penerapan sederhana dari CI/CD, seperti menjalankan testing secara otomatis (untuk menghindari error<!-- excerpt --> yang tidak dinginkan lolos ke tahap production), serta juga deploy website secara otomatis.

### Prasyarat
Sebelum mengikuti tutorial ini, ada beberapa prasyarat yang harus kamu penuhi (hal ini bertujuan untuk memudahkan kamu dalam memahami tutorial). Berikut adalah beberapa prasyaratnya:
1. Memahami dasar HTML, CSS dan JS, jika belum, kamu bisa berkunjung ke channel [WPU](https://www.youtube.com/@sandhikagalihWPU)
2. Memahami dasar Vite, jika belum, kamu bisa belajar di channel [PZN](https://youtu.be/f8N0V-1dC0o?si=eMe0Ae5b9tKXdOba)
3. Memahami dasar Git (seperti commit, push, merge, branch, dll) dan juga dasar Github, jika belum, kamu bisa belajar di channel [WPU >> Playlist Git & Github](https://youtube.com/playlist?list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf&si=M99NbSj93ATIGxJ6)

Jika prasyarat di atas sudah terpenuhi, kamu bisa lanjut mengikuti tutorial.

## Apa itu Vercel, Github Action dan CI/CD?
Buat kamu yang belum tahu, saya akan sedikit menjelaskan mengenai Vercel, Github Action dan CI/CD.

Vercel


Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
