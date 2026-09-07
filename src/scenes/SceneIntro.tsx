import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { FolderGit2, Mail } from 'lucide-react';
import { ParticleTextCanvas } from '../components/ParticleTextCanvas';

interface SceneIntroProps {
  lang: Language;
  onExploreWork: () => void;
  onContact: () => void;
  onNextScene: () => void;
}

export const SceneIntro: React.FC<SceneIntroProps> = ({
  lang,
  onExploreWork,
  onContact,
  onNextScene,
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      <div className="max-w-4xl w-full mx-auto space-y-6 relative z-10 text-left rtl:text-right">
        
        {/* Discipline / Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7] tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
          <span>{isAr ? 'مطور ويب ومطور تطبيقات فلاتر' : 'WEB DEVELOPER & FLUTTER APPS DEVELOPER'}</span>
        </motion.div>

        {/* Interactive Canvas Particle System reading "Ibrahim Issa" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="h-32 sm:h-44 md:h-52 lg:h-64 w-full relative">
            <ParticleTextCanvas
              text={isAr ? 'إبراهيم عيسى' : 'Ibrahim Issa'}
              primaryColor="#0284C7"
              repulsionRadius={80}
              samplingStep={2}
              align="start"
              isRtl={isAr}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Supporting Headline - Main Bold Text Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-1"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-snug max-w-2xl">
            {isAr ? (
              <>
                مطور ويب وتطبيقات فلاتر.{' '}
                <span className="text-[#0284C7]">بناء متكامل</span> وتطبيقات عالية الأداء.
              </>
            ) : (
              <>
                Web Developer & Flutter Apps Developer.{' '}
                <span className="text-[#0284C7]">High-performance</span> web & mobile solutions.
              </>
            )}
          </h2>
        </motion.div>

        {/* Crisp Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <button
            onClick={onExploreWork}
            className="px-6 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{isAr ? 'استعراض المشاريع' : 'Explore Projects'}</span>
          </button>

          <button
            onClick={onContact}
            className="px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#D5CFC5] text-[#1A1816] text-xs sm:text-sm font-bold transition-all modern-flat-shadow hover:border-[#0284C7] flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0284C7]" />
            <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
          </button>
        </motion.div>

      </div>

    </div>
  );
};
