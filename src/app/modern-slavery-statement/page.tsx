'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Briefcase, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  BookOpen, 
  RefreshCw, 
  ThumbsUp,
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

export default function ModernSlaveryStatement() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections: Section[] = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4">
          <p>
            Chalky Infotech recognises that modern slavery, including forced labour, servitude, and human trafficking, remains a serious global issue.
          </p>
          <p>
            We are committed to conducting our business responsibly and ethically. We operate a zero-tolerance approach to any form of modern slavery within our organisation and supply chains.
          </p>
          <p>
            This statement is made in accordance with the UK Modern Slavery Act 2015 and outlines the steps we take to prevent modern slavery in our operations.
          </p>
        </div>
      )
    },
    {
      id: 'our-business',
      title: '2. Our Business',
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <p>
            Chalky Infotech is a recruitment and staffing services provider, connecting candidates with employers across various industries.
          </p>
          <div className="bg-[#F5F0E8]/50 p-6 rounded-2xl border border-[#7A1F5C]/10">
            <h4 className="font-bold text-[#7A1F5C] mb-3">Our key operations include:</h4>
            <ul className="grid sm:grid-cols-3 gap-4">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all">
                <span className="block font-bold text-lg text-[#7A1F5C] mb-1">01</span>
                <span className="text-sm text-[#8A8A8A]">Sourcing and attracting candidates</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all">
                <span className="block font-bold text-lg text-[#7A1F5C] mb-1">02</span>
                <span className="text-sm text-[#8A8A8A]">Screening and assessing applicants</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-white hover:border-[#7A1F5C]/20 transition-all">
                <span className="block font-bold text-lg text-[#7A1F5C] mb-1">03</span>
                <span className="text-sm text-[#8A8A8A]">Placing professionals with client organisations</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'our-approach',
      title: '3. Our Approach',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>
            We are committed to maintaining high ethical standards in all aspects of our work.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <h4 className="font-bold text-[#1A1A1A]">We actively promote:</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                <span>Fair and respectful treatment of all candidates and workers</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                <span>Transparency in recruitment processes</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                <span>Full compliance with applicable employment laws and regulations</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-[#8A8A8A] italic">
            We encourage employees, candidates, and business partners to raise concerns regarding any unethical or illegal practices.
          </p>
        </div>
      )
    },
    {
      id: 'risk-assessment',
      title: '4. Risk Assessment',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>
            At present, we assess the risk of modern slavery within our business operations to be low. This assessment is based on:
          </p>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="bg-[#F5F0E8]/40 p-5 rounded-2xl border border-gray-100">
              <h5 className="font-bold text-sm text-[#7A1F5C] mb-1">Focus Areas</h5>
              <p className="text-xs text-[#8A8A8A]">Our focus on professional and skilled roles reduces exposure to high-risk sectors.</p>
            </li>
            <li className="bg-[#F5F0E8]/40 p-5 rounded-2xl border border-gray-100">
              <h5 className="font-bold text-sm text-[#7A1F5C] mb-1">Supply Network</h5>
              <p className="text-xs text-[#8A8A8A]">A limited and controlled supplier network allows rigorous oversight.</p>
            </li>
            <li className="bg-[#F5F0E8]/40 p-5 rounded-2xl border border-gray-100">
              <h5 className="font-bold text-sm text-[#7A1F5C] mb-1">Engagement</h5>
              <p className="text-xs text-[#8A8A8A]">Direct engagement with both candidates and clients ensures transparent relationships.</p>
            </li>
          </ul>
          <p className="text-sm text-[#8A8A8A]">
            We recognise that risks may evolve as the business grows, and we remain vigilant to emerging risks.
          </p>
        </div>
      )
    },
    {
      id: 'prevention-steps',
      title: '5. Steps to Prevent Modern Slavery',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <p>
            To minimise the risk of modern slavery, we implement the following measures:
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <ul className="space-y-3">
              {[
                "Ensuring all candidates have the legal right to work",
                "Providing clear and transparent employment terms and conditions",
                "Prohibiting the charging of recruitment or placement fees to candidates",
                "Conducting appropriate due diligence on clients and partners",
                "Including ethical and compliance clauses in agreements",
                "Encouraging internal reporting of any concerns or suspicious activity"
              ].map((step, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#8A8A8A]">
                  <span className="w-5 h-5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'partner-expectations',
      title: '6. Supplier & Client Expectations',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            We expect all clients, suppliers, and business partners to uphold high ethical standards:
          </p>
          <div className="bg-[#7A1F5C]/5 p-6 rounded-2xl border border-[#7A1F5C]/10 space-y-3">
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                <span className="font-semibold text-[#7A1F5C]">•</span>
                <span>Comply with all applicable labour laws and regulations</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                <span className="font-semibold text-[#7A1F5C]">•</span>
                <span>Provide safe and fair working conditions</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                <span className="font-semibold text-[#7A1F5C]">•</span>
                <span>Prohibit any form of forced, bonded, or exploitative labour</span>
              </li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-[#7A1F5C]">
            Chalky Infotech will not knowingly engage with organisations that fail to meet these standards.
          </p>
        </div>
      )
    },
    {
      id: 'training',
      title: '7. Training & Awareness',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <p>
            We are committed to building awareness within our organisation so that employees can identify and report potential risks of modern slavery effectively.
          </p>
          <p className="text-sm text-[#8A8A8A]">
            Ongoing training modules are provided to our recruitment consultants and client managers to ensure absolute adherence to ethical sourcing best practices.
          </p>
        </div>
      )
    },
    {
      id: 'review',
      title: '8. Ongoing Review',
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p>
            We will continue to review and improve our policies, procedures, and controls as our business evolves, ensuring ongoing compliance and effectiveness.
          </p>
          <p className="text-sm text-[#8A8A8A]">
            Annual audits are conducted internally to review supplier agreements and client representations against updated legal frameworks.
          </p>
        </div>
      )
    },
    {
      id: 'approval',
      title: '9. Approval',
      icon: ThumbsUp,
      content: (
        <div className="space-y-4">
          <p>
            This statement has been approved by the management of Chalky Infotech and will be reviewed and updated annually.
          </p>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#8A8A8A]">
            <span>Last Reviewed: May 2026</span>
            <span className="font-bold text-[#7A1F5C]">Board of Directors, Chalky Infotech</span>
          </div>
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
          <DownloadPdfButton documentName="Modern Slavery Statement" variant="light" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10"
          >
            Corporate Ethics
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Modern Slavery <span className="text-[#F5A7CB]">Statement</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto"
          >
            Our commitment to ethical operations, transparency, and a zero-tolerance approach to modern slavery and human trafficking.
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
                <h3 className="text-[#1A1A1A] font-bold text-xs uppercase tracking-wider mb-4 ml-2">Statement Sections</h3>
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Have questions about compliance?</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">Our governance team is dedicated to preserving high ethical standards. Get in touch if you have any questions or reports.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="bg-[#7A1F5C] px-8 py-4 rounded-full font-bold hover:bg-[#9D2877] transition-all flex items-center gap-2">
                Contact Compliance <ChevronRight size={18} />
              </a>
              <a href="mailto:compliance@chalkyinfotech.com" className="bg-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10">
                Email Compliance Team
              </a>
              <div className="md:hidden mt-2">
                 <DownloadPdfButton documentName="Modern Slavery Statement" variant="light" className="px-8 py-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
