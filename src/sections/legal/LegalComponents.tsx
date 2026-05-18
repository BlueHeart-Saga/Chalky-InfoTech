'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Eye, 
  CheckCircle2, 
  Mail, 
  Clock, 
  Globe,
  ArrowRight,
  Info,
  Scale,
  Users,
  Briefcase,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

// --- Shared Components ---

export function LegalHero({ 
  label, 
  title, 
  highlightedTitle,
  description 
}: { 
  label: string; 
  title: string; 
  highlightedTitle?: string;
  description: string; 
}) {
  return (
    <section className="relative pt-32 pb-20 bg-[#F5F0E8] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'url("/hero-pattern.png")', backgroundSize: '400px 400px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F5C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1F5C]/10 border border-[#7A1F5C]/20 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C]" />
            {label}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1A1A] mb-6 leading-[1.1]">
            {title} {highlightedTitle && <span className="text-[#7A1F5C]">{highlightedTitle}</span>}
          </h1>
          <p className="text-[#8A8A8A] text-lg md:text-xl font-medium leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function LegalSidebar({ 
  sections, 
  activeSection, 
  onSectionClick 
}: { 
  sections: { id: string; label: string }[]; 
  activeSection: string;
  onSectionClick: (id: string) => void;
}) {
  return (
    <div className="hidden lg:block sticky top-32 self-start w-64 shrink-0">
      <nav className="flex flex-col gap-1 border-l-2 border-[#EFE7DD]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all text-left relative
              ${activeSection === section.id 
                ? 'text-[#7A1F5C]' 
                : 'text-[#8A8A8A] hover:text-[#1A1A1A] hover:bg-[#F5F0E8]/50'
              }`}
          >
            {activeSection === section.id && (
              <motion.div 
                layoutId="activeIndicator"
                className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-[#7A1F5C]"
              />
            )}
            {section.label}
          </button>
        ))}
      </nav>
      
      <div className="mt-10 p-6 bg-[#7A1F5C] rounded-2xl text-white shadow-xl shadow-[#7A1F5C]/20">
        <h4 className="font-bold mb-2">Need Help?</h4>
        <p className="text-white/80 text-xs mb-4">Have questions about our policies? Our compliance team is here to help.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 text-white text-xs font-bold hover:gap-3 transition-all">
          Contact Support <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export function LegalAccordion({ 
  id, 
  title, 
  icon: Icon, 
  children,
  isOpen,
  onToggle
}: { 
  id: string; 
  title: string; 
  icon: any; 
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div id={id} className="scroll-mt-32 mb-8 last:mb-0">
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all text-left
          ${isOpen 
            ? 'bg-white border-[#7A1F5C]/30 shadow-lg shadow-[#7A1F5C]/5' 
            : 'bg-white border-[#EFE7DD] hover:border-[#7A1F5C]/30'
          }`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl transition-colors
            ${isOpen ? 'bg-[#7A1F5C] text-white' : 'bg-[#F5F0E8] text-[#7A1F5C]'}`}>
            <Icon size={24} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#8A8A8A]"
        >
          <ChevronRight size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-4 text-[#4A4A4A] leading-relaxed prose prose-plum max-w-none">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LegalContactCard({ 
  title = "Compliance Contact",
  description = "If you have any questions regarding this policy or our data practices, please contact us."
}) {
  return (
    <div className="bg-[#F5F0E8] border border-[#EFE7DD] rounded-3xl p-8 md:p-10 mt-16 shadow-inner">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="bg-[#7A1F5C] p-4 rounded-2xl text-white shadow-xl">
          <Mail size={32} />
        </div>
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-[#8A8A8A] font-medium max-w-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <a href="mailto:compliance@chalkyinfotech.com" className="bg-[#7A1F5C] text-white px-8 py-3 rounded-xl font-bold text-center hover:bg-[#C2185B] transition-all shadow-lg shadow-[#7A1F5C]/20">
            Email Compliance
          </a>
          <Link href="/contact" className="bg-white text-[#1A1A1A] border border-[#EFE7DD] px-8 py-3 rounded-xl font-bold text-center hover:bg-[#F5F0E8] transition-all">
            Help Center
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- Content Helper Components ---

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#7A1F5C] shrink-0 mt-1" />
          <span className="text-[#4A4A4A]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContentBlock({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      {title && <h4 className="text-[#1A1A1A] font-bold text-lg mb-3">{title}</h4>}
      <div className="text-[#4A4A4A] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
