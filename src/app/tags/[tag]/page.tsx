import { getPostsByTag } from '../../../../lib/getPostsByTag';

export default function TagLists({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">タグ一覧</div>
      <div className="flex flex-wrap">
        {posts.map((post, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
          >
            {post.title}
          </button>
        ))}
      </div>
    </div>
  );
}
