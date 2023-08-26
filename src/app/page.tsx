import Image from 'next/image';
import { test } from '../../lib/api';

const result = test();
console.log(result);

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">最近の投稿</h1>
      <div>
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2>投稿タイトル1</h2>
          <p>タグ</p>
          <p>投稿詳細</p>
          <p>投稿日時:</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2>投稿タイトル2</h2>
          <p>タグ</p>
          <p>投稿詳細</p>
          <p>投稿日時:</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2>投稿タイトル3</h2>
          <p>タグ</p>
          <p>投稿詳細</p>
          <p>投稿日時:</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2>投稿タイトル4</h2>
          <p>タグ</p>
          <p>投稿詳細</p>
          <p>投稿日時:</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
          <h2>投稿タイトル5</h2>
          <p>タグ</p>
          <p>投稿詳細</p>
          <p>投稿日時:</p>
        </div>
      </div>
    </div>
  );
}
