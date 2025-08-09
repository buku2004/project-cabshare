"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { auth, googleProvider } from "../constants/firebase";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAuthenticatingRef = useRef<boolean>(false);
  const router = useRouter();

  // Helper function to get user's first letter
  const getUserInitial = (user: User): string => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    } else if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U'; // Default fallback
  };

  // Profile Avatar Component
  const ProfileAvatar: React.FC<{ user: User }> = ({ user }) => {
    const [imageError, setImageError] = useState(false);

    if (user.photoURL && !imageError) {
      return (
        <img
          src={user.photoURL}
          alt="User Profile"
          className="w-8 h-8 rounded-full object-cover"
          onError={() => setImageError(true)}
        />
      );
    }

    // Fallback to initial letter
    return (
      <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
        {getUserInitial(user)}
      </div>
    );
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser: User | null) => {
      setUser(authUser);
      // Reset loading state when user state changes
      if (authUser) {
        setIsLoading(false);
        isAuthenticatingRef.current = false;
      }
    });

    // Add window focus listener to reset loading state when popup is closed
    const handleWindowFocus = () => {
      // If loading state is true and we regain focus, it likely means popup was closed
      if (isLoading || isAuthenticatingRef.current) {
        setTimeout(() => {
          setIsLoading(false);
          isAuthenticatingRef.current = false;
        }, 200); // Reduced delay for faster response
      }
    };

    // Add visibility change listener for better popup closure detection
    const handleVisibilityChange = () => {
      if (!document.hidden && (isLoading || isAuthenticatingRef.current)) {
        // Document became visible again, likely popup was closed
        setTimeout(() => {
          setIsLoading(false);
          isAuthenticatingRef.current = false;
        }, 300);
      }
    };

    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      unsubscribe();
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isLoading]);

  const handleGoogleLogin = async (): Promise<void> => {
    // Prevent multiple simultaneous requests
    if (isLoading || isAuthenticatingRef.current) {
      console.log("Authentication already in progress...");
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    try {
      setIsLoading(true);
      isAuthenticatingRef.current = true;
      
      // Set a shorter timeout to reset loading state if authentication takes too long
      timeoutId = setTimeout(() => {
        console.log("Authentication timeout, resetting loading state");
        setIsLoading(false);
        isAuthenticatingRef.current = false;
      }, 10000); // 10 seconds timeout
      
      // Configure Google provider with additional options
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(auth, googleProvider);
      
      // Clear timeout on success
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      const user = result.user;
      console.log("User Info:", user);
      setUser(user);
      isAuthenticatingRef.current = false;
      router.push("/");
    } catch (error: unknown) {
      // Clear timeout on any error
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      // Handle specific error types
      const firebaseError = error as { code?: string; message?: string };
      
      // Log less verbose messages for user-initiated actions
      if (firebaseError.code === 'auth/cancelled-popup-request') {
        console.log("Authentication cancelled");
      } else if (firebaseError.code === 'auth/popup-closed-by-user') {
        console.log("Authentication popup closed");
      } else if (firebaseError.code === 'auth/popup-blocked') {
        console.log("Popup was blocked by browser");
        alert("Please allow popups for this site to sign in with Google");
      } else {
        console.error("Authentication error:", firebaseError.code || 'unknown error');
        alert("Authentication failed. Please try again.");
      }
    } finally {
      // Ensure timeout is cleared and loading state is reset
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      isAuthenticatingRef.current = false;
      // Immediate reset
      setIsLoading(false);
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
    <nav className="fixed top-0 left-0 w-full bg-[#29323c] text-black shadow-md z-50 drop-shadow-xl">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <img
            src="./logocabshare.png"
            alt="CabShare-NITR Logo"
            className="w-[11rem]"
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex text-center space-x-8">
            <Link
              href="/"
              className="text-black hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-black hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-black hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-black hover:text-teal-400 px-3 py-2 rounded-md text-lg font-bold"
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
                <ProfileAvatar user={user} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium">{user.displayName || user.email}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-red-500 border-t-2 w-full text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className={`bg-teal-400 p-2 rounded hover:opacity-90 cursor-pointer ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign Up'}
            </button>
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
              <div className="px-4 py-2 border-b border-gray-600">
                <div className="flex items-center space-x-3">
                  <ProfileAvatar user={user} />
                  <div>
                    <p className="text-sm font-medium text-white">{user.displayName || user.email}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
              </div>
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
              disabled={isLoading}
              className={`block px-4 py-2 bg-teal-400 text-black rounded hover:opacity-90 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Signing In...' : 'Sign Up'}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
