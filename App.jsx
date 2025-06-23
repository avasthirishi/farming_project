import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all necessary components and pages with explicit file extensions for better resolution.
// This is done to ensure the bundler explicitly looks for files with the .jsx extension.
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import ResourcePage from './pages/ResourcePage.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import BusinessIdeasPage from './pages/BusinessIdeasPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CropListPage from './pages/CropListPage.jsx';
import CropDetailPage from './pages/CropDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import '../index.html';

function App() {
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/business-ideas" element={<BusinessIdeasPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/crops" element={<CropListPage />} />
        <Route path="/crops/:cropId" element={<CropDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App;
