
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CustomerLogos } from '@/components/CustomerLogos';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CustomerLogos />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
