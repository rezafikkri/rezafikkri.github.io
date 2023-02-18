import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 flex justify-between py-4 text-sm text-gray-400">
      <p>Copyright &copy; 2023</p>
      <p>Dibuat dengan <Link href="https://nextjs.org" rel="noopener noreferrer" target="_blank">Next.js</Link> dan <Link href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">Tailwind CSS</Link></p>
    </footer>
  );
}
