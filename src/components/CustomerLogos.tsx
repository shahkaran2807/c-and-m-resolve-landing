
import React from 'react';

export const CustomerLogos = () => {
  // Mock customer logos - in a real app, these would be actual logo URLs
  const logos = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'GlobalFinance', logo: '🏦' },
    { name: 'RetailGroup', logo: '🏪' },
    { name: 'HealthCare Plus', logo: '🏥' },
    { name: 'Manufacturing Co', logo: '🏭' },
    { name: 'Service Solutions', logo: '⚙️' },
    { name: 'Digital Ventures', logo: '💻' },
    { name: 'Capital Partners', logo: '💼' },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600">Trusted by Leading Companies</h3>
        </div>
        
        {/* Moving strip container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{company.logo}</div>
                  <div className="text-xs font-medium text-gray-600">{company.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
