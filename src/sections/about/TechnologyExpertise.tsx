'use client';
import { Cloud, GitBranch, Code2, Database, ShieldCheck } from 'lucide-react';

const techDomains = [
  { icon: Cloud, title: 'Cloud Infrastructure', skills: ['Azure', 'AWS', 'GCP'], colSpan: 'md:col-span-2 lg:col-span-1' },
  { icon: GitBranch, title: 'DevOps & Platform', skills: ['Docker', 'Kubernetes', 'Terraform'], colSpan: 'md:col-span-1 lg:col-span-1' },
  { icon: Code2, title: 'Software Engineering', skills: ['React', 'Node.js', 'Java', 'Python'], colSpan: 'md:col-span-1 lg:col-span-1' },
  { icon: Database, title: 'Data & AI', skills: ['AI Engineering', 'Machine Learning', 'Data Platforms'], colSpan: 'md:col-span-2 lg:col-span-2' },
  { icon: ShieldCheck, title: 'Cybersecurity', skills: ['DevSecOps', 'IAM', 'SIEM'], colSpan: 'md:col-span-2 lg:col-span-1' },
];

export default function TechnologyExpertise() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Domain Authority</span>
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Technology Expertise</h2>
          <p className="text-[#8A8A8A] text-lg">We speak the language of modern engineering. Our specialized recruitment pods focus exclusively on high-impact technology domains.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {techDomains.map((domain, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#7A1F5C]/30 hover:shadow-xl transition-all duration-300 flex flex-col group ${domain.colSpan}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center text-[#7A1F5C] group-hover:scale-110 group-hover:bg-[#7A1F5C] group-hover:text-white transition-all duration-300">
                  <domain.icon className="w-6 h-6" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#C2185B] block" />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{domain.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-[#F5F0E8] rounded-lg text-xs font-bold text-[#8A8A8A] border border-[#E5E7EB]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,118.9,158.8,111.9,232.48,87.6,263.3,77.5,292.8,66.7,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
