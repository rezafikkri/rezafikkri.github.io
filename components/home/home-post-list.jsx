import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/id';

dayjs.extend(relativeTime);
dayjs.locale('id');

export default function HomePostList({ latestPosts }) {
  return (
    <section className="text-gray-800 mt-20">
      <h2 className="text-3xl font-bold text-gray-900">Tulisan Terbaru</h2>
      <dl className="mt-2 flex flex-col space-y-3.5">
        {latestPosts.map(post => (
          <div key={post.id}>
            <dt className="flex flex-col-reverse md:flex-row md:justify-between">
              <Link href={`/blogs/${post.slug}`} className="no-underline hover:text-ajwa-blue">
                <h3 className="text-xl font-medium">{post.title}</h3>
              </Link>
            </dt>
            <dd>
              <time className="font-light text-gray-500 text-sm">{dayjs(post.date).fromNow()} — </time>
              <span className="text-gray-600">{post.excerpt}...</span>
            </dd>
          </div>
        ))}
      </dl>
      <Link href="/blogs" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">Lihat Semua &raquo;</Link>
    </section>
  );
}
