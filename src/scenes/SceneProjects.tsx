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
import { ElectronicButton } from '../components/ElectronicButton';

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
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      <div className="max-w-5xl w-full mx-auto space-y-5 text-left rtl:text-right">
        
        {/* Stage Header and Project Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E3DA] pb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8C857D] font-bold">
              [ 0{selectedProjectIndex + 1} / 0{PROJECTS.length} ]
            </span>
          </div>

          {/* Electronic Project Direct Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0A140E] border border-[#1E3B27] rounded-[3px] text-xs font-mono shadow-inner overflow-x-auto no-scrollbar">
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === selectedProjectIndex;
              return (
                <motion.button
                  key={proj.id}
                  onClick={() => onSelectProjectIndex(idx)}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  className={`px-2.5 sm:px-3 py-1.5 transition-all cursor-pointer flex items-center gap-1.5 rounded-[2px] ${
                    isActive
                      ? 'bg-[#14261B] text-[#E2E8F0] font-bold border border-[#34D399]/60 shadow-[0_0_10px_rgba(52,211,153,0.2)]'
                      : 'text-[#8CA393] hover:text-[#E2E8F0] hover:bg-[#0F1E14] border border-transparent'
                  }`}
                >
                  <span className="relative flex items-center justify-center">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive
                          ? 'bg-[#34D399] shadow-[0_0_6px_#34D399]'
                          : 'bg-[#3A5643]'
                      }`}
                    />
                  </span>
                  <span className={isActive ? 'text-[#38BDF8]' : 'text-[#6F8A77]'}>
                    [PRJ_0{idx + 1}]
                  </span>
                  <span className="hidden sm:inline font-syne">
                    {proj.title[lang].split(' ')[0]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* The Clean Project Stage */}
        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#E2DDD5] bg-white p-6 sm:p-8 modern-elevated-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Essential Project Info */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 bg-[#F0F9FF] text-[#0284C7] font-bold uppercase tracking-wider">
                    {currentProject.category}
                  </span>
                  <span className="text-[#8C857D]">•</span>
                  <span className="text-[#554F48]">{currentProject.clientOrOrg}</span>
                  <span className="text-[#8C857D]">•</span>
                  <span className="text-[#8C857D]">{currentProject.year}</span>
                </div>

                {/* Project Title & Crisp Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1816] font-syne tracking-tight">
                    {currentProject.title[lang]}
                  </h3>
                  <p className="text-sm sm:text-base text-[#554F48] font-medium leading-normal">
                    {currentProject.tagline[lang]}
                  </p>
                </div>

                {/* 2 Key Verified Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {currentProject.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="p-2.5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-0.5">
                      <div className="text-lg font-bold text-[#1A1816] font-syne">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#6B655F]">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentProject.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E3DA] text-[11px] font-mono text-[#443E38]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Electronic Action Button */}
                <div className="pt-2">
                  <ElectronicButton
                    onClick={() => onViewProjectDetail(currentProject)}
                    variant="primary"
                    code="CASE_STUDY"
                    icon={Maximize2}
                    iconRight={ArrowRight}
                    ledColor="blue"
                    pulseLed={true}
                    size="md"
                    isRtl={isAr}
                  >
                    {isAr ? 'التحليل المعماري للمشروع' : 'Inspect Case Study'}
                  </ElectronicButton>
                </div>

              </div>

              {/* Right Column: Visual Product Mockup */}
              <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E8E3DA] p-5 modern-flat-shadow space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-2 text-[11px] font-mono text-[#8C857D]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-[#1A1816]">
                      {currentProject.webPreview.url}
                    </span>
                  </div>
                  <span className="text-[#0284C7] font-semibold uppercase">
                    {currentProject.category === 'flutter' 
                      ? (isAr ? 'تطبيق فلاتر' : 'Flutter App')
                      : currentProject.category === 'cross-platform'
                      ? (isAr ? 'ويب وفلاتر' : 'Web & Flutter')
                      : (isAr ? 'منصة ويب' : 'Web Platform')}
                  </span>
                </div>

                <div className="bg-white border border-[#E2DDD5] p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8C857D]">
                    <span className="text-[10px] font-mono text-[#0284C7] font-bold">
                      {isAr ? 'واجهة النظام' : 'INTERFACE'}
                    </span>
                    <Laptop className="w-3.5 h-3.5" />
                  </div>

                  <h4 className="text-sm font-bold text-[#1A1816] font-syne">
                    {currentProject.webPreview.headline[lang]}
                  </h4>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EFECE6]">
                    {currentProject.webPreview.stats.map((s, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-[9px] font-mono text-[#8C857D]">{s.label}</div>
                        <div className="text-xs font-bold font-mono text-[#1A1816]">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 border border-[#E2DDD5] px-3 py-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B655F]">
                    {currentProject.mobilePreview.screenTitle[lang]}
                  </span>
                  <span className="text-[10px] text-[#0284C7] font-bold">FLUTTER</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Stage Navigation Bar with Electronic Buttons */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <ElectronicButton
              onClick={handlePrev}
              variant="secondary"
              code="PREV"
              icon={ChevronLeft}
              ledColor="blue"
              size="sm"
              isRtl={isAr}
              title="Previous project"
            >
              {isAr ? 'السابق' : 'Prev'}
            </ElectronicButton>

            <ElectronicButton
              onClick={handleNext}
              variant="secondary"
              code="NEXT"
              iconRight={ChevronRight}
              ledColor="blue"
              size="sm"
              isRtl={isAr}
              title="Next project"
            >
              {isAr ? 'التالي' : 'Next'}
            </ElectronicButton>
          </div>

          <ElectronicButton
            onClick={() => onViewProjectDetail(currentProject)}
            variant="ghost"
            code="SPECS"
            iconRight={ArrowRight}
            size="sm"
            isRtl={isAr}
          >
            {isAr ? 'التفاصيل والمعمارية' : 'Case Study Details'}
          </ElectronicButton>
        </div>

      </div>

    </div>
  );
};
