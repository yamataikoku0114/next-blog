import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getPostSlugs() {
  // postsDirectory内のファイルのリストを返す
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  // slugの.mdを空文字に置き換える
  const realSlug = slug.replace(/\.md$/, '');
  // _posts/post-1.mdを作成（例）
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  // 投稿ファイルの内容をUTF-8エンコーディングで読み取る
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // mdファイルのフロントマターとコンテンツを抽出
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content: content,
    date: data['date'] as string,
    title: data['title'] as string,
    tags: data['tags'] as string[],
  };
}

export function getAllPosts(filterString?: string) {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug !== '.DS_Store')
    .map((slug) => getPostBySlug(slug))
    // 投稿の日付で降順ソート
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  if (typeof filterString === 'undefined') {
    return posts;
  }
  return posts.filter((post) => {
    return post.tags.some((tag) => {
      return tag === filterString;
    });
  });
}

export function getPostListByTag(tag: string) {
  // tagの値を含む記事を配列で返す
}
