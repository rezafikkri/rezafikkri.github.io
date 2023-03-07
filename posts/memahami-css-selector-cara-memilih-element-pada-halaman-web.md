---
title: "Memahami CSS Selector: Cara Memilih Element pada Halaman Web"
date: "2022-01-21T20:24:00.000Z"
topics: ["PHP", "CSS"]
slug: "memahami-css-selector-cara-memilih-element-pada-halaman-web"
---

CSS selector adalah cara untuk memilih elemen tertentu pada halaman web dan memberikan gaya atau style tertentu pada elemen tersebut. Dalam artikel ini, kita akan membahas penggunaan CSS selector secara lengkap, dari sintaks dasar hingga penggunaan selector yang lebih kompleks.

## Sintaks Dasar CSS Selector

Selector CSS memungkinkan kita untuk memilih elemen berdasarkan tipe, ID, class, atribut, dan posisi dalam struktur dokumen HTML. Berikut adalah sintaks dasar CSS selector:

- Selector berdasarkan tipe elemen: Pilih elemen dengan menuliskan tipe elemen (seperti div, h1, atau p) diikuti oleh tanda kurung kurawal. Contohnya, untuk memilih semua elemen p pada halaman web, kita dapat menuliskan selector berikut: `p { /* style properties */ }`

- Selector berdasarkan ID: Pilih elemen dengan menambahkan tanda pagar (#) diikuti dengan nama ID. Contohnya, untuk memilih elemen dengan ID "header", kita dapat menuliskan selector berikut: `#header { /* style properties */ }`

- Selector berdasarkan class: Pilih elemen dengan menambahkan tanda titik (.) diikuti dengan nama class. Contohnya, untuk memilih semua elemen dengan class "menu", kita dapat menuliskan selector berikut: `.menu { /* style properties */ }`

- Selector berdasarkan atribut: Pilih elemen dengan menambahkan nama atribut di dalam tanda kurung siku ([]). Contohnya, untuk memilih semua elemen dengan atribut "href" pada tag "a", kita dapat menuliskan selector berikut: `a[href] { /* style properties */ }`

- Selector berdasarkan posisi: Pilih elemen berdasarkan posisinya dalam struktur dokumen HTML. Contohnya, untuk memilih elemen pertama dalam tag "p", kita dapat menuliskan selector berikut: `p:first-child { /* style properties */ }`

## Selector yang Lebih Kompleks

Selain selector dasar yang telah dijelaskan di atas, CSS juga mendukung selector yang lebih kompleks. Berikut adalah beberapa contoh selector yang lebih kompleks:

- Selector keturunan (descendant selector): Pilih elemen yang merupakan anak dari elemen lain. Contohnya, untuk memilih semua elemen "li" di dalam elemen "ul", kita dapat menuliskan selector berikut: `ul li { /* style properties */ }`

- Selector saudara berikutnya (adjacent sibling selector): Pilih elemen saudara yang berada langsung setelah elemen lain. Contohnya, untuk memilih elemen "p" yang berada langsung setelah elemen "h1", kita dapat menuliskan selector berikut: `h1 + p { /* style properties */ }`

- Selector saudara selanjutnya (general sibling selector): Pilih semua elemen saudara yang berada setelah elemen lain. Contohnya, untuk memilih semua elemen "p" yang berada setelah elemen "h1", kita dapat menuliskan selector berikut: `h1 ~ p { /* style properties */ }`

- Selector pseudo-class: Pilih elemen berdasarkan kondisi tertentu, seperti keadaan mouse di atas elemen atau
