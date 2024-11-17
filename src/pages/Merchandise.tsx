import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    title: "Custom T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "100% cotton custom printed t-shirts with your design"
  },
  {
    title: "Premium Hoodie",
    price: 999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable hoodies with custom embroidery"
  },
  {
    title: "Laptop Bag",
    price: 799,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    description: "Durable laptop bags with custom branding"
  },
  {
    title: "Custom Mug",
    price: 299,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description: "Ceramic mugs with your design or logo"
  },
  {
    title: "Premium Cap",
    price: 399,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    description: "High-quality caps with embroidered designs"
  },
  {
    title: "Custom Lanyard",
    price: 149,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    description: "Printed lanyards for events and organizations"
  }
];

const Merchandise = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Custom Merchandise</h1>
          <p className="text-xl">High-quality custom merchandise for your brand</p>
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

export default Merchandise;