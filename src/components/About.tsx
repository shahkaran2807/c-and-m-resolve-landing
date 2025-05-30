
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About C & M Associates Group, Inc.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a collection agency that specializes in consumer collection and recovery, 
            committed to helping consumers resolve their debt while improving their credit history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Commitment</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Debt with our company has already gone through the original creditor's internal 
              collection process. Our job is to work with consumers in a manner that is feasible 
              to the consumer, the original creditor, and us.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that financial difficulties can happen to anyone, and we're here to 
              help you find a path forward that works for your unique situation.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h4>
            <p className="text-blue-800">
              To provide professional, respectful debt resolution services that help consumers 
              regain financial stability while maintaining the trust of our creditor partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consumer-Focused</h3>
              <p className="text-gray-600">
                We prioritize working with consumers to find solutions that fit their financial situation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                Our goal is successful debt resolution that benefits all parties involved.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate</h3>
              <p className="text-gray-600">
                We treat every consumer with respect and understanding throughout the process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
