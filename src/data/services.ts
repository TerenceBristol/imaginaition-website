import { MainService, Service } from '@/types';
import { portfolioItems } from './portfolio';

// Helper function to get portfolio items by service type
const getPortfolioByServiceType = (serviceType: string) => {
  return portfolioItems.filter(item => item.serviceType === serviceType);
};

// Main Services (Full Spotlight Treatment)
export const mainServices: MainService[] = [
  {
    id: 'ai-fashion-models',
    title: 'AI Fashion Models',
    pricing: '₱99K base + ₱49K custom options',
    description: 'Complete creative freedom with infinite model variations and unlimited venues',
    highlights: [
      'Pre-made portfolio available',
      'Custom model creation',
      'Exclusive ownership',
      'Unlimited venues',
      '20-25 billboard-quality final images'
    ],
    examples: getPortfolioByServiceType('fashion'),
    category: 'main',
    detailedPricing: [
      {
        title: 'Ready-to-Use Models',
        price: '₱99K',
        description: 'Access to diverse, professional model portfolio',
        features: [
          'Unlimited draft generations to find perfect fit',
          '20-25 final billboard-quality upscaled images',
          'Multiple poses, backgrounds, styling options',
          'Immediate use for quick campaign launches'
        ]
      },
      {
        title: 'Custom Model Creation',
        price: '+₱49K add-on',
        description: 'Exclusive model ownership with lifetime usage rights',
        features: [
          'Custom facial features and styling aligned with your brand',
          'Fine-tuned AI model for consistent future generations',
          'Brand-aligned personality and aesthetic development',
          'Unlimited future use with your owned custom model'
        ]
      }
    ],
    useCases: [
      'Fashion & Apparel catalogs',
      'Beauty & Cosmetics campaigns',
      'Lifestyle brand content',
      'Traditional Filipino formal wear'
    ],
    benefits: [
      'Authentic Filipino demographics and international appeal',
      'Unlimited model variations',
      'One partnership investment, unlimited venues',
      '67% cost savings vs traditional ₱300K+ per venue'
    ]
  },
  {
    id: 'product-photography',
    title: 'AI Product Photography',
    pricing: '₱59K-89K tiered pricing',
    description: 'Your products in unlimited environments without physical limitations',
    highlights: [
      'Unlimited venues',
      'Before/after transformations',
      '70% cost savings',
      'Billboard-quality resolution',
      'Multiple product options'
    ],
    examples: getPortfolioByServiceType('product'),
    category: 'main',
    detailedPricing: [
      {
        title: 'Single Product Package',
        price: '₱59K',
        description: 'Perfect for product launches, testing, or focused campaigns',
        features: [
          '1 product with unlimited styling variations',
          '15-20 final high-resolution images',
          'Multiple backgrounds and lifestyle environments',
          'Professional lighting and composition in every shot',
          'Platform optimization for e-commerce and social media'
        ]
      },
      {
        title: 'Two Product Package',
        price: '₱89K',
        description: 'Ideal for product pairs, comparisons, or small collections',
        features: [
          '2 products with expanded styling options',
          '25-30 final images across both products',
          'Enhanced variety in environments and presentations',
          'Cross-product styling and comparison shots',
          'Comprehensive package for small product ranges'
        ]
      },
      {
        title: 'Multi-Product Package',
        price: 'Custom Pricing',
        description: 'For larger catalogs, seasonal collections, or comprehensive campaigns',
        features: [
          '3+ products with consultation-based pricing',
          'Volume discounts for extensive product ranges',
          'Comprehensive catalog solutions',
          'Brand consistency across entire product lines',
          'Custom timeline and delivery scheduling'
        ]
      }
    ],
    useCases: [
      'E-commerce platforms',
      'Beauty & Personal care',
      'Electronics & Technology',
      'Food & Beverage'
    ],
    benefits: [
      'Infinite venues, unlimited possibilities',
      'Billboard-quality resolution suitable for all applications',
      '70% cost savings vs traditional single-venue limitations',
      'No scheduling constraints or weather delays'
    ]
  },
  {
    id: 'talking-avatars',
    title: 'AI Talking Avatars & Human Cloning',
    pricing: '₱2K/min, 15-minute minimum',
    description: 'Interactive brand representatives with unlimited usage possibilities',
    highlights: [
      'Complete digital twin creation',
      'Multi-language support',
      'Voice cloning technology',
      'Unlimited usage rights',
      'Professional quality'
    ],
    examples: getPortfolioByServiceType('avatar'),
    category: 'main',
    detailedPricing: [
      {
        title: 'Talking Avatars',
        price: '₱2K per minute',
        description: 'Professional AI avatar creation aligned with your brand',
        features: [
          'Voice cloning technology for authentic brand representation',
          'Multi-language support (English, Tagalog, Taglish)',
          'Professional lip-sync and facial animation with natural gestures',
          'Brand-consistent styling and presentation across all content',
          'Multiple format delivery for various platforms and uses'
        ]
      },
      {
        title: 'Human Cloning Service',
        price: 'Included in base rate',
        description: 'Complete digital twin creation preserving unique characteristics',
        features: [
          'Authentic voice cloning from audio samples',
          'Exact facial features and expressions',
          'Natural hand movements and mannerisms',
          'Authentic speaking style and energy preservation',
          'Multiple looks: different outfits, backgrounds, camera angles'
        ]
      }
    ],
    useCases: [
      'Customer service videos (15-30 minutes)',
      'Marketing campaigns (15-45 minutes)',
      'Training content (30-90 minutes)',
      'Social media content series (15-60 minutes)'
    ],
    benefits: [
      'Interactive brand representatives with infinite content possibilities',
      'Complete digital twin: voice + appearance + gestures',
      'Multi-language support for complete market coverage',
      '60% cost reduction vs traditional video production'
    ]
  }
];

