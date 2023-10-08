import React from 'react';
import { getPostBySlug } from '../../../../lib/api';
import { cache } from 'react';
import markdownToHtml from '../../../../lib/markdownToHtml';

const getData = cache((slug: string) => {
  const post = getPostBySlug(slug, ['slug', 'title', 'date', 'content']);
  return post;
});

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getData(params.slug);
  const content = await markdownToHtml(post.content);
  return (
    <article className="prose prose-slate">
      <h1>記事詳細</h1>
      <div>
        <div>{post.title}</div>
        <div>{post.date}</div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      記事のスラッグ: {post.slug}
    </article>
  );
}
