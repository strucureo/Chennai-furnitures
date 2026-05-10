"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

export default function ContactPage() {
  return (
    <div className="bg-[#fafafa] text-[#1a1a1a] min-h-screen font-sans selection:bg-orange-100 overflow-x-hidden">
      <Navbar />
      
      {/* Modern Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] bg-black overflow-hidden mb-12 md:mb-20">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Contact Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 md:p-16 flex flex-col justify-end">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-3"
            >
              Visit Our Showroom
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 max-w-lg text-sm md:text-base font-light tracking-wide leading-relaxed"
            >
              Experience our premium collections in person. Our design experts are ready to assist you in creating your perfect space.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details (Takes 2/5 width Desktop, Full Mobile) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10 lg:col-span-2 order-2 lg:order-1"
          >
            <section>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-light tracking-tight mb-8">Get in Touch</motion.h2>
              <div className="space-y-8">
                
                <motion.div variants={itemVariants} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-[#a0623d] mb-2">Showroom Location</h3>
                    <p className="text-gray-800 leading-relaxed font-medium text-sm md:text-base">
                      Chennai Furniture<br/>
                      79, Medavakkam Main Rd,<br/>
                      Near Vasanth & Co, Balammal Nagar,<br/>
                      Madipakkam, Chennai 600091
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-[#a0623d] mb-2">Direct Line</h3>
                    <p className="text-gray-800 leading-relaxed font-medium text-sm md:text-base hover:text-[#a0623d] transition-colors cursor-pointer">
                      +91 75501 76865
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-[#a0623d] mb-2">Working Hours</h3>
                    <p className="text-gray-800 leading-relaxed font-medium text-sm md:text-base">
                      Open Daily<br/>
                      10:00 AM – 10:00 PM
                    </p>
                  </div>
                </motion.div>

              </div>
            </section>

            <motion.section variants={itemVariants} className="pt-8 border-t border-gray-200">
              <h2 className="text-lg font-light tracking-tight mb-6">Stay Connected</h2>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-full text-[11px] font-bold uppercase tracking-wider hover:-translate-y-1 transition-all duration-300 group">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-500 group-hover:text-black transition-colors"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg> Instagram
                </a>
              </div>
            </motion.section>
          </motion.div>

          {/* Right Column: Dynamic Map (Takes 3/5 width Desktop, Full Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group lg:col-span-3 border border-white/50 order-1 lg:order-2"
          >
            {/* Google Maps Embed */}
            <iframe 
              src={`https://maps.google.com/maps?q=Chennai+Furniture,+Medavakkam+Main+Road,+Madipakkam,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.1] opacity-90 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Subtle Overlay to blend edges */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl ring-1 ring-inset ring-black/5" />
          </motion.div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
