import { getPostsBySerialName } from "@/lib/posts.mjs";
import Link from "next/link";
import activeLink from "@/lib/active-link";

export default function Pagination({ serial, slug }) { 
  if (serial != undefined) {
    const posts = getPostsBySerialName(serial.name);
  
    return (
      <>
        <div className="flex justify-center mt-12 gap-4">
          <hr width="10%" />
          <hr width="30%" />
        </div>
        <h2 id="other-writing" className="text-3xl mt-12 mb-6 font-semibold text-gray-800">Tulisan lainnya:</h2>
        <ol className="text-gray-700 text-xl list-decimal list-outside flex flex-col gap-3 pl-8" id="pagination-list">
          {posts.map(post => (
            <li key={post.slug} className="pl-1.5">
              <Link
                href={`/blogs/${post.slug}`}
                className={`no-underline ${activeLink(post.slug, slug)}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </>
    );
  }
  return null;
}
