'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'ai-machine-learning',
    tag: 'AI & Machine Learning',
    color: '#7A1F5C',
    title: 'AI & Machine Learning',
    description: 'Generative AI, MLOps, LLMs, NLP, Computer Vision & Data Science specialists.',
    link: '/capabilities/ai-machine-learning',
  },
  {
    id: 'software-engineering',
    tag: 'Software Engineering',
    color: '#D97706',
    title: 'Software Engineering',
    description: 'Full-stack, backend, frontend, mobile developers & solution architects.',
    link: '/capabilities/software-engineering',
  },
  {
    id: 'cloud-devops',
    tag: 'Cloud & DevOps',
    color: '#2563EB',
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, GCP, Kubernetes, SRE & infrastructure automation talent.',
    link: '/capabilities/cloud-devops',
  },
  {
    id: 'data-analytics',
    tag: 'Data & Analytics',
    color: '#059669',
    title: 'Data & Analytics',
    description: 'Data engineering, snowflake, BI developers, analytics & governance.',
    link: '/capabilities/data-analytics',
  },
];

export default function OurCapabilities() {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Curved Container with Soft Warm Glow */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white p-6 sm:p-10 md:p-12 border border-[#EFE8DE] shadow-sm overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200/80 shadow-xs text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C]" />
              OUR EXPERTISE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3"
            >
              Powering the Future with AI & IT Talent
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal"
            >
              We connect ambitious organizations with highly skilled technology professionals who drive innovation, digital transformation, and sustainable business growth.
            </motion.p>
          </div>

          {/* 4-Card Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {CAPABILITIES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100/90"
              >
                <div>
                  {/* Real Logo Brand Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src="/icon.png"
                        alt="Chalky InfoTech"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-bold text-[#7A1F5C] tracking-tight leading-none">
                        Chalky <span className="text-[#1A1A1A]">InfoTech</span>
                      </span>
                      <span
                        style={{ color: item.color }}
                        className="text-[10px] font-semibold uppercase tracking-wider mt-1"
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p> */}
                </div>

                {/* Learn More Action */}
                <div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-900 uppercase tracking-wider hover:text-[#7A1F5C] transition-colors group-hover:gap-2"
                  >
                    LEARN MORE
                    <ArrowRight size={13} className="transition-all" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Capabilities Footer CTA */}
          <div className="mt-10 text-center relative z-10">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7A1F5C] hover:bg-[#9D2877] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              View All 8 Technology Capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
