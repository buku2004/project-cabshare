import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('./Hero_image.png')`, 
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ride together, save more</h1>
          <p className="text-lg md:text-xl mb-6">Join the NITR-CabShare community today!</p>
          <a
            href="/services"
            className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero