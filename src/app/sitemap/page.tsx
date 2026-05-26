'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Globe, ArrowRight, FileText, Briefcase, Building2, 
  ShieldCheck, Mail, Globe2, Code2, TrendingUp, 
  Clock, Users, UserPlus, Settings, Cpu,
  Radio, Shield, Brain, Landmark, Activity, 
  ShoppingCart, Factory, BookOpen, Scale, Search, 
  UserCheck, CheckCircle2, Star, HelpCircle, Newspaper, Heart,
  Podcast, Rss
} from 'lucide-react';
import { SERVICES, INDUSTRIES } from '@/constants';

// --- Components ---

const Node = ({ label, href, icon: Icon, delay = 0, variant = 'default' }: { 
  label: string; 
  href: string; 
  icon?: any; 
  delay?: number;
  variant?: 'default' | 'primary' | 'ghost';
}) => {
  const isPrimary = variant === 'primary';
  const isGhost = variant === 'ghost';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative group w-full sm:w-auto"
    >
      <Link href={href}>
        <div className={`
          flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300
          ${isPrimary 
            ? 'bg-[#7A1F5C] text-white shadow-xl shadow-[#7A1F5C]/20' 
            : isGhost 
              ? 'bg-[#FDFCFB] border border-dashed border-[#7A1F5C]/30 text-[#7A1F5C] hover:bg-[#7A1F5C]/5'
              : 'bg-[#F3E8FF] text-[#1A1A1A] border border-[#E9D5FF] hover:border-[#7A1F5C]/50 shadow-sm'
          }
        `}>
          {Icon && <Icon size={18} className={isPrimary ? 'text-white' : 'text-[#7A1F5C]'} />}
          <span className={`text-[13px] font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] sm:max-w-none`}>
            {label}
          </span>
          {!isPrimary && (
            <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#7A1F5C]" />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const DottedLine = ({ className = "" }: { className?: string }) => (
  <div className={`border-l-2 border-dotted border-[#7A1F5C]/20 ${className}`} />
);

const HorizontalLine = ({ className = "" }: { className?: string }) => (
  <div className={`border-t-2 border-dotted border-[#7A1F5C]/20 ${className}`} />
);

function getCategorySlug(categoryName: string) {
  return categoryName
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// --- Page ---

export default function SitemapPage() {
  const companyLinks = [
    { label: 'About Us', href: '/about', icon: Globe2 },
    { label: 'Our Story', href: '/about#story', icon: BookOpen },
    { label: 'Mission & Vision', href: '/about#mission', icon: TrendingUp },
    { label: 'Core Values', href: '/about#values', icon: Star },
    { label: 'Corporate Social Responsibility', href: '/csr', icon: Heart },
    { label: 'Find Jobs', href: '/jobs', icon: Search },
    { label: 'Contact Team', href: '/contact', icon: Mail },
    { label: 'Support FAQs', href: '/faqs', icon: HelpCircle },
  ];

  const insightsLinks = [
    // Section 1: Insights & Knowledge
    { label: '• Blogs', href: '/insights/blogs' },
    { label: '• Case Studies', href: '/insights/case-studies' },
    { label: '• Newsletters', href: '/insights/newsletters' },
    { label: '• Podcasts', href: '/insights/podcasts' },
    
    // Section 2: News & Events
    { label: '• Industry Events', href: '/insights/industry-events' },
    { label: '• Company Announcements', href: '/insights/company-announcements' },
    { label: '• Achievements', href: '/insights/achievements' },
    { label: '• Awards & Milestones', href: '/insights/awards-milestones' },
    
    // Section 3: Success Stories
    { label: '• Client Transformations', href: '/insights/client-transformations' },
    { label: '• Impact Metrics', href: '/insights/impact-metrics' },
    { label: '• Testimonials', href: '/insights/testimonials' },
    
    // Section 4: Life at Chalky Infotech
    { label: '• Celebrations', href: '/insights/celebrations' },
    { label: '• Team Culture', href: '/insights/team-culture' },
    { label: '• Posters', href: '/insights/posters' },
    { label: '• Community', href: '/insights/community' }
  ];

  const complianceLinks = [
    { label: 'Verification', href: '/verification', icon: UserCheck },
    { label: 'GDPR Compliance', href: '/gdpr', icon: ShieldCheck },
    { label: 'Privacy Policy', href: '/privacy-policy', icon: FileText },
    { label: 'Cookie Policy', href: '/cookie-policy', icon: Shield },
    { label: 'Terms of Use', href: '/terms-conditions', icon: Scale },
    { label: 'Right To Work', href: '/right-to-work', icon: CheckCircle2 },
    { label: 'Modern Slavery Statement', href: '/modern-slavery-statement', icon: Scale },
    { label: 'Disclaimer', href: '/disclaimer', icon: FileText },
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-40 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-black text-[#7A1F5C] uppercase tracking-[0.3em] mb-4"
          >
            Site Architecture • User Journey
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tighter"
          >
            Platform <span className="text-[#7A1F5C]">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto font-medium"
          >
            Explore our complete digital ecosystem. From strategic talent acquisition to enterprise industry solutions, navigate every corner of our platform.
          </motion.p>
        </div>

        {/* --- Sitemap Flow --- */}
        <div className="relative flex flex-col items-center">
          
          {/* Top Row: Introduction */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-16">
            <Node label="Global Search" href="/jobs" variant="ghost" icon={Search} delay={0.1} />
            <div className="hidden sm:block w-16 h-0 border-t-2 border-dotted border-[#7A1F5C]/30" />
            <Node label="Platform Entry" href="/" variant="ghost" icon={Globe} delay={0.2} />
            <div className="hidden sm:block w-16 h-0 border-t-2 border-dotted border-[#7A1F5C]/30" />
            <Node label="Onboarding" href="/contact" variant="ghost" icon={Mail} delay={0.3} />
          </div>

          <DottedLine className="h-16" />

          {/* Central Section */}
          <div className="relative w-full max-w-5xl flex flex-col items-center mb-20">
            
            {/* Split Header */}
            <div className="flex flex-col sm:flex-row justify-between w-full mb-12 gap-8">
              <div className="w-full sm:w-1/3 flex flex-col items-center">
                <Node label="Corporate Identity" href="/about" delay={0.4} />
              </div>
              <div className="hidden sm:block w-1/3" />
              <div className="w-full sm:w-1/3 flex flex-col items-center">
                <Node label="Client Gateway" href="/contact" delay={0.4} />
              </div>
            </div>

            {/* Center Logo Node */}
            <div className="relative py-12 flex justify-center items-center">
              <Link href="/">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-[240px] h-[80px] relative cursor-pointer"
                >
                  <Image 
                    src="/logo.png" 
                    alt="Chalky InfoTech Logo" 
                    fill 
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  />
                </motion.div>
              </Link>
            </div>

          </div>

          {/* Main Branches Connector */}
          <div className="w-full max-w-6xl relative mb-16 hidden xl:block">
            <HorizontalLine className="w-full" />
            <div className="flex justify-between">
              <DottedLine className="h-16" />
              <DottedLine className="h-16" />
              <DottedLine className="h-16" />
              <DottedLine className="h-16" />
              <DottedLine className="h-16" />
            </div>
          </div>

          {/* Tier 1 Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 w-full max-w-7xl mb-24 px-4">
            
            {/* Company Column */}
            <div className="flex flex-col items-center">
              <Node label="Company & Careers" href="/about" variant="default" icon={Building2} delay={0.7} />
              <DottedLine className="h-10 my-4" />
              <div className="space-y-3 w-full flex flex-col items-center">
                {companyLinks.map((link, i) => (
                  <Node key={link.href} label={link.label} href={link.href} variant="ghost" delay={0.8 + (i * 0.05)} />
                ))}
              </div>
            </div>

            {/* Strategic Services Column */}
            <div className="flex flex-col items-center">
              <Node label="Strategic Services" href="/services" variant="default" icon={Briefcase} delay={0.75} />
              <DottedLine className="h-10 my-4" />
              <div className="space-y-3 w-full flex flex-col items-center">
                {SERVICES.map((link, i) => (
                  <Node key={link.slug} label={link.label} href={`/services/${link.slug}`} variant="ghost" delay={0.85 + (i * 0.05)} />
                ))}
              </div>
            </div>

            {/* Industry Expertise Column */}
            <div className="flex flex-col items-center">
              <Node label="Industry Expertise" href="/industries" variant="default" icon={Cpu} delay={0.8} />
              <DottedLine className="h-10 my-4" />
              <div className="space-y-3 w-full flex flex-col items-center">
                {INDUSTRIES.map((link, i) => (
                  <Node key={link.slug} label={link.label} href={`/industries/${link.slug}`} variant="ghost" delay={0.9 + (i * 0.05)} />
                ))}
              </div>
            </div>

            {/* Insights & Trends Column */}
            <div className="flex flex-col items-center">
              <Node label="Insights Hub" href="/insights" variant="default" icon={Newspaper} delay={0.84} />
              <DottedLine className="h-10 my-4" />
              <div className="space-y-3 w-full flex flex-col items-center">
                {insightsLinks.map((link, i) => (
                  <Node key={link.href} label={link.label} href={link.href} variant="ghost" delay={0.94 + (i * 0.05)} />
                ))}
              </div>
            </div>

            {/* Legal & Compliance Column */}
            <div className="flex flex-col items-center">
              <Node label="Legal & Compliance" href="/privacy-policy" variant="default" icon={ShieldCheck} delay={0.85} />
              <DottedLine className="h-10 my-4" />
              <div className="space-y-3 w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-3">
                  {complianceLinks.map((link, i) => (
                    <Node key={link.href} label={link.label} href={link.href} variant="ghost" delay={1.0 + (i * 0.05)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 border border-[#7A1F5C]/10 shadow-2xl shadow-[#7A1F5C]/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 tracking-tight">Need specific talent solutions?</h3>
            <p className="text-gray-500 font-medium">Our consultants are ready to map your recruitment strategy.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="px-10 py-4 bg-[#7A1F5C] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-[#7A1F5C]/20">
              Talk to Us
            </Link>
            <Link href="/jobs" className="px-10 py-4 bg-white text-[#1A1A1A] border border-[#E9D5FF] rounded-2xl font-bold hover:bg-[#FDFCFB] transition-all">
              Search Jobs
            </Link>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center border-t border-[#7A1F5C]/10 pt-12"
        >
          <div className="text-[10px] text-gray-400 font-black tracking-[0.4em] uppercase mb-6">Navigational Authority • Chalky Infotech Ecosystem</div>
          <div className="flex justify-center flex-wrap gap-8 text-[11px] font-bold text-[#7A1F5C]/40">
            <Link href="/sitemap.xml" className="hover:text-[#7A1F5C] transition-colors">XML Sitemap Registry</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/robots.txt" className="hover:text-[#7A1F5C] transition-colors">Spider Directives</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacy-policy" className="hover:text-[#7A1F5C] transition-colors">Data Protocol</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/terms-conditions" className="hover:text-[#7A1F5C] transition-colors">Usage Charter</Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
