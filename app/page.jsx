import HomePage from "./home-page";
import { getLatestPosts, getTopics } from "./_lib/posts.mjs";

export default function Page() {
  const topics = getTopics();
  const latestPosts = getLatestPosts();

  return <HomePage topics={topics} latestPosts={latestPosts} />
}
