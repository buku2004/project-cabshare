import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mt-20">
          <a href="#">
            <img
              src="./Logo_final.png"
              alt="CabShare-NITR Logo"
              className="h-10 w-auto"
              style={{ height: "120px", width: "auto" }}
            />
          </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
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
  )
}

export default Navbar