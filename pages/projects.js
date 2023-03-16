import Head from "next/head";
import Layout, { name } from "@/components/layout";
import Link from "next/link";

export default function Projects() {
  const title = `Projek - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Karya-karya open source." />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Karya-karya open source." />
        <meta property="og:image" content="/Reza logo.svg" />
      </Head>
      <header className="mt-24 text-gray-800">
        <h1 className="text-5xl font-bold">Projek</h1>
      </header>
      <section className="mt-12 text-gray-800">
        <div className="mt-9 grid sm:grid-cols-2 gap-4">
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
  );
}
