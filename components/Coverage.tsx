import React from 'react';
import { MapPin, Navigation, Map } from 'lucide-react';
import { COVERAGE_AREAS } from '../constants';

const Coverage: React.FC = () => {
    return (
        <section id="cobertura" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Map Visual (Immersive) */}
                    <div className="w-full lg:w-3/5 relative">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-gray aspect-video lg:aspect-square max-h-[700px]">
                            <img
                                src="https://csfmrrjklvawxxhddgek.supabase.co/storage/v1/object/sign/design/puntos-fumigaciones.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ZmY1YjliNS0yYzI4LTRkYjYtYWQ2Yi0xNjdkOTQ5MmE1NmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXNpZ24vcHVudG9zLWZ1bWlnYWNpb25lcy5qcGciLCJpYXQiOjE3NzQ3MDMzODEsImV4cCI6MTgwNjIzOTM4MX0.Qpy7OsrPmpWcAREUQnmvgaTCWovCstdm-4jQOi_Uk3o"
                                alt="Mapa oficial de cobertura nacional"
                                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            
                            {/* Overlay Decorations */}
                            <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none"></div>
                            
                            {/* Custom Pins Simulation */}
                            <div className="absolute top-1/4 left-1/3 animate-ping h-4 w-4 rounded-full bg-brand-red opacity-75"></div>
                            <div className="absolute top-1/4 left-1/3 h-4 w-4 rounded-full bg-brand-red"></div>
                            
                            <div className="absolute bottom-1/3 right-1/4 animate-ping h-4 w-4 rounded-full bg-brand-yellow opacity-75" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-1/3 right-1/4 h-4 w-4 rounded-full bg-brand-yellow"></div>
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-8 rounded-3xl shadow-2xl z-20">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-red p-3 rounded-2xl">
                                    <Navigation size={24} />
                                </div>
                                <div>
                                    <p className="text-3xl font-black">50+</p>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Unidades en Ruta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs mb-4">
                                Presencia Nacional
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
                                Operamos en <br />
                                <span className="text-brand-red">Zonas Clave</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nuestra red logística nos permite garantizar tiempos de respuesta récord. Si tu negocio está en estas zonas, <span className="font-bold text-brand-dark">llegamos hoy mismo.</span>
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                            {COVERAGE_AREAS.map((area, idx) => (
                                <div key={idx} className="flex items-center justify-between p-5 bg-brand-gray rounded-2xl group hover:bg-brand-red transition-all">
                                    <div className="flex items-center gap-4">
                                        <MapPin className="text-brand-red group-hover:text-white transition-colors" size={24} />
                                        <span className="font-black text-brand-dark group-hover:text-white transition-colors">{area}</span>
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-400 group-hover:text-white/60 uppercase tracking-widest">Servicio 24/7</div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="flex items-center gap-3 text-brand-dark font-black uppercase tracking-widest hover:text-brand-red transition-colors group">
                                <Map className="text-brand-red" />
                                Ver mapa detallado
                                <div className="w-8 h-px bg-brand-red group-hover:w-12 transition-all"></div>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Coverage;