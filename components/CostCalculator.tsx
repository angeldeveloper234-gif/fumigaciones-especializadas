import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, ShieldCheck } from 'lucide-react';

const CostCalculator: React.FC = () => {
    const [sqm, setSqm] = useState(0);
    const [pestType, setPestType] = useState('cucarachas');
    
    const basePrices: Record<string, number> = {
        'cucarachas': 12,
        'termitas': 45,
        'roedores': 18,
        'general': 10
    };

    const estimate = sqm * basePrices[pestType];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
                    <div className="p-12 lg:p-16 space-y-8">
                        <div>
                            <span className="text-brand-primary font-black uppercase tracking-widest text-xs mb-4 block">Herramienta de Diagnóstico</span>
                            <h2 className="text-4xl font-black text-brand-dark leading-tight">Cotizador Instantáneo</h2>
                            <p className="text-gray-500 mt-4 font-medium">Obtén un estimado rápido basado en los metros cuadrados de tu propiedad.</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-black uppercase text-gray-400 mb-2">Área (m²)</label>
                                <input 
                                    type="number" 
                                    placeholder="Ej. 120"
                                    className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl focus:border-brand-primary outline-none font-bold text-xl transition-all"
                                    onChange={(e) => setSqm(Number(e.target.value))}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-black uppercase text-gray-400 mb-2">Tipo de Plaga</label>
                                <select 
                                    className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl focus:border-brand-primary outline-none font-bold text-lg appearance-none transition-all"
                                    onChange={(e) => setPestType(e.target.value)}
                                >
                                    <option value="cucarachas">Cucarachas (Gel & Aspersión)</option>
                                    <option value="termitas">Termitas (Barrera Química)</option>
                                    <option value="roedores">Roedores (Estaciones de Cebado)</option>
                                    <option value="general">Fumigación General</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-dark p-12 lg:p-16 text-white flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-brand-primary mb-8">
                                <Calculator />
                                <span className="font-black uppercase tracking-widest">Inversión Estimada</span>
                            </div>
                            
                            <div className="space-y-2">
                                <span className="text-7xl font-black text-white leading-none">
                                    ${estimate > 0 ? estimate.toLocaleString() : '---'}
                                </span>
                                <span className="text-xl text-gray-400 font-bold ml-2">MXN</span>
                            </div>
                            <p className="text-gray-400 mt-4 text-sm font-medium">
                                *Este es un valor aproximado. Sujeto a inspección física por un técnico certificado.
                            </p>
                        </div>

                        <div className="pt-12 space-y-6">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                <Zap className="text-brand-primary" size={24} />
                                <span className="text-sm font-bold">Servicio disponible el mismo día</span>
                            </div>
                            <button className="w-full bg-brand-primary hover:bg-red-600 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-primary/20">
                                Confirmar y Agendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
