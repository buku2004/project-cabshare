import React from "react";
import { Heart, MapPin, Mail, Phone } from "lucide-react";
// import Gmap from "./Gmap";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* Enhanced Bottom Footer Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Main Footer Content */}
          <div className="py-6 sm:py-8 flex flex-col md:flex-row gap-8 justify-between items-center">
            {/* Left Column - Branding */}
            <div className="flex flex-col items-center justify-center md:items-start w-[20rem]">
              <p className="text-xl text-orange-600 text-center md:text-left mb-3">
                Connecting NIT Rourkela students for safe and affordable rides.
              </p>
              <div className="flex items-center gap-1 text-md text-gray-500">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span>in India</span>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            {/* <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
                  How it Works
                </Link>
                <Link href="/safety" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Safety Guidelines
                </Link>
                <Link href="/faq" className="text-gray-600 hover:text-orange-600 transition-colors">
                  FAQ
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div> */}

            {/* Right Column - Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-amber-700 mb-3 text-sm">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>NIT Rourkela, Odisha</span>
                </div>
                <Link
                  href="mailto:support@cabshare.nitr.ac.in"
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span>support@gmail.com</span>
                </Link>
                <Link
                  href="tel:+91-9876543210"
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>+91-9876543210</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar - Improved Mobile Layout */}
          <div className="border-t border-gray-200 py-4 sm:py-3">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-xs text-gray-500 gap-3 sm:gap-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                <span className="font-medium">
                  © 2025 CabShare • NIT Rourkela
                </span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span className="text-gray-500">All rights reserved</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-center">
                <Link
                  href="/about"
                  className="hover:text-orange-600 transition-colors font-medium"
                >
                  About
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/feedback"
                  className="hover:text-orange-600 transition-colors font-medium"
                >
                  Feedback
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/contact"
                  className="hover:text-orange-600 transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
