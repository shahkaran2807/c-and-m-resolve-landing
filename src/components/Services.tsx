
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, FileText, Phone, CheckCircle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Consumer Collection",
      description: "Professional debt collection services focused on finding feasible solutions for consumers."
    },
    {
      icon: FileText,
      title: "Payment Plans",
      description: "Flexible payment arrangements tailored to your financial situation and capabilities."
    },
    {
      icon: Phone,
      title: "Consultation Services",
      description: "Free consultations to discuss your debt situation and explore available options."
    },
    {
      icon: CheckCircle,
      title: "Credit Improvement",
      description: "Work towards resolving debt to help improve your credit history and financial standing."
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
            We offer comprehensive debt resolution services designed to help you regain 
            financial stability while working within your means.
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
          <h3 className="text-2xl font-semibold mb-4">Need Help Understanding Your Options?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experienced team is here to explain your situation and work with you to find a solution 
            that fits your financial circumstances.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
