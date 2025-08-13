"use client";
import React, { useEffect, useState, useRef } from "react";
import { db } from "../constants/firebase";
import { collection, getDocs } from "firebase/firestore";
import Showall from "./Showall";

interface Ride {
  id: string;
  name: string;
  phone: number;
  pickup: string;
  drop: string;
  datetime: string;
  notes: string;
  seats: number;
}
const today = new Date().toISOString().split("T")[0];

const RideList: React.FC = () => {

  const [allRides, setAllRides] = useState<Ride[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [showAllRides, setShowAllRides] = useState<boolean>(false);

  // Ref for hidden date picker
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rides"));
        const rideList: Ride[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Ride[];

        setAllRides(rideList);

        if(showAllRides){
          setRides(rideList);
        }else{
      const todayRides = rideList.filter((ride) =>
        ride.datetime.includes(today)
      );
      setRides(todayRides);
        }   
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchData();
  }, [showAllRides]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    const date = selectedDate.trim();

    const filtered = allRides.filter((ride) => {
      const matchesSearch =
        ride.pickup.toLowerCase().includes(query) ||
        ride.drop.toLowerCase().includes(query) ||
        ride.name.toLowerCase().includes(query);

      const matchesDate = date ? ride.datetime.includes(date) : true;

      return matchesSearch && matchesDate;
    });

    setRides(filtered);
  };

  const handleDetails = (ride: Ride) => {
    setSelectedRide(ride);
  };

  const closeModal = () => {
    setSelectedRide(null);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 w-full border border-gray-300 pb-10 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search input */}
            <div className="flex-1 relative w-full">
              <input
                type="text"
                placeholder="Search by pickup/drop/name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
              />
              <svg
                onClick={handleSearch} // Search instantly on click
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
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
            </div>

            {/* Date picker */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                value={selectedDate}
                readOnly // prevent manual typing
                className="w-full md:w-auto pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
              />
              {/* Hidden date input */}
              <input
                type="date"
                ref={dateInputRef}
                className="hidden"
                onChange={(e) => {
                  const dateValue = e.target.value;
                  setSelectedDate(dateValue);
                  handleSearch(); // auto filter on date change
                }}
              />
              <svg
                onClick={() => dateInputRef.current?.showPicker()} // open calendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
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
            <div className="flex justify-end">
              <button
                onClick={() => setShowAllRides(!showAllRides)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl"
              >
               {showAllRides ? "Show Today's Rides" : "Show All Rides"}
              </button>
           </div>
            {/* Search button (still available) */}
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white 
              px-6 py-2 rounded-xl font-medium transition duration-300"
            >
              Search
            </button>
          </div>
        </div>

        {/* Ride Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div className="flex items-center">
                  <span className="font-semibold">{ride.pickup}</span>
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-semibold">{ride.drop}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600 text-sm">{ride.datetime.replace("T", ", ")}</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gray-600 text-sm">Seats available: {ride.seats}</span>
              </div>

              <div className="flex justify-between gap-4">
                <button
                  onClick={() => handleDetails(ride)}
                  className="flex-1 border border-orange-400 text-orange-400 hover:bg-orange-50 py-2 rounded-lg text-sm"
                >
                  Details
                </button>
                <button
                  onClick={() => console.log("Contact:", ride.phone)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedRide && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Ride Details</h2>
            <p><span className="font-semibold">Name:</span> {selectedRide.name}</p>
            <p><span className="font-semibold">Contact:</span> {selectedRide.phone}</p>
            <p><span className="font-semibold">Notes:</span> {selectedRide.notes || "No notes"}</p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RideList;

