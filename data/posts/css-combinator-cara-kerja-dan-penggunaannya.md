---
id: "bee5cd43-e243-4ce8-9016-5fe7d3e08c69"
title: "CSS Combinator: Cara Kerja dan Penggunaannya"
lastmod: 1679628746132
topics: ["12ca2718-3365-465d-b35e-12d05d9a9873"]
slug: "css-combinator-cara-kerja-dan-penggunaannya"
ogImage: "https://res.cloudinary.com/rezafikkri/image/upload/q_auto/css-combinators.png"
ogImageWidth: 1364
ogImageHeight: 657
---

Bismillah, hari ini kita akan membahas mengenai Combinator di CSS. Apa itu Combinator? <!-- excerpt -->Combinator merupakan suatu karakter yang menyatakan hubungan antara selector, untuk menargetkan element dalam dokumen. Misalnya untuk menyeleksi semua<!-- excerpt --> element `<p>` yang ada di dalam element `<article>`, kita menggunakan Descendant Combinator ( ): 
```css
article p { }
```
Selain Descendant Combinator ( ), ada juga Child combinator (>), Adjacent sibling combinator (+) dan General sibling combinator (~).

Sebelum lanjut, seperti biasa kamu harus sudah memahami dasar-dasar CSS, terutama CSS Selector. Jika belum, kamu bisa mempelajarinya di [playlist CSS Dasar Web Programming Unpas](https://youtube.com/playlist?list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p).

Berikut penjelasan dari masing-masing combinator:
## Descendant Combinator (Kombinator Keturunan)
Descendant Combinator adalah combinator yang menggunakan satu spasi ( ) sebagai penghubung diantara selector nya, contoh:
```css
.reza p {  
  color: red;  
}
```
Arti dari script css diatas adalah, *seleksi semua element `<p>` yang merupakan descendant (keturunan) dari element dengan class "reza", lalu ubah warna textnya menjadi merah*.

> **Catatan:** Suatu element bisa dikatakan descendant (keturunan) dari element lain adalah ketika element tersebut berada di dalam element lain. Misalnya kita punya element `<div>` dan element `<p>`, supaya element `<p>` bisa dikatakan descendant (keturunan) dari element `<div>`, maka tempatkan element `<p>` di dalam element `<div>`. Tidak masalah jika element `<p>` berada di dalam element lain, element `<article>` misalnya, intinya adalah selama element `<p>` tersebut barada di dalam element `<div>`, maka element `<p>` bisa dikatakan descendant (keturunan) dari element `<div>`. Keadaan dimana suatu element berada di dalam element lain biasa disebut dengan *nested element* atau element bersarang.

Berikut contoh implementasinya:

```html
<div class="reza">  
  <p>Hay saya programmer</p>
  
  <div class="dian">  
    <p>Hay salam kenal</p>  
    <p>Selamat datang</p>
    <div class="hallo">  
        <p>Hallo apa kabar</p>  
    </div>  
  </div> 
   
</div>
<p>Saya biasa</p>
```

```css
.reza p {  
  color: red;  
}
```

Hasil:
![hasil implementasi Descendant Combinator](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/css-combinator-1.png)<!--rehype:width=1042&height=626&loading=lazy&decoding=async-->

Atau kamu juga bisa melihat [hasilnya secara online di CodePen](https://codepen.io/rezafikkri/pen/bGxxdrN).

Jika kamu lihat hasil di atas, semua element `<p>` yang berada di dalam element `<div>` dengan class "reza" warna text-nya berubah menjadi merah, walaupun mereka berada di dalam element lain, asalkan element lain tersebut masih berada di dalam element `<div>` dengan class "reza", atau bisa kita sebut, selama element `<p>` tersebut masih termasuk descendant (keturunan) dari element `<div>` dengan class "reza". Jika kamu lihat element `<p>` yang berada diluar element `<div>` dengan class "reza" warna text-nya tidak berubah menjadi merah, karena element `<p>` tersebut bukan descendant (keturunan) dari element `<div>` dengan class "reza".

## Child Combinator (Kombinator Anak)

Child Combinator adalah combinator yang menggunakan karakter lebih besar dari (>) sebagai penghubung diantara selectornya, contoh:
```css
.reza > p {  
  color: red;  
}
```
Arti dari script diatas adalah, *seleksi semua element `<p>` yang termasuk child (anak) dari element dengan class "reza" lalu ubah warna textnya menjadi merah*.

> **Catatan:** Suatu element bisa dikatakan child (anak) dari element lain adalah ketika element tersebut berada di dalam elemen lain dan element tersebut tidak berada di dalam element lain lagi. Misalnya kita punya element `<div>` dan element `<p>`, supaya element `<p>` bisa dikatakan child (anak) dari element `<div>`, maka element `<p>` harus berada di dalam element `<div>` dan tidak boleh berada di dalam element lain lagi, element `<article>` misalnya. Dengan kata lain, walaupun kita menempatkan element `<article>` yang di dalamnya ada element `<p>` di dalam element `<div>`, element `<p>` bukanlah child (anak) dari element `<div>`, melainkan cucu dari element `<div>`, sedangkan element `<article>`-lah yang merupakan child (anak) dari element `<div>`.

Berikut contoh implementasinya:

```html
<div class="reza">  
  <p>Hay saya programmer</p>
  
  <div class="dian">  
    <p>Hay salam kenal</p>  
    <p>Selamat datang</p>  
  </div>
  
  <p>Saya biasa</p>  
</div>  
<p>Semoga bermanfaat</p>
```

```css
.reza > p {  
  color: red;  
}
```

Hasil:
![hasil imlementasi Child Combinator](https://res.cloudinary.com/rezafikkri/image/upload/q_auto/css-combinator-2.png)<!--rehype:width=992&height=626&loading=lazy&decoding=async-->

Atau kamu juga bisa melihat  [hasilnya secara online di CodePen](https://codepen.io/rezafikkri/pen/BaOOKQg).

Jika kamu lihat hasil di atas, hanya element `<p>` dengan text *Hay saya programmer* dan *Saya biasa* yang berada di dalam element `<div>` dengan class "reza" yang textnya berubah menjadi merah, sedangkan element `<p>` dengan text *Hay salam kenal* dan *Selamat datang* yang berada di dalam element `<div>` dengan class "dian" textnya tidak berubah menjadi merah, padahal element `<div>` dengan class “dian” berada di dalam element `<div>` dengan class "reza". Itu karena element `<p>` yang berada di di dalam element `<div>` dengan class "dian" bukanlah child (anak) dari element `<div>` dengan class "reza", melainkan element `<p>` tersebut adalah child (anak) dari element `<div>` dengan class “dian”, sedangkan element `<div>` dengan class "dian" lah yang merupakan child (anak) dari element `<div>` dengan class "reza". Dan juga tentunya element yang berada diluar element `<div>` dengan class "reza" sudah jelas bukan child (anak) dari element `<div>` dengan class "reza", itulah sebabnya text pada element `<p>` tersebut tidak berubah menjadi merah.

## Adjacent Sibling Combinator (Kombinator Saudara Kandung Terdekat)

Adjacent Sibling Combinator adalah combinator yang menggunakan karakter plus (+) sebagai penguhubung diantara selectornya, contoh:
```css
.reza + p {  
  color: red;  
}
```
Arti dari script diatas adalah, *seleksi element `<p>` yang merupakan adjacent sibling (saudara kandung terdekat) dari element dengan class "reza", lalu ubah warna textnya menjadi merah*.

> **Catatan:** Suatu element dikatakan adjacent sibling (saudara kandung terdekat) dari element lain adalah ketika element tersebut berada di posisi setelah elemen lain dan element yang menjadi adjacent sibling (saudara kandung terdekat) hanya element yang pertama. Misalnya kita punya beberapa element, yaitu: element `<p>` dengan id 1, element `<article>`, element `<p>` dengan id "2" dan element `<p>` dengan id 3. Supaya element `<p>` dengan id 1 bisa dikatakan adjacent sibling (saudara kandung terdekat) dari element `<article>`, maka kita harus menempatkan element `<p>` dengan id 1  pada urutan dari atas ke bawah, tepat setelah element `<article>`, sedangkan element `<p>` yang lain bebas ditempatkan di mana saja, di atas element `<article>` atau di bawah element `<p>` dengan id 1. Jadi misalnya kita buat urutan element-element tersebut dari atas ke bawah menjadi, pertama element `<p>` dengan id 2, element `<article>`, element `<p>` dengan id 1 dan element `<p>` dengan id 3. Dengan urutan tersebut element `<p>` dengan id 1 merupakan adjacent sibling (saudara kandung terdekat) dari element `<article>`, sedangkan element `<p>` dengan id 2 dan 3 bukanlah adjacent sibling (saudara kandung terdekat) dari element `<article>`.

Berikut contoh implementasinya:

```html
<div class="dian">  
  <p>Hello Dunia</p>
  
  <div class="reza">  
    <p>Hay saya programmer</p>  
    <p>Saya biasa</p>  
  </div>
  
  <p>Semoga bermanfaat</p>  
  <p>Hay salam kenal</p>  
</div>
```

```css
.reza + p {  
  color: red;  
}
```

Hasil:
![hasil implementasi Adjacent Sibling Combinator](https://res.cloudinary.com/rezafikkri/image/upload/css-combinator-3.png)<!--rehype:width=997&height=626&loading=lazy&decoding=async-->

Atau kamu juga bisa melihat  [hasilnya secara online di CodePen](https://codepen.io/rezafikkri/pen/YzOJgNM).

Jika kamu lihat hasil diatas, hanya element `<p>` dengan text *Semoga bermanfaat* yang textnya berubah menjadi merah. Sedangkan element `<p>` yang berada di dalam element `<div>` dengan class "reza" textnya tidak berubah menjadi merah, ini karena element `<p>` tersebut bukanlah adjacent sibling (saudara kandung terdekat) dari element `<div>` dengan class "reza", melainkan element `<p>` tersebut adalah child (anak) dari element `<div>` dengan class "reza". Kemudian, element `<p>` dengan text *Hello Dunia* juga tidak berubah menjadi merah, ini karena element yang dianggap sebagai adjacent sibling (saudara kandung terdekat) adalah element pertama berada di posisi setelah element `<div>` dengan class "reza".  Lalu, element `<p>` dengan text *Hay salam kenal* juga tidak berubah menjadi merah, memang posisi element `<p>` dengan text *Hay salam kenal* berada setelah element `<div>` dengan class "reza", tetapi urutannya tidak berada pada urutan pertama.

## General Sibling Combinator (Kombinator Saudara Kandung Umum)

General Sibling Combinator adalah combinator yang menggunakan karakter tilde ( ~ ) sebagai penghubung diantara selectornya, contoh:
```css
.reza ~ p {
  color: red;  
}
```
Arti dari script diatas adalah, *seleksi semua element `<p>` yang merupakan general sibling (saudara kandung umum) dari element dengan class "reza", lalu ubah warna textnya menjadi merah*.

> **Catatan:** Cara kerja dari general sibling combinator (kombinator saudara kandung umum) mirip dengan cara kerja adjacent sibling combinator (kombinator saudara kandung terdekat), hanya saja yang membedakan adalah semua element yang berada di posisi setelah element lain adalah general sibling (saudara kandung umum) dari element lain tersebut. Misalnya (dengan contoh yang sama), kita punya beberapa element, dengan urutan: element `<p>` dengan id 1, element `<article>`, element `<p>` dengan id 2 dan element `<p>` dengan id 3. Dengan urutan tersebut yang termasuk general sibling (saudara kandung umum) dari element `<article>` adalah element `<p>` dengan id 2 dan element `<p>` dengan id 3.

Berikut contoh implementasinya:

```html
<div class="dian">  
  <p>Hello Dunia</p>
  
  <div class="reza">  
    <p>Hay saya programmer</p>  
    <p>Saya biasa</p>  
  </div>
  
  <p>Semoga bermanfaat</p>  
  <p>Hay salam kenal</p>  
</div>
```

```css
.reza ~ p {  
  color: red;  
}
```

Hasil:
![hasil implementasi General Sibling Combinator](https://res.cloudinary.com/rezafikkri/image/upload/css-combinator-4.png)<!--rehype:width=972&height=626&loading=lazy&decoding=async-->

Atau kamu juga bisa melihat  [hasilnya secara online di CodePen](https://codepen.io/rezafikkri/pen/eYLbJMQ).

Nah jika teman-teman lihat hasil diatas, kedua element `<p>` dengan text *Semoga bermanfaat*, dan *Hay salam kenal* textnya berubah menjadi merah, karena keduanya berada di posisi setelah element `<div>` dengan class "reza", sehingga dianggap sebagai general sibling (saudara kandung umum) dari element `<div>` dengan class "reza". Sedangkan element `<p>` dengan text *Hello Dunia* tidak berubah menjadi merah, ini dikarenakan posisi element `<p>` dengan text *Hello Dunia* tidak berada setelah element `<div>` dengan class "reza". Dan element `<p>` yang berada di dalam element `<div>` dengan class "reza", tentu textnya tidak akan berubah menjadi merah, karena mereka adalah child (anak) dari element `<div>` dengan class "reza".

Oke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.

Kamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.

### Referensi:
[MDN Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
