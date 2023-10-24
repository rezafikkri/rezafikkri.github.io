'use client'

import Link from "next/link";
import LargeTopics from "./_components/post/large-topics";
import HomeHeader from "./_components/home/home-header";
import HomePostList from "./_components/home/home-post-list";
import ProjectList from "./_components/project/project-list";

export default function HomePage({ topics, latestPosts }) {
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
        <Link href="/projects" className="inline-block no-underline mt-5 hover:text-ajwa-blue">Lihat Semua &raquo;</Link>
      </section>
    </>
  )
}
