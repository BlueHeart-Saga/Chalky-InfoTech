'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ShieldCheck, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

const storyBlocks = [
  {
    title: 'Your Foundation',
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
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Story Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 leading-[1.15] tracking-tight">
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

          {/* RIGHT SIDE - Floating Metrics Cards */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-full min-h-[600px] lg:min-h-full">
             <div className="absolute inset-0 bg-[#F5F0E8] rounded-3xl border border-[#E5E7EB] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7A1F5C_1.5px,transparent_1px)] bg-[size:24px_24px] opacity-[0.05]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2185B]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7A1F5C]/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-center">
                  <div className="grid gap-6">
                    
                    {/* Metric 1 */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-md border border-[#E5E7EB] group">
                      <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center group-hover:bg-[#7A1F5C] transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-[#7A1F5C] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">15+ Years</p>
                        <p className="text-[#8A8A8A] font-medium text-sm uppercase tracking-wide">Industry Experience</p>
                      </div>
                    </motion.div>

                    {/* Metric 2 */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-md border border-[#E5E7EB] group ml-0 md:ml-12">
                      <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center group-hover:bg-[#C2185B] transition-colors duration-300">
                        <Users className="w-6 h-6 text-[#C2185B] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">500+</p>
                        <p className="text-[#8A8A8A] font-medium text-sm uppercase tracking-wide">Global Enterprise Clients</p>
                      </div>
                    </motion.div>

                    {/* Metric 3 */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-md border border-[#E5E7EB] group">
                      <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center group-hover:bg-[#4A1238] transition-colors duration-300">
                        <Globe className="w-6 h-6 text-[#4A1238] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">UK & India</p>
                        <p className="text-[#8A8A8A] font-medium text-sm uppercase tracking-wide">Dual-Shore Operations</p>
                      </div>
                    </motion.div>

                    {/* Metric 4 */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-md border border-[#E5E7EB] group ml-0 md:ml-12">
                      <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center group-hover:bg-[#7A1F5C] transition-colors duration-300">
                        <ShieldCheck className="w-6 h-6 text-[#7A1F5C] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">100%</p>
                        <p className="text-[#8A8A8A] font-medium text-sm uppercase tracking-wide">Technology Focused Hiring</p>
                      </div>
                    </motion.div>

                  </div>
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
