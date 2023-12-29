import { PostType } from '../../../interfaces/post';
import Link from 'next/link';

type Props = {
  post: PostType;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div
      className="p-4 shadow-md rounded-md mb-4 dark:bg-slate-400"
      key={post.slug}
    >
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-2xl text-blue-600 hover:text-blue-900">
          {post.title}
        </h2>
      </Link>
      <p className="p-2">{post.date}</p>
      <div className="p-4">
        {post.tags.map((tag) => (
          <Link
            href={`/tags/${tag}`}
            key={tag}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded-full m-2"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};
