import React from 'react';
import { Landmark } from 'lucide-react';

// You can replace these with your own images
const images = [
  {
    src: '/gallery/rumtek-monastery.jpg',
    alt: 'Rumtek Monastery',
  },
  {
    src: '/gallery/buddha-park-ravangla.jpg',
    alt: 'Buddha Park Ravangla',
  },
  {
    src: '/gallery/pemayangtse-monastery.jpg',
    alt: 'Pemayangtse Monastery',
  },
  {
    src: '/gallery/labrang-monastery.jpg',
    alt: 'Labrang Monastery',
  },
  {
    src: '/gallery/tashiding-monastery.jpg',
    alt: 'Tashiding Monastery',
  },
  {
    src: '/gallery/rinchenpong-monastery.jpg',
    alt: 'Rinchenpong Monastery',
  },
  {
    src: '/gallery/enchy-monastery.jpg',
    alt: 'Enchy Monastery',
  },
  {
    src: '/gallery/phodong-monastery.jpg',
    alt: 'Phodong Monastery',
  },
  {
    src: '/gallery/lachen-monastery.jpg',
    alt: 'Lachen Monastery',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen p-6 bg-[#D8D4C8] text-[#1E3A2E] font-sans relative overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-textile.png")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#A5B4A3] to-[#D8D4C8] opacity-70"></div>

      <header className="text-center mb-12 mt-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] drop-shadow-sm mb-2">
          Monastery Gallery
        </h1>
        <div className="flex items-center justify-center mb-4">
          <Landmark size={40} className="text-[#3E5C59]" />
        </div>
        <p className="text-lg md:text-xl text-[#1E3A2E]/80 max-w-3xl mx-auto">
          Explore the serene beauty of Sikkim's monasteries through our curated gallery of images.
        </p>
      </header>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}