'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Their quick hiring process helped us scale our engineering team rapidly during critical project delivery phases.",
    author: "James Wilson",
    role: "Operations Manager",
    company: "CloudTech Systems",
    rating: 5,
    initials: "JW",
    color: "bg-blue-100 text-blue-600"
  },
  {
    text: "Professional communication, quality candidate screening and strong technical understanding throughout the recruitment cycle.",
    author: "Sarah Jenkins",
    role: "HR Director",
    company: "FinCore Solutions",
    rating: 5,
    initials: "SJ",
    color: "bg-purple-100 text-purple-600"
  },
  {
    text: "Chalky Infotech provided reliable workforce support and excellent replacement coordination whenever required.",
    author: "Michael Chen",
    role: "Delivery Lead",
    company: "Digital Enterprise Group",
    rating: 5,
    initials: "MC",
    color: "bg-green-100 text-green-600"
  },
  {
    text: "The quality of candidates for our AI roles was unmatched. They truly understand the niche tech landscape.",
    author: "Emma Thompson",
    role: "Talent Acquisition",
    company: "Nexus AI",
    rating: 5,
    initials: "ET",
    color: "bg-orange-100 text-orange-600"
  },
  {
    text: "Efficient, transparent, and results-driven. They are our go-to partner for all critical engineering hires.",
    author: "David Miller",
    role: "VP Engineering",
    company: "Skyline Software",
    rating: 4,
    initials: "DM",
    color: "bg-red-100 text-red-600"
  },
  {
    text: "Found us a Lead DevOps Architect in record time. Their network within the UK tech scene is impressive.",
    author: "Robert Taylor",
    role: "CTO",
    company: "Innovate Global",
    rating: 5,
    initials: "RT",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    text: "Great support throughout the onboarding process. They don't just find talent; they ensure a great start.",
    author: "Lisa Anderson",
    role: "Head of People",
    company: "GreenScale Ltd",
    rating: 5,
    initials: "LA",
    color: "bg-pink-100 text-pink-600"
  },
  {
    text: "The most responsive recruitment agency we've worked with. They actually listen to our technical requirements.",
    author: "Chris Evans",
    role: "Tech Lead",
    company: "Matrix Solutions",
    rating: 5,
    initials: "CE",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    text: "Helped us navigate a complex hiring spree for our Fintech project. Highly recommend their strategic approach.",
    author: "Patricia Moore",
    role: "Project Director",
    company: "PayFlow Systems",
    rating: 5,
    initials: "PM",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    text: "Excellent screening process. Every candidate presented was a potential hire, saving us hours of interviews.",
    author: "Kevin White",
    role: "Engineering Manager",
    company: "ByteForce",
    rating: 5,
    initials: "KW",
    color: "bg-teal-100 text-teal-600"
  },
  {
    text: "Chalky Infotech is a reliable extension of our HR team. Their dedication to quality is evident in every placement.",
    author: "Jessica Brown",
    role: "HR Business Partner",
    company: "Core Logics",
    rating: 5,
    initials: "JB",
    color: "bg-fuchsia-100 text-fuchsia-600"
  },
  {
    text: "They managed our entire scale-up phase seamlessly. We couldn't have hit our milestones without them.",
    author: "Andrew Clark",
    role: "COO",
    company: "NextGen Mobility",
    rating: 5,
    initials: "AC",
    color: "bg-rose-100 text-rose-600"
  },
  {
    text: "Remarkable understanding of the cybersecurity space. The candidates they provided were top-tier.",
    author: "William Foster",
    role: "CISO",
    company: "SecureNet Systems",
    rating: 5,
    initials: "WF",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    text: "Chalky Infotech delivered a high-performing engineering team for our latest SaaS product launch.",
    author: "Sophie Miller",
    role: "Product Owner",
    company: "SaaSify",
    rating: 5,
    initials: "SM",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    text: "Their executive search service is exceptional. They found us a visionary CTO in a highly competitive market.",
    author: "Mark Peterson",
    role: "Founder",
    company: "Stellar Venture",
    rating: 5,
    initials: "MP",
    color: "bg-violet-100 text-violet-600"
  },
  {
    text: "A truly professional experience from start to finish. Their attention to detail in candidate screening is rare.",
    author: "Nancy Adams",
    role: "Recruitment Lead",
    company: "Global Logistics",
    rating: 5,
    initials: "NA",
    color: "bg-amber-100 text-amber-600"
  }
];

