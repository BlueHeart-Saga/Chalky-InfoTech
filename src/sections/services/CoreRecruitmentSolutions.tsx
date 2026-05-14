'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Zap, Users, Target, Clock, ShieldCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';

const SOLUTIONS = [
  {
    id: 'contract',
    title: 'Contract Recruitment',
    intro: 'Access skilled professionals for short-term projects, urgent hiring requirements, and scalable workforce support through flexible contract recruitment solutions.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
    benefits: ['Rapid deployment', 'Flexible workforce scaling', 'Specialized talent access', 'Reduced hiring timelines'],
    process: ['Requirement Discovery', 'Talent Mapping', 'Agile Screening'],
    cta: 'Hire Contract Talent'
  },
  {
    id: 'permanent',
    title: 'Permanent Recruitment',
    intro: 'Build your long-term success with high-retention talent. We focus on cultural and technical alignment to ensure every permanent placement drives lasting value.',
    image: 'https://images.unsplash.com/photo-1517245327032-96a1c4a161a7?q=80&w=800&auto=format&fit=crop',
    benefits: ['Strategic cultural fit', 'High retention rates', 'Extensive talent network', 'Direct-hire expertise'],
    process: ['Culture Analysis', 'Deep Benchmarking', 'Executive Review'],
    cta: 'Find Permanent Talent'
  },
  {
    id: 'temporary',
    title: 'Temporary Recruitment',
    intro: 'Scale your workforce quickly with skilled professionals for short-term demands, seasonal peaks, and high-volume hiring requirements.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    benefits: ['Immediate availability', 'Admin & payroll management', 'Scalability on-demand', 'Vetted professional pool'],
    process: ['Rapid Response', 'Skill Verification', 'Seamless Deployment'],
    cta: 'Request Temp Staff'
  },
  {
    id: 'onsite',
    title: 'On-Site Recruitment',
    intro: 'Benefit from dedicated recruiters working as a seamless extension of your internal team for streamlined hiring and strategic talent management.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    benefits: ['Embedded team integration', 'Reduced cost-per-hire', 'Strategic hiring alignment', 'Brand-aware recruitment'],
    process: ['Team Integration', 'Process Auditing', 'Continuous Optimisation'],
    cta: 'Setup On-Site Support'
  },
  {
    id: 'executive',
    title: 'Executive Search',
    intro: 'Identifying and attracting world-class C-suite leadership and strategic specialists to lead your organization into the future.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    benefits: ['Confidential searching', 'Market mapping', 'Board-level consulting', 'Leadership assessment'],
    process: ['Strategic Briefing', 'Direct Headhunting', 'Psychometric Profiling'],
    cta: 'Engage Executive Search'
  },
  {
    id: 'project',
    title: 'Project-Based Hiring',
    intro: 'Dedicated recruitment teams for specific projects, product launches, or digital transformation initiatives requiring targeted talent cohorts.',
    image: 'https://images.unsplash.com/photo-1522071823991-b5ae72647c46?q=80&w=800&auto=format&fit=crop',
    benefits: ['Concentrated expertise', 'Project-aligned timelines', 'Batch hiring efficiency', 'Cohesive team building'],
    process: ['Project Scoping', 'Cohort Identification', 'Milestone Management'],
    cta: 'Start Project Hiring'
  }
];

export default function CoreRecruitmentSolutions() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Our Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            End-to-End <span className="text-[#7A1F5C]">Recruitment Solutions</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg">
            We deliver a comprehensive suite of staffing models tailored to the specific operational and strategic needs of global organizations.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {SOLUTIONS.map((solution, i) => (
            <div key={solution.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill
                    className="object-cover" 
                  />
                </div>

              </motion.div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl lg:text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">{solution.title}</h3>
                <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">{solution.intro}</p>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Benefits</p>
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#555] font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Our Focus</p>
                    {solution.process.map((step) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#555] font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#4A1238] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 hover:-translate-y-1">
                  {solution.cta} <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

