import React from 'react';
import { MapPin } from 'lucide-react';
import { COVERAGE_AREAS } from '../constants';

const Coverage: React.FC = () => {
    return (
        <section id="cobertura" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-dark rounded-[3rem] overflow-hidden relative">
                    <div className="grid lg:grid-cols-2">

                        <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-6">Cobertura Regional</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Desplegamos unidades móviles equipadas desde nuestros centros operativos. Llegamos a tu ubicación con respuesta rápida.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {COVERAGE_AREAS.map((area, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white font-medium">
                                            <div className="bg-brand-red p-1.5 rounded-full shrink-0">
                                                <MapPin className="text-white w-4 h-4" />
                                            </div>
                                            <span className="text-sm md:text-base leading-tight">{area}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-96 lg:h-auto bg-gray-900 border-l border-white/5">
                            <img
                                src="https://csfmrrjklvawxxhddgek.supabase.co/storage/v1/object/sign/design/puntos-fumigaciones.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZmY1YjliNS0yYzI4LTRkYjYtYWQ2Yi0xNjdkOTQ5MmE1NmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcHVudG9zLWZ1bWlnYWNpb25lcy5qcGciLCJpYXQiOjE3NzQ3MDMzODEsImV4cCI6MTgwNjIzOTM4MX0.Qpy7OsrPmpWcAREUQnmvgaTCWovCstdm-4jQOi_Uk3o"
                                alt="Mapa oficial de cobertura nacional"
                                className="w-full h-full object-cover object-center opacity-90"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coverage;