import React from 'react';

/**
 * Design system button component.
 * Single-line text, standard 8px radius, accessible focus states.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium text-sm md:text-base px-6 py-3 rounded-[8px] transition-all duration-200 cursor-pointer whitespace-nowrap select-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[#243329] text-[#FAF9F5] hover:bg-[#1A261E] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(36,51,41,0.18)] active:translate-y-0',
    secondary:
      'bg-transparent text-[#243329] border border-[#243329]/30 hover:border-[#243329] hover:bg-[#243329]/5 hover:-translate-y-0.5 active:translate-y-0',
    accent:
      'bg-[#C47B46] text-[#FAF9F5] hover:bg-[#B36B38] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(196,123,70,0.22)] active:translate-y-0',
    ghost:
      'bg-transparent text-[#243329] hover:text-[#9B7E58] hover:bg-black/5',
    white:
      'bg-[#FAF9F5] text-[#243329] hover:bg-white hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:translate-y-0',
    whiteOutline:
      'bg-transparent text-[#FAF9F5] border border-[#FAF9F5]/50 hover:border-[#FAF9F5] hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
