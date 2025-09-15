import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-[#F5F0EB] font-serif overflow-hidden">

      {/* Global Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/imgm.jpg"
          alt="Sikkim Monument"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="w-full h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-24 xl:px-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" variants={fadeUp}>
            Discover the Timeless Beauty of Sikkim
          </motion.h1>
          <motion.p className="text-lg md:text-xl font-light mb-8" variants={fadeUp}>
            Monument360 brings you closer to the heritage, architecture, and stories behind Sikkim’s iconic landmarks.
          </motion.p>
          <motion.button
            className="bg-[#F5F0EB] text-[#2E2E2E] px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Monuments
          </motion.button>
        </div>
      </motion.section>

      {/* Featured Monuments */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Monuments
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['Rabdentse Ruins', 'Pemayangtse Monastery', 'Namgyal Institute'].map((monument, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] transition"
              variants={fadeUp}
            >
              <img
                src={`/${monument.toLowerCase().replace(/ /g, '-')}.jpg`}
                alt={monument}
                className="rounded-md mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{monument}</h3>
              <p className="text-sm text-[#F5F0EB]/80">
                A brief description of {monument} highlighting its history and cultural significance.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 mb-20 md:px-16 lg:px-24 xl:px-32 py-16">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Journey Through Time
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            { year: '1642', event: 'Founding of the Namgyal dynasty' },
            { year: '1705', event: 'Construction of Pemayangtse Monastery' },
            { year: '1947', event: 'Integration with India begins' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 p-4 rounded-lg border-l-4 border-[#F5F0EB]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold">{item.year}</h4>
              <p className="text-sm text-[#F5F0EB]/80">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </main>
  );
}