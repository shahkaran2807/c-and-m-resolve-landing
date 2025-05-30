
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      {/* Background image positioned on the right side */}
      <div 
        className="absolute right-0 top-0 w-3/5 h-full bg-contain bg-right bg-no-repeat opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(239, 246, 255, 1) 0%, rgba(239, 246, 255, 0.95) 5%, rgba(239, 246, 255, 0.9) 10%, rgba(239, 246, 255, 0.85) 15%, rgba(239, 246, 255, 0.8) 20%, rgba(239, 246, 255, 0.7) 25%, rgba(239, 246, 255, 0.6) 30%, rgba(239, 246, 255, 0.5) 35%, rgba(239, 246, 255, 0.4) 40%, rgba(239, 246, 255, 0.3) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.02) 80%, rgba(255, 255, 255, 0.01) 90%, rgba(255, 255, 255, 0) 100%), url('/lovable-uploads/bae3d8d6-a0ab-4ae3-9967-a5fa8109ec9d.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Debt <span className="text-blue-900">Recovery Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with us for effective debt recovery services that maximize collections 
              while maintaining positive relationships with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* This div is kept for layout purposes but content removed since background image is now used */}
          </div>
        </div>
      </div>
    </section>
  );
};
