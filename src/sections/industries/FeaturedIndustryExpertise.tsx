'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

import itTechImg from '@/assets/Industries inside hero section/IT and Technology.png';
import telecomImg from '@/assets/Industries inside hero section/f895376b-bf17-41cd-9a2a-402beb908709 1.png';
import engineeringImg from '@/assets/Industries inside hero section/Engineering and infrastructure.png';
import mediaImg from '@/assets/Industries inside hero section/Media and digital.png';
import bankingImg from '@/assets/Industries inside hero section/Banking and Finnace.png';
import healthcareImg from '@/assets/Industries inside hero section/Heathcare.png';
import retailImg from '@/assets/Industries inside hero section/Retail -E-commerce.png';
import manufacturingImg from '@/assets/Industries inside hero section/Manufacturing.png';

const INDUSTRIES_LIST = [
  {
    id: 'it-technology',
    title: 'IT & Technology',
    desc: 'Driving digital transformation with elite software engineers and full-stack technical specialists.',
    areas: ['Software Engineering', 'Cloud & DevOps', 'Cybersecurity Ops', 'Data & AI Systems'],
    challenges: ['Severe senior talent scarcity', 'Rapidly evolving frameworks'],
    image: itTechImg,
    href: '/industries/it-technology'
  },
  {
    id: 'telecommunications',
    title: 'Telecommunications',
    desc: 'Scaling global connectivity with expert engineers for 5G, network, and satellite infrastructure.',
    areas: ['5G Rollouts', 'Network Security', 'Satellite Comms', 'Wireless Infrastructure'],
    challenges: ['High capital investment risk', 'Complex global standard shifts'],
    image: telecomImg,
    href: '/industries/telecommunications'
  },
  {
    id: 'engineering-infrastructure',
    title: 'Engineering & Infrastructure',
    desc: 'Supporting large-scale engineering, civil, industrial, and technical workforce requirements.',
    areas: ['Civil Engineering', 'Industrial Operations', 'Project Management', 'Structural Design'],
    challenges: ['Complex safety regulations', 'Cross-border logistics'],
    image: engineeringImg,
    href: '/industries/engineering-infrastructure'
  },
  {
    id: 'media-digital-services',
    title: 'Media & Digital Services',
    desc: 'Connecting businesses with talent across digital platforms, content, and technology ecosystems.',
    areas: ['Digital Platforms', 'Content Production', 'Broadcast Systems', 'Creative Design'],
    challenges: ['Monetization complexity', 'Rapid content scaling needs'],
    image: mediaImg,
    href: '/industries/media-digital-services'
  },
  {
    id: 'banking-finance',
    title: 'Banking & Finance',
    desc: 'Strategic talent acquisition for global financial institutions, fintech, and regulatory compliance.',
    areas: ['Fintech Engineering', 'Risk & Compliance', 'Investment Operations', 'Core Banking Tech'],
    challenges: ['Severe security vulnerabilities', 'Complex regulatory audit checks'],
    image: bankingImg,
    href: '/industries/banking-finance'
  },
  {
    id: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    desc: 'Providing critical expertise for clinical research, pharmaceutical development, and healthcare admin.',
    areas: ['Clinical Research', 'Pharma Operations', 'Biotech Development', 'Healthcare Admin'],
    challenges: ['High-risk medical compliance', 'Extremely long vetting cycles'],
    image: healthcareImg,
    href: '/industries/healthcare-life-sciences'
  },
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    desc: 'Optimizing the consumer journey with specialists in omnichannel retail and e-commerce platforms.',
    areas: ['Omnichannel Strategy', 'E-commerce Architecture', 'Logistics & Distribution', 'Digital Marketing'],
    challenges: ['Severe demand volatility', 'Fierce platform competition'],
    image: retailImg,
    href: '/industries/retail-ecommerce'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Delivering engineering excellence and operational leadership for Industry 4.0 ecosystems.',
    areas: ['Industry 4.0 Systems', 'Process Engineering', 'Operational Leadership', 'Automation & Robotics'],
    challenges: ['Legacy systems bottleneck', 'Technical engineering skill gaps'],
    image: manufacturingImg,
    href: '/industries/manufacturing'
  }
];

export default function FeaturedIndustryExpertise() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Core Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Global <span className="text-[#7A1F5C]">Industry Blocks</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We operate through specialized industry units that speak your language, understand your specific <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">workforce challenges</Link>, and deliver <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">compliant staffing solutions</Link>.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {INDUSTRIES_LIST.map((ind, i) => (
            <div key={ind.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image src={ind.image} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                <h3 className="text-3xl lg:text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">{ind.title}</h3>
                <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">{ind.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Key Workforce Areas</p>
                    {ind.areas.map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#7A1F5C] flex-shrink-0" />
                        <span className="text-sm text-[#555] font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Sector Challenges</p>
                    {ind.challenges.map((challenge) => (
                      <div key={challenge} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#8A8A8A]">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={ind.href} className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#4A1238] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 hover:-translate-y-1">
                  Explore {ind.title} Solutions <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

