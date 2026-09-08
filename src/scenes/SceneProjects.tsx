import React from 'react';
import { Language, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Laptop
} from 'lucide-react';

interface SceneProjectsProps {
  lang: Language;
  selectedProjectIndex: number;
  onSelectProjectIndex: (index: number) => void;
  onViewProjectDetail: (project: Project) => void;
}

export const SceneProjects: React.FC<SceneProjectsProps> = ({
  lang,
  selectedProjectIndex,
  onSelectProjectIndex,
  onViewProjectDetail,
}) => {
  const isAr = lang === 'ar';
  const currentProject = PROJECTS[selectedProjectIndex] || PROJECTS[0];

  const handlePrev = () => {
    onSelectProjectIndex(selectedProjectIndex > 0 ? selectedProjectIndex - 1 : PROJECTS.length - 1);
  };

  const handleNext = () => {
    onSelectProjectIndex(selectedProjectIndex < PROJECTS.length - 1 ? selectedProjectIndex + 1 : 0);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 lg:px-12 pt-20 sm:pt-22 pb-6 relative scene-scroll allow-native-scroll">
      
      <div className="max-w-5xl w-full mx-auto space-y-3 sm:space-y-4 my-auto text-left rtl:text-right">
        
        {/* Stage Header and Project Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 border-b border-[#E8E3DA] pb-2 sm:pb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8C857D] font-bold">
              [ 0{selectedProjectIndex + 1} / 0{PROJECTS.length} ]
            </span>
          </div>

          {/* Project Direct Selector Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white border border-[#E2DDD5] text-xs font-mono modern-flat-shadow">
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === selectedProjectIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => onSelectProjectIndex(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#1A1816] text-white font-bold'
                      : 'text-[#6B655F] hover:text-[#1A1816] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className={isActive ? 'text-[#0284C7]' : 'text-[#8C857D]'}>
                    0{idx + 1}
                  </span>
                  <span className="hidden sm:inline font-syne">
                    {proj.title[lang].split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Clean Project Stage */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#E2DDD5] bg-white p-4 sm:p-6 lg:p-7 modern-elevated-shadow grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center"
            >
              
              {/* Left Column: Essential Project Info */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5">
                
                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
                  <span className="px-2 py-0.5 bg-[#F0F9FF] text-[#0284C7] font-bold uppercase tracking-wider">
                    {currentProject.category}
                  </span>
                  <span className="text-[#8C857D]">•</span>
                  <span className="text-[#554F48]">{currentProject.clientOrOrg}</span>
                  <span className="text-[#8C857D]">•</span>
                  <span className="text-[#8C857D]">{currentProject.year}</span>
                </div>

                {/* Project Title & Crisp Tagline */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1A1816] font-syne tracking-tight">
                    {currentProject.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554F48] font-medium leading-normal line-clamp-2">
                    {currentProject.tagline[lang]}
                  </p>
                </div>

                {/* 2 Key Verified Metrics */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5">
                  {currentProject.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="p-2 sm:p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-0.5">
                      <div className="text-base sm:text-lg font-bold text-[#1A1816] font-syne">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#6B655F]">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                  {currentProject.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E3DA] text-[10px] sm:text-[11px] font-mono text-[#443E38]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-1">
                  <button
                    onClick={() => onViewProjectDetail(currentProject)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#1A1816] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'التحليل المعماري للمشروع' : 'Inspect Case Study'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                  </button>
                </div>

              </div>

              {/* Right Column: Visual Product Mockup */}
              <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E8E3DA] p-3.5 sm:p-4 modern-flat-shadow space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-2 text-[10px] sm:text-[11px] font-mono text-[#8C857D]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-[#1A1816] truncate max-w-[140px] sm:max-w-[180px]">
                      {currentProject.webPreview.url}
                    </span>
                  </div>
                  <span className="text-[#0284C7] font-semibold uppercase shrink-0">
                    {currentProject.category === 'flutter' 
                      ? (isAr ? 'تطبيق فلاتر' : 'Flutter App')
                      : currentProject.category === 'cross-platform'
                      ? (isAr ? 'ويب وفلاتر' : 'Web & Flutter')
                      : (isAr ? 'منصة ويب' : 'Web Platform')}
                  </span>
                </div>

                <div className="bg-white border border-[#E2DDD5] p-3 sm:p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#8C857D]">
                    <span className="text-[10px] font-mono text-[#0284C7] font-bold">
                      {isAr ? 'واجهة النظام' : 'INTERFACE'}
                    </span>
                    <Laptop className="w-3.5 h-3.5" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#1A1816] font-syne">
                    {currentProject.webPreview.headline[lang]}
                  </h4>

                  <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-[#EFECE6]">
                    {currentProject.webPreview.stats.map((s, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-[8px] sm:text-[9px] font-mono text-[#8C857D] truncate">{s.label}</div>
                        <div className="text-[11px] sm:text-xs font-bold font-mono text-[#1A1816] truncate">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 border border-[#E2DDD5] px-2.5 py-1.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B655F] text-[11px] truncate">
                    {currentProject.mobilePreview.screenTitle[lang]}
                  </span>
                  <span className="text-[10px] text-[#0284C7] font-bold shrink-0">FLUTTER</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Stage Navigation Bar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-1.5 cursor-pointer modern-flat-shadow"
              title="Previous project"
            >
              <ChevronLeft className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              <span>{isAr ? 'السابق' : 'Prev'}</span>
            </button>

            <button
              onClick={handleNext}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-1.5 cursor-pointer modern-flat-shadow"
              title="Next project"
            >
              <span>{isAr ? 'التالي' : 'Next'}</span>
              <ChevronRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <button
            onClick={() => onViewProjectDetail(currentProject)}
            className="text-xs font-mono text-[#0284C7] hover:text-[#0369A1] font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <span>{isAr ? 'التفاصيل والمعمارية' : 'Case Study Details'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

    </div>
  );
};
