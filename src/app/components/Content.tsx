import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <div className="bg-[#2E2E2E] text-white p-6 md:p-10 lg:px-[15rem]">
      {/* Smart Ride Sharing Title */}
      <div className="mb-6 text-center md:text-left">
        <div className="text-white inline-block rounded-md font-semibold text-sm uppercase">
          Smart Ride Sharing
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          Connect with fellow students easily
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#FFBA08] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="./userauth.webp"
            alt="User Authentication"
            className="w-full h-48 object-center rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 group-hover:text-green-500 group-hover:scale-105 transition-transform duration-300">
            <Link href="/user-auth">
              User Authentication
            </Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-xl">
            Secure login and profile setup for users. <br /> Only for NITR-Junta.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFBA08] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="./addlisting.webp"
            alt="Create Ride Listings"
            className="w-full h-48 object-center rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 group-hover:text-green-500 group-hover:scale-105 transition-transform duration-300">
            <Link href="/add-listings">
              Create Ride Listings
            </Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-xl">
            Enter details like destination, time, and date to create a listing,
            allowing others to connect for sharing the ride.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FFBA08] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="alllistings.webp"
            alt="Show All Listings"
            className="w-full h-48 object-center rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 group-hover:text-green-500 group-hover:scale-105 transition-transform duration-300">
            <Link href="/all-listings">
              Show All Listings
            </Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-xl">
            Explore all the ride listings available for all days, organized by
            departure times and destinations. Easily connect with fellow
            students traveling on the same days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
