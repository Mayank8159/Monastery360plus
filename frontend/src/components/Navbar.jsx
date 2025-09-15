import { Landmark } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-gradient-to-r from-[#3C2A21] via-[#6B4226] to-[#A47148] transition-all shadow-md">

      {/* Logo */}
      <a href="#" className="flex items-center">
        <Landmark size={28} color="#F4E1D2" className="mr-3" />
        <div className="text-2xl font-bold text-white">
          Monument <span className="text-[#F4E1D2]">360</span>
        </div>
      </a>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden items-center gap-10">
        <li><a className="hover:text-white/70 transition" href="#">Home</a></li>
        <li><a className="hover:text-white/70 transition" href="#">Monuments</a></li>
        <li><a className="hover:text-white/70 transition" href="#">Gallery</a></li>
        <li><a className="hover:text-white/70 transition" href="#">Contact</a></li>
      </ul>

      {/* CTA Button */}
      <button
        type="button"
        className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Explore Now
      </button>

      {/* Mobile Menu Toggle */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          // Cross Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-[#3C2A21] via-[#6B4226] to-[#A47148] p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li><a href="#" className="text-sm">Home</a></li>
            <li><a href="#" className="text-sm">Monuments</a></li>
            <li><a href="#" className="text-sm">Gallery</a></li>
            <li><a href="#" className="text-sm">Contact</a></li>
          </ul>
          <button
            type="button"
            className="bg-white text-gray-700 mt-6 inline text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Explore Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;