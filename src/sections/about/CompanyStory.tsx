'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Story1 from '@/assets/about/story/1.png';
import Story2 from '@/assets/about/story/2.png';
import Story3 from '@/assets/about/story/3.png';
import Story4 from '@/assets/about/story/4.png';
import Story5 from '@/assets/about/story/5.png';
import Story6 from '@/assets/about/story/6.png';
import Story7 from '@/assets/about/story/7.png';
import Story8 from '@/assets/about/story/8.png';
import Story9 from '@/assets/about/story/9.png';
import Story10 from '@/assets/about/story/10.png';
import Story11 from '@/assets/about/story/11.png';
import Story12 from '@/assets/about/story/12.png';
import Story13 from '@/assets/about/story/13.png';
import Story14 from '@/assets/about/story/14.png';
import Story15 from '@/assets/about/story/15.png';

const storyBlocks = [
  {
    title: 'Our Foundation',
    desc: <>Founded with a vision to modernise <Link href="/services" className="text-[#7A1F5C] hover:underline font-medium transition-all">technology recruitment</Link>, Chalky Infotech was built to bridge the gap between growing organisations and exceptional digital talent. We combine market intelligence, recruitment expertise, and <Link href="/services/managed-services" className="text-[#7A1F5C] hover:underline font-medium transition-all">workforce strategy</Link> to help businesses build scalable, future-ready teams.</>
  },
  {
    title: 'What Makes Us Different',
    desc: <>Unlike traditional staffing providers, we take a consultative and insight-driven approach to recruitment. By understanding each client’s technology landscape, culture, and growth objectives, we deliver <Link href="/services/permanent-hiring" className="text-[#7A1F5C] hover:underline font-medium transition-all">talent solutions</Link> aligned with long-term business success.</>
  },
  {
    title: 'Global Positioning',
    desc: <>Operating across India and the UK, Chalky Infotech combines <Link href="/contact" className="text-[#7A1F5C] hover:underline font-medium transition-all">global hiring capability</Link> with regional market expertise. Our approach enables organisations to access high-quality <Link href="/industries/it-technology" className="text-[#7A1F5C] hover:underline font-medium transition-all">technology professionals</Link> with the agility, precision, and scalability required in modern digital environments.</>
  },
  {
    title: 'Human + Enterprise Touch',
    desc: <>Beyond recruitment, we focus on building meaningful relationships with both clients and candidates. We believe successful <Link href="/services/executive-search" className="text-[#7A1F5C] hover:underline font-medium transition-all">executive hiring</Link> is driven not only by technical capability, but also by culture alignment, collaboration, and long-term growth potential.</>
  }
];

export default function CompanyStory() {
  return (
    <section className="relative pt-0 md:pb-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Story Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.3 }}
          >
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
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.3 }}
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

          {/* RIGHT SIDE - Premium Staggered Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "100px" }} 
            transition={{ duration: 0.5 }}
            className="relative w-full z-10 py-12"
          >
            <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
              
              {/* LEFT COLUMN */}
              <div className="space-y-16 md:space-y-24 relative flex flex-col items-center">
                {/* Decorative floating dots */}
                <div className="absolute -left-6 top-1/4 w-8 h-8 rounded-full bg-[#7A1F5C]/80 z-0 pointer-events-none animate-pulse" />
                <div className="absolute -right-4 top-2/3 w-6 h-6 rounded-full bg-[#7A1F5C]/40 z-0 pointer-events-none" />
                <div className="absolute left-1/3 bottom-12 w-5 h-5 rounded-full bg-[#7A1F5C]/60 z-0 pointer-events-none" />

                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl">
                    <div className="absolute -top-3.5 -left-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story1} 
                        alt="Collaborative Space" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Co-Creation</span>
                    <Link href="/about" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Collaborative Space</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl">
                    <div className="absolute -top-3.5 -left-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story3} 
                        alt="Strategic Alignment" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Consultation</span>
                    <Link href="/services" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Strategic Alignment</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl">
                    <div className="absolute -top-3.5 -left-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tl-[40px] md:rounded-tl-[50px] rounded-br-[40px] md:rounded-br-[50px] rounded-tr-2xl rounded-bl-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story6} 
                        alt="Visionary Roadmaps" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Planning</span>
                    <Link href="/services/managed-services" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Visionary Roadmaps</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN (Staggered Downwards) */}
              <div className="space-y-16 md:space-y-24 pt-16 md:pt-24 relative flex flex-col items-center">
                {/* Decorative floating dots */}
                <div className="absolute -right-6 top-10 w-7 h-7 rounded-full bg-[#7A1F5C]/80 z-0 pointer-events-none animate-pulse" />
                <div className="absolute -left-8 top-1/2 w-5 h-5 rounded-full bg-[#7A1F5C]/50 z-0 pointer-events-none" />
                <div className="absolute right-1/3 bottom-24 w-6 h-6 rounded-full bg-[#7A1F5C]/30 z-0 pointer-events-none" />

                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl">
                    <div className="absolute -top-3.5 -right-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story2} 
                        alt="Sprint Executions" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Agile Delivery</span>
                    <Link href="/services/permanent-hiring" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Sprint Executions</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl">
                    <div className="absolute -top-3.5 -right-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story5} 
                        alt="Workforce Intelligence" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Data Insights</span>
                    <Link href="/services/executive-search" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Workforce Intelligence</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="relative aspect-square w-full max-w-[160px] xs:max-w-[200px] md:max-w-[240px] bg-[#7A1F5C]/10 rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl">
                    <div className="absolute -top-3.5 -right-3.5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7A1F5C] -z-10 opacity-90" />
                    <div className="relative w-full h-full overflow-hidden rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl border-2 border-white shadow-md">
                      <Image 
                        src={Story7} 
                        alt="Enterprise Growth" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] font-extrabold">Solutions</span>
                    <Link href="/contact" className="flex items-center gap-1 mt-1 text-[#7A1F5C] font-bold group justify-center">
                      <span className="text-xs md:text-sm group-hover:underline">Enterprise Growth</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
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
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,0Z" opacity=".25" fill="#ffffffff"></path>
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
