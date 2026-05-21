'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu, Users, Building, Zap, FileText, Calendar, Clock, BarChart } from 'lucide-react';

import humanexDashboardImg from '@/assets/showcase/Humanex.png';

export default function HumanexShowcase() {
  const features = [
    "AI-powered recruitment management",
    "Smart onboarding workflows",
    "Employee and manager portals",
    "Attendance and payroll integration",
    "HR analytics and reporting",
    "AI HR Copilot assistance",
    "Workforce planning and automation"
  ];

  const managementCards = [
    {
      title: "Recruitment",
      icon: Cpu,
      color: "bg-[#7A1F5C]/10 text-[#7A1F5C] border-[#7A1F5C]/20",
      items: ["AI candidate matching", "Interview workflows", "Applicant tracking"]
    },
    {
      title: "Onboarding",
      icon: FileText,
      color: "bg-[#D14D72]/10 text-[#D14D72] border-[#D14D72]/20",
      items: ["Digital documents", "Task automation", "Employee journeys"]
    },
    {
      title: "Core HR",
      icon: Users,
      color: "bg-[#7A1F5C]/10 text-[#7A1F5C] border-[#7A1F5C]/20",
      items: ["Attendance", "Leave management", "Payroll support"]
    },
    {
      title: "AI Assistant",
      icon: Zap,
      color: "bg-[#D14D72]/10 text-[#D14D72] border-[#D14D72]/20",
      items: ["Workforce insights", "Compliance support", "Smart automation"]
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F0E8] to-[#FAF8F5] py-20 md:py-8 text-[#1A1A1A]">

      {/* WhatsApp-style pattern background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'url("/hero-pattern.png")', backgroundSize: '400px 400px', backgroundRepeat: 'repeat' }} />

      {/* ─── Glowing Brand-Plum Meshes ─── */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-[#7A1F5C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] rounded-full bg-[#D14D72]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header Section ─── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7A1F5C]/20 bg-[#7A1F5C]/5 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6"
          >
            <Cpu size={12} className="animate-pulse" /> Proprietary HR Platform
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold mb-6 leading-[1.1] tracking-tight text-[#1A1A1A]"
          >
            Powering Recruitment with <br />
            Our Proprietary <span className="text-[#7A1F5C]">HR Platform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed font-normal"
          >
            Recruitment is more than sourcing candidates. Chalky combines expert <Link href="/services" className="text-[#7A1F5C] hover:underline font-medium transition-all">talent acquisition</Link> with <span className="text-[#7A1F5C] font-semibold">Humanex</span>  our AI-powered all-in-one HR, hiring, onboarding, and <Link href="/services/managed-services" className="text-[#7A1F5C] hover:underline font-medium transition-all">workforce management</Link> platform built to simplify every stage of the employee journey.
          </motion.p>
        </div>

        {/* ─── Grid Checklist Row ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 max-w-5xl mx-auto"
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200/60 hover:border-[#7A1F5C]/20 hover:bg-[#F5F0E8]/40 transition-all duration-300 shadow-sm group"
            >
              <CheckCircle size={14} className="text-[#7A1F5C] group-hover:scale-105 transition-transform" />
              <span className="text-[11px] font-medium text-gray-600 tracking-wide uppercase">{feat}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── Product Showcase Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">

          {/* LEFT: Premium OS Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group"
          >
            {/* Outer Decorative Soft Brand Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#7A1F5C] to-[#D14D72] opacity-5 blur-xl group-hover:opacity-10 transition duration-1000" />

            {/* Mock macOS Panel */}
            <div className="relative rounded-2xl overflow-hidden border border-[#7A1F5C]/10 bg-white shadow-xl shadow-[#7A1F5C]/3 flex flex-col">

              {/* Traffic Lights Bar */}
              <div className="bg-[#FAF8F5] px-4 py-2.5 border-b border-gray-100 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest ml-3">Humanex – System Hub</span>
              </div>

              {/* Actual Dashboard Screenshot Asset */}
              <div className="relative aspect-[16/10] w-full bg-neutral-50 overflow-hidden">
                <Image
                  src={humanexDashboardImg}
                  alt="Humanex platform dashboard mockup"
                  fill
                  className="object-cover group-hover:scale-[1.005] transition-transform duration-750"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: High-Content Strategic Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#7A1F5C] bg-[#7A1F5C]/5 px-3 py-1 rounded border border-[#7A1F5C]/15 mb-3 inline-block">
                SaaS Integration
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] leading-tight tracking-tight mt-1">
                Humanex – All-in-One HR, Hiring & Onboarding Platform
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium border-l-3 border-[#7A1F5C]/30 pl-3">
              Built for growing companies that need more than <Link href="/services" className="text-[#7A1F5C] hover:underline transition-all">recruitment services</Link>.
            </p>

            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              From <Link href="/services/contract-staffing" className="text-[#7A1F5C] font-medium hover:underline transition-all">candidate sourcing</Link> to onboarding and <Link href="/services/managed-services" className="text-[#7A1F5C] font-medium hover:underline transition-all">workforce operations</Link>, Humanex centralizes hiring, HR workflows, payroll support, employee engagement, and AI-powered decision making in one unified ecosystem.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#7A1F5C] hover:bg-[#D14D72] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md shadow-[#7A1F5C]/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Hiring
              </a>
              <a
                href="https://chalkyhrplatform-hgadcrengkdmhrhb.southindia-01.azurewebsites.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#7A1F5C] border border-[#7A1F5C]/15 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Humanex <ArrowRight size={12} className="text-[#D14D72]" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* ─── Stats Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white border border-gray-200/50 rounded-2xl p-6 md:p-8 mb-20 shadow-lg shadow-[#7A1F5C]/2 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          <div className="flex flex-col pt-3 md:pt-0">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#7A1F5C] to-[#D14D72] bg-clip-text text-transparent">4,500+</span>
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1">Companies</span>
          </div>
          <div className="flex flex-col pt-3 md:pt-0 md:pl-3">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#D14D72] to-[#7A1F5C] bg-clip-text text-transparent">804K+</span>
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1">Users</span>
          </div>
          <div className="flex flex-col pt-3 md:pt-0 md:pl-3">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#7A1F5C] to-[#D14D72] bg-clip-text text-transparent">AI COPILOT</span>
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1">Enabled</span>
          </div>
          <div className="flex flex-col pt-3 md:pt-0 md:pl-3">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#D14D72] to-[#7A1F5C] bg-clip-text text-transparent">HR + HIRING</span>
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 mt-1">Unified</span>
          </div>
        </motion.div>

        {/* ─── "What Humanex Helps You Manage" Sub-Section ─── */}
        <div className="border-t border-gray-200/50 pt-2 mb-16">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
              What Humanex Helps You Manage
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">
              Streamlining every single dimension of your organizational lifecycle in a highly automated ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white border border-gray-200/50 hover:border-[#7A1F5C]/15 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${card.color} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <CardIcon size={20} />
                  </div>

                  <h4 className="font-semibold text-base text-[#1A1A1A] mb-3 uppercase tracking-wide">
                    {card.title}
                  </h4>

                  <ul className="space-y-2 mt-auto">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 rounded-full bg-[#7A1F5C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Enterprise Positioning Banner ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#7A1F5C]/15 bg-[#F5F0E8]/60 p-6 md:p-8 text-center shadow-inner"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#7A1F5C] italic">
            “Chalky delivers recruitment expertise powered by <span className="text-[#D14D72] font-semibold">Humanex</span> technology.”
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#7A1F5C] to-[#D14D72] mx-auto mt-4 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}
