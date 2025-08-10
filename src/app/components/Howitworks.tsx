import React from "react";
import { Car, MapPin, Phone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Car className="w-8 h-8 text-amber-600" />,
      title: "Post a ride",
      description: "Share your route, date, time, and seats available.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
      title: "Discover matches",
      description: "Others find your ride or you join existing ones.",
    },
    {
      icon: <Phone className="w-8 h-8 text-amber-600" />,
      title: "Connect & go",
      description: "Contact the owner and confirm the trip details.",
    },
  ];

  const testimonials = [
    {
      text: "Shared a cab to Bhubaneswar—saved a lot and met two folks from campus. Super easy!",
      name: "Aarav",
      role: "M.Tech",
    },
    {
      text: "Found a ride to Jharsuguda Airport in minutes. Smooth coordination and quick contact.",
      name: "Sneha",
      role: "Staff",
    },
    {
      text: "Great for last-minute plans. Splitting fares made the trip affordable.",
      name: "Rohan",
      role: "B.Tech",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-12 bg-white text-center">
      {/* How it works section */}
      <h2 className="text-balance text-3xl font-bold sm:text-4xl text-gray-900 mb-2">How it works</h2>
      <p className="text-gray-600 mb-10">
        Post a ride in seconds or find one that fits your schedule—CabShare keeps it simple.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 border hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="bg-amber-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Community voices section */}
      <div className="mb-4">
        <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
          Community voices
        </span>
      </div>
      <h3 className="text-balance text-3xl font-bold sm:text-4xl text-gray-900 mb-8">
        Trusted by the NITR community
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 border hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <p className="text-gray-700 mb-4">`{t.text}`</p>
            <p className="text-gray-900 font-semibold">
              {t.name} <span className="text-gray-500 font-normal">• {t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
