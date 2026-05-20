'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Zap, Users, Target, Clock, ShieldCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';

import core1 from '@/assets/Services/Our Core Expertise/1be82635a125b9f3de8da660fbd731fc 1.png';
import core2 from '@/assets/Services/Our Core Expertise/2e418a2c6a935d70d4acf617cba909ba 1.png';
import core3 from '@/assets/Services/Our Core Expertise/68eedba92050a1f203d90c54fb012644 1.png';
import core4 from '@/assets/Services/Our Core Expertise/797d24899edeaedb005f0017e412e185 1.png';
import core5 from '@/assets/Services/Our Core Expertise/a0b8af65080c1bac17f157d1815cbe95 1.png';
import core6 from '@/assets/Services/Our Core Expertise/aa20098a5350281d966e610bc818b992 1.png';
import core7 from '@/assets/Services/Our Core Expertise/eb0f056b9f392799b0b6f8ceeb67ae6b 1.png';
import core8 from '@/assets/Services/Our Core Expertise/image 2.png';

const SOLUTIONS = [
  {
    id: 'it-staffing',
    title: 'IT Staffing',
    slug: 'it-staffing',
    intro: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.',
    image: core1,
    benefits: ['Elite software talent network', 'Domain-specific vetting', 'Accelerated hiring timelines', 'Cloud & DevOps specialization'],
    process: ['Software Engineering', 'Cloud Operations', 'Data Infrastructure'],
    cta: 'Explore IT Staffing'
  },
  {
    id: 'executive',
    title: 'Executive Search',
    slug: 'executive-search',
    intro: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.',
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
    intro: 'Strategic permanent placement services to build your long-term success with high-retention talent.',
    image: core4,
    benefits: ['High retention metrics', 'Deep organizational fit', 'Cohesive team building', 'Direct-placement reliability'],
    process: ['Strategic Fit Assessment', 'Thorough Vetting', 'Offer Optimization'],
    cta: 'Explore Permanent Hiring'
  },
  {
    id: 'temporary',
    title: 'Temporary Recruitment',
    slug: 'temporary-recruitment',
    intro: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.',
    image: core5,
    benefits: ['Immediate resource deployment', 'Accommodate seasonal peaks', 'High-volume candidate pool', 'Vetted database matching'],
    process: ['High-Volume Scaling', 'Automated Sourcing', 'Compliance Screening'],
    cta: 'Explore Temporary Recruitment'
  },
  {
    id: 'onsite',
    title: 'On-Site Recruitment',
    slug: 'on-site-recruitment',
    intro: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.',
    image: core6,
    benefits: ['Embedded talent consultants', 'Minimized cost-per-hire', 'Standardized methodologies', 'Consistent brand representation'],
    process: ['Process Auditing', 'Direct Stakeholder Sync', 'Embedded Partners'],
    cta: 'Explore On-Site Recruitment'
  },
  {
    id: 'managed',
    title: 'Managed Services',
    slug: 'managed-services',
    intro: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.',
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
                className="w-full lg:w-1/2 relative flex justify-center items-center py-6 px-4 md:px-8"
              >
                {/* Backdrop Shape */}
                <div 
                  className={`absolute w-full aspect-[4/3] max-w-[400px] md:max-w-[440px] z-0 transition-transform duration-500 ${
                    i % 2 === 0 
                      ? 'bg-[#7A1F5C] rounded-[40px_180px_40px_180px] -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6' 
                      : 'bg-[#F5F0E8] border border-[#7A1F5C]/10 rounded-[180px_40px_180px_40px] translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6'
                  }`} 
                />

                {/* Main Image Container */}
                <div 
                  className={`relative w-full aspect-[4/3] max-w-[400px] md:max-w-[440px] overflow-hidden shadow-2xl z-10 transition-all duration-500 hover:scale-[1.03] hover:shadow-[#7A1F5C]/10 ${
                    i % 2 === 0 
                      ? 'rounded-[40px_180px_40px_180px]' 
                      : 'rounded-[180px_40px_180px_40px]'
                  }`}
                >
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill
                    className="object-cover object-center" 
                   sizes="(max-width: 768px) 100vw, 40vw" />
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

                <Link href={`/services/${solution.slug}`} className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#4A1238] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 hover:-translate-y-1">
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

