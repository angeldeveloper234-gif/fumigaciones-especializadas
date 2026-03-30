import React from 'react';
import { PESTS_LIST } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-6">
            Soluciones seguras y efectivas para el control de plagas
          </h2>
          <p className="text-gray-500 text-lg">
            Servicio especializado de alto nivel para restaurantes, hoteles y hogares. Garantizamos higiene y seguridad total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {PESTS_LIST.map((pest, index) => {
             const Icon = pest.icon;
             return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-soft hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-gray">
                        {pest.image ? (
                            <img src={pest.image} alt={pest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <div className="w-full h-full bg-brand-red/10 flex items-center justify-center">
                                <Icon size={40} className="text-brand-red" />
                            </div>
                        )}
                    </div>
                    {pest.image && (
                        <div className="absolute -bottom-2 -right-2 bg-brand-red p-3 rounded-full text-white shadow-lg border-4 border-white">
                            <Icon size={20} />
                        </div>
                    )}
                </div>
                
                <h3 className="font-bold text-xl text-brand-dark mb-4">{pest.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {pest.description}
                </p>
                
                <a href="#contacto" className="mt-auto group-hover:text-brand-red font-bold text-sm inline-flex items-center gap-2 text-brand-dark transition-colors">
                    Saber Más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
          
          {/* Custom Card for CTA */}
          <div 
            className="bg-white border-2 border-brand-red rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer relative overflow-hidden" 
            onClick={() => window.location.href='#contacto'}
          >
             <div className="relative z-10 flex flex-col items-center h-full justify-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-red">
                    <ArrowRight size={32} />
                </div>
                <h3 className="font-bold text-xl text-brand-dark mb-2">¿Otros Servicios?</h3>
                <p className="text-gray-500 text-sm">Contáctanos para una inspección personalizada.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;