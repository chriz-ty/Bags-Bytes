import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: "Event Standee",
    price: 1999,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    description: "Professional standees for events and exhibitions"
  },
  {
    title: "Event Badges",
    price: 99,
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80",
    description: "Custom printed event badges and ID cards"
  },
  {
    title: "Banners",
    price: 1499,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    description: "High-quality banners for indoor and outdoor use"
  },
  {
    title: "Branded Notebooks",
    price: 299,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
    description: "Custom branded notebooks for events"
  }
];

const EventBranding = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Event Branding</h1>
          <p className="text-xl">Complete branding solutions for your events</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventBranding;