'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, MapPin, Briefcase, Building2,
  DollarSign, Eye, Send, X, Clock, Globe, MonitorSmartphone,
  LayoutGrid, Users, Code2, HeartPulse, Landmark,
  GraduationCap, ShoppingCart, Factory, Hourglass, Search,
} from 'lucide-react';
import Link from 'next/link';

const API_BASE_URL = 'https://chalkyinfotechserver-awfncucscucnbgah.southindia-01.azurewebsites.net';

// ── Industry definitions ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    slug: 'technology',
    label: 'Technology',
    icon: Code2,
    keywords: ['technology', 'software', 'IT', 'developer', 'engineer', 'data', 'cloud', 'devops', 'tech'],
    desc: 'Software, hardware, cloud & engineering roles across the tech ecosystem.',
    color: '#7A1F5C',
    image: '/industries/technology.png',
  },
  {
    slug: 'healthcare',
    label: 'Healthcare',
    icon: HeartPulse,
    keywords: ['health', 'medical', 'clinical', 'nurse', 'pharma', 'biotech', 'doctor'],
    desc: 'Clinical, pharmaceutical, and health-tech positions.',
    color: '#C2185B',
    image: '/industries/healthcare.png',
  },
  {
    slug: 'finance',
    label: 'Finance',
    icon: Landmark,
    keywords: ['finance', 'banking', 'accounting', 'investment', 'insurance', 'fintech', 'audit'],
    desc: 'Banking, fintech, investment, and accounting opportunities.',
    color: '#7A1F5C',
    image: '/industries/finance.png',
  },
  {
    slug: 'education',
    label: 'Education',
    icon: GraduationCap,
    keywords: ['education', 'teaching', 'school', 'university', 'learning', 'training', 'elearning'],
    desc: 'Teaching, curriculum design, and EdTech roles.',
    color: '#C2185B',
    image: '/industries/education.png',
  },
  {
    slug: 'retail',
    label: 'Retail',
    icon: ShoppingCart,
    keywords: ['retail', 'ecommerce', 'sales', 'merchandising', 'supply chain', 'logistics'],
    desc: 'Retail, e-commerce, and supply chain positions.',
    color: '#7A1F5C',
    image: '/industries/retail.png',
  },
  {
    slug: 'manufacturing',
    label: 'Manufacturing',
    icon: Factory,
    keywords: ['manufacturing', 'production', 'quality', 'operations', 'plant', 'engineering'],
    desc: 'Production, quality, and operations engineering roles.',
    color: '#C2185B',
    image: '/industries/manufacturing.png',
  },
];

// ── Employment types ─────────────────────────────────────────────────────────
const EMP_TYPES = [
  { label: 'Contract', icon: Clock, desc: 'Project-based agile roles', filter: 'Contract' },
  { label: 'Permanent', icon: Briefcase, desc: 'Long-term career moves', filter: 'Full-time' },
  { label: 'Temporary', icon: LayoutGrid, desc: 'Short-term assignments', filter: 'Part-time' },
  { label: 'Remote', icon: Globe, desc: 'Work from anywhere', filter: 'Remote' },
  { label: 'Hybrid', icon: MonitorSmartphone, desc: 'Balanced work models', filter: 'Hybrid' },
  { label: 'Full-Time', icon: Users, desc: 'Standard 40h/week', filter: 'Full-time' },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function truncate(str: string, words = 20) {
  if (!str) return '';
  const arr = str.split(' ');
  return arr.length <= words ? str : arr.slice(0, words).join(' ') + '…';
}

function Pill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-gray-500">
      <Icon size={11} className="text-gray-400 shrink-0" />
      {label}
    </span>
  );
}

