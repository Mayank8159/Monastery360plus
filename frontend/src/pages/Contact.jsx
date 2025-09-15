import React from 'react';
import { Mail, Phone, MapPin, Landmark } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 text-[#1E3A2E] font-sans relative overflow-hidden ">
      {/* Custom Background Image Div */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url("/imgm.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}
      ></div>

      {/* Color Overlay to make text readable */}
      <div className="absolute inset-0 bg-[#A5B4A3] opacity-70"></div>

      {/* Main Content */}
      <header className="text-center mb-12 mt-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] drop-shadow-sm mb-2">
          Contact Us
        </h1>
        <div className="flex items-center justify-center mb-4">
          <Landmark size={40} className="text-[#3E5C59]" />
        </div>
        <p className="text-lg md:text-xl text-[#1E3A2E]/80 max-w-3xl mx-auto">
          Get in touch with us to learn more about the beautiful monasteries of Sikkim or for any inquiries.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 relative z-10">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#3E5C59]/10">
          <h2 className="text-2xl font-semibold text-[#1E3A2E] mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1E3A2E]/90">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md bg-white border border-[#3E5C59]/30 focus:border-[#3E5C59] focus:ring-1 focus:ring-[#3E5C59] p-2 transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1E3A2E]/90">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-white border border-[#3E5C59]/30 focus:border-[#3E5C59] focus:ring-1 focus:ring-[#3E5C59] p-2 transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1E3A2E]/90">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-white border border-[#3E5C59]/30 focus:border-[#3E5C59] focus:ring-1 focus:ring-[#3E5C59] p-2 transition-colors duration-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[#1E3A2E] text-[#D8D4C8] hover:bg-[#3E5C59] active:scale-95 transition-all duration-200 shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Details */}
        <div className="w-full lg:w-1/3 bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#3E5C59]/10 flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-[#1E3A2E] mb-2">Our Details</h2>
          <div className="flex items-start space-x-4">
            <Mail size={24} className="text-[#3E5C59] mt-1" />
            <div>
              <p className="font-semibold text-[#1E3A2E]">Email Us</p>
              <a href="mailto:monument360sikkimtour@gmail.com" className="text-[#1E3A2E]/80 hover:underline">
                monument360sikkimtour@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone size={24} className="text-[#3E5C59] mt-1" />
            <div>
              <p className="font-semibold text-[#1E3A2E]">Call Us</p>
              <a href="tel:+1234567890" className="text-[#1E3A2E]/80 hover:underline">
                +91 99999 XXXXX
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin size={24} className="text-[#3E5C59] mt-1" />
            <div>
              <p className="font-semibold text-[#1E3A2E]">Find Us</p>
              <address className="not-italic text-[#1E3A2E]/80">
                Sikkim, India
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}