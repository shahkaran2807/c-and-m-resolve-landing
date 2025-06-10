
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, FileText, Building, Scale } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "First-Party Collections",
      description: "Direct collection services for your institution's internal collection efforts and customer accounts."
    },
    {
      icon: FileText,
      title: "Third-Party Collections",
      description: "Professional debt recovery services for accounts that have exhausted internal collection efforts."
    },
    {
      icon: Building,
      title: "Commercial Collections",
      description: "Specialized collection services for business-to-business debt recovery and commercial accounts."
    },
    {
      icon: Scale,
      title: "Collections for Attorneys",
      description: "Dedicated collection services supporting law firms and legal professionals with debt recovery."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive debt recovery solutions designed to maximize collections for financial 
            institutions while maintaining compliance and protecting customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader className="text-center pb-4">
                <service.icon className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Ready to Improve Your Recovery Rates?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Partner with our experienced team to turn your charged-off accounts into recovered revenue 
            while maintaining your institution's reputation and compliance standards.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Partnership Discussion
          </button>
        </div>
      </div>
    </section>
  );
};
