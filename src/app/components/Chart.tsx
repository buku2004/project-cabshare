"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../constants/firebase";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartPage: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels] = useState<string[]>(["Negative", "Neutral", "Positive"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "sentiment_summary/stats");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const updatedData = [data.negative || 0, data.neutral || 0, data.positive || 0];
          setChartData(updatedData);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Sentiment Scores",
        data: chartData,
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(75, 192, 192, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#f5f5f5",
        },
      },
      title: {
        display: true,
        text: "Sentiments Summary Bar Chart",
        color: "#f5f5f5",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#f5f5f5",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#f5f5f5",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-16 bg-[#101820] min-h-screen">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-teal-400">Sentiments Summary</h1>
          <p className="text-gray-300 text-base md:text-lg">
            This bar chart displays sentiment analysis results fetched dynamically from Firebase
            Firestore. Each bar represents a sentiment score for a specific category.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChartPage;
