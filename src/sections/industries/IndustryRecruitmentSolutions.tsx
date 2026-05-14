'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Briefcase, Globe2, MonitorSmartphone, Building2, Settings, ArrowRight } from 'lucide-react';
import '@/styles/IndustryFlipCards.css';

const RECRUITMENT_SOLUTIONS = [
  { title: 'IT Staffing', icon: MonitorSmartphone, desc: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.' },
  { title: 'Executive Search', icon: ShieldCheck, desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.' },
  { title: 'Contract Staffing', icon: Clock, desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.' },
  { title: 'Permanent Hiring', icon: Users, desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.' },
];

const ENTERPRISE_SERVICES = [
  { title: 'Temporary Recruitment', icon: Briefcase, desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.' },
  { title: 'On-Site Recruitment', icon: Building2, desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.' },
  { title: 'Managed Services', icon: Settings, desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.' },
  { title: 'Remote Hiring', icon: Globe2, desc: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.' }
];

export default function IndustryRecruitmentSolutions() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Adaptive Models
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Industry-Tailored <span className="text-[#7A1F5C]">Hiring Solutions</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We provide a versatile suite of recruitment models designed to adapt to the unique operational cadences of different business sectors.
          </p>
        </div>

        <div className="space-y-16 solutions-grid-side p-0">
          {/* Category 1 */}
          <div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-12 text-center lg:text-left">Recruitment Solutions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16">
              {RECRUITMENT_SOLUTIONS.map((service, index) => (
                <motion.div 
                  key={index} 
                  className={`service-card-flip ${index % 2 !== 0 ? 'sm:translate-y-12' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-flip-inner">
                    <div className="card-flip-front">
                      <div className="compact-card-icon">
                        <service.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3>{service.title}</h3>
                      <div className="flip-hint">Explore</div>
                    </div>
                    <div className="card-flip-back">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <button className="compact-explore-btn">
                        Learn More <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-12 text-center lg:text-left">Enterprise Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16">
              {ENTERPRISE_SERVICES.map((service, index) => (
                <motion.div 
                  key={index} 
                  className={`service-card-flip ${index % 2 !== 0 ? 'sm:translate-y-12' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-flip-inner">
                    <div className="card-flip-front">
                      <div className="compact-card-icon">
                        <service.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3>{service.title}</h3>
                      <div className="flip-hint">Explore</div>
                    </div>
                    <div className="card-flip-back">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <button className="compact-explore-btn">
                        Learn More <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

