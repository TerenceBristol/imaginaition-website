// ImaginAItion Website Types

export interface Service {
  id: string;
  title: string;
  pricing: string;
  description: string;
  highlights: string[];
  examples: PortfolioItem[];
  category: 'main' | 'additional';
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  serviceType: 'fashion' | 'product' | 'avatar' | 'marketing' | 'branding' | 'training' | 'content';
  isPlaceholder: boolean;
}

export interface MainService extends Service {
  detailedPricing: {
    title: string;
    price: string;
    description: string;
    features: string[];
  }[];
  useCases: string[];
  benefits: string[];
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  calendlyUrl?: string;
  responseTime: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  keyMetrics?: {
    value: string;
    label: string;
  }[];
}

export interface ValueProposition {
  title: string;
  description: string;
}

export interface Company {
  name: string;
  tagline: string;
  mission: string;
  advantages: string[];
}

export interface FooterInfo {
  company: string;
  description: string;
  links: {
    services: NavigationItem[];
    company: NavigationItem[];
  };
}

export interface SiteConfig {
  company: Company;
  hero: Hero;
  services: {
    main: MainService[];
    additional: Service[];
  };
  valuePropositions: ValueProposition[];
  contact: ContactInfo;
  navigationItems: NavigationItem[];
  footerInfo: FooterInfo;
}

// Form Types (for future use)
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  serviceInterest?: string;
}

// Analytics and Tracking Types
export interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export interface PageSection {
  id: string;
  title: string;
  description?: string;
  visible: boolean;
} 