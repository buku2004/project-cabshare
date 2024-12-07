import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-green-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="bg-green-600 p-2 rounded">
          <img
            src="C:\CabShare\cabshare-nitr\public\WhatsApp Image 2024-12-07 at 00.06.25_e85d9014.jpg"
            alt="CabShare NITR Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 font-semibold">
            <li>
              <a href="#home" className="hover:text-green-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Email Icon */}
        <div>
          <a href="#email" className="text-green-300 hover:text-white text-xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar