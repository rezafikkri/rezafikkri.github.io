---
id: "e4ed6a0e-39cc-4f5a-aca9-bb482af687e6"
title: "Deploy Website dengan CI/CD #2: GitHub Actions Workflow"
lastmod: 1720767708928
topics: ["e5d6b8ea-d8e0-4bd2-8bb3-d74d08dc5669","ab8888e2-d055-4507-aec3-7cadb0d36d98","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "deploy-website-dengan-cicd-2-github-actions-workflow"
ogImage: "https://res.cloudinary.com/rezafikkri/image/upload/q_auto/2-deploy-vercel-github-action.png"
ogImageWidth: 1920
ogImageHeight: 1080
serial: {"id":"ede13e57-95e1-425e-9e07-f5f686cb3990","order":2}
---

Setelah membahas beberapa teori terkait lalu membuat remote repositori di GitHub dan mengupload website counter-js ke remote repositori tersebut pada seri ke-1. Pada seri ke-2 ini kita akan sama-sama belajar membuat GitHub Actions workflow untuk proses CI, yang nantinya secara otomatis akan menjalankan unit testing dan linting ketika pull request dibuka ke branch main atau ketika pull request yang sudah ditutup dibuka kembali, atau ketika *head branch* (branch yang berisi perubahan yang ingin kamu integrasikan/terapkan) dari pull request diupdate. Tetapi sebelum itu, tentunya perlu untuk memahami apa itu GitHub Actions workflow.

> **Info:** Pastikan kamu sudah mengikuti bagian ke-1. Jika belum, kamu bisa scroll ke paling bawah halaman ini sampai pada bagian Daftar Seri Tulisan dan klik link pada bagian ke-1.

## Apa itu GitHub Actions Workflow?

<!-- excerpt -->GitHub Actions workflow adalah *automated process* (proses otomatis) yang dapat dikonfigurasi yang akan menjalankan satu atau beberapa *jobs*. Workflow dibuat di direktori<!-- excerpt --> `.github/workflows` di dalam repositori, dengan bahasa YAML (*human-friendly data serialization
  language*). Workflow akan dijalankan ketika terpicu oleh suatu *event* di dalam repositori (seperti pull request, push, dll), atau dapat juga dipicu secara manual, atau juga bisa terpicu sesuai jadwal yang ditentukan. Satu repositori dapat memiliki banyak workflow dan masing-masing dari workflow itu dapat melakukan serangkaian tugas yang berbeda. Sebagai contoh, kamu dapat memiliki satu workflow untuk build dan test pull request, satu workflow lain untuk deploy aplikasi-mu setiap kali release dibuat dan satu workflow lain lagi yang menambahkan sebuah label setiap kali seseorang membuat *issue* baru.

Mengenai *event* dan *jobs*, *event* adalah aktivitas spesifik di dalam sebuah repositori yang memicu workflow dijalankan, sedangkan *jobs* adalah serangkaian langkah dalam workflow yang dijalankan pada *runner* yang sama dan *runner* itu sendiri adalah sebuah server yang menjalankan workflow ketika dipicu. Setiap *runner* dapat menjalankan satu job dalam satu waktu. GitHub sendiri menyediakan beberapa *runner*, yaitu, Ubuntu Linux, Microsoft Windows dan macOS.

## Membuat GitHub Actions Workflow

Oke, untuk membuat workflow, buat direktori `.github/workflows/` di dalam direktori utama website counter-js, lalu didalamnya buat file `ci.yml`, seperti dibawah ini:
![create ci yml](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/create-ci-yml.png)<!--rehype:width=564&height=439&loading=lazy&class=mt-6&decoding=async-->
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
> **Catatan:** untuk indentasi tiap baris juga harus disesuaikan, karena hal itu bukan hanya untuk gaya saja, tetapi memang memiliki peran penting. Jika kamu ingin mempelajari YAML lebih lanjut, lihat [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).

Sekarang, saya akan menjelaskan setiap baris kode diatas, supaya kamu lebih memahami bagaimana YAML syntax digunakan untuk membuat workflow:

<ul>
  <li>
    Mendefinisikan nama dari workflow, nama ini nanti akan ditampilkan pada tab <strong>Actions</strong> di repositori kamu:
    <pre class="language-yaml"><code>name: Continious Integration</code></pre>
  </li>
  <li>
    Mendefinisikan pemicu dari workflow. Pada tutorial ini digunakan <code>pull_request</code> event dan dengan filter <code>branches</code>, yang berarti bahwa workflow akan dijalankan ketika sebuah pull request dibuka atau ketika pull request yang sudah ditutup dibuka kembali, atau ketika <em>head branch</em> (branch yang berisi perubahan yang ingin kamu integrasikan/terapkan) dari pull request diupdate, dengan syarat <em>base branch</em> (branch dimana perubahan akan diterapkan) harus cocok dengan branch yang ada di filter <code>branches</code>, yaitu branch <code>main</code>. Dengan kata lain, ketika misalnya sebuah pull request dibuka dengan target <em>base branch</em> selain branch <code>main</code>, maka workflow tidak akan dijalankan:
    <pre class="language-yaml"><code>on:
  pull_request:
    branches: [main]</code></pre>
    Mungkin kamu bertanya kenapa ketika pull request dibuka ke branch main yang akan memicu workflow CI dijalankan, hal ini karena (terkait dengan konsep yang saya jelaskan pada seri ke-1), ketika telah dibuka pull request ke branch main maka berarti perubahan tersebut telah siap untuk dideploy, tetapi sebelum dideploy tentunya perlu untuk melakukan beberapa pengujian (seperti unit testing, dsb), sehingga diharapkan bisa mengurangi resiko kesalahan (error) ter-deploy oleh Vercel ke production.
  </li>
  <li>
    Mendefinisikan <em>job</em> dengan id <code>test-and-lint</code>:
    <pre class="language-yaml"><code>jobs:
  test-and-lint:</code></pre>
  </li>
  <li>
    Mendefinisikan <em>runner</em> yang akan menjalankan <em>job</em> <code>test-and-lint</code>. Yang mana dalam tutorial ini digunakan runner Ubuntu Linux:
    <pre class="language-yaml"><code>runs-on: ubuntu-latest</code></pre>
  </li>
  <li>
    Mendefinisikan <em>steps</em> (langkah-langkah) yang akan dijalankan pada <em>job</em>. Setiap <em>step</em> diawali dengan tanda hubung (-), sehingga pada kode dibawah ini berarti terdapat 2 <em>step</em>. <em>Step</em> pertama, menggunakan keyword <code>uses</code> untuk menjalankan sebuah <em>action</em> yang bernama <code>actions/checkout</code> dengan versi <code>v4</code>. Sebuah <em>action</em> adalah unit kode yang dapat digunakan kembali, <em>action</em> dapat berupa file JavaScript atau Docker Container. <em>Action</em> <code>actions/checkout</code> adalah sebuah <em>action</em> yang memeriksa repositori kamu ke <em>runner</em>, sehingga memungkinkan kamu untuk menjalankan script atau <em>action</em> lain terhadap kode kamu (seperti unit testing, linting, build, dsb). Kamu harus menggunakan <em>action</em> <code>actions/checkout</code> kapan pun workflow kamu akan mengakses/menggunakan kode repositori, seperti pada tutorial ini, karena butuh untuk menjalankan script <code>npm test</code> dan <code>npm run lint</code>, yang mana harus dijalankan di dalam kode repositori website counter-js, sehingga workflow perlu mengakses/menggunakan kode repositori. <em>Step</em> kedua, menggunakan keyword <code>uses</code> untuk menjalankan <em>action</em> <code>actions/setup-node@v4</code>, <em>action</em> ini berfungsi untuk setup node.js dengan versi tertentu pada workflow kamu dan pada tutorial ini digunakan node.js versi 20 serta juga setup untuk melakukan cache terhadap npm dependencies:
    <pre class="language-yaml"><code>steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
    node-version: 20
    cache: 'npm'</code></pre>
  </li>
  <li>
    Mendefinisikan 2 <em>step</em> terakhir yang menggunakan keyword <code>name</code> untuk menetapkan nama dari <em>step</em> dan keyword <code>run</code> untuk menjalankan command:
    <pre class="language-yaml"><code>- name: Clean install dependencies
  run: npm ci
  <br/>
- name: Run test and lint
  run: |
    npm run lint
    npm test</code></pre>
  </li>
</ul>

> **Info:** Jika kamu ingin melihat dan belajar lebih detail mengenai syntax workflow, bisa lihat di [workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions).

Setelah selesai membuat workflow saatnya mencoba workflow yang telah dibuat, untuk itu, kamu bisa melakukan commit lalu push terlebih dahulu untuk mengupload workflow ke remote repositori dan pastikan di remote repositori pada tab **Actions** &raquo; pada sidebar menu sebelah kiri terdapat workflow dengan nama **Continious Integration**:
![push ci yml](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/push-ci-yml.png)<!--rehype:width=1366&height=656&loading=lazy&class=mt-6&decoding=async-->

Untuk memicu workflow agar dijalankan, buat branch baru dan lakukan perubahan apapun di local repositori, setelah itu lakukan commit lalu push dan buka sebuah pull request ke branch main. Jika tidak ada masalah pada workflow yang dibuat, maka secara otomatis workflow akan dijalankan:
![test workflow pending](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/test-workflow-pending.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->
Jika proses CI yang dijalankan berhasil (artinya lolos testing dan linting) maka akan berstatus *pass*:
![test workflow pass](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/test-workflow-pass.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Untuk sekarang tidak perlu untuk melakukan *Merge pull request* atau semacamnya, karena ini hanya bertujuan untuk melihat apakah workflow akan dijalankan ketika misalnya sebuah pull request dibuka ke branch main. Untuk itu kamu bisa *Close pull request* tersebut dengan scroll ke paling bawah halaman dan klik button *Close pull request*:
![close pull request](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/close-pull-request.png)<!--rehype:width=1351&height=656&loading=lazy&class=mt-6&decoding=async-->

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.

### Referensi:
[Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
