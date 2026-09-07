import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Globe, 
  Menu, 
  X, 
  ArrowUpRight, 
  Clock, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLanguage: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLanguage, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live local time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString(isAr ? 'ar-EG' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [isAr]);

  const navLinks = [
    { id: 'about', label: { en: 'About', ar: 'عن إبراهيم' } },
    { id: 'expertise', label: { en: 'Expertise', ar: 'الخبرات' } },
    { id: 'projects', label: { en: 'Projects', ar: 'المشاريع' } },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div 
        className={`max-w-7xl mx-auto border transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-[#E2DDD5] modern-flat-shadow py-2.5 px-4 sm:px-6' 
            : 'bg-white/90 backdrop-blur-md border-[#EAE6DF] shadow-md shadow-stone-900/5 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center gap-3 group text-left rtl:text-right cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#0284C7] flex items-center justify-center font-extrabold text-white text-xs shadow-sm shadow-[#0284C7]/25 group-hover:bg-[#0369A1] transition-colors font-syne">
              II
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-[#1A1816] group-hover:text-[#0284C7] transition-colors font-syne">
                  {PERSONAL_INFO.name[lang]}
                </span>
                <span className="w-1.5 h-1.5 bg-emerald-600 animate-pulse" title="Available for projects" />
              </div>
              <p className="text-[11px] text-[#6B655F] font-mono tracking-tight hidden sm:block">
                {isAr ? 'مطور ويب وفلاتر أول' : 'Senior Web & Flutter Dev'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (Compact & Minimal) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F5F2EC] p-1 border border-[#E8E3DA]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#1A1816] text-white shadow-xs' 
                      : 'text-[#605A54] hover:text-[#1A1816] hover:bg-white'
                  }`}
                >
                  {link.label[lang]}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Live Time & Language Toggle & Direct Action */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Live UTC Telemetry Badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F2EC] border border-[#E8E3DA] text-[11px] font-mono text-[#605A54]">
              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-medium text-[#1A1816]">{timeString}</span>
              <span className="text-[#C5BFAF]">|</span>
              <span className="text-emerald-700 font-bold">{isAr ? 'متاح' : 'ONLINE'}</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F7F5F0] border border-[#E2DDD5] text-xs font-semibold text-[#1A1816] transition-all cursor-pointer shadow-xs"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
              id="lang-switcher-btn"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-mono text-xs font-medium">{isAr ? 'English' : 'العربية'}</span>
              <span className="text-[10px] px-1.5 py-0.5 bg-[#0284C7]/10 text-[#0284C7] font-mono font-bold">
                {lang.toUpperCase()}
              </span>
            </button>

            {/* Direct Work Inquiry Button */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-md shadow-[#0284C7]/20 transition-all cursor-pointer"
              id="header-contact-btn"
            >
              <span>{isAr ? 'تواصل معي' : 'Contact Me'}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-[-90deg]' : ''}`} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-[#F5F2EC] hover:bg-[#EAE5DC] border border-[#E2DDD5] text-[#1A1816] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#E8E3DA] pb-2 space-y-1">
            <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-[#605A54] bg-[#F5F2EC] mb-2 border border-[#E8E3DA]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-600 animate-pulse" />
                <span>{PERSONAL_INFO.availability.status[lang]}</span>
              </div>
              <span className="font-medium text-[#1A1816]">{timeString}</span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-left rtl:text-right cursor-pointer transition-colors ${
                    isActive 
                      ? 'bg-[#1A1816] text-white' 
                      : 'text-[#2D2A26] hover:bg-[#F5F2EC]'
                  }`}
                >
                  <span>{link.label[lang]}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8A837A]'} ${isAr ? 'rotate-180' : ''}`} />
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#0284C7]/25"
              >
                <span>{isAr ? 'بدء مشروع جديد مع إبراهيم' : 'Initiate Project with Ibrahim'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
