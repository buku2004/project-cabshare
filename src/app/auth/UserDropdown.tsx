"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../constants/firebase";

interface UserMenuProps {
  name: string;
  photoURL: string;
}

export default function UserDropdown({ name, photoURL }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <img
          src={photoURL}
          alt="User avatar"
          className="w-8 h-8 rounded-full border"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border rounded-lg shadow-lg overflow-hidden z-50">
          <p className="font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">{name}</p>
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
        </div>
      )}
    </div>
  );
}
