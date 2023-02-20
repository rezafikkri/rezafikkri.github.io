import Head from "next/head";
import Layout, { name } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  const title = `${name} - Web Developer`;

  return (
    <Layout>
      <Head>
        <title>{title}</title> 
      </Head>
      <header className="mt-24 text-gray-800"> 
        <h1 className="text-5xl font-bold">Halo, Saya Reza!</h1>
        <p className="mt-7 text-xl">Terimakasih sudah berkunjung.</p>
        <p className="mt-7 text-xl">Saya suka membuat aplikasi <Link href="/projects">open-source</Link> dan <Link href="/blogs">menulis</Link> mengenai , khususnya di bidang pengembangan web, menggunakan bahasa pemrograman php dan javascript dan hal-hal umum seputar teknologi.</p>
      </header>
      <section className="text-gray-800 mt-20">
        <h2 className="text-3xl font-bold">Tulisan Terbaru</h2>
        <ul className="mt-6 flex flex-col divide-y divide-gray-200">
          <li className="py-1.5">
            <Link href="" className="flex justify-between no-underline items-center hover:text-ajwa-green">
              <h3 className="text-xl">Membuat footer website tetap dibagian bawah halaman.</h3>
              <time className="font-light">10 Januari 2023</time>
            </Link>
          </li>
          <li className="py-1.5">
            <Link href="" className="flex justify-between no-underline items-center hover:text-ajwa-green">
              <h3 className="text-xl">Alternatif software berbayar di linux dan windows.</h3>
              <time className="font-light">11 Januari 2023</time>
            </Link>
          </li>
          <li className="py-1.5">
            <Link href="" className="flex justify-between no-underline items-center hover:text-ajwa-green">
              <h3 className="text-xl">Dasar-dasar css flexbox.</h3>
              <time className="font-light">10 Januari 2023</time>
            </Link>
          </li>
        </ul>
        <Link href="/blogs" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">Lihat Semua &raquo;</Link>
      </section>
      <section className="text-gray-800 mt-20"> 
        <h2 className="text-3xl font-bold">Topik Tulisan</h2>
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <div className="mt-7 flex flex-wrap gap-2">
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">PHP</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">Javascript</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">HTML</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">API</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">Laravel</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">ReactJS</Link>
          <Link href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">OOP</Link>
        </div>
      </section>
      <section className="text-gray-800 mt-20">
        <h2 className="text-3xl font-bold">Projek</h2>
        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
            <h3 className="text-xl font-bold mb-2">Reza Admin</h3>
            <p className="text-gray-600 mb-5">Templat admin yang dibuat dengan bootstrap 4</p>
            <div className="absolute bottom-4">
              <Link href="https://github.com/rezafikkri/Reza-Admin" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
              <Link href="https://rezafikkri.github.io/Reza-Admin" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Demo</Link>
            </div>
          </div>

          <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
            <h3 className="text-xl font-bold mb-2">Manport</h3>
            <p className="text-gray-600 mb-5">Aplikasi pengelola raport siswa SMK dibuat dengan PHP native</p>
            <div className="absolute bottom-4">
              <Link href="https://github.com/rezafikkri/Manport" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
            </div>
          </div>

          <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
            <h3 className="text-xl font-bold mb-2">Website Sekolah</h3>
            <p className="text-gray-600 mb-5">Website sekolah yang dibuat dengan Codeigniter 3</p>
            <div className="absolute bottom-4">
              <Link href="https://github.com/rezafikkri/School-website" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
