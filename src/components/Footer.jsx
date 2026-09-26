import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { business } from '../config/business';

/**
 * Footer:
 * Calm, minimal, editorial footer containing business name, address,
 * contact links, opening hours summary, and copyright.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C201D] text-[#FAF9F5] pt-16 pb-12 border-t border-black/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand & Statement (4 cols) */}
          <div className="lg:col-span-4">
            <span className="font-heading text-2xl font-medium tracking-tight block mb-3 text-white">
              {business.name}
            </span>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              {business.tagline} Handcrafted bespoke kitchens, architectural libraries, and fine cabinetry built for generations in Bath, Somerset.
            </p>
            <div className="text-xs text-white/40">
              Registered in England & Wales · {business.legalName}
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D89B6E] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {business.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D89B6E] mb-4">
              Walcot Workshop
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D89B6E] shrink-0 mt-1" />
                <span>{business.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D89B6E] shrink-0" />
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {business.phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D89B6E] shrink-0" />
                <a
                  href={`mailto:${business.emailAddress}`}
                  className="hover:text-white transition-colors"
                >
                  {business.emailAddress}
                </a>
              </div>
            </div>
          </div>

          {/* Consultation Hours (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D89B6E] mb-4">
              Opening Hours
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              {business.openingHours.map((schedule, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{schedule.days}</span>
                  <span className="text-white/90 font-medium tabular-nums">
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors py-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
