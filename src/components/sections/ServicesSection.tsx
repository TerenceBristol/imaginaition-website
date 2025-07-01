'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PortfolioCarousel } from '@/components/ui/portfolio-carousel';
import { AccessibleHeading, Landmark } from '@/components/accessibility/AccessibilityEnhancements';
import { siteConfig } from '@/data/site-config';

export function ServicesSection() {
  const { services } = siteConfig;

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Landmark role="main" ariaLabel="AI Creative Services">
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <AccessibleHeading 
              level={2} 
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              AI Creative Services
            </AccessibleHeading>
            <p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
              role="doc-subtitle"
              aria-describedby="services-heading"
            >
              Complete creative freedom without physical limitations. Professional billboard-quality results with unlimited venues and infinite possibilities.
            </p>
          </div>

        {/* Main Services - Mobile-First Single Column Layout */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          {services.main.map((service, index) => (
            <Card 
              key={service.id} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {/* Service Header - Mobile Responsive */}
                <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-600/30 to-blue-500/30 text-blue-300 border-blue-400/30 px-3 sm:px-4 py-1.5 font-medium hover:from-blue-500/40 hover:to-blue-400/40 transition-all duration-300 text-sm sm:text-base w-fit"
                      >
                        ✨ Featured Service
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="text-gray-400 border-gray-600 px-2 sm:px-3 py-1 hover:border-gray-500 hover:text-gray-300 transition-all duration-300 text-xs sm:text-sm w-fit"
                      >
                        {index + 1} of {services.main.length}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </div>
                  
                  {/* Enhanced Pricing Display - Mobile Optimized */}
                  <div className="sm:text-right sm:ml-6 lg:ml-8 w-full sm:w-auto">
                    <div className="flex items-center justify-center sm:justify-end">
                      <div className="relative bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-700/20 border-2 border-blue-500/40 rounded-xl px-6 sm:px-8 py-4 sm:py-6 text-center backdrop-blur-sm hover:from-blue-500/25 hover:via-blue-400/20 hover:to-blue-600/25 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-400 hover:scale-105 transform w-full sm:w-auto max-w-xs sm:max-w-none">
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-blue-300 mb-1 group-hover:text-blue-200 transition-colors duration-300">
                            {service.pricing.split(' ')[0]}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                            {service.pricing.split(' ').slice(1).join(' ')}
                          </div>
                          
                          {/* Premium badge */}
                          <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-pulse">
                              <span className="text-xs font-bold text-black">★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Carousel with Mobile Enhancement */}
                <div className="mb-6 sm:mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02] transition-transform duration-500">
                    <PortfolioCarousel items={service.examples} />
                  </div>
                </div>

                {/* Service Content Grid - Mobile Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                  {/* Left Column: Features */}
                  <div className="bg-gray-900/30 rounded-lg p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/50 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-montserrat font-semibold text-white mb-4 sm:mb-5 flex items-center">
                      <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></div>
                      Key Features
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {service.highlights.map((highlight, index) => (
                        <li 
                          key={index} 
                          className="flex items-start text-gray-300 hover:text-gray-100 transition-colors duration-200 group/item"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 relative">
                            <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <span className="leading-relaxed font-medium text-sm sm:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Benefits */}
                  <div className="bg-gray-900/30 rounded-lg p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/50 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-montserrat font-semibold text-white mb-4 sm:mb-5 flex items-center">
                      <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></div>
                      Key Benefits
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li 
                          key={index} 
                          className="flex items-start text-gray-300 hover:text-gray-100 transition-colors duration-200 group/item"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 relative">
                            <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <span className="leading-relaxed font-medium text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enhanced CTA Button - Mobile Optimized */}
                <div className="flex justify-center sm:justify-start">
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transform hover:scale-105 hover:-translate-y-1 group/button overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="hidden sm:inline">Get Started with {service.title}</span>
                      <span className="sm:hidden">Get Started</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services - Mobile-Enhanced Layout */}
        <div className="border-t border-gray-800 pt-12 sm:pt-16">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <AccessibleHeading 
              level={3} 
              id="additional-services-heading"
              className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-3 sm:mb-4"
            >
              Additional Services
            </AccessibleHeading>
            <p 
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2"
              aria-describedby="additional-services-heading"
            >
              Comprehensive AI creative solutions for specialized needs and industry-specific requirements.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {services.additional.map((service, index) => (
              <Card 
                key={service.id} 
                className="bg-gray-900/40 border-gray-700 hover:bg-gray-900/60 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Service Header - Mobile Responsive */}
                  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Badge 
                          variant="outline" 
                          className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 text-purple-300 border-purple-400/30 px-3 sm:px-4 py-1.5 font-medium hover:from-purple-500/30 hover:to-purple-400/30 transition-all duration-300 text-sm sm:text-base w-fit"
                        >
                          {service.pricing}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className="text-gray-400 border-gray-600 px-2 sm:px-3 py-1 hover:border-gray-500 hover:text-gray-300 transition-all duration-300 text-xs sm:text-sm w-fit"
                        >
                          Additional {index + 1} of {services.additional.length}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Portfolio Carousel */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 transform group-hover:scale-[1.005] sm:group-hover:scale-[1.01] transition-transform duration-500">
                      <PortfolioCarousel items={service.examples} />
                    </div>
                  </div>

                  {/* Service Features - Mobile Optimized */}
                  <div className="mb-4 sm:mb-6">
                    <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-300">
                      <h4 className="text-base sm:text-lg font-montserrat font-semibold text-white mb-3 sm:mb-4 flex items-center">
                        <div className="w-2 h-5 sm:h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mr-3"></div>
                        Service Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {service.highlights.map((highlight, index) => (
                          <div 
                            key={index} 
                            className="flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-200 group/item"
                          >
                            <div className="w-4 h-4 mr-3 flex-shrink-0">
                              <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="font-medium text-sm sm:text-base">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Button - Mobile Optimized */}
                  <div className="flex justify-center sm:justify-start">
                    <Button
                      onClick={() => scrollToSection('#contact')}
                      variant="outline"
                      className="border-2 border-purple-500/60 text-purple-300 hover:bg-purple-500 hover:text-white hover:border-purple-400 font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 group/button w-full sm:w-auto max-w-sm sm:max-w-none"
                    >
                      <span className="flex items-center justify-center">
                        <span className="hidden sm:inline">Learn More About {service.title}</span>
                        <span className="sm:hidden">Learn More</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Landmark>
  );
} 