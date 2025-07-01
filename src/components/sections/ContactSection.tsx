'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/data/site-config';

export function ContactSection() {
  const { contact } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
    budget: ''
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ImaginAItion! I'm interested in discussing AI creative services for my brand. I'd like to book a consultation to explore how we can work together.`
    );
    const whatsappNumber = contact.whatsapp.replace('+', '');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For MVP, we'll show success and redirect to WhatsApp
      setSubmitStatus('success');
      
      // Auto-redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        const message = encodeURIComponent(
          `Hi ImaginAItion! I just submitted a consultation request through your website. Here are my details:\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nService Interest: ${formData.service}\nBudget Range: ${formData.budget}\n\nMessage: ${formData.message}\n\nLooking forward to discussing our partnership!`
        );
        const whatsappNumber = contact.whatsapp.replace('+', '');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      }, 2000);
      
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      title: 'WhatsApp (Preferred)',
      description: 'Instant response for urgent consultations',
      contact: contact.whatsapp,
      action: 'Message on WhatsApp',
      onClick: handleWhatsAppClick,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      title: 'Email',
      description: 'Detailed project discussions',
      contact: contact.email,
      action: 'Send Email',
      onClick: () => {
        window.location.href = `mailto:${contact.email}?subject=AI Creative Services Consultation&body=Hi ImaginAItion team,%0D%0A%0D%0AI'm interested in exploring your AI creative services for my brand. I'd like to discuss:%0D%0A%0D%0A- Service interest:%0D%0A- Project timeline:%0D%0A- Budget range:%0D%0A%0D%0ALooking forward to hearing from you!`;
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to explore unlimited creative possibilities? Let&apos;s discuss how we can transform your brand&apos;s creative approach with AI partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                            {method.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-montserrat font-semibold text-white mb-2">
                            {method.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-3">
                            {method.description}
                          </p>
                          <p className="text-white font-medium mb-4">
                            {method.contact}
                          </p>
                          <Button
                            onClick={method.onClick}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
                            aria-label={`${method.action} - ${method.contact}`}
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="text-blue-300 font-medium text-sm">
                    We&apos;re committed to quick partnership discussions
                  </div>
                </div>
                <p className="text-blue-200 text-sm mt-2">
                  Response time: {contact.responseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-white">
                  Book Your Free Consultation
                </CardTitle>
                <p className="text-gray-300">
                  Tell us about your project and we&apos;ll get back to you with a customized partnership proposal.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-4">Your consultation request has been submitted successfully.</p>
                    <p className="text-blue-400 text-sm">Redirecting to WhatsApp for immediate discussion...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-white">Company</Label>
                        <Input 
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your company name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service" className="text-white">Service Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={(e) => handleInputChange(e)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
                          disabled={isSubmitting}
                        >
                          <option value="">Select a service</option>
                          <option value="AI Fashion Models">AI Fashion Models</option>
                          <option value="Product Photography">Product Photography</option>
                          <option value="Talking Avatars">Talking Avatars</option>
                          <option value="Marketing Content">Marketing Content</option>
                          <option value="Brand Identity">Brand Visual Identity</option>
                          <option value="Custom AI Training">Custom AI Training</option>
                          <option value="Multiple Services">Multiple Services</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-white">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange(e)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:ring-blue-500"
                          disabled={isSubmitting}
                        >
                          <option value="">Select budget range</option>
                          <option value="₱50K - ₱100K">₱50K - ₱100K</option>
                          <option value="₱100K - ₱200K">₱100K - ₱200K</option>
                          <option value="₱200K - ₱500K">₱200K - ₱500K</option>
                          <option value="₱500K+">₱500K+</option>
                          <option value="Let's discuss">Let&apos;s discuss</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Project Details</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        disabled={isSubmitting}
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-600/20 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm">
                          There was an error submitting your form. Please try again or contact us directly via WhatsApp.
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          'Submit Consultation Request'
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="flex-1 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-3 transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        Contact via WhatsApp (Preferred)
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                For immediate consultation, please use WhatsApp or email above for fastest response.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            Why Partner With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-montserrat font-bold text-blue-400 mb-2">67%</div>
              <div className="text-lg text-white mb-1">Cost Savings</div>
              <div className="text-gray-400 text-sm">vs traditional approaches</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-blue-400 mb-2">7 Days</div>
              <div className="text-lg text-white mb-1">Delivery Time</div>
              <div className="text-gray-400 text-sm">Billboard-quality results</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg text-white mb-1">Creative Possibilities</div>
              <div className="text-gray-400 text-sm">Unlimited venues & variations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 