// Additional Services (Brief Showcase)
export const additionalServices: Service[] = [
  {
    id: 'ai-marketing-content',
    title: 'AI-Powered Marketing Content Creation',
    pricing: 'Custom consultation',
    description: 'Automated marketing content generation tailored to your brand voice and Philippine market insights',
    highlights: [
      'Brand voice consistency',
      'Philippine market optimization',
      'Multi-platform content',
      'Rapid content scaling'
    ],
    examples: getPortfolioByServiceType('marketing'),
    category: 'additional'
  },
  {
    id: 'brand-visual-identity',
    title: 'Brand Visual Identity Development',
    pricing: 'Custom consultation',
    description: 'AI-assisted brand identity design with cultural intelligence for Filipino market appeal',
    highlights: [
      'Cultural intelligence integration',
      'Complete visual identity system',
      'Market-tested designs',
      'Scalable brand assets'
    ],
    examples: getPortfolioByServiceType('branding'),
    category: 'additional'
  },
  {
    id: 'custom-ai-training',
    title: 'Custom AI Model Training',
    pricing: 'Enterprise consultation',
    description: 'Industry-specific AI model development for specialized creative needs and workflows',
    highlights: [
      'Industry-specific customization',
      'Proprietary model ownership',
      'Specialized workflow integration',
      'Ongoing model optimization'
    ],
    examples: getPortfolioByServiceType('training'),
    category: 'additional'
  },
  {
    id: 'realtime-ai-content',
    title: 'Real-Time AI Content Generation Tools',
    pricing: 'Custom consultation',
    description: 'Live AI content generation tools for immediate creative needs and rapid campaign deployment',
    highlights: [
      'Real-time generation capability',
      'Immediate campaign deployment',
      'Live editing and refinement',
      'Rapid iteration cycles'
    ],
    examples: getPortfolioByServiceType('content'),
    category: 'additional'
  }
];

// Combined services export
export const allServices = {
  main: mainServices,
  additional: additionalServices
}; 