'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, UserCheck, Briefcase, Trophy, Globe, Zap, Heart, Shield } from 'lucide-react';
import api from '@/services/api';

// ── WhyWorkWithChalky ────────────────────────────────────────────────────────
import imgSpecializedNetwork from '@/assets/Find-Jobs/1.png';
import imgEndToEnd from '@/assets/Find-Jobs/2.png';
import imgDedicatedConsultant from '@/assets/Find-Jobs/3.png';
import imgGlobalMilestone from '@/assets/Find-Jobs/4.png';

const CANDIDATE_REASONS = [
  { 
    image: imgSpecializedNetwork,
    title: "Specialized Career Network", 
    tag: "Network",
    desc: "Access exclusive, high-impact roles across cloud, DevOps, AI, and software engineering domains at top-tier global firms." 
  },
  { 
    image: imgEndToEnd,
    title: "End-To-End Journey Support", 
    tag: "Process",
    desc: "Complete recruitment management from the initial application and screening to offer negotiation and onboarding support." 
  },
  { 
    image: imgDedicatedConsultant,
    title: "Dedicated Consultant Access", 
    tag: "Expertise",
    desc: "Direct coordination with industry-specialist consultants who understand your tech stack and career aspirations." 
  },
  { 
    image: imgGlobalMilestone,
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
              className="group relative overflow-hidden rounded-[2.5rem] bg-white h-[480px] cursor-pointer border border-[#7A1F5C]/25 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              {/* Visual Area */}
              <div className="relative w-full h-[390px] overflow-hidden bg-[#FBFBFB]">
                {i === 0 && (
                  <>
                    {/* Background vertical pink shape behind image (matching Card 4 exactly) */}
                    <div className="absolute top-10 bottom-10 right-8 w-[65px] bg-[#C955A2]/35 rounded-[20px] z-0" />
                    
                    {/* Text content box (Deep Purple) */}
                    <div className="absolute top-10 bottom-10 left-6 right-[42%] bg-[#7A1F5C] text-white p-5 rounded-[24px] z-10 shadow-lg flex flex-col justify-center">
                      <h4 className="text-xs font-extrabold mb-2 leading-snug">{reason.title}</h4>
                      <p className="text-[9px] text-white/85 leading-relaxed font-medium">{reason.desc}</p>
                    </div>

                    {/* Candidate Image (Larger) */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[90%] z-20">
                      <Image 
                        src={reason.image} 
                        alt={reason.title} 
                        fill 
                        unoptimized
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </>
                )}

                {i === 1 && (
                  <>
                    {/* Background pink shape tilted behind image */}
                    <div className="absolute top-12 left-6 w-20 h-32 bg-[#C955A2]/25 rounded-[24px] rotate-12 z-0" />
                    
                    {/* Text content box (Deep Purple) - Right Aligned */}
                    <div className="absolute top-10 bottom-10 right-6 left-[42%] bg-[#7A1F5C] text-white p-5 rounded-[24px] z-10 shadow-lg flex flex-col justify-center">
                      <h4 className="text-xs font-extrabold mb-2 leading-snug">{reason.title}</h4>
                      <p className="text-[9px] text-white/85 leading-relaxed font-medium">{reason.desc}</p>
                    </div>

                    {/* Candidate Image (Larger) */}
                    <div className="absolute bottom-0 left-0 w-[60%] h-[90%] z-20">
                      <Image 
                        src={reason.image} 
                        alt={reason.title} 
                        fill 
                        unoptimized
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </>
                )}

                {i === 2 && (
                  <>
                    {/* Background pink shape horizontal behind image */}
                    <div className="absolute top-16 right-6 w-32 h-20 bg-[#C955A2]/25 rounded-[20px] rotate-6 z-0" />
                    
                    {/* Text content box (Deep Purple) */}
                    <div className="absolute top-10 bottom-10 left-6 right-[42%] bg-[#7A1F5C] text-white p-5 rounded-[24px] z-10 shadow-lg flex flex-col justify-center">
                      <h4 className="text-xs font-extrabold mb-2 leading-snug">{reason.title}</h4>
                      <p className="text-[9px] text-white/85 leading-relaxed font-medium">{reason.desc}</p>
                    </div>

                    {/* Candidate Image (Larger) */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[90%] z-20">
                      <Image 
                        src={reason.image} 
                        alt={reason.title} 
                        fill 
                        unoptimized
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </>
                )}

                {i === 3 && (
                  <>
                    {/* Background vertical pink shape behind image */}
                    <div className="absolute top-10 bottom-10 right-8 w-[65px] bg-[#C955A2]/35 rounded-[20px] z-0" />
                    
                    {/* Text content box (Deep Purple) */}
                    <div className="absolute top-10 bottom-10 left-6 right-[42%] bg-[#7A1F5C] text-white p-5 rounded-[24px] z-10 shadow-lg flex flex-col justify-center">
                      <h4 className="text-xs font-extrabold mb-2 leading-snug">{reason.title}</h4>
                      <p className="text-[9px] text-white/85 leading-relaxed font-medium">{reason.desc}</p>
                    </div>

                    {/* Candidate Image (Larger) */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[90%] z-20">
                      <Image 
                        src={reason.image} 
                        alt={reason.title} 
                        fill 
                        unoptimized
                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Footer Label */}
              <div className="h-[90px] bg-white border-t border-[#7A1F5C]/10 flex items-center justify-center">
                <span className="text-sm font-extrabold text-[#7A1F5C] uppercase tracking-widest">
                  {reason.tag}
                </span>
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
