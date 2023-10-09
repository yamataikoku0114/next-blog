'use client';

import { useTheme } from 'next-themes';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const handleSetTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={() => {
        handleSetTheme();
      }}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
}
