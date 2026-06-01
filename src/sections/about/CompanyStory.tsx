'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import WhoWeAre1 from '@/assets/about/Who-we-are/1.png';
import WhoWeAre2 from '@/assets/about/Who-we-are/2.png';
import WhoWeAre3 from '@/assets/about/Who-we-are/3.png';
import WhoWeAre4 from '@/assets/about/Who-we-are/4.png';
import WhoWeAre5 from '@/assets/about/Who-we-are/5.png';
import WhoWeAre6 from '@/assets/about/Who-we-are/6.png';
import WhoWeAre7 from '@/assets/about/Who-we-are/7.png';
import WhoWeAre8 from '@/assets/about/Who-we-are/8.png';

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

          {/* RIGHT SIDE - Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "100px" }} 
            transition={{ duration: 0.4 }}
            className="relative h-full flex items-center justify-center py-6 z-10"
          >
            <div className="relative w-full aspect-[4/8] max-w-[500px] mx-auto lg:max-w-none">
              {[
                // Top side small images
                { src: WhoWeAre8, className: "absolute top-[0%] left-[24%] w-[24%] aspect-square z-10" },
                { src: WhoWeAre4, className: "absolute top-[1%] right-[24%] w-[22%] aspect-square z-10" },

                // Top section main images
                { src: WhoWeAre1, className: "absolute top-[6%] right-[5%] w-[36%] aspect-square z-10" },
                { src: WhoWeAre2, className: "absolute top-[8%] left-[5%] w-[32%] aspect-square z-10" },
                { src: WhoWeAre3, className: "absolute top-[18%] left-[25%] w-[42%] aspect-square z-20" },
                
                // Middle section
                { src: WhoWeAre5, className: "absolute top-[35%] left-[5%] w-[34%] aspect-square z-10" },
                { src: WhoWeAre7, className: "absolute top-[38%] right-[5%] w-[36%] aspect-square z-10" },
                { src: WhoWeAre6, className: "absolute top-[48%] left-[28%] w-[40%] aspect-square z-20" },
                
                // Bottom section main images
                { src: WhoWeAre1, className: "absolute top-[65%] left-[2%] w-[34%] aspect-square z-10" },
                { src: WhoWeAre3, className: "absolute top-[68%] right-[6%] w-[32%] aspect-square z-10" },
                { src: WhoWeAre4, className: "absolute top-[78%] left-[26%] w-[38%] aspect-square z-20" },

                // Bottom side small images
                { src: WhoWeAre2, className: "absolute top-[88%] left-[12%] w-[26%] aspect-square z-10" },
                { src: WhoWeAre5, className: "absolute top-[90%] right-[16%] w-[24%] aspect-square z-10" }
              ].map((img, idx) => (
                <motion.div 
                  key={idx}
                  className={`${img.className} rotate-45 overflow-hidden rounded-[20px] md:rounded-[28px] border-[3px] border-white shadow-lg hover:shadow-2xl hover:scale-105 hover:z-30 transition-all duration-500 ease-out group cursor-pointer`}
                >
                  <div className="relative w-full h-full -rotate-45 scale-[1.45] transition-transform duration-700 group-hover:scale-[1.55]">
                    <Image 
                      src={img.src} 
                      alt="Chalky Team Workspace" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                  </div>
                </motion.div>
              ))}
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
