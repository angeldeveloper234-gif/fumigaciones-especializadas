import React from 'react';
import { ShieldCheck, Bug, Thermometer, Calendar, HelpCircle, ChevronDown } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <section id="educacion" className="py-24 bg-brand-gray overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Alertas Estacionales Area */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-dark font-black tracking-widest uppercase text-xs mb-4">
                                Centro de Prevención
                            </span>
                            <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                                Alertas de Temporada <br />
                                <span className="text-brand-red">Primavera 2026</span>
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                                <div className="bg-brand-red/10 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                                    <Thermometer className="text-brand-red" size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-brand-dark">Aumento de Temperatura</h3>
                                    <p className="text-gray-600">El calor acelera el ciclo de reproducción de la <span className="font-bold">Cucaracha Germánica</span>. Recomendamos inspecciones cada 15 días en cocinas industriales.</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                                <div className="bg-brand-red/10 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                                    <Calendar className="text-brand-red" size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-brand-dark">Temporada de Enjambramiento</h3>
                                    <p className="text-gray-600">Marzo-Mayo es la época crítica para las <span className="font-bold">Termitas Subterráneas</span>. Busca señales de alas o tubos de lodo.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-brand-dark rounded-3xl text-white relative overflow-hidden group">
                           <div className="relative z-10 flex items-center justify-between">
                                <div className="space-y-2">
                                    <p className="text-brand-yellow font-black uppercase tracking-widest text-xs">Servicio Express</p>
                                    <p className="text-xl font-bold leading-tight">¿Tienes una emergencia de plagas hoy?</p>
                                </div>
                                <a href="tel:3312345678" className="px-6 py-3 bg-brand-red text-white rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg">
                                    Llamar ahora
                                </a>
                           </div>
                           <Bug className="absolute -right-8 -bottom-8 text-white/5 rotate-12 group-hover:scale-110 transition-transform" size={160} />
                        </div>
                    </div>

                    {/* FAQ Area (SEO Rich Snippets Ready) */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs mb-4">
                                Preguntas Frecuentes
                            </span>
                            <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                                Resolvemos tus Dudas
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "¿Los químicos son seguros para restaurantes y mascotas?",
                                    a: "Sí, utilizamos exclusivamente productos autorizados por COFEPRIS y grado alimenticio que no requieren el cierre total de las instalaciones en la mayoría de los casos."
                                },
                                {
                                    q: "¿Cuánto tiempo dura el servicio de fumigación?",
                                    a: "Dependiendo del área y tipo de plaga, un servicio residencial toma 45-60 min y uno comercial entre 1 y 2 horas."
                                },
                                {
                                    q: "¿Ofrecen certificados sanitarios para inspecciones?",
                                    a: "Completamente. Entregamos carpetas técnicas digitales y físicas válidas ante cualquier auditoría gubernamental (Distintivo H, etc)."
                                }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <div className="flex items-center justify-between gap-4 cursor-pointer group">
                                        <h4 className="font-bold text-brand-dark group-hover:text-brand-red transition-colors">{faq.q}</h4>
                                        <ChevronDown className="text-gray-400" size={20} />
                                    </div>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                             <HelpCircle className="text-brand-yellow" size={40} />
                             <div>
                                 <p className="font-bold text-brand-dark">¿No encuentras lo que buscas?</p>
                                 <p className="text-sm text-gray-500">Nuestros expertos están listos para asesorarte gratis vía WhatsApp.</p>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
