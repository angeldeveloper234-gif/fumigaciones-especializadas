import React from 'react';
import { METHODS } from '../constants';

const Methods: React.FC = () => {
  return (
    <section id="metodos" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 border-b border-white/10 pb-8">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-xs mb-3 block">Metodología Avanzada</span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ciencia Aplicada <br/> a la Seguridad
            </h2>
            <p className="text-gray-400 max-w-md text-lg">
                Seleccionamos el método exacto tras una inspección rigurosa. Eficiencia máxima, riesgo cero.
            </p>
          </div>
        </div>

        {/* Changed from Grid to Flex to center odd number of items (3 top, 2 bottom) */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {METHODS.map((method, index) => (
            <div key={index} className="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(30%)]">
              <div className="border-l-2 border-white/20 pl-6 py-2 group-hover:border-brand-red transition-colors duration-500 h-full flex flex-col">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                   <method.icon size={32} className="text-brand-red group-hover:text-brand-yellow transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">{method.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;