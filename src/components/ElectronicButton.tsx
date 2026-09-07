import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export type ElectronicButtonVariant = 'primary' | 'secondary' | 'circuit' | 'ghost' | 'gold';

interface ElectronicButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ElectronicButtonVariant;
  code?: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  iconRight?: LucideIcon | React.ComponentType<{ className?: string }>;
  ledColor?: 'blue' | 'green' | 'amber' | 'gold';
  pulseLed?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  isRtl?: boolean;
}

export const ElectronicButton: React.FC<ElectronicButtonProps> = ({
  children,
  variant = 'primary',
  code,
  icon: Icon,
  iconRight: IconRight,
  ledColor = 'blue',
  pulseLed = false,
  size = 'md',
  className = '',
  href,
  target,
  rel,
  isRtl = false,
  onClick,
  disabled,
  ...rest
}) => {
  // LED color mappings
  const ledStyles = {
    blue: 'bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]',
    green: 'bg-[#10B981] shadow-[0_0_8px_#10B981]',
    amber: 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]',
    gold: 'bg-[#FBBF24] shadow-[0_0_8px_#FBBF24]',
  };

  // Size styling
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-xs sm:text-sm',
    lg: 'px-6 py-3.5 text-sm sm:text-base',
  };

  // Base styling for each variant
  let variantClass = '';
  if (variant === 'primary') {
    // Dark terminal/microcontroller with Sky Blue logic gates
    variantClass =
      'bg-[#0D1520] hover:bg-[#131F2E] text-white border border-[#0284C7]/80 hover:border-[#38BDF8] shadow-[0_4px_14px_rgba(2,132,199,0.25)] hover:shadow-[0_4px_20px_rgba(56,189,248,0.4)]';
  } else if (variant === 'secondary') {
    // Clean circuit breakout board
    variantClass =
      'bg-white/95 hover:bg-[#FAF8F5] text-[#1A1816] border border-[#D5CFC5] hover:border-[#0284C7] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(2,132,199,0.18)]';
  } else if (variant === 'circuit') {
    // PCB solder mask style (Dark green / copper)
    variantClass =
      'bg-[#0B1510] hover:bg-[#112018] text-[#E2E8F0] border border-[#235835] hover:border-[#4ADE80] shadow-[0_4px_14px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_20px_rgba(74,222,128,0.35)]';
  } else if (variant === 'gold') {
    // ENIG gold plated contact button
    variantClass =
      'bg-gradient-to-r from-[#D4AF37] to-[#F3D368] hover:from-[#E5BF45] hover:to-[#FFE07A] text-[#1A1502] font-bold border border-[#B89728] shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.5)]';
  } else {
    // Ghost terminal command
    variantClass =
      'bg-transparent hover:bg-[#0284C7]/10 text-[#0284C7] hover:text-[#0369A1] border border-transparent hover:border-[#0284C7]/30';
  }

  const content = (
    <div className="relative z-10 flex items-center gap-2 select-none">
      {/* Corner Solder Pads for Electronic aesthetic */}
      <span className="absolute -top-1 -left-1 w-1 h-1 bg-[#D4AF37] rounded-full opacity-60 pointer-events-none" />
      <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-[#D4AF37] rounded-full opacity-60 pointer-events-none" />

      {/* SMD LED Status Indicator */}
      <div className="relative flex items-center justify-center shrink-0">
        <span className={`w-1.5 h-1.5 rounded-full ${ledStyles[ledColor]}`} />
        {pulseLed && (
          <span className={`absolute w-1.5 h-1.5 rounded-full ${ledStyles[ledColor]} animate-ping opacity-60`} />
        )}
      </div>

      {/* Left Icon if present */}
      {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}

      {/* Electronic Microcode prefix e.g. [01] or [EXEC] */}
      {code && (
        <span className="text-[10px] font-mono font-bold tracking-wider opacity-75 group-hover:opacity-100 transition-opacity">
          [{code}]
        </span>
      )}

      {/* Main Label */}
      <span className="font-syne font-bold tracking-tight whitespace-nowrap">
        {children}
      </span>

      {/* Right Icon if present */}
      {IconRight && (
        <IconRight className={`w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 ${isRtl ? 'rtl:-scale-x-100' : ''}`} />
      )}
    </div>
  );

  const motionProps: HTMLMotionProps<'button'> = {
    whileHover: { scale: 1.02, y: -1.5 },
    whileTap: { scale: 0.97, y: 1 },
    transition: { type: 'spring', stiffness: 450, damping: 25 },
    ...rest,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02, y: -1.5 }}
        whileTap={{ scale: 0.97, y: 1 }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        className={`group relative inline-flex items-center justify-center font-mono rounded-[3px] transition-colors cursor-pointer overflow-hidden ${variantClass} ${sizeStyles[size]} ${className}`}
      >
        {/* Subtle internal scanline overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center font-mono rounded-[3px] transition-colors cursor-pointer overflow-hidden ${
        disabled ? 'opacity-40 cursor-not-allowed' : ''
      } ${variantClass} ${sizeStyles[size]} ${className}`}
      {...motionProps}
    >
      {/* Subtle internal scanline overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      {content}
    </motion.button>
  );
};
