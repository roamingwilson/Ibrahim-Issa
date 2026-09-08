import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8E3DA] bg-[#FAF8F5] py-12 relative text-[#6B655F] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EFECE6] text-center md:text-left rtl:md:text-right">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0284C7] flex items-center justify-center font-bold text-white text-xs shadow-xs font-syne">
              II
            </div>
            <div>
              <div className="font-syne font-bold text-sm text-[#1A1816]">
                {PERSONAL_INFO.name[lang]}
              </div>
              <div className="text-[11px] text-[#8C857D]">
                {PERSONAL_INFO.role[lang]} • 6+ YRS EXP
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <a href="#about" className="hover:text-[#0284C7] transition-colors">{isAr ? 'عن إبراهيم' : 'About'}</a>
            <a href="#expertise" className="hover:text-[#0284C7] transition-colors">{isAr ? 'المعمارية' : 'Architecture'}</a>
            <a href="#projects" className="hover:text-[#0284C7] transition-colors">{isAr ? 'المشاريع' : 'Work'}</a>
            <a href={PERSONAL_INFO.mostaql} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 font-bold transition-colors">{isAr ? 'مستقل' : 'Mostaql'}</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href="#contact" className="hover:text-[#0284C7] transition-colors">{isAr ? 'تواصل' : 'Contact'}</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#F5F2EC] border border-[#E2DDD5] text-[#1A1816] font-semibold transition-all cursor-pointer modern-flat-shadow"
          >
            <span>{isAr ? 'إلى الأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0284C7]" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-[#8C857D]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name[lang]}. {isAr ? 'كافة الحقوق محفوظة. تطوير متكامل بـ Flutter و Laravel و React.' : 'All rights reserved. Built with Flutter, React, Laravel & Clean Architecture.'}
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-600" />
            <span className="font-medium text-[#554F48]">{isAr ? 'عالي الأداء والاستقرار' : 'High Performance & Clean Code'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
