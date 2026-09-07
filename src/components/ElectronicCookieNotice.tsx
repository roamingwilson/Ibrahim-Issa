import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Check, Sliders, ShieldCheck, Zap, X, HardDrive, RefreshCw } from 'lucide-react';

interface ElectronicCookieNoticeProps {
  lang: Language;
}

interface CookieJumperState {
  core: boolean;        // JMP_01: Core state & language (always true)
  performance: boolean; // JMP_02: Performance metrics & frame profile
  cache: boolean;       // JMP_03: Offline asset & scene prefetch
}

const STORAGE_KEY = 'ibrahim_issa_cookie_telemetry';

export const ElectronicCookieNotice: React.FC<ElectronicCookieNoticeProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  
  // Consent state: null means not yet decided, true means dismissed/saved
  const [hasDecided, setHasDecided] = useState<boolean>(true); // start closed to avoid flash, check in effect
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showJumpers, setShowJumpers] = useState<boolean>(false);
  const [jumpers, setJumpers] = useState<CookieJumperState>({
    core: true,
    performance: true,
    cache: true,
  });

  // Check saved state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setJumpers(parsed);
        setHasDecided(true);
        setIsOpen(false);
      } else {
        setHasDecided(false);
        // Subtle delay for circuit initialization feel
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 900);
        return () => clearTimeout(timer);
      }
    } catch {
      // In private mode or sandboxed environment
      setHasDecided(false);
      setIsOpen(true);
    }
  }, []);

  const handleSavePreferences = (state: CookieJumperState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
    setJumpers(state);
    setHasDecided(true);
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    const fullState: CookieJumperState = { core: true, performance: true, cache: true };
    handleSavePreferences(fullState);
  };

  const handleAcceptEssential = () => {
    const essentialState: CookieJumperState = { core: true, performance: false, cache: false };
    handleSavePreferences(essentialState);
  };

  const handleToggleJumper = (key: keyof CookieJumperState) => {
    if (key === 'core') return; // Core is hardwired
    setJumpers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Minimized Electronics Chip Badge (Floats at bottom edge when collapsed) */}
      <AnimatePresence>
        {!isOpen && hasDecided && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-4 z-40 ${
              isAr ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
            }`}
          >
            <button
              onClick={() => setIsOpen(true)}
              id="electronic-cookie-chip-btn"
              className="group flex items-center gap-2.5 px-3 py-1.5 bg-[#FAF9F6]/95 hover:bg-white text-[#1A1816] text-xs font-mono border border-[#D4CEB8] rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:border-[#0284C7] hover:shadow-[0_4px_18px_rgba(2,132,199,0.15)] transition-all cursor-pointer backdrop-blur-md"
              title={isAr ? 'إعدادات سجل الذاكرة والملفات الإلكترونية' : 'Circuit Memory & Cookie Registers'}
            >
              {/* Micro Solder Pin & Pulsing LED */}
              <div className="relative flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981]" />
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </div>

              <Cpu className="w-3.5 h-3.5 text-[#0284C7] group-hover:rotate-12 transition-transform" />

              <span className="text-[11px] font-bold tracking-wider text-[#1A1816]">
                {isAr ? 'سجل الذاكرة // IC_CACHE' : 'IC_CACHE // REG:OK'}
              </span>

              <span className="text-[9px] px-1 py-0.5 bg-[#E2DDD5]/70 text-[#6B7280] rounded border border-[#CBD5E1]">
                3.3V
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Electronic Cookie Module / PCB Board Notice */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed bottom-4 sm:bottom-6 z-50 max-w-[540px] w-[calc(100vw-2rem)] sm:w-auto ${
              isAr ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
            }`}
          >
            {/* Electronic PCB Enclosure */}
            <div 
              id="electronic-cookie-circuit-panel"
              className="relative bg-[#FCFBF8] border-2 border-[#1E293B] shadow-[0_12px_40px_rgba(15,23,42,0.18)] rounded-xl overflow-hidden font-mono text-[#1A1816]"
            >
              {/* Subtle PCB Etched Grid and Trace Background Layer */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.045]"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, #0284C7 1px, transparent 1px),
                    linear-gradient(to right, #0284C7 1px, transparent 1px),
                    linear-gradient(to bottom, #0284C7 1px, transparent 1px)
                  `,
                  backgroundSize: '16px 16px',
                }}
              />

              {/* 4 Corner Brass Solder Mounting Rings */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-[#B45309] bg-[#FEF3C7] shadow-inner" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-[#B45309] bg-[#FEF3C7] shadow-inner" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-[#B45309] bg-[#FEF3C7] shadow-inner" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-[#B45309] bg-[#FEF3C7] shadow-inner" />

              {/* Top Electronic Header / Silkscreen Strip */}
              <div className="bg-[#0F172A] text-[#F8FAFC] px-4 py-2.5 flex items-center justify-between border-b border-[#334155]">
                <div className="flex items-center gap-2.5">
                  {/* IC Chip Icon with green power diode */}
                  <div className="flex items-center gap-1.5 bg-[#1E293B] px-2 py-0.5 rounded border border-[#334155]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-[10px] text-sky-300 font-bold tracking-widest">
                      IC_EEPROM::24C
                    </span>
                  </div>

                  {/* Silkscreen Pin Voltage */}
                  <span className="text-[10px] text-slate-400 tracking-wider hidden sm:inline">
                    BUS_I2C // 3.3V
                  </span>
                </div>

                {/* Technical Close / Minimize Jumper Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                  title={isAr ? 'تصغير' : 'Minimize register'}
                  aria-label="Minimize"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Main Board Content */}
              <div className="p-4 sm:p-5 relative z-10 space-y-3.5">
                
                {/* Circuit Title & Status Line */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded uppercase tracking-wider">
                        {isAr ? 'بروتوكول الذاكرة' : 'PROTOCOL // 0x4B'}
                      </span>
                      <span className="text-[10px] text-[#0284C7] font-semibold tracking-wider">
                        {isAr ? 'سجلات التخزين المؤقت' : 'LOCAL DEVICE REGISTERS'}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold text-[#0F172A] ${isAr ? 'font-arabic' : 'font-jakarta'}`}>
                      {isAr 
                        ? 'إشعار سجلات الذاكرة وملفات الارتباط' 
                        : 'Circuit Memory & Telemetry Notice'}
                    </h4>
                  </div>

                  {/* Micro Schematic Trace SVG Graphic */}
                  <div className="hidden sm:block shrink-0" aria-hidden="true">
                    <svg width="48" height="32" viewBox="0 0 48 32" className="text-[#0284C7]">
                      <path 
                        d="M 2 16 L 14 16 L 20 6 L 28 26 L 34 16 L 46 16" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <circle cx="2" cy="16" r="2" fill="#D97706" />
                      <circle cx="46" cy="16" r="2" fill="#10B981" />
                    </svg>
                  </div>
                </div>

                {/* Explanatory Technical Note */}
                <p className={`text-xs text-[#334155] leading-relaxed ${isAr ? 'font-arabic text-right' : 'text-left font-sans'}`}>
                  {isAr
                    ? 'تستخدم هذه البوابة التقنية سجلات الذاكرة المحلية (Cookies & LocalStorage) لحفظ إعدادات النظام، مثل تفضيل اللغة ومؤشرات أداء الرندر واستجابة الواجهة. جميع البيانات مشفرة محلياً داخل عتاد المتصفح ولا يتم تداولها مع أي شبكات إعلانية.'
                    : 'This system operates with minimal hardware-style local storage registers (cookies & local state) to maintain session continuity, language preference, and interface rendering latency. No cross-site ad tracking is transmitted over this bus.'}
                </p>

                {/* Optional Expandable DIP Switches / Jumper Pins */}
                <AnimatePresence>
                  {showJumpers && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#F1EFE9] border border-[#D4CEB8] rounded-lg p-3 space-y-2.5 my-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#0F172A] pb-1 border-b border-[#D4CEB8]/70">
                          <span className="flex items-center gap-1.5">
                            <Sliders className="w-3 h-3 text-[#0284C7]" />
                            {isAr ? 'مفاتيح التوصيل (DIP SWITCHES)' : 'DIP SWITCH CONFIGURATION'}
                          </span>
                          <span className="text-[10px] text-[#64748B]">8-PIN IC BUS</span>
                        </div>

                        {/* Jumper 1: Core (Hardwired) */}
                        <div className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#E2DDD5] px-1 rounded text-[#475569] font-mono">JMP_1</span>
                            <div>
                              <div className="font-semibold text-[#0F172A]">
                                {isAr ? 'حالة النظام الأساسية واللغة' : 'Core Architecture State'}
                              </div>
                              <div className="text-[10px] text-[#64748B]">
                                {isAr ? 'ثابتة (ضرورية لتشغيل الواجهة والاتجاه)' : 'Hardwired [REQ] (Language & Viewport)'}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded text-[10px] font-bold">
                            <Check className="w-3 h-3" />
                            {isAr ? 'متصل دائماً' : 'LOCKED ON'}
                          </div>
                        </div>

                        {/* Jumper 2: Performance Telemetry */}
                        <div className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#E2DDD5] px-1 rounded text-[#475569] font-mono">JMP_2</span>
                            <div>
                              <div className="font-semibold text-[#0F172A]">
                                {isAr ? 'مؤشرات كفاءة التحميل والأداء' : 'Performance Telemetry'}
                              </div>
                              <div className="text-[10px] text-[#64748B]">
                                {isAr ? 'قياس سرعة الشاشات وتدفق الإطارات' : 'Frame Profiling & Render Latency'}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleToggleJumper('performance')}
                            className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                              jumpers.performance ? 'bg-[#0284C7]' : 'bg-[#CBD5E1]'
                            }`}
                            aria-label="Toggle Performance Telemetry"
                          >
                            <div 
                              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                                jumpers.performance ? (isAr ? '-translate-x-4' : 'translate-x-4') : 'translate-x-0'
                              }`} 
                            />
                          </button>
                        </div>

                        {/* Jumper 3: Asset Preload / Cache */}
                        <div className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#E2DDD5] px-1 rounded text-[#475569] font-mono">JMP_3</span>
                            <div>
                              <div className="font-semibold text-[#0F172A]">
                                {isAr ? 'التخزين المؤقت للمشاريع' : 'Preload Cache Register'}
                              </div>
                              <div className="text-[10px] text-[#64748B]">
                                {isAr ? 'تسريع التنقل الفوري بين المشاهد' : 'Scene Cache & Vector Acceleration'}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleToggleJumper('cache')}
                            className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                              jumpers.cache ? 'bg-[#0284C7]' : 'bg-[#CBD5E1]'
                            }`}
                            aria-label="Toggle Preload Cache"
                          >
                            <div 
                              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                                jumpers.cache ? (isAr ? '-translate-x-4' : 'translate-x-4') : 'translate-x-0'
                              }`} 
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hardware Controls & Action Buttons */}
                <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {/* Primary: Engage Bus (Accept All) */}
                  <button
                    onClick={handleAcceptAll}
                    id="cookie-engage-bus-btn"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 bg-[#0F172A] hover:bg-[#0284C7] text-white text-xs font-bold transition-all rounded shadow-sm hover:shadow-[0_4px_12px_rgba(2,132,199,0.3)] cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isAr ? 'تفعيل كافة الدوائر (قبول الكل)' : 'ENGAGE BUS // ACCEPT ALL'}</span>
                  </button>

                  {/* Secondary: Minimal Circuit (Essential Only) */}
                  <button
                    onClick={handleAcceptEssential}
                    id="cookie-minimal-vcc-btn"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F1EFE9] text-[#1A1816] text-xs font-bold border border-[#CBD5E1] rounded transition-colors cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isAr ? 'الدوائر الأساسية فقط' : 'MINIMAL VCC ONLY'}</span>
                  </button>

                  {/* Toggle Jumpers / Advanced Options */}
                  <button
                    onClick={() => setShowJumpers(!showJumpers)}
                    id="cookie-jumpers-toggle-btn"
                    className="px-2.5 py-2 text-xs text-[#475569] hover:text-[#0284C7] hover:bg-[#F1EFE9] border border-transparent hover:border-[#D4CEB8] rounded transition-all flex items-center gap-1 cursor-pointer"
                    title={isAr ? 'تخصيص المفاتيح التقنية' : 'Configure Jumper Pins'}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">{isAr ? 'المفاتيح' : 'PINS'}</span>
                  </button>

                  {/* If Jumpers open, show Save Custom Configuration */}
                  {showJumpers && (
                    <button
                      onClick={() => handleSavePreferences(jumpers)}
                      id="cookie-save-jumpers-btn"
                      className="px-3 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold rounded transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isAr ? 'حفظ التكوين' : 'APPLY CONFIG'}</span>
                    </button>
                  )}
                </div>

                {/* Bottom Technical Telemetry Footer Info */}
                <div className="flex items-center justify-between pt-1 border-t border-[#E2DDD5] text-[10px] text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3 h-3 text-[#94A3B8]" />
                    <span>{isAr ? 'تخزين محلي بدون تعقب خارجي' : 'NO 3RD-PARTY TRACKERS'}</span>
                  </span>
                  <span className="font-mono text-[9px] text-[#94A3B8]">
                    REV::2026.09 // SHA:0x8F4A
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
