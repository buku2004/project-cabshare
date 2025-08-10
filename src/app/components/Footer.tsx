import React from "react";
import { Send, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* PreFooter CTA */}
      <div className="px-6 md:px-20 py-12">
        <div className="bg-amber-50 border border-gray-100 shadow-sm rounded-xl p-8 md:flex md:items-center md:justify-between">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-600 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <Send className="w-4 h-4" />
                Start in seconds
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Ready to share your next ride?
            </h2>
            <p className="text-gray-600">
              Post a ride or find one that matches your schedule—it is quick and free.
            </p>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
              <Car className="w-4 h-4" />
              Post a Ride
            </button>
            <button className="border border-amber-400 text-orange-600 px-4 py-2 rounded-md hover:bg-amber-100 transition">
              Find a Ride
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2025 CabShare • NIT Rourkela</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
