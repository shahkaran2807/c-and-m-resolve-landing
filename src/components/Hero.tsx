
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Clock } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
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
          
          {/* New content section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">95% Success Rate</h3>
                  <p className="text-gray-600">Our proven methods deliver exceptional recovery rates while preserving customer relationships.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Fully Compliant</h3>
                  <p className="text-gray-600">All our practices strictly adhere to industry regulations and ethical standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-purple-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Fast Results</h3>
                  <p className="text-gray-600">See improvements in your cash flow within the first 30 days of partnership.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">$50M+</div>
                <div className="text-gray-600">Successfully recovered for our clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