// ── Mini job card (list row) ─────────────────────────────────────────────────
function MiniJobRow({ job, onOpen }: { job: any; onOpen: (j: any) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3 bg-white border border-gray-200 hover:border-[#7A1F5C]/30 hover:shadow-sm transition-all"
    >
      <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onOpen(job)}>
        <p className="text-sm font-medium text-[#1A1A1A] leading-snug mb-1">{job.position}</p>
        {job.description && (
          <p className="text-xs text-gray-400 leading-relaxed mb-1.5 line-clamp-1">
            {truncate(job.description, 15)}
          </p>
        )}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <Pill icon={MapPin} label={job.location || 'Anywhere'} />
          <Pill icon={Briefcase} label={job.experience || 'Entry level'} />
          <Pill icon={Building2} label={job.workMode || 'N/A'} />
          <Pill icon={DollarSign} label={job.salaryRange || 'Competitive'} />
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onOpen(job)}
          className="text-xs text-[#7A1F5C] font-medium hover:underline flex items-center gap-1"
        >
          <Eye size={12} /> View
        </button>
        <a
          href={job.jobApplyUrlById || job.applyUrls?.byId || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { if (!(job.jobApplyUrlById || job.applyUrls?.byId)) e.preventDefault(); }}
          className="inline-flex items-center gap-1.5 bg-[#7A1F5C] text-white text-xs font-semibold px-3 py-1.5 rounded-none hover:bg-[#C2185B] transition-colors tracking-wide"
        >
          Apply <Send size={10} />
        </a>
      </div>
    </motion.div>
  );
}

