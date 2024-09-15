---
id: "e3e9c456-8c4b-4470-850d-82ae1c5262c4"
title: "Bagaimana Cara Kerja Cookie dan Session?"
lastmod: 1725383570416
topics: ["50d103e8-2275-4b09-8dea-5105ab5e9838","56863ee6-39ae-40d2-94ca-34e0805ce291","b2ded9c2-dea9-4427-a4aa-3b5a24e89468","cdc80207-597b-4fb7-b572-53b68c9f1a78","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "bagaimana-cara-kerja-cookie-dan-session"
ogImage: ""
---

Bismillah.

Bagi kamu yang merupakan Web Developer ataupun kamu yang pernah belajar tentang Web Programming, pasti pernah menggunakan Cookie dan Session, misalnya pada saat membuat fitur Login serta juga fitur seperti *Remember me* yang terdapat pada halaman Login. Mungkin diantara kalian ada yang berfikir bahwa Cookie dan Session adalah sesuatu yang berbeda, Session ya Session, Cookie ya Cookie (tidak memiliki hubungan apapun), saya dulu juga berfikir bahwa Session itu langsung tahu aja bahwa seorang user itu sudah Login atau belum. <!-- excerpt -->Tapi ternyata, Session itu tidak memiliki sesuatu hal yang *magic*, sebenarnya dibelakang layar Session menggunakan Cookie juga<!-- excerpt -->.

Menurut saya memahami cara kerja Cookie dan Session merupakan hal yang penting untuk seorang Web Developer, karena dulu waktu awal-awal belajar Web Programming, karena tidak begitu memahami Cookie dan Session, ketika saya yang biasanya menggunakan PHP dengan fitur Session-nya untuk membuat sistem Login, lalu mencoba membuat sistem Login dengan JavaScript dan NodeJs, menjadi bingung, karena di NodeJS tidak ada fitur Session bawaan seperti di PHP, di NodeJS kita biasanya menggunakan library pihak ketiga dari npm. Lebih bingung-nya lagi Session di NodeJS itu kok menggunakan Cookie? dan akhirnya saya berkesimpulan bahwa ini bukan Session, karena tidak sama seperti Session di PHP yang biasanya saya gunakan. Padahal jika memahami cara kerja Cookie dan Session sebelumnya, hal itu adalah benar fitur Session yang biasanya saya gunakan di PHP.

### Prasyarat
Sebelum lanjut membaca, ada beberapa prasyarat yang harus terpenuhi, supaya kamu lebih mudah dalam memahami topik yang akan dibahas:
1. Memahami apa itu HTTP
2. Memahami apa itu model Client-Server
3. Memahami bagaimana cara Browser bekerja

Jika prasyarat di atas sudah terpenuhi, kamu bisa lanjut membaca.

## Apa itu Cookie?

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
