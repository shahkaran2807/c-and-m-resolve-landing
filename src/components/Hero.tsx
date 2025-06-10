
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePayOnline = () => {
    window.open('https://www.quantumpayments.com/?apikey=f6eCreTa', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turning Debt into <span className="text-blue-900">Opportunity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with us for effective debt recovery services that maximize collections 
              while maintaining positive relationships with your customers.
            </p>
          </div>
          
          {/* Buttons Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 w-full max-w-xs"
            >
              Learn More
            </Button>
            <Button 
              onClick={handlePayOnline}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 w-full max-w-xs"
              size="lg"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
