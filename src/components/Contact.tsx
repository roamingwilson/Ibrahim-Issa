import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Star,
  Github,
  Linkedin
} from 'lucide-react';

interface ContactProps {
  lang: Language;
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ lang, prefilledSubject = '' }) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Cross-Platform (Web + Flutter)',
    message: prefilledSubject ? `Hi Ibrahim, I would like to discuss building a system similar to "${prefilledSubject}".` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-[#E8E3DA] bg-[#FAF8F5] overflow-hidden">
      
      {/* Subtle backdrop warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-14 space-y-4 text-left rtl:text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2DDD5] text-xs font-mono text-[#0284C7] shadow-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">{isAr ? 'تواصل معي' : 'GET IN TOUCH'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1816] font-syne leading-tight">
            {isAr ? (
              <>
                لديك فكرة مشروع؟{' '}
                <span className="text-[#0284C7]">
                  دعنا نحولها إلى واقع
                </span>.
              </>
            ) : (
              <>
                Ready to build something{' '}
                <span className="text-[#0284C7]">
                  fast and dependable?
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#554F48] max-w-2xl leading-relaxed">
            {isAr
              ? 'سواء كنت بحاجة إلى تطبيق فلاتر أو منصة ويب حديثة، أنا متاح للعمل والتعاون معك.'
              : 'Whether you need a high-performance Flutter mobile app, a modern web app, or full-stack consulting, let’s talk.'}
          </p>
        </div>

        {/* Contact Grid: Terminal Form + Direct Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Fast-Action Hub */}
          <div className="lg:col-span-5 space-y-6 text-left rtl:text-right">
            
            {/* Direct Email Command Box */}
            <div className="p-6 sm:p-8 border border-[#E2DDD5] bg-white space-y-4 modern-flat-shadow">
              <span className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider">
                {isAr ? 'البريد الإلكتروني المباشر' : 'DIRECT EMAIL'}
              </span>

              <div className="p-4 bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[#0284C7] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#1A1816] font-bold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-white hover:bg-[#F5F2EC] border border-[#DCD6CC] text-[#1A1816] text-xs font-mono flex items-center gap-1.5 transition-all shrink-0 cursor-pointer shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700 font-bold">{isAr ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6B655F]" />
                      <span className="font-semibold">{isAr ? 'نسخ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#554F48]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>{isAr ? 'رد سريع خلال 24 ساعة' : 'Fast response within 24 hours'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{isAr ? 'حماية سرية كاملة (NDA)' : 'Strict NDA confidentiality'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C857D] shrink-0" />
                  <span>{isAr ? 'متاح للعمل عن بُعد عالمياً' : 'Available for remote work worldwide'}</span>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="p-6 border border-[#CBE6D8] bg-[#F1F8F4] space-y-2 modern-flat-shadow">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold">
                <span className="w-2 h-2 bg-emerald-600 animate-pulse" />
                <span>{isAr ? 'حالة التفرغ' : 'AVAILABILITY'}</span>
              </div>
              <h4 className="text-lg font-bold text-[#143B2A] font-syne">
                {PERSONAL_INFO.availability.status[lang]}
              </h4>
              <p className="text-xs text-[#285A43] leading-relaxed">
                {isAr
                  ? 'متاح لبدء مشاريع جديدة عبر منصة مستقل أو التعاقد الحر.'
                  : 'Open for project builds on Mostaql or direct remote contracts.'}
              </p>
            </div>

            {/* Mostaql Official Profile Card */}
            <div className="p-6 border border-amber-200 bg-amber-50/70 space-y-3 modern-flat-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-900 font-bold">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span>{isAr ? 'منصة مستقل' : 'MOSTAQL PROFILE'}</span>
                </div>
                <span className="px-2 py-0.5 bg-amber-200/60 text-amber-900 text-[10px] font-mono font-bold">
                  5.0 ★
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-amber-950 font-syne">
                  {isAr ? 'الملف الشخصي وتقييمات العملاء' : 'Official Mostaql Freelance Profile'}
                </h4>
                <p className="text-xs text-amber-900/80 leading-relaxed font-mono">
                  mostaql.com/u/ibrahimphp
                </p>
              </div>
              <a
                href={PERSONAL_INFO.mostaql}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>{isAr ? 'زيارة ملفي والتوظيف في مستقل' : 'Hire on Mostaql'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>

            {/* Social & Professional Links (GitHub, LinkedIn) */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center justify-center gap-2 transition-all modern-flat-shadow hover:border-[#0284C7]"
              >
                <Github className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#8C857D]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center justify-center gap-2 transition-all modern-flat-shadow hover:border-[#0284C7]"
              >
                <Linkedin className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#8C857D]" />
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Inquiry Terminal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 border border-[#E2DDD5] bg-white modern-elevated-shadow relative">
              
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4 mb-6 text-xs font-mono text-[#6B655F]">
                <span className="flex items-center gap-2 text-[#0284C7] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إرسال رسالة' : 'SEND A MESSAGE'}</span>
                </span>
                <span className="font-semibold text-[#8C857D]">{isAr ? 'رد خلال 24 ساعة' : 'REPLY WITHIN 24H'}</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1816] font-syne">
                    {isAr ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully'}
                  </h3>
                  <p className="text-sm text-[#554F48] max-w-md mx-auto">
                    {isAr
                      ? 'شكراً لك. سأقوم بمراجعة التفاصيل والرد عليك عبر بريدك الإلكتروني خلال 24 ساعة.'
                      : 'Thank you. I have received your note and will get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#F5F2EC] hover:bg-[#EAE5DC] text-[#1A1816] text-xs font-mono mt-4 cursor-pointer font-semibold shadow-xs"
                  >
                    {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left rtl:text-right">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#38332E] font-bold">
                        {isAr ? 'الاسم *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isAr ? 'مثال: أحمد المنصور' : 'e.g., Alexander Vance'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] text-sm text-[#1A1816] placeholder-[#A8A196] outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#38332E] font-bold">
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your-email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] text-sm text-[#1A1816] placeholder-[#A8A196] outline-none transition-all font-mono shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#38332E] font-bold">
                      {isAr ? 'نوع المشروع' : 'Project Type'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'cross', en: 'Dual (Web + Flutter)', ar: 'ويب وتطبيق فلاتر' },
                        { id: 'flutter', en: 'Flutter Mobile App', ar: 'تطبيق فلاتر للهاتف' },
                        { id: 'web', en: 'Enterprise Web System', ar: 'منصة ويب حديثة' }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, projectType: item.en })}
                          className={`px-3 py-2.5 text-xs font-mono border transition-all text-center cursor-pointer ${
                            formData.projectType === item.en 
                              ? 'bg-[#F0F9FF] border-[#0284C7] text-[#0284C7] font-bold modern-flat-shadow' 
                              : 'bg-[#FAF8F5] border-[#E2DDD5] text-[#6B655F] hover:text-[#1A1816] hover:bg-white'
                          }`}
                        >
                          {isAr ? item.ar : item.en}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#38332E] font-bold">
                      {isAr ? 'تفاصيل المشروع أو الرسالة *' : 'Message or Project Summary *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={isAr ? 'صف باختصار فكرة المشروع، المنصات المطلوبة، والجدول الزمني...' : 'Describe your project goals, required platforms, or questions...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] text-sm text-[#1A1816] placeholder-[#A8A196] outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm transition-all shadow-md shadow-[#0284C7]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] font-mono text-[#6B655F]">
                      {isAr ? 'أو راسلني مباشرة على: ' : 'Or email directly to: '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#0284C7] font-bold hover:underline">
                        {PERSONAL_INFO.email}
                      </a>
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
