'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Search, MapPin, Briefcase, Clock, ArrowUpRight, Filter, ChevronRight } from 'lucide-react';

const JOBS = [
  { id: '1', title: 'Senior Cloud Architect', company: 'FinTech Corp', location: 'London, UK', type: 'Hybrid', category: 'Cloud & DevOps', salary: '£90,000 - £120,000', posted: '2 days ago', desc: 'Lead cloud architecture design and implementation for a fast-growing fintech organisation using AWS and Azure.' },
  { id: '2', title: 'AI/ML Engineer', company: 'HealthTech Solutions', location: 'Remote', type: 'Remote', category: 'AI & Data', salary: '£75,000 - £95,000', posted: '1 day ago', desc: 'Build and deploy machine learning models for clinical data analysis in a regulated healthcare environment.' },
  { id: '3', title: 'DevOps Lead', company: 'Retail Giants', location: 'Manchester, UK', type: 'Onsite', category: 'Cloud & DevOps', salary: '£80,000 - £100,000', posted: '3 days ago', desc: 'Drive DevOps transformation and CI/CD pipeline modernisation for a national retail brand.' },
  { id: '4', title: 'Data Engineering Manager', company: 'Media House', location: 'Chennai, India', type: 'Hybrid', category: 'AI & Data', salary: '₹35L - ₹55L', posted: '4 days ago', desc: 'Lead a team of data engineers building real-time data pipelines for a global media and entertainment platform.' },
  { id: '5', title: 'Full Stack Engineer', company: 'EdTech Startup', location: 'Remote', type: 'Remote', category: 'IT Recruitment', salary: '£55,000 - £75,000', posted: '5 days ago', desc: 'Build scalable full-stack features on a React/Node.js platform serving 2M+ learners globally.' },
  { id: '6', title: 'Compliance Manager', company: 'Global Bank', location: 'London, UK', type: 'Onsite', category: 'Financial Services', salary: '£70,000 - £90,000', posted: '1 week ago', desc: 'Lead regulatory compliance across GDPR, FCA and PSD2 frameworks for a Tier 1 investment bank.' },
  { id: '7', title: 'Healthcare IT Lead', company: 'NHS Partner', location: 'Birmingham, UK', type: 'Hybrid', category: 'Healthcare', salary: '£65,000 - £80,000', posted: '2 days ago', desc: 'Oversee digital health transformation programmes across multiple NHS Trusts.' },
  { id: '8', title: 'Kubernetes Engineer', company: 'Scale-up SaaS', location: 'Remote', type: 'Remote', category: 'Cloud & DevOps', salary: '£85,000 - £110,000', posted: '3 days ago', desc: 'Architect and manage enterprise Kubernetes clusters on GKE for a high-growth B2B SaaS platform.' },
];

const categories = ['All', 'IT Recruitment', 'AI & Data', 'Cloud & DevOps', 'Financial Services', 'Healthcare'];
const types = ['All', 'Remote', 'Hybrid', 'Onsite'];

const typeBadge: Record<string, string> = {
  Remote: 'bg-green-100 text-green-700',
  Hybrid: 'bg-blue-100 text-blue-700',
  Onsite: 'bg-orange-100 text-orange-700',
};

export default function JobsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');

  const filtered = JOBS.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All' || j.category === category;
    const matchType = type === 'All' || j.type === type;
    return matchSearch && matchCat && matchType;
  });

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Find Jobs' },
        ]}
        badge="Career Opportunities"
        title="Find Your Next"
        titleHighlight="Dream Role"
        subtitle="Explore hundreds of exclusive opportunities across technology, finance, healthcare and more — placed by specialist consultants who understand your sector."
        ctaLabel="Register Interest"
        ctaHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
        imageSrc="/hero-jobs.png"
        imageAlt="Career opportunities"
      />

      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#7A1F5C]/10 border border-[#EFE7DD] mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input
                  type="text"
                  placeholder="Job title, company or keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm text-[#1A1A1A] placeholder:text-[#8A8A8A]"
                />
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <Search size={16} /> Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-72 flex-shrink-0 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#EFE7DD] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={16} className="text-[#7A1F5C]" />
                  <h3 className="font-bold text-[#1A1A1A] text-sm">Category</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setCategory(c)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${category === c ? 'bg-[#7A1F5C] text-white font-semibold' : 'text-[#8A8A8A] hover:bg-[#F5F0E8] hover:text-[#1A1A1A]'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#EFE7DD] shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-4">Work Type</h3>
                <div className="space-y-2">
                  {types.map((t) => (
                    <button key={t} onClick={() => setType(t)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 ${type === t ? 'bg-[#7A1F5C] text-white font-semibold' : 'text-[#8A8A8A] hover:bg-[#F5F0E8] hover:text-[#1A1A1A]'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[#8A8A8A] text-sm"><span className="font-bold text-[#1A1A1A]">{filtered.length}</span> jobs found</p>
              </div>
              <div className="space-y-4">
                {filtered.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-[#EFE7DD]">
                    <p className="text-[#8A8A8A]">No jobs found. Try different filters.</p>
                  </div>
                ) : filtered.map((job, i) => (
                  <motion.div key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-[#EFE7DD] hover:border-[#7A1F5C]/30 hover:shadow-xl hover:shadow-[#7A1F5C]/10 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${typeBadge[job.type]}`}>{job.type}</span>
                          <span className="px-2.5 py-1 rounded-lg bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-semibold">{job.category}</span>
                        </div>
                        <h3 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#7A1F5C] transition-colors duration-200">{job.title}</h3>
                        <p className="text-[#8A8A8A] text-sm mt-1">{job.company}</p>
                        <p className="text-[#8A8A8A] text-sm mt-2 leading-relaxed line-clamp-2">{job.desc}</p>
                        <div className="flex items-center gap-4 mt-4 flex-wrap">
                          <span className="flex items-center gap-1.5 text-[#8A8A8A] text-xs">
                            <MapPin size={12} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-[#8A8A8A] text-xs">
                            <Briefcase size={12} /> {job.salary}
                          </span>
                          <span className="flex items-center gap-1.5 text-[#8A8A8A] text-xs">
                            <Clock size={12} /> {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-3 sm:items-end">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                          Apply Now <ArrowUpRight size={14} />
                        </button>
                        <button className="flex items-center gap-1 text-[#7A1F5C] text-sm font-medium hover:gap-2 transition-all duration-200">
                          Details <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8A8A8A] text-sm">Can&apos;t find the right role? <a href="/contact" className="text-[#7A1F5C] font-semibold hover:underline">Register your interest</a> and our consultants will match you with exclusive opportunities.</p>
        </div>
      </section>
    </>
  );
}
