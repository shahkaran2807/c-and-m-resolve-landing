
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Sent",
      description: "We'll contact you within 24 hours to discuss your debt recovery needs.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partner with Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to improve your debt recovery performance across all sectors? Contact us to 
            discuss how we can help maximize collections while protecting your organization's reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Start a Partnership Discussion</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your organization name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your business email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tell us about your debt recovery needs, account types, or any questions you have"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Send Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">Toll-Free: (877) 337-1783</p>
                      <p className="text-gray-600">Fax: (708) 469-1694</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">adam.goldberg@cmassociatesinc.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Mailing Address</p>
                      <p className="text-gray-600">PO Box 7070<br />Westchester, IL 60154</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-900 mr-4 mt-1" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-900 rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-3">Ready to Discuss Partnership?</h4>
              <p className="text-blue-100 mb-4">
                Call us directly to speak with our team about how we can help improve your debt recovery performance.
              </p>
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                <Phone className="h-4 w-4 mr-2" />
                Call Now: (877) 337-1783
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
