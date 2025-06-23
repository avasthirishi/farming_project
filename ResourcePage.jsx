// src/pages/ResourcePage.jsx

import React, { useState } from 'react';
import './ResourcePage.css'; // Make sure you have this CSS file

function ResourcePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landSize: '',
    soilType: '', // New field for soil type
    currentCrops: '', // New field for current/previous crops
    problemDescription: '', // New field for specific problems
    queryType: '', // New field for type of query (crop, fertilizer, medicine, etc.)
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  // State for course detail modal
  const [showCourseDetailModal, setShowCourseDetailModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // New states for enrollment form
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [enrollmentFormData, setEnrollmentFormData] = useState({
    name: '',
    phone: '',
    email: '',
    govIdNo: '',
    govIdProof: null, // To store file object
    password: '',
  });
  const [enrollmentMessage, setEnrollmentMessage] = useState('');

  const agriculturalCourses = [
    { id: 'poultry', category: 'Poultry Farming', description: 'Learn modern poultry management, breeding, disease control, and marketing for broiler and layer farming. This course covers everything from hatchery management to feed formulation, biosecurity, and market linkages for sustainable poultry operations. Ideal for new and existing farmers looking to scale up.', fees: '₹5,000', duration: '4 Weeks' },
    { id: 'goat', category: 'Goat Farming', description: 'Comprehensive guide to scientific goat rearing for meat and milk, including breed selection, nutrition, health management, and housing. Topics include disease prevention, vaccination schedules, feed management for different life stages, and efficient breeding practices to maximize your herd’s productivity.', fees: '₹4,500', duration: '3 Weeks' },
    { id: 'dairy', category: 'Dairy Farming', description: 'Training on efficient dairy operations, cattle management, milk production, processing, and value-added dairy products. Learn about modern milking techniques, animal health, fodder cultivation, and how to convert raw milk into profitable products like ghee, paneer, and yogurt for higher margins.', fees: '₹7,000', duration: '6 Weeks' },
    { id: 'fruit', category: 'Fruit Farming', description: 'Cultivation techniques for various fruits (e.g., mango, litchi, banana, citrus), orchard management, pest control, and harvesting. This course emphasizes climate-resilient practices, optimal pruning methods, and post-harvest handling to reduce spoilage and improve marketability.', fees: '₹6,000', duration: '5 Weeks' },
    { id: 'vegetable', category: 'Vegetable Farming', description: 'Best practices for cultivating seasonal and exotic vegetables, soil health, irrigation, and integrated pest management. Covers organic vegetable production, protected cultivation (polyhouse/net house), and direct marketing strategies to reach consumers directly.', fees: '₹5,500', duration: '4 Weeks' },
    { id: 'grains', category: 'Grains Farming', description: 'Advanced methods for cereals (rice, wheat, maize) and pulses (gram, lentil), including high-yielding varieties, nutrient management, and post-harvest technology. Focuses on crop rotation, efficient use of fertilizers, and mechanization for large-scale grain production.', fees: '₹4,000', duration: '3 Weeks' },
    { id: 'fish', category: 'Fish Farming', description: 'Aquaculture techniques, pond management, fish breeding, disease prevention, and sustainable fish production. Learn about different fish species suitable for aquaculture, water quality management, and feed optimization for rapid growth and healthy fish populations.', fees: '₹6,500', duration: '5 Weeks' },
    { id: 'vermicompost', category: 'Vermicompost Farming', description: 'How to set up and manage vermicomposting units to produce high-quality organic fertilizer from organic waste. This course details the species of earthworms, suitable raw materials, and methods for producing nutrient-rich compost that enhances soil fertility and reduces chemical dependency.', fees: '₹3,000', duration: '2 Weeks' },
    { id: 'integrated', category: 'Integrated Farming Systems', description: 'Courses on combining multiple farming activities (e.g., crop-livestock-fish) for synergistic benefits and increased profitability. Learn how to design and manage a closed-loop farm where waste from one activity becomes input for another, optimizing resource use and environmental sustainability.', fees: '₹8,000', duration: '7 Weeks' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Submitting...');

    if (!formData.name || !formData.email || !formData.phone || !formData.soilType || !formData.queryType || !formData.problemDescription) {
      setSubmissionStatus('Submission failed: Please fill all required fields (Name, Email, Phone, Soil Type, Query Type, Detailed Query).');
      return;
    }

    console.log('Farmer data submitted:', formData);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmissionStatus('Submission successful! A researcher will review your data and get back to you shortly.');
      setFormData({
        name: '', email: '', phone: '', landSize: '', soilType: '', currentCrops: '', problemDescription: '', queryType: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus(`Submission failed: ${error.message}`);
    }
  };

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
    setShowCourseDetailModal(true);
    setShowEnrollmentForm(false); // Ensure enrollment form is hidden initially
    setEnrollmentMessage(''); // Clear any previous enrollment messages
  };

  const handleCloseModal = () => {
    setShowCourseDetailModal(false);
    setSelectedCourse(null);
    setShowEnrollmentForm(false);
    setEnrollmentFormData({ name: '', phone: '', email: '', govIdNo: '', govIdProof: null, password: '' });
    setEnrollmentMessage('');
  };

  // Handler for enrollment form changes
  const handleEnrollmentFormChange = (e) => {
    const { name, value, files } = e.target;
    setEnrollmentFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value // Handle file input specially
    }));
  };

  // Handler for enrollment form submission
  const handleEnrollmentSubmit = async (e) => {
    e.preventDefault();
    setEnrollmentMessage('Submitting enrollment application...');

    // Basic validation
    if (!enrollmentFormData.name || !enrollmentFormData.phone || !enrollmentFormData.email || !enrollmentFormData.govIdNo || !enrollmentFormData.password) {
      setEnrollmentMessage('Please fill all required fields for enrollment.');
      return;
    }
    if (enrollmentFormData.password.length < 6) {
        setEnrollmentMessage('Password must be at least 6 characters long.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enrollmentFormData.email)) {
        setEnrollmentMessage('Please enter a valid email address.');
        return;
    }
    // Gov ID Proof file is optional for this demo, but can be made required
    // if (!enrollmentFormData.govIdProof) {
    //     setEnrollmentMessage('Please upload your Government ID Proof.');
    //     return;
    // }

    console.log('Enrollment data submitted:', {
      course: selectedCourse.category,
      ...enrollmentFormData,
      govIdProof: enrollmentFormData.govIdProof ? enrollmentFormData.govIdProof.name : 'No file', // Log file name
    });

    try {
      // Simulate API call for enrollment submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setEnrollmentMessage('Enrollment application submitted successfully! Our team will review it and contact you.');
      setEnrollmentFormData({ name: '', phone: '', email: '', govIdNo: '', govIdProof: null, password: '' }); // Clear form
      setTimeout(() => handleCloseModal(), 3000); // Close modal after successful submission
    } catch (error) {
      console.error('Enrollment submission failed:', error);
      setEnrollmentMessage(`Enrollment failed: ${error.message || 'An unexpected error occurred.'}`);
    }
  };

  return (
    <> {/* Added React Fragment here */}
      <div className="resource-page-container">
        <h1 className="page-title">Farmer Resources & Expert Support</h1>
        <p className="page-description">
          Access valuable agricultural courses and connect directly with researchers for personalized suggestions tailored to your farm.
        </p>

        <div className="resource-sections">
          {/* Agricultural Courses Section */}
          <section className="courses-section">
            <h2 className="section-title">Agricultural Courses & Training</h2>
            <p className="section-description">
              Enhance your farming knowledge with our expert-designed courses.
            </p>
            <div className="course-list">
              {agriculturalCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <h3 className="course-title">{course.category}</h3>
                  <p className="course-description">{course.description}</p>
                  <button
                    onClick={() => handleLearnMore(course)}
                    className="learn-more-button"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Farmer to Researcher Query Section - MOVED HERE */}
          <section className="query-form-section">
            <h2 className="section-title">Submit Data for Researcher Suggestion</h2>
            <p className="section-description">
              Provide details about your farm, soil, and current challenges to get tailored advice on crop selection, fertilizers, and pest/disease management.
            </p>
            <form onSubmit={handleSubmit} className="farmer-query-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="landSize">Land Size (in Acres, optional):</label>
                <input
                  type="number"
                  id="landSize"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleChange}
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="soilType">Soil Type:</label>
                <input
                  type="text"
                  id="soilType"
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleChange}
                  placeholder="e.g., Alluvial, Black, Red, Loamy"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentCrops">Current/Previous Crops Grown (comma-separated, optional):</label>
                <input
                  type="text"
                  id="currentCrops"
                  name="currentCrops"
                  value={formData.currentCrops}
                  onChange={handleChange}
                  placeholder="e.g., Wheat, Rice, Cotton"
                />
              </div>
              <div className="form-group">
                <label htmlFor="queryType">Type of Suggestion Needed:</label>
                <select
                  id="queryType"
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a type...</option>
                  <option value="crop_recommendation">Crop Recommendation for my Soil</option>
                  <option value="fertilizer_suggestion">Fertilizer Suggestion</option>
                  <option value="pest_disease_medicine">Pest/Disease & Medicine Suggestion</option>
                  <option value="irrigation_advice">Irrigation Advice</option>
                  <option value="general_query">General Farming Query</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="problemDescription">Detailed Query/Problem Description:</label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your soil, any specific issues with current crops, or what you're trying to achieve."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit Query to Researcher</button>
              {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
            </form>
          </section>

          {/* Other Useful Resources Section (existing) */}
          <section className="other-resources-section">
            <h2 className="section-title">Other Useful Resources</h2>
            <ul>
              <li>Government Agricultural Schemes & Subsidies</li>
              <li>Market Price Information for Crops</li>
              <li>Pest and Disease Management Guides</li>
              <li>Weather Advisories & Forecasts</li>
              <li>Best Practices for Sustainable Farming</li>
              <li>Local Agricultural Extension Services Contacts</li>
            </ul>
            <p className="note">
              For immediate assistance, please visit your nearest Agricultural Research Center.
            </p>
          </section>
        </div>

        {/* Course Detail Modal */}
        {showCourseDetailModal && selectedCourse && (
          <div className="course-detail-modal-overlay">
            <div className="course-detail-modal-content">
              <button className="close-button" onClick={handleCloseModal}>&times;</button>

              {!showEnrollmentForm ? (
                // Course Details View
                <>
                  <h3>{selectedCourse.category} Course Details</h3>
                  <p><strong>Description:</strong> {selectedCourse.description}</p>
                  <p><strong>Course Fees:</strong> {selectedCourse.fees}</p>
                  <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                  <button
                    onClick={() => setShowEnrollmentForm(true)}
                    className="enroll-button"
                  >
                    Enroll Now
                  </button>
                </>
              ) : (
                // Enrollment Form View
                <>
                  <h3>Enroll in {selectedCourse.category} Course</h3>
                  <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="enrollName" className="block text-gray-700 text-sm font-bold mb-2">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        id="enrollName"
                        name="name"
                        value={enrollmentFormData.name}
                        onChange={handleEnrollmentFormChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="enrollPhone" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        id="enrollPhone"
                        name="phone"
                        value={enrollmentFormData.phone}
                        onChange={handleEnrollmentFormChange}
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="enrollEmail" className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="enrollEmail"
                        name="email"
                        value={enrollmentFormData.email}
                        onChange={handleEnrollmentFormChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="govIdNo" className="block text-gray-700 text-sm font-bold mb-2">
                        Government ID Number:
                      </label>
                      <input
                        type="text"
                        id="govIdNo"
                        name="govIdNo"
                        value={enrollmentFormData.govIdNo}
                        onChange={handleEnrollmentFormChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="govIdProof" className="block text-gray-700 text-sm font-bold mb-2">
                        Government ID Proof (Upload File):
                      </label>
                      <input
                        type="file"
                        id="govIdProof"
                        name="govIdProof"
                        onChange={handleEnrollmentFormChange}
                        className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-green-50 file:text-green-700
                                hover:file:bg-green-100"
                      />
                        {enrollmentFormData.govIdProof && (
                            <p className="text-xs text-gray-500 mt-1">File selected: {enrollmentFormData.govIdProof.name}</p>
                        )}
                    </div>
                    <div>
                      <label htmlFor="enrollPassword" className="block text-gray-700 text-sm font-bold mb-2">
                        Set Password (for enrollment account):
                      </label>
                      <input
                        type="password"
                        id="enrollPassword"
                        name="password"
                        value={enrollmentFormData.password}
                        onChange={handleEnrollmentFormChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        minLength="6"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 w-full"
                      >
                        Submit Application
                      </button>
                    </div>
                    {enrollmentMessage && (
                      <p className={`text-center text-sm mt-3 ${enrollmentMessage.includes('failed') ? 'text-red-500' : 'text-green-600'}`}>
                        {enrollmentMessage}
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        )}
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

export default ResourcePage;