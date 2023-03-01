import Head from "next/head";
import Layout, { name } from "@/components/layout";
import PostList from "@/components/postList";
import BlogHeader from "@/components/blogHeader";
import { getTopics, getPosts } from "@/lib/posts";

export default function Blogs({ topics, posts }) {
  const title = `Blog - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <BlogHeader topics={topics} />
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
