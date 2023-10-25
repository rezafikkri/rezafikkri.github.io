import PostContent from "@/app/_components/post/post-content";
import SmallTopics from "../../_components/post/small-topics";
import { getPost, getSlugs } from "../../_lib/posts"

import dayjs from "dayjs";
import 'dayjs/locale/id';

// dayjs register locale
dayjs.locale('id');

export function generateStaticParams() {
  return getSlugs();
}

export default function Page({ params: { slug } }) {
  const post = getPost(slug);

  return (
    <>
      <article className="mt-24">
        <time className="text-gray-600 inline-block">{dayjs(post.date).format('DD MMMM YYYY')}</time>
        <h1 className="text-5xl font-bold mt-2 text-gray-800">{post.title}</h1>
        <SmallTopics topics={post.topics} mt="mt-6" />
        <PostContent post={post} />
        <small className="mt-16 block text-gray-600">Klik salah satu topik tulisan untuk melihat semua tulisan pada topik tersebut!</small>
        <SmallTopics topics={post.topics} mt="mt-3" />
      </article>
    </>
  );
}
