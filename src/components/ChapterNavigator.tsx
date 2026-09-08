import React, { useState } from 'react';
import { Language } from '../types';
import { SCENES } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  Layers, 
  Terminal, 
  Briefcase, 
  FileText, 
  Send 
} from 'lucide-react';

interface ChapterNavigatorProps {
  currentScene: number;
  onSelectScene: (sceneIndex: number) => void;
  lang: Language;
}

const SCENE_ICONS = [
  Sparkles,
  Activity,
  Layers,
  Terminal,
  Briefcase,
  FileText,
  Send,
];

export const ChapterNavigator: React.FC<ChapterNavigatorProps> = ({
  currentScene,
  onSelectScene,
  lang,
}) => {
  const isAr = lang === 'ar';
  const [hoveredScene, setHoveredScene] = useState<number | null>(null);

  const canGoPrev = currentScene > 0;
  const canGoNext = currentScene < SCENES.length - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      onSelectScene(currentScene - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onSelectScene(currentScene + 1);
    }
  };

  return (
    <nav
      aria-label="Scene Navigator"
      className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 select-none max-w-[calc(100vw-1.5rem)]"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Floating Tooltip / Category Preview on Hover */}
        <AnimatePresence>
          {hoveredScene !== null && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute -top-10 px-3 py-1 bg-[#1A1816] text-white text-[11px] font-mono rounded-lg shadow-lg pointer-events-none flex items-center gap-2 whitespace-nowrap border border-white/10 z-50"
            >
              <span className="text-[#38BDF8] font-bold">
                {SCENES[hoveredScene].code}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-white font-semibold">
                {SCENES[hoveredScene].title[lang]}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/70 text-[10px]">
                {SCENES[hoveredScene].category[lang]}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bento Block / Dock Bar */}
        <div className="bg-white/90 backdrop-blur-xl border border-[#E2DDD5] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.04)] rounded-2xl p-1.5 flex items-center gap-1 sm:gap-1.5 modern-flat-shadow">
          
          {/* Previous Scene Stepper Button */}
          <button
            onClick={isAr ? handleNext : handlePrev}
            disabled={isAr ? !canGoNext : !canGoPrev}
            aria-label={isAr ? 'المشهد التالي' : 'Previous Scene'}
            title={isAr ? 'المشهد السابق' : 'Previous Scene'}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              (isAr ? !canGoNext : !canGoPrev)
                ? 'opacity-30 cursor-not-allowed text-[#8C857D]'
                : 'hover:bg-[#F5F2EB] text-[#1A1816] active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
          </button>

          <div className="w-px h-5 bg-[#E8E3DA] mx-0.5" />

          {/* Segmented Scene Blocks */}
          <div role="tablist" className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
            {SCENES.map((scene, idx) => {
              const isActive = currentScene === idx;
              const IconComponent = SCENE_ICONS[idx] || Sparkles;

              return (
                <button
                  key={scene.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${scene.code} ${scene.title[lang]}`}
                  onClick={() => onSelectScene(idx)}
                  onMouseEnter={() => setHoveredScene(idx)}
                  onMouseLeave={() => setHoveredScene(null)}
                  className={`relative px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#6B655F] hover:text-[#1A1816] hover:bg-[#F5F2EB]/90'
                  }`}
                >
                  {/* Active Animated Block Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBlockPill"
                      className="absolute inset-0 bg-[#1A1816] rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Block Content */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {/* Active Pulsing Dot or Inactive Icon */}
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    ) : (
                      <IconComponent className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 hidden sm:inline" />
                    )}

                    {/* Numeric Code */}
                    <span className={`text-[11px] font-bold ${isActive ? 'text-[#38BDF8]' : 'text-[#8C857D]'}`}>
                      {scene.code}
                    </span>

                    {/* Title (Expanded on md+, or when active) */}
                    <span className={`font-syne transition-all ${
                      isActive ? 'inline font-bold' : 'hidden md:inline font-medium'
                    }`}>
                      {scene.title[lang]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-px h-5 bg-[#E8E3DA] mx-0.5" />

          {/* Next Scene Stepper Button */}
          <button
            onClick={isAr ? handlePrev : handleNext}
            disabled={isAr ? !canGoPrev : !canGoNext}
            aria-label={isAr ? 'المشهد السابق' : 'Next Scene'}
            title={isAr ? 'المشهد التالي' : 'Next Scene'}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              (isAr ? !canGoPrev : !canGoNext)
                ? 'opacity-30 cursor-not-allowed text-[#8C857D]'
                : 'hover:bg-[#F5F2EB] text-[#1A1816] active:scale-95'
            }`}
          >
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>

        </div>
      </div>
    </nav>
  );
};
