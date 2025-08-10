"use client";
import React, { useEffect, useState } from "react";
import { db } from "../constants/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Ride {
  id: string;
  name: string;
  contact: string;
  pickup: string;
  drop: string;
  datetime: string;
  notes: string;
  seats: number;
}

const RideList: React.FC = () => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rides"));
        const rideList: Ride[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Ride[];
        setRides(rideList);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "on date:", selectedDate);
  };

  const handleContact = (contact: string) => {
    console.log("Contacting:", contact);
  };

  const handleDetails = (ride: Ride) => {
    console.log("Showing details for:", ride);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Search Bar */}
        <div className="bg-gray-100 rounded-xl shadow-sm p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by pickup/drop/name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 bg-white"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition duration-300 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Ride Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="bg-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300"
            >
              {/* Route Information */}
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-orange-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-bold text-gray-800 text-sm">{ride.pickup}</span>
                <svg
                  className="w-4 h-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="font-bold text-gray-800 text-sm">{ride.drop}</span>
              </div>

              {/* Date and Time */}
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-orange-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{ride.datetime}</span>
              </div>

              {/* Seats Available */}
              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-orange-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                <span className="text-gray-700 text-sm">Seats available: {ride.seats}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleDetails(ride)}
                  className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg transition duration-300 text-sm font-medium"
                >
                  Details
                </button>
                <button
                  onClick={() => handleContact(ride.contact)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-300 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideList;
