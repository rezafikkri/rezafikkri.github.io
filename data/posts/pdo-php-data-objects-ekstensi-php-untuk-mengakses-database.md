---
id: "e2b7af83-c3b4-4e3f-95fb-013cd05d4614"
title: "PDO (PHP Data Objects): Ekstensi PHP untuk mengakses database"
date: "2024-08-07T05:49:27.770Z"
topics: ["cdc80207-597b-4fb7-b572-53b68c9f1a78","597f5651-dfe2-4aad-81aa-7c8b090ff468"]
slug: "pdo-php-data-objects-ekstensi-php-untuk-mengakses-database"
ogImage: "https://res.cloudinary.com/rezafikkri/image/upload/q_auto/php-pdo.png"
---

Bismillah, hari ini kita akan mempelajari PDO (PHP Data Objects).

Tetapi, seperti biasanya sebelum lanjut, yang perlu dipersiapkan adalah, kamu harus memahami beberapa perintah dasar sql, seperti Insert, Update, dll, pada database MariaDB. Jika belum kamu bisa belajar di channel Indonesia Belajar pada playlist [Tutorial Belajar Database MySQL | MariaDB](https://youtube.com/playlist?list=PL2O3HdJI4voGs6CiEUPXwt1fhLLqu30E_). Mengapa database MariaDB? karena pada tutorial ini kita akan menggunakan database MariaDB. Serta sangat di sarankan juga kamu untuk belajar dasar-dasar OOP (Object Oriented Programming) dengan bahasa pemrograman PHP. kamu bisa mempelajarinya di channel Web Programming Unpas pada playlist  [OOP DASAR pada PHP](https://youtube.com/playlist?list=PLFIM0718LjIWvxxll-6wLXrC_16h_Bl_p).

## Apa Itu PDO?

PDO atau PHP Data Objects merupakan suatu ekstensi yang mendefinisikan antarmuka yang ringan dan konsisten untuk mengakses database di PHP. Namun kamu tidak bisa melakukan fungsi database apapun (insert, update, dsb) jika hanya menggunakan ekstensi PDO sendiri, kamu membutuhkan yang namanya PDO Driver untuk mengakses database. Setiap database punya PDO Driver tersendiri, misalnya untuk database MariaDB menggunakan driver PDO_MYSQL.

PDO menyediakan sebuah *data-access abstraction layer*, yang berarti bahwa, <!-- excerpt -->dengan PDO, tanpa peduli database apa yang kamu gunakan, kamu akan menggunakan *function* atau *method* yang sama untuk melakukan query dan fetch data<!-- excerpt -->.

Sebelum menggunakan PDO, pastikan bahwa ekstensi PDO sudah aktif serta mendukung untuk koneksi ke database MariaDB, caranya buat satu file php (namanya bebas), lalu masukkan code:
```php
<?= phpinfo(); ?>
```
dan buka lewat browser. Setelah itu kamu bisa gunakan fitur pencarian yang ada di browser dengan menekan `ctrl+f`, cari dengan kata kunci **pdo**, pastikan kamu menemukan seperti pada gambar dibawah:
![cek ekstensi PDO](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/PHP-PDO-extension.png)<!--rehype:width=974&height=585&loading=lazy&decoding=async-->
Pada gambar diatas, dibagian table PDO, pada kolom *enabled*, pastikan tertera `mysql` yang berarti bahwa PDO mendukung untuk koneksi ke database MariaDB. Jika belum menemukan, kemungkinan ekstensi PDO nya belum aktif, atau mungkin juga kamu belum menginstall driver PDO_MYSQL.

Jika kamu menggunakan paket server seperti XAMPP, kamu tidak perlu menginstall driver PDO_MYSQL secara manual, kamu hanya perlu enable ekstensi `php_pdo` dan `php_pdo_mysql` saja, dengan cara, cari baris code `;extension=php_pdo.dll` dan `;extension=php_pdo_mysql.dll` didalam file php.ini, lalu hapus `;` pada awal dari kedua baris code tersebut, jangan lupa untuk restart server php dan databasenya. Letak dari file php.ini di XAMPP biasanya ada di `/xampp/php/php.ini`. Sedangkan untuk kamu yang menggunakan paket server Laragon, caranya sangat mudah, buka Laragon &raquo; klik **Menu** &raquo; pilih **PHP** &raquo; pilih **Extentions** &raquo; dan klik pada ekstensi yang ingin diaktifkan yaitu `pdo_mysql`.

Bagi kamu yang menggunakan os linux, terutama distro Debian dan turunannya, seperti Ubuntu, Linux Mint, dsb, serta tidak menggunakan paket server apapun seperti XAMPP atau Laragon, biasanya kamu harus menginstall secara manual driver PDO_MYSQL untuk MariaDB. Ikuti langkah berikut untuk menginstall drivernya:

 1. Update daftar package: `sudo apt update`
 2. Install package `php8.2-mysql`: `sudo apt install php8.2-mysql`

Untuk versi php silahkan disesuaikan dengan versi php yang kamu gunakan, misalnya kamu menggunakan php7.4 maka `... php7.4-mysql`. Dengan menginstall package `php8.2-mysql` maka akan menginstall driver PDO_MYSQL.

## Membuat Koneksi Ke Database MySQL
Berikut contoh code untuk koneksi ke database dengan PDO:
```php
<?php
    $user = 'dbuser';
    $password = 'dbpass';
    $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $password);
?>
```
Untuk koneksi ke database dengan PDO kamu perlu membuat instansiasi dari class PDO, serta memasukkan beberapa argumen mengenai database yang digunakan, yang dikenal dengan DSN dan username, password (opsional). Berikut penjelasan rinci dari argumen tersebut:

 1. Data Source Name (DSN)
Bagian yang disebut DSN adalah `mysql:host=localhost;dbname=test`. DSN terbagi menjadi beberapa bagian, yang umum dipakai adalah DSN prefix, host, database name. DSN prefix pada contoh diatas adalah `mysql:`, host merupakan nama host tempat basis data berada, yang mana pada contoh yaitu `localhost`, database name adalah nama database kamu, pada contoh yaitu `test`. Penjelasan lebih lanjut bisa baca di [Manual PDO Mysql Connection](https://www.php.net/manual/en/ref.pdo-mysql.connection.php).
 2. Username
Username merupakan username untuk koneksi ke database. Pada contoh, usernamenya yaitu `dbuser`.
 3. Password
Password merupakan password untuk koneksi ke database. pada contoh, passwordnya yaitu `dbpass`.

## Prepared Statement
Prepared statement dapat dianggap sebagai template terkompilasi untuk SQL yang ingin dijalankan oleh aplikasi, yang dapat dikustomasisasi menggunakan parameter variabel. Begitulah pengertian dari website php.net. Bingung? oke, supaya lebih paham lihat contoh berikut!
```sql
INSERT INTO users(username, password) VALUES(:username, :password)
```
Dan contoh detailnya adalah:
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';

    $stmt = $dbh->prepare("INSERT INTO users(username, password) VALUES(:username, :password)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);

    $stmt->execute();
?>
```
Pada kode diatas kita menggunakan prepared statement dengan *named placeholders*, yaitu dengan penggunaan placeholders `:username` dan `:password` pada fungsi `prepare()`. Fungsi `prepare()` berfungsi untuk menyiapkan sebuah SQL statement untuk di jalankan dan menghasilkan sebuah statement object.

Disana juga ada fungsi `bindParam()`, yang berfungsi untuk mengikat PHP variabel ke pada placeholders yang sesuai.
Argumen pertama yang dimasukkan pada fungsi `bindParam()`, adalah *parameter identifier*, yang mana itu berisi nama placeholders yang digunakan pada fungsi `prepare()`. Argumen keduanya adalah nama variabel.

Dan terakhir adalah fungsi `execute()` berfungsi untuk menjalankan prepared statement. Nantinya placeholders akan diganti dengan value dari variabel `$username` dan `$password`. Salah satu keuntungan menggunakan prepared statement ini adalah akan mencegah terjadinya serangan berbahaya seperti Injeksi SQL atau SQl Injection.

Selain dengan *named placeholders*, kamu juga bisa menggunakan *positional placeholders* atau bisa juga disebut *question mark placeholders*, seperti:
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';

    $stmt = $dbh->prepare("INSERT INTO users(username, password) VALUES(?, ?)");
    $stmt->bindParam(1, $username);
    $stmt->bindParam(2, $password);

    $stmt->execute();
?>
```
Perbedaanya dengan *named placeholders* adalah pada *positional placeholders* kita menggunakan tanda tanya (?) dan pada fungsi `bindParam()`, di argumen pertama kita menggunakan nomor index yang dimulai dari 1.

Jika tipe data dari value yang ingin kita masukkan kedalam database itu bertipe string semua, kita bisa tidak menggunakan fungsi `bindParam()`, yaitu dengan cara memasukkan langsung variabel sebagai array pada saat memanggil fungsi `execute()`, jadi seperti:
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';

    $stmt = $dbh->prepare("INSERT INTO users(username, password) VALUES(:username, :password)");
    //$stmt->bindParam(':username', $username);
    //$stmt->bindParam(':password', $password);

    $stmt->execute([':username' => $username, ':password' => $password]);
?>
```
Bagaimana dengan *positional placeholders*? jika menggunakan *named placeholders* maka harus menggunakan array asosiatif, sedangkan jika menggunakan *positional placeholders* maka menggunakan *indexed array*, seperti:
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';

    $stmt = $dbh->prepare("INSERT INTO users(username, password) VALUES(?, ?)");
    $stmt->execute([$username, $password]);
?>
```

> Perbedaan *indexed array* dan array asosiatif adalah tipe *key* yang digunakan, *indexed array* menggunakan *key* bertipe integer, sedangkan array asosiatif menggunakan *key* bertipe string

Kapan kita harus menggunakan fungsi `bindParam()`? kita butuh menggunakan fungsi `bindparam()` ketika value yang harus dimasukkan itu bukan bertipe string, contohnya ketika kita butuh perintah SQl yang menggunakan perintah `limit`, mengapa? karena data yang dimasukkan harus bertipe integer, tidak bisa string, maka kita perlu menggunakan fungsi `bindParam()`. Pada fungsi `bindParam()` selain dua argument yang sebelumnya, yaitu, pertama string dari *named placeholders* atau nomor index dari *positional placeholders*, yang kedua adalah nama variabel-nya, dan yang ke tiga yaitu eksplisit tipe data untuk value yang akan kita masukkan, caranya adalah dengan menggunakan `PDO::PARAM_*constants`, seperti:
```php
<?php
    $skip = 0;
    $max = 50;

    $stmt = $dbh->prepare("SELECT * FROM users LIMIT :skip, :max");
    $stmt->bindParam(':skip', $skip, PDO::PARAM_INT);
    $stmt->bindParam(':max', $max, PDO::PARAM_INT);

    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
```
Pada code diatas, fungsi `fetchAll()` berfungsi untuk mengambil semua data hasil dari perintah `SELECT` dan `PDO::FETCH_ASSOC` digunakan agar data tersebut berbentuk array asosiatif. Untuk daftar rinci dari PDO Constants kamu bisa lihat di [Manual PDO Constants](https://www.php.net/manual/en/pdo.constants.php). Selain fungsi `fetchAll()` juga ada fungsi `fetch()`, yang berfungsi untuk mengambil satu data dari hasil perintah `SELECT`. Ketika kita memanggil fungsi `fetch()` untuk kedua kalinya, maka akan mengambil satu data berikutnya dan begitu seterusnya. Lebih rinci mengenai fungsi `fetch()` kamu bisa baca di [PDO fetch](https://www.php.net/manual/en/pdostatement.fetch.php).

Selain menggunakan fungsi `prepare()`, kamu juga bisa menggunakan fungsi `query()` atau `exec()`, seperti:
```php
<?php
    $sql = 'SELECT * FROM users';
    foreach($dbh->query($sql) as $row) {
        echo $row['username'].'<br>';
    }
?>
```

```php
<?php
    $count = $dbh->exec('DELETE FROM users');
    echo $count . 'baris telah dihapus';
?>
```

> Praktik terbaik dalam penggunaan `prepare()` adalah ketika perintah SQL tersebut membutuhkan data dari luar, seperti dari input user. Biasanya kita membutuhkan data dari luar ketika kita ingin memasukkan data ke database, ataupun ketika ingin menghapus suatu data berdasarkan id tertentu dan lain-lain.

> Sedangkan `query()` digunakan ketika perintah SQL tersebut tidak membutuhkan data dari luar, misalnya perintah untuk menampilkan semua user seperti di atas. Adapun `exec()` hampir sama seperti `query()`, tetapi fungsi `exec()` tidak mengembalikan data hasil dari perintah `SELECT`, tetapi mengembalikan jumlah baris yang terkena dampak dari perintah SQL, sehingga lebih cocok untuk perintah seperti `DELETE`, `UPDATE` dan `CREATE`.

Sebagai tambahan, berikut adalah contoh code CRUD (Create Read Update Delete) dengan PDO dan Prepared Statement:

 - Create : memasukkan data ke dalam database
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';

    $stmt = $dbh->prepare("INSERT INTO users(username, password) VALUES(:username, :password)");
    $stmt->execute([':username' => $username, ':password' => $password]);
?>
```
 - Read : mengambil data dari database
```php
<?php
    $stmt = $dbh->prepare("SELECT * FROM users WHERE username != :username");
    $stmt->execute([':username' => 'reza']);

    foreach($stmt as $u) {
        echo $u['username'].'<br>';
    }
?>
```
- Update : mengubah data di database
```php
<?php
    $username = 'rezauser';
    $password = 'rezapass';
    $id = '123';

    $stmt = $dbh->prepare("UPDATE users SET username = :username, password = :password WHERE id = :id");
    $stmt->execute([':username' => $username, ':password' => $password, ':id' => $id]);
?>
```
- Delete : menghapus data dari database
```php
<?php
    $id = '123';
    $stmt = $dbh->prepare("DELETE FROM users WHERE id = :id");
    $stmt->execute([':id' => $id]);
?>
```

## Penanganan Error Koneksi
Pada bagian terakhir ini kita akan sedikit membahas mengenai penanganan error koneksi pada saat mengakses database dengan PDO. Untuk menangani error yang dihasilkan, kamu bisa menggunakan blok try catch, seperti:
```php
<?php
    $user = 'dbuser';
    $password = 'dbpass';

    try {
        $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $password);

        $stmt = $dbh->prepare("SELECT * FROM users LIMIT :skip :max");
        $stmt->bindParam(':skip', 0, PDO::PARAM_INT);
        $stmt->bindParam(':max', 50, PDO::PARAM_INT);

        $stmt->execute();
    } catch (PDOException $e) {
        echo "Error!: ".$e->getMessage().'<br>';
        die;
    }
?>
```
Jika terjadi error koneksi apa saja, maka sebuah object PDOException akan di buat, karena itu pada bagian `catch()` kita memberitahu untuk menangkap object PDOException tersebut, sehingga errornya bisa ditangani didalam block catch. Lalu kita tampilkan error tersebut dengan sedikit di ubah formatnya didalam blok catch. Format error bebas kamu tentukan sesuka hati. Untuk lebih jelas mengenai penggunaan blok try catch untuk exeception handling, seperti diatas, kamu bisa googling saja, atau kamu bisa memperlajarinya di [Jago Ngoding: Penanganan Exception](https://jagongoding.com/web/php/menengah/penanganan-exception/).

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) ku atau bisa juga di Facebook [reza.sariful.fikri](https://web.facebook.com/reza.sariful.fikri) untuk mendapatkan tulisan terbaru.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.

### Referensi:
[PHP: PDO - Manual](https://www.php.net/manual/en/book.pdo.php)
