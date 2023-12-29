import Link from 'next/link';
import HamburgerMenu from './Hamburger';
import { ModeToggle } from './modeToggle';

export default function Header() {
  return (
    <header>
      <HamburgerMenu />
      <nav className="hidden md:block">
        <ul
          className="flex justify-end items-center space-x-4 mb-4 p-4"
          style={{ height: '100px' }}
        >
          <ModeToggle />
          <li>
            <Link href="/">最近の投稿</Link>
          </li>
          <li>
            <Link href="/about">自己紹介</Link>
          </li>
          <li>
            <Link href="/posts">記事一覧</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
