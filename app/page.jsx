import HomePage from "./home-page";
import { getLatestPosts, getTopics } from "./_lib/posts.mjs";
import getBaseUrl from "./_lib/getBaseUrl";

const title = "Reza Sariful Fikri - Web Developer";
const description = "Website yang membahas mengenai programming, khususnya di bidang pengembangan web dan hal-hal umum seputar teknologi.";
const baseUrl = getBaseUrl();

export const metadata = {
  title: {
    absolute: title 
  },
  description,
  openGraph: {
    title,
    description,
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/rezas.jpg`,
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
