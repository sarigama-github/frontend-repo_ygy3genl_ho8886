import React, { useEffect, useState } from 'react';
import { School, Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white dark:bg-indigo-500">
            <School size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">Flames SMS</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300 md:flex">
          <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400">Features</a>
          <a href="#preview" className="hover:text-indigo-600 dark:hover:text-indigo-400">Demo</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#preview"
            className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Try Demo
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
            <a href="#features" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Features</a>
            <a href="#preview" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Demo</a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
            <a href="#preview" onClick={() => setOpen(false)} className="rounded bg-indigo-600 px-3 py-2 text-center text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">Try Demo</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
