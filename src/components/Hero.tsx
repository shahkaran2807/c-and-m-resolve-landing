
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
              Debt Resolution <span className="text-blue-900">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We specialize in consumer collection and recovery, working with you to find 
              feasible solutions that improve your credit history and financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3"
              >
                <Phone className="h-5 w-5 mr-2" />
                Speak with a Specialist
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get Information
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Consumer-focused approach</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Feasible payment solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Credit history improvement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Professional, respectful service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
