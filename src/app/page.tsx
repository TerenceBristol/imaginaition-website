'use client';

import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ScrollProgress, ScrollToTop } from '@/components/ui/scroll-progress';
import { useScrollBehavior } from '@/hooks/useScrollBehavior';

const sections = [
  { id: 'hero', name: 'Hero' },
  { id: 'services', name: 'Services' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' }
];

export default function Home() {
  const { scrollProgress, scrollToSection, isScrolling } = useScrollBehavior(sections);

  const handleScrollToTop = () => {
    scrollToSection('hero');
  };

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress progress={scrollProgress} isScrolling={isScrolling} />
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop 
        scrollProgress={scrollProgress} 
        onScrollToTop={handleScrollToTop}
        isVisible={true}
      />
    </div>
  );
}
