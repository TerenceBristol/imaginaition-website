'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { navigationItems, siteConfig } from '@/data/site-config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
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
              onClick={() => scrollToSection('hero')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('hero'))}
              className="text-2xl lg:text-3xl font-montserrat font-bold text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="ImaginAItion - Go to homepage"
            >
              {siteConfig.company.name}
            </button>
          </div>

          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.href.replace('#', '')))}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
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
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(item.href.replace('#', '')))}
                      className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
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