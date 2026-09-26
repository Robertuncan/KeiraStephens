import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Refined editorial navbar adhering to the 3-Zone Top Bar Contract.
 * Zone 1: Single text element wordmark
 * Zone 2: Clean text navigation links
 * Zone 3: Primary CTA action
 * Protected surface for immediate legibility on page load and over hero media.
 */
export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[rgba(36,51,41,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] py-4'
          : 'bg-[#FAF9F5]/90 backdrop-blur-sm border-b border-[rgba(36,51,41,0.05)] py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#"
          className="font-heading text-2xl md:text-[1.75rem] font-medium tracking-tight text-[#1C201D] hover:text-[#243329] transition-colors whitespace-nowrap"
        >
          {business.name}
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#56615A]">
          {business.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1C201D] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9B7E58] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action & workshop phone */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#56615A] hover:text-[#243329] tracking-wider uppercase"
          >
            <Phone className="w-3.5 h-3.5 text-[#9B7E58]" />
            <span>{business.phoneNumber}</span>
          </a>
          <Button
            variant="primary"
            onClick={onOpenConsultation || (() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            })}
            className="text-xs md:text-sm py-2.5 px-5"
          >
            {business.ctas.main}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C201D] hover:text-[#243329] rounded-[8px] focus-visible:outline-2 focus-visible:outline-[#9B7E58]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F5] border-b border-[rgba(36,51,41,0.12)] px-6 py-6 shadow-xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4">
            {business.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-[#1C201D] hover:text-[#C47B46] py-1 border-b border-[rgba(36,51,41,0.06)]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="primary"
                onClick={() => {
                  closeMenu();
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full text-center"
              >
                {business.ctas.main}
              </Button>

              <div className="flex items-center justify-between pt-2 text-sm text-[#56615A]">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#1C201D]"
                >
                  <Phone className="w-4 h-4 text-[#9B7E58]" />
                  <span>Call Workshop</span>
                </a>
                {business.whatsAppRaw && (
                  <a
                    href={`https://wa.me/${business.whatsAppRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#1C201D]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#243329]" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
