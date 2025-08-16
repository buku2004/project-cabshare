"use client";

import { useState, useRef, useEffect, RefObject } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../constants/firebase";
import { motion, AnimatePresence } from "motion/react";

interface UserMenuProps {
  name: string;
  photoURL: string;
}

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default function UserDropdown({ name, photoURL }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setOpen(false));

  const handleSignOut = async (): Promise<void> => {
    await signOut(auth);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-2 rounded-full transition"
      >
        <img
          src={photoURL}
          alt="User avatar"
          className="w-8 h-8 rounded-full border-2 hover:border border-orange-600"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border rounded-lg shadow-lg overflow-hidden z-50"
          >
            <p className="font-medium px-4 py-2 text-white bg-amber-600/90">{name}</p>
            <a
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Profile
            </a>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}