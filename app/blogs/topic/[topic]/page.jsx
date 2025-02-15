import { getPosts, getTopicId, getTopics } from "@/lib/posts.mjs";
import PostList from "@/components/post/post-list";
import LargeTopics from "@/components/post/large-topics";
import getBaseUrl from "@/lib/get-base-url";

export async function generateMetadata({ params }) {
  const selectedTopic = (await params).topic;
  const description = `Kumpulan tulisan mengenai ${selectedTopic}.`;
  const baseUrl = getBaseUrl();

  return {
    title: selectedTopic,
    description: description,
    openGraph: {
      title: selectedTopic,
      description: description,
      url: `${baseUrl}/blogs/topics/${selectedTopic}`,
      images: [
        {
          url: `${baseUrl}/Reza logo.svg`,
          width: 744,
          height: 744,
        },
      ],
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return getTopics().map(topic => ({ topic: topic.name }));
}

export default async function Page({ params }) {
  const selectedTopic = (await params).topic;
  const topics = getTopics();
  const topicId = getTopicId(selectedTopic);
  const posts = getPosts(topicId);

  return (
    <>
      <header className="mt-24 text-gray-800">
        <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
        <LargeTopics topics={topics} mt="mt-3" selectedTopic={selectedTopic} />
      </header>
      <section className="mt-20 text-gray-800">
        <p className="text-lg font-medium text-gray-500">{posts.length} tulisan dengan topik:</p>
        <h1 className="text-5xl font-bold mt-2 mb-10">{selectedTopic.replace(/-/g, ' ')}</h1>
        <PostList posts={posts} />
      </section>
    </>
  );
}
