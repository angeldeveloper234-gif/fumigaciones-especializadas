import React from 'react';
import { ArrowRight, Utensils, Home, ShieldAlert, Bug, Rat, Building2 } from 'lucide-react';

const Services: React.FC = () => {
  const silos = [
    {
      title: "Control Comercial",
      label: "Especialidad FE™",
      description: "Certificaciones para Restaurantes, Hoteles e Industria Alimentaria. Cumplimos con Distintivo H y normas internacionales.",
      icon: Utensils,
      bg: "bg-brand-red",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cucarachas",
      label: "Eliminación Total",
      description: "Sistemas de gel activo y nebulización focalizada. Eliminamos el nido, no solo las que ves.",
      icon: Bug,
      bg: "bg-white",
      textColor: "text-brand-dark",
      image: "https://gleba.com.ar/wp-content/uploads/2021/12/Cucaracha-americana-Gleba.jpg"
    },
    {
      title: "Roedores",
      label: "Control Definitivo",
      description: "Barreras físicas y químicas. Monitoreo constante para evitar re-infestaciones en áreas de almacenamiento.",
      icon: Rat,
      bg: "bg-white",
      textColor: "text-brand-dark",
      image: "https://images.unsplash.com/photo-1445217111658-447af5973d06?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Chinche de Cama",
      label: "Protocolo Hotelero",
      description: "Tratamientos de choque con vapor y residuales. Recupera tu habitación en menos de 24 horas.",
      icon: ShieldAlert,
      bg: "bg-white",
      textColor: "text-brand-dark",
      image: "https://images.unsplash.com/photo-1555854816-809d28f0d01d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-bold tracking-widest uppercase text-xs mb-4">
              Categorías de Servicio
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark tracking-tight">
              Silos de Especialización <br />
              <span className="text-brand-red">Fumigaciones FE™</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-xs md:text-right">
            Soluciones independientes diseñadas para cada tipo de reto sanitario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {silos.map((silo, index) => {
             const Icon = silo.icon;
             return (
              <div 
                key={index}
                className={`${silo.bg} ${silo.textColor} rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden flex flex-col min-h-[500px] border border-gray-100`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                        src={silo.image} 
                        className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                        alt={silo.title} 
                    />
                    <div className={`absolute inset-0 ${silo.bg === 'bg-white' ? 'bg-gradient-to-b from-white via-white/80 to-white' : 'bg-gradient-to-b from-brand-red via-brand-red/80 to-brand-red'}`}></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className={`${silo.bg === 'bg-white' ? 'bg-brand-red text-white' : 'bg-white text-brand-red'} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                        <Icon size={28} />
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                        <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${silo.bg === 'bg-white' ? 'text-brand-red' : 'text-brand-yellow'}`}>
                            {silo.label}
                        </p>
                        <h3 className="font-black text-2xl leading-tight">{silo.title}</h3>
                        <p className={`text-sm leading-relaxed ${silo.bg === 'bg-white' ? 'text-gray-600' : 'text-white/80'}`}>
                          {silo.description}
                        </p>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-current/10">
                        <a href="#contacto" className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
                            Ver más detalles <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Sector Summary */}
        <div className="mt-16 bg-white rounded-3xl p-10 flex flex-wrap items-center justify-around gap-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
                <Building2 className="text-brand-red" size={40} />
                <div>
                   <p className="font-black text-brand-dark text-xl leading-none">Sector Comercial</p>
                   <p className="text-gray-500 text-sm mt-1">Más de 300 Restaurantes Protegidos</p>
                </div>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden lg:block"></div>
            <div className="flex items-center gap-4">
                <Home className="text-brand-red" size={40} />
                <div>
                   <p className="font-black text-brand-dark text-xl leading-none">Sector Residencial</p>
                   <p className="text-gray-500 text-sm mt-1">Hogares Libres de Plagas por Recomendación</p>
                </div>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden lg:block"></div>
            <a href="#contacto" className="bg-brand-dark text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-red transition-all shadow-lg">
                Agendar Inspección Gratis
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;