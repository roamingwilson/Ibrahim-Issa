import React from 'react';
import { Language } from '../types';
import { REVIEWS } from '../data/portfolioData';
import { 
  Quote, 
  ShieldCheck, 
  Building2, 
  CheckCircle2
} from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="reviews" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-semibold">{isAr ? 'شهادات العملاء' : 'CLIENT TESTIMONIALS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
              {isAr ? (
                <>
                  ما يقوله{' '}
                  <span className="text-[#0284C7]">المؤسسون وقادة الفرق</span> عن التعاون معي.
                </>
              ) : (
                <>
                  What founders and{' '}
                  <span className="text-[#0284C7]">engineering leaders</span> say.
                </>
              )}
            </h2>
            <p className="text-base text-[#554F48] leading-relaxed">
              {isAr
                ? 'شهادات حقيقية من مديري التكنولوجيا ورواد الأعمال الذين قمت بتطوير منتجاتهم الحساسة.'
                : 'Direct feedback from clients where speed, stability, and code quality mattered most.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#6B655F] bg-white px-3.5 py-2 border border-[#E2DDD5] modern-flat-shadow">
            <span className="w-2 h-2 bg-emerald-600" />
            <span className="font-medium">{isAr ? '4 شهادات موثقة' : '4 VERIFIED REVIEWS'}</span>
          </div>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="border border-[#E2DDD5] bg-white p-6 sm:p-8 space-y-6 hover:border-[#0284C7] transition-all flex flex-col justify-between group modern-flat-shadow hover:modern-elevated-shadow"
            >
              <div className="space-y-4">
                
                {/* Header: Client Identity & Verified Badge */}
                <div className="flex items-start justify-between gap-4 border-b border-[#EFECE6] pb-4">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Initials Frame */}
                    <div className="w-12 h-12 bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center font-mono font-bold text-[#0284C7] text-base shadow-xs">
                      {review.avatarInitials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-[#1A1816] font-syne group-hover:text-[#0284C7] transition-colors">
                          {review.clientName}
                        </h4>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 border border-emerald-300/60 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>VERIFIED</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B655F]">
                        {review.clientRole[lang]} • <strong className="text-[#1A1816]">{review.company}</strong>
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#DCD6CC] shrink-0 group-hover:text-[#0284C7] transition-colors" />
                </div>

                {/* Project tag */}
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="text-[#8C857D]">{isAr ? 'المشروع المنفذ:' : 'Engagement:'}</span>
                  <span className="text-[#0284C7] bg-[#F0F9FF] px-2.5 py-0.5 border border-[#BAE6FD] font-semibold">
                    {review.projectName[lang]}
                  </span>
                </div>

                {/* Review Narrative Quote */}
                <p className="text-sm text-[#38332E] leading-relaxed italic">
                  "{review.reviewText[lang]}"
                </p>

              </div>

              {/* Card Footer: Metadata */}
              <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between text-[11px] font-mono text-[#6B655F]">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-[#8C857D]" />
                  <span className="font-medium">{review.companyDomain}</span>
                </span>
                <span>{review.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
