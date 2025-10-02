"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-200 to-purple-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-purple-900 font-extrabold text-2xl">
            BitLinks
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center text-purple-800 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shorten">Shorten</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li className="flex gap-3">
              <Link href="/shorten">
                <button className="px-4 py-2 rounded-xl bg-purple-500 text-white shadow hover:bg-purple-600 transition">
                  Try Now
                </button>
              </Link>
              <Link href="/generate">
                <button className="px-4 py-2 rounded-xl border border-purple-500 text-purple-700 shadow hover:bg-purple-100 transition">
                  GitHub
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-purple-800 font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Shorten
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="flex flex-col gap-3">
              <Link href="/generate">
                <button className="w-full px-4 py-2 rounded-xl bg-purple-500 text-white shadow hover:bg-purple-600 transition">
                  Try Now
                </button>
              </Link>
              <Link href="/generate">
                <button className="w-full px-4 py-2 rounded-xl border border-purple-500 text-purple-700 shadow hover:bg-purple-100 transition">
                  GitHub
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
