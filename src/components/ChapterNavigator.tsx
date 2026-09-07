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
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 select-none max-w-[calc(100vw-1.5rem)]"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Floating Tooltip / Circuit Telemetry Preview on Hover */}
        <AnimatePresence>
          {hoveredScene !== null && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute -top-10 px-3 py-1 bg-[#0A140E] text-[#E2E8F0] text-[11px] font-mono rounded-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.4)] pointer-events-none flex items-center gap-2 whitespace-nowrap border border-[#235835] z-50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
              <span className="text-[#38BDF8] font-bold">
                [{SCENES[hoveredScene].code}]
              </span>
              <span className="text-[#3A5643]">::</span>
              <span className="text-white font-semibold">
                {SCENES[hoveredScene].title[lang]}
              </span>
              <span className="text-[#3A5643]">•</span>
              <span className="text-[#90B89C] text-[10px]">
                {SCENES[hoveredScene].category[lang]}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Electronic Circuit Bus / Dock Bar */}
        <div className="bg-[#0A140E]/95 backdrop-blur-xl border border-[#1E3B27] shadow-[0_12px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(212,175,55,0.2)] rounded-lg p-1.5 flex items-center gap-1 sm:gap-1.5">
          
          {/* Previous Scene Stepper Button */}
          <motion.button
            onClick={isAr ? handleNext : handlePrev}
            disabled={isAr ? !canGoNext : !canGoPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isAr ? 'المشهد التالي' : 'Previous Scene'}
            title={isAr ? 'المشهد السابق' : 'Previous Scene'}
            className={`p-2 rounded-[3px] transition-all cursor-pointer font-mono ${
              (isAr ? !canGoNext : !canGoPrev)
                ? 'opacity-25 cursor-not-allowed text-[#4B6353]'
                : 'hover:bg-[#14261B] text-[#A6C9B4] hover:text-[#E2E8F0] border border-transparent hover:border-[#235835]'
            }`}
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
          </motion.button>

          <div className="w-px h-5 bg-[#1E3B27] mx-0.5" />

          {/* Segmented Electronic Scene Blocks */}
          <div role="tablist" className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
            {SCENES.map((scene, idx) => {
              const isActive = currentScene === idx;
              const IconComponent = SCENE_ICONS[idx] || Sparkles;

              return (
                <motion.button
                  key={scene.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${scene.code} ${scene.title[lang]}`}
                  onClick={() => onSelectScene(idx)}
                  onMouseEnter={() => setHoveredScene(idx)}
                  onMouseLeave={() => setHoveredScene(null)}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  className={`relative px-2.5 sm:px-3 py-1.5 rounded-[3px] text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#8CA393] hover:text-[#E2E8F0] hover:bg-[#14261B]/60'
                  }`}
                >
                  {/* Active Animated Electronic Block Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBlockPill"
                      className="absolute inset-0 bg-[#16291D] border border-[#34D399]/70 rounded-[3px] shadow-[0_0_12px_rgba(52,211,153,0.25)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Block Content */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {/* Active Pulsing Phosphor Diode or Inactive Icon */}
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_6px_#34D399] animate-pulse" />
                    ) : (
                      <IconComponent className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 hidden sm:inline" />
                    )}

                    {/* Numeric Code */}
                    <span className={`text-[11px] font-bold ${isActive ? 'text-[#38BDF8]' : 'text-[#6F8A77]'}`}>
                      {scene.code}
                    </span>

                    {/* Title (Expanded on md+, or when active) */}
                    <span className={`font-syne transition-all ${
                      isActive ? 'inline font-bold text-[#E2E8F0]' : 'hidden md:inline font-medium'
                    }`}>
                      {scene.title[lang]}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="w-px h-5 bg-[#1E3B27] mx-0.5" />

          {/* Next Scene Stepper Button */}
          <motion.button
            onClick={isAr ? handlePrev : handleNext}
            disabled={isAr ? !canGoPrev : !canGoNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isAr ? 'المشهد السابق' : 'Next Scene'}
            title={isAr ? 'المشهد التالي' : 'Next Scene'}
            className={`p-2 rounded-[3px] transition-all cursor-pointer font-mono ${
              (isAr ? !canGoPrev : !canGoNext)
                ? 'opacity-25 cursor-not-allowed text-[#4B6353]'
                : 'hover:bg-[#14261B] text-[#A6C9B4] hover:text-[#E2E8F0] border border-transparent hover:border-[#235835]'
            }`}
          >
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </motion.button>

        </div>
      </div>
    </nav>
  );
};
