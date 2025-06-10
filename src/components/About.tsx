import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About CnM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a full-service collection agency specializing in comprehensive debt recovery 
            across all sectors - consumer, commercial, and specialized accounts for various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Comprehensive Approach</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We handle all types of debt collection - from consumer accounts to complex commercial 
              recoveries. Our expertise spans multiple industries and account types, ensuring that 
              we have the specialized knowledge to maximize your recovery rates across all sectors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is built on understanding that different types of debt require different 
              strategies. We tailor our collection methods to each account type while maintaining 
              the highest standards of compliance and professionalism across all sectors.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h4>
            <p className="text-blue-800">
              To provide comprehensive debt recovery services across all sectors, maximizing 
              collections for our diverse client base while maintaining the highest standards 
              of compliance, professionalism, and relationship preservation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Sector Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge across consumer, commercial, healthcare, and legal sectors.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Strategies</h3>
              <p className="text-gray-600">
                Customized collection approaches designed for each account type and industry requirement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship Protection</h3>
              <p className="text-gray-600">
                Professional practices that protect your business relationships across all client types.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
