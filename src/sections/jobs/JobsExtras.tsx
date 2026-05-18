'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Mail, Bell, ArrowRight, CheckCircle2 } from 'lucide-react';

const STATS = [
  { value: '2,400+', label: 'Active Subscribers' },
  { value: '98%',    label: 'Relevant Match Rate' },
  { value: 'Daily',  label: 'Alert Frequency' },
];

export function JobAlerts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#7A1F5C] text-white overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Large decorative circle */}
      <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border border-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <Bell size={15} className="text-white" />
              </div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                Job Alerts
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.1] mb-6">
              Never Miss <br />
              <span className="text-[#F5A7CB]">Your Next Role</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-md">
              Subscribe to receive curated job alerts matched to your skills,
              location, and salary expectations — delivered directly to your inbox.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-white/55 text-xs font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">You're subscribed!</h3>
                    <p className="text-white/65 text-sm max-w-xs">
                      We'll send you relevant opportunities as soon as they're posted.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h3 className="text-xl font-semibold mb-1">Get matched alerts</h3>
                    <p className="text-white/60 text-sm mb-6">
                      Tell us your email and we'll handle the rest.
                    </p>

                    {/* Name */}
                    <div>
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Johnson"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Job type preference */}
                    <div>
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5 block">
                        Preferred Role Type
                      </label>
                      <select
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all appearance-none"
                      >
                        <option value="" className="text-gray-800">Any type</option>
                        <option value="full-time" className="text-gray-800">Full-time</option>
                        <option value="contract" className="text-gray-800">Contract</option>
                        <option value="remote" className="text-gray-800">Remote</option>
                        <option value="hybrid" className="text-gray-800">Hybrid</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 bg-white text-[#7A1F5C] py-4 rounded-xl font-bold text-sm hover:bg-[#F5F0E8] transition-all shadow-lg mt-2"
                    >
                      Subscribe to Alerts
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-white/40 text-[11px] text-center pt-1">
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const FAQS = [
  { 
    q: 'How can I search and apply for the latest IT jobs on Chalky Infotech?', 
    a: 'You can browse our current vacancies directly on our Jobs page. Once you find a suitable IT role, simply click "Apply" and upload your CV. Our recruitment consultants will then review your profile for technical and cultural alignment.' 
  },
  { 
    q: 'Can I set up custom job alerts for specific cloud and engineering roles?', 
    a: 'Yes! You can subscribe to our Job Alerts service by providing your email and role preferences. We will then notify you immediately whenever a new cloud, DevOps, or engineering position matching your criteria is posted.' 
  },
  { 
    q: 'What is the benefit of joining the Chalky Infotech talent pool?', 
    a: 'Joining our talent pool ensures that our specialized recruiters have your profile on hand for upcoming opportunities that may not yet be public. This proactive approach gives you a competitive edge in high-demand technology sectors.' 
  },
  { 
    q: 'Do you provide career opportunities for remote software engineering roles?', 
    a: 'Absolutely. We partner with global organizations that offer a wide range of remote-first and hybrid software engineering roles. You can easily filter our job board specifically for "Remote" positions to find borderless opportunities.' 
  },
  { 
    q: 'How should I optimize my resume for your technical recruitment process?', 
    a: 'We recommend highlighting your technical stack, key project contributions, and certifications clearly. Using standard formats (PDF or Word) and ensuring your most relevant skills are at the top helps our automated mapping tools and recruiters identify you faster.' 
  },
  { 
    q: 'Can I apply for multiple tech roles simultaneously through the portal?', 
    a: 'Yes, you can apply for multiple roles that match your expertise. Our system will track your applications, and our consultants will coordinate with you to ensure you are considered for the best-fit opportunity across all your interests.' 
  },
  { 
    q: 'What interview preparation support do you offer for IT candidates?', 
    a: 'We provide comprehensive interview coaching, including technical brief reviews, company culture insights, and mock interview sessions. Our goal is to ensure you are fully prepared to showcase your technical value to prospective employers.' 
  },
  { 
    q: 'How often is the Chalky Infotech job board updated with new roles?', 
    a: 'Our job board is updated in real-time. As soon as a client releases a new requirement or a digital transformation project begins, the corresponding roles are immediately pushed to our live recruitment portal.' 
  },
  { 
    q: 'Does Chalky Infotech support international placements for global tech talent?', 
    a: 'Yes, we specialize in international talent acquisition. We support candidates globally in finding roles across the UK, India, and other major tech hubs, providing guidance on Right To Work and local employment standards.' 
  }
];

export function JobsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Candidate <span className="text-[#7A1F5C]">FAQs</span>
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === i ? 'border-[#7A1F5C]/30 shadow-xl shadow-[#7A1F5C]/5' : 'border-[#EFE7DD] hover:border-[#7A1F5C]/20'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`font-bold transition-colors ${openIndex === i ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#7A1F5C] text-white rotate-180' : 'bg-[#F5F0E8] text-[#7A1F5C]'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-[#8A8A8A] text-sm leading-relaxed border-t border-[#EFE7DD]/50 pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
