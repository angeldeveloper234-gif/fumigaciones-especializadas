import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, PlayCircle, Star, Phone, CheckCircle } from 'lucide-react';
import LocationModal from './LocationModal';
import { CONTACT_INFO } from '../constants';

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="w-full text-white space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-glow"></span>
                <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">Disponibilidad Inmediata</span>
              </div>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors group">
                <div className="bg-brand-red p-2 rounded-full group-hover:scale-110 transition-transform">
                  <Phone size={16} fill="white" />
                </div>
                <span className="font-black text-xl tracking-tight">{CONTACT_INFO.phone}</span>
              </a>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tighter">
              Fumigaciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
                Especializadas
              </span>
              <br /> en el Mismo Día.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-medium">
              Protección total certificada para restaurantes, hoteles y hogares. <span className="text-white font-bold">Sin químicos tóxicos</span> y con resultados garantizados desde la primera visita.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-5 rounded-2xl font-black text-brand-dark bg-brand-yellow hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-yellow/10"
              >
                Servicio el Mismo Día
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-5 rounded-2xl font-black text-white border-2 border-white/20 hover:border-brand-red hover:bg-brand-red transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Inspección Inmediata
              </button>
            </div>

            <div className="pt-8 flex flex-wrap gap-6 items-center border-t border-white/10 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-yellow" size={20} />
                <span className="text-sm font-bold text-gray-300">Licencia Sanitaria Vigente</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-yellow" size={20} />
                <span className="text-sm font-bold text-gray-300">Certificado por Cofepris</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-yellow" size={20} />
                <span className="text-sm font-bold text-gray-300">Productos Eco-Friendly</span>
              </div>
            </div>
          </div>
          
          {/* Visual Column */}
          <div className="w-full relative">
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer aspect-[4/5] lg:aspect-auto lg:h-[700px]" onClick={() => setIsVideoModalOpen(true)}>
                <img 
                    src="/professional_exterminator_technician_1776356171077.png" 
                    alt="Técnico Profesional en Fumigación"
                    className="w-full h-full object-cover relative z-10 transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Glassmorphism Badge */}
                <div className="absolute top-8 left-8 z-20">
                  <div className="bg-black/30 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <p className="text-brand-yellow font-black text-2xl">+300</p>
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">Restaurantes <br />Protegidos</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-20 flex items-end p-10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                          <PlayCircle size={32} />
                      </div>
                      <div>
                        <p className="text-white font-black text-lg">Mira cómo trabajamos</p>
                        <p className="text-gray-400 text-sm">Procesos certificados paso a paso</p>
                      </div>
                    </div>
                </div>
            </div>

            {/* Experience Card Floating */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-30 animate-float hidden md:block">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow">
                        <ShieldCheck size={32} />
                    </div>
                    <div>
                        <div className="flex text-yellow-500 gap-0.5 mb-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="font-black text-brand-dark leading-tight">Garantía por Escrito</p>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Cero Plagas 100%</p>
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
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl">
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-8 right-8 text-white hover:text-brand-red transition-all p-2 hover:bg-white/10 rounded-full"
              >
                  <ShieldCheck size={40} className="rotate-45" /> 
              </button>
              <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Control de Plagas Profesional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
              </div>
          </div>
      )}
    </section>
  );
};

export default Hero;