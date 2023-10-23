import Link from "next/link";
import Nav from "./nav";

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
      <Nav />
    </header>
  );
}
