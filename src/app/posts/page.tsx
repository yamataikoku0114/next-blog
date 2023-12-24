import { getData } from '../../../lib/getData';
import { PostCard } from '../components/PostCard';

export default function PostLists() {
  const allPosts = getData();
  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
        {allPosts && (
          <div>
            {allPosts.map((post) => (
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
