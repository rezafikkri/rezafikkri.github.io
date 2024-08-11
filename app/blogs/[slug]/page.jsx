import Pagination from "@/components/post/pagination";
import PostContent from "@/components/post/post-content";
import SmallTopics from "@/components/post/small-topics";
import { getPost, getSlugs, getTopics } from "@/lib/posts.mjs";

import dayjs from "dayjs";
import 'dayjs/locale/id';

// dayjs register locale
dayjs.locale('id');

export function generateMetadata({ params: { slug } }) {
  const post = getPost(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      images: [ post.ogImage ],
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return getSlugs();
}

export default function Page({ params: { slug } }) {
  const post = getPost(slug);
  const topics = getTopics(post.topics);

  return (
    <>
      <article className="mt-24">
        <time className="text-gray-600 inline-block">{dayjs(post.date).format('DD MMMM YYYY - HH:mm:ssZ')}</time>
        <h1 className="text-5xl font-bold mt-2 text-gray-900">{post.title}</h1>
        <SmallTopics topics={topics} mt="mt-6" />
        <PostContent post={post} />
        <Pagination serial={post.serial} slug={post.slug} />
      </article>
    </>
  );
}
