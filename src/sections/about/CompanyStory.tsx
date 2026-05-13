'use client';
import { motion } from 'framer-motion';

export default function CompanyStory() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-3xl bg-[#F5F0E8] overflow-hidden relative border border-[#E5E7EB]">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1F5C]/5 to-transparent" />
               <div className="absolute inset-8 border-2 border-dashed border-[#7A1F5C]/15 rounded-2xl flex items-center justify-center">
                 <span className="text-[#7A1F5C]/20 font-extrabold text-6xl tracking-tighter">Est. 2009</span>
               </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-[#E5E7EB] max-w-[240px]">
              <p className="text-[#7A1F5C] font-extrabold text-5xl mb-2">10K+</p>
              <p className="text-[#8A8A8A] font-medium leading-tight">Successful technical placements worldwide.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Company Story</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
              Scaling Growth Through <br/> <span className="text-[#7A1F5C]">Exceptional Talent</span>
            </h2>
            
            <div className="space-y-6 text-[#8A8A8A] text-lg leading-relaxed">
              <p>
                Founded on the principle that transformative technology requires transformative talent, Chalky Infotech has evolved into a premier IT recruitment company and workforce solutions partner.
              </p>
              <p>
                We specialize in navigating complex hiring landscapes, from rapid startup scaling to enterprise digital transformations. Our deep technology hiring expertise allows us to seamlessly align exceptional professionals with ambitious business goals.
              </p>
              <p>
                With a robust global support capability and operations bridging the UK and India, our business growth mission is singular: to be the catalyst for your organizational success.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,118.9,158.8,111.9,232.48,87.6,263.3,77.5,292.8,66.7,321.39,56.44Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
