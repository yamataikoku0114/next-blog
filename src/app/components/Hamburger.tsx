'use client';

import React, { useState } from 'react';
import '../HamburgerMenu.css';
import Link from 'next/link';
import { ModeToggle } from './modeToggle';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu md:hidden">
      <div className="flex justify-end bg-gray-400 p-3">
        <ModeToggle />
        <div
          className={`menu-icon ${
            isOpen ? 'open' : ''
          } flex flex-col items-center justify-center cursor-pointer`}
          style={{ height: '40px' }}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div
        className={`menu-items ${
          isOpen ? 'open' : ''
        } bg-sky-200 absolute z-10 overflow-x-hidden text-center w-full transition duration-300 ease-in`}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <ul className="items">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" onClick={toggleMenu}>
              Posts
            </Link>
          </li>
          <li>
            <Link href="/tags" onClick={toggleMenu}>
              Tags
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
