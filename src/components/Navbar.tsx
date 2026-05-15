'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import api from '@/services/api';

// ─── Services Data ────────────────────────────────────────────────────────────
const SERVICES_DATA = {
  intro: {
    title: 'Expertise',
    desc: 'Since our establishment, our belief remains the same: Building strong relationships with people is vital in a successful partnership.',
    link: 'Learn more',
    href: '/services'
  },
  columns: [
    {
      title: 'Recruitment Solutions',
      items: [
        { label: 'IT Staffing', desc: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.', href: '/services/it-staffing' },
        { label: 'Executive Search', desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.', href: '/services/executive-search' },
        { label: 'Contract Staffing', desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.', href: '/services/contract-staffing' },
        { label: 'Permanent Hiring', desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.', href: '/services/permanent-hiring' },
      ]
    },
    {
      title: 'Enterprise Services',
      items: [
        { label: 'Temporary Recruitment', desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.', href: '/services/temporary-recruitment' },
        { label: 'On-Site Recruitment', desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.', href: '/services/on-site-recruitment' },
        { label: 'Managed Services', desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.', href: '/services/managed-services' },
        { label: 'Remote Hiring', desc: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.', href: '/services/remote-hiring' },
      ]
    }
  ],
  featured: {
    title: 'Work for us',
    desc: 'Our people are the difference. Hear stories from our people about a career at Chalky Infotech...',
    link: 'Learn more',
    href: '/about',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400&h=250&auto=format&fit=crop'
  }
};

// ─── Industries Data ──────────────────────────────────────────────────────────
const INDUSTRIES_DATA = {
  intro: {
    title: 'Industries',
    desc: 'Deep domain knowledge across global markets to ensure technical and cultural alignment for every hire.',
    link: 'View all industries',
    href: '/industries'
  },
  columns: [
    {
      title: 'Digital & Tech',
      items: [
        { label: 'IT & Technology', desc: 'Driving digital transformation with elite software engineers and full-stack technical specialists.', href: '/industries/it-technology' },
        { label: 'Telecommunications', desc: 'Scaling global connectivity with expert engineers for 5G, network, and satellite infrastructure.', href: '/industries/telecommunications' },
        { label: 'Cybersecurity', desc: 'Securing the digital frontier with top-tier talent in threat intelligence and information security.', href: '/industries/cybersecurity' },
        { label: 'AI & Data Science', desc: 'Powering data-driven innovation with expert professionals in Machine Learning and AI.', href: '/industries/ai-data-science' },
      ]
    },
    {
      title: 'Global Sectors',
      items: [
        { label: 'Banking & Finance', desc: 'Strategic talent acquisition for global financial institutions, fintech, and regulatory compliance.', href: '/industries/banking-finance' },
        { label: 'Healthcare & Life Sciences', desc: 'Providing critical expertise for clinical research, pharmaceutical development, and healthcare admin.', href: '/industries/healthcare-life-sciences' },
        { label: 'Retail & E-Commerce', desc: 'Optimizing the consumer journey with specialists in omnichannel retail and e-commerce platforms.', href: '/industries/retail-ecommerce' },
        { label: 'Manufacturing', desc: 'Delivering engineering excellence and operational leadership for Industry 4.0 ecosystems.', href: '/industries/manufacturing' },
      ]
    }
  ],
  featured: {
    title: 'Market Trends 2024',
    desc: 'Explore the latest hiring trends and salary benchmarks across our core industries...',
    link: 'Download Report',
    href: '/insights/salary-guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=250&auto=format&fit=crop'
  }
};

interface InsightCategory {
  label: string;
  slug: string;
  desc: string;
}

interface InsightSection {
  name: string;
  slug: string;
  categories: InsightCategory[];
}

// ─── Insights Data — Dynamic Navigation Structure ────────────────────────────
const DEFAULT_INSIGHTS_SECTIONS: InsightSection[] = [
  {
    name: "Insights & Knowledge",
    slug: "insights-knowledge",
    categories: [
      { label: "Blogs", slug: "blogs", desc: "Expert analysis and thought leadership on global recruitment trends." },
    ],
  }
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [hidden, setHidden]               = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Dynamic Insights State
  const [insightsSections, setInsightsSections] = useState<InsightSection[]>(DEFAULT_INSIGHTS_SECTIONS);
  const [hoveredInsightsSection, setHoveredInsightsSection] = useState<string | null>(DEFAULT_INSIGHTS_SECTIONS[0].slug);
  const pathname = usePathname();

  useEffect(() => {
    const fetchInsightsNav = async () => {
      try {
        const structure = await api.getFullSiteStructure();
        if (structure && structure.length > 0) {
          const formattedSections: InsightSection[] = structure.map((sec: any) => ({
            name: sec.name,
            slug: sec.slug,
            categories: (sec.categories || []).map((cat: any) => ({
              label: cat.name,
              slug: cat.slug,
              desc: cat.description || `Explore our ${cat.name} content.`
            }))
          }));
          setInsightsSections(formattedSections);
          if (formattedSections.length > 0) {
            setHoveredInsightsSection(formattedSections[0].slug);
          }
        }
      } catch (err) {
        console.error("Failed to fetch insights nav:", err);
      }
    };
    fetchInsightsNav();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setHidden(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navClasses = `fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 max-w-[1400px] mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/50 ${scrolled ? 'shadow-xl shadow-[#7A1F5C]/5' : 'shadow-md'} ${hidden ? '-translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`;

  const renderServicesIndustriesMenu = (data: any) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 rounded-3xl z-50 overflow-hidden cursor-default w-full"
    >
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3 border-r border-gray-50 pr-10">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">{data.intro.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed mb-6">{data.intro.desc}</p>
            <Link href={data.intro.href} className="text-[#7A1F5C] font-bold text-sm border-b-2 border-[#7A1F5C] pb-1 hover:opacity-80 transition-all">{data.intro.link}</Link>
          </div>
          <div className="col-span-6 grid grid-cols-2 gap-10">
            {data.columns.map((col: any, idx: number) => (
              <div key={idx}>
                <h4 className="text-[11px] font-bold text-[#1A1A1A] mb-6 uppercase tracking-[0.1em]">{col.title}</h4>
                <div className="space-y-4">
                  {col.items.map((item: any) => (
                    <Link key={item.label} href={item.href} className="block group">
                      <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors mb-0.5">{item.label}</p>
                      <p className="text-[11px] text-[#8A8A8A] leading-relaxed group-hover:text-[#666] transition-colors">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 pl-6">
            <div className="bg-[#F9F9F9] p-6 rounded-lg group cursor-pointer h-full">
              <div className="aspect-[16/10] overflow-hidden rounded-md mb-6">
                <Image src={data.featured.image} alt={data.featured.title} width={400} height={250} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A1A] mb-3 leading-tight">{data.featured.title}</h4>
              <p className="text-xs text-[#666] leading-relaxed mb-6">{data.featured.desc}</p>
              <Link href={data.featured.href} className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C] pb-1 hover:opacity-80 transition-all">{data.featured.link}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7A1F5C] py-3.5">
        <div className="max-w-[1400px] mx-auto px-8 flex gap-10">
          <Link href="/jobs" className="text-white font-bold text-[10px] uppercase tracking-[0.15em] border-b border-white/30 pb-0.5 hover:border-white transition-all">Register your CV</Link>
          <div className="w-px h-3 bg-white/20 self-center"></div>
          <Link href="/contact" className="text-white font-bold text-[10px] uppercase tracking-[0.15em] border-b border-white/30 pb-0.5 hover:border-white transition-all">Looking to hire</Link>
        </div>
      </div>
    </motion.div>
  );

  const renderInsightsMenu = () => {
    const currentSection = insightsSections.find(s => s.slug === hoveredInsightsSection) || insightsSections[0] || DEFAULT_INSIGHTS_SECTIONS[0];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 rounded-3xl z-50 overflow-hidden cursor-default w-full"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex min-h-[450px]">
            {/* Column 1: Sections Sidebar */}
            <div className="w-1/4 border-r border-gray-50 py-10 px-8 bg-[#F9F9F9]/50">
              <h3 className="text-[11px] font-bold text-[#8A8A8A] uppercase tracking-[0.2em] mb-10">Insights</h3>
              <div className="flex flex-col gap-4">
                {insightsSections.map((section: InsightSection) => (
                  <button
                    key={section.slug}
                    onMouseEnter={() => setHoveredInsightsSection(section.slug)}
                    className={`text-left py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-between group ${hoveredInsightsSection === section.slug ? 'bg-white shadow-lg shadow-[#7A1F5C]/5 text-[#7A1F5C]' : 'text-[#1A1A1A] hover:bg-white hover:text-[#7A1F5C]'}`}
                  >
                    <span className="font-bold text-sm uppercase tracking-wide">{section.name}</span>
                    <ArrowUpRight size={14} className={`transition-transform duration-300 ${hoveredInsightsSection === section.slug ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Dynamic Categories Area */}
            <div className="w-2/4 py-10 px-12 border-r border-gray-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredInsightsSection}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <h4 className="text-[11px] font-bold text-[#8A8A8A] uppercase tracking-[0.2em] mb-10">Categories</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {currentSection.categories.map((cat: InsightCategory) => (
                      <Link 
                        key={cat.slug} 
                        href={`/insights/${cat.slug}`}
                        className="group flex items-center justify-between p-5 rounded-2xl border border-transparent hover:border-[#7A1F5C]/10 hover:bg-[#F5F0E8]/30 transition-all duration-300"
                      >
                        <div>
                          <p className="font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors uppercase tracking-widest text-[13px]">{cat.label}</p>
                          <p className="text-[11px] text-[#8A8A8A] mt-1 group-hover:text-[#666]">{cat.desc}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7A1F5C] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                          <ArrowUpRight size={18} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Column 3: Featured Preview Area */}
            <div className="w-1/4 py-10 px-8 bg-[#F9F9F9]/30 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-bold text-[#8A8A8A] uppercase tracking-[0.2em] mb-10">Featured</h4>
                <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#7A1F5C]/5 mb-6 group cursor-pointer">
                   <Image 
                     src={hoveredInsightsSection === 'life-at' ? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&h=250&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=250&auto=format&fit=crop'} 
                     alt="Featured" 
                     width={400} 
                     height={250} 
                     className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700" 
                   />
                </div>
                <h5 className="font-bold text-[#1A1A1A] text-sm mb-2">{currentSection.name}</h5>
                <p className="text-xs text-[#666] leading-relaxed">Stay updated with our latest thoughts on {currentSection.name.toLowerCase()}.</p>
              </div>
              <Link href="/insights" className="mt-8 flex items-center gap-2 text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest hover:gap-3 transition-all">View all insights <ArrowUpRight size={14}/></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Brand Plum */}
        <div className="bg-[#7A1F5C] py-3.5">
          <div className="max-w-[1400px] mx-auto px-8 flex gap-10">
            <Link href="/jobs" className="text-white font-bold text-[10px] uppercase tracking-[0.15em] border-b border-white/30 pb-0.5 hover:border-white transition-all">Register your CV</Link>
            <div className="w-px h-3 bg-white/20 self-center"></div>
            <Link href="/contact" className="text-white font-bold text-[10px] uppercase tracking-[0.15em] border-b border-white/30 pb-0.5 hover:border-white transition-all">Looking to hire</Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <nav className={navClasses}>
      <div className="relative flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 mr-8">
          <Image 
            src="/logo.png" 
            alt="Chalky Infotech" 
            width={40} 
            height={40} 
            style={{ height: 'auto' }}
            className="object-contain hover:scale-105 transition-transform duration-300" 
          />
          <span className="font-bold text-xl text-[#7A1F5C] tracking-tight">Chalky<span className="text-[#1A1A1A] font-medium">InfoTech</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 justify-end flex-1">
          {NAV_LINKS.map((link) => {
            const isDropdown = ['Services', 'Industries', 'Insights'].includes(link.label);
            const dropdownKey = link.label.toLowerCase();

            return (
              <div 
                key={link.label} 
                className="group/nav h-full flex items-center"
                onMouseEnter={() => isDropdown && setActiveDropdown(dropdownKey)}
                onMouseLeave={() => isDropdown && setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                    activeDropdown === dropdownKey || pathname === link.href || (isDropdown && pathname.includes(`/${dropdownKey}`))
                      ? 'text-[#7A1F5C] bg-[#F5F0E8]' 
                      : 'text-[#1A1A1A] hover:bg-[#F5F0E8]'
                  }`}
                >
                  {link.label}
                  {isDropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === dropdownKey ? 'rotate-180' : ''}`} />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeDropdown && (
            <div 
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="pointer-events-auto">
                {activeDropdown === 'services' && renderServicesIndustriesMenu(SERVICES_DATA)}
                {activeDropdown === 'industries' && renderServicesIndustriesMenu(INDUSTRIES_DATA)}
                {activeDropdown === 'insights' && renderInsightsMenu()}
              </div>
            </div>
          )}
        </AnimatePresence>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg text-[#1A1A1A] bg-[#F5F0E8]">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden rounded-b-2xl"
          >
            <div className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}
                  className="block px-4 py-3 rounded-xl font-semibold text-[15px] text-[#1A1A1A] hover:bg-[#F5F0E8] hover:text-[#7A1F5C] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 flex gap-4 px-4">
                 <Link href="/contact" className="flex-1 text-center bg-[#7A1F5C] text-white py-3 rounded-xl font-semibold text-sm">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
