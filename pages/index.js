import Head from "next/head";
import Link from "next/link";
import Layout, { name } from "@/components/layout";
import LargeTopics from "@/components/large-topics";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/id';
import { getTopics, getLatestPosts } from "@/lib/posts";

dayjs.extend(relativeTime);
dayjs.locale('id');

export default function Home({ topics, latestPosts }) {
  const title = `${name} - Web Developer`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Website yang membahas mengenai programming, khususnya di bidang pengembangan web, menggunakan bahasa PHP dan JavaScript, dan hal-hal umum seputar teknologi." />
      </Head>
      <header className="mt-24 text-gray-800"> 
        <h1 className="text-5xl font-bold">Halo, Saya Reza!</h1>
        <p className="mt-7 text-xl">Ini adalah website pribadi saya.</p>
        <p className="mt-7 text-xl">Dalam website ini saya <Link href="/blogs">menulis</Link> mengenai programming, khususnya di bidang pengembangan web, menggunakan bahasa PHP dan JavaScript dan hal-hal umum seputar teknologi. Selain itu saya juga suka membuat aplikasi <Link href="/projects">open-source</Link>.</p>
      </header>
      <section className="text-gray-800 mt-20">
        <h2 className="text-3xl font-bold">Tulisan Terbaru</h2>
        <ul className="mt-6 flex flex-col divide-y divide-gray-200">
          {latestPosts.map((post, index) => (
            <li className="py-2 md:py-1.5" key={index}>
              <Link href={`/blogs/${post.slug}`} className="flex flex-col md:flex-row md:justify-between no-underline hover:text-ajwa-green">
                <h3 className="text-xl">{post.title}</h3>
                <time className="font-light md:basis-40 md:text-right">{dayjs(post.date).fromNow()}</time>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blogs" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">Lihat Semua &raquo;</Link>
      </section>
      <section className="text-gray-800 mt-20"> 
        <h2 className="text-3xl font-bold">Topik Tulisan</h2>
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <LargeTopics topics={topics} mt="mt-7" />
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
        <Link href="/projects" className="inline-block no-underline mt-5 hover:text-ajwa-green">Lihat Semua &raquo;</Link>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const topics = getTopics();
  const latestPosts = getLatestPosts();
  return {
    props: {
      topics,
      latestPosts,
    },
  };
}
