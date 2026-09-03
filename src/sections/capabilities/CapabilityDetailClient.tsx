'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { CapabilityData } from '@/constants/capabilitiesData';
import { ArrowRight, CheckCircle2, Cpu, Code2, Cloud, Database, ShieldCheck, Building2, Award, Sparkles, Layers, Search, UserCheck, Check, Users, Clock, Globe, TrendingUp } from 'lucide-react';
import heroImg from '@/assets/Services/Hero/2.png';

interface CapabilityDetailClientProps {
  capability: CapabilityData;
}

const ICON_MAP: Record<string, any> = {
  Cpu,
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Award
};

export default function CapabilityDetailClient({ capability }: CapabilityDetailClientProps) {
  const IconComp = ICON_MAP[capability.icon] || Cpu;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Capabilities', href: '/capabilities' },
          { label: capability.title },
        ]}
        badge="Specialized Technology Talent"
        title={`${capability.title}`}
        titleHighlight="Talent"
        subtitle={capability.heroDesc}
        ctaLabel={`Hire ${capability.title} Talent`}
        ctaHref="#contact-cta"
        secondaryLabel="Explore Roles"
        secondaryHref="#roles-provided"
        imageSrc={heroImg.src}
        imageAlt={`Chalky Infotech ${capability.title} talent recruitment`}
      />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 bg-[#FAF5FF] border-b border-[#7A1F5C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#7A1F5C]/20 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#7A1F5C] text-white flex items-center justify-center shrink-0">
                <IconComp size={20} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-3 py-1 rounded-md">
                Executive Overview
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
              {capability.introHeading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
              {capability.introContent}
            </p>
          </div>
        </div>
      </section>

      {/* 3. TALENT WE PROVIDE (ROLES & FOCUS TABLE/CARDS) */}
      <section id="roles-provided" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Specialized Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              {capability.title} Talent We Provide
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              We connect organizations with specialized engineers, architects, and specialists tailored to your precise tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capability.rolesDetailed.map((role, idx) => (
              <div
                key={role.title}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE7DD] hover:border-[#7A1F5C]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#7A1F5C] bg-[#7A1F5C]/10 px-3 py-1 rounded-md">
                      ROLE #{idx + 1}
                    </span>
                    <CheckCircle2 size={18} className="text-[#7A1F5C] opacity-70 group-hover:opacity-100" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {role.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZED EXPERTISE */}
      <section className="py-20 bg-[#F5F0E8]/50 border-y border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Domain Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Specialized {capability.title} Expertise
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Our candidate search targets deep domain mastery across key sub-disciplines.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
            {capability.expertiseTags.map((tag) => (
              <div
                key={tag}
                className="bg-white px-5 py-3 rounded-2xl border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm sm:text-base hover:border-[#7A1F5C] hover:bg-[#7A1F5C] hover:text-white transition-all shadow-xs cursor-default flex items-center gap-2.5"
              >
                <Sparkles size={16} className="text-[#7A1F5C] group-hover:text-white" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY ECOSYSTEM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Technologies Our Talent Works With
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Grouped technology ecosystems evaluated during our rigorous technical vetting process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capability.techEcosystem.map((group) => (
              <div
                key={group.category}
                className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 pb-3 border-b border-[#EFE7DD] flex items-center justify-between">
                    <span>{group.category}</span>
                    <span className="text-xs font-semibold text-[#7A1F5C] uppercase tracking-widest bg-[#7A1F5C]/10 px-3 py-1 rounded-md">
                      {group.items.length} Techs
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS USE CASES */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Real-World Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              {capability.title} Talent Across Business Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capability.useCases.map((useCase) => (
              <div
                key={useCase}
                className="bg-white p-6 rounded-2xl border border-[#EFE7DD] shadow-sm flex items-start gap-4 hover:border-[#7A1F5C]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center shrink-0 font-bold">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-[#1A1A1A] mb-1">{useCase}</h4>
                  <p className="text-sm text-gray-600">Specialized professionals ready to deliver solutions in this domain.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE HELP (5-STEP RECRUITMENT PROCESS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Our Recruitment Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              From {capability.title} Need to the Right Hire
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', name: 'Understand', desc: 'Understand your technical requirements and business objectives.' },
              { step: '02', name: 'Identify', desc: `Source specialized ${capability.title} professionals from our talent network.` },
              { step: '03', name: 'Assess', desc: 'Evaluate technical expertise, experience, and role suitability.' },
              { step: '04', name: 'Match', desc: 'Present candidates aligned with your technology stack and requirements.' },
              { step: '05', name: 'Hire', desc: 'Support the recruitment process through selection and onboarding.' }
            ].map((p) => (
              <div key={p.step} className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE7DD] flex flex-col justify-between h-full">
                <div>
                  <span className="text-3xl font-bold text-[#7A1F5C] block mb-2">{p.step}</span>
                  <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-20 bg-white border-t border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-md inline-block mb-4">
                Why Partner With Chalky
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
                Specialized {capability.title} Talent. Precisely Matched.
              </h2>
              <p className="text-base text-gray-600 mt-4 leading-relaxed">
                We bridge technical depth with recruitment precision to deliver high-retention talent.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capability.whyChooseList.map((item, idx) => (
                <div key={idx} className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EFE7DD] flex items-center gap-3 shadow-2xs hover:bg-white hover:border-[#7A1F5C]/40 transition-all">
                  <div className="w-7 h-7 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. HIRING MODELS (CONNECTED TO SERVICES) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Engagement Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Flexible Hiring Models for {capability.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Choose the right engagement model tailored to your project timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD] flex flex-col justify-between">
              <div>
                <Users className="w-10 h-10 text-[#7A1F5C] mb-4" />
                <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">Permanent Hiring</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Build long-term core technology teams with high-retention permanent professionals.</p>
              </div>
              <Link href="/services/permanent-hiring" className="text-sm font-semibold text-[#7A1F5C] uppercase tracking-wider flex items-center gap-1">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD] flex flex-col justify-between">
              <div>
                <Clock className="w-10 h-10 text-[#7A1F5C] mb-4" />
                <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">Contract Staffing</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Scale capabilities for specific project milestones with agile contract specialists.</p>
              </div>
              <Link href="/services/contract-staffing" className="text-sm font-semibold text-[#7A1F5C] uppercase tracking-wider flex items-center gap-1">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD] flex flex-col justify-between">
              <div>
                <Globe className="w-10 h-10 text-[#7A1F5C] mb-4" />
                <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">Remote Hiring</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Access specialized technology talent globally with borderless recruitment.</p>
              </div>
              <Link href="/services/remote-hiring" className="text-sm font-semibold text-[#7A1F5C] uppercase tracking-wider flex items-center gap-1">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD] flex flex-col justify-between">
              <div>
                <TrendingUp className="w-10 h-10 text-[#7A1F5C] mb-4" />
                <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">Executive Search</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Identify discreet, high-impact senior C-suite leadership and VP-level directors.</p>
              </div>
              <Link href="/services/executive-search" className="text-sm font-semibold text-[#7A1F5C] uppercase tracking-wider flex items-center gap-1">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#7A1F5C] text-[#7A1F5C] font-semibold text-sm uppercase tracking-wider hover:bg-[#7A1F5C] hover:text-white transition-all shadow-sm"
            >
              View All Hiring Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="contact-cta">
        <CTASection
          title={`Build Your ${capability.title} Team with the Right Talent`}
          subtitle={`Tell us what ${capability.title} expertise you need, and we will connect you with professionals who can help move your technology initiatives forward.`}
          primaryLabel={`Hire ${capability.title} Talent`}
          primaryHref="/contact"
          secondaryLabel="Talk to Our Recruitment Team"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
