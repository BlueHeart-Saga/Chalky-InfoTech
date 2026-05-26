'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, UploadCloud, MapPin, Users, ArrowRight } from 'lucide-react';
import { sendEmail } from '@/services/sendmail';

// ─── Office data ────────────────────────────────────────────────────────────
const OFFICES = [
  {
    id: 'london',
    label: 'A',
    city: 'London',
    subtitle: 'United Kingdom Office',
    address: '128, City Road, London EC1V 2NX',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8!2d-0.0877!3d51.5266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca5b5b5b5b5%3A0x1!2s128+City+Rd%2C+London+EC1V+2NX!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk',
    mapUrl: 'https://maps.google.com/?q=128+City+Road+London+EC1V+2NX',
  },
  {
    id: 'thoothukudi',
    label: 'B',
    city: 'Thoothukudi',
    subtitle: 'India Development Center',
    address: '4/392, Rajeev Colony, Passuvanthani, Tamil Nadu',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907!2d78.1348!3d8.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef5b!2sPassuvanthani!5e0!3m2!1sen!2sin!4v1620000000001!5m2!1sen!2sin',
    mapUrl: 'https://maps.google.com/?q=Rajeev+Colony+Passuvanthani+Thoothukudi+Tamil+Nadu',
  },
  {
    id: 'chennai',
    label: 'C',
    city: 'Chennai',
    subtitle: 'Chennai Corporate Office',
    address: '110, Manickan Lane, Anna Salai, Opp Guindy, Chennai – 600 032',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887!2d80.2209!3d13.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526!2sAnna+Salai!5e0!3m2!1sen!2sin!4v1620000000002!5m2!1sen!2sin',
    mapUrl: 'https://maps.google.com/?q=110+Manickan+Lane+Anna+Salai+Guindy+Chennai',
  },
];

