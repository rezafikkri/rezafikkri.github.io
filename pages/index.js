import Head from "next/head";
import Layout, { name } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  const title = `${name} | Web Developer`;

  return (
    <Layout>
      <Head>
        <title>{title}</title> 
      </Head>
      <header className="mt-24 text-gray-800"> 
        <h1 className="text-5xl font-bold">Halo, Saya Reza!</h1>
        <p className="mt-7 text-xl">Terimakasih sudah berkunjung.</p>
        <p className="mt-7 text-xl">Saya suka membuat aplikasi <Link href="">open-source</Link> dan <Link href="">menulis</Link> mengenai , khususnya di bidang pengembangan web, menggunakan bahasa pemrograman php dan javascript dan hal-hal umum seputar teknologi.</p>
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
        <Link href="" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-border-gray-300 px-4 py-2 rounded-lg">Lihat Semua &raquo;</Link>
      </section>
    </Layout>
  )
}
