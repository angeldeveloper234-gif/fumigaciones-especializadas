import React, { useState } from 'react';
import { Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import LocationModal from './LocationModal';

const Promotion: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="promociones" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-brand-red to-brand-darkRed rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(229,57,53,0.5)] border border-white/10 group">
            
            {/* Massive decorative number */}
            <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/10 leading-none select-none group-hover:translate-y-5 transition-transform duration-1000">3x2</div>
            
            {/* More decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-[10px] font-black mb-10 tracking-[0.2em] uppercase border border-white/30">
                    <Tag size={18} /> Plan Estratégico Empresarial
                </div>
                
                <h2 className="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.8] tracking-tighter">
                    3 Sesiones <br/>
                    <span className="text-brand-yellow drop-shadow-2xl">POR EL PRECIO DE 2</span>
                </h2>
                
                <p className="text-white/80 text-xl md:text-3xl mb-14 leading-relaxed font-medium max-w-3xl">
                    Blindaje sanitario extendido para tu restaurante. <span className="text-white font-black underline decoration-brand-yellow decoration-4">Garantía FE™ Total</span> contra clausuras y plagas críticas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-white text-brand-red px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-dark hover:text-white transition-all shadow-3xl transform hover:-translate-y-2 flex items-center justify-center gap-4"
                    >
                        Solicitar Beneficio <ArrowRight size={22} />
                    </button>
                    
                    <a 
                        href="https://booking.appointy.com/es/victorluna/bookings/service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-brand-dark text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-all border border-white/10 text-center transform hover:-translate-y-2 shadow-3xl"
                    >
                        Reservar Online
                    </a>
                </div>
                
                <div className="mt-16 pt-10 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                        Fumigaciones Especializadas &copy; {new Date().getFullYear()}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="text-brand-yellow" size={16} />
                           <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Protocolo COFEPRIS</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="text-brand-yellow" size={16} />
                           <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">HACCP COMPLIANCE</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Promotion;