'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  RotateCcw, 
  Search, 
  DollarSign, 
  Briefcase, 
  ShieldCheck, 
  BarChart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const REASONS = [
  { 
    image: "/whychoose/delivery.png",
    title: "Rapid Requirement Delivery", 
    desc: "Quick turnaround hiring support for urgent workforce and project requirements across multiple industries." 
  },
  { 
    image: "/whychoose/support.png",
    title: "Dedicated Recruitment Support", 
    desc: "24/7 coordination and communication support throughout the recruitment lifecycle whenever required." 
  },
  { 
    image: "/whychoose/replacement.png",
    title: "Replacement Assurance", 
    desc: "Fast replacement support for unexpected candidate exits based on professional replacement terms." 
  },
  { 
    image: "/whychoose/network.png",
    title: "Specialized Talent Network", 
    desc: "Access to pre-screened professionals across cloud, DevOps, AI, software and enterprise domains." 
  },
  { 
    image: "/whychoose/models.png",
    title: "Flexible Hiring Models", 
    desc: "Affordable recruitment solutions tailored for startups, SMBs and enterprise organizations." 
  },
  { 
    image: "/whychoose/process.png",
    title: "End-To-End Hiring Process", 
    desc: "Complete recruitment management from sourcing and screening to onboarding support professionally." 
  },
  { 
    image: "/whychoose/validation.png",
    title: "Quality Candidate Validation", 
    desc: "Structured evaluation processes ensuring strong technical and cultural alignment with client goals." 
  },
  { 
    image: "/whychoose/scalable.png",
    title: "Scalable Workforce Solutions", 
    desc: "Workforce strategies designed to support business expansion and rapid operational scaling." 
  }
];

const SHORT_ADVANTAGES = [
  "Fast Candidate Delivery",
  "24/7 Recruitment Support",
  "Free Candidate Replacement",
  "Cost-Effective Hiring Models",
  "High-Demand Talent Expertise",
  "End-To-End Workforce Management",
  "Industry-Specific Recruitment",
  "Scalable Global Hiring Solutions"
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F5F0E8] text-[#1A1A1A] relative overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Heading Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-black uppercase tracking-widest mb-6">
              Why Choose Chalky Infotech
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-[1.1]">
              Reliable <span className="text-[#7A1F5C]">Recruitment Solutions</span> <br/>
              Built For Modern Workforce Needs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Chalky Infotech delivers fast, reliable and scalable recruitment solutions helping organizations hire exceptional talent with complete workforce support, industry expertise and cost-effective hiring strategies.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {SHORT_ADVANTAGES.map((adv, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#C2185B]" />
                  <span className="text-[#1A1A1A] font-medium text-sm">{adv}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
             <div className="flex flex-col items-start">
                {/* Featured Image */}
                <div className="w-full mb-8 max-w-lg mx-auto lg:mx-0">
                   <Image 
                     src="/about/whychoose.png" 
                     alt="Why Choose Chalky Infotech" 
                     width={800}
                     height={600}
                     className="w-full h-auto"
                   />
                </div>
                
                {/* Content below image */}
                <div className="text-center lg:text-left">
                   <h3 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Build High-Performance Teams</h3>
                   <p className="text-gray-600 mb-8 leading-relaxed text-sm max-w-lg">
                     Partner with a recruitment team focused on delivering exceptional talent solutions, rapid hiring support and scalable workforce strategies for modern businesses.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/jobs" className="bg-[#7A1F5C] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#C2185B] transition-all text-center">
                        Hire Talent
                      </Link>
                      <Link href="/contact" className="border border-gray-200 text-[#1A1A1A] px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all text-center">
                        Contact Our Team
                      </Link>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* 8 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-[320px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area - Top */}
              <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                <Image 
                  src={reason.image} 
                  alt={reason.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Content Area - Bottom (default), Full height (hover) */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{reason.title}</h4>
                
                {/* Hidden content that fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                   <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{reason.desc}</p>
                   <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                      Explore Advantage <ArrowRight size={14} />
                   </span>
                </div>

                {/* Bottom label that fades out on hover */}
                <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Chalky InfoTech</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Drops Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>
    </section>
  );
}
