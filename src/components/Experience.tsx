import React from 'react';
import { Language } from '../types';
import { EXPERIENCE_TIMELINE, CREDIBILITY_METRICS } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2
} from 'lucide-react';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-semibold">{isAr ? 'الخبرة المهنية' : 'WORK EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
            {isAr ? (
              <>
                أكثر من 6 سنوات في بناء{' '}
                <span className="text-[#0284C7]">منتجات رقمية ناجحة</span> وتطبيقات عالية الاستقرار.
              </>
            ) : (
              <>
                6+ years of building{' '}
                <span className="text-[#0284C7]">reliable software</span> and scalable web & mobile apps.
              </>
            )}
          </h2>
          <p className="text-base text-[#554F48] leading-relaxed">
            {isAr
              ? 'محطات مهنية ركزت خلالها على قيادة تطوير المنتجات، تنظيم المعمارية البرمجية، وتحقيق أعلى سرعة في التشغيل.'
              : 'Proven experience leading frontend and mobile architecture for startups and enterprises.'}
          </p>
        </div>

        {/* High-Level Credibility Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CREDIBILITY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 border border-[#E2DDD5] bg-white space-y-2 hover:border-[#0284C7] transition-all modern-flat-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-syne text-[#1A1816] tracking-tight">
                {metric.number}
              </div>
              <div className="text-xs font-bold text-[#0284C7] font-syne">
                {metric.label[lang]}
              </div>
              <p className="text-[11px] text-[#554F48] leading-relaxed">
                {metric.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Architectural Timeline */}
        <div className="relative border-l-2 rtl:border-r-2 rtl:border-l-0 border-[#DCD6CC] ml-3 sm:ml-6 rtl:mr-3 rtl:sm:mr-6 rtl:ml-0 space-y-12">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 rtl:pr-6 rtl:sm:pr-10 rtl:pl-0 group">
              
              {/* Timeline Node Icon Indicator */}
              <div className="absolute -left-[17px] rtl:-right-[17px] rtl:left-auto top-1.5 w-8 h-8 bg-white border-2 border-[#0284C7] flex items-center justify-center text-[#0284C7] shadow-sm group-hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 bg-[#0284C7]" />
              </div>

              {/* Timeline Card Content */}
              <div className="border border-[#E2DDD5] bg-white p-6 sm:p-8 space-y-4 hover:border-[#0284C7] transition-all modern-flat-shadow hover:modern-elevated-shadow">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EFECE6] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] font-bold">
                        {item.type.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-[#6B655F] font-medium">
                        {item.location[lang]}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1816] font-syne mt-1">
                      {item.role[lang]}
                    </h3>
                    <div className="text-sm font-semibold text-[#554F48]">
                      {item.company[lang]}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B655F] bg-[#F5F2EC] px-3 py-1.5 border border-[#E8E3DA] w-fit font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Key Achievements Bulletpoints */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-[#0284C7] font-bold uppercase tracking-wider">
                    {isAr ? 'أبرز الإنجازات:' : 'KEY DELIVERIES:'}
                  </span>
                  <div className="space-y-2">
                    {item.achievements[lang].map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#443E38] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used in this era */}
                <div className="pt-3 border-t border-[#EFECE6] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-[#8C857D] mr-2 rtl:ml-2 rtl:mr-0 font-medium">
                    {isAr ? 'الأدوات:' : 'Stack:'}
                  </span>
                  {item.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-0.5 bg-[#FAF8F5] border border-[#E8E3DA] text-[11px] font-mono text-[#38332E] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
