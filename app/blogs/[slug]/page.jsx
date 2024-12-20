import dayjs from "dayjs";
import Pagination from "@/components/post/pagination";
import PostContent from "@/components/post/post-content";
import SmallTopics from "@/components/post/small-topics";
import { getPost, getSlugs, getTopics } from "@/lib/posts.mjs";
import FormatTime from "@/components/format-time";
import getBaseUrl from "@/lib/get-base-url";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const post = getPost(slug);
  const baseUrl = getBaseUrl();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blogs/${post.slug}`,
      images: [ post.ogImage ],
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return getSlugs();
}

export default async function Page({ params }) {
  const slug = (await params).slug;
  const post = getPost(slug);
  const topics = getTopics(post.topics);
  const baseUrl = getBaseUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [ baseUrl + post.ogImage ],
    dateModified: dayjs(post.lastmod).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: 'Reza Sariful Fikri',
        url: `${baseUrl}/about`,
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mt-24">
        <FormatTime className="text-gray-600 inline-block" lastmod={post.lastmod} format={'DD MMMM YYYY'}/>
        <h1 className="text-5xl font-bold mt-2 text-gray-900">{post.title}</h1>
        <SmallTopics topics={topics} mt="mt-6" />
        <PostContent post={post} />
        <Pagination serial={post.serial} slug={post.slug} />
      </article>
    </>
  );
}
