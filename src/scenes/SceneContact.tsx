import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  ArrowUp, 
  ExternalLink,
  Star,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

interface SceneContactProps {
  lang: Language;
  prefilledSubject?: string;
  onRestartExperience: () => void;
}

export const SceneContact: React.FC<SceneContactProps> = ({
  lang,
  onRestartExperience,
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 lg:px-12 pt-20 sm:pt-22 pb-6 relative scene-scroll allow-native-scroll">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="w-full h-full max-w-4xl mx-auto border-x border-[#DCD6CC] flex justify-center">
          <div className="w-px h-full bg-[#E8E3DA]" />
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto text-center space-y-3 sm:space-y-4 md:space-y-5 my-auto relative z-10">
        
        {/* Monumental Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 sm:space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-[11px] sm:text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>{isAr ? 'متاح للعمل والتعاقد الفوري' : 'AVAILABLE FOR IMMEDIATE HIRE'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1816] font-syne tracking-tight leading-tight">
            {isAr ? (
              <>
                لنبنِ شيئًا <span className="text-[#0284C7]">يستحق</span> أن يُستخدم.
              </>
            ) : (
              <>
                Let’s build something <span className="text-[#0284C7]">worth</span> using.
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-[#6B655F] max-w-md mx-auto leading-relaxed">
            {isAr
              ? 'متاح لبدء المشاريع البرمجية وعقود التطوير عبر منصات العمل الحر العالمية الموثوقة أو عبر البريد مباشرة.'
              : 'Available for client projects and technical contracts on trusted global freelance platforms or via direct email.'}
          </p>
        </motion.div>

        {/* Premier Hiring Platforms: Upwork & Mostaql */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl mx-auto pt-0.5 text-left rtl:text-right"
        >
          {/* Upwork Profile Card */}
          <a
            href={PERSONAL_INFO.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 bg-white hover:bg-[#F0FDF4] border-2 border-[#14A800] hover:border-[#108A00] transition-all modern-flat-shadow group cursor-pointer block"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#14A800]">
                <Briefcase className="w-3.5 h-3.5 text-[#14A800]" />
                <span>UPWORK</span>
              </div>
              <span className="px-1.5 py-0.5 bg-[#DCFCE7] text-[#166534] text-[9px] font-mono font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#166534]" />
                <span>{isAr ? 'موثق' : 'Verified'}</span>
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1816] font-syne group-hover:text-[#14A800] transition-colors flex items-center justify-between">
              <span>{isAr ? 'ملفي على Upwork' : 'Hire on Upwork'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#14A800] group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#6B655F] mt-1 line-clamp-2">
              {isAr ? 'عقود برمجية مضمونة بالساعة أو بالمشروع مع حماية الدفع.' : 'Escrow-protected hourly or fixed-price contracts for web & mobile.'}
            </p>
          </a>

          {/* Mostaql Profile Card */}
          <a
            href={PERSONAL_INFO.mostaql}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 bg-white hover:bg-amber-50/60 border border-amber-300 hover:border-amber-400 transition-all modern-flat-shadow group cursor-pointer block"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-900">
                <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>MOSTAQL</span>
              </div>
              <span className="px-1.5 py-0.5 bg-amber-100 text-amber-900 text-[9px] font-mono font-bold">
                5.0 ★
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1816] font-syne group-hover:text-amber-900 transition-colors flex items-center justify-between">
              <span>{isAr ? 'ملفي على مستقل' : 'Hire on Mostaql'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#6B655F] mt-1 line-clamp-2">
              {isAr ? 'حساب مستقل: ibrahimphp، تقييم 5 نجوم ورضا كامل للعملاء.' : 'Mostaql profile (ibrahimphp) with 5.0 star rating and 100% satisfaction.'}
            </p>
          </a>
        </motion.div>

        {/* One-Click Copyable Email Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto pt-0.5"
        >
          <div className="flex items-center justify-between p-1.5 sm:p-2 bg-white border border-[#E2DDD5] modern-flat-shadow hover:border-[#0284C7] transition-all">
            <div className="flex items-center gap-2 px-2 sm:px-3">
              <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[#1A1816]">
                {PERSONAL_INFO.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 sm:py-1.5 bg-[#FAF8F5] hover:bg-[#F0F9FF] text-xs font-mono font-bold text-[#1A1816] border border-[#E8E3DA] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{isAr ? 'تم النسخ' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8C857D]" />
                  <span>{isAr ? 'نسخ' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Secondary Profile Links: GitHub & LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-0.5"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-2 transition-all modern-flat-shadow hover:border-[#0284C7]"
          >
            <Github className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-[#8C857D]" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-2 transition-all modern-flat-shadow hover:border-[#0284C7]"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-[#8C857D]" />
          </a>
        </motion.div>

        {/* Restart Experience Link */}
        <div className="pt-3 sm:pt-4 border-t border-[#E8E3DA] flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#8C857D] max-w-xl mx-auto">
          <span>{PERSONAL_INFO.name[lang]} • {new Date().getFullYear()}</span>

          <button
            onClick={onRestartExperience}
            className="flex items-center gap-1.5 text-[#0284C7] hover:text-[#0369A1] font-bold cursor-pointer transition-colors"
          >
            <span>{isAr ? 'العودة إلى البداية' : 'Return to Intro'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
