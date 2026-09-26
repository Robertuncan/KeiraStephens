import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section:
 * Rendered conditionally if real testimonials exist.
 * Styled as quiet, elegant quote cards with unboxed author metadata.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-[#F3EFEA] border-t border-[rgba(36,51,41,0.06)]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Client Commissions"
          title="Enduring woodwork, appreciated every day."
          description="Reflections from homeowners and architects who have commissioned our workshop across Bath, Somerset, and Wiltshire."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {business.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] p-8 rounded-[16px] border border-[rgba(36,51,41,0.08)] shadow-[0_4px_20px_-4px_rgba(28,32,29,0.04)] flex flex-col justify-between"
            >
              <div>
                <span className="text-[#9B7E58] font-serif text-3xl leading-none select-none block mb-4">
                  “
                </span>
                <p className="text-[#1C201D] text-base leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Unboxed author attribution (zero-pill discipline) */}
              <div className="pt-4 border-t border-[rgba(36,51,41,0.08)]">
                <div className="font-semibold text-sm text-[#1C201D]">
                  {item.author}
                </div>
                <div className="text-xs text-[#56615A] mt-0.5 flex items-center gap-1.5">
                  <span>{item.location}</span>
                  {item.project && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#9B7E58]">{item.project}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
