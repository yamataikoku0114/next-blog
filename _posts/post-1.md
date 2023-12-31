---
title: '【Next.js 13.4】next-themes と Tailwind CSS でダークモードの実装'
date: '2023/08/19'
tags:
  - JavaScript
  - Next.js
---

## 目次

Next.js を利用して Markdown のブログサイトを一から作成します。

## 概要

Next.js で作成しているブログにダークモードを実装しました。

## 手順

### next-themes のインストール

```bash
npm install next-themes
```

### Tailwind のダークモードを有効化する

`tailwind.config.js`の`darkMode`に`class`か`media`を指定する

- `media`を設定した場合
  - OS の設定に基づいて、自動で dark モードに切り替えてくれる
- `class`を設定した場合

  - ユーザーがページ上で ON/OFF の切り替えができる

- tailwind.config.js

```tsx
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
```

### ThemeProvider のセットアップ

- src/app/components/themeProviders

```tsx
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### ThemeProvider を layout.tsx に読み込み

- src/layout.tsx

```tsx
import { ThemeProvider } from './components/themeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Light/Dark モードを切り替えるコンポーネントを作成

アイコンは[react-icons](https://react-icons.github.io/react-icons/)を使用

- src/app/components/modeToggle.tsx

```tsx
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
```

## 結果

- クライアントサイドの html 要素に現在のモードが表示される
- dark:~で dark モードの CSS を当てていくことができる

![キャプチャ1](/posts/post-1/darkmode1.png)

- ローカルストレージに現在のモードが保存される

![キャプチャ2](/posts/post-1/darkmode2.png)
