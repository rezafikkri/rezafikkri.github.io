import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Reza Sariful Fikri</Link>
      <nav>
        <ul>
          <li><Link href="">Tentang</Link></li>
          <li><Link href="">Blog</Link></li>
          <li><Link href="">Portofolio</Link></li>
        </ul>
      </nav>
    </header>
  );
}
