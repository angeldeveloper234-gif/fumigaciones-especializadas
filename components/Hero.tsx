import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, PlayCircle, Phone, CheckCircle, Award, Target } from 'lucide-react';
import LocationModal from './LocationModal';
import { CONTACT_INFO, BRANCHES } from '../constants';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % BRANCHES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-home.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-brand-dark/80" />
        {/* Subtle red glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content */}
          <div className="w-full text-white space-y-10 lg:col-span-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_15px_rgba(229,57,53,0.5)]" />
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]">
                <span>Cobertura en</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={BRANCHES[currentCityIndex].name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-brand-red"
                  >
                    {BRANCHES[currentCityIndex].name}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-8xl font-black leading-[0.95] tracking-tighter font-display pr-4"
            >
              Control de Plagas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                Avanzado para
              </span>
              <br />
              <span className="text-brand-red italic">Hostelería.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed font-medium"
            >
              Protección certificada COFEPRIS para los negocios más exigentes de México. <span className="text-white">Eliminación garantizada</span> con protocolos inodoros y discretos.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-10 py-6 rounded-2xl font-black text-white bg-brand-red hover:bg-red-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-red/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Agendar Inspección Gratis
                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-10 py-6 rounded-2xl font-black text-white border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
              >
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <Phone size={20} className="text-brand-red" />
                </div>
                {CONTACT_INFO.phone}
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-t border-white/5"
            >
              <div className="flex items-center gap-3">
                <Target className="text-brand-red w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Manejo <br/>Integrado (MIP)</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-brand-red w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Certificación <br/>COFEPRIS</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-red w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Garantía <br/>por Escrito</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brand-red w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Sin olor <br/>ni manchas</span>
              </div>
            </motion.div>
          </div>
          
          {/* Play Button — right on desktop, below content on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end lg:col-span-4"
          >
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative flex items-center justify-center w-28 h-28 lg:w-36 lg:h-36"
              aria-label="Ver video"
            >
              {/* Outer pulse ring */}
              <span className="absolute inset-0 rounded-full bg-brand-red/20 animate-ping" />
              {/* Middle ring */}
              <span className="absolute inset-3 rounded-full bg-brand-red/30 group-hover:scale-110 transition-transform duration-500" />
              {/* Inner button */}
              <span className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 bg-brand-red rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/50 group-hover:scale-110 transition-transform duration-500">
                <PlayCircle size={44} className="text-white" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;