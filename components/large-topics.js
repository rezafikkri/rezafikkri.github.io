import Link from "next/link";

export default function LargeTopics({ topics, mt }) {
  return (
    <div className={`flex flex-wrap gap-2 ${mt}`}>
      {topics.map((topic, index) => (
        <Link key={index} href={`/blogs/topics/${topic}`} className="no-underline bg-white border-2 border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">{topic}</Link>
      ))}
    </div>
  );
}
