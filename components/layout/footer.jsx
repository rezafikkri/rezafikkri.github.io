import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28 pt-4 pb-5 text-sm text-gray-500">
      <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-3 sm:mb-4 gap-3">
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <li><Link href="">Github</Link></li>
          <li><Link href="">Linkedin</Link></li>
          <li><Link href="">Twitter</Link></li>
        </ul>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <li><Link href="/cheatsheet">Cheatsheet</Link></li>
          <li><Link href="/portfolio">Portofolio</Link></li>
        </ul>
      </div>
      <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-5">
        <p className="basis-2/4">Dibuat dengan Next.js dan Tailwind CSS</p>
        <p className="basis-2/4 sm:text-end">&copy;2023 Reza Sariful Fikri 🇮🇩🇵🇸</p>
      </div>
    </footer>
  );
}
