import Link from "next/link";

export default function Skill() {
  return (
    <section className="mt-10 text-gray-800">
      <h2 className="text-3xl font-bold">Keahlian</h2>
      <h3 className="text-gray-500 mt-5">Ahli</h3>
      <p className="mt-1 text-lg">HTML - CSS - SCSS - JavaScript - PHP - Git - Bootstrap</p>

      <h3 className="text-gray-500 mt-5">Menengah</h3>
      <p className="mt-1 text-lg">CodeIgniter - Laravel - Tailwind CSS - MariaDB - PostgreSQL - Github - NodeJS - React</p>

      <h3 className="text-gray-500 mt-5">Dasar</h3>
      <p className="mt-1 text-lg">Next.js - MongoDB - Redis - RabbitMQ - Webpack - GIMP - Inkscape - Kdenlive - Linux - Python</p>

      <Link href="/Reza CV.pdf" target="_blank" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">
        <span className="mr-1.5">CV</span>
        <svg className="inline-block align-baseline" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></Link>
    </section>
  );
}
