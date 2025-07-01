import { PortfolioItem } from '../types';

// Portfolio Examples - Using placeholder images for MVP
export const portfolioItems: PortfolioItem[] = [
  // AI Fashion Models Examples
  {
    id: 'fashion-1',
    title: 'Corporate Fashion Collection',
    description: 'Professional Filipino models in contemporary business attire across multiple venue settings',
    image: '/portfolio/fashion-model-example-1.jpg',
    serviceType: 'fashion',
    isPlaceholder: true
  },
  {
    id: 'fashion-2',
    title: 'Traditional Filipino Formal Wear',
    description: 'Elegant models showcasing traditional Filipino formal wear with modern styling',
    image: '/portfolio/fashion-model-example-2.jpg',
    serviceType: 'fashion',
    isPlaceholder: true
  },
  {
    id: 'fashion-3',
    title: 'Lifestyle Fashion Campaign',
    description: 'Casual lifestyle modeling for contemporary Filipino fashion brands',
    image: '/portfolio/fashion-model-example-3.jpg',
    serviceType: 'fashion',
    isPlaceholder: true
  },

  // Product Photography Examples
  {
    id: 'product-1',
    title: 'Electronics Product Showcase',
    description: 'High-end electronics with professional lighting and multiple angle variations',
    image: '/portfolio/product-photography-example-1.jpg',
    serviceType: 'product',
    isPlaceholder: true
  },
  {
    id: 'product-2',
    title: 'Beauty & Cosmetics Collection',
    description: 'Professional cosmetics photography with lifestyle and studio contexts',
    image: '/portfolio/product-photography-example-2.jpg',
    serviceType: 'product',
    isPlaceholder: true
  },
  {
    id: 'product-3',
    title: 'Fashion Accessories Campaign',
    description: 'Jewelry and accessories with unlimited background and styling options',
    image: '/portfolio/product-photography-example-3.jpg',
    serviceType: 'product',
    isPlaceholder: true
  },

  // Talking Avatars Examples
  {
    id: 'avatar-1',
    title: 'Corporate Spokesperson Avatar',
    description: 'Professional business avatar for corporate communications and presentations',
    image: '/portfolio/talking-avatar-example-1.jpg',
    serviceType: 'avatar',
    isPlaceholder: true
  },
  {
    id: 'avatar-2',
    title: 'Customer Service Representative',
    description: 'Friendly customer service avatar with multilingual capabilities',
    image: '/portfolio/talking-avatar-example-2.jpg',
    serviceType: 'avatar',
    isPlaceholder: true
  },
  {
    id: 'avatar-3',
    title: 'Training & Educational Content',
    description: 'Educational avatar for training videos and instructional content',
    image: '/portfolio/talking-avatar-example-3.jpg',
    serviceType: 'avatar',
    isPlaceholder: true
  }
];

// Portfolio organized by service type for filtering
export const portfolioByService = {
  fashion: portfolioItems.filter(item => item.serviceType === 'fashion'),
  product: portfolioItems.filter(item => item.serviceType === 'product'),
  avatar: portfolioItems.filter(item => item.serviceType === 'avatar'),
  marketing: portfolioItems.filter(item => item.serviceType === 'marketing'),
  branding: portfolioItems.filter(item => item.serviceType === 'branding'),
  training: portfolioItems.filter(item => item.serviceType === 'training'),
  content: portfolioItems.filter(item => item.serviceType === 'content')
};

// Portfolio statistics
export const portfolioStats = {
  totalItems: portfolioItems.length,
  byServiceType: {
    fashion: portfolioByService.fashion.length,
    product: portfolioByService.product.length,
    avatar: portfolioByService.avatar.length,
    marketing: portfolioByService.marketing.length,
    branding: portfolioByService.branding.length,
    training: portfolioByService.training.length,
    content: portfolioByService.content.length
  }
};

// Helper function to get portfolio items for a specific service
export const getPortfolioByServiceType = (serviceType: string): PortfolioItem[] => {
  return portfolioItems.filter(item => item.serviceType === serviceType);
};

// Helper function to get featured portfolio items (first 6 for homepage)
export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return portfolioItems.slice(0, 6);
}; 