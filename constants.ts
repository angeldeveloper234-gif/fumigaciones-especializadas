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
    subtitle: "Local Guide · 182 opiniones",
    rating: 5,
    text: "La atención es muy profesional y puntual. Solicité aplicar la garantía y respondieron rápido y de manera eficiente. Estoy totalmente satisfecho, lo recomiendo y los contrataría de nuevo. El costo lo vale.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w40-h40-p-rp-mo-ba4-br100"
  },
  {
    id: 7,
    name: "Jennifer L.",
    subtitle: "Reseña de Facebook",
    rating: 5,
    text: "Excelente producto, el veneno es buenísimo. El costo en comparación con el resultado la verdad es que vale la pena. Eficaz y rápido. 5 estrellas.",
    image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
  },
  {
    id: 8,
    name: "Mariana G.",
    subtitle: "Reseña de Facebook",
    rating: 5,
    text: "Es la segunda vez que compro sus productos y me han funcionado muy bien. Te especifican la aplicación y lo que contiene. Lo recomiendo mucho 10/10.",
    image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
  },
  {
    id: 9,
    name: "Ele V.",
    subtitle: "Reseña de Facebook",
    rating: 5,
    text: "Recomiendo ampliamente este producto, la verdad elimina desde la primera aplicación.",
    image: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
  },
  {
    id: 2,
    name: "Martha Alicia Medina",
    subtitle: "10 opiniones",
    rating: 5,
    text: "Muy profesionales y razonables, excelente servicio al cliente.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w40-h40-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Jenny Luna",
    subtitle: "8 opiniones",
    rating: 5,
    text: "Súper profesional, me resolvieron mi problema, me gustó mucho como me explicaron los procesos, me quitaron toda mi plaga con garantía.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w40-h40-p-rp-mo-br100"
  }
];

export const COVERAGE_AREAS = [
  "Guadalajara",
  "León",
  "Querétaro",
  "Ciudad de México (CDMX)",
  "Monterrey"
];