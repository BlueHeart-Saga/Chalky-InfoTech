'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Zap, Users, Target, Clock, ShieldCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';

import core1 from '@/assets/Services/our-services/1.png';
import core2 from '@/assets/Services/our-services/2.png';
import core3 from '@/assets/Services/our-services/3.png';
import core4 from '@/assets/Services/our-services/4.png';
import core5 from '@/assets/Services/our-services/5.png';
import core6 from '@/assets/Services/our-services/6.png';
import core7 from '@/assets/Services/our-services/7.png';
import core8 from '@/assets/Services/our-services/8.png';

const SOLUTIONS = [
  {
    id: 'it-staffing',
    title: 'IT Staffing',
    slug: 'it-staffing',
    intro: 'Specialized IT recruitment services connecting businesses with skilled software, cloud, DevOps, and data engineering professionals..',
    image: core1,
    benefits: ['Elite software talent network', 'Domain-specific vetting', 'Accelerated hiring timelines', 'Cloud & DevOps specialization'],
    process: ['Software Engineering', 'Cloud Operations', 'Data Infrastructure'],
    cta: 'Explore IT Staffing'
  },
  {
    id: 'executive',
    title: 'Executive Search',
    slug: 'executive-search',
    intro: 'Discreet, high-impact executive recruitment services for identifying and attracting exceptional C-suite and senior leadership talent',
    image: core2,
    benefits: ['Absolute confidentiality', 'Global talent mapping', 'Board-level consulting', 'Thorough executive screening'],
    process: ['Direct Headhunting', 'Cultural Alignment', 'Strategic Selection'],
    cta: 'Explore Executive Search'
  },
  {
    id: 'contract',
    title: 'Contract Staffing',
    slug: 'contract-staffing',
    intro: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.',
    image: core3,
    benefits: ['Agile scaling capability', 'Niche project expertise', 'Full payroll management', 'Minimal operational risk'],
    process: ['Urgent Staff Sourcing', 'Compliance Guardrails', 'Seamless Deployment'],
    cta: 'Explore Contract Staffing'
  },
  {
    id: 'permanent',
    title: 'Permanent Hiring',
    slug: 'permanent-hiring',
    intro: 'Strategic permanent recruitment services designed to connect businesses with high-quality talent for long-term success and retention.',
    image: core4,
    benefits: ['High retention metrics', 'Deep organizational fit', 'Cohesive team building', 'Direct-placement reliability'],
    process: ['Strategic Fit Assessment', 'Thorough Vetting', 'Offer Optimization'],
    cta: 'Explore Permanent Hiring'
  },
  {
    id: 'temporary',
    title: 'Temporary Recruitment',
    slug: 'temporary-recruitment',
    intro: 'Rapid-response temporary recruitment services to help businesses scale their workforce quickly and meet changing operational demands.',
    image: core5,
    benefits: ['Immediate resource deployment', 'Accommodate seasonal peaks', 'High-volume candidate pool', 'Vetted database matching'],
    process: ['High-Volume Scaling', 'Automated Sourcing', 'Compliance Screening'],
    cta: 'Explore Temporary Recruitment'
  },
  {
    id: 'onsite',
    title: 'On-Site Recruitment',
    slug: 'on-site-recruitment',
    intro: 'Full-cycle on-site recruitment solutions providing dedicated talent partners who work seamlessly alongside your HR team',
    image: core6,
    benefits: ['Embedded talent consultants', 'Minimized cost-per-hire', 'Standardized methodologies', 'Consistent brand representation'],
    process: ['Process Auditing', 'Direct Stakeholder Sync', 'Embedded Partners'],
    cta: 'Explore On-Site Recruitment'
  },
  {
    id: 'managed',
    title: 'Managed Services',
    slug: 'managed-services',
    intro: 'End-to-end managed recruitment solutions (MSP) designed to streamline workforce management, optimize talent supply chains, and improve hiring efficiency.',
    image: core7,
    benefits: ['Streamlined vendor networks', 'Maximum cost efficiency', 'Complete compliance guardrails', 'Data-driven insights'],
    process: ['Vendor Management', 'Performance Auditing', 'Standardized Workflows'],
    cta: 'Explore Managed Services'
  },
  {
    id: 'remote',
    title: 'Remote Hiring',
    slug: 'remote-hiring',
    intro: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.',
    image: core8,
    benefits: ['Unrestricted global talent pool', 'Compliant international onboarding', 'Distributed team support', 'Cultural diversity integration'],
    process: ['Borderless Search', 'Cross-Cultural Vetting', 'Onboarding Support'],
    cta: 'Explore Remote Hiring'
  }
];

export default function CoreRecruitmentSolutions() {
  return (
    <section className="relative pt-20 pb-32 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest mb-4">
            Our Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
            End-to-End <span className="text-[#7A1F5C]">Recruitment Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            We provide flexible recruitment solutions tailored to the operational and strategic hiring needs of businesses across the UK and global markets.
          </p>
        </div>

        {/* Alternate Solutions Rows */}
        <div className="space-y-16 md:space-y-24">
          {SOLUTIONS.map((solution, i) => {
            const isEven = i % 2 === 0;

            return (
              <div 
                key={solution.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column (No cards or borders) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full flex justify-center py-2`}
                >
                  <div className="relative w-full aspect-[4/3] max-w-[500px] sm:max-w-[540px] group flex items-center justify-center">
                    <Image 
                      src={solution.image} 
                      alt={solution.title} 
                      fill
                      className="object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px" 
                    />
                  </div>
                </motion.div>

                {/* Text Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full flex flex-col justify-center`}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {solution.intro}
                  </p>
                  
                  {/* Benefits & Our Focus Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <p className="text-[11px] font-extrabold text-[#7A1F5C] uppercase tracking-wider border-b border-[#7A1F5C]/10 pb-1.5">
                        Key Benefits
                      </p>
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#7A1F5C] mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700 font-semibold">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <p className="text-[11px] font-extrabold text-[#7A1F5C] uppercase tracking-wider border-b border-[#7A1F5C]/10 pb-1.5">
                        Our Focus
                      </p>
                      {solution.process.map((step) => (
                        <div key={step} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700 font-semibold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link 
                      href={`/services/${solution.slug}`} 
                      className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#63184a] transition-all duration-300 shadow-md shadow-[#7A1F5C]/15 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{solution.cta}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Divider to White */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}

