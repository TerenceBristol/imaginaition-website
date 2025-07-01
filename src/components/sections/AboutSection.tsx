'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-config';

export function AboutSection() {
  const { company } = siteConfig;

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partnershipFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partnership Over Vendor',
      description: 'We&apos;re your creative partner, not just another vendor. Our success is tied to your brand&apos;s creative success.',
      benefits: [
        'Collaborative approach to creative solutions',
        'Aligned incentives for long-term success',
        'Dedicated partnership manager'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Philippine Market Intelligence',
      description: 'Deep understanding of Filipino demographics, cultural nuances, and market preferences built into every creative output.',
      benefits: [
        'Authentic Filipino representation',
        'Cultural intelligence integration',
        'Local market optimization'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Unlimited Creative Freedom',
      description: 'Break free from physical limitations. No venue restrictions, no weather delays, no scheduling constraints.',
      benefits: [
        'Infinite venue possibilities',
        'Rapid creative iteration',
        'No physical limitations'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: '67% Cost Savings',
      description: 'Dramatically reduce creative production costs while expanding possibilities. More budget for media spend and testing.',
      benefits: [
        '67% cost reduction vs traditional',
        'No budget multiplication across venues',
        'More budget for media and testing'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Partnership Over Software
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {company.mission}
          </p>
        </div>

        {/* Partnership Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnershipFeatures.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
              Why Choose ImaginAItion?
            </h3>
            <p className="text-lg text-gray-400">
              Our unique advantages in the AI creative services landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-blue-400 mb-2">67%</div>
            <div className="text-lg text-white mb-1">Cost Savings</div>
            <div className="text-sm text-gray-400">vs traditional ₱300K+ per venue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-blue-400 mb-2">7</div>
            <div className="text-lg text-white mb-1">Days Delivery</div>
            <div className="text-sm text-gray-400">vs 3-4 weeks traditional coordination</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-montserrat font-bold text-blue-400 mb-2">∞</div>
            <div className="text-lg text-white mb-1">Unlimited Venues</div>
            <div className="text-sm text-gray-400">No physical limitations</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            Our Mission
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            &ldquo;Making impossible creative projects possible through AI while providing authentic Philippine market intelligence and partnership-focused service.&rdquo;
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference of true partnership over vendor relationships. 
            Let&apos;s explore unlimited creative possibilities for your brand together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              Start Partnership
            </Button>
            <Button
              onClick={() => scrollToSection('#services')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 min-w-[200px]"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 