import React from 'react';
import { Monitor, ShoppingBag, Palette, Plane } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Bags & Bytes</h1>
            <p className="text-xl md:text-2xl mb-8">Your One-Stop Solution for Tech Services & Custom Merchandise</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Tech Services"
              description="Professional web development, design, and digital solutions"
              icon={<Monitor className="h-8 w-8" />}
              link="/tech-services"
            />
            <ServiceCard
              title="Custom Merchandise"
              description="High-quality custom clothing and accessories"
              icon={<ShoppingBag className="h-8 w-8" />}
              link="/merchandise"
            />
            <ServiceCard
              title="Event Branding"
              description="Complete event branding solutions and materials"
              icon={<Palette className="h-8 w-8" />}
              link="/event-branding"
            />
            <ServiceCard
              title="Tourism Consultation"
              description="Expert guidance for your travel plans"
              icon={<Plane className="h-8 w-8" />}
              link="/tourism"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals dedicated to delivering excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Fast turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Top-notch products and services that exceed expectations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;