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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
