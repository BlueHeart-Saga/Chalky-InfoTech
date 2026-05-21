'use client';

import { motion } from 'framer-motion';
import { Award, Check } from 'lucide-react';

const GOALS = [
  {
    sdg: 'SDG 4',
    title: 'Quality Education',
    color: '#C2185B',
    desc: 'Supporting digital skills development and graduate mentorship programmes to expand access to quality employment pathways.',
    actions: ['Graduate placement scheme', 'Partnership with further education colleges', 'Digital literacy grants'],
  },
  {
    sdg: 'SDG 5',
    title: 'Gender Equality',
    color: '#7A1F5C',
    desc: 'Proactively building gender-balanced shortlists and leadership pipelines across every sector we recruit in.',
    actions: ['Gender-balanced shortlisting policy', 'Women in Tech advocacy', 'Pay equity monitoring'],
  },
  {
    sdg: 'SDG 8',
    title: 'Decent Work & Economic Growth',
    color: '#C2185B',
    desc: 'Connecting skilled professionals to meaningful careers while upholding fair labour standards in every engagement.',
    actions: ['Ethical employment standards', 'Living wage advocacy', 'Worker rights compliance'],
  },
  {
    sdg: 'SDG 10',
    title: 'Reduced Inequalities',
    color: '#7A1F5C',
    desc: 'Championing underrepresented talent and driving equitable access to high-impact career opportunities globally.',
    actions: ['Diverse candidate pipelines', 'Anti-bias hiring training', 'Inclusive job advertising'],
  },
  {
    sdg: 'SDG 13',
    title: 'Climate Action',
    color: '#C2185B',
    desc: 'Committed to reaching net-zero operational emissions by 2030 through digital workflows, offsets, and green partnerships.',
    actions: ['Net 0 by 2030 roadmap', 'Certified carbon offsetting', 'Green supplier policy'],
  },
  {
    sdg: 'SDG 17',
    title: 'Partnerships for the Goals',
    color: '#7A1F5C',
    desc: 'Collaborating with like-minded organisations, NGOs, and public bodies to accelerate shared sustainability outcomes.',
    actions: ['NGO recruitment partnerships', 'Public sector engagement', 'ESG supplier collaboration'],
  },
];

export default function CSRSDGAlignment() {
  return (
    <section id="sdg" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
            <Award size={11} /> UN Sustainable Development Goals
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
            Aligned with the <span className="text-[#7A1F5C]">UN Global Agenda</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Chalky Infotech's CSR commitments directly map to six United Nations Sustainable Development Goals, anchoring our strategy in a globally recognised framework for impact.
          </p>
        </motion.div>

        {/* SDG Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-8 border border-[#EFE7DD] hover:border-[#7A1F5C]/25 hover:shadow-xl hover:shadow-[#7A1F5C]/8 transition-all duration-400 overflow-hidden"
            >
              {/* Hover tint */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7A1F5C]/4 to-transparent" />

              {/* SDG Badge */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-block px-3 py-1 rounded-lg text-white text-xs font-extrabold tracking-wider"
                  style={{ background: goal.color }}
                >
                  {goal.sdg}
                </span>
                <h3 className="text-[#1A1A1A] font-bold text-base leading-snug group-hover:text-[#7A1F5C] transition-colors duration-300">
                  {goal.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                {goal.desc}
              </p>

              {/* Actions */}
              <ul className="space-y-2 relative z-10">
                {goal.actions.map((action, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                    <Check size={13} style={{ color: goal.color }} className="flex-shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${goal.color}, #C2185B)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 relative overflow-hidden rounded-3xl p-8 md:p-10 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-[#7A1F5C]/25"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
          />
          <Award size={48} className="text-white/30 flex-shrink-0 hidden md:block relative z-10" />
          <div className="relative z-10 flex-1 text-center md:text-left">
            <p className="text-white font-bold text-xl md:text-2xl mb-2">
              UN Global Compact Member  Since 2024
            </p>
            <p className="text-white/75 leading-relaxed text-sm md:text-base max-w-2xl">
              Chalky Infotech is a committed signatory to the UN Global Compact, aligning our operations with its ten principles on human rights, labour, environment, and anti-corruption.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
