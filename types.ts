import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  risks: string;
  process: string;
  prevention: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
  subtitle?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface MethodItem {
  title: string;
  description: string;
  icon: LucideIcon;
  isEco?: boolean;
}