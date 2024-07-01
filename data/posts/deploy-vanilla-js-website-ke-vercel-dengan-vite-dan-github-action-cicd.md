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
git remote add origin https://github.com/[username]/[remote-repo-name].git
    </code></pre>
    Ganti <code>[username]</code> dengan username Github-mu dan <code>[remote-repo-name]</code> dengan nama remote repositori-mu.
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
    Mungkin kamu bertanya kenapa ketika pull request pada branch main yang akan memicu workflow CI dijalankan, hal ini karena, dalam tutorial ini konsepnya adalah, branch main akan berperan sebagai branch utama, ketika ingin menambahkan fitur baru, dsb, maka harus melakukan pull request ke branch main. Di sisi lain, ketika ada perubahan yang diterapkan ke branch main, Vercel secara otomatis akan melakukan proses deployment. Sehingga dengan ini perlu untuk menjalankan workflow CI ketika misalnya dibuka pull request dengan target <em>base branch</em> adalah branch main.
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

Setelah selesai membuat workflow saatnya mencoba workflow yang telah dibuat, untuk itu, kamu bisa melakukan *commit* lalu *push* terlebih dahulu untuk menyimpan workflow dan pastikan di remote repositori pada tab *Actions* pada sidebar menu sebelah kiri terdapat workflow dengan nama *Continious Integration*:
![push ci yml](/posts/deploy-vercel-github-action/push-ci-yml.png)<!--rehype:width=1366&height=656&loading=lazy&class=mt-6&decoding=async-->

