'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import activeLink from "@/lib/active-link";

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className="text-gray-700 font-medium">
      <ul>
        <li className="inline-block pr-8">
          <Link
            href="/blogs"
            className={`hover:text-ajwa-blue no-underline ${activeLink('/blogs', pathName)}`}
          >
            Blog
          </Link>
        </li>
        <li className="inline-block pr-8">
          <Link
            href="/projects"
            className={`hover:text-ajwa-blue no-underline ${activeLink('/projects', pathName)}`}
          >
            Projek
          </Link>
        </li>
        <li className="inline-block pr-8">
          <Link
            href="/about"
            className={`hover:text-ajwa-blue no-underline ${activeLink('/about', pathName)}`}
          >
            Tentang
          </Link>
        </li>
      </ul>
    </nav>
  );
}
