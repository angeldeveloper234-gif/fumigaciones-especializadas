import React from 'react';
import { NAV_LINKS, LOGO_DARK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:row justify-between items-start md:items-center border-b border-gray-800 pb-12 mb-12">
          
          {/* Logo Empresa */}
          <a href="/" className="flex flex-col items-start mb-8 md:mb-0 select-none cursor-pointer">
            <img 
              src={LOGO_DARK} 
              alt="Fumigaciones y Desinfecciones Especializadas Logo"
              className="h-12 md:h-14 w-auto mb-4 object-contain"
            />
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Fumigaciones y Desinfecciones Especializadas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;