const LOGOS = [
  { name: "GlobalTech", icon: "🌐" },
  { name: "FinStream", icon: "🏦" },
  { name: "CloudScale", icon: "☁️" },
  { name: "DataCore", icon: "📊" },
  { name: "NexGen", icon: "🚀" }
];

const TestimonialCard = ({ t }: { t: typeof TESTIMONIALS[0] }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[400px] mx-4 bg-white rounded-[2rem] p-8 shadow-sm border border-white/50 flex flex-col h-full hover:shadow-md transition-shadow duration-300 whitespace-normal">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
      ))}
    </div>
    <p className="text-[#1A1A1A] text-base leading-relaxed mb-8 flex-grow italic">
      “{t.text}”
    </p>
    <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
      <div className={`h-12 w-12 rounded-full flex items-center justify-center font-semibold text-sm ${t.color}`}>
        {t.initials}
      </div>
      <div>
        <h5 className="font-semibold text-[#1A1A1A] text-sm">{t.author}</h5>
        <p className="text-[#D14D72] text-xs font-medium">{t.role}, {t.company}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 40 }: { items: typeof TESTIMONIALS, direction?: 'left' | 'right', speed?: number }) => (
  <div className="flex overflow-hidden group select-none relative">
    <div
      className={`flex py-4 whitespace-nowrap min-w-max group-hover:[animation-play-state:paused] ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {[...items, ...items].map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </div>
);

export default function Testimonials() {

  return (
    <section className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#7A1F5C] font-semibold uppercase tracking-widest text-xs md:text-sm mb-4"
          >
            CLIENT TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight"
          >
            Trusted By Businesses <br className="hidden md:block" />
            Across Global Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#555555] text-lg md:text-xl leading-relaxed"
          >
            We partner with businesses across industries delivering reliable recruitment solutions,
            exceptional talent support and scalable workforce strategies tailored for long-term success.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-xl border border-white/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={180} className="text-[#D14D72]" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Text Content */}
              <div className="flex-1">
                <Quote size={48} className="text-[#D14D72] mb-8 opacity-50" />
                <blockquote className="text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-relaxed mb-10 italic">
                  “Chalky Infotech consistently delivered highly skilled candidates within tight timelines.
                  Their recruitment process, communication and workforce support exceeded our expectations.”
                </blockquote>

                <div className="flex items-center gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-[#1A1A1A]">Michael Carter</h4>
                    <p className="text-[#D14D72] font-medium">Head of Technology</p>
                    <p className="text-gray-500 text-sm">Global Digital Solutions</p>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Michael Carter - Head of Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Testimonials Section (Replaces the 3 small cards) */}
      <div className="relative w-full overflow-hidden mb-24 flex flex-col gap-8">
        <MarqueeRow items={TESTIMONIALS} direction="left" speed={90} />
        
        {/* Gradient Fades on Sides */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Strip */}
        <div className="mb-24">
          <p className="text-center text-gray-500 font-medium uppercase tracking-widest text-xs mb-10">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {LOGOS.map((logo, i) => (
              <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="text-3xl">{logo.icon}</span>
                <span className="text-xl font-semibold text-gray-800">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#7A1F5C] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden text-center md:text-left"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 md:flex items-center justify-between gap-12">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Looking For Reliable <br className="hidden md:block" />
                Recruitment Solutions?
              </h3>
              <p className="text-white/80 text-lg md:text-xl">
                Partner with Chalky Infotech to build future-ready teams with
                scalable workforce support and industry-focused hiring expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#7A1F5C] px-8 py-4 rounded-xl font-semibold hover:bg-[#D14D72] hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl">
                Schedule Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-[#D14D72] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#7A1F5C] transition-all shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
