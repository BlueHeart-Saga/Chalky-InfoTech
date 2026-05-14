'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ShieldCheck, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

const storyBlocks = [
  {
    title: 'Our Foundation',
    desc: 'Founded with a vision to modernise technology recruitment, Chalky Infotech was built to bridge the gap between growing organisations and exceptional digital talent. We combine market intelligence, recruitment expertise, and workforce strategy to help businesses build scalable, future-ready teams.'
  },
  {
    title: 'What Makes Us Different',
    desc: 'Unlike traditional staffing providers, we take a consultative and insight-driven approach to recruitment. By understanding each client’s technology landscape, culture, and growth objectives, we deliver talent solutions aligned with long-term business success.'
  },
  {
    title: 'Global Positioning',
    desc: 'Operating across India and the UK, Chalky Infotech combines global hiring capability with regional market expertise. Our approach enables organisations to access high-quality technology professionals with the agility, precision, and scalability required in modern digital environments.'
  },
  {
    title: 'Human + Enterprise Touch',
    desc: 'Beyond recruitment, we focus on building meaningful relationships with both clients and candidates. We believe successful hiring is driven not only by technical capability, but also by culture alignment, collaboration, and long-term growth potential.'
  }
];

export default function CompanyStory() {
  return (
    <section className="relative pt-20 pb-32 md:pt-28 md:pb-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Story Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-[1.1] tracking-tight">
              Connecting Exceptional Talent <br/>
              <span className="text-[#7A1F5C]">With High-Growth Organisations</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10 font-medium">
              Chalky Infotech is a specialist technology recruitment and workforce solutions partner helping organisations scale through strategic hiring, digital talent acquisition, and high-quality workforce support across India, the UK, and global markets.
            </p>
            
            <div className="space-y-8 mb-10">
              {storyBlocks.map((block, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-6 border-l-2 border-[#E5E7EB] hover:border-[#7A1F5C] transition-colors duration-300"
                >
                  <h3 className="font-bold text-[#1A1A1A] text-xl mb-2">{block.title}</h3>
                  <p className="text-[#8A8A8A] leading-relaxed">{block.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/services" className="inline-flex items-center gap-2 text-[#7A1F5C] font-bold hover:gap-3 transition-all duration-300 group">
              Explore Our Strategic Solutions <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* RIGHT SIDE - Image Collage */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-full flex items-center">
             <div className="grid grid-cols-2 gap-4 w-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 mt-12">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Collaborative Strategy <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Business discussion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Consultative Approach <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" alt="Strategy meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Leadership Alignment <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Modern office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Modern Workspaces <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-4 mb-12">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" alt="Tech workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Agile Delivery <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80" alt="Global team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Borderless Teams <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" alt="Coding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Technical Excellence <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" alt="Analytics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A0A14]/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                      <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">Data-Driven Insights <ArrowUpRight className="w-4 h-4 text-[#C2185B]" /></p>
                    </div>
                  </motion.div>
                </div>
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
