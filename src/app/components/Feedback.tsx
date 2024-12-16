
"use client";
import React, { useState, useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";

import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj"; // Import projection utility
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4"> We are here to help you ride share!</h2>
      <p className="text-gray-400 mb-6">Get in touch by giving your valuable feedback</p>

      <label className="block mb-2 text-sm font-medium">
        Name *
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <label className="block mb-2 text-sm font-medium">
        Email Address *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <label className="block mb-2 text-sm font-medium">
        Phone Number *
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>

      <label className="block mb-4 text-sm font-medium">
        Message
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-1 p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
        ></textarea>
      </label>

      <label className="flex items-center mb-6 text-sm">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mr-2 w-4 h-4 text-green-500 border-gray-700 rounded focus:ring-green-500"
        />
        I allow this website to store my submission so they can respond to my inquiry. *
      </label>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

const FeedbackMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const coordinates = fromLonLat([84.9013, 22.2531]); // [Longitude, Latitude]

    const marker = new Feature({
      geometry: new Point(coordinates),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://openlayers.org/en/latest/examples/data/icon.png",
        }),
      })
    );

    const markerSource = new VectorSource({
      features: [marker],
    });

    const markerLayer = new VectorLayer({
      source: markerSource,
    });
    if (!mapRef.current) return;

    const map = new Map({
      target : mapRef.current,
      layers : [
        new TileLayer({
          source: new OSM(),
        }),
        markerLayer,
      ],
      view: new View({
        center: coordinates,
        zoom: 15,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-lg" style={{ height: "400px" }} />;
};

const Feedback = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-900 text-white min-h-screen">
      {/* Left: Feedback Form */}
      <div className="flex-1 flex justify-center">
        <FeedbackForm />
      </div>

      {/* Right: Map */}
      <div className="flex-1 flex justify-center">
        <FeedbackMap />
      </div>
    </div>
  );
};

export default Feedback;
