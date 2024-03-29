import Link from "next/link";

export default function SmallTopics({ topics, mt })  {
  return (
    <div className={`flex flex-wrap gap-1 ${mt}`}>
      {topics.map((topic) => (
        <Link
          key={topic.id}
          href={`/blogs/topic/${topic.name}`} 
          className="no-underline text-xs bg-white border border-gray-500 hover:border-ajwa-blue px-2 py-1 rounded-lg"
        >
          {topic.name.replace(/-/g, ' ')}
        </Link>
      ))}
    </div>
  );
}
