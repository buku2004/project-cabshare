import React from "react";
import { Send, Heart, MapPin, Mail, Phone } from "lucide-react";
import Gmap from "./Gmap";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* PreFooter CTA */}
      <div className="py-6 sm:py-10 md:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
         flex flex-col gap-6 md:flex-row">
          <div className="bg-amber-50 border border-gray-100 shadow-sm rounded-xl
           p-6 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between">
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
            <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 lg:flex-shrink-0 ">
              <Link href="/post-ride"
               className="flex items-center justify-center gap-2 bg-orange-600
               text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-700 transition text-sm sm:text-base font-medium">
                Post a Ride
              </Link>
              <Link href="/find-ride" className="border border-amber-400 text-orange-600 px-4 sm:px-5 md:px-6 py-2 sm:py-3
               rounded-md hover:bg-amber-100 transition text-sm sm:text-base font-medium flex items-center justify-center">
                Find a Ride
              </Link>
            </div>
          </div>
          <div>
            <Gmap/>
          </div>
            
        </div>
      </div>
      
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
              <h3 className="font-semibold text-amber-700 mb-3 text-sm">Get in Touch</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>NIT Rourkela, Odisha</span>
                </div>
                <Link href="mailto:support@cabshare.nitr.ac.in" 
                      className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span>support@gmail.com</span>
                </Link>
                <Link href="tel:+91-9876543210" 
                      className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
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
                <span className="font-medium">© 2025 CabShare • NIT Rourkela</span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span className="text-gray-500">All rights reserved</span>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 text-center">
                <Link href="/about" className="hover:text-orange-600 transition-colors font-medium">
                  About
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/feedback" className="hover:text-orange-600 transition-colors font-medium">
                  Feedback
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact" className="hover:text-orange-600 transition-colors font-medium">
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
