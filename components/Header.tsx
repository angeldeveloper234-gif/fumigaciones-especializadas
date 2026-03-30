import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, LOGO_LIGHT, LOGO_DARK } from '../constants';
import LocationModal from './LocationModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Método', href: '#metodos' },
    { label: 'Reseñas', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md py-3' : 'bg-[#111111] py-5 lg:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Empresa */}
            <a
              href="/"
              className="flex-shrink-0 cursor-pointer select-none"
            >
              {LOGO_LIGHT || LOGO_DARK ? (
                <img
                  src={scrolled ? LOGO_LIGHT : LOGO_DARK}
                  alt="Fumigaciones y Desinfecciones Especializadas Logo"
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                />
              ) : (
                <div className={`flex flex-col leading-none ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                  <span className="text-lg font-black tracking-tighter">FUMIGACIONES</span>
                  <span className="text-sm font-bold text-brand-red tracking-widest">ESPECIALIZADAS</span>
                </div>
              )}
            </a>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex space-x-1 items-center px-2 py-1.5 rounded-full mx-4 transition-all duration-300 ${scrolled ? '' : 'bg-white/5 border border-white/10 backdrop-blur-sm'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled
                    ? 'text-gray-800 hover:text-brand-red hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 text-sm shadow-lg ${scrolled
                  ? 'bg-brand-dark text-white hover:bg-brand-red'
                  : 'bg-brand-yellow text-brand-dark hover:bg-white'
                  }`}
              >
                <MessageCircle size={18} />
                Sucursales WhatsApp
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-2xl rounded-b-3xl overflow-hidden animate-in slide-in-from-top-10 fade-in duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-brand-red hover:bg-red-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full text-center mt-4 bg-brand-red text-white px-4 py-4 rounded-xl font-bold"
              >
                Sucursales WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;