"use client";

import { useEffect, useRef } from "react";
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

const Feedback = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Convert your latitude/longitude to Web Mercator projection
    const coordinates = fromLonLat([84.9013, 22.2531]); // [Longitude, Latitude]

    // Create a marker (feature) for the exact coordinates
    const marker = new Feature({
      geometry: new Point(coordinates),
    });

    // Style for the marker
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1], // Adjust anchor for better positioning
          src: "https://openlayers.org/en/latest/examples/data/icon.png", // Default marker icon
        }),
      })
    );

    // Create a vector source and layer for the marker
    const markerSource = new VectorSource({
      features: [marker], // Add the marker to the source
    });

    const markerLayer = new VectorLayer({
      source: markerSource,
    });

    // Create the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        markerLayer, // Add the marker layer to the map
      ],
      view: new View({
        center: coordinates, // Center the map on the coordinates
        zoom: 15, // Set zoom level
      }),
    });

    return () => map.setTarget(null); // Cleanup on unmount
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default Feedback;