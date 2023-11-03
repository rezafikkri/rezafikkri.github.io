import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="pt-8 md:pt-12 flex flex-col sm:flex-row sm:justify-between content-center sm:items-center">
      <Link className="no-underline mb-2 sm:mb-0" href="/">
        <img src="/Reza logo.svg" width={35} height={35} alt="Reza logo" loading="lazy" decoding="async" />
      </Link>
      <Nav />
    </header>
  );
}
