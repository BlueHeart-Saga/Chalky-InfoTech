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
    
      {/* Unique Wave Divider: Organic Soft Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,0Z" opacity=".25" fill="#F5F0E8"></path>
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
