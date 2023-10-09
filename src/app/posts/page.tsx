import Head from 'next/head';
import Link from 'next/link';
import { getData } from '../../../lib/getData';

export default function PostLists() {
  const allPosts = getData();
  return (
    <div>
      <Head>
        <title>Hello world!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
        {allPosts && (
          <div>
            {allPosts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <div className="bg-white p-4 shadow-md rounded-md mb-4">
                  <h2>{post.title}</h2>
                  <p>タグ</p>
                  <p>投稿詳細</p>
                  <p>{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
