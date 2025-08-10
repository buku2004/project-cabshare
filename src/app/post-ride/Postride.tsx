"use client";
import React, { useState } from "react";
import { db } from "../constants/firebase";
import { doc, setDoc } from "firebase/firestore";

const PostRide = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    drop: "",
    datetime: "",
    seats: "",
    contact: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docID = `${formData.name}-${Date.now()}`;
      await setDoc(doc(db, "rides", docID), formData);
      alert("Ride posted successfully!");
      setFormData({
        name: "",
        pickup: "",
        drop: "",
        datetime: "",
        seats: "",
        contact: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error posting ride:", error);
      alert(`Failed: ${(error as Error).message}`);
    }
  };

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="bg-white border border-yellow-100 p-10 rounded-3xl w-full max-w-3xl shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post a Ride</h2>
        <p className="text-gray-500 text-sm mb-6">
          Share your trip so others can join and split costs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>

          {/* Pickup location */}
          <div>
            <label className="block text-sm font-medium mb-1">Pickup location</label>
            <input
              type="text"
              name="pickup"
              placeholder="e.g., NIT Rourkela, Main Gate"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>

          {/* Drop location */}
          <div>
            <label className="block text-sm font-medium mb-1">Drop location</label>
            <input
              type="text"
              name="drop"
              placeholder="e.g., Bhubaneswar Airport"
              value={formData.drop}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>

          {/* Date & Time and Seats */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Date & time</label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-medium mb-1">Available seats</label>
              <select
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
                required
              >
                <option value="">Select seats</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <label className="block text-sm font-medium mb-1">Contact info</label>
            <input
              type="text"
              name="contact"
              placeholder="Phone or email"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Notes (optional)</label>
            <textarea
              name="notes"
              placeholder="Any extra info for co-travelers"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-orange-200"
              rows={3}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
  <button
    type="submit"
    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-1 px-3 rounded-lg w-full md:w-auto transition font-small"
  >
    Post Ride
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default PostRide;
