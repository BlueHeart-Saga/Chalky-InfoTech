'use client';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white rounded-3xl p-10 lg:p-14 border border-[#E5E7EB] shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#7A1F5C]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center mb-8 shadow-md">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-[#111827] mb-4">Our Mission</h3>
            <p className="text-[#4B5563] text-lg leading-relaxed">
              Empowering organizations with future-ready technology talent and scalable workforce solutions that accelerate digital transformation and drive measurable business impact.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-gradient-to-br from-[#1A0A14] to-[#4A1238] rounded-3xl p-10 lg:p-14 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#C2185B]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">Our Vision</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To become the globally trusted recruitment and workforce transformation partner for modern enterprises, setting the gold standard for technical talent acquisition.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
