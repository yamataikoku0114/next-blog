import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), '_posts');

export function getPostSlugs() {
  // postsDirectory内のファイルのリストを返す
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  // slugの.mdを空文字に置き換える
  const realSlug = slug.replace(/\.md$/, '');
  // _posts/post-1.mdを作成（例）
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  // 投稿ファイルの内容をUTF-8エンコーディングで読み取る
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // mdファイルのフロントマターとコンテンツを抽出
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    // 各フィールド
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // 投稿の日付で降順ソート
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function test() {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);
  return allPosts;
}
