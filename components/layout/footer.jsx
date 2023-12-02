import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-32 pt-4 pb-5 text-sm text-gray-500">
      <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-3 sm:mb-4 gap-3">
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <li><Link href="https://github.com/rezafikkri">Github</Link></li>
          <li><Link href="https://www.linkedin.com/in/reza-sariful-fikri-9356ab16a/">Linkedin</Link></li>
          <li><Link href="https://twitter.com/fikkrireza">Twitter</Link></li>
          <li><Link href="https://web.facebook.com/reza.sariful.fikri">Facebook</Link></li>
        </ul>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <li><Link href="/blogs">Blog</Link></li>
          <li><Link href="/projects">Projek</Link></li>
        </ul>
      </div>
      <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-5">
        <p className="basis-2/4">Dibuat dengan Next.js dan Tailwind CSS</p>
        <p className="basis-2/4 sm:text-end">&copy;2023 Reza Sariful Fikri 🇮🇩🇵🇸</p>
      </div>
    </footer>
  );
}