// ── Job detail modal ─────────────────────────────────────────────────────────
function JobModal({ job, onClose }: { job: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col max-h-[82vh] rounded-none"
      >
        <div className="flex items-start justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-sm font-semibold text-[#1A1A1A] leading-tight mb-0.5">{job.position}</h2>
            <p className="text-xs text-[#7A1F5C] font-medium">{job.companyName || 'Chalky Infotech'}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 ml-4 mt-0.5"><X size={16} /></button>
        </div>

        <div className="px-5 py-2.5 bg-[#fafafa] border-b border-gray-100 flex flex-wrap gap-x-4 gap-y-1.5 shrink-0">
          <Pill icon={MapPin} label={job.location || 'N/A'} />
          <Pill icon={Briefcase} label={job.experience || 'N/A'} />
          <Pill icon={Clock} label={job.employmentType || 'N/A'} />
          <Pill icon={Building2} label={job.workMode || 'N/A'} />
          <Pill icon={DollarSign} label={job.salaryRange || 'N/A'} />
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-4">
          {job.description && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Description</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{job.description}</p>
            </div>
          )}
          {job.requiredSkills?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Required Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {job.requiredSkills.map((s: string, i: number) => (
                  <span key={i} className="text-xs px-3 py-1 border border-[#7A1F5C]/25 text-[#7A1F5C]">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-3.5 border-t border-gray-100 shrink-0 flex gap-2">
          <a
            href={job.jobApplyUrlById || job.applyUrls?.byId || '#'}
            target="_blank" rel="noopener noreferrer"
            onClick={(e) => { if (!(job.jobApplyUrlById || job.applyUrls?.byId)) e.preventDefault(); }}
            className="flex items-center gap-2 bg-[#7A1F5C] text-white px-5 py-2 text-xs font-semibold rounded-none hover:bg-[#C2185B] transition-colors tracking-wide"
          >
            <Send size={12} /> Apply Now
          </a>
          <button onClick={onClose} className="px-5 py-2 border border-gray-200 text-xs text-gray-600 font-medium rounded-none hover:border-gray-400 transition-colors">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// BrowseIndustries  main export
// ═════════════════════════════════════════════════════════════════════════════
export function BrowseIndustries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [jobSearch, setJobSearch] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeIndustry = INDUSTRIES[activeIndex];

  // auto-rotate
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (jobSearch) return; // Stop auto-scroll when user is actively searching
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [activeIndex]);

  useEffect(() => {
    if (jobSearch) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      resetTimer();
    }
  }, [jobSearch]);

  const handlePrev = () => { setActiveIndex((p) => (p === 0 ? INDUSTRIES.length - 1 : p - 1)); resetTimer(); };
  const handleNext = () => { setActiveIndex((p) => (p + 1) % INDUSTRIES.length); resetTimer(); };

  const clickIndustry = (i: number) => {
    setActiveIndex(i);
    setJobSearch('');
    resetTimer();
  };

  // fetch jobs once
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/requirements/public`);
        const data = await res.json();
        if (data.success) {
          setAllJobs(data.data.filter((j: any) =>
            j.status === 'Active' && (!j.deadline || new Date(j.deadline) > new Date())
          ));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingJobs(false);
      }
    })();
  }, []);

  // filter jobs for active industry
  const industryJobs = allJobs.filter((job) => {
    const haystack = [
      job.position, job.description, job.companyName,
      ...(job.requiredSkills || []),
    ].join(' ').toLowerCase();
    const matches = activeIndustry.keywords.some((kw) => haystack.includes(kw.toLowerCase()));
    if (!matches) return false;
    if (!jobSearch) return true;
    return haystack.includes(jobSearch.toLowerCase());
  });

  const openJob = (job: any) => {
    setSelectedJob(job);
    document.body.style.overflow = 'hidden';
  };
  const closeJob = () => {
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-white border-b border-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            <span className="text-[#7A1F5C]">Browse</span>{' '}
            <span className="text-[#1A1A1A]">By Industry</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Select an industry to explore open roles tailored to your expertise. Chalky Infotech places
            top talent across the world's fastest-growing sectors.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative h-[200px] flex items-center justify-center w-full mb-2">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-30 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <ArrowLeft size={18} className="text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 z-30 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <ArrowRight size={18} className="text-gray-600" />
          </button>

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {INDUSTRIES.map((ind, index) => {
              let diff = index - activeIndex;
              if (diff > INDUSTRIES.length / 2) diff -= INDUSTRIES.length;
              if (diff < -INDUSTRIES.length / 2) diff += INDUSTRIES.length;
              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;
              if (!isVisible) return null;

              const xOffset = diff * 200;
              const scale = isCenter ? 1.25 : 1 - Math.abs(diff) * 0.15;
              const opacity = isCenter ? 1 : 1 - Math.abs(diff) * 0.4;
              const zIndex = 10 - Math.abs(diff);
              const Icon = ind.icon;

              return (
                <motion.div
                  key={ind.slug}
                  animate={{ x: xOffset, scale, opacity, zIndex }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  className="absolute flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => clickIndustry(index)}
                >
                  {/* circle */}
                  <div
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isCenter
                        ? 'w-28 h-28 bg-[#7A1F5C]/8'
                        : 'w-20 h-20 bg-[#F5F0E8]'
                      }`}
                  >
                    {/* icon backdrop */}
                    <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${isCenter ? 'w-16 h-16 bg-[#7A1F5C]' : 'w-12 h-12 bg-white border border-gray-200'
                      }`}>
                      <Icon size={isCenter ? 28 : 20} className={isCenter ? 'text-white' : 'text-[#7A1F5C] opacity-50'} />
                    </div>

                    {/* rotating ring for active */}
                    {isCenter && (
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(122,31,92,0.15)" strokeWidth="2" />
                        <motion.circle
                          cx="50" cy="50" r="48"
                          fill="none" stroke="#7A1F5C" strokeWidth="2.5" strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, ease: 'linear' }}
                          key={activeIndex}
                        />
                      </svg>
                    )}
                  </div>

                  {/* label below */}
                  <p className={`mt-3 text-xs font-semibold text-center transition-colors ${isCenter ? 'text-[#7A1F5C]' : 'text-gray-400'
                    }`}>
                    {ind.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Active industry info ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-10"
          >
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">{activeIndustry.label}</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">{activeIndustry.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* ── Jobs panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.slug + '-jobs'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* mini search bar */}
            <div className="flex items-center gap-2 bg-[#F9F9F9] border border-gray-200 px-4 py-2.5 mb-4 max-w-md mx-auto">
              <Search size={14} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder={`Search ${activeIndustry.label} jobs…`}
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
              />
              {jobSearch && (
                <button onClick={() => setJobSearch('')} className="text-gray-400 hover:text-gray-700">
                  <X size={13} />
                </button>
              )}
            </div>

            {loadingJobs ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#7A1F5C]" />
              </div>
            ) : industryJobs.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-gray-200">
                <p className="text-gray-400 text-sm">
                  {jobSearch
                    ? `No results for "${jobSearch}" in ${activeIndustry.label}.`
                    : `No active ${activeIndustry.label} roles right now  check back soon.`}
                </p>
                <Link href="#search" className="mt-3 inline-block text-xs text-[#7A1F5C] font-semibold hover:underline">
                  Browse all jobs →
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-[#1A1A1A]">{industryJobs.length}</span> {activeIndustry.label} role{industryJobs.length !== 1 ? 's' : ''} found
                  </p>
                  <Link href="#search" className="text-xs text-[#7A1F5C] font-semibold hover:underline flex items-center gap-1">
                    View all jobs <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="flex flex-col gap-0 divide-y divide-gray-100 border border-gray-200">
                  <AnimatePresence>
                    {industryJobs.slice(0, 6).map((job) => (
                      <MiniJobRow key={job._id} job={job} onOpen={openJob} />
                    ))}
                  </AnimatePresence>
                </div>

                {industryJobs.length > 6 && (
                  <div className="mt-4 text-center">
                    <Link
                      href="#search"
                      className="inline-flex items-center gap-2 border border-[#7A1F5C] text-[#7A1F5C] text-xs font-semibold px-6 py-2.5 rounded-none hover:bg-[#7A1F5C] hover:text-white transition-colors tracking-wide"
                    >
                      +{industryJobs.length - 6} more {activeIndustry.label} jobs <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && <JobModal job={selectedJob} onClose={closeJob} />}
      </AnimatePresence>
    </section>
  );
}


// ═════════════════════════════════════════════════════════════════════════════
// EmploymentTypes  carousel + live job panel (mirrors BrowseIndustries)
// ═════════════════════════════════════════════════════════════════════════════
export function EmploymentTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [jobSearch, setJobSearch] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeType = EMP_TYPES[activeIndex];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (jobSearch) return; // Stop auto-scroll when user is actively searching
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EMP_TYPES.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [activeIndex]);

  useEffect(() => {
    if (jobSearch) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      resetTimer();
    }
  }, [jobSearch]);

  const handlePrev = () => { setActiveIndex((p) => (p === 0 ? EMP_TYPES.length - 1 : p - 1)); resetTimer(); };
  const handleNext = () => { setActiveIndex((p) => (p + 1) % EMP_TYPES.length); resetTimer(); };

  const clickType = (i: number) => {
    setActiveIndex(i);
    setJobSearch('');
    resetTimer();
  };

  // fetch jobs once
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/requirements/public`);
        const data = await res.json();
        if (data.success) {
          setAllJobs(data.data.filter((j: any) =>
            j.status === 'Active' && (!j.deadline || new Date(j.deadline) > new Date())
          ));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingJobs(false);
      }
    })();
  }, []);

  // filter by employment type
  const typeJobs = allJobs.filter((job) => {
    const empField = (job.employmentType || '').toLowerCase();
    const filterVal = activeType.filter.toLowerCase();
    const matches = empField.includes(filterVal) || filterVal.includes(empField.split('-')[0]);
    if (!matches) return false;
    if (!jobSearch) return true;
    const haystack = [job.position, job.description, ...(job.requiredSkills || [])].join(' ').toLowerCase();
    return haystack.includes(jobSearch.toLowerCase());
  });

  const openJob = (job: any) => {
    setSelectedJob(job);
    document.body.style.overflow = 'hidden';
  };
  const closeJob = () => {
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            <span className="text-[#7A1F5C]">Browse</span>{' '}
            <span className="text-[#1A1A1A]">By Employment Type</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Find the perfect work model for your lifestyle. Select an employment type to
            discover roles that match your preferred way of working.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative h-[200px] flex items-center justify-center w-full mb-2">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-30 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <ArrowLeft size={18} className="text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 z-30 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            <ArrowRight size={18} className="text-gray-600" />
          </button>

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {EMP_TYPES.map((type, index) => {
              let diff = index - activeIndex;
              if (diff > EMP_TYPES.length / 2) diff -= EMP_TYPES.length;
              if (diff < -EMP_TYPES.length / 2) diff += EMP_TYPES.length;
              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;
              if (!isVisible) return null;

              const xOffset = diff * 200;
              const scale = isCenter ? 1.25 : 1 - Math.abs(diff) * 0.15;
              const opacity = isCenter ? 1 : 1 - Math.abs(diff) * 0.4;
              const zIndex = 10 - Math.abs(diff);
              const Icon = type.icon;

              return (
                <motion.div
                  key={type.label}
                  animate={{ x: xOffset, scale, opacity, zIndex }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  className="absolute flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => clickType(index)}
                >
                  <div
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isCenter ? 'w-28 h-28 bg-[#7A1F5C]/8' : 'w-20 h-20 bg-white border border-gray-100'
                      }`}
                  >
                    <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${isCenter ? 'w-16 h-16 bg-[#7A1F5C]' : 'w-12 h-12 bg-[#F5F0E8] border border-gray-200'
                      }`}>
                      <Icon size={isCenter ? 28 : 20} className={isCenter ? 'text-white' : 'text-[#7A1F5C] opacity-50'} />
                    </div>

                    {isCenter && (
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(122,31,92,0.15)" strokeWidth="2" />
                        <motion.circle
                          cx="50" cy="50" r="48"
                          fill="none" stroke="#7A1F5C" strokeWidth="2.5" strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, ease: 'linear' }}
                          key={activeIndex}
                        />
                      </svg>
                    )}
                  </div>

                  <p className={`mt-3 text-xs font-semibold text-center transition-colors ${isCenter ? 'text-[#7A1F5C]' : 'text-gray-400'
                    }`}>
                    {type.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Active type info ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-center mb-10"
          >
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">{activeType.label}</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">{activeType.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* ── Jobs panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.label + '-jobs'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* mini search */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 mb-4 max-w-md mx-auto">
              <Search size={14} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder={`Search ${activeType.label} jobs…`}
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
              />
              {jobSearch && (
                <button onClick={() => setJobSearch('')} className="text-gray-400 hover:text-gray-700">
                  <X size={13} />
                </button>
              )}
            </div>

            {loadingJobs ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#7A1F5C]" />
              </div>
            ) : typeJobs.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-gray-200 rounded-xl">
                <p className="text-gray-400 text-sm">
                  {jobSearch
                    ? `No results for "${jobSearch}" in ${activeType.label}.`
                    : `No active ${activeType.label} roles right now  check back soon.`}
                </p>
                <Link href="#search" className="mt-3 inline-block text-xs text-[#7A1F5C] font-semibold hover:underline">
                  Browse all jobs →
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-[#1A1A1A]">{typeJobs.length}</span> {activeType.label} role{typeJobs.length !== 1 ? 's' : ''} found
                  </p>
                  <Link href="#search" className="text-xs text-[#7A1F5C] font-semibold hover:underline flex items-center gap-1">
                    View all jobs <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="flex flex-col gap-0 divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
                  <AnimatePresence>
                    {typeJobs.slice(0, 6).map((job) => (
                      <MiniJobRow key={job._id} job={job} onOpen={openJob} />
                    ))}
                  </AnimatePresence>
                </div>

                {typeJobs.length > 6 && (
                  <div className="mt-4 text-center">
                    <Link
                      href="#search"
                      className="inline-flex items-center gap-2 border border-[#7A1F5C] text-[#7A1F5C] text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#7A1F5C] hover:text-white transition-colors"
                    >
                      +{typeJobs.length - 6} more {activeType.label} jobs <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && <JobModal job={selectedJob} onClose={closeJob} />}
      </AnimatePresence>
    </section>
  );
}

