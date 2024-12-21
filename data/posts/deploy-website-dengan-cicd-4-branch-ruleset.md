---
id: "d081e028-02a4-44cf-a729-ed7d3c8cec20"
title: "Deploy Website dengan CI/CD #4: Branch Ruleset"
lastmod: 1720767968252
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-website-dengan-cicd-4-branch-ruleset"
ogImage: "https://res.cloudinary.com/rezafikkri/image/upload/q_auto/4-deploy-vercel-github-action.png"
ogImageWidth: 1920
ogImageHeight: 1080
serial: {"id":"ede13e57-95e1-425e-9e07-f5f686cb3990","order":4}
---

Setelah pada seri sebelumnya (ke-3) kita membuat deployment dengan menggunakan Vercel, di seri terakhir ini (ke-4) <!-- excerpt -->kita akan sama-sama belajar bagaimana cara melindungi branch main, karena jika sekarang kamu mencoba melakukan perubahan secara langsung pada branch main<!-- excerpt -->, itu bisa dilakukan dengan mudah dan proses CI tidak akan dijalankan, sehingga ada kemungkinan kode yang error ter-deploy oleh Vercel ke production. Maka perlu untuk melindungi branch main sehingga tidak ada yang bisa melakukan perubahan secara langsung pada branch main, termasuk user dengan hak akses *Repository admin*, yaitu *owner* (pemilik) repositori tersebut (kamu bisa membaca lebih lanjut mengenai hak akses pada GitHub [disini](https://docs.github.com/en/get-started/learning-about-github/access-permissions-on-github)), lalu jika ingin melakukan perubahan harus melalui pull request sehingga proses CI otomatis dijalankan. Dan jika ingin melakukan *Merge pull request* maka harus lolos proses CI (test-and-lint). Lalu bagaimana cara melindungi branch main? caranya adalah dengan membuat Branch Ruleset.

> **Info:** Pastikan kamu sudah mengikuti bagian ke-3. Jika belum, kamu bisa scroll ke paling bawah halaman ini sampai pada bagian Daftar Seri Tulisan dan klik link pada bagian ke-3.

Ruleset adalah daftar aturan yang berlaku pada repositori, yang dapat membantu kamu untuk mengontrol bagaimana orang berinteraksi dengan branch dan tag di dalam repositori. Yang bisa menggunakan fitur ruleset ini adalah orang dengan hak akses *Repository admin* atau hak akses *Edit repository rules*, yang mana orang dengan hak akses ini dapat membuat, edit dan menghapus ruleset untuk sebuah repositori. Kamu juga dapat memiliki hingga 75 ruleset per repositori. Lebih detail mengenai ruleset bisa baca [disini](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

Untuk membuat ruleset, ikuti langkah berikut:
1. Buka remote repositori website counter-js di GitHub kamu, lalu klik **Settings** &raquo; pada sidebar menu sebelah kiri klik **Rules**, kemudian klik **Rulesets**, pada halaman Rulesets yang terbuka, klik **New ruleset** dan klik **New branch ruleset**:
![create branch ruleset github](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/create-branch-ruleset-github.png)<!--rehype:width=1366&height=656&loading=lazy&class=mt-6&decoding=async-->
2. Pada bagian **Ruleset Name**, isi dengan nama ruleset
3. Pada bagian **Enforcement Status**, pilih **Active**, yang berarti bahwa ruleset ini akan langsung diterapkan ketika dibuat (ketika klik button **Create**). Kamu juga bisa membiarkannya default, yaitu **Disabled**, yang berarti bahwa ruleset ini belum akan diterapkan dan ketika nanti kamu ingin menerapkan ruleset ini, kamu bisa mengubah **Enforcement Status**-nya.
4. Pada bagian **Bypass list**, kamu bisa memberikan izin kepada *rules*, *teams* atau *apps* tertentu untuk *bypass* (mengabaikan atau melewati) ruleset ini. Tetapi karena dalam tutorial ini, ingin diterapkan bahwa tidak ada yang boleh mengabaikan ruleset ini, maka cukup dibiarkan kosong saja.
5. Pada bagian **Target branches**, kamu mendefinisikan di branch mana kamu ingin ruleset ini diterapkan. Mengacu pada konsep yang dijelaskan sebelumnya (bahwa tidak ada seorang pun yang dibolehkan melakukan perubahan langsung di branch main, dst), maka ruleset ini tentunya diterapkan pada branch main. Untuk itu klik **Add target** lalu pilih **Include default branch**, yang berarti bahwa ruleset ini akan diterapkan pada default branch, yaitu branch main (jika belum dilakukan perubahan).
6. Pada bagian **Rules**, kamu memilih *rule* apa saja yang ingin diterapkan. Secara default sudah ada dua *rule* yang otomatis dipilih oleh GitHub, yaitu rule pertama adalah **Restrict deletions**, yang berarti hanya user dengan izin *bypass* yang boleh menghapus branch yang didefinisikan pada bagian **Target branches**, yaitu dalam tutorial ini adalah branch main dan karena sebelumnya pada bagian **Bypass list** hanya dibiarkan kosong, maka artinya tidak ada seorang pun yang bisa menghapus branch main, ini bagus, karena jika branch main tidak sengaja terhapus, maka akan berakibat fatal. Yang kedua adalah **Block force pushes**, ini berarti bahwa tidak ada user yang diizinkan untuk melakukan *force push*.
7. Pilih rule **Require pull request before merging**, supaya jika ingin melakukan perubahan harus melalui pull request.
8. Pilih rule **Require status checks to pass**, lalu klik **Add checks**, pada kolom pencarian tulis id dari *job* yang terdapat pada workflow yang sebelumnya dibuat, sebagai contoh, id dari *job* yang saya buat sebelumnya adalah "test-and-lint" maka masukkan "test-and-lint" atau cukup "test" saja, lalu pada bagian **Suggestions** pilih **Add test-and-lint** dan klik kembali button **Add checks**:
![require status checks pass](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/require-status-checks-pass.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
9. Berikut adalah tampilan akhir dari *settings ruleset*:
![settings ruleset](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/settings-ruleset.png)<!--rehype:width=1366&height=2731&loading=lazy&class=mt-6&decoding=async-->
10. Klik button **Create** untuk membuat ruleset.

Setelah selesai membuat Branch Ruleset, saatnya melakukan test apakah ruleset tersebut berjalan sebagaimana mestinya. Kamu bisa mencoba membuat perubahan langsung pada branch main di local repositori, lalu coba lakukan push, maka kamu akan mendapatkan error seperti di bawah ini:
![error directly change main branch](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/error-directly-change-main-branch.png)<!--rehype:width=1140&height=534&loading=lazy&class=mt-6&decoding=async-->
Yang menandakan bahwa ruleset telah berjalan sebagaimana mestinya. Kamu bisa membatalkan perubahan sebelumnya dengan menjalankan command:
```bash
git reset --hard HEAD~1
```

> **Info:** Jika kamu belum mengetahui mengenai git-reset, bisa baca [disini](https://git-scm.com/docs/git-reset).

Selain test dengan membuat perubahan langsung pada branch main, kamu juga bisa membuka pull request dengan sengaja membuat CI test menjadi error dan kamu bisa melihat bahwa button **Merge pull request** tidak bisa diklik, baik ketika *check* masih berjalan ataupun ketika *check* sudah selesai dan ada *check* yang error. Ketika ada *check* yang error seperti ini, kamu bisa melakukan update pada local repositori untuk memperbaiki error, lalu lakukan push dan proses CI akan dijalankan kembali. Ketika semua *check* lolos, maka kamu bisa melakukan **Merge pull request**.

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
