import React from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * About Section:
 * Refined two-column editorial layout celebrating craft, local timber provenance,
 * and workshop philosophy.
 */
export default function About({ onOpenConsultation }) {
  return (
    <section id="about" className="section-padding bg-[#F3EFEA] border-y border-[rgba(36,51,41,0.06)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="eyebrow">{business.about.eyebrow}</span>
            <h2 className="text-[#1C201D] font-normal tracking-tight mb-6 text-balance">
              {business.about.title}
            </h2>

            <p className="text-[#56615A] text-base md:text-lg leading-relaxed mb-8">
              {business.about.description}
            </p>

            {/* Editorial Quote */}
            {business.about.quote && (
              <blockquote className="border-l-2 border-[#9B7E58] pl-6 py-2 my-8 italic text-[#1C201D] font-serif text-lg md:text-xl leading-relaxed">
                "{business.about.quote}"
              </blockquote>
            )}

            {/* Grounded Stats */}
            {business.about.stats && business.about.stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[rgba(36,51,41,0.1)] mb-8">
                {business.about.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-heading text-2xl md:text-3xl text-[#243329] font-medium mb-1 tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm text-[#56615A] leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div>
              <Button
                variant="primary"
                onClick={onOpenConsultation || (() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
              >
                Arrange Workshop Visit
              </Button>
            </div>
          </div>

          {/* Media Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-[16px] border border-[rgba(36,51,41,0.1)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] aspect-[4/5] bg-[#FAF9F5]">
                <img
                  src={business.about.image}
                  alt="Morrow and Finch artisan woodworker workshop in Bath"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              {business.about.imageCaption && (
                <div className="mt-3 text-xs text-[#7A857F] tracking-wide flex items-center justify-between">
                  <span>{business.about.imageCaption}</span>
                  <span>Walcot, Bath</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
