
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3"
              >
                <Phone className="h-5 w-5 mr-2" />
                Partner with Us
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3"
              >
                <Mail className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Financial Institutions Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Higher recovery rates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Compliant collection practices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Preserve customer relationships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Detailed reporting and transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
