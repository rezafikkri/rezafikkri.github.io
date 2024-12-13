---
id: "e3e9c456-8c4b-4470-850d-82ae1c5262c4"
title: "Bagaimana Cara Kerja Cookie dan Session?"
lastmod: 1725383570416
topics: ["50d103e8-2275-4b09-8dea-5105ab5e9838","56863ee6-39ae-40d2-94ca-34e0805ce291","b2ded9c2-dea9-4427-a4aa-3b5a24e89468","cdc80207-597b-4fb7-b572-53b68c9f1a78","3b2bf050-b69c-4438-b3d9-ed0a3a5e0911"]
slug: "bagaimana-cara-kerja-cookie-dan-session"
ogImage: "/posts/bagaimana-cara-kerja-cookie-dan-session/cara-kerja-cookie-session.png"
---

Bismillah.

Bagi kamu yang merupakan Web Developer ataupun kamu yang pernah belajar tentang Web Programming, pasti pernah menggunakan Cookie dan Session, misalnya pada saat membuat fitur Login, serta juga fitur seperti *Remember me* yang terdapat pada halaman Login. Mungkin diantara kalian ada yang berfikir bahwa Cookie dan Session adalah sesuatu yang berbeda, Session ya Session, Cookie ya Cookie (tidak memiliki hubungan apapun), saya dulu juga berfikir bahwa Session itu langsung tahu aja bahwa pengguna itu sudah Login atau belum. <!-- excerpt -->Tapi ternyata, Session itu tidak memiliki sesuatu hal yang *magic*, sebenarnya dibelakang layar Session menggunakan Cookie juga<!-- excerpt -->.

Menurut saya memahami cara kerja Cookie dan Session merupakan hal yang penting untuk seorang Web Developer, dulu waktu awal-awal belajar Web Programming, karena tidak begitu memahami Cookie dan Session, ketika saya yang biasanya menggunakan PHP dengan fitur Session-nya untuk membuat sistem Login, lalu mencoba membuat sistem Login dengan JavaScript dan NodeJs, menjadi bingung, karena di NodeJS tidak ada fitur Session bawaan seperti di PHP, di NodeJS kita biasanya menggunakan library pihak ketiga dari npm. Lebih bingung-nya lagi Session di NodeJS itu kok menggunakan Cookie? dan akhirnya saya berkesimpulan bahwa ini bukan Session, karena tidak sama seperti Session di PHP yang biasanya saya gunakan. Padahal jika memahami cara kerja Cookie dan Session sebelumnya, hal itu adalah benar fitur Session yang biasanya saya gunakan di PHP.

### Prasyarat
Sebelum lanjut membaca, ada beberapa prasyarat yang harus terpenuhi, supaya kamu lebih mudah dalam memahami topik yang akan dibahas:
1. Memahami mengenai HTTP, terutama HTTP Header
2. Memahami apa itu model Client-Server
3. Memahami bagaimana cara Browser bekerja
4. Memagami apa itu URL dan bagaian-bagian yang menyusunnya.

