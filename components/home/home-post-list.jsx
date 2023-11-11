import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/id';

dayjs.extend(relativeTime);
dayjs.locale('id');

export default function HomePostList({ latestPosts }) {
  return (
    <section className="text-gray-800 mt-20">
      <h2 className="text-3xl font-bold">Tulisan Terbaru</h2>
      <ul className="mt-6 flex flex-col divide-y divide-gray-200">
        {latestPosts.map((post) => (
          <li className="py-2 md:py-1.5" key={post.id}>
            <Link href={`/blogs/${post.slug}`} className="flex flex-col md:flex-row md:justify-between no-underline hover:text-ajwa-blue">
              <h3 className="text-xl">{post.title}</h3>
              <time className="font-light md:basis-40 md:shrink-0 md:text-right">{dayjs(post.date).fromNow()}</time>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/blogs" className="mt-5 inline-block no-underline bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg">Lihat Semua &raquo;</Link>
    </section>
  );
}
