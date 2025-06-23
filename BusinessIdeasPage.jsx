// src/pages/BusinessIdeasPage.jsx
import React, { useState } from 'react'; // Import useState hook

export default function BusinessIdeasPage() {
  // State for the query form visibility and data
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [selectedIdeaForQuery, setSelectedIdeaForQuery] = useState(null);
  const [queryFormData, setQueryFormData] = useState({
    name: '',
    email: '',
    queryText: '',
  });
  const [queryMessage, setQueryMessage] = useState('');

  // Handler for opening the query form
  const handleAskExpert = (idea) => {
    setSelectedIdeaForQuery(idea);
    setShowQueryForm(true);
    setQueryMessage(''); // Clear previous messages
  };

  // Handler for changes in the query form inputs
  const handleQueryFormChange = (e) => {
    const { name, value } = e.target;
    setQueryFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for submitting the query form
  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setQueryMessage('Submitting your query...');

    // Basic validation
    if (!queryFormData.name || !queryFormData.email || !queryFormData.queryText) {
      setQueryMessage('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(queryFormData.email)) {
        setQueryMessage('Please enter a valid email address.');
        return;
    }

    try {
      console.log('Query submitted:', {
        idea: selectedIdeaForQuery.title,
        ...queryFormData,
      });

      // Simulate API call for submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      setQueryMessage('Your query has been submitted! An expert will contact you soon.');
      // Optionally clear form after successful submission
      setQueryFormData({
        name: '',
        email: '',
        queryText: '',
      });
      // Optionally close form after a delay
      setTimeout(() => setShowQueryForm(false), 3000);

    } catch (error) {
      console.error('Query submission failed:', error);
      setQueryMessage('Failed to submit query. Please try again.');
    }
  };

  const royalModels = [
    {
      id: 1,
      name: "Mr. Rajeev Kumar (Avocado Farming - Karnataka)",
      description: "Rajeev, a pioneering farmer from Karnataka, identified the burgeoning demand for avocados in India, a fruit largely imported. He meticulously studied their cultivation requirements and adapted techniques for the Indian climate. By leveraging drip irrigation and organic farming practices, his farm now produces high-quality avocados, supplying major urban markets and proving the viability of 'import substitution' in high-value horticulture. His success highlights the potential for new, high-profit crops.",
      image: "https://placehold.co/200x150/008000/FFFFFF?text=Rajeev+Avocado", // Placeholder image
      businessType: "Exotic Fruit Cultivation (Import Substitution)",
      profitPotential: "Very High",
      keyLesson: "Identify niche markets and adapt cultivation for local conditions."
    },
    {
      id: 2,
      name: "Ms. Priyanka Devi (Dragon Fruit Cultivation - Rajasthan)",
      description: "Priyanka, a resilient farmer from a semi-arid region of Rajasthan, ventured into dragon fruit cultivation, a crop previously thought unsuitable for dry areas. Through innovative water management, proper soil amendment, and protective cultivation techniques, she established a thriving dragon fruit orchard. Her farm is now a hub for agro-tourism and a significant supplier, demonstrating how challenging conditions can be overcome with smart farming and high-demand produce.",
      image: "https://placehold.co/200x150/FF6347/FFFFFF?text=Priyanka+Dragon",
      businessType: "Exotic Fruit Cultivation (Adaptation)",
      profitPotential: "High",
      keyLesson: "Innovation and adaptability can turn challenges into opportunities."
    },
    {
      id: 3,
      name: "Mr. Suresh Yadav (Integrated Fish & Duck Farming - West Bengal)",
      description: "Suresh from West Bengal is a proponent of integrated farming. He implemented a system where ducks are raised on elevated platforms over fish ponds. The duck droppings fertilize the pond, promoting the growth of natural food for fish, while the ducks benefit from the aquatic environment. This synergistic approach maximizes resource utilization, reduces external inputs, and yields both fish and duck products, significantly boosting farm income and sustainability.",
      image: "https://placehold.co/200x150/4682B4/FFFFFF?text=Suresh+FishDuck",
      businessType: "Integrated Aqua-Poultry Farming",
      profitPotential: "Medium to High",
      keyLesson: "Maximize resource efficiency through integrated farming systems."
    },
    {
      id: 4,
      name: "Mrs. Anjali Sharma (Organic Vermicompost & Bio-fertilizer - Maharashtra)",
      description: "Anjali started a small-scale vermicomposting unit using agricultural waste and cow dung. Her focus on producing high-quality, certified organic vermicompost and liquid bio-fertilizers quickly gained traction among local organic farmers and urban gardeners. Her business not only generates significant income but also contributes to sustainable agriculture by recycling waste and promoting chemical-free farming.",
      image: "https://placehold.co/200x150/8B4513/FFFFFF?text=Anjali+Compost",
      businessType: "Organic Input Production",
      profitPotential: "Medium",
      keyLesson: "Value addition to farm waste creates profitable and sustainable ventures."
    },
    {
      id: 5,
      name: "Mr. Kishan Lal (Modern Goat Farming - Rajasthan)",
      description: "Kishan Lal transformed traditional goat rearing in Rajasthan by adopting modern scientific practices. He focused on superior breeds for milk and meat, implemented systematic vaccination, proper nutrition, and hygienic sheds. His farm now serves as a model for sustainable and profitable goat farming, demonstrating high returns from improved livestock management.",
      image: "https://placehold.co/200x150/6A0DAD/FFFFFF?text=Kishan+Goat",
      businessType: "Modern Livestock Rearing (Goat)",
      profitPotential: "High",
      keyLesson: "Scientific livestock management leads to higher productivity and profits."
    },
    {
      id: 6,
      name: "Ms. Smita Patil (High-Value Dairy Products - Gujarat)",
      description: "Smita from Gujarat moved beyond just selling raw milk. She invested in small-scale processing to produce artisanal ghee, flavored yogurts, and traditional sweets like 'basundi' directly from her farm's milk. Her brand emphasizes purity and local flavors, fetching premium prices in nearby urban centers and through online sales, showcasing the power of value addition in dairy.",
      image: "https://placehold.co/200x150/FF8C00/FFFFFF?text=Smita+Dairy",
      businessType: "Dairy Value-Added Products",
      profitPotential: "Very High",
      keyLesson: "Innovate and process farm produce to tap into premium markets."
    },
    {
      id: 7,
      name: "Mr. Deepak Singh (Integrated Poultry & Organic Vegetables - Punjab)",
      description: "Deepak established an integrated farm in Punjab where poultry waste is composted and used to fertilize organic vegetable plots. This closed-loop system reduces dependency on external inputs, generates high-quality organic produce, and provides a dual income from eggs/chicken and chemical-free vegetables, highlighting a holistic approach to sustainable farming.",
      image: "https://placehold.co/200x150/800000/FFFFFF?text=Deepak+Poultry",
      businessType: "Integrated Poultry & Organic Cropping",
      profitPotential: "Medium to High",
      keyLesson: "Integrated systems optimize resources and create diversified income streams."
    },
    {
      id: 8, // Existing Entry 1
      name: "Mr. Jaspreet Singh (Automated Dairy Farm - Punjab)",
      description: "Jaspreet transformed his family's traditional dairy farm in Punjab into a highly efficient, automated unit. By integrating milking machines, fodder choppers, and a robust cold chain, he increased milk production efficiency and quality, supplying a large cooperative. His success demonstrates how technology can scale traditional farming into a modern, highly profitable enterprise.",
      image: "https://placehold.co/200x150/007FFF/FFFFFF?text=Jaspreet+Dairy",
      businessType: "Automated Dairy Farming",
      profitPotential: "Very High",
      keyLesson: "Leverage automation and modern infrastructure for scalability and efficiency."
    },
    {
      id: 9, // Updated entry from Mrs. Ritu Kumari to Mr. Anand Mishra
      name: "Mr. Anand Mishra (Litchi & Mango Farming - Bihar)",
      description: "Anand Mishra, a progressive farmer from Bihar, has successfully cultivated high-demand litchi and export-quality mango varieties. He employs advanced orchard management techniques, including drip irrigation and canopy management, ensuring superior fruit quality and higher yields. His strong direct market linkages and focus on premium varieties have allowed him to achieve significant profits and showcase Bihar's potential in high-value fruit exports.",
      image: "https://placehold.co/200x150/FF4500/FFFFFF?text=Anand+FruitFarm", // Updated placeholder image
      businessType: "High-Value Fruit Orchard (Litchi & Mango)",
      profitPotential: "Very High",
      keyLesson: "Advanced orchard management and direct marketing unlock export potential."
    }
  ];

  const businessIdeas = [
    {
      id: 1,
      title: "Vertical Farming / Hydroponics in Urban & Peri-Urban Areas",
      description: "Grow high-value crops like leafy greens, herbs, and exotic vegetables (e.g., cherry tomatoes, bell peppers) in multi-layered indoor setups. This caters to fresh, local demand, minimizes land use, and allows year-round production regardless of climate. Requires significant initial investment but offers high returns.",
      keywords: ["Hydroponics", "Aeroponics", "Urban Farming", "High-Value Crops", "Controlled Environment Agriculture"],
      estimatedInvestment: "High",
      marketDemand: "Growing (Urban Consumers, Restaurants)"
    },
    {
      id: 2,
      title: "Specialty Mushroom Cultivation (Oyster, Shiitake, Reishi)",
      description: "Cultivate gourmet and medicinal mushrooms which have a strong demand in urban markets, hotels, and for export. Mushrooms have a short cultivation cycle and require less space. Requires controlled temperature and humidity, but can yield significant profits per square foot.",
      keywords: ["Mushroom Farming", "Gourmet Mushrooms", "Medicinal Fungi", "Controlled Environment"],
      estimatedInvestment: "Medium",
      marketDemand: "Niche, but Rapidly Growing"
    },
    {
      id: 3,
      title: "Dairy Farming with Value-Added Products",
      description: "Beyond just selling milk, focus on producing value-added dairy products like paneer, ghee, curd, lassi, or flavored milk. This significantly increases profit margins. Requires investment in processing equipment and marketing.",
      keywords: ["Dairy Processing", "Milk Products", "Value Addition", "Cattle Rearing"],
      estimatedInvestment: "Medium to High",
      marketDemand: "Consistent & Diversified"
    },
    {
      id: 4,
      title: "Agri-Tourism / Farm Stays",
      description: "Convert a portion of your farm into an agri-tourism destination. Offer farm tours, hands-on farming experiences, rural living experiences, and sell farm-fresh produce directly. This provides an additional revenue stream, promotes rural development, and educates urban populations about agriculture.",
      keywords: ["Rural Tourism", "Farm Experience", "Homestays", "Direct Sales"],
      estimatedInvestment: "Medium",
      marketDemand: "Emerging (Post-COVID, Experiential Travel)"
    },
    {
      id: 5,
      title: "Organic Fodder Cultivation for Livestock",
      description: "With growing awareness of organic produce, there's a rising demand for organic milk and meat. This creates an an opportunity for farmers to specialize in cultivating organic fodder (e.g., multi-cut sorghum, napier grass, alfalfa) and supplying it to dairy and livestock farms.",
      keywords: ["Organic Feed", "Fodder Production", "Livestock Nutrition", "Sustainable Agriculture"],
      estimatedInvestment: "Low to Medium",
      marketDemand: "Growing (from Organic Livestock Farms)"
    },
    {
      id: 6,
      title: "Exotic Vegetable Farming (e.g., Broccoli, Asparagus, Zucchini)",
      description: "Cultivate high-value exotic vegetables that are gaining popularity in urban Indian kitchens and restaurants. These often fetch premium prices compared to traditional vegetables. Requires precise climate control or seasonal adaptation.",
      keywords: ["Exotic Vegetables", "High-Value Crops", "Direct Marketing", "Greenhouse Farming"],
      estimatedInvestment: "Medium",
      marketDemand: "Increasing (Urban, Hospitality)"
    },
    {
      id: 7,
      title: "High-Density Fish Farming (Biofloc/RAS)",
      description: "Implement advanced aquaculture techniques like Biofloc or Recirculating Aquaculture Systems (RAS) to maximize fish production in a small area with minimal water usage. This caters to the increasing demand for fresh fish in urban areas and offers high returns.",
      keywords: ["Aquaculture", "Fish Farming", "Biofloc", "RAS", "Intensive Farming"],
      estimatedInvestment: "High",
      marketDemand: "Growing (Urban Consumers, Restaurants)"
    },
    {
      id: 8,
      title: "Apiculture (Beekeeping for Honey & Pollination)",
      description: "Start a beekeeping venture focusing on honey production, beeswax, and providing pollination services to local farmers. Beekeeping is relatively low-investment and contributes to ecological balance and crop yield for others.",
      keywords: ["Beekeeping", "Apiculture", "Honey Production", "Pollination Services", "Sustainable Farming"],
      estimatedInvestment: "Low",
      marketDemand: "Consistent (Honey, Wax, Pollination)"
    },
    {
      id: 9,
      title: "Medicinal & Aromatic Plant Cultivation",
      description: "Grow high-value medicinal plants (e.g., Ashwagandha, Aloe Vera, Stevia) or aromatic plants (e.g., Lemongrass, Mint) that have significant demand from pharmaceutical, cosmetic, and food industries. Requires specific climatic conditions and careful processing.",
      keywords: ["Medicinal Plants", "Aromatic Plants", "Herbal Farming", "Niche Crops", "Pharmaceutical Industry"],
      estimatedInvestment: "Medium",
      marketDemand: "Niche, but Very High Value"
    },
    {
      id: 10,
      title: "Contract Farming & Direct-to-Consumer Models",
      description: "Engage in contract farming with food processing companies or organized retail for assured buy-back of produce. Alternatively, establish a direct-to-consumer model through online sales, farmers' markets, or community-supported agriculture (CSA) programs.",
      keywords: ["Contract Farming", "Direct Sales", "E-commerce", "CSA", "Market Linkage"],
      estimatedInvestment: "Low to Medium",
      marketDemand: "High (Assured Sales, Premium Pricing)"
    },
    {
      id: 11,
      title: "Waste-to-Wealth: Biogas & Organic Manure Production",
      description: "Set up a unit to convert agricultural waste, animal dung, and organic residues into biogas (for energy) and high-quality organic manure (digestates). This circular economy model reduces waste, generates energy, and produces valuable organic inputs for farming.",
      keywords: ["Biogas", "Organic Manure", "Waste Management", "Circular Economy", "Renewable Energy"],
      estimatedInvestment: "Medium to High",
      marketDemand: "Growing (Sustainable Energy, Organic Farming)"
    },
    {
      // New multi-purpose farm idea
      id: 12,
      title: "Integrated Multi-Layer Farming (Goat, Poultry, Fish)",
      description: "Establish a multi-tiered farming system for maximum land and resource utilization. The top layer houses goats, whose droppings provide nutrient-rich feed for chickens on the middle layer. The chicken waste, in turn, fertilizes ponds on the bottom layer for fish farming. This highly efficient, symbiotic system minimizes waste, reduces external feed costs, and generates diversified income streams from livestock and aquaculture.",
      keywords: ["Integrated Farming", "Multi-Layer Farming", "Goat Farming", "Poultry Farming", "Fish Farming", "Aquaculture", "Sustainable Agriculture", "Waste Management"],
      estimatedInvestment: "High",
      marketDemand: "Growing (Sustainable Produce, Diversified Income)"
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Profitable Agricultural Business Ideas</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Discover innovative and successful farming business models, inspired by real-life 'royal models' and new opportunities in the agricultural sector. Learn how to diversify your income and achieve higher profitability.
      </p>

      {/* Royal Models Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">Inspiring Royal Models: Farmers Who Innovated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {royalModels.map(model => (
            <div key={model.id} className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100 flex flex-col items-center text-center">
              <img src={model.image} alt={model.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-300" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">{model.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Business:</strong> {model.businessType}</p>
              <p className="text-gray-700 mb-3"><strong>Profit Potential:</strong> {model.profitPotential}</p>
              <p className="text-gray-800 text-base leading-relaxed flex-grow mb-4">{model.description}</p>
              <p className="text-purple-600 font-semibold italic mt-auto">Key Lesson: "{model.keyLesson}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Business Ideas Section */}
      <section>
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">Innovative Farming Business Ideas for You</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Explore promising new avenues in agriculture that can yield significant returns. Consider your local resources and market needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessIdeas.map(idea => (
            <div key={idea.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100 flex flex-col">
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">{idea.title}</h3>
              <p className="text-gray-700 mb-3 flex-grow">{idea.description}</p>
              <div className="mb-3">
                <span className="font-semibold text-gray-800">Keywords:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {idea.keywords.map((kw, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{kw}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700"><strong>Estimated Investment:</strong> {idea.estimatedInvestment}</p>
              <p className="text-gray-700"><strong>Market Demand:</strong> {idea.marketDemand}</p>
              {/* Modified button to open query form */}
              <button
                onClick={() => handleAskExpert(idea)}
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              >
                Ask Expert for More Detail
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Query Submission Form (Modal/Overlay) */}
      {showQueryForm && selectedIdeaForQuery && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowQueryForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times; {/* Close button */}
            </button>
            <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
              Ask Expert About: {selectedIdeaForQuery.title}
            </h2>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div>
                <label htmlFor="queryName" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="queryName"
                  name="name"
                  value={queryFormData.name}
                  onChange={handleQueryFormChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="queryEmail" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="queryEmail"
                  name="email"
                  value={queryFormData.email}
                  onChange={handleQueryFormChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="queryText" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Query:
                </label>
                <textarea
                  id="queryText"
                  name="queryText"
                  value={queryFormData.queryText}
                  onChange={handleQueryFormChange}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Type your detailed questions here..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                >
                  Submit Query
                </button>
              </div>
              {queryMessage && (
                <p className={`text-center text-sm mt-3 ${queryMessage.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
                  {queryMessage}
                </p>
              )}
            </form>
          </div>
        </div>
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
