import React from "react";
import Link from "next/link";
import { ADDLISTING_ROUTE, ALLLISTING_ROUTE } from "../constants/routes";

const Content = () => {
  return (
    <div
      id="services"
      className="bg-[#101820] text-[#f5f5f5] p-6 md:p-10 lg:px-[10rem]"
    >
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-teal-400 leading-tight">
          Connect with fellow students easily
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#E8C547] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="./userauth.webp"
            alt="User Authentication"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 text-[#2E2E2E] group-hover:text-green-500 transition-colors">
            <Link href="/user-auth">User Authentication</Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-base">
            Secure login and profile setup for users. <br /> Only for NITR-Junta.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#E8C547] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="./addlisting.webp"
            alt="Create Ride Listings"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 text-[#2E2E2E] group-hover:text-green-500 transition-colors">
            <Link href={ADDLISTING_ROUTE}>Create Ride Listings</Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-base">
            Enter details like destination, time, and date to create a listing,
            allowing others to connect for sharing the ride.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#E8C547] shadow-lg p-6 rounded-lg group hover:scale-105 transform transition-transform duration-300">
          <img
            src="./alllistings.webp"
            alt="Show All Listings"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4 text-[#2E2E2E] group-hover:text-green-500 transition-colors">
            <Link href={ALLLISTING_ROUTE}>Show All Listings</Link>
          </h3>
          <p className="text-[#2E2E2E] mt-2 text-sm md:text-base">
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
