import React from 'react';
import { Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://i.ytimg.com/vi/3f-7Gxsg7s8/maxresdefault.jpg',
    alt: 'Rumtek Monastery',
  },
  {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh9fNeuwJBAfnZiLQ8Tgc5aKLp7RvrKO4IjlTgDap0ubVI8SqwqIOVHoo7SR69gX1NCdsqn4NJKs2HZ_brEoKnAB3aM6_6x22Kj5-3gS7q5NRxyPeE3vKpu90zrQrQMJAMkGKtuyToIKtT/s1600/buddhapark0101010010101.jpg',
    alt: 'Buddha Park Ravangla',
  },
  {
    src: 'https://www.holidify.com/images/cmsuploads/compressed/2_20180503132945.jpeg',
    alt: 'Enchey Monastery',
  },
  {
    src: 'https://i.pinimg.com/736x/e4/8b/c4/e48bc4cd6d6bea17f4a0cab0a085d06b.jpg',
    alt: 'Pemayangtse Monastery',
  },
  {
    src: 'https://tripcompanion.com/wp-content/uploads/2017/09/Gallery-East-India-7-Rabdentse-Ruins-Pelling-Depositphotos_102320978_original.jpg',
    alt: 'Rabdentse Ruins',
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ff/be/59/lingdum-monastery-ranka.jpg?w=1200&h=-1&s=1',
    alt: 'Lingdum (Ranka) Monastery',
  },
  {
    src: 'https://live.staticflickr.com/5685/21080660973_821f5345f9.jpg',
    alt: 'Phodong Monastery',
  },
  {
    src: 'https://www.ghumney.com/uploads/0000/19/2024/12/05/900x515-darjeeling-sanga-choeling-monastery.jpg',
    alt: 'Sanga Choeling Monastery',
  },
  {
    src: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/12/ae4b46d50598b5ab7d3ec2ea2841bf7e_1000x1000.jpg',
    alt: 'Tashiding Monastery',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#EDEAE0] to-[#D8D4C8] text-[#1E3A2E] font-sans relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-10 z-0"></div>

      <header className="text-center mb-12 mt-12 relative z-10">
        <h1 className="text-5xl font-bold text-[#1E3A2E] drop-shadow-sm mb-2 tracking-tight">
          Monastery Gallery
        </h1>
        <div className="flex items-center justify-center mt-6 mb-6">
          <Landmark size={60} className="text-[#3E5C59]" />
        </div>
        <p className="text-xl text-[#1E3A2E]/80 max-w-3xl mx-auto">
          Explore the serene beauty of Sikkim's monasteries through our curated gallery.
        </p>
      </header>

      <motion.div
        className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center text-[#1E3A2E] font-medium text-lg">
                {image.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}