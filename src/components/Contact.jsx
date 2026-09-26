import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Contact Section:
 * Conversion-focused, effortless contact actions (Call, WhatsApp, Email, Directions),
 * workshop opening hours, and an interactive front-end consultation booking form.
 */
export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService ? selectedService.title : 'Bespoke Architectural Kitchens',
    roomDimensions: '',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({
        state: 'error',
        message: 'Please provide both your name and an email address so we can reply.',
      });
      return;
    }

    setStatus({ state: 'submitting', message: '' });

    // Simulate clean brief submission
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}. We have received your project details for "${formData.service}". A master joiner will review your dimensions and get in touch within one working day.`,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Bespoke Architectural Kitchens',
        roomDimensions: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="section-padding bg-[#FAF9F5]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct contact actions & workshop hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="eyebrow">Direct Contact</span>
              <h2 className="text-[#1C201D] font-normal tracking-tight mb-4">
                Begin a conversation with our workshop.
              </h2>
              <p className="text-[#56615A] text-base leading-relaxed mb-8">
                Whether you have architectural elevations or simply an idea for your home, we invite you to call, write, or schedule a workshop consultation in Bath.
              </p>

              {/* Direct Action Links */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-[12px] bg-white border border-[rgba(36,51,41,0.08)] hover:border-[#243329] hover:shadow-[0_4px_16px_rgba(28,32,29,0.06)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-[8px] bg-[#FAF9F5] flex items-center justify-center text-[#243329] group-hover:bg-[#243329] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#7A857F] font-semibold">
                      Telephone
                    </div>
                    <div className="text-sm md:text-base font-semibold text-[#1C201D]">
                      {business.phoneNumber}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${business.emailAddress}`}
                  className="flex items-center gap-4 p-4 rounded-[12px] bg-white border border-[rgba(36,51,41,0.08)] hover:border-[#243329] hover:shadow-[0_4px_16px_rgba(28,32,29,0.06)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-[8px] bg-[#FAF9F5] flex items-center justify-center text-[#243329] group-hover:bg-[#243329] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#7A857F] font-semibold">
                      Email
                    </div>
                    <div className="text-sm md:text-base font-semibold text-[#1C201D]">
                      {business.emailAddress}
                    </div>
                  </div>
                </a>

                {/* WhatsApp if available */}
                {business.whatsAppNumber && (
                  <a
                    href={`https://wa.me/${business.whatsAppRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[12px] bg-white border border-[rgba(36,51,41,0.08)] hover:border-[#243329] hover:shadow-[0_4px_16px_rgba(28,32,29,0.06)] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-[8px] bg-[#FAF9F5] flex items-center justify-center text-[#243329] group-hover:bg-[#243329] group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#7A857F] font-semibold">
                        WhatsApp (Plans & Photos)
                      </div>
                      <div className="text-sm md:text-base font-semibold text-[#1C201D]">
                        {business.whatsAppNumber}
                      </div>
                    </div>
                  </a>
                )}
              </div>

              {/* Location & Directions */}
              <div className="p-6 rounded-[12px] bg-[#F3EFEA] border border-[rgba(36,51,41,0.06)] mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#9B7E58] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#7A857F] font-semibold mb-0.5">
                      Workshop & Studio
                    </div>
                    <div className="text-sm text-[#1C201D] font-medium leading-relaxed">
                      {business.fullAddress}
                    </div>
                  </div>
                </div>

                <a
                  href={business.googleMapsLink || `https://maps.google.com/?q=${encodeURIComponent(business.fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#243329] hover:text-[#C47B46] transition-colors"
                >
                  <span>{business.ctas.directions}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-6 border-t border-[rgba(36,51,41,0.08)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#7A857F] mb-3">
                <Clock className="w-3.5 h-3.5 text-[#9B7E58]" />
                <span>Workshop & Consultation Hours</span>
              </div>
              <dl className="space-y-1.5 text-sm">
                {business.openingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between text-[#56615A]">
                    <dt className="font-normal">{schedule.days}</dt>
                    <dd className="font-medium text-[#1C201D] tabular-nums">
                      {schedule.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[16px] border border-[rgba(36,51,41,0.08)] shadow-[0_4px_24px_-4px_rgba(28,32,29,0.06)]">
              <h3 className="text-2xl text-[#1C201D] font-normal mb-2">
                Request a Design Consultation
              </h3>
              <p className="text-sm text-[#56615A] mb-8">
                Share a few preliminary details about your home or commission. We will reply promptly with guidance and sample availability.
              </p>

              {status.state === 'success' ? (
                <div className="p-6 rounded-[12px] bg-[#243329]/5 border border-[#243329]/20 text-[#243329] animate-in fade-in duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#243329] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-base mb-1">
                        Consultation Request Received
                      </h4>
                      <p className="text-sm text-[#56615A] leading-relaxed">
                        {status.message}
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus({ state: 'idle', message: '' })}
                        className="mt-4 text-xs font-semibold text-[#243329] hover:underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.state === 'error' && (
                    <div className="p-3 text-xs rounded-[8px] bg-red-50 border border-red-200 text-red-700">
                      {status.message}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#56615A] mb-2"
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. David Campbell"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(36,51,41,0.15)] bg-[#FAF9F5] text-[#1C201D] placeholder-[#A0AAA3] text-sm focus:border-[#243329] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#56615A] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="david@example.co.uk"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(36,51,41,0.15)] bg-[#FAF9F5] text-[#1C201D] placeholder-[#A0AAA3] text-sm focus:border-[#243329] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#56615A] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01225 000 000"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(36,51,41,0.15)] bg-[#FAF9F5] text-[#1C201D] placeholder-[#A0AAA3] text-sm focus:border-[#243329] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#56615A] mb-2"
                      >
                        Commission Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(36,51,41,0.15)] bg-[#FAF9F5] text-[#1C201D] text-sm focus:border-[#243329] focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="Bespoke Architectural Kitchens">
                          Bespoke Architectural Kitchen
                        </option>
                        <option value="Architectural Libraries & Built-ins">
                          Architectural Library or Built-in Suite
                        </option>
                        <option value="Commissioned Furniture & Dining Tables">
                          Commissioned Table or Fine Furniture
                        </option>
                        <option value="Heritage Restoration & Joinery">
                          Heritage Joinery Restoration
                        </option>
                        <option value="Full Residence Commission">
                          Full Residence Joinery Package
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#56615A] mb-2"
                    >
                      Project Notes / Timeline (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the property, preferred timber species (oak, walnut, painted), or whether you have architect plans..."
                      className="w-full px-4 py-3 rounded-[8px] border border-[rgba(36,51,41,0.15)] bg-[#FAF9F5] text-[#1C201D] placeholder-[#A0AAA3] text-sm focus:border-[#243329] focus:bg-white focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status.state === 'submitting'}
                      className="w-full sm:w-auto"
                    >
                      {status.state === 'submitting'
                        ? 'Sending Brief...'
                        : business.ctas.inquire}
                    </Button>
                    <span className="hidden sm:inline text-xs text-[#7A857F]">
                      No obligations · Direct workshop response
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
