'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FileText, Users, Clock, Target, CheckCircle2, ArrowRight } from 'lucide-react';

import AgileStaffingImg from '@/assets/homepage/Services/Agile-Staffing.png';
import CoreTeamsImg from '@/assets/homepage/Services/Core-Teams.png';
import RapidHiringImg from '@/assets/homepage/Services/Rapid-Hiring.png';
import EmbeddedSolutionsImg from '@/assets/homepage/Services/Embedded-Solutions.png';

const comprehensiveServices = [
  {
    title: "Contract Staffing",
    lead: "Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.",
    link: "/services/contract-staffing",
    category: "Agile Staffing",
    image: AgileStaffingImg,
  },
  {
    title: "Permanent Hiring",
    lead: "Strategic permanent placement services to build your long-term success with high-retention talent.",
    link: "/services/permanent-hiring",
    category: "Core Teams",
    image: CoreTeamsImg,
  },
  {
    title: "Temporary Recruitment",
    lead: "Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.",
    link: "/services/temporary-recruitment",
    category: "Rapid Hiring",
    image: RapidHiringImg,
  },
  {
    title: "On-Site Recruitment",
    lead: "Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.",
    link: "/services/on-site-recruitment",
    category: "Embedded Solutions",
    image: EmbeddedSolutionsImg,
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
                <Link href={service.link} className="block w-full h-full">
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
                       <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-sm mt-auto group-hover:gap-3 transition-all">
                          Explore Service <ArrowRight size={16} />
                       </span>
                    </div>

                    {/* Bottom label that fades out on hover */}
                    <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-sm group-hover:opacity-0 transition-opacity duration-300 font-medium">Service Area</span>
                  </div>
                </Link>
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
                We offer flexible and scalable <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline transition-all">IT recruitment services</Link> tailored to your business needs. Whether you need <Link href="/services/temporary-recruitment" className="text-[#7A1F5C] font-semibold hover:underline transition-all">short-term specialists</Link>, <Link href="/services/permanent-hiring" className="text-[#7A1F5C] font-semibold hover:underline transition-all">long-term employees</Link>, or dedicated hiring support, our solutions are designed to deliver the right talent with speed and precision.
              </p>
              
              <div className="flex flex-col gap-5">
                {[
                  "Pre-Vetted IT & Software Engineering Talent",
                  "Rapid Candidate Sourcing & Deployment",
                  "Cost-Effective Managed Workforce Solutions",
                  "Industry-Specific Technology Recruitment",
                  "End-to-End Global Hiring Support"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/50 p-3.5 rounded-2xl border border-white/60">
                    <CheckCircle2 className="text-[#C2185B] w-5 h-5 flex-shrink-0" />
                    <span className="text-[#1A1A1A] font-semibold text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/services" className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                  View All Services <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
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
