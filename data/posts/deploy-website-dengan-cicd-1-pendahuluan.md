---
id: "77f54c1d-629d-4619-b627-738a3cfea9fa"
title: "Deploy Website dengan CI/CD #1: Pendahuluan"
lastmod: 1720766808794
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-website-dengan-cicd-1-pendahuluan"
ogImage: "/posts/deploy-vercel-github-action/1-deploy-vercel-github-action.png"
serial: {"id":"ede13e57-95e1-425e-9e07-f5f686cb3990","order":1}
---

<!-- excerpt -->Pada seri tutorial ini, kita akan sama-sama belajar bagaimana cara deploy dengan CI/CD menggunakan tools GitHub Actions dan Vercel. Karena di tutorial ini<!-- excerpt --> hanya akan berfokus pada cara deployment dan penerapan simpel dari CI seperti menjalankan pengujian secara otomatis setiap ada perubahan kode, dsb, maka saya sudah menyiapkan website yang bisa didownload [disini](https://github.com/rezafikkri/counter-js/archive/refs/tags/for-download.zip), website tersebut hanyalah website *counter* biasa, dengan sedikit modifikasi dan tambahan unit testing serta linting. Pada seri ke-1 ini kita akan membahas mengenai beberapa teori terkait dan juga mengupload website ke remote repositori di GitHub.

### Prasyarat
Sebelum mengikuti tutorial ini, ada beberapa prasyarat yang harus kamu penuhi (hal ini bertujuan untuk memudahkan kamu dalam memahami tutorial). Berikut adalah beberapa prasyaratnya:
1. Memahami dasar HTML, CSS, JS dan NodeJS, jika belum, kamu bisa berkunjung ke channel [WPU](https://www.youtube.com/@sandhikagalihWPU)
2. Memahami dasar Vite, jika belum, kamu bisa belajar di channel [PZN](https://youtu.be/f8N0V-1dC0o?si=eMe0Ae5b9tKXdOba)
3. Memahami dasar Git (seperti commit, push, merge, branch, dll) dan juga dasar GitHub (seperti pull request, dll), jika belum, kamu bisa belajar di channel [WPU >> Playlist Git & GitHub](https://youtube.com/playlist?list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf&si=M99NbSj93ATIGxJ6)
4. Memahami mengenai testing dan linting (minimal pengertian dan kegunaannya), jika belum, kamu bisa mencari materinya dengan mudah di internet  dengan kata kunci *software testing* dan *linting*.

Jika prasyarat di atas sudah terpenuhi, kamu bisa lanjut mengikuti tutorial.

## Apa itu CI/CD, GitHub Actions dan Vercel?
Berikut penjelasan singkatnya:
- CI/CD adalah singkatan dari *Continous Integration and Continous Delivery/Deployment*. *Continuous Integration* adalah praktik mengintegrasikan semua perubahan kode ke dalam repositori kode secara cepat dan sering, lalu secara otomatis menguji setiap perubahan kode. Sedangkan yang dimaksud dengan *Continuous Delivery* atau *Continuous Deployment* adalah praktik yang dilakukan setelah proses CI, yaitu memastikan kode dikemas dengan semua yang diperlukan untuk diterapkan ke environment manapun dan kapanpun. CD bisa mencangkup segalanya, mulai dari penyediaan infrastruktur hingga penerapan aplikasi hingga environment testing atau production. Salah satu manfaat dari menggunakan CI/CD dalam pengembangan website, adalah untuk mengurangi resiko dan tingkat kesalahan (error), karena pada proses CI akan secara otomatis melakukan pengujian dari setiap perubahan kode. Selain itu juga, dapat mempercepat proses rilis, karena proses CI/CD dilakukan secara otomatis. Bayangkan saja, jika setiap ingin rilis fitur baru atau melakukan perbaikan dari fitur-fitur yang sudah ada, harus melakukan testing secara manual, terus deploy secara manual menggunakan software FTP misalnya, akan sangat menghabiskan waktu dan tentunya melelahkan.

- GitHub Actions adalah platform CI/CD yang memungkinkan kamu untuk mengotomatiskan alur build, test dan deployment, baca [disini](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) untuk mengetahui lebih lanjut tentang GitHub Actions.

- Vercel adalah cloud platform yang bersifat serverless dan didesain untuk static frontend dan serverless function. Cloud platform sendiri merujuk kepada operating system dan hardware server di data center, yang dikonfigurasi untuk menyediakan layanan cloud computing (seperti server, storage, dll) kepada pelanggan. Sedangkan yang dimaksud serverless adalah model pengembangan cloud-native yang memungkinkan developer membangun dan menjalankan aplikasi tanpa harus mengelola server. Lalu static frontend yang dimaksud adalah mengenai istilah website statis dan dinamis, kamu bisa membaca lebih lanjut [disini](https://community.aws/content/2c6dxofg1ys1QMBRom8CMOcFS1D/static-vs-dynamic-websites?lang=en). Karena Vercel bersifat serverless, sehingga tidak menjalankan sebuah server (kamu sebagai pelanggan tidak bisa menjalankan server sendiri, seperti `npm run start` atau `nodemon server.js`), maka sebagai alternatifnya, Vercel menyediakan fitur Serverless Function yang memungkinkan kamu untuk mengeksekusi logic (seperti membuat API untuk website atau mobile) di sisi server.

Pada seri tutorial ini GitHub Actions akan digunakan untuk menerapkan praktik CI dan Vercel untuk menerapkan praktik CD. Sedangkan konsepnya sendiri adalah, pada repositori website counter-js akan memiliki branch main yang akan menjadi branch utama yang akan dideploy. Setiap ingin melakukan perubahan, maka harus melalui pull request. Ketika pull request dibuka ke branch main, atau ketika pull request yang sudah ditutup dibuka kembali, atau ketika *head branch* (branch yang berisi perubahan yang ingin kamu integrasikan/terapkan) dari pull request diupdate, maka secara otomatis akan memicu proses CI dijalankan dan ketika perubahan tersebut diterapkan ke branch main (dengan *merge pull request*, dsb), maka Vercel akan otomatis mendeploy website counter-js.

## Upload Website ke Remote Repository di GitHub
Setelah memahami beberapa teori diatas, langkah awal yang harus dilakukan tentunya membuat remote repositori di GitHub dan mengupload website yang telah didownload ke remote repositori tersebut. Sebelumya pastikan kamu sudah mendownload website yang sudah saya sediakan (link ada di awal tutorial), lalu lakukan `npm install` dan pastikan website berjalan dengan normal.

> Sebaiknya ganti nama direktori website yang telah didownload menjadi "counter-js".

Berikut langkah-langkahnya:

<ol>
  <li>Buka terminal atau cmd pada direktori utama website counter-js yang telah di download, kemudian jalankan <code>git init</code> untuk membuat local repositori baru dan jangan lupa lakukan commit.
  </li>
  <li>Buat public remote repositori baru pada akun GitHub-mu, isi <strong>Repository name</strong>, <strong>Decription</strong> (optional) dan klik <strong>Create repository</strong> (biarkan value yang lain default saja): <img alt="before create new repo" src="/posts/deploy-vercel-github-action/before-create-new-repo.png" width="1336" height="1224" loading="lazy" class="mt-6" decoding="async"/></li>
  <li>Pastikan setelah kamu klik <strong>Create repository</strong>, maka akan diarahkan ke halaman seperti di bawah ini, yang menandakan repositori masih kosong: <img alt="after create new repo" src="/posts/deploy-vercel-github-action/after-create-new-repo.png" width="1336" height="656" loading="lazy" class="mt-6" decoding="async"/></li>
  <li>
    Buka kembali terminal atau cmd pada direktori utama website counte-js dan tambahkan remote repositori yang telah dibuat sebelumnya dengan nama "origin" (kamu bisa menggunakan <em>ssh</em> atau <em>https</em>):
    <pre><code class="language-bash"># ssh
git remote add origin git@github.com:[username]/[remote-repo-name].git
# https
git remote add origin https://github.com/[username]/[remote-repo-name].git
    </code></pre>
    Ganti <code>[username]</code> dengan username GitHub-mu dan <code>[remote-repo-name]</code> dengan nama remote repositori-mu.
  </li>
  <li>
    Ganti nama branch <em>master</em> menjadi <em>main</em>:
    <pre><code class="language-bash">git branch -M master main</code></pre>
  </li>
  <li>
    Lakukan push sekaligus <em>set upstream branch</em>:
    <pre><code class="language-bash">git push -u origin main</code></pre>
  </li>
  <li>Pastikan website counter-js berhasil terupload ke GitHub (dengan merefresh halaman yang tampil pada langkah ke-3).</li>
</ol>

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Pada bagian selanjutnya (ke-2) akan membahas dan membuat GitHub Actions workflow untuk proses CI, kamu bisa klik link pada bagian **Daftar Seri Tulisan** di bawah!, untuk menuju ke bagian selanjutnya atau bagian yang lain. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.

### Referensi:
[What is CI/CD? by Gitlab](https://about.gitlab.com/topics/ci-cd/)<br/>
[Apa itu CI/CD? Developer Harus Tahu](https://www.dicoding.com/blog/apa-itu-ci-cd/)<br/>
[What is CI/CD? by RedHat](https://www.redhat.com/en/topics/devops/what-is-ci-cd)<br/>
[Apa itu CI/CD? Belajar Membuat CI/CD Pipeline di Cloud](https://www.youtube.com/watch?v=5KP9khJMJ8o&t=1905s)<br/>
[Benefit of CI/CD](https://www.jetbrains.com/teamcity/ci-cd-guide/benefits-of-ci-cd/)<br/>
[Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)<br/>
[What is Vercel?](https://www.getfishtank.com/blog/what-is-vercel)<br/>
[Why does npm run start not work on Vercel?](https://vercel.com/guides/npm-run-start-not-working)<br/>
[What is Cloud Platform?](https://www.akamai.com/glossary/what-is-a-cloud-platform)<br/>
[What is Serverless?](https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless)<br/>
[What is Serverless Function?](https://www.sanity.io/glossary/serverless-function)<br/>
