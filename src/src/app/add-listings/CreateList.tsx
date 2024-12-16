// import React from "react";
"use client";
import React, { useState } from "react";

const CreateList = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

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
        {/* <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md">
          CREATE YOUR LISTING
        </button> */}
         <button
          onClick={handleButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md"
        >
          {showForm ? "CLOSE FORM" : "CREATE YOUR LISTING"}
        </button>
        {showForm && (
          <div className="mt-6 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-gray-800 font-bold text-lg mb-4">Create Your Ride Listing</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="source">
                  Source
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter source location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="destination">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter destination"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="cost">
                  Cost Sharing (Optional)
                </label>
                <input
                  type="text"
                  id="cost"
                  name="cost"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                  placeholder="Enter cost-sharing details"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md"
              >
                Submit Listing
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateList;