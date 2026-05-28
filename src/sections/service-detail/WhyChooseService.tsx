'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  serviceLabel: string;
  features: Feature[];
}

import feature1 from '@/assets/Services-details-page/4.png';
import feature2 from '@/assets/Services-details-page/5.png';
import feature3 from '@/assets/Services-details-page/6.png';
import feature4 from '@/assets/Services-details-page/7.png';
import feature5 from '@/assets/Services-details-page/8.png';
import feature6 from '@/assets/Services-details-page/9.png';

const DEFAULT_FEATURE_IMAGES = [
  feature1.src,
  feature2.src,
  feature3.src,
  feature4.src,
  feature5.src,
  feature6.src
];

export default function WhyChooseService({ serviceLabel, features }: Props) {
  return (
    <section className="py-24 bg-[#F5F0E8] text-[#1A1A1A] relative overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Heading Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6">
              The Chalky Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-[1.1]">
              Strategic Excellence in <br />
              <span className="text-[#7A1F5C]">{serviceLabel} Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We provide specialized workforce solutions designed to help your organization access top-tier talent, optimize hiring workflows, and achieve sustainable operational growth through our expert {serviceLabel.toLowerCase()} framework.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#C2185B]" />
                  <span className="text-[#1A1A1A] font-bold text-sm tracking-tight">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <div className="flex flex-col items-start bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-white/60">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-[#7A1F5C] font-extrabold text-[10px] uppercase tracking-[0.2em] mb-4">
                  <span className="w-8 h-[1px] bg-[#7A1F5C]/30" /> Partner Excellence
                </div>
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 leading-tight">Scale Your Global Operations</h3>
                <p className="text-gray-600 mb-10 leading-relaxed text-sm">
                  Our {serviceLabel.toLowerCase()} expertise is built on years of delivering high-impact recruitment strategies for enterprise leaders across technical and professional domains globally.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-[#7A1F5C] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-[#C2185B] transition-all text-center shadow-lg shadow-[#7A1F5C]/20">
                    Talk To Specialists
                  </Link>
                  <Link href="/jobs" className="bg-white text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all text-center border border-gray-100">
                    View Open Roles
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Features Grid - Poster Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(() => {
            const displayFeatures = [...features];
            
            // Pad array so it's a perfect multiple of 3 for balanced grid layouts
            const fallbackFeatures = [
              {
                title: 'Continuous Quality Assurance',
                desc: 'Rigorous ongoing performance reviews and continuous feedback loops to ensure long-term placement success.',
                icon: 'Award'
              },
              {
                title: 'Guaranteed Performance',
                desc: 'Our rigorous vetting and replacement assurance ensure your team stays productive and high-performing.',
                icon: 'ShieldCheck'
              },
              {
                title: 'Global Delivery Network',
                desc: 'Tapping into specialized talent pools across international hubs to meet your scaling requirements.',
                icon: 'Globe'
              }
            ];

            let fallbackIndex = 0;
            // Add fallback cards until we hit a multiple of 3 (e.g., 5 cards -> 6 cards)
            while (displayFeatures.length > 0 && displayFeatures.length % 3 !== 0) {
              displayFeatures.push(fallbackFeatures[fallbackIndex % fallbackFeatures.length]);
              fallbackIndex++;
            }

            return displayFeatures.map((feature, i) => {
              const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle;
              const cardImage = DEFAULT_FEATURE_IMAGES[i % DEFAULT_FEATURE_IMAGES.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl bg-[#EBEBEB] h-[360px] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Area - Top */}
                  <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                    <Image
                      src={cardImage}
                      alt={feature.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>

                  {/* Content Area - Bottom (default), Full height (hover) */}
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-8 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10 border-t border-white/20 group-hover:border-transparent">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-[#7A1F5C] group-hover:text-white transition-all">
                        <Icon size={20} className="text-[#7A1F5C] group-hover:text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1A1A1A] leading-tight group-hover:text-[#7A1F5C] transition-colors">{feature.title}</h4>
                    </div>

                    {/* Hidden content that fades in on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                      <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">{feature.desc}</p>
                      <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-extrabold text-[10px] uppercase tracking-widest mt-auto border-b border-[#7A1F5C]/20 pb-1 w-fit">
                        Explore Advantage <ArrowRight size={14} />
                      </span>
                    </div>

                    {/* Bottom label that fades out on hover */}
                    <span className="absolute bottom-8 left-8 text-[#8A8A8A] text-[10px] uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300 font-extrabold">Service Benefit</span>
                  </div>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>

      {/* Bottom Drops Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>
    </section>
  );
}

