import Link from 'next/link';

export default function PostLists() {
  const posts = [
    { title: '投稿タイトル1', slug: 'post-1' },
    { title: '投稿タイトル2', slug: 'post-2' },
    { title: '投稿タイトル3', slug: 'post-3' },
    { title: '投稿タイトル4', slug: 'post-4' },
    { title: '投稿タイトル5', slug: 'post-5' },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
      <div>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div className="bg-white p-4 shadow-md rounded-md mb-4">
              <h2>{post.title}</h2>
              <p>タグ</p>
              <p>投稿詳細</p>
              <p>投稿日時:</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
