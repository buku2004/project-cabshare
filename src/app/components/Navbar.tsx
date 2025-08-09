"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 h-16 flex items-center justify-between">
      {/* Left Section - Logo */}
      <Link href="/" className="flex items-center" aria-label="CabShare Home">
        <Image
          src="/cabshareorangelogo.png"
          alt="CabShare logo"
          width={130}
          height={32}
          priority
        />
      </Link>

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
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-xl shadow-md transition duration-200 text-sm">
          Post Ride
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
