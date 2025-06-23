
// src/pages/CropListPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cropData } from '../data/cropData';

export default function CropListPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Explore Our Crop Database</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cropData.map((crop) => (
          <div
            key={crop.id}
            onClick={() => navigate(`/crops/${crop.id}`)}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg hover:border-green-300 transition-all duration-300 cursor-pointer border border-green-100 flex flex-col"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-2">{crop.name}</h2>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3 flex-grow">{crop.briefDescription}</p>
            <div className="mt-auto">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
