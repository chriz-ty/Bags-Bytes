import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Binary } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-emerald-400" />
              <Binary className="h-8 w-8 text-emerald-400" />
              <span className="font-bold text-xl">Bags & Bytes</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your one-stop solution for tech services and custom merchandise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400">Home</Link>
              </li>
              <li>
                <Link to="/tech-services" className="text-gray-400 hover:text-emerald-400">Tech Services</Link>
              </li>
              <li>
                <Link to="/merchandise" className="text-gray-400 hover:text-emerald-400">Merchandise</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Custom Merchandise</li>
              <li className="text-gray-400">Event Branding</li>
              <li className="text-gray-400">Tourism Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Kerala, India</li>
              <li className="text-gray-400">+91 906 140 7169</li>
              <li className="text-gray-400">contact@bagsandbytes.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bags & Bytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;