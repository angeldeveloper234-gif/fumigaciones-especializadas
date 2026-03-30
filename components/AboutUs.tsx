import React from 'react';
import { Building2, Utensils, ShieldCheck, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <section id="nosotros" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Visual Element */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
                                alt="Restaurante impecable" 
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                            
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                    <p className="text-white text-lg font-medium italic">
                                        "Garantizamos espacios libres de plagas para que tú te enfoques en el servicio."
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Experience Badge */}
                        <div className="absolute -top-6 -right-6 bg-brand-yellow p-8 rounded-2xl shadow-xl animate-float">
                            <p className="text-brand-dark font-black text-4xl leading-none">+300</p>
                            <p className="text-brand-dark font-bold text-sm uppercase tracking-wider mt-2">Restaurantes<br/>Protegidos</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs mb-4">
                                Sobre Nosotros
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-6 leading-tight">
                                Tu negocio en manos de profesionales.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Entendemos que en la industria de la hospitalidad y la gastronomía, una plaga no es solo una molestia, es un riesgo crítico para tu prestigio y operación.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nos especializamos en la fumigación y control preventivo para hoteles y restaurantes, garantizando espacios limpios y seguros para tus clientes, cumpliendo con los más altos estándares sanitarios a nivel nacional.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 bg-brand-gray rounded-xl">
                                    <Utensils className="text-brand-red" size={24} />
                                    <span className="font-bold text-brand-dark">Sector Gastronómico</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-brand-gray rounded-xl">
                                    <Building2 className="text-brand-red" size={24} />
                                    <span className="font-bold text-brand-dark">Sector Hotelero</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-brand-gray rounded-xl">
                                    <ShieldCheck className="text-brand-red" size={24} />
                                    <span className="font-bold text-brand-dark">Protección de Marca</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-brand-gray rounded-xl">
                                    <Users className="text-brand-red" size={24} />
                                    <span className="font-bold text-brand-dark">Atención Personalizada</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a 
                                href="#contacto" 
                                className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-red transition-all shadow-lg hover:shadow-brand-red/20"
                            >
                                Conocer nuestra metodología
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
