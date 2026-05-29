'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Briefcase, Globe2, MonitorSmartphone, Building2, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import '@/styles/IndustryFlipCards.css';

const RECRUITMENT_SOLUTIONS = [
  { title: 'IT Staffing', icon: MonitorSmartphone, desc: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.', link: '/services/it-staffing' },
  { title: 'Executive Search', icon: ShieldCheck, desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.', link: '/services/executive-search' },
  { title: 'Contract Staffing', icon: Clock, desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.', link: '/services/contract-staffing' },
  { title: 'Permanent Hiring', icon: Users, desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.', link: '/services/permanent-hiring' },
];

const ENTERPRISE_SERVICES = [
  { title: 'Temporary Recruitment', icon: Briefcase, desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.', link: '/services/temporary-recruitment' },
  { title: 'On-Site Recruitment', icon: Building2, desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.', link: '/services/on-site-recruitment' },
  { title: 'Managed Services', icon: Settings, desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.', link: '/services/managed-services' },
  { title: 'Remote Hiring', icon: Globe2, desc: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.', link: '/services/remote-hiring' }
];

const STICKY_STYLES = [
  { bg: "bg-[#E6F3FF]", text: "text-[#2563EB]", pin: "from-[#60A5FA] to-[#3B82F6]", shadow: "shadow-[#60A5FA]/30" }, // Blue
  { bg: "bg-[#FFEAF0]", text: "text-[#DB2777]", pin: "from-[#F472B6] to-[#DB2777]", shadow: "shadow-[#F472B6]/30" }, // Pink
  { bg: "bg-[#FDF6E3]", text: "text-[#D97706]", pin: "from-[#FBBF24] to-[#D97706]", shadow: "shadow-[#FBBF24]/30" }, // Yellow
  { bg: "bg-[#E8F8F0]", text: "text-[#059669]", pin: "from-[#34D399] to-[#059669]", shadow: "shadow-[#34D399]/30" }, // Green
  { bg: "bg-[#F3E8FF]", text: "text-[#7E22CE]", pin: "from-[#A855F7] to-[#7E22CE]", shadow: "shadow-[#A855F7]/30" }, // Purple
];

const ROTATIONS = [
  "rotate-[-2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1.5deg]",
  "rotate-[2deg]",
];

export default function IndustryRecruitmentSolutions() {
  return (
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Adaptive Models
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Industry-Tailored <span className="text-[#7A1F5C]">Hiring Solutions</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We provide a versatile suite of <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">recruitment models</Link> designed to adapt to the unique operational cadences of different business sectors, supporting everything from local teams to <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">global enterprise headquarters</Link>.
          </p>
        </div>

        <div className="relative pb-16">
          {/* Decorative Dashed Path (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 z-0 pointer-events-none opacity-50">
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
              <path 
                d="M 0,200 Q 200,0 400,200 T 800,200 T 1200,200" 
                fill="none" 
                stroke="#D1D5DB" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
              />
            </svg>
          </div>

          <div className="space-y-24 relative z-10">
            {/* Category 1 */}
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-12 text-center lg:text-left">Recruitment Solutions</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {RECRUITMENT_SOLUTIONS.map((service, index) => {
                  const style = STICKY_STYLES[index % STICKY_STYLES.length];
                  const rotation = ROTATIONS[index % ROTATIONS.length];
                  return (
                  <motion.div 
                    key={index} 
                    className={`${rotation} ${index % 2 !== 0 ? 'sm:translate-y-8' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={service.link} className={`block group w-full h-[260px] p-6 rounded-2xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 relative hover:-translate-y-1 hover:z-20 ${style.bg}`}>
                      
                      {/* 3D Pin Container */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                        {/* Pin Head (Sphere) */}
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${style.pin} shadow-md ${style.shadow} border border-white/20 relative z-10`}>
                          <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]"></div>
                        </div>
                        {/* Pin shadow */}
                        <div className="w-1.5 h-2.5 bg-black/15 blur-[1px] -mt-0.5 rounded-b-full"></div>
                      </div>

                      <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${style.text}`}>
                         0{index + 1} MODULE
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-black transition-colors">{service.title}</h3>
                      
                      <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 line-clamp-4">{service.desc}</p>
                    </Link>
                  </motion.div>
                )})}
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-12 text-center lg:text-left">Enterprise Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {ENTERPRISE_SERVICES.map((service, index) => {
                  const style = STICKY_STYLES[(index + 4) % STICKY_STYLES.length];
                  const rotation = ROTATIONS[(index + 2) % ROTATIONS.length];
                  return (
                  <motion.div 
                    key={index} 
                    className={`${rotation} ${index % 2 !== 0 ? 'sm:translate-y-8' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={service.link} className={`block group w-full h-[260px] p-6 rounded-2xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 relative hover:-translate-y-1 hover:z-20 ${style.bg}`}>
                      
                      {/* 3D Pin Container */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                        {/* Pin Head (Sphere) */}
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${style.pin} shadow-md ${style.shadow} border border-white/20 relative z-10`}>
                          <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]"></div>
                        </div>
                        {/* Pin shadow */}
                        <div className="w-1.5 h-2.5 bg-black/15 blur-[1px] -mt-0.5 rounded-b-full"></div>
                      </div>

                      <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${style.text}`}>
                         0{index + 5} MODULE
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-black transition-colors">{service.title}</h3>
                      
                      <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 line-clamp-4">{service.desc}</p>
                    </Link>
                  </motion.div>
                )})}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Wave Divider to Cream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}

