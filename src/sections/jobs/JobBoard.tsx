'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Briefcase, Clock, ChevronDown, Star,
  Calendar, DollarSign, Building2, Hourglass, X, Eye,
  Send, Award, FileText, LayoutList, LayoutGrid
} from 'lucide-react';

const API_BASE_URL = 'https://chalkyinfotechserver-awfncucscucnbgah.southindia-01.azurewebsites.net';
const WORK_MODES = ['All', 'On-site', 'Remote', 'Hybrid'];
const EMP_TYPES = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];

// ── helpers ──────────────────────────────────────────────────────────────────
function truncate(str: string, words = 18) {
  if (!str) return '';
  const arr = str.split(' ');
  return arr.length <= words ? str : arr.slice(0, words).join(' ') + '…';
}

// ── Meta pill ────────────────────────────────────────────────────────────────
function Pill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-gray-500 font-normal">
      <Icon size={12} className="text-gray-400 shrink-0" />
      {label}
    </span>
  );
}

// ── Apply button (rounded, professional) ────────────────────────────────────
function ApplyBtn({ href }: { href: string }) {
  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { if (!href || href === '#') e.preventDefault(); }}
      className="inline-flex items-center gap-1.5 bg-[#7A1F5C] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#C2185B] transition-colors"
    >
      Apply
    </a>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
