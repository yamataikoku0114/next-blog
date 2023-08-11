export default function TagLists() {
  const tags = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Docker',
  ];
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">タグ一覧</div>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
