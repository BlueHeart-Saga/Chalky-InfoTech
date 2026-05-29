'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, Mail, Repeat } from 'lucide-react';
import Link from 'next/link';

const offices = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    type: 'United Kingdom Office',
    address: '128, City Road,\nLondon EC1V 2NX,\nUnited Kingdom',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=128+City+Road+London+EC1V+2NX',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.126906959899!2d-0.0877!3d51.5268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7c3c4d8b5f%3A0x3c3c3c3c3c3c3c3c!2s128+City+Rd%2C+London+EC1V+2NX%2C+UK!5e0!3m2!1sen!2s!4v1234567890',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // Global Earth Network
  },
  {
    id: 'thoothukudi',
    city: 'Thoothukudi',
    country: 'Tamil Nadu, India',
    type: 'India Development Center',
    address: '4/392, Rajeev Colony,\nPassuvanthani,\nTamil Nadu, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rajeev+Colony+Passuvanthani+Tamil+Nadu',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.0!2d77.9500!3d8.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ef64000e9dd5%3A0x1!2sRajeev+Colony%2C+Passuvanthani%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567891',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', // Diverse Global Team Collaborating
  },
  {
    id: 'chennai',
    city: 'Chennai',
    country: 'Tamil Nadu, India',
    type: 'Chennai Corporate Office',
    address: '110, Manickan Lane,\nAnna Salai, Opp Guindy,\nChennai, Tamil Nadu – 600 032',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=110+Manickan+Lane+Anna+Salai+Guindy+Chennai+600032',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d80.2100!3d13.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267df!2sAnna+Salai+Guindy+Chennai!5e0!3m2!1sen!2sin!4v1234567892',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', // Digital Networking / Cross Border Business
  },
];

const team = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    focus: 'Enterprise Strategy',
    image: '/team/saravana.png',
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Manjula Bashkar',
    role: 'Manual Cloud Security Specialist',
    focus: 'Cloud Security & Testing',
    image: '/team/manjula.png',
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    focus: 'DevOps & Client Success',
    image: '/team/himanshu-mudgal.png',
    email: 'info@chalkyinfo.com',
  },
];

export default function GlobalIndustrySupport() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
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
            We provide seamless cross-border <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">recruitment models</Link> and workforce management, connecting specialized <Link href="/industries" className="text-[#7A1F5C] hover:underline font-semibold">sector hubs</Link> with international talent opportunities.
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
                className="relative w-full h-[480px] perspective-1000"
              >
                <motion.div
                  className="w-full h-full relative preserve-3d transition-transform duration-700 cursor-pointer"
                  animate={{ rotateY: flippedId === office.id ? 180 : 0 }}
                  onClick={() => setFlippedId(flippedId === office.id ? null : office.id)}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] shadow-lg shadow-[#7A1F5C]/5 flex flex-col group">
                    {/* Map Iframe */}
                    <div className="relative w-full h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                      <iframe
                        src={office.embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="pointer-events-none" // prevent iframe from stealing clicks
                      />
                    </div>
                    
                    {/* Office Info */}
                    <div className="p-6 flex flex-col flex-1 bg-white">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-8 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-full" />
                        <button className="text-[#8A8A8A] hover:text-[#7A1F5C] transition-colors p-1" title="Flip Card">
                          <Repeat size={16} />
                        </button>
                      </div>
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
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A1F5C] border border-[#7A1F5C]/30 bg-[#F5F0E8] px-5 py-2.5 rounded-full w-fit hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all duration-300 z-10 relative"
                        onClick={(e) => e.stopPropagation()} // don't flip when clicking the map button
                      >
                        Open in Maps <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#7A1F5C]/5 border border-[#EFE7DD] flex flex-col" style={{ transform: 'rotateY(180deg)' }}>
                    {/* Image Background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${office.image})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full justify-between text-white">
                      <div className="flex justify-end">
                        <button className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white hover:text-[#7A1F5C] transition-all text-white">
                          <Repeat size={18} />
                        </button>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#7A1F5C] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                          {office.country}
                        </span>
                        <h4 className="text-3xl font-bold mb-2">{office.city} Office</h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Our state-of-the-art facility located in {office.city}, featuring premium infrastructure and a dynamic workspace environment for our specialized recruitment and technology teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                <div className="w-16 h-16 rounded-full border-2 border-[#7A1F5C] shadow-sm flex-shrink-0 bg-[#7A1F5C] text-white flex items-center justify-center font-bold text-xl tracking-wider group-hover:bg-[#C2185B] group-hover:border-[#C2185B] transition-colors duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
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
      {/* Wave Divider to Cream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}

