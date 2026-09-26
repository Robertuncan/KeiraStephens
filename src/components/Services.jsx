import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

/**
 * Services section showcasing core craft commissions with elevated cards
 * plus secondary architectural capabilities.
 */
export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section-padding bg-[#FAF9F5]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={business.services.eyebrow}
          title={business.services.title}
          description={business.services.description}
          align="center"
        />

        {/* 3 across on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {business.services.items.map((service) => (
            <ServiceCard
              key={service.id}
              item={service}
              onSelect={onSelectService}
              contactHref="#contact"
            />
          ))}
        </div>

        {/* Secondary Services / Complementary Joinery Capabilities */}
        {business.services.secondaryServices && (
          <div className="bg-[#F3EFEA] rounded-[16px] p-8 md:p-10 border border-[rgba(36,51,41,0.06)]">
            <div className="max-w-2xl mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#9B7E58] block mb-1">
                Additional Workshop Capabilities
              </span>
              <h3 className="text-xl md:text-2xl text-[#1C201D] font-normal">
                Specialized architectural woodwork & period restorations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {business.services.secondaryServices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#56615A] leading-relaxed"
                >
                  <span className="text-[#9B7E58] font-bold text-base mt-[-2px] select-none">
                    +
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
