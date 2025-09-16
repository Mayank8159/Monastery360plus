import { Castle, Landmark } from "lucide-react";


export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#3C2A21] via-[#6B4226] to-[#A47148] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-6">
            <Landmark size={28} color="#F4E1D2" />
            <div className="text-2xl font-bold">
               Monastery <span className="text-[#F4E1D2]">360</span>
            </div>
       </div>

        {/* Description */}
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Discover the timeless beauty of Sikkim’s monuments. Monument360 brings history, architecture, and culture to your fingertips—curated with care, crafted for clarity.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7C4F2A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="https://monument360.in" className="hover:underline">Monument360</a> ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}