/* ============================================
   Shared type definitions
   ============================================ */

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Service {
  title: string;
  price: string;
  description: string;
}
