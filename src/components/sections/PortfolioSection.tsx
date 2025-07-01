'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioItems, portfolioByService } from '@/data/portfolio';
import { PortfolioItem } from '@/types';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fashion' | 'product' | 'avatar'>('all');

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFilteredItems = () => {
    return activeFilter === 'all' ? portfolioItems : portfolioByService[activeFilter];
  };

  const PlaceholderImage = ({ item }: { item: PortfolioItem }) => (
    <div className="w-full h-64 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-200">
      <div className="text-center">
        <div className="text-gray-400 text-xs mb-2 uppercase tracking-wide">
          {item.serviceType} Portfolio
        </div>
        <div className="text-white font-montserrat font-medium text-lg mb-1">
          {item.title}
        </div>
        <div className="text-gray-300 text-sm px-4">
          {item.description}
        </div>
      </div>
    </div>
  );

  const filterButtons = [
    { key: 'all' as const, label: 'All Work', count: portfolioItems.length },
    { key: 'fashion' as const, label: 'AI Fashion Models', count: portfolioByService.fashion.length },
    { key: 'product' as const, label: 'Product Photography', count: portfolioByService.product.length },
    { key: 'avatar' as const, label: 'Talking Avatars', count: portfolioByService.avatar.length },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience unlimited creative possibilities through our AI-generated portfolio examples. 
            Each piece represents the infinite variations possible with our partnership approach.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {filter.label}
              <Badge 
                variant="secondary" 
                className="ml-2 bg-gray-700 text-gray-300"
              >
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getFilteredItems().map((item) => (
            <Card 
              key={item.id} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-0">
                <PlaceholderImage item={item} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className="text-blue-400 border-blue-500/30 bg-blue-500/10"
                    >
                      {item.serviceType.charAt(0).toUpperCase() + item.serviceType.slice(1)}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Note */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-white mb-3">
              Placeholder Portfolio Examples
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              These are branded placeholder examples showing the structure for your actual portfolio. 
              Replace these with your real AI-generated portfolio pieces to showcase your unlimited creative possibilities.
            </p>
          </div>
        </div>

        {/* Key Portfolio Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
              Unlimited Variations
            </h3>
            <p className="text-gray-400 text-sm">
              Every portfolio piece can be recreated in infinite variations across unlimited venues and styling options.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
              Billboard Quality
            </h3>
            <p className="text-gray-400 text-sm">
              Professional results suitable for all applications from social media to large-scale advertising campaigns.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
              7-Day Delivery
            </h3>
            <p className="text-gray-400 text-sm">
              Professional creative assets delivered in 7 days vs traditional 3-4 weeks coordination timeline.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            Ready to Create Your Unlimited Portfolio?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to explore infinite creative possibilities for your brand. 
            No physical limitations, no venue restrictions, no budget multiplication.
          </p>
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Creative Partnership
          </Button>
        </div>
      </div>
    </section>
  );
} 