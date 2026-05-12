'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight, Search, Globe, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setHidden(window.scrollY > 400); // Hide after hero
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navClasses = `fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 max-w-[1400px] mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/50 ${scrolled ? 'shadow-xl shadow-[#7A1F5C]/5' : 'shadow-md'} ${hidden ? '-translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`;

  const renderTreeLink = (href: string, label: string) => (
    <Link href={href} className="relative block pl-6 py-1.5 hover:text-[#7A1F5C] text-sm text-[#1A1A1A] transition-colors group font-medium">
      <span className="absolute top-1/2 left-0 w-4 border-t border-[#8A8A8A]/30 -translate-y-1/2 group-hover:border-[#7A1F5C] transition-colors" />
      {label}
    </Link>
  );

  return (
    <nav className={navClasses}>
      <div className="relative flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 mr-8">
          <Image src="/logo.png" alt="Chalky Infotech" width={40} height={40} className="object-contain hover:scale-105 transition-transform duration-300" />
          <span className="font-bold text-xl text-[#7A1F5C] tracking-tight">Chalky<span className="text-[#1A1A1A] font-medium">InfoTech</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 justify-end flex-1">
          {NAV_LINKS.map((link) => {
            if (link.label === 'Services') {
              return (
                <div key={link.label} className="relative group/nav"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${activeDropdown === 'services' || pathname.includes('/services') ? 'text-[#7A1F5C] bg-[#F5F0E8]' : 'text-[#1A1A1A] hover:bg-[#F5F0E8]'}`}>
                    Services <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-3 bg-[#F9F6F0] rounded-3xl shadow-2xl shadow-[#7A1F5C]/15 p-10 w-[850px] border border-white/50 backdrop-blur-2xl cursor-default z-50">
                        <div className="grid grid-cols-3 gap-10">
                          <div>
                            <h3 className="font-black text-[#1A1A1A] mb-4 text-xs uppercase tracking-widest text-[#7A1F5C]">Technology & Staffing</h3>
                            <div className="border-l-2 border-[#7A1F5C]/10 ml-1">
                              {renderTreeLink('/services/it-recruitment', 'IT Recruitment Services')}
                              {renderTreeLink('/services/cloud-devops', 'Cloud & DevOps')}
                              {renderTreeLink('/services/ai-data-engineering', 'AI & Data Engineering')}
                              {renderTreeLink('/services/outsourcing-offshoring', 'Outsourcing & Offshoring')}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-black text-[#1A1A1A] mb-4 text-xs uppercase tracking-widest text-[#7A1F5C]">Industry Solutions</h3>
                            <div className="border-l-2 border-[#7A1F5C]/10 ml-1">
                              {renderTreeLink('/services/financial-services', 'Financial Services')}
                              {renderTreeLink('/services/healthcare-life-sciences', 'Healthcare & Life Sciences')}
                              {renderTreeLink('/services/retail-services', 'Retail Services')}
                              {renderTreeLink('/services/education-services', 'Education Services')}
                              {renderTreeLink('/services/media-entertainment', 'Media & Entertainment')}
                              {renderTreeLink('/services/power-electronics', 'Power & Electronics')}
                            </div>
                          </div>

                          <div className="bg-white/50 rounded-2xl p-6 border border-white flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-black text-[#1A1A1A] mb-3 leading-tight">Empowering Digital Transformation</h3>
                              <p className="text-[#8A8A8A] text-xs leading-relaxed mb-6 font-medium">We source world-class talent to drive your enterprise goals through specialized technical recruitment.</p>
                            </div>
                            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-[#7A1F5C] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#C2185B] transition-all">
                              View All Services <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.label === 'Industries') {
              return (
                <div key={link.label} className="relative group/nav"
                  onMouseEnter={() => setActiveDropdown('industries')}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${activeDropdown === 'industries' || pathname.includes('/industries') ? 'text-[#7A1F5C] bg-[#F5F0E8]' : 'text-[#1A1A1A] hover:bg-[#F5F0E8]'}`}>
                    Industries <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'industries' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-3 bg-[#F9F6F0] rounded-3xl shadow-2xl shadow-[#7A1F5C]/15 p-10 w-[850px] border border-white/50 backdrop-blur-2xl cursor-default z-50">
                        <div className="grid grid-cols-3 gap-10">
                          <div>
                            <h3 className="font-black text-[#1A1A1A] mb-4 text-xs uppercase tracking-widest text-[#7A1F5C]">Core Sectors</h3>
                            <div className="border-l-2 border-[#7A1F5C]/10 ml-1">
                              {renderTreeLink('/industries/finance', 'Finance & Banking')}
                              {renderTreeLink('/industries/retail', 'Retail & E-commerce')}
                              {renderTreeLink('/industries/technology', 'Technology & Software')}
                              {renderTreeLink('/industries/media', 'Media & Entertainment')}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-black text-[#1A1A1A] mb-4 text-xs uppercase tracking-widest text-[#7A1F5C]">Specialized Markets</h3>
                            <div className="border-l-2 border-[#7A1F5C]/10 ml-1">
                              {renderTreeLink('/industries/healthcare', 'Healthcare & Life Sciences')}
                              {renderTreeLink('/industries/education', 'Education')}
                              {renderTreeLink('/industries/manufacturing', 'Manufacturing')}
                              {renderTreeLink('/industries/energy', 'Energy & Utilities')}
                            </div>
                          </div>
                          <div className="bg-white/50 rounded-2xl p-6 border border-white flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-black text-[#1A1A1A] mb-3 leading-tight">Industry-Specific Expertise</h3>
                              <p className="text-[#8A8A8A] text-xs leading-relaxed mb-6 font-medium">Deep domain knowledge across global markets to ensure technical and cultural alignment.</p>
                            </div>
                            <Link href="/industries" className="inline-flex items-center justify-center gap-2 bg-[#7A1F5C] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#C2185B] transition-all">
                              View All Industries <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href}
                className={`px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-200 ${pathname === link.href ? 'text-[#7A1F5C] bg-[#F5F0E8]' : 'text-[#1A1A1A] hover:bg-[#F5F0E8]'}`}>
                {link.label === 'Jobs' ? 'Careers' : link.label}
              </Link>
            );
          })}
        </div>



        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg text-[#1A1A1A] bg-[#F5F0E8]">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden rounded-b-2xl">
            <div className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}
                  className="block px-4 py-3 rounded-xl font-semibold text-[15px] text-[#1A1A1A] hover:bg-[#F5F0E8] hover:text-[#7A1F5C] transition-all duration-200">
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
