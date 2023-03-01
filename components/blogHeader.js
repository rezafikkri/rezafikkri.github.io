import Link from "next/link";

export default function BlogHeader({ topics }) {
  return (
    <header className="mt-24 text-gray-800">
      <h1 className="text-5xl font-bold">Blog</h1>
      <h2 className="mt-12 text-3xl font-bold">Topik</h2>
      <small className="text-gray-600">Klik pada salah satu topik tulisan untuk melihat semua tulisan dengan topik itu!</small>
      <div className="mt-7 flex flex-wrap gap-2">
        {topics.map((topic, index) => (
        <Link key={index} href="" className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">{topic}</Link>
        ))}
      </div>
    </header>
  );
}
