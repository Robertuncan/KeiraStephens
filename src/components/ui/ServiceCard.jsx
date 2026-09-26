import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Elevated ServiceCard with image zoom, clean typography, zero-pill metadata.
 */
export default function ServiceCard({
  item,
  onSelect,
  contactHref = '#contact',
}) {
  return (
    <div className="group flex flex-col bg-white rounded-[16px] border border-[rgba(36,51,41,0.08)] overflow-hidden shadow-[0_4px_20px_-4px_rgba(28,32,29,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(28,32,29,0.12)] transition-all duration-300">
      {/* Image container with fixed aspect ratio and hover zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFEA]">
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle tonal gradient scrim to ground the card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        {/* Clean unboxed tag */}
        <div className="flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#9B7E58] mb-2">
          <span>{item.tag}</span>
          <span aria-hidden="true">·</span>
          <span>In-House Workshop</span>
        </div>

        <h3 className="text-xl md:text-2xl text-[#1C201D] mb-3 group-hover:text-[#243329] transition-colors">
          {item.title}
        </h3>

        <p className="text-[#56615A] text-sm md:text-base leading-relaxed mb-6 flex-1">
          {item.description}
        </p>

        {/* Feature List */}
        {item.features && item.features.length > 0 && (
          <ul className="space-y-2 mb-6 border-t border-[rgba(36,51,41,0.06)] pt-4">
            {item.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-xs md:text-sm text-[#56615A] flex items-start gap-2"
              >
                <span className="text-[#9B7E58] mt-0.5 select-none">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Link */}
        <div className="pt-2 border-t border-[rgba(36,51,41,0.06)] flex items-center justify-between">
          <a
            href={contactHref}
            onClick={() => onSelect && onSelect(item)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#243329] hover:text-[#C47B46] transition-colors"
          >
            <span>Commission This Craft</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