export default function JobBoard() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list'); // list default
  const [now, setNow] = useState(Date.now());

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [workMode, setWorkMode] = useState('All');
  const [empType, setEmpType] = useState('All');
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (job: any) => {
    setSelectedJob(job);
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };
  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSelectedJob(null), 300);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    setNow(Date.now());
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/requirements/public`);
        const data = await res.json();
        if (data.success) {
          const currentNow = Date.now();
          setJobs(
            data.data.filter((j: any) =>
              j.status === 'Active' && (!j.deadline || new Date(j.deadline).getTime() > currentNow)
            )
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = jobs.filter(j => {
    const sMatch =
      (j.position || '').toLowerCase().includes(search.toLowerCase()) ||
      (j.companyName || '').toLowerCase().includes(search.toLowerCase()) ||
      (j.requiredSkills || []).some((s: string) => s.toLowerCase().includes(search.toLowerCase()));
    return (
      sMatch &&
      (location === '' || (j.location || '').toLowerCase().includes(location.toLowerCase())) &&
      (experience === '' || (j.experience || '').toLowerCase().includes(experience.toLowerCase())) &&
      (workMode === 'All' || j.workMode === workMode) &&
      (empType === 'All' || j.employmentType === empType)
    );
  });

  const toggleFilter = (f: string) => setOpenFilter(openFilter === f ? null : f);
  const clearAll = () => { setSearch(''); setLocation(''); setExperience(''); setWorkMode('All'); setEmpType('All'); };

  // ── Card view ──────────────────────────────────────────────────────────────
  const CardItem = ({ job }: { job: any }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.18 }}
      onClick={() => openPopup(job)}
      className="cursor-pointer bg-white rounded-2xl border border-gray-200 hover:border-[#7A1F5C]/30 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden shadow-sm"
    >
      {/* top badge row */}
      <div className="flex justify-between items-center px-5 pt-4 pb-3">
        {job.deadline && new Date(job.deadline).getTime() < now + 7 * 86400000 ? (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            Closing Soon
          </span>
        ) : <span />}
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:text-[#7A1F5C] hover:border-[#7A1F5C]/30 transition-colors"
        >
          <Star size={13} />
        </button>
      </div>

      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2 leading-snug line-clamp-2">
          {job.position}
        </h3>

        {/* description snippet */}
        {job.description && (
          <p className="text-xs text-gray-400 font-normal leading-relaxed mb-4 line-clamp-2">
            {truncate(job.description, 15)}
          </p>
        )}

        {/* meta grid  2 col like reference image */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { icon: Calendar, label: job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Continuous' },
            { icon: MapPin, label: job.location || 'Anywhere' },
            { icon: DollarSign, label: job.salaryRange || 'Competitive' },
            { icon: Building2, label: job.workMode || 'N/A' },
            { icon: Briefcase, label: job.experience || 'Entry level' },
            { icon: Hourglass, label: job.employmentType || 'Full time' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-2 text-xs text-gray-500 truncate">
              <Icon size={11} className="text-gray-400 shrink-0" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <button
            onClick={(e) => { e.stopPropagation(); openPopup(job); }}
            className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#7A1F5C] transition-colors"
          >
            Read more
            <span className="w-6 h-6 rounded-full bg-[#7A1F5C] flex items-center justify-center">
              <ChevronDown size={12} className="text-white -rotate-90" />
            </span>
          </button>
          <ApplyBtn href={job.jobApplyUrlById || job.applyUrls?.byId || '#'} />
        </div>
      </div>
    </motion.div>
  );

  // ── List view ──────────────────────────────────────────────────────────────
  const ListItem = ({ job }: { job: any }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
      className="bg-white rounded-xl border border-gray-200 hover:border-[#7A1F5C]/30 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4">

        {/* Left: title + snippet + pills */}
        <div
          className="flex-1 min-w-0 cursor-pointer"
          onClick={() => openPopup(job)}
        >
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug">
              {job.position}
            </h3>
            {job.deadline && new Date(job.deadline).getTime() < now + 7 * 86400000 && (
              <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                Closing Soon
              </span>
            )}
          </div>

          {/* description snippet */}
          {job.description && (
            <p className="text-xs text-gray-400 font-normal leading-relaxed mb-2 line-clamp-1">
              {truncate(job.description, 20)}
            </p>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Pill icon={MapPin} label={job.location || 'Anywhere'} />
            <Pill icon={Briefcase} label={job.experience || 'Entry level'} />
            <Pill icon={Hourglass} label={job.employmentType || 'Full time'} />
            <Pill icon={Building2} label={job.workMode || 'N/A'} />
            <Pill icon={DollarSign} label={job.salaryRange || 'Competitive'} />
            <Pill icon={Calendar} label={job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Continuous'} />
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => openPopup(job)}
            className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#7A1F5C] transition-colors whitespace-nowrap"
          >
            Read more
            <span className="w-6 h-6 rounded-full bg-[#7A1F5C] flex items-center justify-center">
              <ChevronDown size={12} className="text-white -rotate-90" />
            </span>
          </button>
          <ApplyBtn href={job.jobApplyUrlById || job.applyUrls?.byId || '#'} />
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 hover:text-[#7A1F5C] hover:border-[#7A1F5C]/30 transition-colors">
            <Star size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <section id="search" className="py-20 bg-[#f9f9f9] relative min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-6">
                Search for your <br />
                <span className="text-[#7A1F5C]">Next Career Role</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#7A1F5C] rounded-full" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Connect with roles that align your passion for impact with your professional expertise.
              Explore exclusive opportunities across technology, healthcare, and finance.
            </p>
          </div>

          {/* Search bar */}
          <div className="bg-white p-2 flex flex-col md:flex-row gap-2 border border-gray-100 rounded-2xl shadow-sm">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder='Try "Head of Sustainability"'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm text-[#1A1A1A] outline-none bg-transparent placeholder:text-gray-400 rounded-xl"
              />
            </div>
            <div className="w-px bg-gray-100 hidden md:block" />
            <div className="flex-1 relative">
              <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Any Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm text-[#1A1A1A] outline-none bg-transparent placeholder:text-gray-400 rounded-xl"
              />
            </div>
            <button className="bg-[#7A1F5C] text-white px-8 py-3 text-sm font-semibold rounded-xl hover:bg-[#C2185B] transition-colors flex items-center gap-2 shrink-0">
              <Search size={15} /> Search
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8">

          {/* ── Filter Sidebar ── */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Sort by</h3>
                <div className="border-b border-gray-200 pb-2 flex justify-between items-center cursor-pointer">
                  <span className="text-sm text-gray-600">Newest</span>
                  <ChevronDown size={15} className="text-gray-400" />
                </div>
              </div>

              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Filter</h3>
              <div className="space-y-0">
                {[
                  {
                    key: 'keyword', label: 'Keyword', render: () => (
                      <input type="text" placeholder="e.g. Developer" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border border-gray-200 text-xs outline-none focus:border-[#7A1F5C]" />
                    )
                  },
                  {
                    key: 'location', label: 'Location', render: () => (
                      <input type="text" placeholder="e.g. Bangalore" value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border border-gray-200 text-xs outline-none focus:border-[#7A1F5C]" />
                    )
                  },
                  {
                    key: 'workMode', label: 'Work Mode', render: () => (
                      <div className="flex flex-col gap-2">
                        {WORK_MODES.map(m => (
                          <label key={m} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="workMode" value={m} checked={workMode === m}
                              onChange={() => setWorkMode(m)} className="accent-[#7A1F5C]" />
                            {m}
                          </label>
                        ))}
                      </div>
                    )
                  },
                  {
                    key: 'empType', label: 'Type', render: () => (
                      <div className="flex flex-col gap-2">
                        {EMP_TYPES.map(t => (
                          <label key={t} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="empType" value={t} checked={empType === t}
                              onChange={() => setEmpType(t)} className="accent-[#7A1F5C]" />
                            {t}
                          </label>
                        ))}
                      </div>
                    )
                  },
                  {
                    key: 'experience', label: 'Experience', render: () => (
                      <input type="text" placeholder="e.g. 3-5 years" value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full p-2 border border-gray-200 text-xs outline-none focus:border-[#7A1F5C]" />
                    )
                  },
                ].map(({ key, label, render }) => (
                  <div key={key} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleFilter(key)}
                      className="w-full flex justify-between items-center py-3.5 text-sm text-[#1A1A1A] hover:text-[#7A1F5C] transition-colors"
                    >
                      {label}
                      <ChevronDown size={14} className={`transition-transform text-gray-400 ${openFilter === key ? 'rotate-180' : ''}`} />
                    </button>
                    {openFilter === key && <div className="pb-4">{render()}</div>}
                  </div>
                ))}
              </div>

              <button
                onClick={clearAll}
                className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#7A1F5C] transition-colors"
              >
                <X size={12} /> Clear all filters
              </button>
            </div>
          </div>

          {/* ── Job Listings ── */}
          <div className="flex-1 min-w-0">

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-[#1A1A1A]">{filtered.length}</span> results
              </span>
              {/* View toggle */}
              <div className="flex items-center gap-1 border border-gray-200 p-0.5">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#7A1F5C] text-white' : 'text-gray-400 hover:text-gray-700'}`}
                  title="List view"
                >
                  <LayoutList size={15} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 transition-colors ${viewMode === 'grid' ? 'bg-[#7A1F5C] text-white' : 'text-gray-400 hover:text-gray-700'}`}
                  title="Card view"
                >
                  <LayoutGrid size={15} />
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-32">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#7A1F5C]" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-32">
                <p className="text-gray-400 text-base">No active jobs match your filters right now.</p>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                {viewMode === 'list' ? (
                  <div className="flex flex-col gap-3">
                    {filtered.map((job) => <ListItem key={job._id} job={job} />)}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {filtered.map((job) => <CardItem key={job._id} job={job} />)}
                  </div>
                )}
              </AnimatePresence>
            )}

            {/* Pagination row */}
            {!loading && filtered.length > 0 && (
              <div className="flex items-center gap-3 text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
                <span className="font-medium text-gray-600">{filtered.length} results</span>
                <span>·</span>
                <span>Show</span>
                <select className="border-b border-gray-300 outline-none bg-transparent text-gray-600 text-xs">
                  <option>10</option><option>20</option><option>50</option>
                </select>
                <span>per page</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Job Detail Modal ── */}
      <AnimatePresence>
        {showPopup && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white shadow-2xl flex flex-col max-h-[85vh] rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100 shrink-0">
                <div>
                  <h2 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-0.5">
                    {selectedJob.position}
                  </h2>
                  <p className="text-xs text-[#7A1F5C] font-medium">
                    {selectedJob.companyName || 'Chalky Infotech'}
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-colors ml-4 shrink-0"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Meta strip */}
              <div className="px-6 py-3 bg-[#fafafa] border-b border-gray-100 flex flex-wrap gap-x-5 gap-y-1.5 shrink-0">
                <Pill icon={MapPin} label={selectedJob.location || 'Not specified'} />
                <Pill icon={Briefcase} label={selectedJob.experience || 'Not specified'} />
                <Pill icon={Clock} label={selectedJob.employmentType || 'Not specified'} />
                <Pill icon={Building2} label={selectedJob.workMode || 'Not specified'} />
                <Pill icon={DollarSign} label={selectedJob.salaryRange || 'Not disclosed'} />
                <Pill icon={Calendar} label={selectedJob.deadline ? new Date(selectedJob.deadline).toLocaleDateString() : 'Open'} />
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 px-6 py-5">

                {/* Description */}
                {selectedJob.description && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <FileText size={12} /> Description
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {selectedJob.description}
                    </p>
                  </div>
                )}

                {/* Qualification */}
                {selectedJob.qualification && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Award size={12} /> Qualification
                    </h4>
                    <p className="text-sm text-gray-600">{selectedJob.qualification}</p>
                  </div>
                )}

                {/* Skills */}
                {selectedJob.requiredSkills?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Award size={12} /> Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedJob.requiredSkills.map((s: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-[#7A1F5C]/20 text-[#7A1F5C] font-medium bg-[#7A1F5C]/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 shrink-0 flex gap-3">
                <a
                  href={selectedJob.jobApplyUrlById || selectedJob.applyUrls?.byId || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!(selectedJob.jobApplyUrlById || selectedJob.applyUrls?.byId)) e.preventDefault();
                  }}
                  className="flex items-center gap-2 bg-[#7A1F5C] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C2185B] transition-colors"
                >
                  <Send size={14} /> Apply Now
                </a>
                <button
                  onClick={closePopup}
                  className="px-6 py-2.5 border border-gray-200 rounded-full text-sm text-gray-600 font-medium hover:border-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
