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
      <header className="mt-20 text-gray-800"> 
        <h1 className="text-5xl font-bold">Halo, Saya Reza!</h1>
        <p className="mt-7 text-xl">Terimakasih sudah berkunjung.</p>
        <p className="mt-7 text-xl">Saya suka membuat aplikasi <Link href="">open-source</Link> dan <Link href="">menulis</Link> mengenai , khususnya di bidang pengembangan web, menggunakan bahasa pemrograman php dan javascript dan hal-hal umum seputar teknologi.</p>
      </header>
    </Layout>
  )
}
