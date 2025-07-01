'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-config';

export function HeroSection() {
  const { hero } = siteConfig;

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6">
            {hero.headline}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {hero.subheadline}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {hero.keyMetrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-montserrat font-bold text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection(hero.primaryCTA.href)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
          >
            {hero.primaryCTA.text}
          </Button>
          {hero.secondaryCTA && (
            <Button
              onClick={() => scrollToSection(hero.secondaryCTA!.href)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 min-w-[200px]"
            >
              {hero.secondaryCTA.text}
            </Button>
          )}
        </div>

        {/* Value Proposition Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {siteConfig.valuePropositions.slice(0, 4).map((proposition, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-200">
                <h3 className="text-lg font-montserrat font-semibold text-white mb-3">
                  {proposition.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {proposition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200"
        >
          <span className="text-sm mb-2">Explore Services</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
} 