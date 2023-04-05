import Link from "next/link";
import { useRouter } from "next/router";

function activeNav(href) {
  const router = useRouter();
  const regex = new RegExp(`${href}*`);
  if (regex.test(router.asPath)) return 'text-ajwa-blue';
}

export default function Header() {
  return (
    <header className="pt-8 md:pt-12">
      <Link className="inline-flex no-underline" href="/">
        <img src="/Reza logo.svg" width={35} height={35} alt="Reza logo" loading="lazy" decoding="async" />
        <div className="ml-4">
          <span className={`text-xl text-gray-800 font-bold block leading-none`}>Reza Sariful Fikri</span>
          <span className={`text-gray-500 leading-none`}>Web Developer</span>
        </div>
      </Link>
      <nav className={`mt-5 text-gray-700 font-medium`}>
        <ul>
          <li className="inline-block pr-8">
            <Link href="/about" className={`hover:text-ajwa-blue no-underline ${activeNav('/about')}`}>Tentang</Link>
          </li>
          <li className="inline-block pr-8">
            <Link href="/blogs" className={`hover:text-ajwa-blue no-underline ${activeNav('/blogs')}`}>Blog</Link>
          </li>
          <li className="inline-block pr-8">
            <Link href="/projects" className={`hover:text-ajwa-blue no-underline ${activeNav('/projects')}`}>Projek</Link>
          </li>
          <li className="inline-block">
            <Link href="https://github.com/rezafikkri" className="group hover:text-ajwa-blue no-underline" rel="noopener noreferrer" target="_blank">
              <span className="mr-1.5">Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className="inline-block align-baseline stroke-gray-700 group-hover:stroke-ajwa-blue" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
