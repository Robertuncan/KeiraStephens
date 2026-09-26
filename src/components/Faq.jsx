import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * FAQ Section:
 * 4 concise, genuine craft questions in a clean accordion layout.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || business.faq.length === 0) {
    return null;
  }

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding bg-[#F3EFEA] border-t border-[rgba(36,51,41,0.06)]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Practical Details"
          title="Common questions about commissioning our workshop."
          description="Everything you need to know about our design process, build timeline, and architectural consultations."
          align="center"
        />

        <div className="max-w-3xl mx-auto divide-y divide-[rgba(36,51,41,0.1)] border-y border-[rgba(36,51,41,0.1)]">
          {business.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9B7E58]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg md:text-xl text-[#1C201D] group-hover:text-[#243329] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9B7E58] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm md:text-base text-[#56615A] leading-relaxed pr-8 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
