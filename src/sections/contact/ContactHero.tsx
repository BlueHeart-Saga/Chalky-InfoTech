'use client';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F9F6F0]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#7A1F5C]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FF8A65]/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EFE7DD] text-[#7A1F5C] text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
              <MessageSquare size={16} />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Let's Start the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">
                Conversation
              </span>
            </h1>
            
            <p className="text-[#8A8A8A] text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Whether you're looking to hire exceptional talent or find your next career move — our specialist consultants are ready to help you make the right move.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7A1F5C] transition-all duration-300 shadow-lg hover:shadow-[#7A1F5C]/20 hover:-translate-y-1"
              >
                Send a Message <ArrowRight size={18} />
              </a>
              <a 
                href="tel:+447503140975"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1A1A] px-8 py-4 rounded-xl font-bold border border-[#EFE7DD] hover:border-[#7A1F5C] hover:text-[#7A1F5C] transition-all duration-300 shadow-sm"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/hero-contact.png" 
                alt="Professional recruitment consultation"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#EFE7DD] max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <Image src={`/team/team-${i}.png`} alt="Team" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-[#1A1A1A]">24/7 Support</p>
              <p className="text-[10px] text-[#8A8A8A]">Global dedicated team</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
