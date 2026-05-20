'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Trash2, Upload } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const REGIONS = [
  {
    id: 'london',
    label: 'London',
    sublabel: 'United Kingdom Office',
    key: 'A',
    address: '128, City Road, London EC1V 2NX',
    embedUrl: 'https://maps.google.com/maps?q=128+City+Road+London+EC1V+2NX&output=embed&z=15',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=128+City+Road+London+EC1V+2NX',
  },
  {
    id: 'thoothukudi',
    label: 'Thoothukudi',
    sublabel: 'India Development Center',
    key: 'B',
    address: '4/392, Rajeev Colony, Passuvanthani, Tamil Nadu',
    embedUrl: 'https://maps.google.com/maps?q=Rajeev+Colony+Passuvanthani+Thoothukudi+Tamil+Nadu&output=embed&z=14',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rajeev+Colony+Passuvanthani+Tamil+Nadu',
  },
  {
    id: 'chennai',
    label: 'Chennai',
    sublabel: 'Chennai Corporate Office',
    key: 'C',
    address: '110, Manickan Lane, Anna Salai, Opp Guindy, Chennai – 600 032',
    embedUrl: 'https://maps.google.com/maps?q=Anna+Salai+Guindy+Chennai+600032&output=embed&z=15',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Anna+Salai+Guindy+Chennai+600032',
  },
];

