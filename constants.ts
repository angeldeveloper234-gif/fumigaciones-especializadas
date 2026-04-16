import { Bug, SprayCan, ShieldCheck, MapPin, Phone, Mail, Clock, Rat, Home, Wind, Hexagon, AlertTriangle, Target, CloudFog } from 'lucide-react';
import { ServiceItem, Testimonial, NavLink, MethodItem } from './types';

export const COLORS = {
  primary: '#E53935',
  secondary: '#FBC02D',
  text: '#1A1A1A',
  white: '#FFFFFF'
};

export const CONTACT_INFO = {
  phone: "33 1234 5678", // Placeholder for Zapopan area
  whatsapp: "33 1234 5678",
  email: "fumigaciones.fe.gdl@gmail.com",
  address: "Av Federalistas 1185, Coto Enrique VIII, San Fernando, Zapopan, Jalisco, 45130",
  schedule: "Servicio Profesional de Fumigación"
};

export const LOGO_LIGHT = "/images/logo.png";
export const LOGO_DARK = "/images/logo.png";

export const BRANCHES = [
  {
    id: 'guadalajara',
    name: "Guadalajara, Jal.",
    phone: "3312345678"
  },
  {
    id: 'leon',
    name: "León, Gto.",
    phone: "3312345678"
  },
  {
    id: 'queretaro',
    name: "Querétaro, Qro.",
    phone: "3312345678"
  },
  {
    id: 'cdmx',
    name: "Ciudad de México",
    phone: "3312345678"
  },
  {
    id: 'monterrey',
    name: "Monterrey, N.L.",
    phone: "3312345678"
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' },
];


export const PESTS_LIST = [
  {
    id: 'control-comercial',
    slug: 'control-de-plagas-comercial',
    name: "Control de Plagas Comercial",
    description: "Soluciones de alto nivel para restaurantes, hoteles e industrias alimentarias.",
    fullDescription: "Nuestro programa de Manejo Integrado de Plagas (MIP) está diseñado para cumplir con las normativas más estrictas de salud y seguridad en México (COFEPRIS). Entregamos certificados de fumigación válidos y hojas de seguridad (MSDS) de todos nuestros materiales.",
    risks: "Sanciones sanitarias, pérdida de reputación, contaminación de alimentos y riesgos estructurales.",
    process: "Inspección detallada, diagnóstico de vulnerabilidades, implementación de barrear físicas y químicas, y monitoreo continuo.",
    prevention: "Manejo adecuado de residuos, sellado de grietas y capacitación del personal sobre higiene.",
    icon: Bug,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    features: ["Certificado COFEPRIS", "Hojas de Seguridad", "Atención DISCRETA", "Planes de Mantenimiento"]
  },
  {
    id: 'cucarachas',
    slug: 'eliminacion-de-cucarachas',
    name: "Cucarachas",
    description: "Eliminación garantizada de Blatella germánica y americana en áreas críticas.",
    fullDescription: "Usamos geles activos inodoros y aspersión residual de última generación que no mancha ni requiere evacuar el área por tiempos prolongados.",
    risks: "Transmisión de enfermedades como salmonelosis, asma y alergias severas.",
    process: "Identificación de nidos, aplicación de cebo en puntos estratégicos y barreras perimetrales.",
    prevention: "Eliminación de fuentes de agua (humedad) y restos de comida en cocinas.",
    icon: Bug,
    image: "https://gleba.com.ar/wp-content/uploads/2021/12/Cucaracha-americana-Gleba.jpg",
    features: ["Gel sin olor", "Sin manchas", "Efecto dominó", "Garantía por escrito"]
  },
  {
    id: 'termitas',
    slug: 'control-de-termitas',
    name: "Termitas",
    description: "Protección estructural con barreras antitermita de larga duración.",
    fullDescription: "Tratamientos preventivos en pre-construcción y correctivos en estructuras ya dañadas usando termonebulización y perforación controlada.",
    risks: "Daños irreversibles en muebles de madera y cimientos de la propiedad.",
    process: "Detección de túneles de avance, inyección de termiticida y sellado protector.",
    prevention: "Control de humedad en cimientos y evitar contacto de madera con suelo directo.",
    icon: Home,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4LejNIfaT_kr_scpPV9lVoCfEDMffAgL_g&s",
    features: ["Protección 5+ años", "Barreras químicas", "Inyección profunda", "Inspección térmica"]
  },
  {
    id: 'roedores',
    slug: 'control-de-roedores',
    name: "Control de Roedores",
    description: "Sistemas de cebado y trampeo profesional para ratas y ratones.",
    fullDescription: "Instalación de estaciones de cebado de seguridad inviolables, ideales para áreas con niños o mascotas.",
    risks: "Incendios por cables roídos, transmisión de leptospirosis y hantavirus.",
    process: "Mapeo de zonas de paso, colocación de estaciones de monitoreo y exclusión de accesos.",
    prevention: "Sellado de entradas mayores a 1cm y gestión de contenedores de basura.",
    icon: Rat,
    image: "https://images.unsplash.com/photo-1452195100486-94291c66c271?auto=format&fit=crop&q=80&w=800",
    features: ["Estaciones de seguridad", "Trampeo incruento", "Eliminación de nidos", "Exclusión física"]
  },
  {
    id: 'chinches',
    slug: 'control-de-chinches',
    name: "Eliminación de Chinches",
    description: "Tratamiento de choque para chinches de cama en hotelería y residencias.",
    fullDescription: "Utilizamos métodos combinados de calor y nebulización para eliminar huevos y adultos de forma inmediata.",
    risks: "Picaduras nocturnas, insomnio y grave afectación a la imagen de hoteles.",
    process: "Desarmado de mobiliario, nebulización dirigida y sellado de grietas.",
    prevention: "Inspección de equipaje tras viajes y fundas protectoras certificadas.",
    icon: AlertTriangle,
    image: "https://images.unsplash.com/photo-1615560151624-a78b3036e520?auto=format&fit=crop&q=80&w=800",
    features: ["Eliminación inmediata", "Segura para colchones", "Sin residuos tóxicos", "Protocolo para hoteles"]
  }
];

export const METHODS: MethodItem[] = [
  {
    title: "MIP (Manejo Integrado)",
    description: "Estrategia integral que prioriza la prevención y el control físico antes del químico.",
    icon: Target,
    isEco: true
  },
  {
    title: "Geles Activos",
    description: "Cebos especializados inodoros y pet-friendly, ideales para cocinas abiertas.",
    icon: Bug,
    isEco: true
  },
  {
    title: "Nebulización ULV",
    description: "Micro-gotas que alcanzan grietas profundas sin dejar superficies mojadas.",
    icon: CloudFog
  },
  {
    title: "Barreras Químicas",
    description: "Protección perimetral residual de larga duración contra insectos rastreros.",
    icon: ShieldCheck
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jess Dector",
    subtitle: "Local Guide · 182 opiniones · 98 fotos",
    rating: 5,
    text: "La atención es muy profesional y puntual, en ningún momento me hicieron esperar y siempre se mantuvieron comunicados. En mi caso solicité aplicar la garantía y respondieron rápido y de manera eficiente.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w32-h32-p-rp-mo-ba4-br100"
  },
  {
    id: 2,
    name: "Martha Alicia Medina McCormick",
    subtitle: "10 opiniones · 1 foto",
    rating: 5,
    text: "Muy profesionales y razonables, excelente servicio al cliente",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w32-h32-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Jenny Luna",
    subtitle: "8 opiniones · 1 foto",
    rating: 5,
    text: "Súper profesional, me resolvieron mi problema, me gustó mucho como me explicaron los procesos, me quitaron toda mi plaga con garantía",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w32-h32-p-rp-mo-br100"
  },
  {
    id: 4,
    name: "JuanPablo Salcedo",
    subtitle: "1 opinión",
    rating: 5,
    text: "Es un buen servicio, profesional.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIyS0lKe3xp7Fz_-rPMghN_4rf-F6hoKoRqFZ1X5Zg0_E6_dg=w32-h32-p-rp-mo-br100"
  },
  {
    id: 5,
    name: "Peter Neri",
    subtitle: "Local Guide · 74 opiniones · 14 fotos",
    rating: 5,
    text: "Muy bien servicio, rápido, eficaz y buen precio",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVPTe9lZuk7YMHSIDz_FLzWM1nimFycgu5EuDN38XylOlxjs7_k=w32-h32-p-rp-mo-ba4-br100"
  },
  {
    id: 6,
    name: "Oscar Ruiz Zea",
    subtitle: "Local Guide · 21 opiniones · 4 fotos",
    rating: 5,
    text: "Excelente servicio y atención a los detalles, lo recomiendo",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXd-9Uwm_E4SoFpl2--usZTmOhnDYWvBQ9opjo9gxSz6pWHg4Ah=w32-h32-p-rp-mo-ba2-br100"
  }
];

export const COVERAGE_AREAS = [
  "Guadalajara",
  "León",
  "Querétaro",
  "Ciudad de México (CDMX)",
  "Monterrey"
];