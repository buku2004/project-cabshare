"use client"

import React from "react";
import { motion } from "motion/react";
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
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* How it works section */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            How it works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Post a ride in seconds or find one that fits your schedule—CabShare keeps it simple.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-12 md:mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02,
                y: -6,
                rotateY: 2,
                transition: { 
                  duration: 0.3, 
                  ease: "easeOut" 
                }
              }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-amber-200/20 p-3 sm:p-4 md:p-6 
              border cursor-pointer will-change-transform"
              style={{ transformOrigin: "center" }}
            >
              <motion.div 
                className="bg-amber-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mx-auto mb-3"
                whileHover={{ 
                  scale: 1.15,
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Community voices section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-3 sm:mb-4">
            <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Community voices
            </span>
          </div>
          <h3 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">
            Trusted by the NITR community
          </h3>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.02,
                  y: -6,
                  rotateY: 2,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut" 
                  }
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-amber-200/20 p-3 sm:p-4 md:p-6
                 border cursor-pointer will-change-transform"
                style={{ transformOrigin: "center" }}
              >
                <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm sm:text-base text-gray-900 font-semibold">
                  {t.name} <span className="text-gray-500 font-normal">• {t.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
