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

export type Items = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  // 記事一覧と詳細で当関数が使われているためはじく（1回目でundefinedが返るため、2つはじく）[例：.DS_Store]
  if (!slug.startsWith('.') && !slug.startsWith('undefined')) {
    // slugの.mdを空文字に置き換える
    const realSlug = slug.replace(/\.md$/, '');
    // _posts/post-1.mdを作成（例）
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    // 投稿ファイルの内容をUTF-8エンコーディングで読み取る
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // mdファイルのフロントマターとコンテンツを抽出
    const { data, content } = matter(fileContents);

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

  return {};
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // 投稿の日付で降順ソート
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
