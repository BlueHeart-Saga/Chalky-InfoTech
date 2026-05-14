'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Mail } from 'lucide-react';

const offices = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    type: 'United Kingdom Office',
    address: '128, City Road,\nLondon EC1V 2NX,\nUnited Kingdom',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=128+City+Road+London+EC1V+2NX',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.126906959899!2d-0.0877!3d51.5268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7c3c4d8b5f%3A0x3c3c3c3c3c3c3c3c!2s128+City+Rd%2C+London+EC1V+2NX%2C+UK!5e0!3m2!1sen!2s!4v1234567890',
  },
  {
    id: 'thoothukudi',
    city: 'Thoothukudi',
    country: 'Tamil Nadu, India',
    type: 'India Development Center',
    address: '4/392, Rajeev Colony,\nPassuvanthani,\nTamil Nadu, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rajeev+Colony+Passuvanthani+Tamil+Nadu',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.0!2d77.9500!3d8.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ef64000e9dd5%3A0x1!2sRajeev+Colony%2C+Passuvanthani%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567891',
  },
  {
    id: 'chennai',
    city: 'Chennai',
    country: 'Tamil Nadu, India',
    type: 'Chennai Corporate Office',
    address: '110, Manickan Lane,\nAnna Salai, Opp Guindy,\nChennai, Tamil Nadu – 600 032',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=110+Manickan+Lane+Anna+Salai+Guindy+Chennai+600032',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d80.2100!3d13.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267df!2sAnna+Salai+Guindy+Chennai!5e0!3m2!1sen!2sin!4v1234567892',
  },
];

const team = [
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    focus: 'UK Enterprise Accounts',
    image: '/team/himanshu-mudgal.png',
    email: 'himanshu@chalkyinfo.com',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Talent Acquisition',
    focus: 'Global Talent Sourcing',
    image: '/team/team-4.png',
    email: 'priya@chalkyinfo.com',
  },
  {
    name: 'James Wilson',
    role: 'Director of Strategy',
    focus: 'Partnerships & Growth',
    image: '/team/team-6.png',
    email: 'james@chalkyinfo.com',
  },
];

export default function GlobalIndustrySupport() {
  return (
    <section className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5"
          >
            International Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight"
          >
            Global <span className="text-[#7A1F5C]">Industry Support</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg leading-relaxed max-w-3xl mx-auto"
          >
            We provide seamless cross-border recruitment and workforce management, connecting specialized sector hubs with international talent opportunities.
          </motion.p>
        </div>

        {/* Global Hubs (Map Iframes) */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Operational Hubs</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] shadow-lg shadow-[#7A1F5C]/5 flex flex-col group"
              >
                {/* Map Iframe */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <iframe
                    src={office.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 cursor-pointer" />
                </div>
                
                {/* Office Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] mb-4 rounded-full" />
                  <p className="text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest mb-1">{office.type}</p>
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{office.city} <span className="text-sm font-normal text-[#8A8A8A] ml-1">· {office.country}</span></h4>
                  <div className="flex items-start gap-2 mb-6 flex-1">
                    <MapPin size={13} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                    <p className="text-[#4A4A4A] text-sm leading-relaxed whitespace-pre-line">{office.address}</p>
                  </div>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A1F5C] border border-[#7A1F5C]/30 bg-[#F5F0E8] px-5 py-2.5 rounded-full w-fit hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all duration-300"
                  >
                    Open in Maps <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Team Members */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Industry Practice Leaders</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-[#EFE7DD] shadow-lg shadow-[#7A1F5C]/5 flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#EFE7DD] flex-shrink-0 bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=7A1F5C&color=fff&size=56`; }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A1A1A] text-lg truncate group-hover:text-[#7A1F5C] transition-colors">{member.name}</p>
                  <p className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider truncate mb-1">{member.role}</p>
                  <p className="text-[10px] text-[#7A1F5C] font-bold bg-[#7A1F5C]/10 px-2 py-0.5 rounded-full inline-block truncate max-w-full">{member.focus}</p>
                </div>
                <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-[#F5F0E8] text-[#7A1F5C] flex items-center justify-center hover:bg-[#7A1F5C] hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

