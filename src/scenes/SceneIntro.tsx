import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { FolderGit2, Mail, ExternalLink, Star } from 'lucide-react';
import { ParticleTextCanvas } from '../components/ParticleTextCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

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
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      <div className="max-w-4xl w-full mx-auto space-y-6 relative z-10 text-left rtl:text-right">
        
        {/* Discipline / Title Tag with Mostaql Profile Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold tracking-wider"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7]">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            <span>{isAr ? 'مطور ويب وتطبيقات وبرمجيات' : 'WEB, APPS & SOFTWARE DEVELOPER'}</span>
          </div>

          <a
            href={PERSONAL_INFO.mostaql}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 transition-colors"
          >
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>{isAr ? 'حساب مستقل: ibrahimphp (تقييم 5.0 ★)' : 'Mostaql: ibrahimphp (5.0 ★)'}</span>
            <ExternalLink className="w-3 h-3 text-amber-700" />
          </a>
        </motion.div>

        {/* Interactive Canvas Particle System reading "Ibrahim Issa" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="h-28 sm:h-36 md:h-44 lg:h-52 w-full relative">
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

        {/* Supporting Headline Matching Mostaql Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-1 space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-snug max-w-2xl">
            {isAr ? (
              <>
                تطوير متكامل لتطبيقات <span className="text-[#0284C7]">Flutter</span> و{' '}
                <span className="text-[#0284C7]">React</span> وخوادم{' '}
                <span className="text-[#0284C7]">Laravel</span>.
              </>
            ) : (
              <>
                Specialized in <span className="text-[#0284C7]">Flutter</span> Mobile Apps,{' '}
                <span className="text-[#0284C7]">React</span> Frontends &{' '}
                <span className="text-[#0284C7]">Laravel</span> Backends.
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#554F48] font-normal leading-relaxed max-w-2xl">
            {isAr
              ? 'خبرة تزيد عن 6 سنوات في بناء تطبيقات الهواتف الذكية (iOS & Android)، ومواقع الويب المتكاملة، وأنظمة الفلاتر واللافتات الإعلانية الديناميكية، ودمج حلول الذكاء الاصطناعي.'
              : 'Over 6 years of verified production experience architecting iOS & Android cross-platform mobile apps, high-performance web systems, dynamic filtering engines, and AI integrations.'}
          </p>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-2.5 bg-white border border-[#E2DDD5] modern-flat-shadow space-y-0.5">
              <div className="text-base sm:text-lg font-bold font-syne text-[#0284C7]">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-[#6B655F]">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Crisp Actions with Direct Mostaql Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <button
            onClick={onExploreWork}
            className="px-5 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{isAr ? 'استعراض المشاريع' : 'Explore Projects'}</span>
          </button>

          <a
            href={PERSONAL_INFO.mostaql}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#1A1816] hover:bg-[#332E29] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'ملفي على مستقل' : 'View Mostaql Profile'}</span>
          </a>

          <button
            onClick={onContact}
            className="px-5 py-3 bg-white hover:bg-[#FAF8F5] border border-[#D5CFC5] text-[#1A1816] text-xs sm:text-sm font-bold transition-all modern-flat-shadow hover:border-[#0284C7] flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0284C7]" />
            <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
          </button>
        </motion.div>

      </div>

    </div>
  );
};
