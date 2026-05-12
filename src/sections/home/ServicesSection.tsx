'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FileText, Users, Clock, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const comprehensiveServices = [
  {
    title: "Contract Recruitment",
    lead: "Access pre-vetted IT talent for short-term projects and urgent requirements with our flexible contract staffing.",
    link: "/services/contract-recruitment",
    category: "Agile Staffing",
    image: "/services/contract.png",
  },
  {
    title: "Permanent Recruitment",
    lead: "Find high-quality candidates who align with your technical needs and company culture for long-term success.",
    link: "/services/permanent-recruitment",
    category: "Core Teams",
    image: "/services/permanent.png",
  },
  {
    title: "Temporary Recruitment",
    lead: "Quick and efficient staffing solutions for short-term projects, seasonal peaks, and interim gaps.",
    link: "/services/temporary-recruitment",
    category: "Rapid Hiring",
    image: "/services/temporary.png",
  },
  {
    title: "On-Site Recruitment",
    lead: "Dedicated recruiters placed within your team to streamline hiring and improve efficiency for high-volume needs.",
    link: "/services/on-site-recruitment",
    category: "Embedded Solutions",
    image: "/services/onsite.png",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
          
          {/* Left Side: Image Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {comprehensiveServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-[360px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image Area - Top */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>

                {/* Content Area - Bottom (default), Full height (hover) */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                  <span className="text-[#7A1F5C] text-sm font-semibold mb-2">{service.category}</span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#7A1F5C] transition-colors">{service.title}</h3>
                  
                  {/* Hidden content that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                     <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">{service.lead}</p>
                     <Link href={service.link} className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-sm hover:gap-3 transition-all mt-auto">
                        Read the case study <ArrowRight size={16} />
                     </Link>
                  </div>

                  {/* Bottom label that fades out on hover */}
                  <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-sm group-hover:opacity-0 transition-opacity duration-300 font-medium">Service Area</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Content Side */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] leading-[1.1] mb-6">
                Comprehensive IT <br/>
                <span className="text-[#7A1F5C]">Recruitment Services</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                We offer flexible and scalable IT recruitment services tailored to your business needs. Whether you need short-term specialists, long-term employees, or dedicated hiring support, our solutions are designed to deliver the right talent with speed and precision.
              </p>
              
              <div className="flex flex-col gap-5">
                {[
                  "Customized Strategies",
                  "Vetted Tech Talent",
                  "Rapid Deployment"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/50 p-3.5 rounded-2xl border border-white/60">
                    <CheckCircle2 className="text-[#C2185B] w-5 h-5 flex-shrink-0" />
                    <span className="text-[#1A1A1A] font-semibold text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Book Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L0,0 C200,50 400,100 600,100 C800,100 1000,50 1200,0 L1200,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