const ENQUIRY_TYPES = [
  {
    id: 'candidate',
    key: 'A',
    label: (
      <>
        I&apos;m looking for a <strong>new role</strong> or considering my next{' '}
        <strong>career move</strong> (upload a CV)
      </>
    ),
  },
  {
    id: 'client',
    key: 'B',
    label: (
      <>
        I&apos;d like to talk to someone about my{' '}
        <strong>organisation&apos;s talent needs</strong>
      </>
    ),
  },
  {
    id: 'general',
    key: 'C',
    label: 'Other / general enquiry',
  },
];

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-12">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i < current
              ? 'bg-[#7A1F5C] w-10'
              : i === current
              ? 'bg-[#7A1F5C] w-14'
              : 'bg-gray-200 w-10'
          }`}
        />
      ))}
      <span className="ml-2 text-xs text-gray-400 font-medium">
        {current + 1} / {total}
      </span>
    </div>
  );
}

// ─── Slide Animation ──────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -64 : 64 }),
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [step, setStep]               = useState(0);
  const [direction, setDirection]     = useState(1);
  const [region, setRegion]           = useState<string | null>(null);
  const [enquiryType, setEnquiryType] = useState<string | null>(null);
  const [submitted, setSubmitted]     = useState(false);
  const [fileName, setFileName]       = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const TOTAL = 4;

  const goNext = () => { setDirection(1);  setStep(s => Math.min(s + 1, TOTAL - 1)); };
  const goBack = () => { setDirection(-1); setStep(s => Math.max(s - 1, 0)); };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : null);
  };

  const clearFile = () => {
    setFileName(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  // auto-advance helpers
  const pickRegion = (id: string) => {
    setRegion(id);
    setTimeout(() => goNext(), 300);          // brief delay so user sees selection
  };

  const pickEnquiry = (id: string) => {
    setEnquiryType(id);
    setTimeout(() => goNext(), 300);
  };

  // ── Step 1 – Welcome ────────────────────────────────────────────────────────
  const StepWelcome = () => (
    <div className="max-w-xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-5">
        Connect with a{' '}
        <span className="text-[#7A1F5C]">Chalky Consultant</span>
      </h2>
      <p className="text-base text-gray-600 leading-relaxed mb-10">
        Whether you&apos;re enquiring about how Chalky can help you{' '}
        <strong className="text-[#1A1A1A]">grow your team</strong> or wanting to{' '}
        <strong className="text-[#1A1A1A]">submit a CV</strong>, this form will connect
        you to the right team.
      </p>
      <button
        onClick={goNext}
        className="inline-flex items-center gap-3 bg-[#7A1F5C] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#5E1847] transition-colors duration-300 shadow-lg shadow-[#7A1F5C]/20"
      >
        Continue <ArrowRight size={16} />
      </button>
    </div>
  );

  // ── Step 2 – Office Location ────────────────────────────────────────────────
  const StepRegion = () => (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
        Which <strong>office</strong> are you contacting?
      </h2>
      <p className="text-sm text-gray-400 mb-8">Select a location — we&apos;ll route you to the right team.</p>

      <div className="grid grid-cols-3 gap-5 mb-10">
        {REGIONS.map((r) => {
          const active = region === r.id;
          return (
            <button
              key={r.id}
              onClick={() => pickRegion(r.id)}
              className={`relative rounded-2xl overflow-hidden flex flex-col text-left transition-all duration-300 border-2 group ${
                active
                  ? 'border-[#7A1F5C] shadow-xl scale-[1.02]'
                  : 'border-gray-200 bg-white hover:shadow-md hover:border-gray-300'
              }`}
            >
              {/* Live Google Maps iframe */}
              <div className="w-full h-36 overflow-hidden bg-[#E8E8E8] pointer-events-none">
                <iframe
                  src={r.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(95%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={r.label}
                />
              </div>
              {/* Label row */}
              <div className={`flex items-start gap-2.5 p-4 ${ active ? 'bg-[#FAF5FF]' : 'bg-white' }`}>
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold flex-shrink-0 mt-0.5 transition-colors ${
                    active ? 'bg-[#7A1F5C] text-white' : 'bg-[#F3F3F3] text-[#1A1A1A]'
                  }`}
                >
                  {r.key}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1A1A1A] leading-tight">{r.label}</span>
                  <span className="text-[10px] text-[#7A1F5C] font-semibold mt-0.5">{r.sublabel}</span>
                  <span className="text-[10px] text-gray-400 mt-1 leading-snug">{r.address}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={goBack}
        className="inline-flex items-center gap-2 text-[#8A8A8A] hover:text-[#1A1A1A] text-sm font-medium transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>
    </div>
  );

  // ── Step 3 – Enquiry Type ───────────────────────────────────────────────────
  const StepEnquiry = () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
        What are you <strong>enquiring</strong> about?*
      </h2>
      <p className="text-sm text-gray-400 mb-8">Select one — we&apos;ll take you straight to the form.</p>

      <div className="flex flex-col gap-3 mb-10">
        {ENQUIRY_TYPES.map((eq) => {
          const active = enquiryType === eq.id;
          return (
            <button
              key={eq.id}
              onClick={() => pickEnquiry(eq.id)}
              className={`flex items-start gap-3 w-full px-5 py-4 rounded-xl border-2 text-left transition-all duration-300 ${
                active
                  ? 'border-[#1A1A1A] bg-white shadow-lg scale-[1.01]'
                  : 'border-transparent bg-[#F3F3F3] hover:bg-[#EBEBEB]'
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold flex-shrink-0 mt-0.5 transition-colors ${
                  active ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]'
                }`}
              >
                {eq.key}
              </span>
              <span className="text-sm text-[#1A1A1A] leading-relaxed">{eq.label}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={goBack}
        className="inline-flex items-center gap-2 text-[#8A8A8A] hover:text-[#1A1A1A] text-sm font-medium transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </button>
    </div>
  );

  // ── Step 4 – Contact Form ───────────────────────────────────────────────────
  const StepContactForm = () => {
    const isCandidate = enquiryType === 'candidate';
    const isClient    = enquiryType === 'client';

    const title = isCandidate
      ? 'Are you looking for your next role?'
      : isClient
      ? 'Are you expanding your team?'
      : 'Other / general enquiry';

    const subtitle = isCandidate
      ? "We seek roles as individual as you are. Speak to us today about finding your next opportunity."
      : isClient
      ? "We believe exceptional people can make a huge impact. Speak to us today about finding the right talent."
      : "Drop us a message and we'll get back to you as soon as possible.";

    if (submitted) {
      return (
        <div className="max-w-xl flex flex-col items-center text-center py-16">
          <CheckCircle2 size={60} className="text-green-500 mb-6" />
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Message Received!</h3>
          <p className="text-gray-500 text-sm mb-8">Our team will be in touch within 24 hours.</p>
          <button
            onClick={() => {
              setStep(0); setSubmitted(false);
              setRegion(null); setEnquiryType(null); setFileName(null);
            }}
            className="text-sm text-[#7A1F5C] font-semibold hover:underline"
          >
            Start over →
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl w-full">
        {/* Title block above the card */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-1">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Form card — white bg, triangle accents */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Top-right rose triangle */}
          <div
            className="absolute top-0 right-0 w-0 h-0 z-0"
            style={{
              borderLeft: '80px solid transparent',
              borderTop: '80px solid #C2185B',
            }}
          />
          {/* Bottom-right plum triangle */}
          <div
            className="absolute bottom-0 right-0 w-0 h-0 z-0"
            style={{
              borderLeft: '80px solid transparent',
              borderBottom: '80px solid #7A1F5C',
            }}
          />

          <div className="relative z-10 p-8 md:p-10">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-6"
            >
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#1A1A1A]">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#0099CC] transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#1A1A1A]">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors bg-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#1A1A1A]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#1A1A1A]">Cell</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors bg-white"
                  />
                </div>
              </div>

              {/* Organisation (clients only) */}
              {isClient && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#1A1A1A]">
                    Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors bg-white"
                  />
                </div>
              )}

              {/* File upload (candidates) */}
              {isCandidate && (
                <div className="space-y-2">
                  {/* Uploaded bar */}
                  <div className="flex items-center justify-between bg-[#F3F5F7] rounded-lg px-4 py-3 border border-gray-100">
                    <span className="text-sm text-[#1A1A1A]">
                      <span className="font-semibold">Uploaded:</span>{' '}
                      <span className="text-gray-500">{fileName ?? 'No file selected'}</span>
                    </span>
                    {fileName && (
                      <button
                        type="button"
                        onClick={clearFile}
                        className="w-8 h-8 flex items-center justify-center bg-[#7A1F5C] text-white rounded-full hover:bg-[#C2185B] transition-colors ml-3 flex-shrink-0"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  {/* Resume button */}
                  <div className="relative inline-block cursor-pointer">
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFile}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold text-[#1A1A1A] bg-white hover:bg-gray-50 transition-colors">
                      Resume <Upload size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#1A1A1A]">
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors resize-none bg-white"
                />
              </div>

              {/* Submit row */}
              <div className="flex items-center gap-5 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#7A1F5C] text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-[#C2185B] transition-colors duration-300"
                >
                  Submit
                  <span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
                    <ArrowRight size={13} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1A1A1A] text-sm transition-colors"
                >
                  <ArrowLeft size={13} /> Back
                </button>
              </div>

              <p className="text-[10px] text-gray-400 leading-relaxed">
                This site is protected by reCAPTCHA and the Google{' '}
                <Link href="/privacy-policy" className="underline hover:text-[#7A1F5C]">Privacy Policy</Link> and{' '}
                <Link href="/terms-conditions" className="underline hover:text-[#7A1F5C]">Terms of Service</Link> apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const steps = [
    <StepWelcome   key="welcome"  />,
    <StepRegion    key="region"   />,
    <StepEnquiry   key="enquiry"  />,
    <StepContactForm key="form"  />,
  ];

  return (
    <section className="py-24 bg-[#ffffff] relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <StepIndicator current={step} total={TOTAL} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: 'easeInOut' }}
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
