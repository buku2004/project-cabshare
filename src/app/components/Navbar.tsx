"use client";
import React, { useState } from "react";
import { useUser, SignUpButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser(); // Check user sign-in status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility

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
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Contact
            </a>
          </div>

          {/* Sign Up / Account Dropdown */}
          {!isSignedIn ? (
            <SignUpButton mode="modal">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-2 rounded-md">
                Sign In
              </button>
            </SignUpButton>
          ) : (
            // Dropdown Menu for Logged-In Users
            <div className="relative">
              <UserButton
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-bold">Account</span>
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </UserButton>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Dark Mode
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Close Menu
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

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
