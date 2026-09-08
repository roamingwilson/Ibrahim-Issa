import React from 'react';
import { Language } from '../types';
import { Globe, Mail } from 'lucide-react';

interface SystemTelemetryBarProps {
  currentScene: number;
  totalScenes: number;
  lang: Language;
  onToggleLanguage: () => void;
  onNavigate?: (direction: 1 | -1) => void;
  onJumpToContact: () => void;
}

export const SystemTelemetryBar: React.FC<SystemTelemetryBarProps> = ({
  currentScene,
  totalScenes,
  lang,
  onToggleLanguage,
  onJumpToContact,
}) => {
  const isAr = lang === 'ar';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Identity Label */}
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-3.5 py-2 border border-[#E2DDD5] modern-flat-shadow">
          <div className="w-2 h-2 bg-[#0284C7]" />
          <div className="font-mono text-xs text-[#1A1816] font-bold tracking-wider">
            {isAr ? 'إبراهيم عيسى' : 'IBRAHIM ISSA'}
          </div>
          <span className="text-[#C5BFAF] text-xs">|</span>
          <span className="text-[11px] font-mono text-[#0284C7] font-semibold hidden sm:inline">
            {isAr ? 'مطور ويب ومطور تطبيقات فلاتر' : 'WEB & FLUTTER APPS DEVELOPER'}
          </span>
        </div>

        {/* Top Actions: Language & Contact Jump */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white backdrop-blur-md border border-[#E2DDD5] text-xs font-mono text-[#1A1816] transition-all cursor-pointer modern-flat-shadow hover:border-[#0284C7]"
            title="Toggle Language"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="font-bold">{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {currentScene !== totalScenes - 1 && (
            <button
              onClick={onJumpToContact}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1A1816] hover:bg-[#0284C7] text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#FAF8F5]" />
              <span>{isAr ? 'تواصل' : 'Get in Touch'}</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
