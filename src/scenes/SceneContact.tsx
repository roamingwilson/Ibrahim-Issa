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
  Send, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface SceneContactProps {
  lang: Language;
  prefilledSubject?: string;
  onRestartExperience: () => void;
}

export const SceneContact: React.FC<SceneContactProps> = ({
  lang,
  prefilledSubject = '',
  onRestartExperience,
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: prefilledSubject || '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
    }, 2800);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="w-full h-full max-w-4xl mx-auto border-x border-[#DCD6CC] flex justify-center">
          <div className="w-px h-full bg-[#E8E3DA]" />
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto text-center space-y-6 relative z-10">
        
        {/* Monumental Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1A1816] font-syne tracking-tight leading-[1.15]">
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
              ? 'متاح لمناقشة المشاريع الهندسية وعقود التطوير الاستشارية.'
              : 'Available for technical engineering and strategic contract development.'}
          </p>
        </motion.div>

        {/* One-Click Copyable Email Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto pt-2"
        >
          <div className="flex items-center justify-between p-2 bg-white border border-[#E2DDD5] modern-flat-shadow hover:border-[#0284C7] transition-all">
            <div className="flex items-center gap-2.5 px-3">
              <Mail className="w-4 h-4 text-[#0284C7]" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[#1A1816]">
                {PERSONAL_INFO.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F0F9FF] text-xs font-mono font-bold text-[#1A1816] border border-[#E8E3DA] flex items-center gap-1.5 transition-all cursor-pointer"
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

        {/* Direct Actions: Send Direct Message & Social Channels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-5 py-2.5 bg-[#1A1816] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{isFormOpen ? (isAr ? 'إغلاق النموذج' : 'Close Form') : (isAr ? 'إرسال رسالة مباشرة' : 'Send Message')}</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-2 transition-all modern-flat-shadow"
          >
            <Github className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-white hover:bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-mono text-[#1A1816] flex items-center gap-2 transition-all modern-flat-shadow"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Interactive In-Scene Contact Form */}
        {isFormOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-5 bg-white border border-[#E2DDD5] modern-elevated-shadow space-y-3 text-left rtl:text-right text-xs"
          >
            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-bold">
                {isAr ? 'تم استلام رسالتك بنجاح. سأتواصل معك قريباً.' : 'Message received. I will follow up soon.'}
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <label className="font-mono text-[#6B655F] uppercase tracking-wider block text-[10px]">
                    {isAr ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 bg-[#FAF8F5] border border-[#E2DDD5] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[#6B655F] uppercase tracking-wider block text-[10px]">
                    {isAr ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2 bg-[#FAF8F5] border border-[#E2DDD5] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[#6B655F] uppercase tracking-wider block text-[10px]">
                    {isAr ? 'المشروع' : 'Scope'}
                  </label>
                  <input
                    type="text"
                    value={formData.projectScope}
                    placeholder="e.g. Apex Financial Platform"
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full p-2 bg-[#FAF8F5] border border-[#E2DDD5] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[#6B655F] uppercase tracking-wider block text-[10px]">
                    {isAr ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2 bg-[#FAF8F5] border border-[#E2DDD5] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
              </>
            )}
          </motion.form>
        )}

        {/* Restart Experience Link */}
        <div className="pt-6 border-t border-[#E8E3DA] flex items-center justify-between text-xs font-mono text-[#8C857D] max-w-md mx-auto">
          <span>{PERSONAL_INFO.name[lang]} • 2025</span>

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
