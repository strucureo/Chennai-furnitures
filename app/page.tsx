"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Footer from '../components/Footer';

// Animation variants for smooth reveal
const fadeUp: any = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
};

export default function App() {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen font-sans selection:bg-orange-100">
      <Navbar />
      <HeroBanner />

      <main className="max-w-[700px] mx-auto px-6 pb-32">
        
        {/* Intro Section - Left Aligned */}
        <motion.section {...fadeUp} className="mb-16 space-y-2">
          <h1 className="text-[22px] md:text-[26px] font-normal leading-[1.3] text-gray-900">
            Chennai Furniture is a trusted store offering<br className="hidden md:block"/> premium quality home and office furniture.
          </h1>
          <p className="text-[20px] md:text-[22px] text-gray-800 leading-[1.3] font-normal">
            Known for our modern sofa collections, durable<br className="hidden md:block"/>
            wooden furniture, dining tables, beds, wardrobes,<br className="hidden md:block"/>
            and customized solutions at affordable prices.
          </p>
          <div className="text-[17px] md:text-[19px] font-medium text-[#a0623d] pt-1">
            <a href="#" className="hover:text-orange-800 transition-colors">Shop Living Room</a>
            <span className="px-2">-</span>
            <a href="#" className="hover:text-orange-800 transition-colors">Explore Bedroom</a>
            <span className="px-2">-</span>
            <br className="md:hidden" />
            <a href="#" className="hover:text-orange-800 transition-colors">Custom Designs</a>
          </div>
          <p className="pt-6 font-bold uppercase text-[14px] tracking-wide text-gray-900">
            SAME-DAY DELIVERY OPTIONS AVAILABLE!
          </p>
        </motion.section>

        {/* Asymmetric 3-Image Grid */}
        <section className="grid grid-cols-2 gap-4 mb-24">
          <div className="pt-16 md:pt-24">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-[3/4] bg-gray-100 overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Modern Chair" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-[4/3] bg-gray-100 overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Bedroom Setup" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="aspect-[3/4] bg-gray-100 overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Dining Table" />
            </motion.div>
          </div>
        </section>

        {/* Mid Message 1 */}
        <motion.section {...fadeUp} className="mb-10">
          <p className="text-[18px] md:text-[20px] text-gray-800 leading-[1.35] font-normal">
            We provide excellent customer service, professional<br className="hidden md:block"/>
            installation, and hassle-free deliveries.<br className="hidden md:block"/>
            Backed by strong customer satisfaction and<br className="hidden md:block"/>
            positive Google reviews, we ensure your<br className="hidden md:block"/>
            experience is seamless from store to home.
          </p>
        </motion.section>

        {/* Slider Section */}
        <motion.section {...fadeUp} className="mb-8">
          <BeforeAfterSlider />
        </motion.section>

        {/* Post-slider text */}
        <motion.section {...fadeUp} className="mb-24">
          <p className="text-[18px] md:text-[20px] text-gray-800 leading-[1.35] font-normal">
            We have become the preferred destination for<br className="hidden md:block"/>
            stylish, comfortable, and budget-friendly<br className="hidden md:block"/>
            furniture in Chennai, transforming empty<br className="hidden md:block"/>
            rooms into beautiful living spaces.
          </p>
        </motion.section>

        {/* Bio Images (Showroom/Details) */}
        <section className="grid grid-cols-2 gap-4 mb-24">
          <motion.div whileHover={{ y: -5 }} className="aspect-[4/5] overflow-hidden bg-gray-100">
             <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800" className="w-full h-full object-cover object-center" alt="Showroom" />
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="aspect-[4/5] overflow-hidden bg-gray-100">
             <img src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&w=800" className="w-full h-full object-cover object-center" alt="Wood Detail" />
          </motion.div>
        </section>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-12 opacity-60 pb-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">★</div>
            <span className="text-[11px] font-black tracking-tighter uppercase">Top Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-[10px] font-bold">✓</div>
            <span className="text-[11px] font-black tracking-tighter uppercase">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white text-[10px] font-bold"><MapPin size={12} /></div>
            <span className="text-[11px] font-black tracking-tighter uppercase">Chennai Based</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
