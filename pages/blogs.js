import Head from "next/head";
import Layout, { name } from "@/components/layout";
import PostList from "@/components/post-list";
import LargeTopics from "@/components/large-topics";
import { getTopics, getPosts } from "@/lib/posts";

export default function Blogs({ topics, posts }) {
  const title = `Blog - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Kumpulan tulisan mengenai programming dan teknologi secara umum." />
      </Head>
      <header className="mt-24 text-gray-800">
        <h1 className="text-5xl font-bold">Blog</h1>
      </header>
      <section className="mt-12 text-gray-800">
        <h2 className="text-3xl font-bold">Topik</h2>
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <LargeTopics topics={topics} mt="mt-7" />
      </section>
      <section className="mt-20 text-gray-800">
        <h2 className="text-3xl font-bold mb-7">Tulisan</h2>
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
