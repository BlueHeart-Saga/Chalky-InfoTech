'use client';
import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlobalWorkforce() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const locations = [
    {
      city: 'United Kingdom Office',
      region: 'UK • Europe',
      email: 'info@chalkyinfo.com',
      phone: '+44 7503 140975',
      whatsapp: '+91 80723 57581',
      address: '128, City Road, London EC1V 2NX, United Kingdom',
      iframeSrc: 'https://maps.google.com/maps?q=128%20City%20Road,%20London%20EC1V%202NX,%20United%20Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed',
      officeImg: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop'
    },
    {
      city: 'Chennai Corporate Office',
      region: 'India • Chennai',
      email: 'info@chalkyinfo.com',
      phone: '+44 7503 140975',
      whatsapp: '+91 80723 57581',
      address: '110, Manickan Lane, Anna Salai, Opp Guindy, Chennai, Tamil Nadu – 600 032',
      iframeSrc: 'https://maps.google.com/maps?q=110%20Manickan%20Lane,%20Anna%20Salai,%20Opp%20Guindy,%20Chennai,%20Tamil%20Nadu%20600032&t=&z=14&ie=UTF8&iwloc=&output=embed',
      officeImg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop'
    },
    {
      city: 'India Recruitment Center',
      region: 'India • Passuvanthani',
      email: 'info@chalkyinfo.com',
      phone: '+44 7503 140975',
      whatsapp: '+91 80723 57581',
      address: '4/392, Rajeev Colony, Passuvanthani, Tamil Nadu',
      iframeSrc: 'https://maps.google.com/maps?q=4/392%20Rajeev%20Colony,%20Passuvanthani,%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed',
      officeImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <section className="relative py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Global Reach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-[1.1] tracking-tight"
          >
            Borderless Talent for <br/>
            <span className="text-[#7A1F5C]">Global Enterprises</span>
          </motion.h2>
        </div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
          {locations.map((loc, i) => {
            const isFlipped = flippedIndex === i;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative w-full h-[520px] cursor-pointer group"
              onClick={() => setFlippedIndex(isFlipped ? null : i)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 ease-in-out ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* FRONT SIDE */}
                <div 
                  className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{loc.city}</h3>
                        <p className="text-[#7A1F5C] text-xs font-bold uppercase tracking-wider">{loc.region}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-[#7A1F5C]/50" />
                        <a href={`mailto:${loc.email}`} className="hover:text-[#7A1F5C] transition-colors" onClick={e => e.stopPropagation()}>{loc.email}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-[#7A1F5C]/50" />
                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="hover:text-[#7A1F5C] transition-colors" onClick={e => e.stopPropagation()}>{loc.phone}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MessageCircle className="w-4 h-4 text-[#7A1F5C]/50" />
                        <a 
                          href={`https://wa.me/${loc.whatsapp.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-[#7A1F5C] transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          WhatsApp: {loc.whatsapp}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#7A1F5C]/50 shrink-0" />
                        <span className="line-clamp-2">{loc.address}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto text-xs text-center text-gray-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                       <span>Click to view office</span>
                    </div>
                  </div>

                  {/* Styled Map Area */}
                  <div className="relative h-44 w-full bg-gray-100 border-t border-gray-100" onClick={e => e.stopPropagation()}>
                     <iframe 
                      src={loc.iframeSrc} 
                      title={`${loc.city} Map`}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                     ></iframe>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div 
                  className="absolute inset-0 bg-[#1A1A1A] rounded-[2rem] overflow-hidden shadow-xl"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={loc.officeImg} 
                      alt={`${loc.city} Office`} 
                      fill 
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="text-white text-3xl font-bold mb-2">{loc.city}</h3>
                      <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-6">Explore Our Workspace</p>
                      
                      <div className="text-xs text-center text-white/50 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                         <span>Click to flip back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

    
      {/* Unique Wave Divider: Stepped Blocks */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L200,120 L200,80 L400,80 L400,40 L600,40 L600,80 L800,80 L800,120 L1000,120 L1000,60 L1200,60 L1200,120 L0,120 Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
