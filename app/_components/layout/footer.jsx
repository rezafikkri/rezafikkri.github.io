import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28 flex flex-col md:flex-row md:justify-between py-4 text-sm text-gray-500">
      <p>Copyright &copy; 2023</p>
      <p>Dibuat dengan <Link href="https://nextjs.org">Next.js</Link> dan <Link href="https://tailwindcss.com">Tailwind CSS</Link>, oleh Reza Sariful Fikri 🇮🇩🇵🇸</p>
    </footer>
  );
}
