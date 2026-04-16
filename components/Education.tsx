import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Bug, Thermometer, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    
                    {/* Editorial Alerts */}
                    <div className="lg:w-3/5 space-y-12">
                        <div>
                            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/10 text-brand-primary font-black tracking-[0.2em] uppercase text-[10px] mb-6 border border-brand-primary/20">
                                Centro de Inteligencia Biológica
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter">
                                Alertas de Temporada <br />
                                <span className="text-brand-primary">Primavera 2026</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <article className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col justify-between group">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                        <Thermometer size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-dark leading-tight">Ciclo de Calor: Cucaracha Alemana</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        El incremento en la temperatura ambiente acelera el metabolismo y ciclo reproductivo. Recomendamos <span className="text-brand-dark font-bold underline decoration-brand-primary">barreras perimetrales activas</span>.
                                    </p>
                                </div>
                                <div className="mt-10">
                                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Nivel de Riesgo: Crítico</span>
                                </div>
                            </article>
                            
                            <article className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col justify-between group">
                                <div className="space-y-6">
                                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                        <Calendar size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-dark leading-tight">Enjambramiento de Termitas</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Temporada de formación de nuevas colonias subterráneas. Identifique alas translúcidas cerca de fuentes de luz o cimientos.
                                    </p>
                                </div>
                                <div className="mt-10">
                                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Monitoreo: Mayo - Junio</span>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Quick Access Card */}
                    <div className="lg:w-2/5">
                        <div className="h-full bg-brand-dark rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-3xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
                            
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <HelpCircle className="text-brand-primary mb-6" size={48} />
                                    <h3 className="text-4xl font-black leading-tight">Explora Nuestra <br /> Base de Conocimiento</h3>
                                    <p className="text-gray-400 mt-4 text-lg font-medium leading-relaxed">
                                        Resolvemos normativas COFEPRIS, seguridad de productos y protocolos de bioseguridad.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Seguridad Petroquímica",
                                        "Normativa Distintivo H",
                                        "Garantía Post-Servicio"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold border-b border-white/5 pb-4">
                                            <ShieldCheck size={18} className="text-brand-primary" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 pt-12">
                                <Link 
                                    to="/faq"
                                    className="w-full bg-white text-brand-dark py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-xl"
                                >
                                    Ver todas las dudas <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
