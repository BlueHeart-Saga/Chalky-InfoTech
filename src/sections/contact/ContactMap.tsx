'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
          >
            Find Us on the <span className="text-[#7A1F5C]">Map</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg max-w-2xl mx-auto"
          >
            Drop by our offices for a coffee and a chat about your recruitment needs.
          </motion.p>
        </div>

        {/* Map Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* London Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-[#EFE7DD] group"
          >
            {/* Placeholder for actual Google Map iframe */}
            <div className="absolute inset-0 bg-gray-200" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-4">
              <div className="w-10 h-10 bg-[#7A1F5C] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">London HQ</p>
                <p className="text-xs text-[#8A8A8A]">Silicon Roundabout, EC1V 9XX</p>
              </div>
            </div>
          </motion.div>

          {/* Chennai Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-[#EFE7DD] group"
          >
            {/* Placeholder for actual Google Map iframe */}
            <div className="absolute inset-0 bg-gray-200" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.52553959146!2d80.19946894999999!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF8A65] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">Chennai Office</p>
                <p className="text-xs text-[#8A8A8A]">IT Park, OMR, TN 600119</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
