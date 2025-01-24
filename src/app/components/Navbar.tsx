"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth, googleProvider } from "../constants/firebase";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const logout = auth.onAuthStateChanged((authUser: User | null) => {
      setUser(authUser);
    });

    return () => logout();
  }, []);

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      setUser(user);
      router.push("/");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#101820] text-white shadow-md z-50 drop-shadow-xl">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <img
            src="./Logo_final.png"
            alt="CabShare-NITR Logo"
            className="w-[5rem]"
          />

          {/* Desktop Navigation Links */}
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

          {/* Sign Up or Profile Icon */}
          {user ? (
            <div className="relative">
              <button
                className="text-gray-300 hover:text-teal-400 p-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUserCircle size={30} />
                )}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md">
                  <Link href="/" className="block px-4 py-2">
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-red-500 border-t-2 w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              className="bg-teal-400 p-2 rounded hover:opacity-90 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              Sign Up
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Open Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden bg-[#101820] text-white overflow-hidden duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <Link
            href="/"
            className="block px-4 py-2 text-gray-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 text-gray-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 text-gray-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 text-gray-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {user && (
            <>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-300 hover:text-teal-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-2 text-red-500"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <button
              onClick={() => {
                handleGoogleLogin();
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-2 bg-teal-400 text-black rounded hover:opacity-90"
            >
              Sign Up
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
