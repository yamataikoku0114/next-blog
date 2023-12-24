import { getData } from '../../lib/getData';
import { PostCard } from './components/PostCard';

export default function Home() {
  const allPosts = getData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">最近の投稿</h1>
      {allPosts && (
        <div>
          {allPosts.map((post) => (
            <div key={post.slug}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
