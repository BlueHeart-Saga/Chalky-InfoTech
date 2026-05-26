'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  XOctagon, 
  HelpCircle, 
  UserCheck, 
  DollarSign, 
  AlertTriangle, 
  ExternalLink, 
  CheckCircle,
  Mail,
  ChevronRight
} from 'lucide-react';
import DownloadPdfButton from '@/components/DownloadPdfButton';

interface Section {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

export default function DisclaimerPage() {
  const [activeSection, setActiveSection] = useState('recruitment-services');

  const sections: Section[] = [
    {
      id: 'recruitment-services',
      title: '1. Recruitment Services',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Chalky Infotech is a recruitment and staffing service provider that connects candidates with potential employers.
          </p>
          <p>
            We make reasonable efforts to ensure that job listings, candidate information, and other content on this website are accurate and up to date. However, we do not guarantee the completeness, accuracy, or reliability of any information provided.
          </p>
        </div>
      )
    },
    {
      id: 'no-job-guarantee',
      title: '2. No Job Guarantee',
      icon: XOctagon,
      content: (
        <div className="space-y-4">
          <p>
            Chalky Infotech operates as an intermediary to facilitate connections. We do not guarantee:
          </p>
          <div className="bg-[#F5F0E8]/50 p-6 rounded-2xl border border-[#7A1F5C]/10">
            <ul className="grid sm:grid-cols-3 gap-4">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all text-center">
                <span className="block font-bold text-sm text-[#7A1F5C] mb-1">Placement</span>
                <span className="text-xs text-[#8A8A8A]">Job placement for candidates</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all text-center">
                <span className="block font-bold text-sm text-[#7A1F5C] mb-1">Interviews</span>
                <span className="text-xs text-[#8A8A8A]">Interview selection or hiring decisions</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all text-center">
                <span className="block font-bold text-sm text-[#7A1F5C] mb-1">Outcomes</span>
                <span className="text-xs text-[#8A8A8A]">Employment duration or salary outcomes</span>
              </li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-[#7A1F5C]">
            All hiring decisions are made solely by the employer.
          </p>
        </div>
      )
    },
    {
      id: 'third-party-info',
      title: '3. Third-Party Information',
      icon: HelpCircle,
      content: (
        <div className="space-y-4">
          <p>
            Job postings and company details are provided by our clients or third parties. Chalky Infotech is not responsible for:
          </p>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
              <span>Inaccurate or misleading job descriptions</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
              <span>Changes in job availability</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
              <span>Actions or decisions taken by employers</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'candidate-responsibility',
      title: '4. Candidate Responsibility',
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>
            Candidates carry independent responsibility during their job search process. Candidates are responsible for:
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="font-semibold text-[#7A1F5C]">✓</span>
                <span>Verifying job details before accepting offers</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="font-semibold text-[#7A1F5C]">✓</span>
                <span>Providing accurate and truthful information on resumes and applications</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="font-semibold text-[#7A1F5C]">✓</span>
                <span>Exercising caution when interacting with potential employers</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'no-fees-policy',
      title: '5. No Fees Policy',
      icon: DollarSign,
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-[#7A1F5C]">
            Chalky Infotech does not charge any fees to candidates for job placement.
          </p>
          <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-100 text-sm">
            <strong>Warning:</strong> If anyone claims to represent Chalky Infotech and asks for payment, it is fraudulent and should be reported immediately.
          </div>
        </div>
      )
    },
    {
      id: 'limitation-of-liability',
      title: '6. Limitation of Liability',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>
            Chalky Infotech shall not be held liable for any direct or indirect loss, damage, or inconvenience arising from:
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <ul className="space-y-3">
              {[
                "Use of this website",
                "Job applications or recruitment processes",
                "Interactions between candidates and employers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#8A8A8A]">
                  <span className="w-5 h-5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'external-links',
      title: '7. External Links',
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <p>
            This website may include links to third-party websites. We do not control or take responsibility for their content, policies, or practices.
          </p>
          <p className="text-sm text-[#8A8A8A]">
            Following external links is done solely at your own risk. We recommend reading the privacy policies and terms of any external platforms you visit.
          </p>
        </div>
      )
    },
    {
      id: 'consent',
      title: '8. Consent',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <p>
            By using our website, you agree to this disclaimer.
          </p>
          <p className="text-sm text-[#8A8A8A]">
            If you do not agree to the terms of this disclaimer, you must cease using this website immediately.
          </p>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-[#7A1F5C] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>
        
        {/* Print/Download Button */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
          <DownloadPdfButton documentName="Disclaimer" variant="light" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10"
          >
            Legal Notice
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Recruitment <span className="text-[#F5A7CB]">Disclaimer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Please read this disclaimer carefully before using our recruitment and staffing services website.
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-1.5 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-[#1A1A1A] font-bold text-xs uppercase tracking-wider mb-4 ml-2">Disclaimer Chapters</h3>
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                        activeSection === section.id 
                          ? 'bg-[#7A1F5C] text-white shadow-md' 
                          : 'text-[#1A1A1A]/60 hover:bg-[#7A1F5C]/5 hover:text-[#7A1F5C]'
                      }`}
                    >
                      <Icon size={16} className={activeSection === section.id ? 'text-white' : 'text-[#7A1F5C]'} />
                      <span className="truncate">{section.title.split('. ')[1] || section.title}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-3 space-y-10">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.div 
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="scroll-mt-32 bg-white rounded-3xl p-8 border border-white hover:border-[#7A1F5C]/15 transition-all shadow-sm group"
                  >
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                      <div className="w-12 h-12 rounded-2xl bg-[#7A1F5C]/10 flex items-center justify-center text-[#7A1F5C] group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">{section.title}</h2>
                    </div>
                    
                    <div className="text-[#8A8A8A] text-sm sm:text-base leading-relaxed space-y-4">
                      {section.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Support / Contact Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Need legal clarification?</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">Our recruitment and compliance specialists are here to address any queries regarding candidate policies and guarantees.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-[#7A1F5C] px-8 py-4 rounded-full font-bold hover:bg-[#9D2877] transition-all flex items-center gap-2">
                Consult Legal Team <ChevronRight size={18} />
              </a>
              <a href="mailto:legal@chalkyinfotech.com" className="bg-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10">
                Email Legal Department
              </a>
              <div className="md:hidden mt-2">
                 <DownloadPdfButton documentName="Disclaimer" variant="light" className="px-8 py-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
