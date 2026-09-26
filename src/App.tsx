import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features?: string[];
  image: string;
  tag: string;
}

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // pre-focus form
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 500);
    }
  };

  const handleOpenConsultation = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 400);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1C201D] selection:bg-[#9B7E58]/20 selection:text-[#1C201D]">
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main className="flex-1">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <Services onSelectService={handleSelectService} />
        <About onOpenConsultation={handleOpenConsultation} />
        <WhyChooseUs />
        <Testimonials />
        <Contact selectedService={selectedService} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
