import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28 flex flex-col md:flex-row md:justify-between py-4 text-sm text-gray-400">
      <p>Copyright &copy; 2023</p>
      <p>Dibuat dengan <Link href="https://nextjs.org">Next.js</Link>, <Link href="https://tailwindcss.com">Tailwind CSS</Link> dan <Link href="https://rstacruz.github.io/nprogress">NProgress.js</Link></p>
    </footer>
  );
}
