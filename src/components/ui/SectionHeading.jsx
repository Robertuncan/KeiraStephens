import React from 'react';

/**
 * Reusable SectionHeading following typography & anti-slop guidelines.
 * Eyebrow text, confident H2, line-length constrained description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? 'text-center mx-auto' : 'text-left'
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow inline-block">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-[#1C201D] font-normal tracking-tight mt-1 mb-4 text-balance">
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`text-[#56615A] text-base md:text-lg leading-relaxed ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
