import BlogsPage from "./blogs-page"; 
import { getTopics, getPosts } from "@/lib/posts";

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

  return <BlogsPage topics={topics} posts={posts} />;
}
