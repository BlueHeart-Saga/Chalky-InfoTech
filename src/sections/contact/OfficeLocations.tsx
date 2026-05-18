'use client';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

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

export default function OfficeLocations() {
  return (
    <section id="locations" className="relative pt-0 pb-24 bg-[#F5F0E8]">

      {/* ── Top wave divider (matches hero / brand pages) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-px z-10">
        <svg
          className="relative block w-full h-[60px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* The fill colour must match the section ABOVE this one (white ContactForm bg) */}
          <path
            d="M0,0 C150,80 350,100 600,60 C850,20 1050,80 1200,40 L1200,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#7A1F5C] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Our Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Global <span className="text-[#7A1F5C]">Offices</span>
          </h2>
          <p className="text-[#8A8A8A] text-base mt-4 max-w-xl mx-auto leading-relaxed">
            We operate across the UK and India to connect the right talent with the right opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {offices.map((office, i) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] shadow-lg shadow-[#7A1F5C]/5 hover:-translate-y-1.5 transition-transform duration-300"
            >
              {/* Google Maps embed */}
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  src={office.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.city} office map`}
                />
                {/* Clickthrough blocker — lets card hover work without map dragging */}
                <div className="absolute inset-0 cursor-pointer" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">

                {/* Plum accent bar */}
                <div className="w-8 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] mb-4 rounded-full" />

                {/* Office type label */}
                <p className="text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest mb-1">
                  {office.type}
                </p>

                {/* City */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                  {office.city}
                  <span className="text-sm font-normal text-[#8A8A8A] ml-2">· {office.country}</span>
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2 mb-6 flex-1">
                  <MapPin size={13} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                  <p className="text-[#4A4A4A] text-sm leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>

                {/* Open in Maps */}
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
    </section>
  );
}
