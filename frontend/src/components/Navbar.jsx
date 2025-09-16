import { Landmark, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  // Function to toggle the mobile menu and prevent closing on link clicks
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-gradient-to-r from-[#3C2A21] via-[#6B4226] to-[#A47148] transition-all shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <Landmark size={28} color="#F4E1D2" className="mr-3" />
        <div className="text-2xl font-bold text-white">
          Monastery <span className="text-[#F4E1D2]">360</span>
        </div>
      </a>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden items-center gap-10">
        <li><a className="hover:text-white/70 transition" href="/">Home</a></li>
        <li><a className="hover:text-white/70 transition" href="/monasteries">Monasteries</a></li>
        <li><a className="hover:text-white/70 transition" href="/gallery">Gallery</a></li>
        <li><a className="hover:text-white/70 transition" href="/ThreeSixty">360</a></li>
        <li><a className="hover:text-white/70 transition" href="/contact">Contact</a></li>
      </ul>

      {/* Desktop CTA/User Button */}
      <div className="hidden md:block">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#F4E1D2] text-[#3C2A21] hover:bg-[#e8d2bd] active:scale-95 transition-all duration-200 shadow-sm"
          >
            Explore Now <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-[#3C2A21] via-[#6B4226] to-[#A47148] p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li><a href="/" className="text-sm" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="/monasteries" className="text-sm" onClick={closeMobileMenu}>Monasteries</a></li>
            <li><a href="/gallery" className="text-sm" onClick={closeMobileMenu}>Gallery</a></li>
            <li><a href="/contact" className="text-sm" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className="mt-6">
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#F4E1D2] text-[#3C2A21] hover:bg-[#e8d2bd] active:scale-95 transition-all duration-200 shadow-sm"
              >
                Explore Now <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;