// ─── Step indicator ──────────────────────────────────────────────────────────
function StepDot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div
      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${done ? 'bg-[#7A1F5C]' : active ? 'bg-[#7A1F5C] scale-125' : 'bg-gray-300'
        }`}
    />
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function JobsCVUpload() {
  const [step, setStep] = useState(1); // 1 | 2 | 3 | 4
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileObj, setFileObj] = useState<File | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFileObj(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const officeCity = OFFICES.find((o) => o.id === selectedOffice)?.city || 'Global';
      await sendEmail({
        fullName,
        email,
        subject: `CV Upload - ${officeCity} Office`,
        message: `Candidate Name: ${fullName}\nEmail Address: ${email}\nPhone Number: ${phone}\nOffice Selected: ${officeCity}`,
        serviceType: 'Job Application',
        file: fileObj || undefined
      });
      setStep(4);
    } catch (error) {
      console.error(error);
      alert('Failed to send application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOfficeSelect = (id: string) => {
    setSelectedOffice(id);
    // Auto-advance after a brief moment so user sees the selection
    setTimeout(() => setStep(3), 600);
  };

  const reset = () => {
    setStep(1);
    setSelectedOffice(null);
    setFileName('');
    setFileObj(null);
    setFullName('');
    setEmail('');
    setPhone('');
  };

  // Slide direction: going forward = slide left, back = slide right
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-6">
              Can't find a <br />
              <span className="text-[#7A1F5C]">Suitable Role?</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#7A1F5C] rounded-full" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Use this form to submit your CV and join our elite talent pool. We actively match
            candidates with exclusive, unlisted opportunities across our global network of top-tier firms.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div className="flex flex-col lg:flex-row bg-[#F4F7FB] rounded-3xl overflow-hidden relative shadow-sm border border-gray-100 min-h-[520px]">

          {/* ── LEFT: Wizard ── */}
          <div className="w-full lg:w-3/5 p-10 lg:p-16 flex flex-col justify-between relative z-10">

            {/* Step dots */}
            {step < 4 && (
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <StepDot key={s} active={step === s} done={step > s} />
                ))}
                <span className="ml-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                  Step {step} of 3
                </span>
              </div>
            )}

            <AnimatePresence mode="wait" custom={1}>
              {step === 1 ? (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex flex-col flex-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#7A1F5C]/10 flex items-center justify-center mb-6">
                    <Users size={28} className="text-[#7A1F5C]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 leading-snug">
                    Connect with a<br />
                    <span className="text-[#7A1F5C]">Chalky Consultant</span>
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-sm">
                    Whether you're enquiring about how Chalky can help you grow your team or
                    wanting to submit a CV, this form will connect you to the right team.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="group flex items-center gap-3 bg-[#7A1F5C] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#C2185B] transition-all shadow-lg shadow-[#7A1F5C]/20"
                    >
                      Continue
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ChevronRight size={14} />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex flex-col flex-1"
                >
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Which office are you contacting?
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Select a location - we'll route you to the right team.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {OFFICES.map((office) => (
                      <button
                        key={office.id}
                        type="button"
                        onClick={() => handleOfficeSelect(office.id)}
                        className={`group text-left rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selectedOffice === office.id
                            ? 'border-[#7A1F5C] shadow-xl shadow-[#7A1F5C]/10'
                            : 'border-gray-200 bg-white hover:border-[#7A1F5C]/40'
                          }`}
                      >
                        {/* Map thumbnail */}
                        <div className="relative w-full h-28 bg-gray-100 overflow-hidden">
                          <iframe
                            src={office.mapSrc}
                            width="100%"
                            height="112"
                            style={{ border: 0, pointerEvents: 'none' }}
                            loading="lazy"
                            title={`${office.city} map`}
                          />
                          {/* "Maps" link */}
                          <a
                            href={office.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-2 left-2 flex items-center gap-1 bg-white text-xs font-semibold text-blue-600 px-2 py-1 rounded-md shadow-sm hover:bg-blue-50 transition-colors"
                          >
                            Maps <ArrowRight size={10} />
                          </a>
                          {/* Selection overlay */}
                          {selectedOffice === office.id && (
                            <div className="absolute inset-0 bg-[#7A1F5C]/10 flex items-center justify-center">
                              <CheckCircle2 size={24} className="text-[#7A1F5C]" />
                            </div>
                          )}
                        </div>

                        {/* Label */}
                        <div className="p-3 bg-white">
                          <div className="flex items-start gap-2 mb-1">
                            <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                              {office.label}
                            </span>
                            <div>
                              <p className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#7A1F5C] transition-colors">
                                {office.city}
                              </p>
                              <p className="text-[#7A1F5C] text-[10px] font-bold">{office.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-[10px] text-gray-500 leading-relaxed pl-7">{office.address}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#7A1F5C] font-semibold transition-colors mt-auto"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                </motion.div>
              ) : step === 3 ? (
                <motion.form
                  key="step3"
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  onSubmit={handleSubmit}
                  className="flex flex-col flex-1"
                >
                  {/* Office badge */}
                  {selectedOffice && (
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin size={14} className="text-[#7A1F5C]" />
                      <span className="text-xs font-bold text-[#7A1F5C] uppercase tracking-wider">
                        {OFFICES.find((o) => o.id === selectedOffice)?.city} Office
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Submit your CV</h3>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                    Join our talent pool. We actively match candidates with opportunities,
                    providing timely feedback and guidance.
                  </p>

                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A1F5C]/50 focus:ring-2 focus:ring-[#7A1F5C]/10 bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A1F5C]/50 focus:ring-2 focus:ring-[#7A1F5C]/10 bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A1F5C]/50 focus:ring-2 focus:ring-[#7A1F5C]/10 bg-white transition-colors"
                        placeholder="e.g. +44 20 7946 0958"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Upload CV (PDF/Word) *</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-5 flex flex-col items-center justify-center bg-white hover:border-[#7A1F5C]/50 transition-colors cursor-pointer overflow-hidden">
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <UploadCloud size={24} className={fileName ? 'text-[#7A1F5C] mb-2' : 'text-gray-400 mb-2'} />
                        <span className="text-xs font-medium text-center px-4 truncate w-full text-center">
                          {fileName ? (
                            <span className="text-[#7A1F5C]">{fileName}</span>
                          ) : (
                            <span className="text-gray-500">Click or drag file to upload</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-3 bg-[#7A1F5C] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#C2185B] transition-all shadow-lg shadow-[#7A1F5C]/20 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit CV'}
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30">
                        <ChevronRight size={14} />
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#7A1F5C] font-semibold transition-colors"
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="step4"
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex flex-col flex-1 justify-center"
                >
                  <div className="w-16 h-16 bg-[#7A1F5C]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[#7A1F5C]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">Thank You!</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg max-w-sm">
                    Your CV has been successfully uploaded. Our team will review your profile and
                    contact you shortly regarding matching opportunities.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="flex items-center gap-2 text-sm font-bold text-[#7A1F5C] hover:underline"
                  >
                    Submit another application <ChevronRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Blue triangle decoration */}
            <div
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-[#7A1F5C] z-0"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            />
          </div>

          {/* ── RIGHT: Stat panel ── */}
          <div className="w-full lg:w-2/5 bg-white p-10 lg:p-16 flex flex-col justify-center items-center text-center relative z-20 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)]">
            {/* Arrow divider */}
            <div
              className="hidden lg:block absolute -left-12 top-0 h-full w-12 bg-white"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}
            />
            <h2 className="text-7xl font-black text-[#1A1A1A] mb-6 tracking-tighter">1 in 4</h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-[200px] mx-auto leading-relaxed">
              CVs we send to a client results in a hire
            </p>
            <div className="mt-10 w-full max-w-[180px] space-y-3">
              {[
                { label: 'London', done: step > 1 && selectedOffice === 'london' },
                { label: 'Thoothukudi', done: step > 1 && selectedOffice === 'thoothukudi' },
                { label: 'Chennai', done: step > 1 && selectedOffice === 'chennai' },
              ].map((o) => (
                <div key={o.label} className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin size={12} className={o.done ? 'text-[#7A1F5C]' : 'text-gray-300'} />
                  <span className={o.done ? 'text-[#7A1F5C] font-bold' : ''}>{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
