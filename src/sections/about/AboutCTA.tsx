'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="pt-24 pb-48 bg-[#7A1F5C] text-white text-center relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7A1F5C] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D14D72]/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          Next Steps
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-[1.1] tracking-tight">
          Build High-Performance Teams <br/>
          <span className="text-[#F5F0E8]/90">With Chalky Infotech</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with our recruitment specialists to access exceptional technology talent and scalable enterprise workforce solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#7A1F5C] font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Hire Talent
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-bold border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
