'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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

  const PlaceholderImage = ({ title, serviceType }: { title: string; serviceType: string }) => (
    <div className="w-full h-48 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 text-sm mb-2">{serviceType.toUpperCase()} EXAMPLE</div>
        <div className="text-white font-montserrat font-medium text-base">{title}</div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            AI Creative Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete creative freedom without physical limitations. Professional billboard-quality results with unlimited venues and infinite possibilities.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.main.map((service) => (
            <Card key={service.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-200 overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/20">
                    Featured Service
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-montserrat font-bold text-white">
                      {service.pricing.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.pricing.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Service Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-montserrat font-semibold text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio Examples */}
                <div className="mb-6">
                  <h4 className="text-lg font-montserrat font-semibold text-white mb-3">
                    Portfolio Examples
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {/* Create 2 placeholder examples per service */}
                    <PlaceholderImage 
                      title={`${service.title} Example 1`}
                      serviceType={service.id.split('-')[1] || 'service'}
                    />
                    <PlaceholderImage 
                      title={`${service.title} Example 2`}
                      serviceType={service.id.split('-')[1] || 'service'}
                    />
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-montserrat font-semibold text-white mb-3">
                    Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
                >
                  Get Started with {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="border-t border-gray-800 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI creative solutions for specialized needs and industry-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.additional.map((service) => (
              <Card key={service.id} className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-gray-400 border-gray-600">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-400 text-sm">
                        <svg className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium px-8 py-3 text-lg transition-all duration-200"
            >
              Discuss Custom Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 