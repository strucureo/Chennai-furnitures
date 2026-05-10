"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => (
  <div className="relative w-full h-[50vh] md:h-[65vh] bg-[#e6e6e6] overflow-hidden mb-12">
    <motion.img 
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000" 
      className="w-full h-full object-cover opacity-90 object-center" 
      alt="Modern Living Room Furniture"
    />
  </div>
);

export default HeroBanner;
