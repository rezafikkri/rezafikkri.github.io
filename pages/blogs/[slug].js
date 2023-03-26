import Head from "next/head";
import Layout, { name } from "@/components/layout";
import SmallTopics from "@/components/small-topics";
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
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.ogImage} />
      </Head>
      <article className="mt-24">
        <time className="text-gray-600 inline-block">{dayjs(post.date).format('DD MMMM YYYY')}</time>
        <h1 className="text-5xl font-bold mt-2 text-gray-800">{post.title}</h1>
        <SmallTopics topics={post.topics} mt="mt-6" />
        <div
          className="mt-9 prose prose-ajwa prose-xl max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-blockquote:not-italic"
          id="content"
          dangerouslySetInnerHTML={{ __html: post.contentHTML }}
        />
        <small className="mt-16 block text-gray-600">Klik salah satu topik tulisan untuk melihat semua tulisan pada topik tersebut!</small>
        <SmallTopics topics={post.topics} mt="mt-3" />
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
