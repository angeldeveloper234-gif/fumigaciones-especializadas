import React, { useState } from 'react';
import { Search, Bug, Camera, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const InteractiveDiagnostic: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedPest, setSelectedPest] = useState<string | null>(null);

    const pests = [
        { id: 'cucaracha', name: 'Cucaracha', risk: 'Alto', description: 'Portadora de bacterias. Se reproduce rápido.' },
        { id: 'chinche', name: 'Chinche de Cama', risk: 'Crítico', description: 'Afecta el descanso y reputación hotelera.' },
        { id: 'roedor', name: 'Roedor', risk: 'Extremo', description: 'Daña infraestructura y contamina alimentos.' },
        { id: 'hormiga', name: 'Hormiga', risk: 'Medio', description: 'Contamina superficies de preparación.' },
    ];

    return (
        <section id="diagnostico" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Text Area */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-yellow font-black tracking-widest uppercase text-xs mb-4">
                                Inteligencia Preventiva
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                Identifica tu Plaga <br />
                                <span className="text-brand-red">con IA FE™</span>
                            </h2>
                        </div>
                        
                        <p className="text-gray-400 text-lg leading-relaxed">
                            No todas las plagas se tratan igual. Usa nuestro diagnosticador para entender el nivel de riesgo y obtener una <span className="text-white font-bold">cotización instantánea</span> basada en el tipo de intruso.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-brand-red" size={20} />
                                <span>Diagnóstico Preciso en 30 segundos</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-brand-red" size={20} />
                                <span>Recomendación de Tratamiento Grado Alimenticio</span>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-red p-3 rounded-2xl">
                                    <Camera className="text-white" size={24} />
                                </div>
                                <p className="text-white font-bold">¿Tienes una foto? <span className="text-gray-400 font-normal">Envíala por WhatsApp para identificación humana experta.</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Module */}
                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        {step === 1 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="space-y-2">
                                    <p className="text-brand-red font-black text-xs uppercase tracking-widest text-center">Paso 1 de 2</p>
                                    <h3 className="text-2xl font-black text-brand-dark text-center">¿Qué has visto?</h3>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    {pests.map((pest) => (
                                        <button
                                            key={pest.id}
                                            onClick={() => {
                                                setSelectedPest(pest.id);
                                                setStep(2);
                                            }}
                                            className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-red hover:bg-red-50 transition-all group"
                                        >
                                            <Bug className="text-gray-400 group-hover:text-brand-red group-hover:scale-110 transition-all" size={32} />
                                            <span className="font-bold text-brand-dark">{pest.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && selectedPest && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="space-y-2">
                                    <p className="text-brand-red font-black text-xs uppercase tracking-widest text-center">Resultado del Diagnóstico</p>
                                    <h3 className="text-3xl font-black text-brand-dark text-center">
                                        Riesgo {pests.find(p => p.id === selectedPest)?.risk}
                                    </h3>
                                </div>

                                <div className="bg-brand-gray p-6 rounded-2xl border border-gray-100 relative">
                                    <AlertCircle className="text-brand-red absolute -top-3 -right-3 bg-white rounded-full" size={24} />
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        <span className="font-black text-brand-dark">Nota Crítica:</span> {pests.find(p => p.id === selectedPest)?.description} Necesitas acción inmediata para evitar multas sanitarias.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <a 
                                        href="#contacto"
                                        className="w-full py-5 bg-brand-red text-white rounded-2xl font-black flex items-center justify-center gap-3 text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand-red/20"
                                    >
                                        Obtener Cotización Ahora
                                        <ArrowRight size={20} />
                                    </a>
                                    <button 
                                        onClick={() => setStep(1)}
                                        className="w-full py-4 text-gray-500 font-bold hover:text-brand-dark transition-colors"
                                    >
                                        Elegir otro tipo de plaga
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InteractiveDiagnostic;
