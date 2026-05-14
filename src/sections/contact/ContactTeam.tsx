'use client';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    image: '/team/team-3.png',
    email: 'himanshu@chalkyinfo.com',
    linkedin: '#',
    focus: 'UK Enterprise Accounts',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Talent Acquisition',
    image: '/team/team-4.png',
    email: 'priya@chalkyinfo.com',
    linkedin: '#',
    focus: 'Global Talent Sourcing',
  },
  {
    name: 'James Wilson',
    role: 'Director of Strategy',
    image: '/team/team-6.png',
    email: 'james@chalkyinfo.com',
    linkedin: '#',
    focus: 'Partnerships & Growth',
  }
];

export default function ContactTeam() {
  return (
    <section className="py-24 bg-[#F5F0E8] border-t border-[#EFE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
          >
            Talk to the <span className="text-[#7A1F5C]">Experts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg max-w-2xl mx-auto"
          >
            Reach out directly to our leadership team for specialized inquiries and strategic partnerships.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-[#7A1F5C]/5 border border-[#EFE7DD] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#F5F0E8] group-hover:border-[#7A1F5C]/20 transition-colors duration-300 relative">
                <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
              <p className="text-[#7A1F5C] font-semibold text-sm mb-4">{member.role}</p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EFE7DD] to-transparent mb-4" />
              
              <p className="text-[#8A8A8A] text-xs font-medium uppercase tracking-wider mb-6">
                Focus: {member.focus}
              </p>
              
              <div className="flex gap-3 mt-auto">
                <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1A1A1A] hover:bg-[#7A1F5C] hover:text-white transition-colors duration-300 shadow-sm">
                  <Mail size={16} />
                </a>
                <a href={member.linkedin} className="w-10 h-10 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1A1A1A] hover:bg-[#7A1F5C] hover:text-white transition-colors duration-300 shadow-sm">
                  <Globe size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
