import Head from "next/head";
import Link from "next/link";
import Layout, { name } from "@/components/layout";
import { getPost, getSlugs } from "@/lib/posts";
import dayjs from "dayjs";
import 'dayjs/locale/id';

dayjs.locale('id');

export default function Post({ post }) {
  const title = `${post.title} - ${name}`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="mt-24">
        <time className="text-gray-600 inline-block">{dayjs(post.date).format('DD MMMM YYYY')}</time>
        <h1 className="text-5xl font-bold mt-2 text-gray-800">{post.title}</h1>
        <div className="flex flex-wrap gap-1 mt-6">
          {post.topics.map((topic, index) => (
            <Link key={index} href={`/blogs/topics/${topic}`} className="no-underline text-xs bg-white border border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">{topic}</Link>
          ))}
        </div>
        <div
          className="mt-9 prose prose-ajwa prose-xl max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-code:bg-gray-200 prose-code:py-0.5 prose-code:rounded prose-code:font-normal"
          id="content"
          dangerouslySetInnerHTML={{ __html: post.contentHTML }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs();
  return {
    paths,
    fallback: false,
  };
}
