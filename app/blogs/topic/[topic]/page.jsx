import { getPosts, getTopics } from "@/lib/posts.mjs";
import PostList from "@/components/post/post-list";
import LargeTopics from "@/components/post/large-topics";

export function generateMetadata({ params: { topic: selectedTopic } }) {
  const description = `Kumpulan tulisan mengenai ${selectedTopic}.`;

  return {
    title: selectedTopic,
    description: description,
    openGraph: {
      title: selectedTopic,
      description: description,
      url: `/blogs/topics/${selectedTopic}`,
      images: [
        {
          url: '/Reza logo.svg',
          width: 744,
          height: 744,
        },
      ],
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return getTopics().map(topic => ({ topic }));
}

export default function Page({ params: { topic: selectedTopic } }) {
  const topics = getTopics();
  const posts = getPosts(selectedTopic);

  return (
    <>
      <header className="mt-24 text-gray-800">
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <LargeTopics topics={topics} mt="mt-3" selectedTopic={selectedTopic} />
      </header>
      <section className="mt-20 text-gray-800">
        <p className="text-lg font-medium text-gray-500">{posts.length} tulisan dengan topik:</p>
        <h2 className="text-5xl font-bold mt-2 mb-10">{selectedTopic.replace(/-/g, ' ')}</h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}
