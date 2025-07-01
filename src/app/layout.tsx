import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { AccessibilityProvider, SkipLinks } from "@/components/accessibility/AccessibilityEnhancements";
import { StagewiseToolbar } from '@stagewise/toolbar-next';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "ImaginAItion - Unlimited Creative Possibilities at 67% Less Cost",
  description: "AI creative services for Philippine brands. AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.",
  keywords: [
    "AI creative services Philippines", 
    "AI fashion models", 
    "AI product photography", 
    "talking avatars", 
    "Philippine brands",
    "AI model training",
    "digital marketing Philippines",
    "creative agency Philippines"
  ],
  authors: [{ name: "ImaginAItion" }],
  creator: "ImaginAItion",
  publisher: "ImaginAItion",
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "ImaginAItion - Unlimited Creative Possibilities",
    description: "AI creative services for Philippine brands with 67% cost savings and unlimited venues.",
    url: "https://imaginaition.ph",
    siteName: "ImaginAItion",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://imaginaition.ph/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ImaginAItion - AI Creative Services Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ImaginAItion - Unlimited Creative Possibilities",
    description: "AI creative services for Philippine brands with 67% cost savings.",
    creator: "@imaginaition",
    images: ["https://imaginaition.ph/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://imaginaition.ph",
  },
  other: {
    "contact": "hello@imaginaition.ph",
    "coverage": "Philippines",
    "distribution": "global",
    "rating": "general",
  },
};

const skipLinks = [
  { href: "#main-content", text: "Skip to main content" },
  { href: "#navigation", text: "Skip to navigation" },
  { href: "#services", text: "Skip to services" },
  { href: "#contact", text: "Skip to contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ImaginAItion",
              description: "AI creative services for Philippine brands",
              url: "https://imaginaition.ph",
              logo: "https://imaginaition.ph/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+639165801711",
                contactType: "Customer Service",
                areaServed: "PH",
                availableLanguage: ["English", "Filipino"]
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PH"
              },
              sameAs: [
                "https://facebook.com/imaginaition",
                "https://instagram.com/imaginaition"
              ],
              offers: [
                {
                  "@type": "Service",
                  name: "AI Fashion Models",
                  description: "Custom AI fashion models for Philippine brands",
                  priceCurrency: "PHP",
                  price: "99000"
                },
                {
                  "@type": "Service", 
                  name: "Product Photography",
                  description: "AI-powered product photography services",
                  priceCurrency: "PHP",
                  price: "59000"
                },
                {
                  "@type": "Service",
                  name: "Talking Avatars",
                  description: "AI talking avatars and human cloning",
                  priceCurrency: "PHP",
                  price: "2000"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <StagewiseToolbar />
        <AccessibilityProvider>
          <SkipLinks links={skipLinks} />
          {children}
          <ScrollToTop />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
