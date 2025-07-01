import { SiteConfig, MainService, Service } from '../types';

// Main Services (Full Spotlight Treatment)
const mainServices: MainService[] = [
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
    examples: [],
    category: 'main',
    detailedPricing: [
      {
        title: 'Ready-to-Use Models',
        price: '₱99K',
        description: 'Access to diverse, professional models',
        features: [
          'Pre-made diverse portfolio',
          '20-25 billboard-quality images',
          'Multiple styling options',
          'Commercial usage rights'
        ]
      },
      {
        title: 'Custom Model Creation',
        price: '+₱49K',
        description: 'Create your own exclusive AI model',
        features: [
          'Custom model training',
          'Exclusive ownership',
          'Brand-specific characteristics',
          'Unlimited future use'
        ]
      }
    ],
    useCases: [
      'Fashion brand campaigns',
      'E-commerce product modeling',
      'Social media content',
      'Billboard advertising',
      'Catalog photography'
    ],
    benefits: [
      'No model scheduling constraints',
      'Unlimited venue possibilities',
      'Consistent brand representation',
      'Cost-effective scaling',
      'Philippine market cultural alignment'
    ]
  },
  {
    id: 'product-photography',
    title: 'AI Product Photography',
    pricing: '₱59K-89K tiered pricing',
    description: 'Professional product photography with unlimited styling and venue options',
    highlights: [
      'Multiple pricing tiers',
      'Unlimited background options',
      'Professional lighting simulation',
      'Fast turnaround time',
      'High-resolution outputs'
    ],
    examples: [],
    category: 'main',
    detailedPricing: [
      {
        title: 'Essential Package',
        price: '₱59K',
        description: 'Perfect for small businesses',
        features: [
          '10-15 product variations',
          '5 background options',
          'Standard resolution',
          'Commercial license'
        ]
      },
      {
        title: 'Professional Package',
        price: '₱74K',
        description: 'Ideal for growing brands',
        features: [
          '20-25 product variations',
          '10 background options',
          'High resolution',
          'Lifestyle contexts',
          'Multiple angles'
        ]
      },
      {
        title: 'Enterprise Package',
        price: '₱89K',
        description: 'Comprehensive solution',
        features: [
          '30+ product variations',
          'Unlimited backgrounds',
          'Ultra-high resolution',
          'Custom styling',
          'Priority support'
        ]
      }
    ],
    useCases: [
      'E-commerce catalogs',
      'Marketing materials',
      'Social media content',
      'Print advertising',
      'Website imagery'
    ],
    benefits: [
      'No physical product handling',
      'Unlimited styling options',
      'Consistent brand aesthetic',
      'Rapid iteration capability',
      'Cost-effective production'
    ]
  },
  {
    id: 'talking-avatars',
    title: 'Talking Avatars & Human Cloning',
    pricing: '₱2K/min, 15min minimum',
    description: 'Realistic AI avatars and human clones for dynamic content creation',
    highlights: [
      'Realistic human cloning',
      'Multiple language support',
      'Custom voice integration',
      'Scalable content production',
      'Professional video quality'
    ],
    examples: [],
    category: 'main',
    detailedPricing: [
      {
        title: 'Standard Avatar',
        price: '₱2K/minute',
        description: 'Pre-made avatar with voice',
        features: [
          '15-minute minimum',
          'Standard voice options',
          'HD video quality',
          'Basic customization'
        ]
      },
      {
        title: 'Custom Human Clone',
        price: '₱2K/minute + ₱50K setup',
        description: 'Personalized human clone creation',
        features: [
          'Custom appearance modeling',
          'Voice cloning available',
          'Unlimited future use',
          'Brand personality alignment'
        ]
      }
    ],
    useCases: [
      'Corporate presentations',
      'Training videos',
      'Customer service',
      'Marketing campaigns',
      'Educational content'
    ],
    benefits: [
      'Consistent spokesperson availability',
      'Multilingual capabilities',
      'Cost-effective video production',
      'Scalable content creation',
      'Brand personality consistency'
    ]
  }
];

