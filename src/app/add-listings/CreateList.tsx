import React from "react";

const CreateList = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12 flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src="./addlisting.webp" 
          alt="Ride Listing Preview"
          className="rounded-md shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 md:pl-8">
        <h2 className="text-green-600 font-bold text-xl md:text-2xl mb-4">CREATE RIDE LISTINGS</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Discover the convenience of our Ride Listings feature, designed specifically for the NIT Rourkela community. Browse through a
          comprehensive page displaying various ride listings in a user-friendly block format. Each listing includes critical information such as
          date, from and to locations, desired departure time, and the organizer name along with a meeting location. Additionally, you can create
          your own listing by specifying details like source, destination, date, time, and cost-sharing information. This feature enhances
          connectivity and encourages students to share rides efficiently, making travel hassle-free.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md">
          CREATE YOUR LISTING
        </button>
      </div>
    </div>
  );
};

export default CreateList;