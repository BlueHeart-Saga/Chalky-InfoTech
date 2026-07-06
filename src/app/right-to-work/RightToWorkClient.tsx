'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Search, 
  ChevronRight, 
  UserCheck,
  Globe,
  ShieldCheck,
  Scale,
  FileText,
  Briefcase,
  Smartphone,
  CheckCircle2,
  Info
} from 'lucide-react';
import DownloadPdfButton from '@/components/DownloadPdfButton';
import { RIGHT_TO_WORK_DATA } from '@/constants/legalData';

const CATEGORY_ICONS: Record<string, any> = {
  "General RTW Knowledge": Info,
  "Visa & Sponsorship Support": Globe,
  "Compliance & Penalties": ShieldCheck,
  "Remote & Digital Verification": Smartphone,
  "Document Requirements": FileText
};


export default function RightToWorkPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const filteredData = useMemo(() => {
    if (!searchQuery) return RIGHT_TO_WORK_DATA;
    
    return RIGHT_TO_WORK_DATA.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#7A1F5C] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>
        
        {/* Bottom Right PDF Download */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
          <DownloadPdfButton documentName="Right To Work" variant="light" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6"
          >
            Hiring Compliance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Right To <span className="text-[#F5A7CB]">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-12"
          >
            Comprehensive guidance on UK employment eligibility and document verification for global talent.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input 
                type="text"
                placeholder="Search eligibility (e.g. visa, passport, share code)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40 outline-none transition-all shadow-2xl backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-2">
                <h3 className="text-[#1A1A1A] font-bold text-sm uppercase tracking-wider mb-6 ml-4">RTW Guidance</h3>
                {RIGHT_TO_WORK_DATA.map((cat, idx) => {
                  const Icon = CATEGORY_ICONS[cat.category] || Info;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveCategory(cat.category);
                        document.getElementById(cat.category)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                        activeCategory === cat.category 
                        ? 'bg-[#7A1F5C] text-white shadow-lg shadow-[#7A1F5C]/20' 
                        : 'text-[#1A1A1A]/60 hover:bg-white hover:text-[#7A1F5C]'
                      }`}
                    >
                      <Icon size={18} className={activeCategory === cat.category ? 'text-white' : 'text-[#7A1F5C]'} />
                      <span>{cat.category}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* RTW Content */}
            <div className="lg:col-span-3">
              {filteredData.length > 0 ? (
                <div className="space-y-16">
                  {filteredData.map((cat, catIdx) => {
                    const CategoryIcon = CATEGORY_ICONS[cat.category] || Info;
                    return (
                      <div key={catIdx} id={cat.category} className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#7A1F5C]/10">
                          <div className="w-10 h-10 rounded-xl bg-[#7A1F5C]/10 flex items-center justify-center text-[#7A1F5C]">
                            <CategoryIcon size={20} />
                          </div>
                          <h2 className="text-2xl font-semibold text-[#1A1A1A]">{cat.category}</h2>
                        </div>
                        <div className="space-y-4">
                          {cat.items.map((item, itemIdx) => {
                            const isOpen = openItems[`${cat.category}-${itemIdx}`];
                            return (
                              <motion.div 
                                key={itemIdx}
                                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#7A1F5C]/30 shadow-xl shadow-[#7A1F5C]/5' : 'border-white hover:border-[#7A1F5C]/20 shadow-sm'}`}
                              >
                                <button
                                  onClick={() => toggleItem(cat.category, itemIdx)}
                                  className="w-full flex items-center justify-between p-6 text-left"
                                >
                                  <span className={`font-bold transition-colors ${isOpen ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>
                                    {item.q}
                                  </span>
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#7A1F5C] text-white rotate-180' : 'bg-[#F5F0E8] text-[#7A1F5C]'}`}>
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                  </div>
                                </button>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-6 pb-6 text-[#8A8A8A] text-sm leading-relaxed border-t border-[#F5F0E8] pt-4">
                                        {item.a}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-white">
                  <Search size={32} className="mx-auto mb-4 text-[#7A1F5C]/40" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">No results found</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Eligibility Support</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">Our onboarding team specializes in complex visa scenarios and Right to Work documentation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-[#7A1F5C] px-8 py-4 rounded-full font-bold hover:bg-[#9D2877] transition-all flex items-center gap-2">
                Talk to Onboarding <ChevronRight size={18} />
              </a>
              <a href="mailto:onboarding@chalkyinfotech.com" className="bg-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10">
                Email Vetting Team
              </a>
              <div className="md:hidden mt-2">
                 <DownloadPdfButton documentName="Right To Work" variant="light" className="px-8 py-4" />
              </div>
              <div className="hidden md:block">
                 <DownloadPdfButton documentName="Right To Work" variant="light" className="py-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
