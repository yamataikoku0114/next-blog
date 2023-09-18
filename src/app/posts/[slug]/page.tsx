import { getPostBySlug, getAllPosts } from '../../../../lib/api';
import { cache } from 'react';
import type PostType from '../../../../interfaces/post';
import type { Items } from '../../../../lib/api';


const getData = cache((slug: string) => {
  const post = getPostBySlug(slug, ['slug', 'title', 'date', 'content']);
  return post;
});

export default function Post({ params }: { params: { slug: string } }) {
  const post = getData(params.slug);
  return (
    <div>
      <h1>記事詳細</h1>
      <div>
        <div>{post.title}</div>
        <div>{post.date}</div>
        <div>{post.content}</div>
      </div>
      <p>記事のスラッグ: {post.slug}</p>
    </div>
  );
}
