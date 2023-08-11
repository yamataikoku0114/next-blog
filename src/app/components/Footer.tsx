import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="grid place-items-center bg-gray-300" style={{ height: "100px" }}>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="https://github.com/yamataikoku0114">
              <BsGithub />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/xDZovNSVDxWhCPR">
              <BsTwitter />
            </Link>
          </li>
        </ul>
      </nav>
      <small>© SeekNext Co. Ltd. 2021</small>
    </footer>
  );
}
