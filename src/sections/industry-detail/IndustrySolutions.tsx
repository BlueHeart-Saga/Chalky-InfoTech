'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Clock, Briefcase, Target, Globe } from 'lucide-react';

interface Props {
  services: string[];
}

const iconMap: Record<string, any> = {
  'Permanent Recruitment': Users,
  'Contract Staffing': Clock,
  'Temporary Workforce': Briefcase,
  'Project-Based Hiring': Target,
  'Executive Search': Globe,
  'Managed Services': CheckCircle2,
  'Remote Teams': Globe
};

export default function IndustrySolutions({ services }: Props) {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Service Support</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Tailored <span className="text-[#7A1F5C]">Recruitment Models</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service] || CheckCircle2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#EFE7DD] hover:shadow-2xl hover:shadow-[#7A1F5C]/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5F0E8] flex items-center justify-center mb-6 group-hover:bg-[#7A1F5C] group-hover:text-white transition-all duration-500">
                  <Icon size={26} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{service}</h3>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">Specialized {service.toLowerCase()} solutions optimized for your industry.</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

