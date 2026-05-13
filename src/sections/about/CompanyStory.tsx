'use client';
import { motion } from 'framer-motion';

export default function CompanyStory() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-3xl bg-[#F8F5F0] overflow-hidden relative border border-[#E5E7EB]">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1F5C]/5 to-transparent" />
               <div className="absolute inset-8 border-2 border-dashed border-[#7A1F5C]/15 rounded-2xl flex items-center justify-center">
                 <span className="text-[#7A1F5C]/20 font-extrabold text-6xl tracking-tighter">Est. 2009</span>
               </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-[#E5E7EB] max-w-[240px]">
              <p className="text-[#7A1F5C] font-extrabold text-5xl mb-2">10K+</p>
              <p className="text-[#4B5563] font-medium leading-tight">Successful technical placements worldwide.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Company Story</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#111827] mb-8 leading-tight tracking-tight">
              Scaling Growth Through <br/> <span className="text-[#7A1F5C]">Exceptional Talent</span>
            </h2>
            
            <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
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
    </section>
  );
}
