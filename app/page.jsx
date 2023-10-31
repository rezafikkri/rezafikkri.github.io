import HomePage from "./home-page";
import { getLatestPosts, getTopics } from "@/lib/posts.mjs";

const title = "Reza Sariful Fikri - Web Developer";
const description = "Website yang membahas mengenai programming, khususnya di bidang pengembangan web dan hal-hal umum seputar teknologi.";

export const metadata = {
  title: {
    absolute: title 
  },
  description,
  openGraph: {
    title,
    description,
    url: '/',
    images: [
      {
        url: '/rezas.jpg',
        width: 400,
        height: 400,
      }, 
    ],
    type: 'website',
  },
};

export default function Page() {
  const topics = getTopics();
  const latestPosts = getLatestPosts();

  return <HomePage topics={topics} latestPosts={latestPosts} />
}
