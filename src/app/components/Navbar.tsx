"use client"
import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-2 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="flex items-center gap-3">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-600"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.8-.6-1.5-1.3-1.8L16 10 14.7 8.6c-.7-.8-1.8-1.1-2.8-.8l-5.6 2C5.5 10 5 10.5 5 11.2V13l-2 1v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
        <span className="text-black font-bold text-xl">CabShare</span>
      </div>

      {/* Right Section - Navigation Links */}
      <div className="flex items-center gap-6">
        <a
          href="#home"
          className="text-gray-700 hover:text-black transition duration-200"
        >
          Home
        </a>
        <a
          href="#rides"
          className="text-gray-700 hover:text-black transition duration-200"
        >
          Find a Ride
        </a>
        <a
          href="#about"
          className="text-gray-700 hover:text-black transition duration-200"
        >
          Post a Ride
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-black transition duration-200"
        >
          About
        </a>

        {/* Post Ride Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition duration-200">
          Post Ride
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
