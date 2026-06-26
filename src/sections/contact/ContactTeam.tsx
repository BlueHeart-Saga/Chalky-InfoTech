'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Manjula Bashkar',
    role: 'Manual Cloud Security Specialist',
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    email: 'info@chalkyinfo.com',
  },
];

const RadiatingLines = () => {
  const lines = [];
  for (let i = -235; i <= -25; i += 5.5) {
    const angle = i * (Math.PI / 180);
    // Peak length and thickness at angle -140
    const diff = Math.abs(i - (-140));
    // Normalize diff so 0 is peak, 1 is the farthest edge (approx 100 degrees away)
    const normalizedDiff = Math.min(diff / 100, 1);
    
    // Length (r2) interpolates from 98 (peak) down to 77 (edges)
    const r2 = 77 + (21 * Math.pow(1 - normalizedDiff, 1.2));
    
    // Stroke width interpolates from 3.5 (peak) down to 0.5 (edges)
    const strokeW = 0.5 + (3.2 * Math.pow(1 - normalizedDiff, 1.2));
    
    // Inner edge of the lines
    const x1 = 100 + 74 * Math.cos(angle);
    const y1 = 100 + 74 * Math.sin(angle);
    const x2 = 100 + r2 * Math.cos(angle);
    const y2 = 100 + r2 * Math.sin(angle);
    
    lines.push(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B63E7B" strokeWidth={strokeW} strokeLinecap="round" />
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="absolute w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:rotate-12 transition-transform duration-700 ease-out z-0">
      {lines}
    </svg>
  );
};

export default function ContactTeam() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          
          <div className="flex items-center justify-center mb-10 relative ml-4 md:ml-6">
            {/* The Pink Diamond */}
            <motion.div 
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 45 }}
              viewport={{ once: true }}
              className="w-10 h-10 md:w-12 md:h-12 bg-[#D14D72] absolute -left-5 md:-left-6 z-10"
            />
            {/* The Purple Banner */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#7A1F5C] text-white font-medium text-lg md:text-2xl py-3 md:py-4 px-8 md:px-14 pl-10 md:pl-12 relative z-0 shadow-md"
              style={{
                clipPath: 'polygon(1.2rem 50%, 0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              Talk to the Experts
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A4A4A] text-base md:text-lg leading-relaxed font-medium max-w-2xl"
          >
            Reach out directly to our leadership team for specialised inquiries, strategic partnerships, and talent solutions.
          </motion.p>
        </div>

        {/* Team Cards Grid */}
        <div className="flex flex-wrap justify-center gap-14 md:gap-16 items-center max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.a
              key={i}
              href={`mailto:${member.email}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative w-52 h-52 md:w-60 md:h-60 group block cursor-pointer"
            >
              <RadiatingLines />
              
              {/* The Thick Border Circle */}
              <div className="absolute inset-0 rounded-full border-[6px] md:border-[8px] border-[#7A1F5C] bg-white z-10 overflow-hidden flex flex-col items-center justify-center shadow-[0_10px_30px_rgb(122,31,92,0.15)] group-hover:border-[#9c2776] transition-colors duration-500">
                
                {/* Office Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 scale-110 group-hover:scale-100 transition-transform duration-700"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80')" }}
                />
                
                {/* Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
                
                {/* Text Content */}
                <div className="relative z-20 text-center px-6 w-full flex flex-col items-center justify-center h-full gap-1.5 transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="text-[#7A1F5C] font-bold text-[17px] md:text-[19px] leading-[1.2] tracking-tight drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className="text-[#4A4A4A] text-[13px] md:text-[14px] font-medium leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
