import React from 'react';
import { Project, Language } from '../types';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onSelectProjectForInquiry?: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  lang, 
  onClose,
  onSelectProjectForInquiry 
}) => {
  if (!project) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-stone-900/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl border border-[#E2DDD5] bg-white text-[#1A1816] p-6 sm:p-8 lg:p-10 modern-elevated-shadow my-8 max-h-[90vh] overflow-y-auto"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:left-6 rtl:right-auto p-2 bg-[#F5F2EC] hover:bg-[#EAE5DC] border border-[#E2DDD5] text-[#6B655F] hover:text-[#1A1816] transition-all cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-3 border-b border-[#EFECE6] pb-6 pr-12 rtl:pl-12 rtl:pr-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] uppercase font-bold">
              {project.category.toUpperCase()}
            </span>
            <span className="text-[#C5BFAF]">•</span>
            <span className="text-[#6B655F] font-medium">{project.clientOrOrg}</span>
            <span className="text-[#C5BFAF]">•</span>
            <span className="text-[#6B655F] font-medium">{project.year}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1A1816] font-syne">
            {project.title[lang]}
          </h3>

          <p className="text-sm sm:text-base text-[#0284C7] font-semibold">
            {project.tagline[lang]}
          </p>

          <div className="text-xs font-mono text-[#6B655F]">
            <span className="text-[#8C857D]">{isAr ? 'الدور: ' : 'Role: '}</span>
            <span className="text-[#1A1816] font-bold">{project.role[lang]}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#EFECE6]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] space-y-1 shadow-xs">
              <div className="text-xl sm:text-2xl font-bold font-syne tracking-tight text-[#1A1816]">
                {m.value}
              </div>
              <div className="text-[11px] text-[#6B655F] font-mono">
                {m.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Dossier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-[#EFECE6]">
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-2 shadow-xs">
            <span className="text-xs font-mono text-[#B45309] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>{isAr ? 'التحدي' : 'THE CHALLENGE'}</span>
            </span>
            <p className="text-xs sm:text-sm text-[#443E38] leading-relaxed">
              {project.challenge[lang]}
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-[#E8E3DA] space-y-2 shadow-xs">
            <span className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>{isAr ? 'الحل الهندسي' : 'THE SOLUTION'}</span>
            </span>
            <p className="text-xs sm:text-sm text-[#443E38] leading-relaxed">
              {project.solution[lang]}
            </p>
          </div>
        </div>

        {/* Key Features Implemented */}
        <div className="py-6 border-b border-[#EFECE6] space-y-3">
          <span className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider">
            {isAr ? 'الميزات المنفذة' : 'KEY FEATURES'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features[lang].map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#FAF8F5] border border-[#E8E3DA] text-xs text-[#38332E] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="py-6 border-b border-[#EFECE6] space-y-3">
          <span className="text-xs font-mono text-[#6B655F] font-bold uppercase tracking-wider">
            {isAr ? 'التقنيات المستخدمة' : 'TECH STACK'}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-[#F5F2EC] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] font-medium shadow-2xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Notes */}
        <div className="p-4 bg-[#F0F9FF] border border-[#BAE6FD] my-6 text-xs text-[#0284C7] flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">{isAr ? 'ملاحظة معمارية: ' : 'Architecture Note: '}</span>
            <span className="font-medium">{project.architectureNotes[lang]}</span>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#F5F2EC] hover:bg-[#EAE5DC] border border-[#E2DDD5] text-xs font-semibold text-[#1A1816] transition-all cursor-pointer shadow-xs"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>

          <button
            onClick={() => {
              onClose();
              if (onSelectProjectForInquiry) {
                onSelectProjectForInquiry(project.title[lang]);
              }
              const contactSec = document.getElementById('contact');
              if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2 cursor-pointer"
          >
            <span>{isAr ? 'طلب مشروع مماثل' : 'Inquire About Similar Project'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
