"use client";

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = clientX - rect.left;
    const p = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(p);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden cursor-ew-resize select-none rounded-sm"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Right Image (Modern Setup) */}
      <img 
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200" 
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Modern Furniture"
      />
      {/* Left Image (Classic Setup) */}
      <div 
        className="absolute inset-0 overflow-hidden border-r border-white/80"
        style={{ width: `${position}%` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=1200" 
          className="absolute inset-0 w-[100vw] max-w-[800px] h-full object-cover" 
          style={{ width: containerRef.current?.offsetWidth || '100vw' }}
          alt="Classic Furniture"
        />
      </div>
      {/* Handle */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-white z-10 shadow-[0_0_10px_rgba(0,0,0,0.3)]" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white drop-shadow-md">
          <ChevronLeft size={16} /><ChevronRight size={16} className="-ml-1" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
