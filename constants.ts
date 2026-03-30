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
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Métodos', href: '#metodos' },
  { label: 'Reseñas', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const PESTS_LIST = [
  {
    name: "Control de Plagas Comercial",
    description: "Diseñado específicamente para los altos estándares de restaurantes, cocinas industriales y hotelería.",
    icon: Bug,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Cucarachas",
    description: "Eliminación efectiva y garantizada de todo tipo de cucarachas en áreas críticas.",
    icon: Bug,
    image: "https://gleba.com.ar/wp-content/uploads/2021/12/Cucaracha-americana-Gleba.jpg"
  },
  {
    name: "Termitas",
    description: "Tratamientos preventivos y correctivos contra termitas en estructuras.",
    icon: Home,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4LejNIfaT_kr_scpPV9lVoCfEDMffAgL_g&s"
  },
  {
    name: "Desinfección",
    description: "Desinfección profunda grado alimenticio contra virus y bacterias.",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Fumigación Residencial",
    description: "Servicio exclusivo para casas habitación, disponible principalmente por recomendación directa.",
    icon: Home,
    image: "https://megusta.do/storage/32000/26496/ebba8d237feca903c5aed4c2109cac07.jpg"
  }
];

export const METHODS: MethodItem[] = [
  {
    title: "Aspersión",
    description: "Aplicación líquida perimetral para barreras químicas efectivas.",
    icon: SprayCan
  },
  {
    title: "Gel Activo",
    description: "Cebos de alta atracción para control focalizado de cucarachas y hormigas.",
    icon: Bug
  },
  {
    title: "Nebulización",
    description: "Microgotas que alcanzan áreas difíciles y espacios aéreos.",
    icon: Clock
  },
  {
    title: "Polvos Residuales",
    description: "Tratamiento de grietas y hendiduras para protección duradera.",
    icon: ShieldCheck
  },
  {
    title: "Termonebulización",
    description: "Niebla térmica de alta penetración para control total.",
    icon: CloudFog
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