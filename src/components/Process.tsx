
import React from 'react';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Contact",
      description: "We reach out to discuss your debt situation and explain your options in a respectful, professional manner."
    },
    {
      number: "02",
      title: "Assessment",
      description: "We review your financial situation to understand what payment arrangements might work for you."
    },
    {
      number: "03",
      title: "Solution Planning",
      description: "Together, we develop a feasible payment plan that fits your budget and helps resolve your debt."
    },
    {
      number: "04",
      title: "Implementation",
      description: "We implement the agreed-upon solution and provide ongoing support throughout the process."
    },
    {
      number: "05",
      title: "Resolution",
      description: "Complete your payment plan and work towards improving your credit history and financial standing."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured, consumer-friendly approach to debt resolution that 
            prioritizes your financial well-being and future success.
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
            Ready to Start the Process?
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Contact us today to begin working towards a debt resolution solution that works for your situation.
          </p>
          <div className="text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
