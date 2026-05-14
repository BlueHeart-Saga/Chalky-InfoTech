'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Monitor, 
  Landmark, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  Factory 
} from 'lucide-react';

const industries = [
  {
    title: 'Technology & Digital',
    desc: 'Supporting organizations with recruitment solutions across software development, cloud infrastructure, digital platforms, and transformation initiatives.',
    tag: 'Digital Workforce',
    icon: <Monitor className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Finance & Banking',
    desc: 'Providing specialized hiring support for financial services, fintech operations, compliance functions, and enterprise banking environments.',
    tag: 'Financial Operations',
    icon: <Landmark className="w-8 h-8" />,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Healthcare',
    desc: 'Helping healthcare organizations strengthen workforce capabilities through scalable staffing and operational recruitment solutions.',
    tag: 'Healthcare Support',
    icon: <HeartPulse className="w-8 h-8" />,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'Education',
    desc: 'Supporting educational institutions and learning platforms with recruitment solutions designed for evolving academic and digital environments.',
    tag: 'Learning Workforce',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Retail & Commerce',
    desc: 'Delivering workforce solutions for customer operations, retail expansion, logistics coordination, and commerce-driven business growth.',
    tag: 'Business Operations',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Energy & Manufacturing',
    desc: 'Providing recruitment support for industrial operations, manufacturing environments, workforce modernization, and infrastructure projects.',
    tag: 'Industrial Workforce',
    icon: <Factory className="w-8 h-8" />,
    color: 'bg-slate-50 text-slate-600'
  }
];

export default function IndustryExpertise() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 1. SECTION LABEL & 2. MAIN HEADING & 3. SHORT DESCRIPTION */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Industry Expertise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] leading-[1.1] mb-8"
          >
            Industry <br/>
            <span className="text-[#7A1F5C]">Specialisations</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed max-w-2xl"
          >
            Chalky Infotech delivers scalable recruitment and workforce solutions across multiple industries, helping organizations secure high-quality talent aligned with operational, technical, and business goals.
          </motion.p>
        </div>

        {/* 4. INDUSTRY CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col min-h-[280px] p-10 bg-white rounded-[28px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {industry.icon}
              </div>

              {/* Tag */}
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#7A1F5C]/60 bg-[#7A1F5C]/5 px-3 py-1 rounded-full">
                  {industry.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {industry.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#7A1F5C]/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* 5. BOTTOM TRUST STATEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-lg text-gray-500 font-medium max-w-3xl text-center md:text-left italic">
            "We combine industry understanding, recruitment expertise, and workforce strategy to help organizations build scalable, future-ready teams."
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F8F5F0] bg-gray-200" />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#F8F5F0] bg-[#7A1F5C] flex items-center justify-center text-white text-xs font-bold">
              +10k
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
