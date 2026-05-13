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
    
      {/* Unique Wave Divider: Sharp Peaks */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,59.33c51.78,6.37,103.59-15.34,154.51-35.74,51.22-20.51,94.73-37.55,138.58-41.86,70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