// Additional Services (Brief Showcase)
const additionalServices: Service[] = [
  {
    id: 'ai-marketing-content',
    title: 'AI-Powered Marketing Content',
    pricing: 'Custom pricing',
    description: 'Comprehensive marketing content creation using AI tools for campaigns, social media, and advertising materials.',
    highlights: [
      'Multi-format content creation',
      'Brand consistency maintenance',
      'Rapid content iteration',
      'Performance optimization'
    ],
    examples: [],
    category: 'additional'
  },
  {
    id: 'brand-visual-identity',
    title: 'Brand Visual Identity Development',
    pricing: 'Project-based',
    description: 'Complete brand visual identity creation using AI-assisted design processes for logos, color schemes, and brand guidelines.',
    highlights: [
      'Comprehensive brand packages',
      'AI-assisted design process',
      'Multiple concept variations',
      'Brand guideline creation'
    ],
    examples: [],
    category: 'additional'
  },
  {
    id: 'custom-ai-training',
    title: 'Custom AI Model Training',
    pricing: 'Enterprise quotes',
    description: 'Industry-specific AI model development and training for specialized creative applications and unique business requirements.',
    highlights: [
      'Industry-specific training',
      'Custom model development',
      'Ongoing model optimization',
      'Technical support included'
    ],
    examples: [],
    category: 'additional'
  },
  {
    id: 'realtime-content-tools',
    title: 'Real-Time AI Content Generation',
    pricing: 'Subscription-based',
    description: 'Advanced tools and systems for real-time content generation, enabling immediate creative output for dynamic marketing needs.',
    highlights: [
      'Real-time generation capabilities',
      'API integration available',
      'Scalable infrastructure',
      'Custom tool development'
    ],
    examples: [],
    category: 'additional'
  }
];

export const siteConfig: SiteConfig = {
  company: {
    name: 'ImaginAItion',
    tagline: 'Unlimited Creative Possibilities at 67% Less Cost',
    mission: 'Making impossible creative projects possible through AI while providing authentic Philippine market intelligence and partnership-focused service.',
    advantages: [
      'Partnership vs vendor approach - we\'re your creative partner',
      '67% cost savings vs traditional ₱300K+ per venue approach',
      'Unlimited venues and infinite variations without physical limitations',
      'Philippine market cultural intelligence and expertise',
      'Creative partnership with aligned success incentives',
      'Professional billboard-quality results in 7 days vs 3-4 weeks',
      'Complete creative freedom without scheduling constraints',
      'Scalable solutions that grow with your brand'
    ]
  },
  
  hero: {
    headline: 'Unlimited Creative Possibilities',
    subheadline: 'at 67% Less Cost',
    description: 'AI creative services for Philippine brands. Professional AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.',
    primaryCTA: {
      text: 'Book Free Consultation',
      href: '#contact'
    },
    secondaryCTA: {
      text: 'Explore Services',
      href: '#services'
    },
    keyMetrics: [
      {
        value: '67%',
        label: 'Cost Savings'
      },
      {
        value: '7 Days',
        label: 'Delivery'
      },
      {
        value: '∞',
        label: 'Venues'
      }
    ]
  },

  services: {
    main: mainServices,
    additional: additionalServices
  },

  valuePropositions: [
    {
      title: 'Partnership Approach',
      description: 'We\'re your creative partner, not just another vendor. Our success is tied to your creative success.'
    },
    {
      title: 'Philippine Market Intelligence',
      description: 'Authentic Filipino representation with deep cultural intelligence built into every creative output.'
    },
    {
      title: 'Unlimited Creative Freedom',
      description: 'No venue restrictions, no weather delays, no scheduling constraints. Infinite possibilities, instant iteration.'
    },
    {
      title: '67% Cost Savings',
      description: 'Dramatically reduce production costs while expanding creative possibilities. More budget for media and testing.'
    }
  ],

  contact: {
    email: 'hello@imaginaition.ph',
    whatsapp: '+639165801711',
    responseTime: 'Within 4 hours',
    calendlyUrl: undefined // To be added later
  },

  navigationItems: [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ],

  footerInfo: {
    company: 'ImaginAItion',
    description: 'AI creative services partnership for Philippine brands. Unlimited creative possibilities with authentic market intelligence and 67% cost savings.',
    links: {
      services: [
        { name: 'AI Fashion Models', href: '#services' },
        { name: 'Product Photography', href: '#services' },
        { name: 'Talking Avatars', href: '#services' },
        { name: 'Marketing Content', href: '#services' }
      ],
      company: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Partnership', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  }
};

// Export individual parts for easier access
export const { services, contact, navigationItems, footerInfo } = siteConfig;
export { mainServices, additionalServices }; 