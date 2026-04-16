import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, LOGO_LIGHT, LOGO_DARK, NAV_LINKS } from '../constants';
import LocationModal from './LocationModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || !isHome 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="relative">
                <div className={`flex flex-col leading-none transition-colors duration-300 ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}>
                  <span className="text-xl font-black tracking-tighter font-display">FUMIGACIONES</span>
                  <span className="text-[10px] font-black text-brand-red tracking-[0.4em]">ESPECIALIZADAS</span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${
              scrolled || !isHome ? 'bg-gray-100/50' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 ${
                    scrolled || !isHome
                      ? 'text-gray-700 hover:text-brand-primary hover:bg-white'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className={`flex items-center gap-2 font-black text-sm transition-colors ${
                  scrolled || !isHome ? 'text-brand-dark hover:text-brand-primary' : 'text-white hover:text-brand-primary'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                   <Phone size={14} className="text-brand-primary" />
                </div>
                {CONTACT_INFO.phone}
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-primary hover:bg-red-600 text-white px-6 py-3 rounded-xl font-black text-sm transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/20 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Agendar ahora
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled || !isHome ? 'text-brand-dark bg-gray-100' : 'text-white bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-[calc(100%-1px)] bg-white shadow-2xl transition-all duration-500 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-4 rounded-2xl text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-brand-primary transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gray-50 text-brand-dark font-black"
              >
                <Phone size={20} className="text-brand-primary" />
                {CONTACT_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-brand-primary text-white p-5 rounded-2xl font-black text-lg shadow-lg shadow-brand-primary/30"
              >
                Sucursales WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;