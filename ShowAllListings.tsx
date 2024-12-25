"use client";
import React, { useState, useEffect } from "react";
import { app, db } from "./firebase"; // Adjust the path
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/Footer";

interface Listing {
  id: string;
  name: string;
  phone: string;
  source: string;
  destination: string;
  date: string;
  time: string;
  cost: string;
}

const ShowAllListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    destination: "",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "listings"));
        const listingsData: Listing[] = [];
        querySnapshot.forEach((doc) => {
          listingsData.push({ id: doc.id, ...doc.data() } as Listing);
        });
        setListings(listingsData);
        setFilteredListings(listingsData);
      } catch (error) {
        console.error("Error retrieving listings: ", error);
      }
    };

    fetchListings();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const applyFilters = () => {
      const filtered = listings.filter((listing) => {
        return (
          (!filters.date || listing.date === filters.date) &&
          (!filters.time || listing.time === filters.time) &&
          (!filters.destination ||
            listing.destination
              .toLowerCase()
              .includes(filters.destination.toLowerCase())) &&
          (!selectedDate || listing.date === selectedDate)
        );
      });
      setFilteredListings(filtered);
    };

    applyFilters();
  }, [filters, listings, selectedDate]);

  const generateNextTwoWeeks = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const nextTwoWeeks = generateNextTwoWeeks();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-yellow-500 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cab Share Listings</h1>
        <p className="italic">Ride Together, Save More</p>
      </header>

      <div className="p-6">
        <div className="overflow-x-auto flex space-x-2 bg-gray-800 p-4 rounded-md mb-6">
          {nextTwoWeeks.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-500 ${
                selectedDate === date
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white"
              }`}
            >
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Filters Section */}
          <div className="bg-gray-800 p-4 rounded-md w-full md:w-1/3 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm mb-1">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm mb-1">
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={filters.time}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm mb-1">
                  Destination:
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Enter destination"
                  value={filters.destination}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Listings Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredListings.length > 0 ? (
                filteredListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-gray-800 p-4 rounded-md shadow-md border border-gray-700 transition-transform duration-500 hover:bg-green-400 hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold">{listing.name}</h3>
                    <p>Phone: {listing.phone}</p>
                    <p>From: {listing.source}</p>
                    <p>To: {listing.destination}</p>
                    <p>Date: {listing.date}</p>
                    <p>Time: {listing.time}</p>
                    <p>Cost: {listing.cost || "Not specified"}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No listings available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
 
};

export default ShowAllListings;




