import { getPostsByTag } from '../../../../lib/getPostsByTag';
import { PostCard } from '@/app/components/PostCard';

export default function TagLists({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);
  return (
    <div className="p-4">
      <main>
        <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
        {posts && (
          <div>
            {posts.map((post) => (
              <div key={post.slug}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
