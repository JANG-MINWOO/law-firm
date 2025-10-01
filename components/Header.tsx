"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-400">
            송지훈 법률사무소
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="hover:text-yellow-400 transition">
              업무분야
            </Link>
            <Link href="#attorneys" className="hover:text-yellow-400 transition">
              변호사 소개
            </Link>
            <Link href="#contact" className="hover:text-yellow-400 transition">
              상담신청
            </Link>
            <Link href="tel:02-1234-5678" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              긴급상담 02-1234-5678
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#services" className="block hover:text-yellow-400 transition">
              업무분야
            </Link>
            <Link href="#attorneys" className="block hover:text-yellow-400 transition">
              변호사 소개
            </Link>
            <Link href="#contact" className="block hover:text-yellow-400 transition">
              상담신청
            </Link>
            <Link href="tel:02-1234-5678" className="block bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-300 transition">
              긴급상담 02-1234-5678
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}