'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Globe, BadgeCheck, Handshake, CheckCircle2 } from 'lucide-react';
import trustImg from '@/assets/About Us/Why Enterprises Trust Us/Why Enterprises Trust Us.png';

const trustCards = [
  {
    icon: ShieldCheck,
    title: 'Industry Expertise',
    desc: 'Recruitment solutions tailored to sector-specific workforce needs and operational requirements.',
  },
  {
    icon: Globe,
    title: 'Global Workforce Reach',
    desc: 'Supporting organizations across India, the UK, and international business environments.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality-Driven Hiring',
    desc: 'Structured screening and recruitment processes designed for long-term workforce success.',
  },
  {
    icon: Handshake,
    title: 'Scalable Partnerships',
    desc: 'Flexible recruitment strategies supporting startups, SMBs, and enterprise organizations.',
  },
];

const trustPoints = [
  'Industry-Specific Recruitment Expertise',
  'Scalable Workforce Support',
  'Structured Candidate Evaluation',
  'Long-Term Client Partnerships',
  'Global Hiring Capability',
  'Operational Transparency',
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyTrustUs() {
  return (
    <section className="relative py-24  bg-gradient-to-b from-white to-[#F8F5F0] overflow-hidden">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)', backgroundSize: '30px 30px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── TOP: Header (Left) + Image (Right) ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left  Label + Heading + Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6"
            >
              Why Enterprises Trust Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
            >
              Building Long-Term Workforce <br />
              <span className="text-[#7A1F5C]">Partnerships Through Quality & Reliability</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[#6A6A6A]"
            >
              Chalky Infotech combines <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">industry expertise</Link>, scalable <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">recruitment strategies</Link>, and client-focused <Link href="/services/managed-services" className="text-[#7A1F5C] hover:underline font-semibold">workforce solutions</Link> to support organizations across evolving business environments.
            </motion.p>
          </motion.div>

          {/* Right  Trust Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full"
          >
            <Image
              src={trustImg}
              alt="Enterprise Trust & Partnerships"
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* ── BOTTOM: Storytelling (Left) + Trust Cards (Right) ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT  Storytelling Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p variants={fadeUp} className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-6">
              We believe successful <Link href="/services" className="text-[#7A1F5C] hover:underline font-medium">recruitment</Link> goes beyond filling positions. Our approach focuses on understanding organizational goals, workforce challenges, and long-term business growth to deliver <Link href="/services/permanent-hiring" className="text-[#7A1F5C] hover:underline font-medium">recruitment solutions</Link> that create measurable value.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-10">
              By combining <Link href="/services/on-site-recruitment" className="text-[#7A1F5C] hover:underline font-medium">consultative hiring strategies</Link> with industry insight and scalable <Link href="/services/temporary-recruitment" className="text-[#7A1F5C] hover:underline font-medium">workforce support</Link>, we help businesses build reliable, future-ready teams across multiple sectors and operational environments.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white border border-[#EDE8E0] shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#7A1F5C] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#2A2A2A]">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT  Trust Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(122, 31, 92, 0.10)' }}
                className="rounded-[28px] border border-gray-100 bg-[#F8F5F0] shadow-sm p-7 transition-all duration-400 cursor-default group"
              >
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#7A1F5C] transition-colors duration-300">
                  <card.icon className="w-5 h-5 text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-[#6A6A6A] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom Trust Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-[#E8E2D8] text-center"
        >
          <p className="text-base md:text-lg text-[#7A7A7A] font-medium max-w-2xl mx-auto leading-relaxed">
            Trusted workforce solutions designed to support{' '}
            <span className="text-[#7A1F5C] font-semibold">sustainable business growth</span>{' '}
            across diverse industries.
          </p>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0c0,0,166,120,443,57c277-63,339,26,513,26s244-83,244-83v120H0V0Z" fill="#7A1F5C" />
        </svg>
      </div>
    </section>
  );
}
