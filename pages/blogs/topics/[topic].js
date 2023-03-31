import Head from "next/head";
import Link from "next/link";
import PostList from "@/components/post-list";
import { getPosts, getTopics } from "@/lib/posts";
import activeTopic from "@/lib/activeTopic";

export default function Topic({ selectedTopic, topics, posts, name }) {
  const title = `${selectedTopic} - ${name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Kumpulan tulisan mengenai ${selectedTopic}.`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`Kumpulan tulisan mengenai ${selectedTopic}.`} />
        <meta property="og:image" content="/Reza logo.svg" />
      </Head>
      <header className="mt-24 text-gray-800">
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/blogs/topics/${topic}`}
              className={`no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg ${activeTopic(topic, selectedTopic)}`}
            >
              {topic}
            </Link>
          ))}
        </div>
      </header>
      <section className="mt-20 text-gray-800">
        <p className="text-lg font-medium text-gray-500">{posts.length} tulisan dengan topik:</p>
        <h2 className="text-5xl font-bold mt-2 mb-10">{selectedTopic}</h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const topics = getTopics();
  const posts = getPosts(params.topic);
  return {
    props: {
      selectedTopic: params.topic,
      topics,
      posts,
    },
  };
}

export async function getStaticPaths() {
  let topics = getTopics();
  topics = topics.map(topic => {
    return {
      params: {
        topic,
      },
    };
  });

  return {
    paths: topics,
    fallback: false,
  };
}
