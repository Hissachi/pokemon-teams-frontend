'use client';

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export function Navbar() {
  return (
    <nav className="bg-white/85 dark:bg-gray-800/90 shadow-sm fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Poké-Teams
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Login
            </Link>
          </div>
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
      {children}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden flex justify-center py-3 space-x-6 bg-white/90 dark:bg-gray-700/90">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
    </div>
  );
}