'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-black dark:bg-white text-white dark:text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex-1 flex justify-center space-x-3 flex-wrap">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              className="px-3 py-1 border border-white dark:border-black rounded-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-white text-black rounded-full border border-white dark:bg-black dark:text-white dark:border-black hover:opacity-80 transition">
            Resume
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl px-3 py-1 rounded-full border border-white dark:border-black"
            title="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
