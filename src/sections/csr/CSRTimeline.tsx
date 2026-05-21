'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Milestone } from 'lucide-react';

const MILESTONES = [
  {
    year: '2019',
    title: 'Foundation & First Principles',
    desc: 'Chalky Infotech launched with an ethics-first charter, embedding diversity and fair practice commitments before our first placement.',
    highlight: 'Ethics charter signed at founding',
    side: 'left',
  },
  {
    year: '2020',
    title: 'Paperless Operations Go Live',
    desc: 'We transitioned to a fully digital, paperless recruitment workflow — eliminating print waste and accelerating remote-capable processes.',
    highlight: '100% digital processes achieved',
    side: 'right',
  },
  {
    year: '2021',
    title: 'DEI Programme Launched',
    desc: 'Introduced mandatory diversity training for all consultants and published our first DEI shortlisting policy for leadership mandates.',
    highlight: 'Diversity targets embedded company-wide',
    side: 'left',
  },
  {
    year: '2022',
    title: 'Community Mentorship Begins',
    desc: 'Partnered with three further education colleges to deliver digital career mentorship, supporting 50+ graduates in their first year.',
    highlight: '50+ graduates mentored in Year 1',
    side: 'right',
  },
  {
    year: '2023',
    title: 'Carbon Offset Partnership',
    desc: 'Signed our first certified carbon-offset agreement, committing to measurable annual offsets across all operational emissions.',
    highlight: 'First certified carbon offset signed',
    side: 'left',
  },
  {
    year: '2024',
    title: 'UN Global Compact Signatory',
    desc: 'Formally joined the UN Global Compact, committing to its 10 principles on human rights, labour standards, environment, and anti-corruption.',
    highlight: 'UN Global Compact member',
    side: 'right',
  },
  {
    year: '2025',
    title: 'ESG Supply Chain Audit',
    desc: 'Launched full ESG screening across our preferred supplier network — ensuring our responsible standards extend throughout our partner ecosystem.',
    highlight: '100% suppliers ESG screened',
    side: 'left',
  },
  {
    year: '2030',
    title: 'Net Zero Target',
    desc: 'Our flagship environmental commitment: achieving net-zero operational carbon emissions across all direct activities and our value chain.',
    highlight: 'Net Zero Operations Goal',
    side: 'right',
    isFuture: true,
  },
];

export default function CSRTimeline() {
  return (
    <section id="timeline" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
            <TrendingUp size={11} /> Our CSR Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
            Milestones That <span className="text-[#7A1F5C]">Define Us</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From our founding principles to our 2030 net-zero ambition — a timeline of the commitments that shape our culture and conduct.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7A1F5C]/30 via-[#C2185B]/30 to-[#7A1F5C]/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.side === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${
                  m.side === 'right' ? 'md:text-right' : ''
                }`}
              >
                {/* Left side content */}
                {m.side === 'left' ? (
                  <>
                    <div className="md:pr-12">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-3 ${
                          m.isFuture
                            ? 'bg-[#C2185B]/10 text-[#C2185B]'
                            : 'bg-[#7A1F5C]/10 text-[#7A1F5C]'
                        }`}
                      >
                        {m.isFuture && '🎯 '}
                        {m.year}
                        {m.isFuture ? ' — Target' : ''}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{m.desc}</p>
                      <span
                        className={`inline-block text-[11px] font-bold px-3 py-1 rounded-lg ${
                          m.isFuture ? 'bg-[#C2185B]/10 text-[#C2185B]' : 'bg-[#7A1F5C]/8 text-[#7A1F5C] bg-[#7A1F5C]/10'
                        }`}
                      >
                        {m.highlight}
                      </span>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-12">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-3 ${
                          m.isFuture
                            ? 'bg-[#C2185B]/10 text-[#C2185B]'
                            : 'bg-[#7A1F5C]/10 text-[#7A1F5C]'
                        }`}
                      >
                        {m.isFuture && '🎯 '}
                        {m.year}
                        {m.isFuture ? ' — Target' : ''}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{m.desc}</p>
                      <span
                        className={`inline-block text-[11px] font-bold px-3 py-1 rounded-lg ${
                          m.isFuture ? 'bg-[#C2185B]/10 text-[#C2185B]' : 'bg-[#7A1F5C]/10 text-[#7A1F5C]'
                        }`}
                      >
                        {m.highlight}
                      </span>
                    </div>
                  </>
                )}

                {/* Centre node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1 hidden md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, type: 'spring' }}
                    className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${
                      m.isFuture ? 'bg-[#C2185B]' : 'bg-[#7A1F5C]'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
