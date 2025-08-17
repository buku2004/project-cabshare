import React from 'react'
import { Send } from "lucide-react";
import Gmap from "./Gmap";
import Link from "next/link";

const Map = () => {
  return (
    <div className="py-4 sm:py-6 md:py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* Content Card */}
          <div className="bg-amber-50 border border-gray-100 shadow-sm rounded-xl
           p-4 flex flex-col justify-center lg:flex-1 h-[350px]">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="bg-amber-100 text-amber-600 text-xs sm:text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                Start in seconds
              </span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to share your next ride?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Post a ride or find one that matches your schedule—it is quick and free.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
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

          {/* Map Container */}
          <div className="lg:flex-1 min-h-[300px] sm:min-h-[250px] md:min-h-[300px]">
            <Gmap/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map;