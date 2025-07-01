'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { navigationItems, siteConfig } from '@/data/site-config';
import { useScrollBehavior } from '@/hooks/useScrollBehavior';

const sections = [
  { id: 'hero', name: 'Hero' },
  { id: 'services', name: 'Services' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollBehavior(sections);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <header 
      id="navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('hero')}
              onKeyDown={(e) => handleKeyDown(e, () => handleNavigation('hero'))}
              className="text-2xl lg:text-3xl font-montserrat font-bold text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="ImaginAItion - Go to homepage"
            >
              {siteConfig.company.name}
            </button>
          </div>

          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(sectionId)}
                      onKeyDown={(e) => handleKeyDown(e, () => handleNavigation(sectionId))}
                      className={`font-medium transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1 ${
                        isActive 
                          ? 'text-blue-400' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      aria-label={`Navigate to ${item.name} section`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-200 ${
                        isActive 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNavigation('contact')}
              onKeyDown={(e) => handleKeyDown(e, () => handleNavigation('contact'))}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Book a consultation - Go to contact section"
            >
              Book Consultation
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav 
            className="md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-xl border-t border-white/10 mt-1">
              <ul className="space-y-1">
                {navigationItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(sectionId)}
                        onKeyDown={(e) => handleKeyDown(e, () => handleNavigation(sectionId))}
                        className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md ${
                          isActive 
                            ? 'text-blue-400 bg-blue-600/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        aria-label={`Navigate to ${item.name} section`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-4">
                <Button
                  onClick={() => handleNavigation('contact')}
                  onKeyDown={(e) => handleKeyDown(e, () => handleNavigation('contact'))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Book a consultation - Go to contact section"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 