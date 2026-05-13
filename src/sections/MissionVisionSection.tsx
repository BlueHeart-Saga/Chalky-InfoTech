'use client';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#4A1238] via-[#7A1F5C] to-[#3A0D28] relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            <span className="text-[#D14D72]">Driven</span> by Mission,
            <span className="block text-[#7A1F5C]">
              Guided by Vision
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#D14D72] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white/70 leading-relaxed text-base mb-6">
              To be the most trusted recruitment partner for technology and digital organisations worldwide — delivering exceptional talent with speed, precision and integrity.
            </p>
            <div className="space-y-3">
              {['Human-first recruitment approach', 'Speed without compromise on quality', 'Transparent & ethical process'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C2185B]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#C2185B]" />
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1F5C] to-[#4A1238] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-white/70 leading-relaxed text-base mb-6">
              A world where every organisation thrives through the right talent, and every professional finds a role where they can grow, contribute and lead.
            </p>
            <div className="space-y-3">
              {['Pioneering global talent ecosystems', 'Elevating recruitment to strategic consulting', 'Building lifelong client partnerships'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7A1F5C]/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {[
            { icon: Heart, title: 'Integrity', desc: 'Honest, transparent and ethical in every engagement.' },
            { icon: Lightbulb, title: 'Innovation', desc: 'Leveraging technology to transform talent acquisition.' },
            { icon: Target, title: 'Precision', desc: 'Data-driven matching for the perfect candidate fit.' },
            { icon: Eye, title: 'Clarity', desc: 'Clear communication at every step of the process.' },
          ].map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <v.icon size={24} className="text-[#C2185B] mx-auto mb-3" />
              <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
