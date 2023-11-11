import { getTopics, getPosts } from "@/lib/posts";
import LargeTopics from "@/components/post/large-topics";
import PostList from "@/components/post/post-list";

const title = "Blog";
const description = "Kumpulan tulisan mengenai programming dan teknologi secara umum.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/blogs',
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

export default function Page() {
  const topics = getTopics();
  const posts = getPosts();

  return (
    <>
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
    </>
  );}
