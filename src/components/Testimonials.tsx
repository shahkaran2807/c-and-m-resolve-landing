
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their professional approach to debt recovery helped us maintain positive relationships with our customers while significantly improving our collection rates.",
      author: "Sarah Johnson",
      title: "CFO",
      company: "TechCorp Solutions"
    },
    {
      quote: "Outstanding service and results. They recovered debts we thought were uncollectible while preserving our brand reputation.",
      author: "Michael Chen",
      title: "Finance Director",
      company: "Global Retail Group"
    },
    {
      quote: "The team's expertise and ethical approach to debt collection has been invaluable to our business. Highly recommended.",
      author: "Emma Williams",
      title: "Operations Manager",
      company: "Healthcare Plus"
    },
    {
      quote: "Professional, efficient, and effective. They've helped us streamline our collection process and improve cash flow significantly.",
      author: "David Rodriguez",
      title: "Business Owner",
      company: "Manufacturing Solutions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses who have transformed their debt recovery with our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <svg className="w-8 h-8 text-blue-900 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-lg text-gray-700 italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-blue-900 font-medium">{testimonial.title}</p>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
