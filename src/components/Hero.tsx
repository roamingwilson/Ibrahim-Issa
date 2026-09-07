import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  Activity
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreWork, onContact }) => {
  const isAr = lang === 'ar';
  const [activeEngine, setActiveEngine] = useState<'both' | 'web' | 'flutter'>('both');
  const [fpsCounter, setFpsCounter] = useState(60);
  const [interactiveCounter, setInteractiveCounter] = useState(1);

  // Live jitter for the frame rate monitor to show real computing pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setFpsCounter(prev => Math.min(60, Math.max(59.8, 59.9 + (Math.random() * 0.2 - 0.1))));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#FAF8F5]">
      
      {/* Precision Background Grid Overlay (Warm Stone Lines) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(194, 94, 46, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(194, 94, 46, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px'
        }}
      />

      {/* Atmospheric Subtle Warm Aura Glows (Warm Terracotta / Ochre Tone) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#0284C7]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[#B45309]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Telemetry Monolith Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E3DA] pb-4 mb-10 text-xs font-mono text-[#6B655F]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-[#1A1816] shadow-xs">
              <span className="w-1.5 h-1.5 bg-emerald-600 animate-ping" />
              <span className="font-semibold text-[11px]">{isAr ? 'متاح للعمل' : 'AVAILABLE FOR HIRE'}</span>
            </span>
            <span className="hidden sm:inline-block text-[#C5BFAF]">|</span>
            <span className="hidden sm:inline-block text-[#6B655F]">
              {isAr ? 'تطوير منصات الويب وتطبيقات فلاتر' : 'WEB & FLUTTER DEVELOPMENT'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#0284C7] font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>{isAr ? 'تطبيقات ويب وفلاتر' : 'WEB & FLUTTER APPS'}</span>
            </div>
            <span className="text-[#C5BFAF]">|</span>
            <span className="text-[#1A1816] font-medium">{isAr ? 'خبرة 6+ سنوات' : '6+ YRS EXP'}</span>
            <span className="text-[#C5BFAF]">|</span>
            <span className="text-emerald-700 font-bold">{isAr ? 'استقرار 99.9%' : '99.9% STABLE'}</span>
          </div>
        </div>

        {/* Hero Headline & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] text-xs text-[#0284C7] font-mono shadow-xs">
              <Sparkles className="w-3 h-3 text-[#0284C7]" />
              <span className="font-semibold">{PERSONAL_INFO.name[lang]} • {PERSONAL_INFO.role[lang]}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1816] leading-[1.18] font-syne">
              {isAr ? (
                <>
                  تطوير تطبيقات ويب وفلاتر{' '}
                  <span className="text-[#0284C7]">
                    سريعة وعالية الأداء.
                  </span>
                </>
              ) : (
                <>
                  Building fast Web & Flutter apps{' '}
                  <span className="text-[#0284C7]">
                    that scale.
                  </span>
                </>
              )}
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-[#554F48] max-w-2xl leading-relaxed font-normal">
              {isAr ? (
                <>
                  مطور برمجيات أول بخبرة تزيد عن <strong className="text-[#1A1816] font-semibold">6 سنوات</strong>. أساعد الشركات والمؤسسين على تحويل الأفكار إلى منصات ويب وتطبيقات هاتف سريعة، مستقرة، وسهلة الاستخدام.
                </>
              ) : (
                <>
                  Senior developer with over <strong className="text-[#1A1816] font-semibold">6 years of experience</strong> crafting high-performance web platforms and mobile apps built for speed, stability, and growth.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2.5 group cursor-pointer"
                id="hero-explore-work-btn"
              >
                <span>{isAr ? 'استعراض المشاريع' : 'View Projects'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <button
                onClick={onContact}
                className="px-6 py-3.5 bg-white hover:bg-[#F7F5F0] border border-[#DCD6CC] text-[#1A1816] text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                id="hero-contact-btn"
              >
                <span>{isAr ? 'تواصل معي' : 'Get in Touch'}</span>
              </button>
            </div>

            {/* Key Credentials Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#E8E3DA]">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold font-syne text-[#1A1816] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#6B655F] font-mono">
                    {stat.label[lang]}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Dual-Platform Simulator in Flat Architectural Form */}
          <div className="lg:col-span-5">
            <div className="border border-[#E2DDD5] bg-white p-5 sm:p-6 modern-elevated-shadow relative overflow-hidden">
              
              {/* Simulator Header / Tabs */}
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-[#E57373]" />
                  <div className="w-2.5 h-2.5 bg-[#FFB74D]" />
                  <div className="w-2.5 h-2.5 bg-[#81C784]" />
                  <span className="text-[11px] font-mono text-[#6B655F] ml-2 rtl:mr-2 font-medium">
                    {isAr ? 'معاينة التقنيات' : 'LIVE TECH PREVIEW'}
                  </span>
                </div>

                {/* Viewport Toggles */}
                <div className="flex items-center gap-1 bg-[#F5F2EC] p-1 border border-[#E8E3DA] text-[11px] font-mono">
                  <button
                    onClick={() => setActiveEngine('both')}
                    className={`px-2.5 py-0.5 cursor-pointer transition-colors ${activeEngine === 'both' ? 'bg-[#1A1816] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'}`}
                  >
                    {isAr ? 'كلاهما' : 'DUAL'}
                  </button>
                  <button
                    onClick={() => setActiveEngine('web')}
                    className={`px-2.5 py-0.5 cursor-pointer transition-colors ${activeEngine === 'web' ? 'bg-[#1A1816] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'}`}
                  >
                    WEB
                  </button>
                  <button
                    onClick={() => setActiveEngine('flutter')}
                    className={`px-2.5 py-0.5 cursor-pointer transition-colors ${activeEngine === 'flutter' ? 'bg-[#0284C7] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'}`}
                  >
                    FLUTTER
                  </button>
                </div>
              </div>

              {/* Viewport Renderings */}
              <div className="space-y-4">
                
                {/* 1. Web Ecosystem Simulator Viewport */}
                {(activeEngine === 'both' || activeEngine === 'web') && (
                  <div className="border border-[#E5E0D8] bg-[#FAF8F5] p-4 space-y-3 transition-all hover:border-[#0284C7]/40 shadow-xs">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#1A1816]">
                        <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span className="font-semibold">{isAr ? 'محرك الويب المتطور' : 'WEB ECOSYSTEM (NEXT.JS + REACT)'}</span>
                      </div>
                      <span className="text-[10px] text-emerald-800 bg-emerald-100/80 px-2 py-0.5 border border-emerald-300/60 font-semibold">
                        99 LIGHTHOUSE
                      </span>
                    </div>

                    <div className="bg-white p-3 border border-[#E8E3DA] space-y-2 shadow-xs">
                      <div className="flex items-center justify-between text-[11px] text-[#443E38] font-mono">
                        <span>SSR Stream Time:</span>
                        <span className="text-emerald-700 font-bold">&lt; 140ms</span>
                      </div>
                      <div className="w-full bg-[#EFECE6] h-1.5 overflow-hidden">
                        <div className="bg-[#0284C7] h-full w-[96%]" />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#8C857D] font-mono">
                        <span>TypeScript Strict Mode</span>
                        <span>Atomic State // Edge Cache</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Flutter Native Mobile Simulator Viewport */}
                {(activeEngine === 'both' || activeEngine === 'flutter') && (
                  <div className="border border-[#D5CFC5] bg-[#F7F4EE] p-4 space-y-3 transition-all hover:border-[#0284C7]/50 shadow-xs">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#1A1816]">
                        <Smartphone className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span className="font-semibold">{isAr ? 'محرك فلاتر الأصلي' : 'FLUTTER NATIVE RUNTIME'}</span>
                      </div>
                      <span className="text-[10px] text-[#0284C7] bg-[#F5E6DC] px-2 py-0.5 border border-[#E5C3AE] font-semibold">
                        FLUTTER // IOS & ANDROID
                      </span>
                    </div>

                    {/* Interactive Widget Simulator */}
                    <div className="bg-white p-3 border border-[#E8E3DA] space-y-2 shadow-xs">
                      <div className="flex items-center justify-between text-[11px] text-[#443E38] font-mono">
                        <span>Reactive BLoC State:</span>
                        <span className="text-[#0284C7] font-bold">EventTriggered (x{interactiveCounter})</span>
                      </div>

                      <div className="flex items-center justify-between bg-[#FAF8F5] p-2.5 border border-[#E8E3DA]">
                        <div className="text-left rtl:text-right">
                          <div className="text-[11px] text-[#1A1816] font-semibold">
                            {isAr ? 'مكون فلاتر تفاعلي مباشر' : 'Interactive Flutter Widget'}
                          </div>
                          <div className="text-[10px] text-[#6B655F]">
                            {isAr ? 'اضغط لاختبار إعادة التصيير السريع' : 'Tap to test zero-jank state dispatch'}
                          </div>
                        </div>

                        <button
                          onClick={() => setInteractiveCounter(prev => prev + 1)}
                          className="px-3 py-1 bg-[#0284C7] hover:bg-[#0369A1] text-white text-[10px] font-mono font-bold cursor-pointer transition-transform active:scale-95 shadow-xs"
                        >
                          + DISPATCH
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-[#8C857D] font-mono">
                        <span>Dart Isolates // Skia Shaders</span>
                        <span>Zero UI-Thread Jank</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Status footer inside simulator */}
              <div className="mt-4 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-[10px] font-mono text-[#6B655F]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#0284C7]" />
                  <span>Production-Grade Architecture</span>
                </span>
                <span className="text-[#8C857D]">Ibrahim Issa • 6+ Yrs</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
