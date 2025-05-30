
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
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/4354e2de-416e-402c-bcb9-f6d356402f53.png')`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
      
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
          
          {/* Empty space for the background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};
