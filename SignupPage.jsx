// src/pages/SignupPage.jsx

import React, { useState } from 'react';
import './AuthPages.css'; // Make sure this CSS file exists for basic styling

function SignupPage({ onSignup }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password: '', // Keep password for signup
    howHear: '', // New field
    affiliation: '' // New field for "Are you a?"
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle radio buttons and text inputs
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'radio' ? (checked ? value : prevState[name]) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Attempting to sign up...');

    // Basic validation
    if (!formData.email || !formData.password || formData.password.length < 6 || !formData.firstName || !formData.lastName || !formData.zipCode) {
      setMessage('Signup Failed: Please fill all required fields and ensure password is at least 6 characters.');
      return;
    }

    // Simulate an async operation (e.g., API call to register user)
    try {
      console.log('Attempting signup with:', formData);
      // In a real application, you would send this data to a backend for actual user creation
      // Example using fetch:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (response.ok) {
      //   // handle success
      // } else {
      //   // handle error
      // }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // For demo, we just simulate success.
      setMessage('Demo Signup Successful! You can now use demo@example.com and password123 to login.');
      
      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        password: '',
        howHear: '',
        affiliation: ''
      });
      
      onSignup(formData.email); // Call the demo signup function from App.jsx, passing the email
    } catch (error) {
      console.error('Signup error:', error);
      setMessage(`Signup Failed: ${error.message || 'An unexpected error occurred.'}`);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for Krishi Sahayak</h2>
      <p>This is a demo. No actual user account will be created or stored, but it showcases the form functionality.</p>
      <form onSubmit={handleSubmit} className="auth-form">
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Zip Code */}
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>

        {/* How did you hear about us? */}
        <div className="form-group">
          <label htmlFor="howHear">How did you hear about us?</label>
          <select
            id="howHear"
            name="howHear"
            value={formData.howHear}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Please Select...</option>
            <option value="online_ad">Online Ad</option>
            <option value="social_media">Social Media</option>
            <option value="friend">Friend/Colleague</option>
            <option value="event">Event/Workshop</option>
            <option value="search_engine">Search Engine</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Are you a? (Radio Buttons) */}
        <div className="form-group">
          <label>Are you a?</label>
          <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="affiliation"
                value="agriculture_researcher"
                checked={formData.affiliation === 'agriculture_researcher'}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-gray-700">Agriculture Researcher</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="affiliation"
                value="farmer"
                checked={formData.affiliation === 'farmer'}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-gray-700">Farmer</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="affiliation"
                value="partner"
                checked={formData.affiliation === 'partner'}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-gray-700">Partner</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="affiliation"
                value="agri_media"
                checked={formData.affiliation === 'agri_media'}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-gray-700">Agri/Media</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="affiliation"
                value="other"
                checked={formData.affiliation === 'other'}
                onChange={handleChange}
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-gray-700">Other</span>
            </label>
          </div>
        </div>

        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}

export default SignupPage;
