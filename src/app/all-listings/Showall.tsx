"use client";
import { useState } from "react";

const dates = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return date.toISOString().split("T")[0]; // ISO format for easy filtering
});

export default function Showall() {
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [timeRange, setTimeRange] = useState({ start: "00:00", end: "23:59" });

  const listings = [
    {
      from: "NITR",
      to: "Railway Station",
      time: "08:00",
      seats: 3,
      passenger: "Shivang Sharma",
      date: dates[0],
    },
    {
      from: "NITR",
      to: "Airport",
      time: "12:00",
      seats: 2,
      passenger: "Rahul Gupta",
      date: dates[0],
    },
    {
      from: "Sector 21",
      to: "Bus Stand",
      time: "10:00",
      seats: 4,
      passenger: "Ankit Verma",
      date: dates[1],
    },
    {
      from: "NITR",
      to: "City Mall",
      time: "18:00",
      seats: 1,
      passenger: "Preeti Sharma",
      date: dates[1],
    },
  ];

  const isTimeInRange = (time: string, start: string, end: string): boolean => {
    const [tHours, tMinutes] = time.split(":").map(Number);
    const [sHours, sMinutes] = start.split(":").map(Number);
    const [eHours, eMinutes] = end.split(":").map(Number);
  
    const timeMinutes = tHours * 60 + tMinutes;
    const startMinutes = sHours * 60 + sMinutes;
    const endMinutes = eHours * 60 + eMinutes;
  
    return timeMinutes >= startMinutes && timeMinutes <= endMinutes;
  };
  

  const filteredListings = listings.filter(
    (listing) =>
      listing.date === selectedDate &&
      isTimeInRange(listing.time, timeRange.start, timeRange.end)
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
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Start Time:</label>
            <input
              type="time"
              value={timeRange.start}
              onChange={(e) =>
                setTimeRange((prev) => ({ ...prev, start: e.target.value }))
              }
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">End Time:</label>
            <input
              type="time"
              value={timeRange.end}
              onChange={(e) =>
                setTimeRange((prev) => ({ ...prev, end: e.target.value }))
              }
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            />
          </div>
        </aside>

        <main className="w-3/4 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.length > 0 ? (
              filteredListings.map((listing, idx) => (
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
              ))
            ) : (
              <p className="text-gray-400 text-lg">No rides found for the selected filters.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

