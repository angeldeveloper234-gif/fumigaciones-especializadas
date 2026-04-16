import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Target, ShieldCheck, Star, Utensils, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const BRANCHES = [
  { name: 'CDMX', center: [-99.1332, 19.4326], zoom: 12 },
  { name: 'Guadalajara', center: [-103.3916, 20.6668], zoom: 12 },
  { name: 'Monterrey', center: [-100.3528, 25.6588], zoom: 12 },
  { name: 'Querétaro', center: [-100.3905, 20.5901], zoom: 12 },
  { name: 'León', center: [-101.6806, 21.1202], zoom: 12 },
];

const RESTAURANTS = [
  // CDMX
  { name: 'Saks Polanco', city: 'CDMX', coords: [-99.189537, 19.429708] },
  { name: 'Casamarena', city: 'CDMX', coords: [-99.189427, 19.429243] },
  { name: 'Ariosto Polanco', city: 'CDMX', coords: [-99.189821, 19.430251] },
  // GDL
  { name: 'Casa Macaria', city: 'Guadalajara', coords: [-103.391517, 20.668631] },
  { name: 'Mediterraneo', city: 'Guadalajara', coords: [-103.391512, 20.668762] },
  { name: 'Las Originales', city: 'Guadalajara', coords: [-103.391356, 20.668802] },
  // MTY
  { name: 'Parrilla Local', city: 'Monterrey', coords: [-100.352849, 25.658854] },
  { name: 'Very Very Burger', city: 'Monterrey', coords: [-100.352822, 25.658751] },
  // QRO
  { name: 'El Gran Torito', city: 'Querétaro', coords: [-100.39041, 20.58968] },
  { name: 'Gorditas Corregidora', city: 'Querétaro', coords: [-100.390536, 20.590108] },
  // León
  { name: 'Fonda 5-300', city: 'León', coords: [-101.680596, 21.120172] },
  { name: 'Los Armenta', city: 'León', coords: [-101.680306, 21.120574] },
];

const RestaurantMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeCity, setActiveCity] = useState(BRANCHES[0]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: activeCity.center as [number, number],
      zoom: activeCity.zoom,
      attributionControl: false
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    RESTAURANTS.forEach((rest) => {
      // Create a custom marker element
      const el = document.createElement('div');
      el.className = 'restaurant-marker';
      el.innerHTML = `
        <div class="relative group cursor-pointer">
          <div class="absolute -inset-4 bg-brand-primary/20 rounded-full blur-xl group-hover:bg-brand-primary/40 transition-all opacity-0 group-hover:opacity-100"></div>
          <div class="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-primary group-hover:scale-125 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e53935" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          </div>
        </div>
      `;

      new mapboxgl.Marker(el)
        .setLngLat(rest.coords as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, closeButton: false })
            .setHTML(`
              <div class="p-4 bg-brand-dark text-white rounded-xl min-w-[200px]">
                <p class="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">Restaurante Protegido</p>
                <h4 class="font-black text-lg mb-2">${rest.name}</h4>
                <div class="flex items-center gap-2 text-[10px] font-bold text-gray-400 border-t border-white/10 pt-2">
                  <div class="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full border border-green-500/30">Certificado COFEPRIS</div>
                  <div class="bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded-full">Protocolo FE™</div>
                </div>
              </div>
            `)
        )
        .addTo(map.current!);
    });

    return () => map.current?.remove();
  }, []);

  const flyToCity = (city: typeof BRANCHES[0]) => {
    setActiveCity(city);
    map.current?.flyTo({
      center: city.center as [number, number],
      zoom: city.zoom,
      essential: true,
      duration: 2000
    });
  };

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
             <span className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Target size={14} /> Red de Protección Gastronómica
             </span>
             <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                Presencia Inmediata en el <br />
                <span className="text-brand-primary italic">Sector Restaurantero.</span>
             </h2>
             <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                Nuestra cobertura no es un mapa estático; es una red viva de protección. 
                Más de <span className="text-white font-black underline decoration-brand-primary decoration-4">300 establecimientos</span> confían su seguridad sanitaria en nosotros.
             </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary">
                    <ShieldCheck size={28} />
                </div>
                <div>
                   <p className="text-white font-black leading-none italic mb-1 uppercase tracking-wider">Blindaje Total</p>
                   <p className="text-gray-500 text-xs font-bold">Respuesta en <2 horas</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500">
                    <Star size={28} />
                </div>
                <div>
                   <p className="text-white font-black leading-none italic mb-1 uppercase tracking-wider">Cero Clausuras</p>
                   <p className="text-gray-500 text-xs font-bold">100% efectividad en auditorías</p>
                </div>
             </div>
          </div>
        </div>

        {/* City Selectors */}
        <div className="flex flex-wrap gap-3 mb-8">
            {BRANCHES.map((city) => (
                <button
                    key={city.name}
                    onClick={() => flyToCity(city)}
                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                        activeCity.name === city.name 
                        ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/30' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                >
                    {city.name}
                </button>
            ))}
        </div>

        {/* Map Container */}
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl h-[600px] group">
            <div ref={mapContainer} className="absolute inset-0 z-0" />
            
            {/* Map Overlay info */}
            <div className="absolute bottom-8 left-8 z-10 pointer-events-none">
                <div className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl transition-all duration-500 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-2">
                        <MapPin className="text-brand-primary" size={20} />
                        <span className="text-white font-black text-lg tracking-tight">{activeCity.name}</span>
                    </div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose">
                        Zona de Operatividad Prioritaria <br />
                        <span className="text-brand-primary">Unidades Activas: 12</span>
                    </p>
                </div>
            </div>

            {/* Floating Interaction Invite */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
                <div className="flex items-center gap-4 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 text-[10px] text-white font-bold uppercase tracking-widest animate-pulse">
                    <Utensils size={14} className="text-brand-primary" />
                    Explora los puntos de protección gastronómica
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        .restaurant-marker {
          perspective: 1000px;
        }
        .mapboxgl-popup-content {
          background: transparent !important;
          padding: 0 !important;
          border-radius: 1.5rem !important;
          box-shadow: none !important;
        }
        .mapboxgl-popup-tip {
          border-top-color: #1a1a1a !important;
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RestaurantMap;
