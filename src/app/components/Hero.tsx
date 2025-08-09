"use client";

import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-gray-50"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
            Ride together, save more
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-800 opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]">
            Join the NITR-CabShare community today!
          </p>
          <button
            onClick={() => {
              const target = document.getElementById("services") as HTMLElement | null;
              if (target) {
                const yOffset = 0; // Adjust this offset as needed
                const y =
                  target.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              } else {
                console.error("Element with ID 'services' not found.");
              }
            }}
            className="px-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-md hover:bg-teal-600 transition-colors duration-300 opacity-0 animate-[fadeIn_1s_ease-in_1s_forwards]"
          >
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
