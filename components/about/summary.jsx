import Link from "next/link";

export default function Summary() {
  return (
    <section className="text-xl mt-8 leading-relaxed text-gray-800">
      <p className="mb-6">Saya adalah seorang junior Backend Web Developer. Coding adalah hobi saya. Saya suka membuat aplikasi yang bermanfaat bagi diri sendiri dan orang lain, serta juga suka menulis artikel atau tutorial terkait pengembangan web ataupun teknologi pada umumnya, kamu bisa membacanya pada menu <Link href="/blogs">blog</Link>. Selain itu saya juga punya hobi lain seperti bercocok tanam secara organik, hal yang paling saya sukai adalah kita bisa bebas ber-eksperimen, seperti membuat kompos sendiri maupun pupuk sendiri, dan lain-lain.</p>
      <p>Selain hobi tersebut saya juga menyempatkan diri untuk membuat projek open-source seperti aplikasi, template, dan hal-hal lain, selain untuk latihan, hal tersebut juga bisa jadi portofolio dan juga tentunya saya gunakan sendiri untuk membantu pekerjaan saya. Kamu bisa melihatnya pada menu <Link href="/projects">projek</Link>.</p>
    </section>
  );
}
