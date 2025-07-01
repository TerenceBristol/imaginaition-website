'use client';

import React from 'react';
import { siteConfig, footerInfo } from '@/data/site-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else if (href.startsWith('mailto:') || href.startsWith('https://wa.me/')) {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-montserrat font-bold text-white">
                {footerInfo.company}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              {footerInfo.description}
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Email:</span>{' '}
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">WhatsApp:</span>{' '}
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Response Time:</span>{' '}
                {siteConfig.contact.responseTime}
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerInfo.links.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerInfo.links.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} {footerInfo.company}. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Unlimited Creative Possibilities • AI Creative Services Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 