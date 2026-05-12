'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Users, TrendingUp, Shield, HeartHandshake, Star, BadgeCheck } from 'lucide-react';

const reasons = [
  { icon: BadgeCheck, title: '15+ Years of Expertise', desc: 'Deep domain knowledge across technology, finance, healthcare and more.' },
  { icon: Users, title: 'Expert Consultants', desc: 'Specialist consultants who understand your industry inside out.' },
  { icon: Clock, title: 'Average 18-Day Hire', desc: 'Fastest time-to-hire without compromising on quality or culture fit.' },
  { icon: TrendingUp, title: 'Success-Led Model', desc: 'Performance-based engagement — we succeed when you succeed.' },
  { icon: Shield, title: 'Compliance Ready', desc: 'Fully GDPR, IR35 and Right to Work compliant recruitment processes.' },
  { icon: HeartHandshake, title: 'Long-term Partnerships', desc: '82% of clients return within 6 months — built on trust and results.' },
  { icon: Star, title: '98% Satisfaction Rate', desc: 'Consistently rated excellent by candidates and clients alike.' },
  { icon: CheckCircle2, title: 'Global Talent Network', desc: 'Access to 250,000+ pre-screened professionals worldwide.' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Why Chalky Infotech
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight mb-4">
            The Difference That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">
              Drives Results
            </span>
          </h2>
          <p className="text-[#8A8A8A] max-w-xl mx-auto text-base leading-relaxed">
            From 500+ happy clients to 10,000+ successful placements — here is why organisations choose us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-[#EFE7DD] hover:border-[#7A1F5C]/30 hover:shadow-xl hover:shadow-[#7A1F5C]/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1F5C]/10 to-[#C2185B]/10 flex items-center justify-center mb-4 group-hover:from-[#7A1F5C] group-hover:to-[#C2185B] transition-all duration-300">
                <r.icon size={22} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">{r.title}</h3>
              <p className="text-[#8A8A8A] text-xs leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
