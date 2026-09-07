import React from 'react';
import { Language, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Mail, 
  FolderGit2
} from 'lucide-react';
import { ElectronicButton } from '../components/ElectronicButton';

interface SceneProjectDetailProps {
  lang: Language;
  selectedProject: Project;
  onSelectProject: (project: Project) => void;
  onBackToProjects: () => void;
  onProceedToContact: (projectTitle: string) => void;
}

export const SceneProjectDetail: React.FC<SceneProjectDetailProps> = ({
  lang,
  selectedProject,
  onSelectProject,
  onBackToProjects,
  onProceedToContact,
}) => {
  const isAr = lang === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      <div className="max-w-5xl w-full mx-auto space-y-5 text-left rtl:text-right my-auto">
        
        {/* Navigation & Project Selector Header with Electronic Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E3DA] pb-3">
          <div className="flex items-center gap-3">
            <ElectronicButton
              onClick={onBackToProjects}
              variant="secondary"
              code="RETURN"
              icon={ArrowLeft}
              ledColor="blue"
              size="sm"
              isRtl={isAr}
            >
              {isAr ? 'الرجوع للمشاريع' : 'All Projects'}
            </ElectronicButton>

            <div className="text-xs font-mono text-[#8C857D] hidden sm:inline">
              [ {selectedProject.category.toUpperCase()} // {selectedProject.clientOrOrg} ]
            </div>
          </div>

          {/* Quick Switcher among all 4 projects */}
          <div className="flex items-center gap-1 bg-[#0A140E] border border-[#1E3B27] p-1 rounded-[3px] text-xs font-mono shadow-inner">
            {PROJECTS.map((proj, idx) => {
              const isActive = proj.id === selectedProject.id;
              return (
                <motion.button
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-2.5 py-1 transition-all cursor-pointer rounded-[2px] ${
                    isActive
                      ? 'bg-[#14261B] text-[#34D399] font-bold border border-[#34D399]/60 shadow-[0_0_8px_rgba(52,211,153,0.3)]'
                      : 'text-[#6F8A77] hover:text-[#E2E8F0] hover:bg-[#0F1E14]'
                  }`}
                >
                  <span>[0{idx + 1}]</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Clean Case Study Grid */}
        <div className="border border-[#E2DDD5] bg-white p-6 sm:p-8 modern-elevated-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Problem, Architecture & Solution */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Title & Category */}
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#0284C7] font-bold">
                {selectedProject.year}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1816] font-syne tracking-tight">
                {selectedProject.title[lang]}
              </h2>

              <p className="text-xs sm:text-sm text-[#554F48] font-medium">
                {selectedProject.tagline[lang]}
              </p>
            </div>

            {/* Core Challenge */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#0284C7] font-bold uppercase tracking-wider">
                {isAr ? 'التحدي الهندسي:' : 'THE CHALLENGE:'}
              </span>
              <p className="text-xs sm:text-sm text-[#38332E] leading-relaxed bg-[#FAF8F5] p-3 border border-[#E8E3DA]">
                {selectedProject.challenge[lang]}
              </p>
            </div>

            {/* Engineering Solution */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#1A1816] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{isAr ? 'الحل المعماري:' : 'THE ARCHITECTURE:'}</span>
              </span>
              <p className="text-xs sm:text-sm text-[#38332E] leading-relaxed">
                {selectedProject.solution[lang]}
              </p>
            </div>

            {/* 3 Key Delivered Features */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono text-[#8C857D] font-bold uppercase tracking-wider">
                {isAr ? 'الميزات المنفذة:' : 'DELIVERED:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features[lang].slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[#443E38]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Electronic Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <ElectronicButton
                onClick={() => onProceedToContact(selectedProject.title[lang])}
                variant="primary"
                code="DEPLOY_INQ"
                icon={Mail}
                ledColor="blue"
                pulseLed={true}
                size="md"
                isRtl={isAr}
              >
                {isAr ? 'طلب بناء مشروع مماثل' : 'Inquire Similar Project'}
              </ElectronicButton>

              <ElectronicButton
                onClick={onBackToProjects}
                variant="secondary"
                code="CATALOG"
                icon={FolderGit2}
                ledColor="amber"
                size="md"
                isRtl={isAr}
              >
                {isAr ? 'بقية المشاريع' : 'Other Cases'}
              </ElectronicButton>
            </div>

          </div>

          {/* Right Column: Telemetry & Verified Numbers */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Telemetry Panel */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] modern-flat-shadow space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono border-b border-[#E8E3DA] pb-2">
                <span className="text-[#0284C7] font-bold">TECH STACK AUDIT</span>
                <span className="text-emerald-700 font-semibold text-[10px]">PRODUCTION READY</span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2 bg-white border border-[#E2DDD5]">
                  <span className="text-[#6B655F]">STACK</span>
                  <span className="text-[#1A1816] font-bold">
                    {selectedProject.category === 'flutter' 
                      ? 'FLUTTER & DART' 
                      : selectedProject.category === 'cross-platform' 
                      ? 'FLUTTER + NEXT.JS' 
                      : 'NEXT.JS & REACT'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white border border-[#E2DDD5]">
                  <span className="text-[#6B655F]">PLATFORM</span>
                  <span className="text-[#0284C7] font-bold">
                    {selectedProject.category === 'flutter' 
                      ? 'IOS & ANDROID' 
                      : selectedProject.category === 'cross-platform' 
                      ? 'WEB & MOBILE' 
                      : 'MODERN WEB'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white border border-[#E2DDD5]">
                  <span className="text-[#6B655F]">DATA CACHE</span>
                  <span className="text-emerald-700 font-bold">SQLITE & EDGE</span>
                </div>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-2">
              {selectedProject.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#E8E3DA] text-center space-y-0.5">
                  <div className="text-lg font-bold font-syne text-[#1A1816]">{m.value}</div>
                  <div className="text-[10px] font-mono text-[#6B655F] truncate">{m.label[lang]}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
