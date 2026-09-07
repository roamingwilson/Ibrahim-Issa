import React, { useState } from 'react';
import { Language } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

interface ExpertiseProps {
  lang: Language;
}

export const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('flutter-mobile');
  const isAr = lang === 'ar';

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="expertise" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-semibold">{isAr ? 'الخبرات والمهارات التقنية' : 'TECHNICAL EXPERTISE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
            {isAr ? (
              <>
                أدوات وتقنيات معتمدة لبناء{' '}
                <span className="text-[#0284C7]">تطبيقات فلاتر</span> و{' '}
                <span className="text-[#1A1816]">منصات ويب متقدمة</span>.
              </>
            ) : (
              <>
                Core stack for building{' '}
                <span className="text-[#0284C7]">fluid Flutter apps</span> and{' '}
                <span className="text-[#1A1816]">modern web systems</span>.
              </>
            )}
          </h2>
          <p className="text-base text-[#554F48] leading-relaxed">
            {isAr
              ? 'خبرة عملية متخصصة في تطوير تطبيقات الهواتف الذكية بنظامي iOS وAndroid، وبناء مواقع ومنصات الويب السريعة.'
              : 'Production-tested tools and frameworks I use every day to build fast, scalable, and maintainable software.'}
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-6 border text-left rtl:text-right transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected 
                    ? 'bg-white border-[#0284C7] modern-elevated-shadow ring-1 ring-[#0284C7]/30' 
                    : 'bg-[#F5F2EC] border-[#E2DDD5] hover:bg-white hover:border-[#D5CFC5] modern-flat-shadow'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 ${isSelected ? 'bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD]' : 'bg-white text-[#6B655F] border border-[#E8E3DA]'}`}>
                    {cat.id === 'flutter-mobile' && <Smartphone className="w-5 h-5" />}
                    {cat.id === 'web-engineering' && <Globe className="w-5 h-5" />}
                    {cat.id === 'systems-integration' && <Cpu className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono text-[#8C857D] font-medium">
                    {cat.skills.length} {isAr ? 'مهارات' : 'SKILLS'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1A1816] group-hover:text-[#0284C7] transition-colors font-syne">
                  {cat.title[lang]}
                </h3>
                <p className="text-xs text-[#554F48] mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.description[lang]}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0284C7]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Domain Deep-Dive Inspector */}
        <div className="border border-[#E2DDD5] bg-white p-6 sm:p-8 lg:p-10 modern-elevated-shadow">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EFECE6]">
            <div>
              <span className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider">
                {isAr ? 'تفاصيل المهارات' : 'SKILL BREAKDOWN'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1816] mt-1 font-syne">
                {activeCategory.title[lang]}
              </h3>
              <p className="text-sm text-[#554F48] mt-1 max-w-2xl leading-relaxed">
                {activeCategory.description[lang]}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-mono flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>6+ Years Production Level</span>
              </span>
            </div>
          </div>

          {/* Detailed Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {activeCategory.skills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-5 border border-[#E8E3DA] bg-[#FAF8F5] hover:border-[#0284C7] transition-all space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#1A1816] font-syne">{skill.name}</span>
                    {skill.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/20 font-bold">
                        CORE
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#0284C7] font-bold">{skill.level}</span>
                </div>

                {/* Progress Visual Bar */}
                <div className="w-full bg-[#E8E3DA] h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#0284C7] h-full transition-all duration-700" 
                    style={{ width: skill.level }}
                  />
                </div>

                <p className="text-xs text-[#554F48] leading-relaxed">
                  {skill.description[lang]}
                </p>

                <div className="flex justify-between items-center text-[10px] font-mono text-[#8C857D] pt-1">
                  <span>Track Record: {skill.experience}</span>
                  <span className="text-emerald-700 font-bold">Production Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Rigor Rules for this domain */}
          <div className="pt-6 border-t border-[#EFECE6] bg-[#F5F2EC] -mx-6 sm:-mx-8 lg:-mx-10 -mb-6 sm:-mb-8 lg:-mb-10 p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono text-[#6B655F] font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span>{isAr ? 'معايير الجودة الأساسية' : 'CORE STANDARDS'}</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#443E38]">
              {activeCategory.architecturalPillars[lang].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3.5 bg-white border border-[#E2DDD5] shadow-xs">
                  <span className="text-[#0284C7] font-mono text-[11px] font-bold mt-0.5">0{idx + 1}.</span>
                  <span className="font-medium">{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