Untuk memicu workflow agar dijalankan, buat branch baru dan lakukan perubahan apapun di local repositori, setelah itu lakukan *commit* lalu *push* dan buka sebuah pull request ke branch main. Jika tidak ada masalah pada workflow yang dibuat, maka secara otomatis workflow akan dijalankan:
![test workflow pending](/posts/deploy-vercel-github-action/test-workflow-pending.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Jika proses CI yang dijalankan berhasil (artinya lolos test dan lint) maka akan berstatus *pass*:
![test workflow pass](/posts/deploy-vercel-github-action/test-workflow-pass.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Untuk sekarang tidak perlu untuk melakukan *Merge pull request* atau semacamnya, karena ini hanya bertujuan untuk melihat apakah workflow akan dijalankan ketika misalnya sebuah pull request dibuka ke branch main. Untuk itu kamu bisa *Close pull request* tersebut dengan scroll ke paling bawah halaman dan klik button *Close pull request*:
![close pull request](/posts/deploy-vercel-github-action/close-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

## 3. Deploy Dengan Vercel (CD)
Untuk deploy dengan vercel ikuti langkah-langkah berikut:

> Dalam membuat akun vercel di tahap ini saya menggunakan akun Github lain (amruk53sh), untuk menunjukkan cara membuat akun Vercel dari awal.

- Buat akun Vercel dengan buka halaman [Sign Up Vercel](https://vercel.com/signup), lalu pada bagian *Plan type*, karena ini tujuannya untuk belajar maka pilih *Hobby*, lalu pada kolom input *Your name*, isi dengan nama kamu dan klik button *Continue*:
![sign up vercel](/posts/deploy-vercel-github-action/sign-up-vercel.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Lalu kamu akan diarahkan ke suatu halaman untuk menghubungkan akun Vercel kamu dengan Git provider, karena dalam tutorial ini menggunakan Github, maka klik button *Continue With Github*:
![connect vercel github](/posts/deploy-vercel-github-action/connect-vercel-github.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Setelah itu akan terbuka pop up window *Authorize Vercel*, yang intinya Vercel ingin meminta persetujuan dari kamu untuk mengakses beberapa hal di akun Github kamu. Klik button *Authorize Vercel* untuk menyetujui:
![authorize vercel](/posts/deploy-vercel-github-action/authorize-vercel.png)<!--rehype:width=818&height=680&loading=lazy&class=mt-6&decoding=async-->
- Kemudian kamu akan diminta mengisi nomor telepon. Pilih negara Indonesia, lalu isi dengan nomor aktif kamu (ini hanya untuk verifikasi) dan klik button *Continue*:
![insert phone number vercel](/posts/deploy-vercel-github-action/insert-phone-number-vercel.png)<!--rehype:width=826&height=682&loading=lazy&class=mt-6&decoding=async-->
- Selanjutnya kamu perlu memasukkan 4 kode yang telah dikirim ke nomor telepon kamu dan selamat akun Vercel kamu sudah berhasil dibuat:
![verify vercel sign up](/posts/deploy-vercel-github-action/verify-vercel-sign-up.png)<!--rehype:width=820&height=685&loading=lazy&class=mt-6&decoding=async-->
- Tunggu sebentar sampai kamu diarahkan ke halaman untuk membuat projek baru (seperti dibawah ini), jika agak lama, tidak apa-apa, tetap tunggu. Karena sebelumnya sudah memiliki projek yang ingin dideploy, maka kamu hanya perlu untuk melakukan *Import Git Repository* saja. Untuk melakukan import, kamu perlu install Vercel di akun Github-mu, caranya dengan klik button *Install* pada bagian *Import Git Repository*:
![install-github-app-vercel](/posts/deploy-vercel-github-action/install-vercel.png)<!--rehype:width=1366&height=1151&loading=lazy&class=mt-6&decoding=async-->
- Lalu kamu akan dimintai semacam persetujuan oleh Vercel untuk beberapa izin terkait menginstall Vercel di akun Github-mu, kamu bisa membaca apa saja izin tersebut, selanjutnya jangan lupa untuk memilih *Only select repositories*, kemudian pilih repositori website *counter-js* dan klik button *Install* (scroll ke bawah jika kamu belum melihat button tersebut):
![permission install github app vercel](/posts/deploy-vercel-github-action/permission-install-vercel.png)<!--rehype:width=818&height=682&loading=lazy&class=mt-6&decoding=async-->
- Setelah itu kamu tinggal klik button *Import* di bagian *Import Git Repository*:
![importing project counter js](/posts/deploy-vercel-github-action/importing-project-counter-js.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Sebelum deploy, kamu akan diminta untuk melakukan konfigurasi projek, seperti *Project Name*, *Framework Preset*, *Root Directory*, *Build and Output Settings* dan *Environment Variables*. Tetapi untuk di tutorial ini, kamu tidak perlu merubah apapun karena Vercel sudah membuat konfigurasi default, kamu bisa langsung klik button *Deploy* untuk deploy website *counter-js* dan tunggu sampai proses deploy selesai:
![configure project vercel](/posts/deploy-vercel-github-action/configure-project-vercel.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Selamat kamu telah berhasil deploy website *counter-js* dengan Vercel. Selanjutnya kamu bisa klik button *Continue to Dashboard* untuk melihat detail dari website *counter-js* yang telah di deploy:
![success deploy](/posts/deploy-vercel-github-action/success-deploy.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
- Kemudian kamu akan dialihkan ke halaman dashboard dari website yang telah berhasil dideploy. Untuk mengunjungi website yang telah dideploy kamu bisa klik button *Visit*:
![dashboard vercel](/posts/deploy-vercel-github-action/dashboard-vercel.png)<!--rehype:width=1366&height=759&loading=lazy&class=mt-6&decoding=async-->

Setelah berhasil deploy website *counter-js* ke Vercel, seperti penjelasan saya sebelumnya, bahwa ketika ada perubahan yang diterapkan ke branch main, maka Vercel secara otomatis akan melakukan proses deployment. Maka untuk memastikan apakah betul berjalan seperti itu, buat branch baru, lalu lakukan perubahan apapun di repositori local (agar mudah melihat perbedaan antara deployment sebelumnya dan yang baru, buat perubahan pada tampilan website di file `main.js`) dan lakukan commit kemudian push.

Selanjutnya buka sebuah pull request ke branch main, tunggu semua pengecekan lolos dan lakukan *Merge pull request* dengan klik button *Merge pull request*:
![merge pull request](/posts/deploy-vercel-github-action/merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Karena melakukan *merge*, maka kamu akan diminta untuk mengisi commit *message* dan commit *description*, kamu bisa merubahnya atau biarkan default dan klik button *Confirm merge*:
![confirm merge pull request](/posts/deploy-vercel-github-action/confirm-merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Jika pada button tidak terdapat kata *Merge pull request*, maka klik dropdown menu pada button dan pilih *Create a merge commit*:
![button merge pull request](/posts/deploy-vercel-github-action/button-merge-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Setelah merge pull request berhasil, untuk melihat apakah deployment otomatis dijalankan, opsi pertama, kamu bisa melihat langsung pada website *counter-js* yang telah di deploy, apakah terdapat perubahan (jika kamu melakukan perubahan pada tampilan website), atau opsi kedua, kamu bisa membuka tab *Deployments* pada halaman dashboard website *counter-js*, disana kamu bisa melihat deployment terbaru adalah deployment dari merge pull request yang sebelumnya kamu lakukan, ini menandakan bahwa betul Vercel secara otomatis melakukan deployment ketika ada perubahan yang diterapkan pada branch main:
![automatic deployment](/posts/deploy-vercel-github-action/automatic-deployment.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.
