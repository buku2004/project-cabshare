import React from "react";
import { Send, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* PreFooter CTA */}
      <div className="py-6 sm:py-10 md:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-amber-50 border border-gray-100 shadow-sm rounded-xl p-6 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between">
            {/* Left Section */}
            <div className="lg:max-w-2xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="bg-amber-100 text-amber-600 text-xs sm:text-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  Start in seconds
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Ready to share your next ride?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Post a ride or find one that matches your schedule—it is quick and free.
              </p>
            </div>

            {/* Right Section - Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 lg:flex-shrink-0">
              <button className="flex items-center justify-center gap-2 bg-orange-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-700 transition text-sm sm:text-base font-medium">
                <Car className="w-4 h-4" />
                Post a Ride
              </button>
              <button className="border border-amber-400 text-orange-600 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-md hover:bg-amber-100 transition text-sm sm:text-base font-medium">
                Find a Ride
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t py-4 sm:py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-600">
          <p className="mb-2 sm:mb-0">© 2025 CabShare • NIT Rourkela</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#" className="hover:underline hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
