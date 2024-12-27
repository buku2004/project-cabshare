"use client";
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2E2E2E] text-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <img
            src="./Logo_final.png"
            alt="CabShare-NITR Logo"
            className="w-[5rem]"
          />

          {/* Navigation Links */}
          <div className="hidden md:flex text-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
