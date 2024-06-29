---
id: "5854fc0e-d2a8-4ffc-acc8-374d3d2cec53"
title: "Deploy Vanilla JS Website ke Vercel Dengan Vite dan Github Action (CI/CD)"
date: "2024-06-14T07:44:29.691Z"
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-vanilla-js-website-ke-vercel-dengan-vite-dan-github-action-cicd"
ogImage: ""
---

Bismillah, pada tutorial ini, hanya akan berfokus pada cara deploy ke Vercel dengan Vite dan Github Action, **sehingga website yang digunakan untuk deploy sudah saya siapkan dan bisa didownload [disini](https://github.com/rezafikkri/counter-js/archive/refs/tags/for-download.zip)**, <!-- excerpt -->selain cara deploy, nantinya akan sedikit disinggung mengenai penerapan sederhana dari CI/CD, seperti menjalankan testing dan linter secara otomatis (untuk menghindari error<!-- excerpt --> yang tidak dinginkan lolos ke tahap production, dsb), serta juga deploy website secara otomatis.

### Prasyarat
Sebelum mengikuti tutorial ini, ada beberapa prasyarat yang harus kamu penuhi (hal ini bertujuan untuk memudahkan kamu dalam memahami tutorial). Berikut adalah beberapa prasyaratnya:
1. Memahami dasar HTML, CSS, JS dan NodeJS, jika belum, kamu bisa berkunjung ke channel [WPU](https://www.youtube.com/@sandhikagalihWPU)
2. Memahami dasar Vite, jika belum, kamu bisa belajar di channel [PZN](https://youtu.be/f8N0V-1dC0o?si=eMe0Ae5b9tKXdOba)
3. Memahami dasar Git (seperti commit, push, merge, branch, dll) dan juga dasar Github (seperti pull request, dll), jika belum, kamu bisa belajar di channel [WPU >> Playlist Git & Github](https://youtube.com/playlist?list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf&si=M99NbSj93ATIGxJ6)
4. Memahami mengenai testing dan linter (minimal pengertian dan kegunaannya), jika belum, kamu bisa mencari materinya dengan mudah di internet  dengan kata kunci *software testing* dan *linter*.

Jika prasyarat di atas sudah terpenuhi, kamu bisa lanjut mengikuti tutorial.

## Apa itu Vercel, Github Action dan CI/CD?
Buat kamu yang belum tahu, saya akan sedikit menjelaskan mengenai Vercel, Github Action dan CI/CD.

Vercel adalah cloud platform yang bersifat serverless dan didesain untuk static frontend dan serverless function. Cloud platform sendiri merujuk kepada operating system dan hardware server di data center, yang dikonfigurasi untuk menyediakan layanan cloud computing (seperti server, storage, dll) kepada pelanggan. Sedangkan yang dimaksud serverless adalah model pengembangan cloud-native yang memungkinkan developer membangun dan menjalankan aplikasi tanpa harus mengelola server. Lalu static frontend yang dimaksud adalah mengenai istilah website statis dan dinamis, kamu bisa membaca lebih lanjut [disini](https://community.aws/content/2c6dxofg1ys1QMBRom8CMOcFS1D/static-vs-dynamic-websites?lang=en). Karena Vercel bersifat serverless, sehingga tidak menjalankan sebuah server (kamu sebagai pelanggan tidak bisa menjalankan server sendiri, seperti `npm run start` atau `nodemon server.js`), maka sebagai alternatifnya, Vercel menyediakan fitur Serverless Function yang memungkinkan kamu untuk mengeksekusi logic (seperti membuat API untuk website atau mobile) di sisi server.

Github Action adalah platform *continuous integration* dan *continuous delivery* (CI/CD) yang memungkinkan kamu untuk mengotomatiskan alur build, test dan deployment, baca [disini](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) untuk mengetahui lebih lanjut tentang Github Action. Sedangkan yang dimaksud dengan *continuous integration* adalah praktik mengintegrasikan semua perubahan kode ke dalam repositori kode secara cepat dan sering, lalu secara otomatis menguji setiap perubahan kode. Lalu yang dimaksud dengan CD adalah mengacu kepada *continuous delivery* atau *continuous deployment*, yang mana, setelah dari proses CI, CD akan memastikan kode dikemas dengan semua yang diperlukan untuk diterapkan ke environment manapun dan kapanpun. CD bisa mencangkup segalanya, mulai dari penyediaan infrastruktur hingga penerapan aplikasi hingga environment testing atau production.

## Deploy Website ke Vercel
### 1. Upload Website ke Remote Repository di Github
Sebelumya pastikan kamu sudah mendownload website yang sudah saya sediakan (link ada di awal tutorial), lalu lakukan `npm install` dan pastikan website berjalan dengan normal.

> Sebaiknya ganti nama direktori website yang telah didownload menjadi "counter-js".

Berikut langkah-langkahnya:

<ul>
  <li>Buka terminal atau cmd pada <em>root</em> direktori website <em>counter-js</em> yang telah di download, kemudian jalankan <code>git init</code> untuk membuat repositori baru dan jangan lupa lakukan <em>commit</em>.</li>
  <li>Buat public remote repositori baru pada akun Github-mu, isi <em>Repository name</em>, <em>Decription (optional)</em> dan langsung klik <em>Create repository</em> (biarkan value yang lain default saja), seperti di bawah ini: <img alt="before create new repo" src="/posts/deploy-vercel-github-action/before-create-new-repo.png" width="1336" height="1224" loading="lazy" class="mt-6" decoding="async"/></li>
  <li>Lalu pastikan setelah kamu klik <em>Create repository</em>, maka akan diarahkan ke halaman seperti di bawah ini (yang menandakan repositori masih kosong): <img alt="after create new repo" src="/posts/deploy-vercel-github-action/after-create-new-repo.png" width="1336" height="656" loading="lazy" class="mt-6" decoding="async"/></li>
  <li>
    Kemudian buka kembali terminal pada <em>root</em> direktori website dan tambahkan remote repository dengan nama "origin" (kamu bisa menggunakan <em>ssh</em> atau <em>https</em>)
    <pre><code class="language-bash"># ssh
git remote add origin git@github.com:[username]/[remote-repo-name].git
# https
git remote add origin https://github.com/[username]/[repo-name].git
    </code></pre>
  </li>
  <li>
    Ganti nama branch <em>master</em> menjadi <em>main</em>
    <pre><code class="language-bash">git branch -M master main</code></pre>
  </li>
  <li>
    Dan lakukan <em>push</em> sekaligus <em>set upstream branch</em>
    <pre><code class="language-bash">git push -u origin main</code></pre>
  </li>
  <li>Terakhir, pastikan website <em>counter-js</em> telah berhasil terupload ke Github (dengan merefresh halaman).</li>
</ul>

### 2. Membuat Github Action Workflow (CI)
Workflow atau Github Action workflow adalah proses otomatis yang dapat dikonfigurasi yang akan menjalankan satu atau beberapa *jobs*. Workflow dibuat di direktori `.github/workflows` di dalam repositori, dengan bahasa YAML (*human-friendly data serialization
  language*). Workflow akan dijalankan ketika terpicu oleh suatu *event* di dalam repositori (seperti pull request, push, dll), atau dapat juga dipicu secara manual, atau juga bisa terpicu sesuai jadwal yang ditentukan. Satu repositori dapat memiliki banyak workflow dan masing-masing dari workflow itu dapat melakukan serangkaian tugas yang berbeda. Sebagai contoh, kamu dapat memiliki satu workflow untuk build dan test pull request, satu workflow lain untuk deploy aplikasi-mu setiap kali release dibuat dan satu workflow lain lagi yang menambahkan sebuah label setiap kali seseorang membuat *issue* baru.

Mengenai *event* dan *jobs*, *event* adalah aktivitas spesifik di dalam sebuah repositori yang memicu workflow dijalankan, sedangkan *jobs* adalah serangkaian langkah dalam workflow yang dijalankan pada *runner* yang sama dan *runner* itu sendiri adalah sebuah server yang menjalankan workflow ketika dipicu. Setiap runner dapat menjalankan satu job dalam satu waktu. Github sendiri menyediakan beberapa runner, yaitu, Ubuntu Linux, Microsoft Windows dan macOS.

Oke, untuk membuat workflow, buat direktori `.github/workflows/` di dalam root direktori website *counter-js*, lalu didalamnya buat file `ci.yml`, seperti dibawah ini:
![create ci yml](/posts/deploy-vercel-github-action/create-ci-yml.png)<!--rehype:width=564&height=439&loading=lazy&class=mt-6&decoding=async-->
Dan copy semua code dibawah ini ke dalam file `ci.yml`:
```yaml
name: Continious Integration

on:
  pull_request:
    branches: [main]

jobs:
  test-and-lint:

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Clean install dependencies
        run: npm ci

      - name: Run test and lint
        run: |
          npm run lint
          npm test
```
> Catatan: untuk indentasi tiap baris juga harus disesuaikan, karena hal itu bukan hanya untuk gaya saja, tetapi memang memiliki peran penting. Jika kamu ingin mempelajari YAML lebih lanjut, lihat [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).

Sekarang, saya akan menjelaskan setiap baris kode diatas, supaya kamu lebih memahami bagaimana YAML syntax digunakan untuk membuat workflow:

<ul>
  <li>
    Mendefinisikan nama dari workflow, nama ini nanti akan ditampilkan pada tab "Actions" di repositori kamu.
    <pre class="language-yaml"><code>name: Continious Integration</code></pre>
  </li>
  <li>
    Mendefinisikan pemicu dari workflow. Pada tutorial ini digunakan <code>pull_request</code> event dan dengan filter <code>branches</code>, yang berarti bahwa workflow akan dijalankan ketika sebuah pull request dibuka atau ketika pull request yang sudah ditutup dibuka kembali, atau ketika <em>head branch</em> (branch yang berisi perubahan yang ingin kamu integrasikan/terapkan) dari pull request diupdate, dengan syarat <em>base branch</em> (branch dimana perubahan akan diterapkan) harus cocok dengan branch yang ada di filter <code>branches</code>, yaitu branch <code>main</code>. Dengan kata lain, ketika misalnya sebuah pull request dibuka dengan target <em>base branch</em> selain branch <code>main</code>, maka workflow tidak akan dijalankan.
    <pre class="language-yaml"><code>on:
  pull_request:
    branches: [main]</code></pre>
    Mungkin kamu bertanya kenapa ketika pull request pada branch main yang akan memicu workflow CI dijalankan, hal ini karena, dalam tutorial ini konsepnya adalah, branch main akan berperan sebagai branch utama, ketika ingin menambahkan fitur baru, dsb, maka harus melakukan pull request ke branch main. Di sisi lain, ketika ada perubahan pada branch main, Vercel secara otomatis akan melakukan proses deployment. Sehingga dengan ini perlu untuk menjalankan workflow CI ketika misalnya dibuka pull request dengan target <em>base branch</em> adalah branch main.
  </li>
  <li>
    Mendefinisikan <em>job</em> dengan id <code>test-and-lint</code>.
    <pre class="language-yaml"><code>jobs:
  test-and-lint:</code></pre>
  </li>
  <li>
    Mendefinisikan <em>runner</em> yang akan menjalankan job <code>test-and-lint</code>. Yang mana dalam tutorial ini digunakan runner Ubuntu Linux.
    <pre class="language-yaml"><code>runs-on: ubuntu-latest</code></pre>
  </li>
  <li>
    Mendefinisikan <em>steps</em> (langkah-langkah) yang akan dijalankan pada <em>job</em>. Setiap step diawali dengan tanda hubung (-), sehingga pada kode dibawah ini berarti terdapat 2 step. Step pertama, menggunakan keyword <code>uses</code> untuk menjalankan sebuah <em>action</em> yang bernama <code>actions/checkout</code> dengan versi <code>v4</code>. Sebuah <em>action</em> adalah unit kode yang dapat digunakan kembali, <em>action</em> dapat berupa file JavaScript atau Docker Container. <em>Action</em> <code>actions/checkout</code> adalah sebuah <em>action</em> yang memeriksa repositori kamu ke <em>runner</em>, sehingga memungkinkan kamu untuk menjalankan script atau <em>action</em> lain terhadap kode kamu (seperti testing, lint, build, dsb). Kamu harus menggunakan <em>action</em> <code>actions/checkout</code> kapan pun workflow kamu akan mengakses/menggunakan kode repositori, seperti pada tutorial ini, karena butuh untuk menjalankan script <code>npm test</code> dan <code>npm run lint</code>, yang mana harus dijalankan di dalam kode repositori website <em>conter-js</em>, sehingga workflow perlu mengakses/menggunakan kode repositori. Step kedua, menggunakan keyword <code>uses</code> untuk menjalankan <em>action</em> <code>actions/setup-node@v4</code>, <em>action</em> ini berfungsi untuk setup workflow dengan versi node.js tertentu dan pada tutorial ini digunakan node.js versi 20 serta juga menggunakan cache untuk npm dependencies.
    <pre class="language-yaml"><code>steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
    node-version: 20
    cache: 'npm'</code></pre>
  </li>
  <li>
    Mendefinisikan 2 step terakhir yang menggunakan keyword <code>name</code> untuk menetapkan nama dari step dan keyword <code>run</code> untuk menjalankan command.
    <pre class="language-yaml"><code>- name: Clean install dependencies
  run: npm ci
  <br/>
- name: Run test and lint
  run: |
    npm run lint
    npm test</code></pre>
  </li>
</ul>

> Jika kamu ingin melihat dan belajar lebih detail mengenai syntax workflow, bisa lihat di [workflow syntax for Github Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions).

Setelah selesai membuat workflow saatnya mencoba workflow yang telah dibuat, untuk itu, kamu bisa melakukan *commit* lalu *push* terlebih dahulu untuk menyimpan workflow yang telah dibuat dan pastikan di remote repositori pada tab *Actions* pada sidebar menu sebelah kiri terdapat workflow dengan nama *Continious Integration* yang telah dibuat sebelumnya:
![push ci yml](/posts/deploy-vercel-github-action/push-ci-yml.png)<!--rehype:width=1366&height=656&loading=lazy&class=mt-6&decoding=async-->

Untuk memicu workflow, buat branch baru dan lakukan perubahan apapun di local repositori, setelah itu lakukan *commit* lalu *push* dan buka sebuah pull request ke branch main. Jika tidak ada masalah pada workflow yang dibuat, maka secara otomatis workflow akan dijalankan:
![test workflow pending](/posts/deploy-vercel-github-action/test-workflow-pending.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Jika proses CI yang dijalankan berhasil (artinya lolos test dan lint) maka akan berstatus *pass*:
![test workflow pass](/posts/deploy-vercel-github-action/test-workflow-pass.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Untuk sekarang harap jangan melakukan *Merge pull request* terlebih dahulu dan lanjut ke langkah selanjutnya, yaitu membuat proses deploy dengan Vercel, sehingga nantinya ketika dilakukan *Merge pull request*, maka Vercel akan secara otomatis men-deploy website *counter-js*.


Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
