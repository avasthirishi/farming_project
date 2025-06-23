// src/pages/HomePage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const onNavigate = useNavigate();
  return (
    <> {/* Use a React Fragment to wrap multiple top-level elements */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Welcome to Krishi Sahayak!</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Your ultimate guide for modern farming practices, weather insights, agricultural news, and business opportunities. Empowering farmers with knowledge and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links / Featured Sections */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">Research Insights</h2>
            <p className="text-gray-600 mb-4">Explore the latest agricultural research papers from leading scientists.</p>
            <button
              onClick={() => onNavigate('/research')}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Explore Research
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Learning Resources</h2>
            <p className="text-gray-600 mb-4">Access various farming courses and get expert suggestions for your soil.</p>
            <button
              onClick={() => onNavigate('/resources')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Learn More
            </button>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Weather Forecast</h2>
            <p className="text-gray-600 mb-4">Stay updated with past and upcoming weather data to plan your farming activities.</p>
            <button
              onClick={() => onNavigate('/weather')}
              className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Check Weather
            </button>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">Business Ideas</h2>
            <p className="text-gray-600 mb-4">Discover profitable agriculture business models and success stories.</p>
            <button
              onClick={() => onNavigate('/ideas')}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Find Ideas
            </button>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-red-700 mb-3">Agricultural News</h2>
            <p className="text-gray-600 mb-4">Get the latest news on government schemes, subsidies, and agricultural developments.</p>
            <button
              onClick={() => onNavigate('/news')}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Read News
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">About Us</h2>
            <p className="text-gray-600 mb-4">Learn more about our mission and vision for empowering farmers.</p>
            <button
              onClick={() => onNavigate('/about')}
              className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              About Krishi Sahayak
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Explore Crops</h2>
          <p className="text-lg text-gray-700 mb-6">Dive into detailed information about various crops, their cultivation, and care.</p>
          <button
            onClick={() => onNavigate('/crops')}
            className="bg-green-700 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-green-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            View Crop List
          </button>
        </div>
      </div>

      {/* FOOTER SECTION STARTS HERE */}
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About Us */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Dedicated to providing valuable agricultural research, courses, and resources to empower farmers and researchers for a sustainable future.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-green-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Courses & Training</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Researcher Suggestions</a></li>
                <li><a href="#" className="hover:text-green-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">
                Greater Noida, Uttar Pradesh, India<br />
                Email: info@agriresearchhub.com<br />
                Phone: +91 12345 67890
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {/* Social Media Icons (placeholders) */}
                <a href="#" aria-label="Facebook" className="text-white hover:text-green-300 transition-colors">
                  <i className="fab fa-facebook-f text-lg"></i> {/* Requires Font Awesome if you use this */}
                </a>
                <a href="#" aria-label="Twitter" className="text-white hover:text-green-300 transition-colors">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-green-300 transition-colors">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-6 text-sm">
            <p>&copy; {new Date().getFullYear()} Agri Research Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
