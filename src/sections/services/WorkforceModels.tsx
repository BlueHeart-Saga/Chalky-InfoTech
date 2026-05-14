'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Globe, MapPin, Briefcase, LayoutGrid } from 'lucide-react';

const MODELS = [
  {
    title: 'Contract Staffing',
    desc: 'Flexible talent for project-based requirements.',
    icon: Clock,
    span: 'lg:col-span-2 lg:row-span-1',
    color: 'bg-[#F5F0E8]',
    iconColor: 'text-[#7A1F5C]'
  },
  {
    title: 'Permanent Hiring',
    desc: 'Strategic talent acquisition for long-term growth.',
    icon: Users,
    span: 'lg:col-span-1 lg:row-span-2',
    color: 'bg-[#7A1F5C] text-white',
    iconColor: 'text-white'
  },
  {
    title: 'Remote Workforce',
    desc: 'Building global borderless teams.',
    icon: Globe,
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-white',
    iconColor: 'text-[#7A1F5C]'
  },
  {
    title: 'On-Site Teams',
    desc: 'Seamless extension of your internal HR.',
    icon: MapPin,
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-[#F5F0E8]',
    iconColor: 'text-[#7A1F5C]'
  },
  {
    title: 'Project-Based Hiring',
    desc: 'Cohorts for specific product launches.',
    icon: Briefcase,
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-white',
    iconColor: 'text-[#7A1F5C]'
  },
  {
    title: 'Hybrid Solutions',
    desc: 'Optimized models for modern workplaces.',
    icon: LayoutGrid,
    span: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-[#EFE7DD]',
    iconColor: 'text-[#7A1F5C]'
  }
];

export default function WorkforceModels() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Delivery Models
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Versatile <span className="text-[#7A1F5C]">Workforce Models</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            Our enterprise-grade hiring frameworks are designed to support every modern working environment, from remote-first start-ups to established global headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {MODELS.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${model.span} ${model.color} rounded-[2.5rem] p-10 border border-[#EFE7DD] flex flex-col justify-between hover:shadow-2xl hover:shadow-[#7A1F5C]/10 transition-all duration-500 group cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${model.title === 'Permanent Hiring' ? 'bg-white/10' : 'bg-white'} flex items-center justify-center mb-12 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <model.icon size={26} className={model.iconColor} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-3 leading-tight">{model.title}</h3>
                <p className={`${model.title === 'Permanent Hiring' ? 'text-white/70' : 'text-[#8A8A8A]'} text-sm leading-relaxed`}>{model.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

