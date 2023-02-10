import Image from "next/image";
import Link from "next/link";
import { roboto } from "@/common/fonts";

export default function Header() {
  return (
    <header className="pt-12">
      <Link className="flex" href="/">
        <Image src="/Reza logo.svg" width={35} height={35} alt="Reza logo" />
        <div className="ml-4">
          <span className={`text-xl text-gray-800 font-bold block leading-none ${roboto.className}`}>Reza Sariful Fikri</span>
          <span className={`text-gray-500 leading-none ${roboto.className}`}>Web Developer</span>
        </div>
      </Link>
      <nav className={`mt-5 text-gray-700 font-medium ${roboto.className}`}>
        <ul>
          <li className="inline-block pr-8 hover:text-gray-800"><Link href="">Tentang</Link></li>
          <li className="inline-block pr-8 hover:text-gray-800"><Link href="">Blog</Link></li>
          <li className="inline-block pr-8 hover:text-gray-800"><Link href="">Portofolio</Link></li>
          <li className="inline-block hover:text-gray-800 group">
            <Link href="">
              <span className="mr-1.5">Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className="inline-block align-baseline stroke-gray-700 group-hover:stroke-gray-800" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
