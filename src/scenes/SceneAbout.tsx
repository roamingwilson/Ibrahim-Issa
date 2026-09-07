import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Compass, ArrowRight, Layers, Zap, ShieldCheck } from 'lucide-react';
import { ElectronicButton } from '../components/ElectronicButton';

interface SceneAboutProps {
  lang: Language;
  onExploreCapabilities: () => void;
}

export const SceneAbout: React.FC<SceneAboutProps> = ({
  lang,
  onExploreCapabilities,
}) => {
  const isAr = lang === 'ar';

  const principles = [
    {
      icon: Layers,
      number: '01',
      title: { en: 'Clean Architecture', ar: 'المعمارية النظيفة' },
      summary: { 
        en: 'Decoupled domain layers, unified API contracts, and predictable state.', 
        ar: 'فصل طبقات العرض ومنطق العمل، وعقود برمجية موحدة.' 
      },
    },
    {
      icon: Zap,
      number: '02',
      title: { en: 'Web & Flutter Speed', ar: 'سرعة الويب والهاتف' },
      summary: { 
        en: 'High-performance React & Next.js on web and native Flutter apps on iOS & Android.', 
        ar: 'أداء فائق مع React و Next.js على الويب وتطبيقات فلاتر أصلية على iOS وأندرويد.' 
      },
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: { en: 'Production Rigor', ar: 'صلابة بيئات الإنتاج' },
      summary: { 
        en: 'Strict type safety, offline-first SQLite sync, and 99.9% availability.', 
        ar: 'أمان نمطي صارم، مزامنة دون اتصال، وموثوقية عالية.' 
      },
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full border-x border-[#DCD6CC] max-w-6xl mx-auto flex justify-between">
          <div className="h-full border-r border-[#E8E3DA] hidden lg:block w-1/3" />
          <div className="h-full border-r border-[#E8E3DA] hidden lg:block w-1/3" />
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto space-y-8 relative z-10 text-left rtl:text-right">
        
        {/* Action Header with Electronic Navigation Button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-end border-b border-[#E8E3DA] pb-3"
        >
          <ElectronicButton
            onClick={onExploreCapabilities}
            variant="secondary"
            code="04_SYSTEMS"
            iconRight={ArrowRight}
            ledColor="blue"
            size="sm"
            isRtl={isAr}
          >
            {isAr ? 'الأنظمة البرمجية' : 'Inspect Systems'}
          </ElectronicButton>
        </motion.div>

        {/* Minimal Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1816] font-syne tracking-tight">
            {isAr ? (
              <>
                منطق برمجي واضح،{' '}
                <span className="text-[#0284C7]">وبناء مستدام</span>.
              </>
            ) : (
              <>
                Clean architecture.{' '}
                <span className="text-[#0284C7]">Built to endure</span>.
              </>
            )}
          </h2>
        </motion.div>

        {/* 3 Spacious Principle Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2"
        >
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-white border border-[#E2DDD5] modern-flat-shadow space-y-3 hover:border-[#0284C7] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8C857D] font-bold">
                    0{idx + 1}
                  </span>
                  <IconComponent className="w-4 h-4 text-[#0284C7]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1816] font-syne pt-1">
                  {item.title[lang]}
                </h3>
              </div>
            );
          })}
        </motion.div>

      </div>

    </div>
  );
};
