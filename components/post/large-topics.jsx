import Link from "next/link";

export default function LargeTopics({ topics, mt, selectedTopic = '' } = {}) {
  return (
    <div className={`flex flex-wrap gap-2 ${mt}`}>
      {topics.map((topic) => (
        <Link
          key={topic.id}
          href={`/blogs/topics/${topic.slug}`}
          className={`no-underline bg-white border-2 ${selectedTopic == topic.slug ? 'border-ajwa-blue' : 'border-gray-500'} hover:border-ajwa-blue px-2 py-1 rounded-lg`}
        >
          {topic.name}
        </Link>
      ))}
    </div>
  );
}
