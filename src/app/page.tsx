'use client';

import Link from "next/link";
import * as React from "react"
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <nav className="bg:white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Poke-Teams
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </div>

            <div className="flex items-center">
              <Link 
                href="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center py-2 space-x-6 bg-gray-50">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            Sobre
          </Link>
        </div>
      </nav>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}



