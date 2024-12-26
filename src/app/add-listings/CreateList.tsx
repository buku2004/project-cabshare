"use client";
import React, { useState } from "react";
import { db , app1 } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateList = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "",
    destination: "",
    date: "",
    time: "",
    cost: "",
  });

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Add the listing to Firestore
      // await addDoc(collection(db, "listings"), formData);
      const listingsCollectionRef = collection(db, "listings");

      // Add the listing to Firestore
      await addDoc(listingsCollectionRef, formData);
      alert("Listing submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        source: "",
        destination: "",
        date: "",
        time: "",
        cost: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit the listing.");
    }
  };

  return (
    <div className="bg-gray-50 mt-[6rem] p-6 md:p-12 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src="./addlisting.webp"
          alt="Ride Listing Preview"
          className="rounded-md shadow-md"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-8">
        <h2 className="text-green-600 font-bold text-xl md:text-2xl mb-4">
          CREATE RIDE LISTINGS
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Discover the convenience of our Ride Listings feature, designed specifically for the NIT Rourkela community...
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md shadow-md"
        >
          {showForm ? "CLOSE FORM" : "CREATE YOUR LISTING"}
        </button>
        {showForm && (
          <div className="mt-6 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-gray-800 font-bold text-lg mb-4">
              Create Your Ride Listing
            </h3>
            <form onSubmit={handleSubmit}>
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                { label: "Source", name: "source", type: "text", placeholder: "Enter source location" },
                { label: "Destination", name: "destination", type: "text", placeholder: "Enter destination" },
                { label: "Date", name: "date", type: "date", placeholder: "" },
                { label: "Time", name: "time", type: "time", placeholder: "" },
                { label: "Cost Sharing (Optional)", name: "cost", type: "text", placeholder: "Enter cost-sharing details" },
              ].map((input) => (
                <div className="mb-4" key={input.name}>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor={input.name}>
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                    placeholder={input.placeholder}

                    value={formData[input.name as keyof typeof formData]}

                    onChange={handleChange}
                  />
                </div>
              ))}
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
