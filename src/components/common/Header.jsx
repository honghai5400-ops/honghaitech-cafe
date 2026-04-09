import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Music2, MapPin, Search, Menu, X, Youtube } from './Icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/thuc-don' },
    { name: 'Tin tức', href: '/hoat-dong' },
    { name: 'Cửa hàng', href: '/cua-hang' },
    { name: 'Tuyển dụng', href: '/tuyen-dung' },
    { name: 'Về chúng tôi', href: '/ve-chung-toi' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`${isScrolled || !isHomePage ? 'bg-[var(--color-brand-secondary)]' : 'bg-[var(--color-brand-secondary)] opacity-90 backdrop-blur-md'} text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0 py-0' : 'h-10 opacity-100 py-2'}`}>
        <div className="container-custom flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Youtube size={16} /></a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={14} className="text-brand-accent" />
              <span>honghaitechcafe@gmail.com</span>

            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-brand-accent" />
              <span>Hotline: 0707 074 095</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="relative w-40 h-10 md:w-48 md:h-12">
            <img 
              src="/src/assets/favicon.svg" 
              alt="HongHaiTech Cafe" 
              className={`object-contain h-full transition-all duration-300 brightness-100 '}`}
            />
          </a>

          {/* Nav Items (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-brand-accent ${isScrolled || !isHomePage ? 'text-brand-secondary' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <div className={`flex items-center space-x-4 ml-4 pl-4 border-l border-white/20 ${isScrolled || !isHomePage ? 'border-brand-secondary/20' : ''}`}>
              <Search className={`cursor-pointer hover:text-brand-accent transition-colors ${isScrolled || !isHomePage ? 'text-brand-secondary' : 'text-white'}`} size={20} />
              <button className="bg-brand-accent text-white p-2 rounded-full hover:bg-brand-secondary transition-all">
                <MapPin size={18} />
              </button>
            </div>
          </div>

          {/* Hamburger (Mobile) */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className="text-brand-secondary" /> : <Menu size={28} className={isScrolled || !isHomePage ? 'text-brand-secondary' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/src/assets/favicon.svg" alt="HongHaiTech Cafe" className="w-40" />
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} className="text-brand-secondary" /></button>
            </div>
            <div className="flex flex-col space-y-6 overflow-y-auto">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-xl font-bold text-brand-secondary uppercase hover:text-brand-accent border-b border-gray-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 flex space-x-6 justify-center">
              <Facebook size={24} className="text-brand-secondary" />
              <Instagram size={24} className="text-brand-secondary" />
              <Youtube size={24} className="text-brand-secondary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
