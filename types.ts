import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
  subtitle?: string; // For "Local Guide", etc.
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MethodItem {
  title: string;
  description: string;
  icon: LucideIcon;
}