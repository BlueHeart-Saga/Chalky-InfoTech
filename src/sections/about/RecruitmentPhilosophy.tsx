'use client';
import { CheckCircle2 } from 'lucide-react';

const blocks = [
  { title: 'Quality-First Hiring', desc: 'We prioritize cultural alignment and technical depth over sheer volume, ensuring long-term retention.' },
  { title: 'Strategic Workforce Planning', desc: 'We don’t just fill seats. We consult on team architecture, compensation, and market trends.' },
  { title: 'Rigorous Technical Standards', desc: 'Multi-stage screening processes designed by technical specialists, not just general recruiters.' },
  { title: 'Long-Term Partnerships', desc: 'We view ourselves as strategic partners deeply invested in your enterprise roadmap.' },
  { title: 'Elevated Candidate Experience', desc: 'We protect your employer brand by providing white-glove service to every single applicant.' }
];

export default function RecruitmentPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-[#1A0A14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#F8F5F0] text-xs font-bold uppercase tracking-widest mb-6">Our Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              A Philosophy Built on <br/><span className="text-[#7A1F5C]">Precision & Quality</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Most staffing companies focus on transactional speed. We focus on architectural precision. Our recruitment philosophy is designed for enterprises where a single strategic hire can alter the trajectory of a product.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-full" />
          </div>

          <div className="space-y-6">
            {blocks.map((block, i) => (
              <div key={i} className="flex gap-5 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#C2185B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xl text-white mb-2">{block.title}</h3>
                  <p className="text-white/60 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
