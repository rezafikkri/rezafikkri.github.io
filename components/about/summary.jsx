import Link from "next/link";

export default function Summary() {
  return (
    <section className="text-xl mt-8 leading-relaxed text-gray-800">
      <p className="mb-6">Nama saya Reza Sariful Fikri, seorang Backend Web Developer. Saat ini bahasa utama yang saya gunakan adalah PHP dan JavaScript, PHP digunakan untuk backend dan JavaScript digunakan ketika butuh untuk membuat frontend.</p>
      <p className="mb-6">Di waktu senggang saya menyempatkan diri untuk menulis blog terkait pengembangan web, kamu bisa membacanya pada menu <Link href="/blogs">blog</Link>. Selain itu juga membuat beberapa projek open-source seperti aplikasi, template, dan sebagainya, selain untuk latihan, hal tersebut juga bisa jadi portofolio dan juga tentunya saya gunakan sendiri untuk membantu pekerjaan saya. Kamu bisa melihatnya pada menu <Link href="/projects">projek</Link>.</p>
    </section>
  );
}
