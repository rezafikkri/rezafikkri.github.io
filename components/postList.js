import dayjs from "dayjs";
import 'dayjs/locale/id';
import Link from "next/link";

dayjs.locale('id');

export default function PostList({ posts }) {
  let currentYear = 0;

  return (
    <ul className="mt-7">
      {posts.map((post, index) => {
        const year = dayjs(post.date).year();
        const li = (
          <>
            {currentYear != year && <h3 className={`text-2xl font-bold mb-2 ${currentYear != 0 && 'mt-6'}`}>{year}</h3>}
            <li className={`py-2 md:py-1.5 ${currentYear === year && 'border-t'}`} key={index}>
              <Link href="" className="flex flex-col md:flex-row md:justify-between no-underline hover:text-ajwa-green">
                <h3 className="text-xl">{post.title}</h3>
                <time className="font-light md:basis-24 md:text-right">{dayjs(post.date).format('DD MMM')}</time>
              </Link>
            </li>
          </>
        );

        // if currentYear != year, then update currentYear
        if (currentYear != year) currentYear = year;

        return li;
      })}
    </ul>
  );
}
