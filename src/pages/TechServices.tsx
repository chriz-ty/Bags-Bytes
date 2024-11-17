import React from 'react';
import ProductCard from '../components/ProductCard';
import { Code, Palette, Globe, Database } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    price: 25000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "Custom web development solutions using modern technologies and frameworks"
  },
  {
    title: "Web Design",
    price: 15000,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: "Beautiful, responsive web designs that enhance user experience"
  },
  {
    title: "SEO Services",
    price: 10000,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive SEO solutions to improve your online visibility"
  },
  {
    title: "Database Solutions",
    price: 20000,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    description: "Custom database design and optimization services"
  }
];

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Clean Code",
    description: "Well-structured, maintainable code following best practices"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Modern Design",
    description: "Contemporary UI/UX design patterns"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "SEO Optimized",
    description: "Built with search engines in mind"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business"
  }
];

const TechServices = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Tech Services</h1>
          <p className="text-xl">Professional web development and design solutions for your business</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-emerald-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ProductCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechServices;