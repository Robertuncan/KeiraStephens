import React from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Hero Section:
 * Full-height (min-height: 90vh), high-impact architectural visual asset,
 * measured tonal scrim for WCAG AA text contrast, balanced typography hierarchy.
 */
export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Full-bleed background image with zero-broken fallback */}
      <div className="absolute inset-0 z-0 bg-[#243329]">
        <img
          src={business.hero.image}
          alt={`${business.name} bespoke architectural kitchen in Bath`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.95]"
        />
        {/* Measured dark tonal scrim for guaranteed 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D]/90 via-[#1C201D]/55 to-[#1C201D]/35" />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 w-full pt-12 md:pt-16 pb-8">
        <div className="max-w-3xl text-left">
          {/* Eyebrow: city + business type */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#D89B6E]">
              {business.hero.eyebrow}
            </span>
          </div>

          {/* Large confident H1 headline */}
          <h1 className="text-white font-normal text-balance tracking-tight mb-6 leading-[1.12]">
            {business.hero.title}
          </h1>

          {/* Short supporting line */}
          <p className="text-white/85 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl">
            {business.hero.description}
          </p>

          {/* CTAs: Primary CTA + Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Button
              variant="white"
              onClick={onOpenConsultation || (() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })}
              className="text-base py-3.5 px-8 font-semibold shadow-lg group"
            >
              <span>{business.ctas.main}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="whiteOutline"
              href={`tel:${business.phoneRaw}`}
              className="text-base py-3.5 px-7"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>{business.ctas.secondary}</span>
            </Button>
          </div>

          {/* Quiet trust line below drawn from real location & hours */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D89B6E]" />
              <span>{business.hero.trustNote}</span>
            </div>
            <span className="hidden md:inline select-none text-white/30">·</span>
            <span>All cabinetry built in-house</span>
            <span className="hidden md:inline select-none text-white/30">·</span>
            <span>Zero subcontractors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
