"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 md:px-10 transition-all duration-500 ${
          isOpen ? 'text-black' : 'text-[#1a1a1a]' 
        } ${
          isScrolled && !isOpen
            ? 'py-4 bg-white/85 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-white/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="font-medium text-xl tracking-tighter cursor-pointer z-[60]">
          <Link href="/" onClick={() => setIsOpen(false)}>CHENNAI FURNITURE</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div 
          className="md:hidden cursor-pointer p-2 -mr-2 z-[60]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-10 text-2xl font-light tracking-wide uppercase">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#a0623d] transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#a0623d] transition-colors"
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Footer Info */}
            <div className="absolute bottom-16 text-center text-xs text-gray-500 flex flex-col gap-2">
              <p>+91 75501 76865</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
