import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { PortfolioStage } from './components/PortfolioStage';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch (e) {
      // In sandboxed environments localStorage access might be restricted
    }
    return 'en';
  });
  const isAr = lang === 'ar';

  // Synchronize HTML lang, dir attributes and persist to storage on language change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang, isAr]);

  const handleToggleLanguage = () => {
    setLang(prev => {
      const nextLang = prev === 'en' ? 'ar' : 'en';
      try {
        localStorage.setItem('portfolio_lang', nextLang);
      } catch (e) {
        // ignore
      }
      return nextLang;
    });
  };

  return (
    <div 
      className={`w-screen h-screen overflow-hidden bg-[#FAF9F6] text-[#1A1816] selection:bg-[#0284C7] selection:text-white antialiased ${
        isAr ? 'font-arabic' : 'font-jakarta'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <PortfolioStage 
        lang={lang} 
        onToggleLanguage={handleToggleLanguage} 
      />
    </div>
  );
}
