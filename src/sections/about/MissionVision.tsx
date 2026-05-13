'use client';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white rounded-3xl p-10 lg:p-14 border border-[#E5E7EB] shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#7A1F5C]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center mb-8 shadow-md">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">Our Mission</h3>
            <p className="text-[#8A8A8A] text-lg leading-relaxed">
              Empowering organizations with future-ready technology talent and scalable workforce solutions that accelerate digital transformation and drive measurable business impact.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-gradient-to-br from-[#1A0A14] to-[#4A1238] rounded-3xl p-10 lg:p-14 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#C2185B]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To become the globally trusted recruitment and workforce transformation partner for modern enterprises, setting the gold standard for technical talent acquisition.
            </p>
          </motion.div>

        </div>
      </div>
    
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,118.9,158.8,111.9,232.48,87.6,263.3,77.5,292.8,66.7,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
