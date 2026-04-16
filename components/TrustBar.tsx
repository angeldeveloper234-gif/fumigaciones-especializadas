import React from 'react';
import { ShieldCheck, Star, Award, CheckCircle } from 'lucide-react';

const TrustBar: React.FC = () => {
    return (
        <div className="bg-white border-y border-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-around items-center gap-8 md:gap-4">
                    
                    {/* Trust Item: Google Guaranteed */}
                    <div className="flex items-center gap-3">
                        <div className="bg-green-50 p-2.5 rounded-full">
                            <CheckCircle className="text-green-600" size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-brand-dark uppercase tracking-tight">Google Garantizado</p>
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Trust Item: Licencia Sanitaria */}
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-red/5 p-2.5 rounded-full">
                            <ShieldCheck className="text-brand-red" size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-brand-dark uppercase tracking-tight">Licencia Sanitaria</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none mt-0.5">Vigente Cofepris</p>
                        </div>
                    </div>

                    {/* Trust Item: Years Experience */}
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-yellow/10 p-2.5 rounded-full">
                            <Award className="text-brand-yellow" size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-brand-dark uppercase tracking-tight">15+ Años de Experiencia</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none mt-0.5">Especialistas Certificados</p>
                        </div>
                    </div>

                    {/* Trust Item: Real Reviews */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ" alt="Client" />
                            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ" alt="Client" />
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-dark flex items-center justify-center text-[10px] text-white font-bold">+500</div>
                        </div>
                        <div>
                            <p className="text-sm font-black text-brand-dark uppercase tracking-tight">Reseñas Reales</p>
                            <p className="text-[10px] text-brand-red font-bold uppercase tracking-widest leading-none mt-0.5">Promedio 4.9/5 ★</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustBar;
