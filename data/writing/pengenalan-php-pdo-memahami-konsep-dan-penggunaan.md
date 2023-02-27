---
title: "Pengenalan PHP PDO: Memahami Konsep dan Penggunaan"
date: "2023-02-26T23:22:41.240Z"
topics: ["HTML", "PHP"]
slug: "pengenalan-php-pdo-memahami-konsep-dan-penggunaan"
---

PHP PDO (PHP Data Objects) adalah sebuah API (Application Programming Interface) pada PHP yang memungkinkan kita untuk mengakses berbagai jenis database dengan menggunakan sintaks yang seragam. PDO memberikan fleksibilitas yang lebih besar dibandingkan dengan API database yang lebih kuno seperti mysql_* dan mysqli_*. Dalam artikel ini, kita akan membahas konsep dan penggunaan PDO secara lengkap.

## Konsep Dasar PDO

PDO memungkinkan kita untuk terhubung dengan database menggunakan berbagai jenis driver database, seperti MySQL, PostgreSQL, dan SQLite. Setiap driver memiliki sintaks yang berbeda, namun PDO memungkinkan kita untuk menggunakan sintaks yang seragam untuk semua jenis driver. Dengan kata lain, kita tidak perlu belajar sintaks yang berbeda-beda ketika berpindah dari satu jenis database ke jenis lainnya.

PDO juga menyediakan fitur pengamanan, di mana input yang diterima dari pengguna akan di-sanitize secara otomatis sehingga menghindari serangan SQL injection. Selain itu, PDO juga menyediakan fitur prepared statement, di mana kita dapat menyiapkan sebuah query terlebih dahulu sebelum menjalankannya. Hal ini dapat meningkatkan performa dan menghindari serangan SQL injection.

## Penggunaan PDO

Untuk menggunakan PDO, kita harus membuat objek PDO terlebih dahulu dengan menyediakan informasi seperti nama host, nama database, nama pengguna, dan kata sandi. Berikut adalah contoh kode untuk membuat objek PDO:

```php
$pdo = new PDO('mysql:host=localhost;dbname=database_name', 'username', 'password');
```

Setelah membuat objek PDO, kita dapat menjalankan query menggunakan metode `query()` atau `prepare()`. Metode `query()` dapat digunakan untuk menjalankan query langsung, sedangkan metode `prepare()` digunakan untuk menyiapkan query terlebih dahulu. Berikut adalah contoh penggunaan metode `query()`:

```php
$result = $pdo->query('SELECT * FROM table_name');
foreach ($result as $row) {
    // do something with $row
}
```

Berikut adalah contoh penggunaan metode `prepare()`:

```php
$statement = $pdo->prepare('SELECT * FROM table_name WHERE id = :id');
$statement->execute(['id' => $id]);
$row = $statement->fetch();
```

PDO juga menyediakan metode untuk memulai dan mengakhiri transaksi, yaitu `beginTransaction()`, `commit()`, dan `rollBack()`. Metode `beginTransaction()` digunakan untuk memulai transaksi, `commit()` digunakan untuk mengakhiri transaksi dengan mengirim perintah COMMIT ke database, dan `rollBack()` digunakan untuk mengembalikan database ke kondisi sebelum transaksi dimulai jika terjadi kesalahan. Berikut adalah contoh penggunaan metode transaksi:

```php
$pdo->beginTransaction();
try {
    // do something with database
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
}
```
