
import React from 'react';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Account Transfer",
      description: "Secure transfer of charged-off accounts with complete documentation and customer history."
    },
    {
      number: "02",
      title: "Portfolio Analysis",
      description: "Comprehensive review of account portfolio to develop optimal recovery strategies for each segment."
    },
    {
      number: "03",
      title: "Strategic Outreach",
      description: "Professional, compliant contact with debtors using proven communication strategies that protect your brand."
    },
    {
      number: "04",
      title: "Payment Facilitation",
      description: "Flexible payment solutions and arrangements that maximize recovery while accommodating debtor circumstances."
    },
    {
      number: "05",
      title: "Reporting & Remittance",
      description: "Detailed reporting on collection activities and prompt remittance of recovered funds to your institution."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Partnership Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, transparent approach to debt recovery that maximizes results 
            while protecting your institution's reputation and maintaining full compliance.
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-blue-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Ready to Partner with Us?
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can help improve your institution's debt recovery performance.
          </p>
          <div className="text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
