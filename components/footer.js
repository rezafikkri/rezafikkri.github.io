import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 flex justify-between py-4 text-sm text-gray-400">
      <p>Copyright &copy; 2023</p>
      <p>Dibuat dengan <Link href="">Next.js</Link> dan <Link href="">Tailwind CSS</Link></p>
    </footer>
  );
}
