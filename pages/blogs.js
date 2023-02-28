import Head from "next/head";
import Link from "next/link";
import Layout, { name } from "@/components/layout";
import PostList from "@/components/postList";
import { getTopics, getPosts } from "@/lib/posts";

export default function Blogs({ topics, posts }) {
  const title = `Blog - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="mt-24 text-gray-800">
        <h1 className="text-5xl font-bold">Blog</h1>
      </header>
      <section className="mt-12 text-gray-800">
        <h2 className="text-3xl font-bold">Topik</h2>
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <div className="mt-7 flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <Link key={index} href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">{topic}</Link>
          ))}
        </div>
      </section>
      <section className="mt-20 text-gray-800">
        <h2 className="text-3xl font-bold">Tulisan</h2>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const topics = getTopics();
  const posts = getPosts();
  return {
    props: {
      topics,
      posts,
    },
  };
}
