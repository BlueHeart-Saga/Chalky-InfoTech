'use client';

import { motion } from 'framer-motion';
import { UserCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  industryLabel: string;
  roles: string[];
}

export default function RolesWeHire({ industryLabel, roles }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Talent Network</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              Roles We Hire for <span className="text-[#7A1F5C]">{industryLabel}</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[#8A8A8A] text-lg leading-relaxed">
              Our extensive global database includes over 250,000 pre-screened professionals across these specialized industry functions.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#F5F0E8] border border-[#EFE7DD] rounded-2xl p-6 flex items-center justify-between hover:bg-white hover:shadow-xl hover:shadow-[#7A1F5C]/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#7A1F5C] group-hover:text-white transition-all">
                  <UserCheck size={18} className="text-[#7A1F5C] group-hover:text-white" />
                </div>
                <span className="font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors">{role}</span>
              </div>
              <ArrowRight size={16} className="text-[#7A1F5C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#7A1F5C] uppercase tracking-[0.2em] hover:gap-3 transition-all">
            View Current Openings <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

