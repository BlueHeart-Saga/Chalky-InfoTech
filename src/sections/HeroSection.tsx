'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Users, Briefcase, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#3A0D28] via-[#7A1F5C] to-[#4A1238]">
      {/* Animated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full border border-white/5 animate-spin-slow" style={{ animation: 'spin 40s linear infinite' }} />
        <div className="absolute top-20 right-20 w-[380px] h-[380px] rounded-full border border-white/8" />
        <div className="absolute top-32 right-32 w-[260px] h-[260px] rounded-full bg-[#C2185B]/10" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#4A1238]/60" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#D14D72] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
              Enterprise Recruitment & Consulting
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8">
              We Connect
              <span className="block text-[#7A1F5C]">
                Exceptional
              </span>
              Talent with
              <span className="block text-[#7A1F5C]">
                Great Companies
              </span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              Specialist technology and digital recruitment partner supporting organisations with high-quality talent across cloud, data, software and transformation globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/contact"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#C2185B] to-[#D14D72] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl shadow-[#C2185B]/40 hover:shadow-[#C2185B]/60 hover:scale-105 transition-all duration-300">
                Start Hiring <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link href="/jobs"
                className="group flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Browse Jobs <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8">
              {[
                { value: '500+', label: 'Clients', icon: Users },
                { value: '10K+', label: 'Placed', icon: Briefcase },
                { value: '15+', label: 'Countries', icon: Globe },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#C2185B]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none">{value}</p>
                    <p className="text-white/50 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract visual card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C2185B]" />
                  <span className="w-3 h-3 rounded-full bg-white/30" />
                  <span className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-6">Active Recruitment Pipeline</p>
                <div className="space-y-4">
                  {[
                    { role: 'Senior Cloud Architect', company: 'FinTech Corp', tag: 'Cloud', status: 'Matched' },
                    { role: 'AI/ML Engineer', company: 'HealthTech Ltd', tag: 'AI', status: 'Screening' },
                    { role: 'DevOps Lead', company: 'Retail Giants', tag: 'DevOps', status: 'Offer' },
                    { role: 'Data Engineering Manager', company: 'Media House', tag: 'Data', status: 'Placed' },
                  ].map((item, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 group cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{item.role[0]}</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{item.role}</p>
                          <p className="text-white/50 text-xs">{item.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-[#C2185B]/20 text-[#D14D72] text-xs font-semibold">{item.tag}</span>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                          item.status === 'Placed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'Offer' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-white/10 text-white/60'
                        }`}>{item.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Bottom stat */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs">This Month</p>
                    <p className="text-white font-bold text-xl">148 Placements</p>
                  </div>
                  <div className="flex -space-x-2">
                    {['#7A1F5C', '#C2185B', '#D14D72', '#4A1238'].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center" style={{ backgroundColor: c }}>
                        <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center">
                      <span className="text-white text-xs">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[#7A1F5C] font-extrabold text-lg">98%</p>
                <p className="text-[#8A8A8A] text-xs">Client Satisfaction</p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white font-extrabold text-lg">15+</p>
                <p className="text-white/70 text-xs">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
