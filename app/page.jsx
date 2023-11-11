import { getLatestPosts, getTopics } from "@/lib/posts.mjs";
import Link from "next/link";
import LargeTopics from "@/components/post/large-topics";
import HomeHeader from "@/components/home/home-header";
import HomePostList from "@/components/home/home-post-list";
import ProjectList from "@/components/project/project-list";

const title = "Reza Sariful Fikri - Web Developer";
const description = "Website yang membahas mengenai programming, khususnya di bidang pengembangan web dan hal-hal umum seputar teknologi.";

export const metadata = {
  title: {
    absolute: title 
  },
  description,
  openGraph: {
    title,
    description,
    url: '/',
    images: [
      {
        url: '/rezas.jpg',
        width: 400,
        height: 400,
      }, 
    ],
    type: 'website',
  },
};

export default function Page() {
  const topics = getTopics();
  const latestPosts = getLatestPosts();

  return (
    <>
      <HomeHeader />
      <HomePostList latestPosts={latestPosts} />
      <section className="text-gray-800 mt-20"> 
        <h2 className="text-3xl font-bold">Topik Tulisan</h2>
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <LargeTopics topics={topics} mt="mt-7" />
      </section>
      <section className="text-gray-800 mt-20">
        <h2 className="text-3xl font-bold">Projek</h2>
        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          <ProjectList />
        </div>
        <Link href="/project" className="inline-block no-underline mt-5 hover:text-ajwa-blue">Lihat Semua &raquo;</Link>
      </section>
    </>
  );
}
