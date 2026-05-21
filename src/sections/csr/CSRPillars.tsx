'use client';

import { motion } from 'framer-motion';
import { Leaf, Users2, HeartHandshake, Globe2, Recycle, Wind, Sprout } from 'lucide-react';

const PILLARS = [
  {
    icon: Leaf,
    number: '01',
    title: 'Environmental Stewardship',
    headline: 'A Digital-First, Carbon-Conscious Business',
    accent: '#7A1F5C',
    points: [
      'Fully paperless, digitised recruitment workflows across all offices',
      'Annual certified carbon-offset partnerships to neutralise operational emissions',
      'Remote-first work policy reducing commute and travel footprint by over 60%',
      'Green hosting and cloud infrastructure with renewable energy providers',
      'Annual environmental impact reviews shared with all stakeholders',
    ],
    stats: [
      { value: '100%', label: 'Paperless Operations' },
      { value: '60%', label: 'Travel Footprint Reduced' },
      { value: 'Net 0', label: 'Target by 2030' },
    ],
  },
  {
    icon: Users2,
    number: '02',
    title: 'Diversity, Equity & Inclusion',
    headline: 'Equitable Access to Opportunity  Without Exception',
    accent: '#C2185B',
    points: [
      'Mandatory diversity targets embedded in every executive search mandate',
      'Structured bias-mitigation training for all recruitment consultants',
      'Gender-balanced shortlisting policies for senior leadership pipelines',
      'Active promotion of candidates from underrepresented backgrounds',
      'Transparent DEI metrics published in our annual stakeholder report',
    ],
    stats: [
      { value: '40%', label: 'Women in Leadership Pipeline' },
      { value: '100%', label: 'Consultants DEI Trained' },
      { value: '3x', label: 'Diverse Shortlist Requirement' },
    ],
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Community Empowerment',
    headline: 'Investing in People Beyond Placements',
    accent: '#7A1F5C',
    points: [
      'Graduate mentorship programme supporting 50+ students annually',
      'Partnerships with local colleges to bridge the digital skills gap',
      'Pro-bono recruitment support for registered charities and non-profits',
      'Quarterly volunteer days for staff in community-driven initiatives',
      'Funding for digital upskilling in underserved communities',
    ],
    stats: [
      { value: '50+', label: 'Graduates Mentored p.a.' },
      { value: '3', label: 'Active Community Programmes' },
      { value: '4×', label: 'Volunteer Days Per Year' },
    ],
  },
  {
    icon: Globe2,
    number: '04',
    title: 'Ethical & Responsible Governance',
    headline: 'Transparency, Fairness & Compliance at Every Step',
    accent: '#C2185B',
    points: [
      'Strict adherence to GDPR, IR35, and international labour standards',
      'Ethical AI policy governing all candidate-screening and matching tools',
      'Transparent supply-chain audits with all partner agencies annually',
      'Clear whistleblower protections and a zero-tolerance anti-bribery policy',
      'Board-level ESG oversight with quarterly governance reviews',
    ],
    stats: [
      { value: '100%', label: 'Compliant Engagements' },
      { value: 'Zero', label: 'Tolerance on Bribery' },
      { value: 'Board', label: 'Level ESG Oversight' },
    ],
  },
  {
    icon: Recycle,
    number: '05',
    title: 'Sustainable Supply Chain',
    headline: 'Responsible Partnerships Throughout Our Ecosystem',
    accent: '#7A1F5C',
    points: [
      'ESG screening of all preferred supplier and partner agencies',
      'Preference given to minority-owned and social-enterprise suppliers',
      'Fair payment terms  all suppliers paid within 30 days, always',
      'Collaborative supplier development through shared sustainability targets',
      'Annual sustainability self-assessment shared with the full supply chain',
    ],
    stats: [
      { value: '30', label: 'Day Max Payment Terms' },
      { value: '100%', label: 'Suppliers ESG Screened' },
      { value: '2025', label: 'Supply Chain Net 0 Target' },
    ],
  },
];

export default function CSRPillars() {
  return (
    <section id="pillars" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
            Our Five Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
            The Foundations of Our <span className="text-[#7A1F5C]">Responsibility</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Five interconnected commitments that define how Chalky Infotech creates sustainable, inclusive, and ethical value for every stakeholder.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl p-8 md:p-12 border border-[#EFE7DD] bg-[#FAF8F5] ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Content  alternate order */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${pillar.accent}15` }}
                  >
                    <pillar.icon size={22} style={{ color: pillar.accent }} strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-[11px] font-extrabold uppercase tracking-[0.2em]"
                    style={{ color: pillar.accent }}
                  >
                    Pillar {pillar.number}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[#7A1F5C] font-semibold text-sm mb-6">{pillar.headline}</p>

                <ul className="space-y-3 mb-8">
                  {pillar.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: pillar.accent }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats  alternate order */}
              <div className={`grid grid-cols-3 gap-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                {pillar.stats.map((stat, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.1 }}
                    className="relative overflow-hidden rounded-2xl p-6 bg-white border border-[#EFE7DD] text-center group hover:border-[#7A1F5C]/25 hover:shadow-lg hover:shadow-[#7A1F5C]/8 transition-all duration-300"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7A1F5C]/4 to-transparent"
                    />
                    <p
                      className="text-2xl md:text-3xl font-bold mb-1 relative z-10"
                      style={{ color: pillar.accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider relative z-10">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}

                {/* Large decorative number */}
                <div className="col-span-3 relative overflow-hidden rounded-2xl p-6 bg-white border border-[#EFE7DD] flex items-center gap-5">
                  <div
                    className="text-[80px] font-black leading-none opacity-5 select-none absolute right-4 bottom-0"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.number}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${pillar.accent}15` }}
                  >
                    <pillar.icon size={20} style={{ color: pillar.accent }} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                    <strong className="text-[#1A1A1A]">{pillar.title}</strong>  a core commitment woven into Chalky Infotech's day-to-day operations and long-term strategic vision.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
