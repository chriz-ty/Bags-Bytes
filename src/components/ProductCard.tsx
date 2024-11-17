import React from 'react';
import { WhatsappIcon } from './Icons';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, description }) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in purchasing ${title}`;
    const whatsappUrl = `https://wa.me/919061407169?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">₹{price}</span>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <WhatsappIcon className="w-5 h-5" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;