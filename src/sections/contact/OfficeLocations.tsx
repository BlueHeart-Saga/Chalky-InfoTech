'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Globe } from 'lucide-react';

const offices = [
  { flag: '🇬🇧', country: 'United Kingdom', city: 'London (HQ)', phone: '+44 7503 140975', email: 'uk@chalkyinfo.com', hours: 'Mon–Fri: 9am – 6pm GMT', address: '123 Tech Hub, Silicon Roundabout, London, EC1V 9XX' },
  { flag: '🇮🇳', country: 'India', city: 'Chennai', phone: '+91 8072357581', email: 'india@chalkyinfo.com', hours: 'Mon–Fri: 9am – 6pm IST', address: '45 IT Park, OMR, Chennai, Tamil Nadu 600119' },
];

export default function OfficeLocations() {
  return (
    <section className="py-24 bg-[#F5F0E8] border-t border-[#EFE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6"
          >
            <Globe size={32} className="text-[#7A1F5C]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
          >
            Global <span className="text-[#7A1F5C]">Offices</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg max-w-2xl mx-auto"
          >
            We operate across major technology hubs to serve you better.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {offices.map((office, i) => (
            <motion.div 
              key={office.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-[#7A1F5C]/5 border border-[#EFE7DD] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7A1F5C]/5 to-transparent rounded-bl-full -z-0 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{office.country}</h3>
                    <p className="text-[#7A1F5C] font-semibold">{office.city}</p>
                  </div>
                  <span className="text-4xl drop-shadow-sm">{office.flag}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F5C] transition-colors duration-300">
                      <Globe size={18} className="text-[#7A1F5C] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-semibold uppercase tracking-wider mb-1">Address</p>
                      <p className="text-[#1A1A1A] text-sm leading-relaxed">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F5C] transition-colors duration-300">
                      <Phone size={18} className="text-[#7A1F5C] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-semibold uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-[#1A1A1A] text-sm">{office.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F5C] transition-colors duration-300">
                      <Mail size={18} className="text-[#7A1F5C] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-semibold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-[#1A1A1A] text-sm">{office.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F5C] transition-colors duration-300">
                      <Clock size={18} className="text-[#7A1F5C] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-semibold uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-[#1A1A1A] text-sm">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
