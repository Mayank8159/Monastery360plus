import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import NotFound from './pages/Notfound';
import MonumentsPage from './pages/Monuments';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import ThreeSixty from './pages/ThreeSixty';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/monasteries" element={<MonumentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/ThreeSixty" element={<ThreeSixty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;