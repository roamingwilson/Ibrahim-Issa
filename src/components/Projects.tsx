import React, { useState } from 'react';
import { Language, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  FolderGit2, 
  Smartphone, 
  ArrowRight, 
  Maximize2
} from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onOpenProjectModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onOpenProjectModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cross-platform' | 'flutter' | 'web'>('all');
  const isAr = lang === 'ar';

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="font-semibold">{isAr ? 'المشاريع المختارة' : 'SELECTED PROJECTS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
              {isAr ? (
                <>
                  مشاريع وتطبيقات رائدة{' '}
                  <span className="text-[#0284C7]">صُنعت للأداء العالي</span> والنمو المستمر.
                </>
              ) : (
                <>
                  Featured web platforms and{' '}
                  <span className="text-[#0284C7]">fluid mobile apps</span>.
                </>
              )}
            </h2>
            <p className="text-base text-[#554F48] leading-relaxed">
              {isAr
                ? 'مجموعة مختارة من التطبيقات ومنصات الويب التي قمت بتطويرها وإطلاقها، مع مقاييس أداء حقيقية.'
                : 'Selected applications engineered for high performance, intuitive UX, and clean architecture.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#E2DDD5] text-xs font-mono modern-flat-shadow">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 transition-all cursor-pointer ${
                activeFilter === 'all' ? 'bg-[#1A1816] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'
              }`}
            >
              {isAr ? 'الكل' : 'ALL'}
            </button>
            <button
              onClick={() => setActiveFilter('cross-platform')}
              className={`px-3.5 py-1.5 transition-all cursor-pointer ${
                activeFilter === 'cross-platform' ? 'bg-[#1A1816] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'
              }`}
            >
              {isAr ? 'ويب وفلاتر' : 'CROSS-PLATFORM'}
            </button>
            <button
              onClick={() => setActiveFilter('flutter')}
              className={`px-3.5 py-1.5 transition-all cursor-pointer ${
                activeFilter === 'flutter' ? 'bg-[#0284C7] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'
              }`}
            >
              FLUTTER
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3.5 py-1.5 transition-all cursor-pointer ${
                activeFilter === 'web' ? 'bg-[#1A1816] text-white font-semibold shadow-xs' : 'text-[#6B655F] hover:text-[#1A1816]'
              }`}
            >
              WEB
            </button>
          </div>
        </div>

        {/* Case Study Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="border border-[#E2DDD5] bg-white p-6 sm:p-8 lg:p-10 modern-elevated-shadow relative overflow-hidden group hover:border-[#0284C7] transition-all duration-300"
            >
              {/* Subtle top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5" 
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Case Study Metadata & Story */}
                <div className="lg:col-span-6 space-y-5 text-left rtl:text-right">
                  
                  {/* Category & Client Header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span 
                      className="px-2.5 py-1 text-[11px] font-bold border"
                      style={{ 
                        color: project.accentColor, 
                        borderColor: `${project.accentColor}40`,
                        backgroundColor: `${project.accentColor}12`
                      }}
                    >
                      CASE 0{index + 1} // {project.category.toUpperCase()}
                    </span>
                    <span className="text-[#C5BFAF]">•</span>
                    <span className="text-[#6B655F] font-medium">{project.clientOrOrg}</span>
                    <span className="text-[#C5BFAF]">•</span>
                    <span className="text-[#6B655F] font-medium">{project.year}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1816] font-syne group-hover:text-[#0284C7] transition-colors">
                      {project.title[lang]}
                    </h3>
                    <p className="text-sm text-[#0284C7] font-semibold mt-1">
                      {project.tagline[lang]}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm text-[#4D4741] leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Verified Impact Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#EFECE6]">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <div className="text-lg font-bold font-syne tracking-tight" style={{ color: project.accentColor }}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-[#6B655F] font-mono">
                          {metric.label[lang]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-mono text-[#443E38] font-medium shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-mono text-[#8C857D]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions: View Case Study Deep Dive Modal */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => onOpenProjectModal(project)}
                      className="px-5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-all shadow-md shadow-[#0284C7]/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{isAr ? 'تفاصيل المشروع' : 'View Project Details'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                    </button>

                    <button
                      onClick={() => onOpenProjectModal(project)}
                      className="text-xs font-mono text-[#6B655F] hover:text-[#1A1816] flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{isAr ? 'المواصفات' : 'Specs'}</span>
                    </button>
                  </div>

                </div>

                {/* Right: Interactive Dual-Viewport Device Frame Simulation */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="border border-[#E2DDD5] bg-[#FAF8F5] p-4 space-y-4 shadow-sm">
                    
                    {/* Simulated Web Viewport Browser Window */}
                    <div className="border border-[#E2DDD5] bg-white overflow-hidden modern-flat-shadow">
                      {/* Browser Header Bar */}
                      <div className="flex items-center justify-between px-3 py-2 bg-[#F5F2EC] border-b border-[#E8E3DA] text-[11px] font-mono text-[#6B655F]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-[#DCD6CC]" />
                          <div className="w-2 h-2 bg-[#DCD6CC]" />
                          <div className="w-2 h-2 bg-[#DCD6CC]" />
                        </div>
                        <div className="px-3 py-0.5 bg-white border border-[#E2DDD5] text-[10px] text-[#443E38] max-w-[220px] truncate font-medium">
                          {project.webPreview.url}
                        </div>
                        <span className="text-emerald-700 text-[10px] font-bold">HTTPS // 200 OK</span>
                      </div>

                      {/* Browser Content preview */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-[#1A1816] font-syne">
                            {project.webPreview.headline[lang]}
                          </div>
                          <span className="text-[10px] font-mono text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 border border-[#BAE6FD] font-semibold">
                            WEB RUNTIME
                          </span>
                        </div>
                        <p className="text-[11px] text-[#554F48] font-mono">
                          {project.webPreview.subtext[lang]}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EFECE6] text-center">
                          {project.webPreview.stats.map((s, sIdx) => (
                            <div key={sIdx} className="p-2 bg-[#FAF8F5] border border-[#E8E3DA]">
                              <div className="text-[10px] text-[#8C857D] font-mono">{s.label}</div>
                              <div className="text-xs font-bold text-[#1A1816] mt-0.5">{s.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Simulated Flutter Mobile Screen Frame */}
                    <div className="border border-[#D5CFC5] bg-[#F7F4EE] p-3 space-y-2 modern-flat-shadow">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#1A1816] border-b border-[#E8E3DA] pb-2 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{project.mobilePreview.screenTitle[lang]}</span>
                        </span>
                        <span className="text-[10px] text-[#0284C7] font-bold">FLUTTER // IOS & ANDROID</span>
                      </div>

                      <div className="space-y-1.5">
                        {project.mobilePreview.items.map((item, iIdx) => (
                          <div 
                            key={iIdx} 
                            className="flex items-center justify-between p-2.5 bg-white border border-[#E8E3DA] text-[11px] shadow-xs"
                          >
                            <div>
                              <div className="font-semibold text-[#1A1816]">{item.title}</div>
                              <div className="text-[10px] text-[#6B655F] font-mono">{item.subtitle}</div>
                            </div>
                            <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] font-bold">
                              {item.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
