'use client';
import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const blocks = [
  { title: 'Quality-First Hiring', desc: <>We prioritize cultural alignment and technical depth over sheer volume, ensuring long-term <Link href="/services/permanent-hiring" className="text-[#C2185B] hover:underline font-medium transition-all">retention</Link>.</> },
  { title: 'Strategic Workforce Planning', desc: <>We don’t just fill seats. We consult on team architecture, compensation, and <Link href="/services/managed-services" className="text-[#C2185B] hover:underline font-medium transition-all">market trends</Link>.</> },
  { title: 'Rigorous Technical Standards', desc: <>Multi-stage screening processes designed by <Link href="/industries/it-technology" className="text-[#C2185B] hover:underline font-medium transition-all">technical specialists</Link>, not just general recruiters.</> },
  { title: 'Long-Term Partnerships', desc: <>We view ourselves as strategic partners deeply invested in your <Link href="/services/contract-staffing" className="text-[#C2185B] hover:underline font-medium transition-all">enterprise roadmap</Link>.</> },
  { title: 'Elevated Candidate Experience', desc: <>We protect your employer brand by providing white-glove service to every single <Link href="/contact" className="text-[#C2185B] hover:underline font-medium transition-all">applicant</Link>.</> }
];

export default function RecruitmentPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    blocks.forEach((_, i) => {
      const el = document.getElementById(`rp-card-${i}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-[#efeae2] overflow-visible">
      
      {/* WhatsApp Doodle Wallpaper Overlay */}
      <div className="absolute inset-0 z-0 bg-[#efeae2]">
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(122, 31, 92, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 75% 40%, rgba(194, 24, 91, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 40% 70%, rgba(122, 31, 92, 0.15) 1.5px, transparent 1.5px),
            radial-gradient(circle at 80% 80%, rgba(194, 24, 91, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(to right, #7A1F5C 1px, transparent 1px),
            linear-gradient(to bottom, #7A1F5C 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }} />
      </div>

      {/* ── Top Smooth Curve (white → beige bg) ── */}
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

          <div className="sticky top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-[1.1] tracking-tight text-[#1A1A1A]">
              A Philosophy Built on <br /><span className="text-[#C2185B]">Precision & Quality</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Most staffing companies focus on transactional speed. We focus on architectural precision. Our <Link href="/services" className="text-[#C2185B] hover:underline font-medium transition-all">recruitment philosophy</Link> is designed for enterprises where a single <Link href="/services/executive-search" className="text-[#C2185B] hover:underline font-medium transition-all">strategic hire</Link> can alter the trajectory of a product.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-full mb-8" />

            {/* Interactive Vertical Progress Stepper */}
            <div className="hidden lg:flex flex-col gap-4 pl-4 border-l border-gray-300/60 relative">
              {/* Sliding active indicator point */}
              <div 
                className="absolute left-[-1.5px] w-[3px] bg-gradient-to-b from-[#7A1F5C] to-[#C2185B] rounded-full transition-all duration-300"
                style={{
                  top: `${activeStep * 36}px`, // matches h-[20px] + gap-4 (16px)
                  height: '20px',
                }}
              />
              {blocks.map((block, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = document.getElementById(`rp-card-${i}`);
                    if (el) {
                      const offset = 140; // clears header navbar
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`text-left text-sm font-bold transition-all duration-300 pl-4 h-[20px] flex items-center ${
                    activeStep === i 
                      ? 'text-[#7A1F5C] translate-x-1.5' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  0{i + 1}. {block.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {blocks.map((block, i) => (
              <div
                key={i}
                id={`rp-card-${i}`}
                data-index={i}
                className="flex gap-5 p-8 rounded-[4px] bg-white border border-[#7A1F5C]/10 shadow-[0_8px_30px_rgba(122,31,92,0.03)] hover:shadow-[0_15px_40px_rgba(122,31,92,0.06)] hover:-translate-y-1 transition-all duration-300 relative group"
                style={{
                  borderLeft: '5px solid #7A1F5C',
                }}
              >
                <div className="w-10 h-10 rounded-[4px] bg-[#7A1F5C]/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C2185B]/10 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#7A1F5C] group-hover:text-[#C2185B] transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#1A1A1A] mb-2 group-hover:text-[#7A1F5C] transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom Smooth Curve (beige bg → #F8F5F0) ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg
          className="relative block w-full"
          style={{ height: '70px' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
        >
          <path d="M0,70 L1200,70 L1200,70 Q600,0 0,70 Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  );
}
