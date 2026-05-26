'use client';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import processbg from '@/assets/About Us/processbg.jpg';

const blocks = [
  { title: 'Quality-First Hiring', desc: <>We prioritize cultural alignment and technical depth over sheer volume, ensuring long-term <Link href="/services/permanent-hiring" className="text-[#C2185B] hover:underline font-medium transition-all">retention</Link>.</> },
  { title: 'Strategic Workforce Planning', desc: <>We don’t just fill seats. We consult on team architecture, compensation, and <Link href="/services/managed-services" className="text-[#C2185B] hover:underline font-medium transition-all">market trends</Link>.</> },
  { title: 'Rigorous Technical Standards', desc: <>Multi-stage screening processes designed by <Link href="/industries/it-technology" className="text-[#C2185B] hover:underline font-medium transition-all">technical specialists</Link>, not just general recruiters.</> },
  { title: 'Long-Term Partnerships', desc: <>We view ourselves as strategic partners deeply invested in your <Link href="/services/contract-staffing" className="text-[#C2185B] hover:underline font-medium transition-all">enterprise roadmap</Link>.</> },
  { title: 'Elevated Candidate Experience', desc: <>We protect your employer brand by providing white-glove service to every single <Link href="/contact" className="text-[#C2185B] hover:underline font-medium transition-all">applicant</Link>.</> }
];

export default function RecruitmentPhilosophy() {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-900 text-white">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={processbg}
          alt="Recruitment Philosophy Background"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
        {/* Neutral dark overlay to preserve image colors while maintaining text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      {/* ── Top Smooth Curve (white → dark) ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg
          className="relative block w-full"
          style={{ height: '70px' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1200,0 L1200,0 Q600,70 0,0 Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="sticky top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#F5F0E8] text-xs font-bold uppercase tracking-widest mb-6">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-[1.1] tracking-tight">
              A Philosophy Built on <br /><span className="text-[#C2185B]">Precision & Quality</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Most staffing companies focus on transactional speed. We focus on architectural precision. Our <Link href="/services" className="text-[#C2185B] hover:underline font-medium transition-all">recruitment philosophy</Link> is designed for enterprises where a single <Link href="/services/executive-search" className="text-[#C2185B] hover:underline font-medium transition-all">strategic hire</Link> can alter the trajectory of a product.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-full" />
          </div>

          <div className="space-y-6">
            {blocks.map((block, i) => (
              <div key={i} className="flex gap-5 p-8 rounded-3xl bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 hover:bg-[#F5F0E8]/10 transition-colors duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#C2185B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xl text-[#F5F0E8] mb-2">{block.title}</h3>
                  <p className="text-[#F5F0E8]/70 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom Smooth Curve (dark → #f5f0e8) ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg
          className="relative block w-full"
          style={{ height: '70px' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
        >
          <path d="M0,70 L1200,70 L1200,70 Q600,0 0,70 Z" fill="#F5F0E8" />
        </svg>
      </div>
    </section>
  );
}
