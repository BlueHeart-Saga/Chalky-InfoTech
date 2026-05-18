'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, UserCheck, Briefcase, Trophy, Globe, Zap, Heart, Shield } from 'lucide-react';
import api from '@/services/api';

// ── WhyWorkWithChalky ────────────────────────────────────────────────────────
const CANDIDATE_REASONS = [
  { 
    image: "https://images.unsplash.com/photo-1522071823991-b5ae72647c46?q=80&w=800&auto=format&fit=crop",
    title: "Specialized Career Network", 
    tag: "Network",
    desc: "Access exclusive, high-impact roles across cloud, DevOps, AI, and software engineering domains at top-tier global firms." 
  },
  { 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    title: "End-To-End Journey Support", 
    tag: "Process",
    desc: "Complete recruitment management from the initial application and screening to offer negotiation and onboarding support." 
  },
  { 
    image: "https://images.unsplash.com/photo-1600880212319-7524e2727928?q=80&w=800&auto=format&fit=crop",
    title: "Dedicated Consultant Access", 
    tag: "Expertise",
    desc: "Direct coordination with industry-specialist consultants who understand your tech stack and career aspirations." 
  },
  { 
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    title: "Global Milestone Strategies", 
    tag: "Growth",
    desc: "Strategic career advice and placement opportunities designed to support your rapid growth into senior leadership roles." 
  }
];

export function WhyWorkWithChalky() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Why Partner With Us</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
            Elevating Your <span className="text-[#7A1F5C]">Career Potential</span>
          </h2>
          <p className="text-[#8A8A8A] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Partner with a recruitment team focused on delivering exceptional talent solutions and scalable career strategies for the world's best professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANDIDATE_REASONS.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white h-[380px] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Area - Top */}
              <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                <Image 
                  src={reason.image} 
                  alt={reason.title} 
                  fill 
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Content Area - Bottom (default), Full height (hover) */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white p-8 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                <span className="text-[10px] font-bold text-[#7A1F5C] uppercase tracking-widest mb-3">{reason.tag}</span>
                <h4 className="text-xl font-bold text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#7A1F5C] transition-colors">{reason.title}</h4>
                
                {/* Hidden content that fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex-grow pt-4 flex flex-col">
                   <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">{reason.desc}</p>
                   <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-bold text-xs mt-auto group/link">
                      Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CandidateJourney (formerly RecruitmentProcess) ───────────────────────────
const STEPS = [
  { 
    title: 'Profile Analysis', 
    desc: 'Our experts evaluate your technical expertise and career aspirations to find the perfect fit.',
    icon: Search
  },
  { 
    title: 'Technical Vetting', 
    desc: 'Participate in specialized assessments designed to showcase your real-world problem-solving skills.',
    icon: UserCheck
  },
  { 
    title: 'Direct Connection', 
    desc: 'Get exclusive access to top-tier hiring managers at global leaders and high-growth startups.',
    icon: Briefcase
  },
  { 
    title: 'Offer Management', 
    desc: 'We handle negotiations and onboarding to ensure you get the best possible career transition.',
    icon: Trophy
  }
];

export function CandidateJourney() {
  return (
    <section className="py-24 bg-white overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Our Methodology</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
            The Journey to Your <span className="text-[#7A1F5C]">Next Milestone</span>
          </h2>
          <div className="w-20 h-1 bg-[#7A1F5C] mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Our candidate-centric lifecycle ensures precision, quality, and a premium experience at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Arrow for Desktop */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] z-0 text-[#EFE7DD]">
                    <ArrowRight size={24} />
                  </div>
                )}

                {/* Circle Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 bg-white border-[#7A1F5C]/20 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:border-[#7A1F5C] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#7A1F5C]/20 group-hover:scale-110">
                    <step.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1A1A1A] text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white shadow-sm">
                    {i + 1}
                  </div>
                </div>

                <div className="px-4">
                  <h4 className="font-bold text-xl text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors">{step.title}</h4>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CareerResources ───────────────────────────────────────────────────────────
export function CareerResources() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const allPosts = await api.getAllPosts(4);
        setResources(allPosts || []);
      } catch (err) {
        console.error("Failed to fetch career resources:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Knowledge Base</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Career <span className="text-[#7A1F5C]">Resources</span>
          </h2>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white/50 animate-pulse rounded-3xl h-64 border border-[#EFE7DD]"></div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <Link key={r.id} href={`/insights/${r.category?.slug}/${r.id}`} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-[#EFE7DD] hover:border-[#7A1F5C]/30 hover:shadow-xl hover:shadow-[#7A1F5C]/5 transition-all h-full flex flex-col"
                >
                  <span className="inline-block px-3 py-1 rounded-md bg-[#F5F0E8] text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6 w-fit">
                    {r.category?.name || 'Guide'}
                  </span>
                  <h4 className="font-bold text-[#1A1A1A] text-xl mb-6 group-hover:text-[#7A1F5C] transition-colors line-clamp-2 leading-tight">{r.title}</h4>
                  <div className="mt-auto flex items-center gap-2 text-[#8A8A8A] text-sm font-semibold group-hover:text-[#7A1F5C] transition-colors">
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
