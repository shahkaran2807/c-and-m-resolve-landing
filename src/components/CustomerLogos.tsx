
import React from 'react';

export const CustomerLogos = () => {
  const logos = [
    {
      name: 'TechCorp',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <rect x="10" y="10" width="20" height="20" fill="#374151" />
          <rect x="35" y="15" width="15" height="10" fill="#6B7280" />
          <rect x="55" y="12" width="25" height="16" fill="#374151" />
          <rect x="85" y="14" width="20" height="12" fill="#6B7280" />
        </svg>
      )
    },
    {
      name: 'GlobalFinance',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <circle cx="25" cy="20" r="12" fill="#374151" />
          <rect x="45" y="8" width="8" height="24" fill="#6B7280" />
          <rect x="58" y="12" width="8" height="16" fill="#374151" />
          <rect x="71" y="6" width="8" height="28" fill="#6B7280" />
          <rect x="84" y="10" width="8" height="20" fill="#374151" />
        </svg>
      )
    },
    {
      name: 'RetailGroup',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <polygon points="20,8 35,8 30,20 15,20" fill="#374151" />
          <rect x="40" y="12" width="20" height="16" fill="#6B7280" />
          <circle cx="75" cy="20" r="8" fill="#374151" />
          <rect x="88" y="14" width="12" height="12" fill="#6B7280" />
        </svg>
      )
    },
    {
      name: 'HealthCare Plus',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <rect x="15" y="16" width="20" height="8" fill="#374151" />
          <rect x="21" y="10" width="8" height="20" fill="#374151" />
          <rect x="45" y="12" width="15" height="16" fill="#6B7280" />
          <circle cx="75" cy="20" r="10" fill="#374151" />
          <rect x="90" y="8" width="6" height="24" fill="#6B7280" />
        </svg>
      )
    },
    {
      name: 'Manufacturing Co',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <rect x="10" y="15" width="25" height="10" fill="#374151" />
          <polygon points="40,10 55,10 50,25 45,25" fill="#6B7280" />
          <rect x="60" y="8" width="20" height="6" fill="#374151" />
          <rect x="60" y="18" width="20" height="6" fill="#374151" />
          <rect x="60" y="28" width="20" height="6" fill="#374151" />
          <circle cx="95" cy="20" r="8" fill="#6B7280" />
        </svg>
      )
    },
    {
      name: 'Service Solutions',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <rect x="15" y="12" width="12" height="16" fill="#374151" />
          <rect x="32" y="8" width="8" height="24" fill="#6B7280" />
          <rect x="45" y="14" width="16" height="12" fill="#374151" />
          <polygon points="70,10 85,10 80,30 75,30" fill="#6B7280" />
          <rect x="90" y="16" width="15" height="8" fill="#374151" />
        </svg>
      )
    },
    {
      name: 'Digital Ventures',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <rect x="12" y="10" width="16" height="20" fill="#374151" />
          <rect x="16" y="14" width="8" height="8" fill="white" />
          <circle cx="45" cy="20" r="6" fill="#6B7280" />
          <rect x="58" y="12" width="6" height="16" fill="#374151" />
          <rect x="70" y="8" width="6" height="24" fill="#6B7280" />
          <rect x="82" y="14" width="20" height="12" fill="#374151" />
        </svg>
      )
    },
    {
      name: 'Capital Partners',
      logo: (
        <svg className="w-12 h-8" viewBox="0 0 120 40" fill="none">
          <polygon points="20,8 30,8 35,20 25,20 15,20" fill="#374151" />
          <rect x="45" y="10" width="10" height="20" fill="#6B7280" />
          <circle cx="70" cy="20" r="8" fill="#374151" />
          <rect x="85" y="12" width="8" height="16" fill="#6B7280" />
          <rect x="98" y="8" width="8" height="24" fill="#374151" />
        </svg>
      )
    },
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
                  <div className="mb-1">{company.logo}</div>
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
