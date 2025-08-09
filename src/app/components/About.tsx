import React from "react";

function About() {
  return (
    <div className="bg-[#101820] text-black py-16 sm:py-20 md:py-24 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-10/12 sm:w-9/12 md:w-10/12 max-w-4xl mx-4 sm:mx-6 md:mx-8 bg-[#E8C547] rounded-lg overflow-hidden shadow-lg">
        {/* Left Section - Text */}
        <div className="p-6 md:p-8">
          <h2 className="text-sm md:text-xs uppercase font-bold tracking-widest text-teal-800 mb-2">
            Ride Together, Save Together
          </h2>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
            Join the NIT Rourkela cab-sharing community
          </h1>
          <p className="text-sm md:text-base text-[#2E2E2E] mb-4 leading-relaxed">
            CabShare-NITR is a modern cab-sharing platform designed exclusively
            for the vibrant community of NIT Rourkela. Our user-friendly
            interface allows students to easily share rides, saving money while
            building connections. With secure login via your institute email,
            you can create or join ride listings effortlessly. Enjoy features
            like real-time notifications, secure messaging, and a comprehensive
            review system that ensures safety and transparency. Experience
            hassle-free commuting and connect with your peers today!
          </p>
          <a
            href="#"
            className="text-teal-800 underline hover:text-teal-500 font-medium"
          >
            Get in touch
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="relative hidden sm:block">
          <img
            src="./about_bg.png"
            alt="Cars on the road"
            className="w-full h-48 sm:h-full object-cover rounded-b-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
