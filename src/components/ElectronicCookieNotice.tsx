import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Shield } from 'lucide-react';

interface ElectronicCookieNoticeProps {
  lang: Language;
}

const STORAGE_KEY = 'ibrahim_issa_cookie_consent';

export const ElectronicCookieNotice: React.FC<ElectronicCookieNoticeProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  
  const [hasDecided, setHasDecided] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHasDecided(true);
        setIsOpen(false);
      } else {
        setHasDecided(false);
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      setHasDecided(false);
      setIsOpen(true);
    }
  }, []);

  const handleConsent = (level: 'all' | 'essential') => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ level, timestamp: Date.now() }));
    } catch {
      // ignore
    }
    setHasDecided(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* Minimized Electronic Component Badge (When dismissed/saved) */}
      <AnimatePresence>
        {!isOpen && hasDecided && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-3 z-40 ${isAr ? 'left-3 sm:left-5' : 'right-3 sm:right-5'}`}
          >
            <button
              onClick={() => setIsOpen(true)}
              id="reopen-cookie-pcb-btn"
              className="group flex items-center gap-2 px-2.5 py-1.5 bg-[#0C140F] hover:bg-[#111C15] text-[#D8E6DC] text-[11px] font-mono border border-[#234A30] rounded shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all cursor-pointer select-none"
              title={isAr ? 'سجلات الذاكرة وملفات الارتباط' : 'Cookie & Memory Registers'}
            >
              {/* Realistic SMD Green LED */}
              <div className="relative flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping opacity-60" />
              </div>

              {/* Realistic SMD chip silhouette */}
              <span className="bg-[#1C241E] px-1.5 py-0.5 rounded text-[10px] text-[#A7C4B2] border border-[#2E4233] font-bold tracking-wider">
                IC_24C
              </span>

              <span className="text-[#8FA899] text-[10px] hidden sm:inline font-mono">
                {isAr ? 'ملفات الارتباط' : 'COOKIES'}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Electronic Breakout PCB Notice: Sleek, 1-Line Text, Realistic Hardware */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className={`fixed bottom-3 sm:bottom-4 z-50 w-[calc(100vw-1.5rem)] sm:w-auto max-w-2xl ${
              isAr ? 'left-3 sm:left-5' : 'right-3 sm:right-5'
            }`}
            aria-label={isAr ? 'إشعار ملفات الارتباط' : 'Cookie notice'}
          >
            {/* Realistic Dark FR-4 PCB Board Enclosure */}
            <div 
              id="electronic-cookie-pcb"
              className="relative bg-[#0A140E] border-2 border-[#1E3B27] shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,175,55,0.3)] rounded-lg py-2 px-3 sm:py-2.5 sm:px-3.5 text-[#E2E8F0] font-mono select-none overflow-hidden"
            >
              {/* Authentic PCB Solder Mask Texture with Subtle 45-degree Copper Traces */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="pcb-traces-clean" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 0 12 L 25 12 L 37 24 L 50 24" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                    <path d="M 8 0 L 8 20 L 20 32 L 50 32" fill="none" stroke="#2D6A42" strokeWidth="0.8" />
                    <circle cx="25" cy="12" r="1.5" fill="#D4AF37" />
                    <circle cx="37" cy="24" r="1.5" fill="#D4AF37" />
                    <circle cx="20" cy="32" r="1.5" fill="#2D6A42" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pcb-traces-clean)" />
              </svg>

              {/* Four Corner Plated Brass Mounting Holes with Solder Rings */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full border border-[#D4AF37] bg-[#0A140E] flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
              </div>
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border border-[#D4AF37] bg-[#0A140E] flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
              </div>
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full border border-[#D4AF37] bg-[#0A140E] flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
              </div>
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full border border-[#D4AF37] bg-[#0A140E] flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
              </div>

              {/* Main Compact Content Layout - Single Clean Row on Desktop */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 pl-2 pr-1">
                
                {/* Left Side: Physical IC Chip, LED, and Exactly One Line of Text */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  
                  {/* Realistic SOIC-8 Surface Mount IC Chip */}
                  <div className="relative shrink-0 w-7 h-8 bg-[#1E2328] rounded-[2px] border border-[#3A4048] shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex flex-col justify-between py-1 px-0.5">
                    {/* Pin 1 Dot */}
                    <div className="w-1 h-1 rounded-full bg-[#0D1013] border border-[#48525E]" />

                    {/* Laser Etched Chip Markings */}
                    <div className="text-[6px] text-[#A0AEC0] leading-none text-center font-bold tracking-tighter">
                      24C
                    </div>

                    {/* Silver Solder Pins on Left & Right */}
                    <div className="absolute -left-1 top-1.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />
                    <div className="absolute -left-1 top-3.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />
                    <div className="absolute -left-1 top-5.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />

                    <div className="absolute -right-1 top-1.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />
                    <div className="absolute -right-1 top-3.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />
                    <div className="absolute -right-1 top-5.5 w-1 h-0.5 bg-[#CBD5E1] rounded-sm" />
                  </div>

                  {/* Silkscreen Reference & Power Indicator */}
                  <div className="shrink-0 flex flex-col items-center gap-0.5">
                    <span className="text-[8px] text-[#90B89C] font-mono leading-none tracking-wider">U1</span>
                    {/* SMD Green LED */}
                    <div className="w-2.5 h-1.5 bg-[#0F2918] border border-[#235835] rounded-[1px] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#10B981] shadow-[0_0_4px_#34D399]" />
                    </div>
                  </div>

                  {/* Single Text Block - Strictly One Line */}
                  <p 
                    className={`text-xs text-[#D1E2D6] truncate ${
                      isAr ? 'font-arabic text-right' : 'font-sans'
                    }`}
                    title={
                      isAr
                        ? 'نستخدم ملفات الارتباط لحفظ تفضيلاتك وضمان أفضل أداء للموقع.'
                        : 'We use cookies to save your preferences and ensure optimal performance.'
                    }
                  >
                    {isAr
                      ? 'نستخدم ملفات الارتباط لحفظ تفضيلاتك وضمان أفضل أداء للموقع.'
                      : 'We use cookies to save your preferences and ensure optimal performance.'}
                  </p>
                </div>

                {/* Right Side: Exactly "Accept" and "Accept only necessary" Buttons */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  
                  {/* Secondary Button: "Accept only necessary" / "قبول الضروري فقط" */}
                  <motion.button
                    onClick={() => handleConsent('essential')}
                    id="cookie-accept-necessary-btn"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-2.5 py-1 bg-[#142319] hover:bg-[#1C3224] text-[#A6C9B4] hover:text-[#D5EADB] text-xs font-mono border border-[#274A32] rounded-[3px] shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Shield className="w-3 h-3 text-[#7B9E87]" />
                    <span>{isAr ? 'قبول الضروري فقط' : 'Accept only necessary'}</span>
                  </motion.button>

                  {/* Primary Button: "Accept" / "قبول" */}
                  <motion.button
                    onClick={() => handleConsent('all')}
                    id="cookie-accept-all-btn"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F3D368] hover:from-[#E5BF45] hover:to-[#FFE07A] text-[#1A1502] text-xs font-mono font-bold rounded-[3px] shadow-[0_2px_8px_rgba(212,175,55,0.35)] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Check className="w-3.5 h-3.5 text-[#1A1502] stroke-[2.5]" />
                    <span>{isAr ? 'قبول' : 'Accept'}</span>
                  </motion.button>

                  {/* Quick Close Button */}
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1 text-[#6F8A7A] hover:text-[#E2E8F0] hover:bg-[#182C20] rounded-[2px] transition-colors cursor-pointer ml-0.5"
                    title={isAr ? 'إغلاق' : 'Close'}
                    aria-label="Close cookie notice"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>

                </div>

              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
