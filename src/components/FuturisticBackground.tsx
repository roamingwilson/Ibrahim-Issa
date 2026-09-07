import React from 'react';

export interface FuturisticBackgroundProps {
  variant?: 'default' | 'hero' | 'minimal';
  showGlows?: boolean;
  showDots?: boolean;
  showTechnicalGrid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  variant = 'default',
  showGlows = true,
  showDots = true,
  showTechnicalGrid = true,
  className = '',
  children,
}) => {
  const hasChildren = Boolean(children);

  return (
    <div 
      className={`${hasChildren ? 'relative w-full h-full' : 'absolute inset-0 w-full h-full pointer-events-none'} overflow-hidden bg-[#FAF9F6] text-[#1A1816] ${className}`}
      aria-hidden={!hasChildren}
    >
      {/* 1. Soft Ambient Gradient Glows (Light Blue, Lavender, Warm Peach) */}
      {showGlows && (
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
          aria-hidden="true"
        >
          {/* Light Sky Blue Glow (Top-Left / Center) */}
          <div 
            className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full blur-[110px] sm:blur-[140px] opacity-75"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(2, 132, 199, 0.06) 45%, transparent 75%)',
            }}
          />

          {/* Soft Lavender / Lilac Glow (Top-Right / Center) */}
          <div 
            className="absolute -top-[15%] -right-[8%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] sm:blur-[150px] opacity-70"
            style={{
              background: 'radial-gradient(circle, rgba(192, 132, 252, 0.14) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 72%)',
            }}
          />

          {/* Warm Peach / Apricot Glow (Bottom-Center / Right) */}
          <div 
            className="absolute -bottom-[18%] left-[20%] w-[60vw] h-[50vw] max-w-[900px] max-h-[700px] rounded-full blur-[130px] sm:blur-[160px] opacity-80"
            style={{
              background: 'radial-gradient(circle, rgba(254, 215, 170, 0.16) 0%, rgba(251, 146, 60, 0.05) 45%, transparent 75%)',
            }}
          />

          {/* Central subtle luminous wash */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-[48px] blur-[100px] opacity-40 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(224, 242, 254, 0.35) 0%, transparent 70%)',
            }}
          />
        </div>
      )}

      {/* 2. Thousands of Tiny Evenly Spaced Circular Dots Grid */}
      {showDots && (
        <div 
          className="absolute inset-0 pointer-events-none select-none z-[1]"
          style={{
            // Thousands of tiny circular dots (1.2px diameter, 24px spacing, subtle ~9% opacity in soft gray/slate-blue)
            backgroundImage: `radial-gradient(circle, rgba(15, 23, 42, 0.085) 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: 'center center',
            // Mask smooth falloff toward screen extremes for premium AI product feel
            maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, #000 65%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, #000 65%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* 3. Faint Technical Grid Structure with Large Rounded Rectangular Sections */}
      {showTechnicalGrid && (
        <div 
          className="absolute inset-0 pointer-events-none select-none z-[2] flex items-center justify-center p-3 sm:p-6 lg:p-10"
          aria-hidden="true"
        >
          {/* Main Large Rounded Rectangular Primary Framework */}
          <div className="relative w-full h-full max-w-7xl rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-slate-800/[0.045] flex flex-col justify-between p-4 sm:p-8">
            
            {/* Corner Crosshairs & Precision Anchors */}
            {/* Top-Left Corner Anchor */}
            <div className="absolute -top-1.5 -left-1.5 flex items-center justify-center text-slate-400/40 text-[11px] font-mono leading-none select-none">
              +
            </div>
            {/* Top-Right Corner Anchor */}
            <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center text-slate-400/40 text-[11px] font-mono leading-none select-none">
              +
            </div>
            {/* Bottom-Left Corner Anchor */}
            <div className="absolute -bottom-1.5 -left-1.5 flex items-center justify-center text-slate-400/40 text-[11px] font-mono leading-none select-none">
              +
            </div>
            {/* Bottom-Right Corner Anchor */}
            <div className="absolute -bottom-1.5 -right-1.5 flex items-center justify-center text-slate-400/40 text-[11px] font-mono leading-none select-none">
              +
            </div>

            {/* Inner Technical Rounded Segment (Subtle Secondary Layer) */}
            <div className="my-auto w-full h-[65%] rounded-[20px] sm:rounded-[28px] border border-sky-900/[0.03] relative pointer-events-none hidden sm:block">
              {/* Subtle architectural vertical axis */}
              <div className="absolute top-0 bottom-0 left-1/3 border-r border-slate-900/[0.02]" />
              <div className="absolute top-0 bottom-0 right-1/3 border-r border-slate-900/[0.02]" />
              
              {/* Corner indicators */}
              <span className="absolute top-2 left-3 text-[8px] font-mono text-slate-400/20">A1</span>
              <span className="absolute top-2 right-3 text-[8px] font-mono text-slate-400/20">A2</span>
              <span className="absolute bottom-2 left-3 text-[8px] font-mono text-slate-400/20">B1</span>
              <span className="absolute bottom-2 right-3 text-[8px] font-mono text-slate-400/20">B2</span>
            </div>

            {/* Bottom Technical Baseline Bar */}
            <div className="w-full flex items-center justify-between border-t border-slate-800/[0.03] pt-3 text-[9px] font-mono tracking-widest text-slate-400/35 uppercase">
              <div className="flex items-center gap-2">
                <span>WEB & FLUTTER PLATFORMS</span>
                <span className="text-slate-300/40">•</span>
                <span>IOS & ANDROID</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span>PRODUCTION ARCHITECTURE</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. Foreground Content Slot */}
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};
