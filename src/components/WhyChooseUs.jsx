import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Why Choose Us section:
 * 4 concise trust points drawn strictly from USPs, hours, and workshop location.
 * Numbered editorial layout, no fake stats.
 */
export default function WhyChooseUs() {
  const { eyebrow, title, description, points } = business.whyChooseUs;

  return (
    <section id="why-us" className="section-padding bg-[#FAF9F5]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className="flex flex-col p-6 rounded-[16px] bg-white border border-[rgba(36,51,41,0.06)] shadow-[0_4px_20px_-4px_rgba(28,32,29,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(28,32,29,0.08)] transition-all duration-200"
            >
              {/* Editorial Number */}
              <div className="text-3xl font-heading text-[#9B7E58] font-light mb-4 select-none">
                {point.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-[#1C201D] mb-2 leading-snug">
                {point.title}
              </h3>

              {/* One line / short paragraph */}
              <p className="text-sm text-[#56615A] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