Untuk semua prasyarat diatas kecuali nomor 3, bisa kamu pelajari di kelas gratis [Belajar HTTP Untuk Pemula Programmer Zaman Now](https://www.udemy.com/course/belajar-http-untuk-pemula). Jika prasyarat di atas sudah terpenuhi, kamu bisa lanjut membaca.

## Apa itu Cookie dan Bagaimana Cara Kerjanya?
Cookie adalah kumpulan data kecil yang berisi informasi yang dikirim oleh Server ke Client (Browser). Cookie juga dikenal sebagai *Web Cookie*, *Browser Cookie*, atau *Internet Cookie*. 

Cara kerja Cookie secara umum yaitu, Browser mengirim HTTP Request ke Server, lalu Server akan menyertakan header `Set-Cookie` (yang berisi data cookie-nya) pada HTTP Response, kemudian Browser akan menyimpan data yang terdapat pada header `Set-Cookie`, lalu pada request-request berikutnya, Browser akan menyertakan data Cookie tersebut pada HTTP Request header `Cookie`. Berikut jika digambarkan dalam bentuk diagram:
![Cookie Diagram](/posts/bagaimana-cara-kerja-cookie-dan-session/cookie-diagram.svg)<!--rehype:width=802&height=441&loading=lazy&decoding=async-->

Berikut adalah contoh dimana kita misalnya membuat Cookie "session identifier" dengan nama `SIDR` dan value `31d4d96e407aad42`:
```http
Set-Cookie: SIDR=31d4d96e407aad42
```
Lalu pada request-request berikutnya Browser akan menyertakan header `Cookie` seperti ini:
```http
Cookie: SIDR=31d4d96e407aad42
```

Dalam membuat Cookie kamu harus memperhatikan batas (*limit*) yang telah ditentukan, yaitu setidaknya maksimal ukuran per Cookie adalah 4096 bytes, ukuran tersebut tidak hanya dihitung dari value Cookie, tetapi juga nama dan atribut-atributnya. Selain itu juga, setidaknya per domain maksimal hanya 50 Cookie. Batasan tersebut adalah sebagaimana ditetapkan pada [RFC 6265](https://www.rfc-editor.org/rfc/rfc6265.html#page-27). Batasan tersebut juga bisa berbeda disetiap browser, tetapi biasanya perbedaannya tidak terlalu jauh.

Dalam membuat Cookie juga tidak disarankan memasukkan data terlalu banyak, karena semua data di Cookie akan selalu dikirim di setiap request, semakin banyak data, maka website kamu akan semakin lambat.

Secara default Cookie memiliki waktu *Expired* (kadaluarsa), yaitu "session", yang mana ini berarti bahwa Coookie akan dihapus ketika sesi (*session*) berakhir, yaitu biasanya ketika Browser ditutup (*Browser closed*). Jika kamu ingin misalnya data Cookie tetap ada walaupun Browser ditutup, maka bisa mengatur waktu kadaluarsa Cookie pada atribut `Expires`, contoh:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Expires=Wed, 09 Jan 2024 10:18:14 GMT
```

> Titik koma (;) digunakan sebagai pemisah antara atribut, maka dari itu nama Cookie tidak bisa mengandung karakter tersebut, lebih detailnya bisa kunjungi [cookie-name](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie-namecookie-value).

Waktu kadaluarsa ini harus dalam timezone GMT (*Greenwich Mean Time*), karena HTTP date selalu dibuat atau direpresentasikan dalam GMT, tidak pernah dalam waktu local. Dan format waktu kadaluarsa ini berdasarkan [spesifikasi HTTP date](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date) adalah:
```http
<day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

Sebenarnya, masalah waktu kadaluarsa ini tidak perlu terlalu dipusingkan, kamu hanya perlu mengikuti format diatas dan Browser akan otomatis melakukan validasi apakah Cookie tersebut sudah kadaluarsa atau belum, relatif terhadap waktu client (Browser) dimana Cookie disimpan. Dengan kata lain Browser akan secara otomatis menyesuaikan timezone waktu kadaluarsa Cookie dengan timezone Browser, yang biasanya sama dengan pengaturan timezone di komputer kamu. Untuk lebih mudah dalam menentukan waktu kadaluarsa, kamu bisa menentukan waktu kadaluarsa dalam timezone saat ini, misalnya `Asia/Jakarta`, lalu konversi ke dalam timezone GMT, biasanya untuk setiap bahasa pemrograman, sudah menyediakan fungsi bawaan untuk kebutuhan seperti konversi timezone. Bahkan di bahasa pemrograman seperti PHP misalnya, ketika membuat Cookie, kamu tidak perlu memikirkan masalah timezone, karena kamu hanya perlu memasukkan waktu kadaluarsa dalam format Epoch Time, misalnya kamu ingin Cookie kadaluarsa dalam waktu 30 hari, maka kamu bisa membuat Epoch Time untuk 30 hari dari hari sekarang dengan kode `time()+60*60*24*30`.

Sebagai catatan, Browser mungkin menghapus Cookie sebelum waktu kadaluarsanya jika Cookie yang disimpan telah melebihi batas (*limit*), atau jika pengguna secara manual menghapus Cookie-nya, misalnya pengguna menghapus Cookie melalui Browser secara langsung atau ketika pengguna menggunakan software untuk membersihkan Sistem dan ruang penyimpanan, semacam BleachBit atau CCleaner.

Selain waktu kadaluarsa, kamu juga bisa mengatur *Scope* (Cangkupan) dari Cookie dengan menggunakan atribut `Path` dan `Domain`, sehingga nantinya Cookie hanya akan disertakan pada HTTP Request, ketika target dari HTTP Request sesuai dengan Path (serta sub-pathnya) dan Domain (serta sub-domainnya) yang kamu atur. Sebagai contoh misalnya kamu ingin suatu Cookie hanya disertakan pada HTTP Request ketika target-nya menuju ke Path `/cookie` (serta sub-pathnya) dari Domain `coba.rezafikkri` (serta sub-domainnya), maka atur seperti ini:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/cookie; Domain=coba.rezafikkri
```
Maka nanti ketika kamu mengakses halaman `coba.rezafikkri/cookie`, `coba.rezafikkri/cookie/other`, atau `cookie.coba.rezafikkri/cookie` dan sebagainya, Cookie akan terus disertakan pada setiap HTTP Request, tetapi ketika kamu mengakses halaman `coba.rezafikkri`, `coba.rezafikkri/other` atau `cookie.coba.rezafikkri` misalnya, Cookie tidak akan disertakan pada HTTP Request, karena walaupun Domain dari halaman-halaman tersebut sesuai dengan yang kita atur, tetapi pada bagian Path-nya tidak sesuai, karena Path-nya bukan `/cookie` dan bukan sub-path dari `/cookie`. 

Atau contoh lainnya, jika kamu ingin Cookie disertakan untuk setiap Request ke semua Path dari Domain `coba.rezafikkri` (serta sub-domainnya), maka kamu bisa atur seperti ini:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/; Domain=coba.rezafikkri
```
Maka Cookie akan disertakan untuk setiap HTTP Request yang mengarah ke: `coba.rezafikkri`, `cookie.coba.rezafikkri`, `coba.rezafikkri/cookie`, `cookie.coba.rezafikkri/other` dan sebagainya.

Pada intinya untuk domain, jika kamu menentukan nilai dari atribut `Domain`, maka Cookie hanya akan disertakan untuk HTTP Request yang mengarah ke domain tersebut dan semua subdomain-nya. Tetapi jika kamu tidak menentukan nilai dari atribut `Domain`, maka Cookie hanya akan disertakan untuk HTTP Request yang mengarah ke domain dimana Cookie dibuat (karena nilai default dari atribut `Domain` adalah domain dimana Cookie dibuat) dan tidak untuk semua subdomain-nya. Dan mau kamu menentukan atau tidak nilai dari atribut `Domain`, Cookie tidak akan pernah disertakan pada HTTP Request yang mengarah ke parent domain dari domain tersebut (jika domain tersebut memiliki parent domain), misalnya kamu membuat Cookie di domain `cookie.coba.rezafikkri`, maka parent domainnya adalah `coba.rezafikkri`, sehingga jika HTTP Request mengarah ke parent domain tersebut, Cookie tidak akan disertakan.

Sedangkan untuk path, mau kamu menentukan atau tidak nilai dari atribut `Path`, maka Cookie hanya akan disertakan untuk HTTP Request yang mengarah ke path tersebut dan semua subpath-nya. Nilai default dari atribut `Path` adalah path dimana Cookie dibuat.

Dan tentunya Cookie hanya akan disertakan jika path dan domain dari HTTP Request tersebut cocok dengan nilai dari atribut `Path` dan `Domain`.

Nilai untuk atribut `Domain` hanya bisa domain dimana kamu membuat Cookie, atau parent domain dari domain tersebut (jika domain tersebut memiliki parent domain), tidak bisa domain lain yang benar-benar berbeda. Contoh, jika kamu membuat Cookie pada domain `coba.rezafikkri`, maka nilai dari atribut `Domain` hanya bisa domain itu saja (karena domain tersebut merupakan [root domain](https://www.siteground.com/kb/what-is-a-root-domain/) yang tidak memiliki parent domain) dan tidak bisa domain lain yang benar-benar berbeda seperti `php.net` misalnya, namun jika kamu membuat Cookie pada subdomain `cookie.coba.rezafikkri`, maka nilai dari atribut `Domain` hanya bisa subdomain itu saja dan parent domainnya, yaitu `coba.rezafikkri` dan tentu juga tidak bisa domain lain yang benar-benar berbeda.

Jika kamu ingin membuat lebih dari satu Cookie dalam satu HTTP Response, kamu bisa bisa mendefinisikan dua atau lebih header `Set-Cookie` sekaligus seperti ini:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/; Domain=coba.rezafikkri
Set-Cookie: lang=en-US; Path=/; Expires=Wed, 09 Jan 2024 10:18:14 GMT
```
dan pada request-request berikutnya Browser akan menyertakan header `Cookie` seperti ini:
```http
Cookie: SIDR=31d4d96e407aad42; lang=en-US
```

Selain mengatur waktu kadaluarsa dan scope dari Cookie, kamu juga bisa mengatur supaya Cookie tidak bisa diakses melalui JavaScript yang ada di Browser (seperti menggunakan `document.cookie`), yaitu dengan mengatur atribut `HttpOnly`, seperti ini:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/; HttpOnly; Expires=Wed, 12 Des 2024 10:18:14 GMT
```
Jika kamu membuat fitur Login yang bertahan lama, sehingga walaupun Browser ditutup pengguna akan tetap login, yang sekarang banyak diterapkan oleh perusahaan besar seperti Google misalnya dan kamu menggunakan Cookie untuk menentukan pengguna sudah login atau belum, maka sangat disarankan untuk mengatur atribut `HttpOnly`. Dengan mengatur atribut `HttpOnly` pada fitur login misalnya, akan membantu mencegah serangan yang bernama [Cross-Site Scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) yang bisa mencuri Cookie yang digunakan untuk menentukan suatu pengguna sudah login atau belum.

Selain atribut `HttpOnly`, kamu juga bisa mengatur supaya Cookie hanya akan dikirim untuk Request yang menggunakan protocol HTTPS, yaitu dengan mengatur atribut `Secure`, seperti ini:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/; Secure; HttpOnly; Expires=Wed, 12 Des 2024 10:18:14 GMT
```
Dengan mengatur atribut `Secure`, akan membantu mencegah penyerang [Man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) mengakses Cookie dengan mudah. Dan juga website yang menggunakan protocol HTTP tidak bisa membuat Cookie dengan atribut `Secure`. Tetapi jika kamu membuat website di localhost (dengan menggunakan host localhost dan tidak menggunakan [virtual host](https://httpd.apache.org/docs/2.4/vhosts/)), Cookie akan tetap bisa dibuat dan dikirim, walaupun menggunakan protocol HTTP.

Terakhir, untuk menghapus Cookie, caranya cukup mudah, kamu hanya perlu mengatur waktu kadaluarsa menjadi sebelum waktu saat ini, sehingga nantinya Browser akan secara otomatis menghapus Cookie tersebut, karena dianggap sudah kadaluarsa. Tetapi perlu diingat, value dari atribut `Path` dan `Domain` harus sama dengan Cookie yang ingin dihapus. Misalnya saat membuat Cookie:
```http
Set-Cookie: SIDR=31d4d96e407aad42; Path=/cookie; Domain=coba.rezafikkri
```
Lalu karena saat menghapus Cookie waktu saat ini adalah `Sun, 24 Nov 2024 03:42:10 GMT`, maka atur waktu kadaluarsa menjadi waktu sebelum itu dan jangan lupa pastikan value dari atribut `Path` dan `Domain` sama:
```http
Set-Cookie: SIDR=; Path=/cookie; Domain=coba.rezafikkri; Expires=Sun, 24 Nov 2024 02:42:10 GMT
```

## Apa itu Session dan Bagaimana Cara Kerjanya?
Setelah membahas mengenai Cookie, sekarang kita akan membahas mengenai Session, yang sebenarnya masih berkaitan dengan Cookie.

Session adalah cara atau teknik untuk menyimpan informasi client di Server. Session juga sebenarnya menggunakan Cookie, namun bedanya nilai expire dari cookie Session biasanya adalah "session", yang berarti jika sesi telah berakhir maka Session akan otomatis dihapus dan tidak seperti Cookie yang mana informasi-nya disimpan di Client (Browser), kalau Session, informasi-nya disimpan di Server, baik itu di dalam file, di dalam database dan lain-lain. Sedangkan yang dikembalikan oleh Server melalui header `Set-Cookie` pada HTTP Response adalah biasanya ID dari Sessionnya. Selain itu juga, Session tidak ada di spesifikasi HTTP, berbeda dengan Cookie yang mana ada di spesifikasi HTTP.

Cara kerja Session secara umum adalah, Browser mengirim HTTP Request ke Server, lalu Server akan membuat Session dan menyimpan Session tersebut, misalnya di database, selanjutnya Server akan mengirim HTTP Response ke Browser disertai header `Set-Cookie` yang berisi ID dari Session tersebut, pada request selanjutnya Browser akan menyertakan Cookie yang berisi ID dari Session, lalu Server akan mengecek (misalnya ke database) apakah Session dengan ID tersebut ada, jika ada maka data Session-nya akan diload sehingga bisa diakses di sisi server *([server side](https://www.enonic.com/blog/what-is-the-difference-between-server-side-and-client-side)*). Berikut jika digambarkan dalam bentuk diagram:
![Session Diagram](/posts/bagaimana-cara-kerja-cookie-dan-session/session-diagram.svg)<!--rehype:width=861&height=373&loading=lazy&decoding=async-->

Seperti yang dijelaskan sebelumnya pada bagian Cookie, pertimbangkan juga untuk mengatur atribut `HttpOnly` dan `Secure` pada cookie Session.

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.

### Referensi:
[HTTP Cookies](https://http.dev/cookies)</br>
[HTTP State Management Mechanism](https://www.rfc-editor.org/rfc/inline-errata/rfc6265.html)</br>
[Using HTTP Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)</br>
[Session](https://mojoauth.com/blog/session-management-a-beginners-guide-for-web-developers/)</br>
[OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#cookies)</br>

