import React from 'react'

function About() {
  return (
    <div className="bg-[#2E2E2E] text-black h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-8 w-11/12 max-w-5xl bg-[#FFBA08] rounded-lg overflow-hidden shadow-lg">
        {/* Left Section - Text */}
        <div className="p-8">
          <h2 className="text-xs uppercase font-bold tracking-widest text-teal-800 mb-2">
            Ride Together, Save Together
          </h2>
          <h1 className="text-4xl font-extrabold mb-4">
            Join the NIT Rourkela cab-sharing community
          </h1>
          <p className="text-[#2E2E2E] mb-4 leading-relaxed">
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
        <div className="relative">
          <img
            src="./about_bg.png" // Replace with the actual image URL
            alt="Cars on the road"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About