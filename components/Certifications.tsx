import React from 'react';
import { ShieldCheck, FileCheck, Droplets, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certificaciones" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
             <div className="inline-block bg-green-50 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                100% Certificados
             </div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 tracking-tight">
              Cumplimiento Normativo y Seguridad Sanitaria
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Operamos bajo los estándares más estrictos de la industria. Entregamos documentación oficial válida para auditorías de COFEPRIS y Protección Civil.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Licencia Sanitaria</h4>
                  <p className="text-sm text-gray-500 mt-1">Vigente y estatal.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green">
                  <Droplets size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Insumos EPA</h4>
                  <p className="text-sm text-gray-500 mt-1">Biodegradables y seguros.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="bg-brand-gray rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="relative z-10 text-center">
                    <Award size={64} className="text-brand-yellow mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Garantía por Escrito</h3>
                    <p className="text-gray-600 mb-8">Si la plaga persiste, regresamos sin costo adicional.</p>
                    <div className="h-1 w-24 bg-brand-green mx-auto rounded-full"></div>
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#212121 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                    <ShieldCheck size={32} className="text-brand-green" />
                    <div>
                        <p className="font-bold text-sm">Auditorías</p>
                        <p className="text-xs text-gray-400">Documentación completa</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;