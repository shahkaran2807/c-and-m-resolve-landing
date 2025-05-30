
import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">C & M Associates Group, Inc.</h3>
            <p className="text-gray-300 mb-4">
              Professional debt collection and recovery services focused on consumer-friendly solutions.
            </p>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-300">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-300">info@cmassociatesgroup.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Information</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. 
              We are committed to treating all consumers with respect and dignity while working towards 
              feasible debt resolution solutions.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 C & M Associates Group, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
