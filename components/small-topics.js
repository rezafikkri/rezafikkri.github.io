import Link from "next/link";

export default function SmallTopics({ topics, mt })  {
  return (
    <div className={`flex flex-wrap gap-1 ${mt}`}>
      {topics.map((topic, index) => (
        <Link key={index} href={`/blogs/topics/${topic}`} className="no-underline text-xs bg-white border border-gray-500 hover:border-ajwa-green px-2 py-1 rounded-lg">{topic}</Link>
      ))}
    </div>
  );
}
