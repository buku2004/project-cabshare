import React from 'react'

const page = () => {
  return (
    <div>
    <div className="w-full mt-12 flex flex-col items-center">
      <img
        src="./alllistings.webp" 
        alt="Ride Sharing for Students"
        className="rounded-md shadow-md mb-6 w-[15rem]"
      />
      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md">
        SHOW ALL LISTINGS
      </button>
    </div>
    </div>
  )
}

export default page