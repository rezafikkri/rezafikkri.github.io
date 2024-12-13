---
id: "bc9d7d55-ad0a-4795-b926-87974edb0a2d"
title: "Deploy Website dengan CI/CD #3: Deploy dengan Vercel"
lastmod: 1720767708928
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-website-dengan-cicd-3-deploy-dengan-vercel"
ogImage: "/posts/deploy-vercel-github-action/3-deploy-vercel-github-action.png"
serial: {"id":"ede13e57-95e1-425e-9e07-f5f686cb3990","order":3}
---

Setelah membuat GitHub Actions workflow pada seri ke-2, pada seri ke-3 ini kita akan sama-sama belajar deployment dengan menggunakan Vercel untuk proses CD.

> **Info:** Pastikan kamu sudah mengikuti bagian ke-2. Jika belum, kamu bisa scroll ke paling bawah halaman ini sampai pada bagian Daftar Seri Tulisan dan klik link pada bagian ke-2.

> **Info:** Disini saya menggunakan akun GitHub lain (amruk53sh) untuk menunjukkan bagaimana cara deploy dengan Vercel untuk pertama kalinya.

Untuk deploy dengan vercel ikuti langkah-langkah berikut:
<!-- excerpt -->1. Buat akun Vercel dengan buka halaman [Sign Up Vercel](https://vercel.com/signup), lalu pada bagian **Plan type**, karena ini tujuannya untuk belajar maka pilih **Hobby**, lalu<!-- excerpt --> pada kolom input **Your name**, isi dengan nama kamu dan klik button **Continue**:
![sign up vercel](/posts/deploy-vercel-github-action/sign-up-vercel.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
2. Kamu akan diarahkan ke suatu halaman untuk menghubungkan akun Vercel kamu dengan Git provider, karena dalam tutorial ini menggunakan GitHub, maka klik button **Continue With GitHub**:
![connect vercel github](/posts/deploy-vercel-github-action/connect-vercel-github.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
3. Akan terbuka pop up window *Authorize Vercel*, yang intinya Vercel ingin meminta persetujuan dari kamu untuk mengakses beberapa hal di akun GitHub kamu. Klik button **Authorize Vercel** untuk menyetujui:
![authorize vercel](/posts/deploy-vercel-github-action/authorize-vercel.png)<!--rehype:width=818&height=680&loading=lazy&class=mt-6&decoding=async-->
4. Kamu akan diminta mengisi nomor telepon. Pilih negara Indonesia, lalu isi dengan nomor aktif kamu (ini hanya untuk verifikasi) dan klik button **Continue**:
![insert phone number vercel](/posts/deploy-vercel-github-action/insert-phone-number-vercel.png)<!--rehype:width=826&height=682&loading=lazy&class=mt-6&decoding=async-->
5. Kamu perlu memasukkan 4 kode yang telah dikirim ke nomor telepon kamu dan selamat akun Vercel kamu sudah berhasil dibuat:
![verify vercel sign up](/posts/deploy-vercel-github-action/verify-vercel-sign-up.png)<!--rehype:width=820&height=685&loading=lazy&class=mt-6&decoding=async-->
6. Tunggu sebentar sampai kamu diarahkan ke halaman untuk membuat projek baru (seperti dibawah ini), jika agak lama, tidak apa-apa, tetap tunggu. Karena sebelumnya sudah memiliki projek yang ingin dideploy, maka kamu hanya perlu untuk melakukan *Import Git Repository* saja. Untuk melakukan import, kamu perlu install Vercel GitHub App di akun GitHub-mu, caranya dengan klik button **Install** pada bagian **Import Git Repository**:
![install-github-app-vercel](/posts/deploy-vercel-github-action/install-vercel.png)<!--rehype:width=1366&height=1151&loading=lazy&class=mt-6&decoding=async--> Di GitHub ada tools yang bernama GitHub Apps, GitHub Apps adalah tools yang memperluas fungsionalitas GitHub. GitHub Apps dapat melakukan sesuatu di GitHub seperti membuka *issues*, komen di dalam pull request dan mengelola *projects*. GitHub Apps juga bisa melakukan sesuatu di luar GitHub berdasarkan *event* yang terjadi di GitHub. Vercel yang kamu install di akun GitHub-mu adalah salah satu dari GitHub Apps. Lebih detail mengenai GitHub Apps bisa baca [disini](https://docs.github.com/en/apps/using-github-apps/about-using-github-apps).
7. Kamu akan dimintai semacam persetujuan oleh Vercel untuk beberapa izin terkait menginstall Vercel GitHub App di akun GitHub-mu, kamu bisa membaca apa saja izin tersebut, selanjutnya jangan lupa untuk memilih **Only select repositories**, untuk install Vercel hanya di repositori yang dipilih saja, kemudian pilih repositori website counter-js dan klik button **Install** (scroll ke bawah jika kamu belum melihat button tersebut):
![permission install github app vercel](/posts/deploy-vercel-github-action/permission-install-vercel.png)<!--rehype:width=818&height=682&loading=lazy&class=mt-6&decoding=async-->
8. Klik button **Import** pada repositori website counter-js di bagian **Import Git Repository**:
![importing project counter js](/posts/deploy-vercel-github-action/importing-project-counter-js.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
9. Sebelum deploy, kamu akan diminta untuk melakukan konfigurasi projek, seperti *Project Name*, *Framework Preset*, *Root Directory*, *Build and Output Settings* dan *Environment Variables*. Tetapi untuk di tutorial ini, kamu tidak perlu merubah apapun karena Vercel sudah membuat konfigurasi default, kamu bisa langsung klik button **Deploy** untuk deploy website counter-js dan tunggu sampai proses deploy selesai:
![configure project vercel](/posts/deploy-vercel-github-action/configure-project-vercel.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
10. Selamat kamu telah berhasil deploy website counter-js dengan Vercel. Selanjutnya kamu bisa klik button **Continue to Dashboard** untuk melihat detail dari website counter-js yang telah dideploy:
![success deploy](/posts/deploy-vercel-github-action/success-deploy.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
11. Kamu akan dialihkan ke halaman dashboard dari website counter-js yang telah berhasil dideploy. Untuk mengunjungi website yang telah dideploy kamu bisa klik button **Visit**:
![dashboard vercel](/posts/deploy-vercel-github-action/dashboard-vercel.png)<!--rehype:width=1366&height=759&loading=lazy&class=mt-6&decoding=async-->

Setelah berhasil deploy website counter-js ke Vercel, seperti penjelasan saya sebelumnya, bahwa ketika ada perubahan yang diterapkan ke branch main, maka Vercel secara otomatis akan melakukan proses deployment. Untuk memastikan apakah betul berjalan seperti itu, buat branch baru, lalu lakukan perubahan apapun di repositori local (agar mudah melihat perbedaan antara deployment sebelumnya dan yang baru, buat perubahan pada tampilan website di file `main.js`) dan lakukan commit kemudian push.

> **Info:** Disini saya kembali menggunakan akun GitHub utama saya (rezafikkri).

Selanjutnya buka sebuah pull request ke branch main, tunggu semua pengecekan lolos dan lakukan *Merge pull request* dengan klik button **Merge pull request**:
![merge pull request](/posts/deploy-vercel-github-action/merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Karena melakukan *merge*, maka kamu akan diminta untuk mengisi commit message dan commit description, kamu bisa merubahnya atau biarkan default dan klik button **Confirm merge**:
![confirm merge pull request](/posts/deploy-vercel-github-action/confirm-merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Jika pada button tidak terdapat kata *Merge pull request*, maka klik dropdown menu pada button dan pilih **Create a merge commit**:
![button merge pull request](/posts/deploy-vercel-github-action/button-merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Setelah *Merge pull request* berhasil, untuk melihat apakah deployment otomatis dijalankan, opsi pertama, kamu bisa melihat langsung pada website counter-js yang telah dideploy, apakah terdapat perubahan (jika kamu melakukan perubahan pada tampilan website).

Opsi kedua, kamu bisa membuka tab **Deployments** pada halaman dashboard website counter-js, disana kamu bisa melihat deployment terbaru adalah deployment dari *Merge pull request* yang sebelumnya kamu lakukan, ini menandakan bahwa betul Vercel secara otomatis melakukan deployment ketika ada perubahan yang diterapkan pada branch main:
![automatic deployment](/posts/deploy-vercel-github-action/automatic-deployment.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
