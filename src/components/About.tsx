
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
            partnering with financial institutions to maximize debt recovery while maintaining compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Partnership Approach</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When debt is transferred to our company, it has already gone through your internal 
              collection process. Our expertise lies in working with consumers in a manner that is 
              feasible for all parties - the consumer, your institution, and us.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that maintaining positive customer relationships is crucial for your 
              business, which is why we focus on respectful, compliant collection practices that 
              protect your brand reputation.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h4>
            <p className="text-blue-800">
              To provide professional debt recovery services that maximize collections for our 
              financial institution partners while maintaining the highest standards of compliance 
              and customer service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership-Focused</h3>
              <p className="text-gray-600">
                We work as an extension of your team, aligned with your institution's values and goals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                Our proven strategies maximize recovery rates while minimizing risk and maintaining compliance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reputation Protection</h3>
              <p className="text-gray-600">
                We safeguard your brand reputation through respectful and professional collection practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
