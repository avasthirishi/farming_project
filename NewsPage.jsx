// src/pages/NewsPage.jsx
import React, { useState, useEffect } from 'react';
import moment from 'moment'; // For date formatting, install: npm install moment

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch news from a dedicated news API
    // or a backend service that scrapes/curates agriculture news (e.g., from PIB, Krishi Jagran, The Hindu Business Line).
    // For demonstration, here's some richly detailed dummy data relevant to Indian agriculture.
    const fetchAgriculturalNews = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 700)); // Simulate API call delay

        const dummyNews = [
          {
            id: 1,
            title: "Government Announces 'PM-Kisan Samriddhi Yojana' for Small Farmers",
            source: "Ministry of Agriculture & Farmers Welfare, GoI",
            date: "2025-06-18T10:00:00Z",
            summary: "The Union Government has unveiled a new comprehensive scheme, 'PM-Kisan Samriddhi Yojana,' aimed at enhancing the income of small and marginal farmers. The scheme includes direct income support, interest subvention on agricultural loans, and a new digital portal for efficient delivery of benefits. Farmers can register through local CSC centers or the dedicated web portal.",
            link: "https://pib.gov.in/PressReleasePage.aspx?PRID=XXXXX" // Placeholder for actual PIB link
          },
          {
            id: 2,
            title: "IMD Issues Above-Average Monsoon Forecast: Boost for Kharif Crops",
            source: "India Meteorological Department (IMD)",
            date: "2025-06-17T14:30:00Z",
            summary: "The IMD's latest long-range forecast predicts an 'above-normal' monsoon season for 2025, with favorable rainfall distribution across most agricultural regions. This forecast is expected to significantly boost the sowing and yield prospects for major Kharif crops like rice, maize, and pulses, potentially leading to record food grain production.",
            link: "https://mausam.imd.gov.in/" // Placeholder for IMD news link
          },
          {
            id: 3,
            title: "New Flood Relief Subsidy Forms Available for Farmers in Affected States",
            source: "National Disaster Management Authority (NDMA)",
            date: "2025-06-16T09:15:00Z",
            summary: "Following recent heavy rainfall and localized flooding in parts of Assam, Bihar, and Uttar Pradesh, the NDMA, in coordination with state governments, has released new forms for farmers to claim flood relief subsidies. Farmers whose crops have been damaged are advised to contact their local agricultural office or download forms from the state disaster management portals.",
            link: "#" // Placeholder for state-specific disaster management portal
          },
          {
            id: 4,
            title: "FCI Achieves Record Wheat Procurement, Ensures MSP Benefits to Farmers",
            source: "Food Corporation of India (FCI)",
            date: "2025-06-15T11:45:00Z",
            summary: "The Food Corporation of India has announced an unprecedented procurement of wheat for the current Rabi marketing season, exceeding last year's figures. This record procurement ensures that a larger number of farmers have received the Minimum Support Price (MSP) for their produce, thereby stabilizing farmer incomes.",
            link: "https://fci.gov.in/" // Placeholder for FCI news link
          },
          {
            id: 5,
            title: "Advisory on Pest Management for Cotton Crop in Central India Issued by ICAR",
            source: "Indian Council of Agricultural Research (ICAR)",
            date: "2025-06-14T16:00:00Z",
            summary: "With the onset of humid conditions, the Indian Council of Agricultural Research (ICAR) has issued an advisory for cotton growers in Madhya Pradesh and Maharashtra regarding proactive pest management strategies. The advisory details identification of common pests (e.g., pink bollworm), recommended biological controls, and safe pesticide usage.",
            link: "https://icar.org.in/" // Placeholder for ICAR news/advisory link
          },
          {
            id: 6,
            title: "Boost for Agri-Startups: Government Launches 'Agri-Innovation Fund'",
            source: "NITI Aayog",
            date: "2025-06-13T13:00:00Z",
            summary: "NITI Aayog, in collaboration with the Department of Agriculture Research and Education, has launched the 'Agri-Innovation Fund' to support startups developing innovative solutions for agricultural challenges. The fund aims to foster technological advancements in areas like precision farming, supply chain management, and sustainable agriculture.",
            link: "https://niti.gov.in/" // Placeholder for NITI Aayog link
          },
          {
            id: 7,
            title: "New Guidelines for Organic Certification Simplified for Small Farmers",
            source: "Agricultural and Processed Food Products Export Development Authority (APEDA)",
            date: "2025-06-12T10:30:00Z",
            summary: "APEDA has announced simplified guidelines for organic farming certification, specifically designed to ease the process for small and marginal farmers. This move is expected to boost organic produce exports from India and help farmers access premium markets.",
            link: "https://apeda.gov.in/" // Placeholder for APEDA news link
          }
        ];
        setNewsArticles(dummyNews.sort((a, b) => new Date(b.date) - new Date(a.date))); // Sort by most recent
      } catch (err) {
        setError("Failed to load news. Please try again later. (Error details: " + err.message + ")");
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgriculturalNews();
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-xl text-red-700">Loading the latest agricultural news...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-xl text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-red-800 mb-8 text-center">Agricultural News & Updates</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Stay updated with the latest news, government announcements, subsidies, schemes, and important advisories relevant to the agricultural sector in India.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map(article => (
          <div key={article.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-red-100 flex flex-col">
            <h2 className="text-2xl font-semibold text-red-700 mb-2 flex-grow">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-1"><strong>Source:</strong> {article.source}</p>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Date:</strong> {moment(article.date).format('DD MMMM, YYYY [at] hh:mm A')} IST
            </p>
            <p className="text-gray-800 text-base mb-4 line-clamp-4">{article.summary}</p>
            <div className="mt-auto"> {/* Pushes the button to the bottom */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Read More
                </a>
            </div>
          </div>
        ))}
      </div>
      {newsArticles.length === 0 && !loading && (
        <p className="text-center text-gray-600 mt-8">No news articles found at the moment. Please check back later!</p>
      )}
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
    </div>
  );
}