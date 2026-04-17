import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Target, ShieldCheck, Utensils, MapPin, Zap, Clock, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANCHES, RESTAURANT_CLIENTS } from '../constants';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const RestaurantMap: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [activeCity, setActiveCity] = useState(BRANCHES[0]);
    const [isLoading, setIsLoading] = useState(true);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const [hoveredRestaurant, setHoveredRestaurant] = useState<string | null>(null);

    const clearIsochrones = () => {
        if (!map.current) return;
        [10, 20, 30].forEach(m => {
            if (map.current?.getLayer(`iso-layer-${m}`)) map.current.removeLayer(`iso-layer-${m}`);
            if (map.current?.getLayer(`iso-border-${m}`)) map.current.removeLayer(`iso-border-${m}`);
            if (map.current?.getSource(`isochrone-${m}`)) map.current.removeSource(`isochrone-${m}`);
        });
    };

    const fetchIsochrones = async (lng: number, lat: number) => {
        const minutes = [10, 20, 30];
        const colors = ['#6abf40', '#bfaa40', '#bf4040'];

        for (let i = 0; i < minutes.length; i++) {
            const m = minutes[i];
            const color = colors[i];
            const url = `https://api.mapbox.com/isochrone/v1/mapbox/driving/${lng},${lat}?contours_minutes=${m}&polygons=true&access_token=${MAPBOX_TOKEN}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (map.current && map.current.getStyle()) {
                    map.current.addSource(`isochrone-${m}`, { type: 'geojson', data: data });
                    map.current.addLayer({
                        'id': `iso-layer-${m}`,
                        'type': 'fill',
                        'source': `isochrone-${m}`,
                        'paint': { 'fill-color': color, 'fill-opacity': 0.15 }
                    }, 'add-3d-buildings');
                    map.current.addLayer({
                        'id': `iso-border-${m}`,
                        'type': 'line',
                        'source': `isochrone-${m}`,
                        'paint': { 'line-color': color, 'line-width': 2, 'line-dasharray': [2, 1] }
                    }, 'add-3d-buildings');
                }
            } catch (e) {
                console.error('Error fetching isochrone', e);
            }
        }
    };

    const updateMarkers = (cityId: string) => {
        markersRef.current.forEach(m => m.remove());
        markersRef.current = [];

        const currentCity = BRANCHES.find(b => b.id === cityId) || BRANCHES[0];

        // HQ Marker with custom pulse
        const hqEl = document.createElement('div');
        hqEl.className = 'hq-marker-v2';
        hqEl.innerHTML = `
            <div class="hq-pulse-v2"></div>
            <div class="hq-icon-v2">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" stroke-width="3" fill="none"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7M4 21V10h16v11M9 21V10m6 11V10"></path></svg>
            </div>
        `;

        const hqMarker = new mapboxgl.Marker(hqEl)
            .setLngLat(currentCity.coords as [number, number])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div class="p-2">
                    <h4 class="font-black text-brand-dark uppercase tracking-tighter">Sede Central ${currentCity.name}</h4>
                    <p class="text-[10px] text-gray-500 font-bold">Base de Operaciones Estratégicas</p>
                </div>
            `))
            .addTo(map.current!);
        markersRef.current.push(hqMarker);

        // Restaurant markers
        const cityRestaurants = RESTAURANT_CLIENTS[cityId as keyof typeof RESTAURANT_CLIENTS] || [];
        cityRestaurants.forEach((rest, idx) => {
            const m = new mapboxgl.Marker({ color: '#E53935', scale: 0.85 })
                .setLngLat(rest.coords as [number, number])
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div class="p-3 max-w-[200px]">
                  <div class="flex items-center gap-2 mb-2">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span class="text-[9px] font-black uppercase tracking-widest text-brand-red">Cliente Certificado</span>
                  </div>
                  <strong class="block text-sm font-black text-brand-dark leading-tight mb-1">${rest.name}</strong>
                  <p class="text-[10px] text-gray-500 font-medium">${rest.address}</p>
                  <div class="mt-2 pt-2 border-t border-gray-100">
                    <span class="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Protocolo MIP Activo</span>
                  </div>
                </div>
              `))
                .addTo(map.current!);

            // Interaction to highlight from sidebar is handled via map.flyTo, but 
            // since we removed the custom DOM element event listeners, we don't bind 
            // mouseenter/mouseleave directly on the marker element here.

            markersRef.current.push(m);
        });
    };

    useEffect(() => {
        if (!mapContainer.current) return;
        mapboxgl.accessToken = MAPBOX_TOKEN;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: activeCity.coords as [number, number],
            zoom: 13,
            pitch: 60,
            bearing: -20,
            antialias: true,
            attributionControl: false
        });

        map.current.on('load', async () => {
            if (!map.current) return;
            setIsLoading(false);

            // Add 3D buildings layer
            map.current.addLayer({
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#222',
                    'fill-extrusion-height': ['get', 'height'],
                    'fill-extrusion-base': ['get', 'min_height'],
                    'fill-extrusion-opacity': 0.8
                }
            });

            await fetchIsochrones(activeCity.coords[0], activeCity.coords[1]);
            updateMarkers(activeCity.id);
            map.current?.resize();
            // Explicit resize pulses after rendering
            setTimeout(() => map.current?.resize(), 100);
            setTimeout(() => map.current?.resize(), 500);
        });

        const resizeObserver = new ResizeObserver(() => {
            map.current?.resize();
        });
        if (mapContainer.current) {
            resizeObserver.observe(mapContainer.current);
        }

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    map.current?.resize();
                }
            });
        });
        if (mapContainer.current) {
            intersectionObserver.observe(mapContainer.current);
        }

        return () => {
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            map.current?.remove();
        };
    }, []);

    const handleCityChange = async (city: typeof BRANCHES[0]) => {
        if (!map.current) return;
        setActiveCity(city);
        map.current.flyTo({
            center: city.coords as [number, number],
            zoom: 13.5,
            pitch: 60,
            duration: 3000,
            essential: true
        });

        clearIsochrones();
        await fetchIsochrones(city.coords[0], city.coords[1]);
        updateMarkers(city.id);
    };

    const focusOnRestaurant = (rest: any) => {
        if (!map.current) return;
        map.current.flyTo({
            center: rest.coords,
            zoom: 17,
            pitch: 75,
            duration: 2000
        });
    };

    return (
        <section className="py-24 bg-brand-dark overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <Target size={14} /> Red de Protección Premium
                            </span>
                            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                                Blindaje Local. <br />
                                <span className="text-brand-red italic truncate">Presencia Real.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                                Explore nuestra infraestructura operativa. Hemos mapeado nuestras <span className="text-white font-black italic">zonas de respuesta crítica</span> y los establecimientos de alta cocina que confían en nuestro protocolo de seguridad sanitaria.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 lg:text-right">
                        <div className="grid grid-cols-2 lg:inline-grid gap-4 w-full lg:w-auto">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left">
                                <Zap className="text-brand-red mb-2" size={24} />
                                <p className="text-white font-black text-xl leading-none">90 min</p>
                                <p className="text-gray-500 text-[10px] font-bold uppercase mt-1">SLA Promedio</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left">
                                <ShieldCheck className="text-brand-red mb-2" size={24} />
                                <p className="text-white font-black text-xl leading-none">100%</p>
                                <p className="text-gray-500 text-[10px] font-bold uppercase mt-1">Cumplimiento</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:min-h-[700px] lg:h-[800px]">
                    {/* Sidebar: City & Restaurant List */}
                    <div className="lg:col-span-3 flex flex-col gap-6 lg:h-full order-last lg:order-none">
                        {/* City Selector */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-[2rem] flex flex-col gap-1 overflow-hidden">
                            {BRANCHES.map((city) => (
                                <button
                                    key={city.id}
                                    onClick={() => handleCityChange(city)}
                                    className={`flex items-center justify-between px-6 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${activeCity.id === city.id
                                            ? 'bg-brand-red text-white shadow-xl shadow-brand-red/20 scale-[1.02]'
                                            : 'text-gray-500 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {city.name}
                                    <ChevronRight size={14} className={activeCity.id === city.id ? 'opacity-100' : 'opacity-0'} />
                                </button>
                            ))}
                        </div>

                        {/* Restaurant List */}
                        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 overflow-y-auto custom-scrollbar" style={{ maxHeight: '520px' }}>
                            <div className="flex items-center gap-2 mb-6 text-white">
                                <Utensils size={18} className="text-brand-red" />
                                <h4 className="font-black text-xs uppercase tracking-[0.2em]">Clientes en {activeCity.name}</h4>
                            </div>
                            <div className="space-y-3">
                                {RESTAURANT_CLIENTS[activeCity.id as keyof typeof RESTAURANT_CLIENTS]?.map((rest, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => focusOnRestaurant(rest)}
                                        onMouseEnter={() => setHoveredRestaurant(rest.name)}
                                        onMouseLeave={() => setHoveredRestaurant(null)}
                                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer group ${hoveredRestaurant === rest.name
                                                ? 'bg-brand-red border-brand-red shadow-lg'
                                                : 'bg-white/5 border-white/5 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <p className={`font-black text-sm transition-colors ${hoveredRestaurant === rest.name ? 'text-white' : 'text-gray-200'}`}>
                                                {rest.name}
                                            </p>
                                            <Star size={12} className={hoveredRestaurant === rest.name ? 'text-white' : 'text-yellow-500'} />
                                        </div>
                                        <p className={`text-[10px] font-medium leading-tight ${hoveredRestaurant === rest.name ? 'text-white/70' : 'text-gray-500'}`}>
                                            {rest.address}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Map Interface */}
                    <div className="lg:col-span-9 relative rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-3xl group bg-black h-[480px] lg:h-full w-full order-first lg:order-none">
                        {isLoading && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center bg-brand-dark">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full"
                                />
                            </div>
                        )}
                        <div ref={mapContainer} className="absolute inset-0 z-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />

                        {/* Overlays */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/40" />

                        {/* Floating Legend — desktop only */}
                        <div className="hidden lg:block absolute bottom-8 right-8 z-10 w-full max-w-xs pointer-events-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-brand-dark/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6"
                            >
                                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                                    <Clock size={20} className="text-brand-red" />
                                    <div>
                                        <p className="text-white font-black text-xs uppercase tracking-widest">Protocolo Express</p>
                                        <p className="text-gray-500 text-[9px] font-bold">Respuesta Técnica por Zona</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#6abf40]" />
                                            <span className="text-white text-[10px] font-black uppercase tracking-tighter">10 MIN - CRÍTICO</span>
                                        </div>
                                        <span className="text-white/40 text-[9px] font-bold">Radio local</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#bfaa40]" />
                                            <span className="text-white text-[10px] font-black uppercase tracking-tighter">20 MIN - PRIORIDAD</span>
                                        </div>
                                        <span className="text-white/40 text-[9px] font-bold">Zona Urbana</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#bf4040]" />
                                            <span className="text-white text-[10px] font-black uppercase tracking-tighter">30 MIN - ESTÁNDAR</span>
                                        </div>
                                        <span className="text-white/40 text-[9px] font-bold">Periferia</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Active HQ Badge */}
                        <div className="absolute top-8 left-8 z-10">
                            <div className="bg-brand-red text-white pl-6 pr-8 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border-l-4 border-white/30">
                                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center animate-pulse">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-2xl font-black leading-none tracking-tighter uppercase">{activeCity.name}</p>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80 mt-1">Sede de Operaciones Activa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(229,57,53,0.5);
                }

                .mapboxgl-popup-content {
                    background: white !important;
                    padding: 0 !important;
                    border-radius: 24px !important;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5) !important;
                    border: none !important;
                    overflow: hidden;
                }
                .mapboxgl-popup-tip {
                    display: none;
                }

                /* HQ Marker v2 */
                .hq-marker-v2 {
                    position: relative;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hq-icon-v2 {
                    position: relative;
                    z-index: 2;
                    width: 40px;
                    height: 40px;
                    background: #E53935;
                    border: 4px solid white;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 25px rgba(229,57,53,0.5);
                }
                .hq-pulse-v2 {
                    position: absolute;
                    inset: 0;
                    background: #E53935;
                    border-radius: 50%;
                    opacity: 0.3;
                    animation: hq-pulse-v2 2s infinite;
                }
                @keyframes hq-pulse-v2 {
                    0% { transform: scale(0.6); opacity: 0.8; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default RestaurantMap;

