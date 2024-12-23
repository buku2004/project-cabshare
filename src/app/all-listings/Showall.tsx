"use client"
import { useState} from "react";

const dates = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return date.toDateString();
});

export default function Showall() {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const listings = [
    {
      from: "NITR",
      to: "Railway Station",
      time: "08:00 AM",
      seats: 3,
      passenger: "Shivang Sharma",
      date: dates[0],
    },
    {
      from: "NITR",
      to: "Airport",
      time: "12:00 PM",
      seats: 2,
      passenger: "Rahul Gupta",
      date: dates[0],
    },
    {
      from: "Sector 21",
      to: "Bus Stand",
      time: "10:00 AM",
      seats: 4,
      passenger: "Ankit Verma",
      date: dates[1],
    },
    {
      from: "NITR",
      to: "City Mall",
      time: "06:00 PM",
      seats: 1,
      passenger: "Preeti Sharma",
      date: dates[1],
    },
  ];

  const filteredListings = listings.filter(
    (listing) => listing.date === selectedDate
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-yellow-500 text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cab Share Listings</h1>
        <p className="italic text-lg">Ride Together, Save More</p>
      </header>

      <div className="flex">
        <aside className="bg-gray-700 p-6 w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2">Date:</label>
            <input
              type="date"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Time:</label>
            <input
              type="time"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Destination:</label>
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Seats:</label>
            <input
              type="number"
              min="1"
              max="10"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
        </aside>

        <main className="w-3/4 p-6">
          <div className="flex overflow-x-scroll space-x-4 pb-4 mb-4">
            {dates.map((date, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded ${
                  date === selectedDate
                    ? "bg-green-500 text-black"
                    : "bg-gray-800 hover:bg-green-500 hover:text-black"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.map((listing, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold">{`From: ${listing.from}`}</h3>
                <p>{`To: ${listing.to}`}</p>
                <p>{`Time: ${listing.time}`}</p>
                <p>{`Seats Available: ${listing.seats}`}</p>
                <p className="text-gray-400">{`Passenger: ${listing.passenger}`}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
