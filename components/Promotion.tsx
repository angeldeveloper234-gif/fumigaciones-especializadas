import React, { useState } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import LocationModal from './LocationModal';

const Promotion: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="promociones" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-white/10">
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:opacity-15 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-xs font-bold mb-8 tracking-wide uppercase border border-brand-red/30">
                    <Tag size={14} />
                    Plan por Empresa
                </div>
                
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                    3 Sesiones <br/>
                    <span className="text-brand-yellow">AL PRECIO DE 2</span>
                </h2>
                
                <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed font-light">
                    Protección extendida para tu negocio o sucursal. Incluye inspección técnica inicial y garantía de servicio certificada para cumplir normativas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-darkRed transition-all shadow-[0_10px_30px_rgba(229,57,53,0.3)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
                    >
                        Contactar WhatsApp <ArrowRight size={20} />
                    </button>
                    
                    <a 
                        href="https://booking.appointy.com/es/victorluna/bookings/service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm text-center transform hover:-translate-y-1"
                    >
                        Reservar Servicio
                    </a>
                </div>
                
                <p className="mt-8 text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">
                    Fumigaciones y Desinfecciones Especializadas &copy; {new Date().getFullYear()}
                </p>
                <p className="mt-2 text-white/20 text-[10px] font-medium uppercase tracking-[0.1em]">
                    *Cotización personalizada según m2 y sector
                </p>
            </div>

        </div>
      </div>
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Promotion;