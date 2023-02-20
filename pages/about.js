import Head from "next/head";
import Layout, { name } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function About() { 
  const title = `Tentang - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="mt-24">
        <div className="rounded-full inline-block border-4 border-gray-600">
          <Image src="/rezas.jpg" height={150} width={150} alt="Photo Profile" className="rounded-full" />
        </div>
        <div className="flex gap-2 mt-5">
          <Link href="https://github.com/rezafikkri" rel="noopener noreferrer" target="_blank" className="border-2 border-gray-500 hover:border-ajwa-green rounded-lg px-2.5 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </Link>
          <Link href="https://twitter.com/fikkrireza" rel="noopener noreferrer" target="_blank" className="border-2 border-gray-500 hover:border-ajwa-green rounded-lg px-2.5 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
          </Link>
          <Link href="https://www.linkedin.com/in/reza-sariful-fikri-9356ab16a/" rel="noopener noreferrer" target="_blank" className="border-2 border-gray-500 hover:border-ajwa-green rounded-lg px-2.5 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
          </Link>
          <Link href="https://web.facebook.com/reza.sariful.fikri" rel="noopener noreferrer" target="_blank" className="border-2 border-gray-500 hover:border-ajwa-green rounded-lg px-2.5 py-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
          </Link>
        </div>
      </section>
      <section className="text-xl mt-8 leading-relaxed text-gray-800">
        <p className="mb-6">Hai, saya Reza! saya seorang web developer. Selain coding, saya juga hobi menulis artikel atau tutorial terkait pengembangan web ataupun teknologi pada umumnya, kamu bisa membacanya pada menu <Link href="/blogs">blog</Link>. Selain itu saya juga punya hobi lain seperti bercocok tanam secara organik, hal yang paling saya sukai adalah kita bisa bebas ber-eksperimen, seperti membuat kompos sendiri maupun pupuk sendiri, dan lain-lain.</p>
        <p>Selain hobi tersebut saya juga menyempatkan diri untuk membuat projek open-source seperti aplikasi, template, dan hal-hal lain, selain untuk latihan, hal tersebut juga bisa jadi portofolio dan juga tentunya saya gunakan sendiri untuk membantu pekerjaan saya. Kamu bisa melihatnya pada menu <Link href="/projects">projek</Link>.</p>
      </section>
      <section className="mt-10 text-gray-800">
        <h2 className="text-3xl font-bold">Keahlian</h2>
        <h3 className="text-gray-500 mt-5">Ahli</h3>
        <p className="mt-1 text-lg">HTML - CSS - SCSS - JavaScript - PHP - Git - Bootstrap</p>

        <h3 className="text-gray-500 mt-5">Menengah</h3>
        <p className="mt-1 text-lg">CodeIgniter - Laravel - Tailwind CSS - MariaDB - PostgreSQL - Github - NodeJS - React</p>

        <h3 className="text-gray-500 mt-5">Dasar</h3>
        <p className="mt-1 text-lg">Next.js - MongoDB - Redis - RabbitMQ - Webpack - GIMP - Inkscape - Kdenlive - Linux - Python</p>

        <Link href="/Reza CV.pdf" target="_blank" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg mt-7">
          <span className="mr-1.5">Download CV</span>
          <svg className="inline-block align-baseline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></Link>
      </section>
    </Layout>
  );
}
