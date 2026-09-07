import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { FolderGit2, Mail, Terminal, ArrowRight } from 'lucide-react';
import { ParticleTextCanvas } from '../components/ParticleTextCanvas';
import { ElectronicButton } from '../components/ElectronicButton';

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
      
      {/* Centered Main Stage Content */}
      <div className="max-w-4xl w-full mx-auto space-y-6 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Discipline / Electronic Status Tag - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#0284C7] tracking-widest uppercase bg-[#F0F9FF] border border-[#BAE6FD] px-3 py-1 rounded-[2px]"
        >
          <span className="w-2 h-2 rounded-full bg-[#0284C7] shadow-[0_0_8px_#0284C7] animate-pulse" />
          <span>
            {isAr
              ? 'نظام العرض // مهندس برمجيات وتطبيقات فلاتر'
              : 'SYSTEM::ACTIVE // WEB & FLUTTER APPS ARCHITECT'}
          </span>
        </motion.div>

        {/* Interactive Canvas Particle System reading "Ibrahim Issa" - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <div className="h-32 sm:h-44 md:h-52 lg:h-64 w-full relative">
            <ParticleTextCanvas
              text={isAr ? 'إبراهيم عيسى' : 'Ibrahim Issa'}
              primaryColor="#0284C7"
              repulsionRadius={80}
              samplingStep={2}
              align="center"
              isRtl={isAr}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Supporting Headline - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-1 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-snug text-center">
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

        {/* Electronic Vibe Actions - Centered with tactile hover/click animations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-4"
        >
          <ElectronicButton
            onClick={onExploreWork}
            variant="primary"
            code="EXEC_01"
            icon={FolderGit2}
            iconRight={ArrowRight}
            ledColor="blue"
            pulseLed={true}
            size="lg"
            isRtl={isAr}
          >
            {isAr ? 'استعراض المشاريع' : 'Explore Projects'}
          </ElectronicButton>

          <ElectronicButton
            onClick={onContact}
            variant="secondary"
            code="COMM_INIT"
            icon={Mail}
            ledColor="green"
            size="lg"
            isRtl={isAr}
          >
            {isAr ? 'تواصل معي' : 'Contact Me'}
          </ElectronicButton>
        </motion.div>

        {/* Subtle Electronic Micro-Bus Telemetry - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex items-center justify-center gap-3 text-[11px] font-mono text-[#8C857D]"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_4px_#10B981]" />
            <span>I2C // CLK: 400kHz</span>
          </span>
          <span>•</span>
          <span>FLUTTER 3.29 + REACT 19</span>
          <span>•</span>
          <span className="text-[#0284C7] font-semibold">99.9% UPTIME</span>
        </motion.div>

      </div>

    </div>
  );
};
