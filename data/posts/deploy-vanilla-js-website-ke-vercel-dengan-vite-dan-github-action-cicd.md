---
id: "5854fc0e-d2a8-4ffc-acc8-374d3d2cec53"
title: "Deploy Vite + Vanilla JS Website Dengan CI/CD #1: Pendahuluan"
date: "2024-06-14T07:44:29.691Z"
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-vanilla-js-website-ke-vercel-dengan-vite-dan-github-action-cicd"
ogImage: ""
--- 

## 4. Menambahkan Branch Ruleset
Ruleset adalah daftar aturan yang berlaku pada repositori, yang dapat membantu kamu untuk mengontrol bagaimana orang berinteraksi dengan branch dan tag di dalam repositori. Misalnya seperti pada tutorial ini, ingin diterapkan aturan bahwa tidak ada satu orang pun yang diizinkan melakukan perubahan secara langsung pada branch main, jika ingin melakukan perubahan, harus membuat pull request (sehingga bisa dijalankan testing, lint secara otomatis dan pengecekan lainnya, serta juga perubahan yang dibuat bisa di review terlebih dahulu sebelum diterapkan ke branch main). Hal ini salah satunya untuk mencegah jangan sampai error ataupun celah keamanan ter-deploy, karena ketika ada perubahan yang diterapkan ke branch main, maka Vercel secara otomatis akan melakukan proses deployment. Kita juga sebagai manusia kadang ada saatnya lupa, lupa untuk melakukan testing misalnya, dll, maka alangkah baiknya untuk melakukan suatu pencegahan.

Yang bisa menggunakan fitur ruleset ini adalah orang dengan hak akses admin ke repositori atau hak akses *Edit repository rules*, yang mana orang dengan hak akses ini dapat membuat, edit dan menghapus ruleset untuk sebuah repositori. Kamu juga dapat memiliki hingga 75 ruleset per repositori. Lebih detail mengenai ruleset bisa baca [disini](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

Untuk membuat ruleset, ikuti langkah berikut:
- Buka remote repositori website counter-js di Github kamu, lalu klik **Settings**, pada sidebar menu sebelah kiri klik **Rules**, kemudian klik **Rulesets**, pada halaman Rulesets yang terbuka, klik **New ruleset** dan klik **New branch ruleset**:
![create branch ruleset github](/posts/deploy-vercel-github-action/create-branch-ruleset-github.png)<!--rehype:width=1366&height=656&loading=lazy&class=mt-6&decoding=async-->
- Pada bagian **Ruleset Name**, isi dengan nama ruleset
- Pada bagian **Enforcement Status**, pilih **Active**, yang berarti bahwa ruleset ini akan diterapkan ketika ruleset selesai dibuat. Kamu juga bisa membiarkannya default, yaitu **Disabled**, yang berarti bahwa ruleset ini belum akan diterapkan dan ketika nanti kamu ingin menerapkan ruleset ini, kamu bisa mengubah **Enforcement Status**-nya.
- Pada bagian **Bypass list**, kamu bisa memberikan izin kepada *rules*, *teams* atau *apps* tertentu untuk *bypass* (mengabaikan atau melewati) ruleset ini. Tetapi karena dalam tutorial ini, ingin diterapkan bahwa tidak ada yang boleh mengabaikan ruleset ini, maka cukup dibiarkan kosong saja.
- Pada bagian **Target branches**, kamu mendefinisikan di branch mana kamu ingin ruleset ini diterapkan. Mengacu pada konsep yang dijelaskan sebelumnya (bahwa tidak ada seorang pun yang dibolehkan melakukan perubahan langsung di branch main, dan seterusnya), maka ruleset ini tentunya diterapkan pada branch main. Untuk itu klik **Add target** lalu pilih **Include default branch**, yang berarti bahwa ruleset ini akan diterapkan pada default branch, yaitu branch main (jika belum dilakukan perubahan).
- Pada bagian **Rules**, kamu memilih rule apa saja yang ingin diterapkan. Secara default sudah ada dua rule yang otomatis di pilih oleh Github, yaitu yang pertama adalah **Restrict deletions**, yang berarti hanya user dengan izin *bypass* yang boleh menghapus branch yang didefinisikan pada bagian **Target branches**, yaitu dalam tutorial ini adalah branch main dan karena sebelumnya pada bagian **Bypass list** hanya dibiarkan kosong, maka artinya tidak ada seorang pun yang bisa menghapus branch main, ini bagus, karena jika branch main tidak sengaja terhapus, maka akan berakibat fatal. Yang kedua adalah **Block force pushes**, ini berarti bahwa tidak ada user yang diizinkan untuk melakukan *force push*.
- Selain dua rule diatas, pilih juga rule **Require pull request before merging**, supaya jika ingin melakukan perubahan harus melalui pull request dan pilih juga rule **Require status checks to pass**, lalu klik **Add checks**, pada kolom pencarian tulis id dari job yang terdapat pada workflow yang sebelumnya dibuat, sebagai contoh, id dari job yang saya buat sebelumnya adalah "test-and-lint" maka masukkan "test-and-lint" atau cukup "test" saja, lalu pada bagian **Suggestions** pilih **Add test-and-lint** dan klik kembali button **Add checks**:
![require status checks pass](/posts/deploy-vercel-github-action/require-status-checks-pass.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Berikut adalah tampilan akhir dari *settings ruleset*:
![settings ruleset](/posts/deploy-vercel-github-action/settings-ruleset.png)<!--rehype:width=1366&height=2731&loading=lazy&class=mt-6&decoding=async-->
- Klik button **Create** untuk membuat ruleset.

Setelah selesai membuat ruleset, saat melakukan test apakah ruleset tersebut berjalan sebagaimana mestinya. Kamu bisa mencoba membuat perubahan langsung pada branch main di local repositori, lalu coba lakukan push, maka kamu akan mendapatkan error seperti di bawah ini:
![error directly change main branch](/posts/deploy-vercel-github-action/error-directly-change-main-branch.png)<!--rehype:width=1140&height=534&loading=lazy&class=mt-6&decoding=async-->
Yang menandakan bahwa ruleset telah berjalan sebagaimana mestinya. Kamu bisa membatalkan perubahan sebelumnya dengan menjalankan commad:
```bash
git reset origin/main --hard
```
Selain test dengan membuat perubahan langsung pada branch main, kamu juga bisa membuka pull request dengan sengaja membuat CI test menjadi error dan kamu bisa melihat bahwa button **Merge pull request** tidak bisa diklik, baik ketika *check* masih berjalan ataupun ketika *check* sudah selesai dan ada *check* yang error. Ketika ada *check* yang error seperti ini, kamu bisa melakukan update pada local repositori untuk memperbaiki error, lalu lakukan push dan proses CI akan dijalankan kembali. Ketika semua *check* lolos, maka kamu bisa melakukan **Merge pull request**.

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
