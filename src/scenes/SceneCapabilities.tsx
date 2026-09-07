import React, { useState } from 'react';
import { Language } from '../types';
import { CAPABILITY_SYSTEMS } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ChevronRight, ChevronLeft, ArrowRight, Activity } from 'lucide-react';

interface SceneCapabilitiesProps {
  lang: Language;
  onExploreProjects: () => void;
}

export const SceneCapabilities: React.FC<SceneCapabilitiesProps> = ({
  lang,
  onExploreProjects,
}) => {
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const isAr = lang === 'ar';

  const currentSystem = CAPABILITY_SYSTEMS[activeSystemIndex] || CAPABILITY_SYSTEMS[0];

  const handlePrevSystem = () => {
    setActiveSystemIndex((prev) => (prev > 0 ? prev - 1 : CAPABILITY_SYSTEMS.length - 1));
  };

  const handleNextSystem = () => {
    setActiveSystemIndex((prev) => (prev < CAPABILITY_SYSTEMS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      <div className="max-w-5xl w-full mx-auto space-y-6 text-left rtl:text-right">
        
        {/* Section Header and System Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E3DA] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8C857D] font-bold">
              [ 0{activeSystemIndex + 1} / 0{CAPABILITY_SYSTEMS.length} ]
            </span>
          </div>

          {/* System Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E2DDD5] text-xs font-mono modern-flat-shadow">
            {CAPABILITY_SYSTEMS.map((sys, idx) => {
              const isActive = idx === activeSystemIndex;
              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystemIndex(idx)}
                  className={`px-3 py-1.5 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#1A1816] text-white font-bold'
                      : 'text-[#6B655F] hover:text-[#1A1816] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className={isActive ? 'text-[#0284C7]' : 'text-[#8C857D]'}>
                    0{idx + 1}
                  </span>
                  <span className="font-syne">{sys.title[lang].split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Minimalist Capability Stage */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSystem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#E2DDD5] bg-white p-6 sm:p-8 modern-elevated-shadow space-y-6"
            >
              
              {/* Header inside stage */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFECE6] pb-4">
                <div>
                  <div className="text-xs font-mono text-[#0284C7] font-bold">
                    {currentSystem.code}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1816] font-syne tracking-tight">
                    {currentSystem.title[lang]}
                  </h3>
                </div>

                <div className="px-3 py-1.5 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-mono font-bold tracking-wider shrink-0 self-start sm:self-auto">
                  {currentSystem.evidence.badge}
                </div>
              </div>

              {/* Technologies & Metrics Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                
                {/* Tech Pills */}
                <div className="lg:col-span-7">
                  <div className="text-[11px] font-mono text-[#8C857D] font-bold uppercase tracking-wider mb-2">
                    {isAr ? 'حزمة التقنيات المعتمدة:' : 'CORE STACK:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSystem.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-mono text-[#38332E] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2 Key Verified Metrics */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {currentSystem.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] space-y-0.5">
                      <div className="text-xl font-bold font-syne text-[#1A1816]">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#6B655F]">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stage Controller Bar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSystem}
              className="px-3.5 py-2 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-1.5 cursor-pointer modern-flat-shadow"
              title="Previous system"
            >
              <ChevronLeft className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              <span>{isAr ? 'السابق' : 'Prev'}</span>
            </button>

            <button
              onClick={handleNextSystem}
              className="px-3.5 py-2 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-1.5 cursor-pointer modern-flat-shadow"
              title="Next system"
            >
              <span>{isAr ? 'التالي' : 'Next'}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <button
            onClick={onExploreProjects}
            className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2 cursor-pointer"
          >
            <span>{isAr ? 'الأعمال المختارة' : 'Selected Work'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

    </div>
  );
};
