import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    let scrollTimeout;
    let resizeTimeout;

    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
        scrollTimeout = null;
      }, 100);
    };

    const handleResize = () => {
      if (resizeTimeout) return;
      resizeTimeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        resizeTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  const isLargeScreen = windowWidth >= 1024;

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="hidden lg-flex justify-between items-center px-20 py-2 bg-blue-600 text-white font-medium" style={{ fontSize: '14px' }}>
        <div className="flex gap-6">
          <div className="flex items-center gap-2"><Phone size={14} style={{ color: '#fbc02d' }} /> +91 70462 04200</div>
          <div className="flex items-center gap-2"><Mail size={14} style={{ color: '#fbc02d' }} /> Karmaviewopc@gmail.com</div>
          <div className="flex items-center gap-2 text-gray-200" style={{ fontSize: '12px', opacity: 0.8 }}>Reg No: 24AANCB4662P1Z3</div>
        </div>
        <div className="flex items-center gap-2"><MapPin size={14} style={{ color: '#fbc02d' }} /> Vapi, Gujarat, India</div>
      </div>

      <nav
        className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white shadow-md py-5'}`}
        style={{
          top: isLargeScreen && !isScrolled ? '38px' : '0',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container px-6 lg-px-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-2xl" style={{ fontSize: '24px' }}>BK</div>
            <div>
              <div className="font-bold leading-tight text-blue-600" style={{ fontSize: '18px' }}>BLESSEDKARMA</div>
              <div className="font-semibold tracking-widest text-slate-500" style={{ fontSize: '10px' }}>SUPPLIER (OPC) PVT. LTD.</div>
            </div>
          </div>

          <div className="hidden lg-flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold transition-all hover-text-accent text-slate-700"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="hidden lg-flex btn-primary">
            Get a Quote
          </button>

          <button className="lg-hidden bg-transparent border-none cursor-pointer z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-slate-900" size={28} /> : <Menu className="text-slate-900" size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Slide from Right */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900 z-40"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
              style={{ maxWidth: '85vw' }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">BK</div>
                  <div>
                    <div className="font-bold text-blue-600" style={{ fontSize: '14px' }}>BLESSEDKARMA</div>
                    <div className="font-semibold text-slate-500" style={{ fontSize: '8px' }}>SUPPLIER (OPC) PVT. LTD.</div>
                  </div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="bg-transparent border-none cursor-pointer">
                  <X className="text-slate-900" size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-slate-900 font-semibold border-b border-slate-100 py-4 hover-text-accent transition-all"
                    style={{ fontSize: '18px', textDecoration: 'none' }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Footer Button */}
              <div className="p-6 border-t border-slate-200">
                <button className="btn-primary w-full justify-center">Get a Quote</button>
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
