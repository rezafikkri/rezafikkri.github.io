import BlogsPage from "./blogs-page"; 
import { getTopics, getPosts } from "../_lib/posts";

export default function Page() {
  const topics = getTopics();
  const posts = getPosts();

  return <BlogsPage topics={topics} posts={posts} />;
}
