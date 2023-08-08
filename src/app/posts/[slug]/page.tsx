export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>記事詳細</h1>
      <p>記事のスラッグ: {params.slug}</p>
    </div>
  );
}
