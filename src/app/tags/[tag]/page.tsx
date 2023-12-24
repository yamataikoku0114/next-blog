import { getPostsByTag } from '../../../../lib/getPostsByTag';

export default function TagLists({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">タグ一覧</div>
      <div className="flex flex-wrap"></div>
    </div>
  );
}
