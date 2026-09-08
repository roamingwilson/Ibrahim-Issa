import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Activity, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface SceneImpactProps {
  lang: Language;
  onNextScene: () => void;
}

export const SceneImpact: React.FC<SceneImpactProps> = ({
  lang,
  onNextScene,
}) => {
  const isAr = lang === 'ar';

  const metrics = [
    {
      value: '6+',
      label: { en: 'Years in Production', ar: 'سنوات في الإنتاج' },
      detail: { en: 'Full-Stack & Mobile', ar: 'تطوير الويب والهاتف' },
      accent: 'text-[#1A1816]',
    },
    {
      value: '5.0 ★',
      label: { en: 'Mostaql Rating', ar: 'تقييم ممتاز في مستقل' },
      detail: { en: '100% Client Satisfaction', ar: 'رضا كامل للعملاء' },
      accent: 'text-[#0284C7]',
    },
    {
      value: '35+',
      label: { en: 'Shipped Projects', ar: 'مشروعاً تم إطلاقه' },
      detail: { en: 'Web & Mobile Systems', ar: 'منظومات ويب وهاتف' },
      accent: 'text-[#1A1816]',
    },
    {
      value: 'iOS & Android',
      label: { en: 'Mobile Platforms', ar: 'منصات الهواتف' },
      detail: { en: 'Flutter & Native Apps', ar: 'تطبيقات فلاتر أصلية' },
      accent: 'text-[#0284C7]',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border-x border-[#DCD6CC] max-w-6xl mx-auto flex justify-between">
          <div className="h-full border-r border-[#E8E3DA] hidden lg:block w-1/2" />
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto space-y-8 relative z-10 text-left rtl:text-right">
        
        {/* Action Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-end border-b border-[#E8E3DA] pb-3"
        >
          <button
            onClick={onNextScene}
            className="text-xs font-mono text-[#0284C7] hover:text-[#0369A1] font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <span>{isAr ? 'المبادئ المعمارية' : 'View Principles'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        {/* Minimal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1816] font-syne tracking-tight">
            {isAr ? (
              <>
                أرقام مثبتة من <span className="text-[#0284C7]">بيئات العمل الحية</span>.
              </>
            ) : (
              <>
                Engineered for <span className="text-[#0284C7]">verified scale</span>.
              </>
            )}
          </h2>
        </motion.div>

        {/* 4 Spacious Minimalist Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4"
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#E2DDD5] modern-flat-shadow hover:border-[#0284C7] transition-all space-y-3"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-syne ${item.accent} tracking-tight`}>
                {item.value}
              </div>

              <div className="pt-2 border-t border-[#EFECE6]">
                <div className="text-sm sm:text-base font-bold text-[#1A1816] font-syne">
                  {item.label[lang]}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
};
