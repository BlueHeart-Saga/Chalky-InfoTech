'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Search,
  UserCheck,
  Star,
  Users,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const STEPS = [
  {
    id: 1,
    icon: FileText,
    title: "Requirement",
    desc: "Analysing and defining role-specific needs."
  },
  {
    id: 2,
    icon: Search,
    title: "Sourcing",
    desc: "Targeted talent hunt across global networks."
  },
  {
    id: 3,
    icon: UserCheck,
    title: "Screening",
    desc: "AI-powered technical and soft-skill evaluation."
  },
  {
    id: 4,
    icon: Star,
    title: "Shortlist",
    desc: "Identifying the top-tier candidates for review."
  },
  {
    id: 5,
    icon: Users,
    title: "Interview",
    desc: "Direct behavioral and expert-led assessments."
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Onboarding",
    desc: "Ensuring a smooth and productive start."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
            Recruitment <span className="text-[#7A1F5C]">Lifecycle</span> Flow
          </h2>
          <div className="w-20 h-1 bg-[#7A1F5C] mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Our end-to-end talent acquisition journey ensures precision and quality at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-4">
            {STEPS.map((item, i) => (
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
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] z-0 text-gray-200">
                    <ChevronRight size={24} />
                  </div>
                )}

                {/* Circle Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 bg-white border-[#7A1F5C]/20 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:border-[#7A1F5C] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#7A1F5C]/20 group-hover:scale-110">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1A1A1A] text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
                    {item.id}
                  </div>
                </div>

                <div className="px-2">
                  <h4 className="font-semibold text-lg text-[#1A1A1A] mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed max-w-[160px] mx-auto">
                    {item.desc}
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
