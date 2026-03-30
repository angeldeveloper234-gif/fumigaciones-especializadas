import React from 'react';
import InfiniteReviewsTicker from './InfiniteReviewsTicker';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">Opiniones Reales</span>
            <h2 className="text-4xl font-bold text-brand-dark">Confianza Verificada</h2>
            <p className="mt-4 text-gray-600">Hemos brindado soluciones efectivas a <span className="text-brand-red font-bold">+300 restaurantes y clientes</span> satisfechos a nivel nacional.</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />)}
            </div>
            <span className="font-bold text-brand-dark ml-2">4.9/5 Promedio</span>
          </div>
        </div>
      </div>

      {/* Ticker integration */}
      <div className="-mx-4 md:-mx-0">
        <InfiniteReviewsTicker />
      </div>
    </section>
  );
};

export default Testimonials;