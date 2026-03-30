import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, PlayCircle, Star } from 'lucide-react';
import LocationModal from './LocationModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-red/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-yellow/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="w-full text-white space-y-8 lg:pr-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-glow"></span>
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">Disponibilidad 24/7</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Expertos en <br />
              <span className="text-brand-red">
                Control de Plagas
              </span>
              <br /> para el Sector Gastronómico y Hotelero.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light border-l-2 border-brand-red pl-6">
              Soluciones definitivas, seguras y de acción rápida para proteger la reputación de tu negocio. Confía en quienes ya protegen a más de 300 restaurantes a nivel nacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 rounded-full font-bold text-brand-dark bg-white hover:bg-brand-yellow hover:text-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                WhatsApp inmediato 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contacto"
                className="px-8 py-4 rounded-full font-bold text-white border-2 border-brand-red hover:bg-brand-red transition-all flex items-center justify-center gap-2"
              >
                Cotizar ahora
              </a>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-8 border-t border-white/10 mt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-yellow h-10 w-10 p-2 bg-brand-yellow/10 rounded-lg" />
                <div className="text-sm">
                    <p className="font-bold text-white text-base">Licencia Sanitaria</p>
                    <p className="text-gray-400">Vigente y Certificada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-yellow h-10 w-10 p-2 bg-brand-yellow/10 rounded-lg" />
                <div className="text-sm">
                    <p className="font-bold text-white text-base">Productos EPA</p>
                    <p className="text-gray-400">Eco-Friendly</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video / Visual Column */}
          <div className="w-full relative mt-10 lg:mt-0 lg:pl-10">
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                <img 
                    src="/images/hero_kitchen.png" 
                    alt="Cocina Industrial Impecable"
                    className="w-full h-auto lg:h-[600px] object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay & Subtle Play (if video modal is still needed for something) */}
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors z-20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle size={32} />
                    </div>
                </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl z-30 animate-float">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w32-h32-p-rp-mo-ba4-br100" alt="Client" />
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w32-h32-p-rp-mo-br100" alt="Client" />
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w32-h32-p-rp-mo-br100" alt="Client" />
                    </div>
                    <div>
                        <div className="flex text-brand-yellow">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        <p className="font-bold text-brand-dark text-sm mt-1">Clientes Satisfechos</p>
                    </div>
                </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute top-10 -right-4 lg:-right-8 bg-brand-dark border border-white/20 p-4 rounded-xl shadow-2xl z-30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Garantía Total</p>
                        <p className="text-gray-400 text-xs">Sin Plagas</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* WhatsApp Modal */}
      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Fullscreen Video Modal */}
      {isVideoModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors"
              >
                  Cerrar (X)
              </button>
              <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
                  <video 
                      className="w-full h-auto max-h-[80vh]"
                      controls
                      autoPlay
                  >
                      <source src="/images/videoplayback.mp4" type="video/mp4" />
                      Tu navegador no soporta el formato de video.
                  </video>
              </div>
          </div>
      )}
    </section>
  );
};

export default Hero;