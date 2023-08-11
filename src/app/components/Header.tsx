import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-end items-center space-x-4 bg-gray-300 mb-4 p-4" style={{ height: "100px" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
