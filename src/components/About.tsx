import React from 'react';
import { Language } from '../types';
import { PHILOSOPHY_PILLARS, CREDIBILITY_METRICS } from '../data/portfolioData';
import { 
  Compass, 
  CheckCircle2, 
  Terminal, 
  Award,
  Layers
} from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-semibold">{isAr ? 'عن إبراهيم عيسى' : 'ABOUT IBRAHIM'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
            {isAr ? (
              <>
                شغف ببناء برمجيات تجمع بين{' '}
                <span className="text-[#0284C7]">السرعة الفائقة</span>، نقاء الكود، والتصميم المتقن.
              </>
            ) : (
              <>
                Passionate about building software that pairs{' '}
                <span className="text-[#0284C7]">speed & stability</span> with refined design.
              </>
            )}
          </h2>
          <p className="text-base text-[#554F48] leading-relaxed">
            {isAr
              ? 'أكثر من 6 سنوات في تطوير أنظمة الويب وتطبيقات الهواتف الذكية للشركات والمشاريع الناشئة حول العالم.'
              : 'Over 6 years building modern web applications and mobile apps for growing startups and established businesses.'}
          </p>
        </div>

        {/* Narrative & Visual Storytelling Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 border border-[#E2DDD5] bg-white p-6 sm:p-8 space-y-6 flex flex-col justify-between modern-flat-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4">
                <span className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider">
                  {isAr ? 'خلفيتي المهنية' : 'BACKGROUND & FOCUS'}
                </span>
                <span className="text-xs font-mono text-[#8C857D]">6+ YEARS EXP</span>
              </div>

              <p className="text-[#38332E] text-base sm:text-lg leading-relaxed font-normal">
                {isAr ? (
                  <>
                    مطور متخصص في <strong className="text-[#1A1816] font-bold">React وNext.js وتطبيقات Flutter</strong>. أساعد الشركات على إطلاق منصات ويب وتطبيقات هاتف متكاملة، فائقة السرعة، ومبنية على كود نظيف يدعم التوسع المستمر.
                  </>
                ) : (
                  <>
                    Full-stack engineer specializing in <strong className="text-[#1A1816] font-bold">React, Next.js, and Flutter</strong>. I build unified web and mobile products engineered for speed, clean architecture, and rapid growth.
                  </>
                )}
              </p>
            </div>

            {/* Quick Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#EFECE6] text-xs text-[#38332E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold">{isAr ? 'كود منظم ومعمارية قابلة للتوسع' : 'Clean & Scalable Code'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold">{isAr ? 'دعم متكامل للعربية والإنجليزية' : 'Bilingual Arabic & English'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold">{isAr ? 'تطبيقات فلاتر متعددة المنصات' : 'Cross-Platform Flutter Apps'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold">{isAr ? 'دعم كامل للعمل دون اتصال' : 'Offline-First Ready'}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Architecture Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Cross-Platform Convergence Diagram Card */}
            <div className="border border-[#E2DDD5] bg-white p-6 space-y-4 modern-flat-shadow">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B655F] border-b border-[#EFECE6] pb-3">
                <span className="flex items-center gap-1.5 text-[#0284C7] font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تكامل المنظومة' : 'TECH STACK'}</span>
                </span>
                <span className="text-emerald-700 font-bold">{isAr ? 'متصل' : 'ACTIVE'}</span>
              </div>

              {/* Graphical Stack Flow in Warm Atelier Style */}
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 bg-[#FAF8F5] border border-[#E2DDD5] text-[#1A1816] flex items-center justify-between">
                  <span className="font-bold">WEB</span>
                  <span className="text-[11px] text-[#6B655F]">Next.js • React • TypeScript • Tailwind</span>
                </div>
                <div className="flex justify-center text-[#8C857D] text-[11px]">
                  <span>↕ [Shared APIs & Contracts] ↕</span>
                </div>
                <div className="p-3 bg-[#FAF6F2] border border-[#DCD3C7] text-[#0284C7] flex items-center justify-between">
                  <span className="font-bold">MOBILE</span>
                  <span className="text-[11px] text-[#6B655F]">Flutter • Dart • iOS & Android</span>
                </div>
              </div>

              <p className="text-xs text-[#554F48] pt-2">
                {isAr
                  ? 'بناء كود موحد يضمن مطابقة التصميم وتفادي تكرار الأخطاء بين الويب والهاتف.'
                  : 'Shared APIs and models guarantee consistent behavior across web and mobile.'}
              </p>
            </div>

            {/* Credibility Spotlight Metric */}
            <div className="border border-[#D5C6B7] bg-white p-6 flex items-center gap-5 modern-flat-shadow">
              <div className="w-12 h-12 bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold font-syne text-[#1A1816]">35+ Projects Shipped</div>
                <p className="text-xs text-[#554F48] mt-0.5">
                  {isAr
                    ? 'منتجات وتطبيقات رقمية حية تخدم آلاف المستخدمين يومياً.'
                    : 'Digital products serving thousands of daily active users.'}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Architectural Pillars */}
        <div className="mt-12 pt-12 border-t border-[#E8E3DA]">
          <div className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider mb-6">
            {isAr ? 'المبادئ الأساسية في العمل' : 'CORE PRINCIPLES'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div 
                key={pillar.number}
                className="p-6 border border-[#E2DDD5] bg-white hover:border-[#0284C7] hover:modern-elevated-shadow transition-all group modern-flat-shadow"
              >
                <div className="text-xs font-mono text-[#8C857D] group-hover:text-[#0284C7] transition-colors mb-2 font-semibold">
                  0{pillar.number}
                </div>
                <h3 className="text-base font-bold text-[#1A1816] font-syne mb-2 group-hover:text-[#0284C7] transition-colors">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs text-[#554F48] leading-relaxed">
                  {pillar.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
