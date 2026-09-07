import React from 'react';
import { Language } from '../types';
import { Globe, Mail } from 'lucide-react';
import { ElectronicButton } from './ElectronicButton';
import { motion } from 'motion/react';

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
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-3 sm:p-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Hardware Identity Module */}
        <div className="flex items-center gap-2.5 bg-[#0C140F]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#1E3B27] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] select-none">
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
            <span className="absolute w-2 h-2 rounded-full bg-[#10B981] animate-ping opacity-60" />
          </div>
          <div className="font-mono text-xs text-[#E2E8F0] font-bold tracking-wider">
            {isAr ? 'إبراهيم عيسى' : 'IBRAHIM ISSA'}
          </div>
          <span className="text-[#3A5643] text-xs font-mono">::</span>
          <span className="text-[11px] font-mono text-[#38BDF8] font-bold hidden sm:inline">
            {isAr ? 'تطبيقات فلاتر وويب' : 'FLUTTER & WEB ARCH'}
          </span>
          <span className="text-[9px] font-mono px-1 bg-[#16291D] text-[#86EFAC] border border-[#235835] rounded-sm hidden md:inline">
            V3.2
          </span>
        </div>

        {/* Top Electronic Actions: Language Toggle & Contact Trigger */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Button with Electronic Vibe */}
          <ElectronicButton
            onClick={onToggleLanguage}
            variant="secondary"
            code={isAr ? 'EN' : 'AR'}
            icon={Globe}
            ledColor="blue"
            size="sm"
            isRtl={isAr}
            title={isAr ? 'تبديل اللغة' : 'Switch Language'}
            aria-label="Toggle Language"
          >
            {isAr ? 'English' : 'عربي'}
          </ElectronicButton>

          {/* Quick Contact Electronic Button */}
          {currentScene !== totalScenes - 1 && (
            <ElectronicButton
              onClick={onJumpToContact}
              variant="primary"
              code="SYS_MSG"
              icon={Mail}
              ledColor="amber"
              size="sm"
              isRtl={isAr}
              className="hidden sm:inline-flex"
            >
              {isAr ? 'تواصل' : 'Get in Touch'}
            </ElectronicButton>
          )}
        </div>

      </div>
    </header>
  );
};
