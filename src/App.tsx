import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechServices from './pages/TechServices';
import Merchandise from './pages/Merchandise';
import EventBranding from './pages/EventBranding';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-services" element={<TechServices />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/event-branding" element={<EventBranding />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;