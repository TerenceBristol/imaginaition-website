import Script from 'next/script';

interface SEOEnhancementsProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

export function SEOEnhancements({
  title = 'ImaginAItion - Unlimited Creative Possibilities at 67% Less Cost',
  description = 'AI creative services for Philippine brands. AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.',
  canonical = 'https://imaginaition.ph',
  ogImage = 'https://imaginaition.ph/og-image.jpg',
  jsonLd
}: SEOEnhancementsProps) {
  
  // Generate comprehensive structured data
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://imaginaition.ph/#organization",
        name: "ImaginAItion",
        url: "https://imaginaition.ph",
        logo: {
          "@type": "ImageObject",
          url: "https://imaginaition.ph/logo.png",
          width: 512,
          height: 512
        },
        description: "AI creative services for Philippine brands with unlimited creative possibilities",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+639165801711",
          contactType: "Customer Service",
          areaServed: "PH",
          availableLanguage: ["English", "Filipino"],
          email: "hello@imaginaition.ph"
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "PH",
          addressRegion: "Philippines"
        },
        sameAs: [
          "https://facebook.com/imaginaition",
          "https://instagram.com/imaginaition",
          "https://linkedin.com/company/imaginaition"
        ],
        founder: {
          "@type": "Person",
          name: "ImaginAItion Team"
        },
        foundingDate: "2024",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "5-10"
        },
        keywords: [
          "AI creative services Philippines",
          "AI fashion models",
          "AI product photography", 
          "talking avatars",
          "Philippine brands",
          "digital marketing",
          "creative agency"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://imaginaition.ph/#website",
        url: "https://imaginaition.ph",
        name: "ImaginAItion",
        description: "AI creative services for Philippine brands",
        publisher: {
          "@id": "https://imaginaition.ph/#organization"
        },
        inLanguage: "en-PH",
        copyrightYear: "2024"
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}/#webpage`,
        url: canonical,
        name: title,
        description: description,
        isPartOf: {
          "@id": "https://imaginaition.ph/#website"
        },
        about: {
          "@id": "https://imaginaition.ph/#organization"
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://imaginaition.ph"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "@id": "https://imaginaition.ph/#ai-fashion-models",
        name: "AI Fashion Models",
        description: "Custom AI fashion models for Philippine brands with unlimited venues and creative freedom",
        provider: {
          "@id": "https://imaginaition.ph/#organization"
        },
        areaServed: "PH",
        offers: {
          "@type": "Offer",
          price: "99000",
          priceCurrency: "PHP",
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          category: "AI Creative Services"
        }
      },
      {
        "@type": "Service", 
        "@id": "https://imaginaition.ph/#product-photography",
        name: "AI Product Photography",
        description: "Professional AI-powered product photography services with unlimited creative possibilities",
        provider: {
          "@id": "https://imaginaition.ph/#organization"
        },
        areaServed: "PH",
        offers: {
          "@type": "Offer",
          price: "59000",
          priceCurrency: "PHP",
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          category: "AI Creative Services"
        }
      },
      {
        "@type": "Service",
        "@id": "https://imaginaition.ph/#talking-avatars",
        name: "Talking Avatars & Human Cloning",
        description: "AI talking avatars and human cloning technology for marketing and communication",
        provider: {
          "@id": "https://imaginaition.ph/#organization"
        },
        areaServed: "PH",
        offers: {
          "@type": "Offer",
          price: "2000",
          priceCurrency: "PHP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2000",
            priceCurrency: "PHP",
            unitText: "per minute",
            minimumQuantity: 15
          },
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          category: "AI Creative Services"
        }
      }
    ]
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: '${title}',
            page_location: '${canonical}',
            send_page_view: true
          });
        `}
      </Script>

      {/* Meta Pixel (Facebook) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Rich Snippets for Contact Information */}
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "ImaginAItion",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+639165801711",
                  contactType: "Customer Service",
                  areaServed: "PH",
                  availableLanguage: ["English", "Filipino"],
                  hoursAvailable: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00"
                    }
                  ]
                },
                {
                  "@type": "ContactPoint",
                  email: "hello@imaginaition.ph",
                  contactType: "Customer Service",
                  areaServed: "PH"
                }
              ]
            }
          })
        }}
      />

      {/* Local Business Structured Data */}
      <Script
        id="local-business-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "ImaginAItion",
            image: ogImage,
            "@id": "https://imaginaition.ph",
            url: "https://imaginaition.ph",
            telephone: "+639165801711",
            address: {
              "@type": "PostalAddress",
              addressCountry: "PH"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 14.5995,
              longitude: 120.9842
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00"
            },
            sameAs: [
              "https://facebook.com/imaginaition",
              "https://instagram.com/imaginaition"
            ],
            priceRange: "₱₱₱",
            serviceArea: {
              "@type": "Country",
              name: "Philippines"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Creative Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Fashion Models"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service", 
                    name: "AI Product Photography"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Talking Avatars"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Structured Data */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is ImaginAItion?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ImaginAItion is a Philippine-based AI creative services company offering AI fashion models, product photography, and talking avatars with unlimited creative possibilities at 67% less cost than traditional methods."
                }
              },
              {
                "@type": "Question",
                name: "How much do AI fashion models cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI fashion models start at ₱99,000 base price with custom variations available for ₱49,000 additional. This includes unlimited venues and complete creative freedom."
                }
              },
              {
                "@type": "Question",
                name: "What areas does ImaginAItion serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ImaginAItion primarily serves Philippine brands and businesses, offering AI creative services specifically tailored for the Philippine market."
                }
              },
              {
                "@type": "Question",
                name: "How can I contact ImaginAItion?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact ImaginAItion via phone at +639165801711, email at hello@imaginaition.ph, or through the contact form on our website."
                }
              }
            ]
          })
        }}
      />

      {/* Performance and Core Web Vitals Monitoring */}
      <Script id="web-vitals" strategy="afterInteractive">
        {`
          // Core Web Vitals monitoring
          import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            function sendToGoogleAnalytics(metric) {
              gtag('event', metric.name, {
                event_category: 'Web Vitals',
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                event_label: metric.id,
                non_interaction: true,
              });
            }
            
            getCLS(sendToGoogleAnalytics);
            getFID(sendToGoogleAnalytics);
            getFCP(sendToGoogleAnalytics);
            getLCP(sendToGoogleAnalytics);
            getTTFB(sendToGoogleAnalytics);
          });
        `}
      </Script>
    </>
  );
}

// SEO utility functions
export function generateMetaTags(page: {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}) {
  const defaultTitle = 'ImaginAItion - Unlimited Creative Possibilities at 67% Less Cost';
  const defaultDescription = 'AI creative services for Philippine brands. AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.';
  const defaultKeywords = ['AI creative services Philippines', 'AI fashion models', 'AI product photography', 'talking avatars', 'Philippine brands'];
  
  return {
    title: page.title || defaultTitle,
    description: page.description || defaultDescription,
    keywords: page.keywords?.join(', ') || defaultKeywords.join(', '),
    openGraph: {
      title: page.title || defaultTitle,
      description: page.description || defaultDescription,
      url: page.canonical || 'https://imaginaition.ph',
      siteName: 'ImaginAItion',
      images: [
        {
          url: page.ogImage || 'https://imaginaition.ph/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ImaginAItion - AI Creative Services Philippines',
        },
      ],
      locale: 'en_PH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title || defaultTitle,
      description: page.description || defaultDescription,
      images: [page.ogImage || 'https://imaginaition.ph/twitter-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: page.canonical || 'https://imaginaition.ph',
    },
  };
} 