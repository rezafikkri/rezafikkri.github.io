import React from "react";
import dayjs from "dayjs";
import 'dayjs/locale/id';
import Link from "next/link";

dayjs.locale('id');

export default function PostList({ posts }) {
  let currentYear = 0;

  return (
    <dl className="flex flex-col space-y-3.5">
      {posts.map((post) => {
        const year = dayjs(post.date).year();
        const dli = (
          <div key={post.id}>
            {currentYear != year && <h3 className={`text-2xl font-bold mb-2 ${currentYear != 0 && 'mt-6'}`}>{year}</h3>}
            <dt className="flex flex-col-reverse md:flex-row md:justify-between">
              <Link href={`/blogs/${post.slug}`} className="no-underline hover:text-ajwa-blue">
                <h3 className="text-xl font-medium">{post.title}</h3>
              </Link>
            </dt>
            <dd>
              <time className="font-light text-gray-500 text-sm">{dayjs(post.date).format('DD MMM')} — </time>
              <span className="text-gray-600">{post.excerpt}...</span>
            </dd>
          </div>
        );

        // if currentYear != year, then update currentYear
        if (currentYear != year) currentYear = year;

        return dli;
      })}
    </dl>
  );
}
