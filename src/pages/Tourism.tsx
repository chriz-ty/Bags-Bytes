import React from 'react';
import ProductCard from '../components/ProductCard';

const packages = [
  {
    title: "Kerala Backwaters Tour",
    price: 15000,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "3 days of serene backwater experience in Kerala"
  },
  {
    title: "Hill Station Package",
    price: 12000,
    image: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&w=800&q=80",
    description: "2 days tour of beautiful hill stations"
  },
  {
    title: "Cultural Heritage Tour",
    price: 18000,
    image: "https://images.unsplash.com/photo-1585136917972-7697af35c29e?auto=format&fit=crop&w=800&q=80",
    description: "4 days exploring Kerala's rich cultural heritage"
  },
  {
    title: "Adventure Package",
    price: 20000,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description: "3 days of thrilling adventure activities"
  }
];

const Tourism = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Tourism Services</h1>
          <p className="text-xl">Discover the beauty of Kerala with our curated tour packages</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides with deep knowledge</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Customized Tours</h3>
              <p className="text-gray-600">Personalized itineraries to suit your preferences</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ProductCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;