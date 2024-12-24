"use client";
import React, { useState, useEffect } from "react";
import { app , db } from "./firebase"; // Adjust the path
import { collection, getDocs } from "firebase/firestore";

// Define the interface for a listing
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

const Showall = () => {
  const [listings, setListings] = useState<Listing[]>([]); // Using the Listing type

  // Fetch listings from Firestore when the component mounts
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "listings"));
        const listingsData: Listing[] = []; // Explicitly typed as Listing[]
        querySnapshot.forEach((doc) => {
          listingsData.push({ id: doc.id, ...doc.data() } as Listing); // Type-casting as Listing
        });
        setListings(listingsData); // Store the retrieved data
      } catch (error) {
        console.error("Error retrieving listings: ", error);
      }
    };

    fetchListings(); // Fetch listings on component mount
  }, []);

  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <h2 className="text-green-600 font-bold text-xl md:text-2xl mb-4">
        All Ride Listings
      </h2>
      <div className="space-y-4">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white p-6 rounded-md shadow-md border border-gray-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{listing.name}</h3>
              <p className="text-gray-600">Phone: {listing.phone}</p>
              <p className="text-gray-600">Source: {listing.source}</p>
              <p className="text-gray-600">Destination: {listing.destination}</p>
              <p className="text-gray-600">Date: {listing.date}</p>
              <p className="text-gray-600">Time: {listing.time}</p>
              <p className="text-gray-600">
                Cost Sharing: {listing.cost || "Not specified"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No listings available.</p>
        )}
      </div>
    </div>
  );
};

export default Showall;

