"use client"

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../constants/firebase';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartPage: React.FC = () => {
  // State for dynamic data
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels,] = useState<string[]>(['Negative', 'Neutral', 'Positive']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'sentiment_summary/stats');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const updatedData = [data.negative || 0, data.neutral || 0, data.positive || 0];
          setChartData(updatedData);
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Chart configuration
  const data = {
    labels,
    datasets: [
      {
        label: 'Sentiment Scores',
        data: chartData,
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sentiments Summary Bar Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 md:px-16">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 p-4 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Sentiments Summary</h1>
        <p className="text-gray-600">
          This bar chart displays sentiment analysis results fetched dynamically from Firebase
          Firestore. Each bar represents a sentiment score for a specific category.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartPage;

