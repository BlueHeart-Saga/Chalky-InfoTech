'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowUpRight, ClipboardCheck, Users, Search } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function CompanyOverview() {
  return (
    <section id="about" className="relative py-24 min-h-[800px] bg-[#FDFCF6] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 rounded-l-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Visual Area (Poster Style) */}
          <div className="relative h-full min-h-[600px] w-full flex items-center justify-center py-10">
            {/* Concentric Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] border-2 border-[#7A1F5C]/10 rounded-full" />
              <div className="absolute w-[550px] h-[550px] border-2 border-[#7A1F5C]/5 rounded-full" />
              <div className="absolute w-[350px] h-[350px] bg-[#7A1F5C]/5 rounded-full" />
            </div>

            {/* Central Recruiter Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]"
            >
              <Image 
                src="/overview-image.png"
                alt="Chalky Infotech Overview"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Left Side Text List */}
            <div className="absolute left-0 top-1/4 z-20 flex flex-col gap-3">
              {['End-to-End', 'Hiring Support', 'Screening', 'Shortlisting', 'Interview', 'Coordination'].map((item, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg sm:text-2xl font-bold text-[#1A1A1A] leading-tight"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="flex flex-col justify-center h-full pt-8 lg:pt-0">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              {/* SMALL LABEL */}
              <div className="inline-block mb-6">
                <span className="text-[#7A1F5C] text-xs font-bold uppercase tracking-[0.2em] bg-[#7A1F5C]/10 px-4 py-2 rounded-full">
                  About Chalky Infotech
                </span>
              </div>
              
              {/* MAIN HEADING */}
              <h2 className="text-3xl md:text-4xl lg:text-[52px] font-semibold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                Empowering Businesses With <br/>
                <span className="text-[#7A1F5C]">Future Workforce Solutions</span>
              </h2>
              
              {/* COMPANY DESCRIPTION */}
              <p className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed mb-4">
                Chalky Infotech is a specialist technology and digital recruitment partner helping organisations scale with exceptional talent across cloud, AI, data, software engineering and enterprise transformation.
              </p>
              
              {/* HIGHLIGHT FEATURES GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10 mt-8">
                {[
                  "Global Talent Network",
                  "Industry-Specific Expertise",
                  "Fast Hiring Process",
                  "Enterprise Workforce Solutions"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="bg-white rounded-full p-1 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                      <CheckCircle2 className="text-[#C2185B] w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tagline from image */}
              <p className="text-xl font-bold text-[#1A1A1A] mb-10">
                Your trusted partner in finding the right talent.
              </p>
              
              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/services" className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white px-10 py-5 rounded-2xl font-bold text-base shadow-lg shadow-[#7A1F5C]/20 hover:shadow-[#7A1F5C]/40 hover:-translate-y-0.5 transition-all duration-300">
                  Explore Services <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1A1A1A] border border-gray-200 px-10 py-5 rounded-2xl font-bold text-base hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Drops Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg className="relative block w-full h-[30px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F5F0E8" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>
    </section>
  );
}
