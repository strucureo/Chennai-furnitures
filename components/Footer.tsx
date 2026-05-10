import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white px-8 md:px-16 pt-20 pb-10">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Premium Brand Text */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[0.9]">
              CHENNAI<br />FURNITURE
            </h2>
            <p className="text-gray-400 mt-6 text-sm md:text-base font-light tracking-wide max-w-xs leading-relaxed">
              Transforming houses into beautiful homes with premium quality, modern elegance, and timeless durability.
            </p>
          </div>
        </div>
        
        {/* Right Side: Contact Details */}
        <div className="flex md:justify-end">
          <div className="space-y-6 w-full max-w-xs">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Thodarbu Kolla (Contact)</h4>
            <ul className="text-[11px] space-y-3 font-medium tracking-wide text-gray-300">
              <li className="text-white font-bold">📍 Chennai Furniture</li>
              <li className="leading-relaxed">79, Medavakkam Main Rd, Near Vasanth & Co,<br />Balammal Nagar, Puzhuthivakkam, Madipakkam,<br />Chennai, Tamil Nadu – 600091</li>
              <li className="pt-2 text-white hover:text-[#a0623d] transition-colors cursor-pointer">📞 +91 75501 76865</li>
              <li>🕒 Open Daily : 10:00 AM – 10:00 PM</li>
              <li className="pt-4 flex gap-4">
                <span className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/30">Instagram</span>
                <span className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/30">Google Reviews</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Creative Tag */}
      <div className="max-w-screen-lg mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-widest uppercase text-gray-500">
        <p>&copy; {new Date().getFullYear()} CHENNAI FURNITURE. ALL RIGHTS RESERVED.</p>
        <p>
          CREATIVE BY{' '}
          <a 
            href="https://www.strucureo.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white font-bold hover:text-[#a0623d] transition-colors"
          >
            STRUCUREO
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
