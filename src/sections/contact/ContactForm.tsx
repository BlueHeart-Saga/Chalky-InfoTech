'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Trash2, Upload, MapPin, Building2, User, Mail as MailIcon, Phone as PhoneIcon, MessageSquare } from 'lucide-react';
import { sendEmail } from '@/services/sendmail';
import formsideimage from '@/assets/contact/formsideimage.png';

/*
// ─── PREVIOUS 4-STEP WIZARD CODE (COMMENTED OUT FOR REFERENCE) ──────────────────────────
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
  { id: 'candidate', key: 'A', label: "I'm looking for a new role or considering my next career move (upload a CV)" },
  { id: 'client', key: 'B', label: "I'd like to talk to someone about my organisation's talent needs" },
  { id: 'general', key: 'C', label: "Other / general enquiry" },
];

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-12">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i < current ? 'bg-[#7A1F5C] w-10' : i === current ? 'bg-[#7A1F5C] w-14' : 'bg-gray-200 w-10'}`} />
      ))}
      <span className="ml-2 text-xs text-gray-400 font-medium">{current + 1} / {total}</span>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -64 : 64 }),
};

// ── Previous 4-Step Wizard Render Implementation ──────────────────────
// Step 1: StepWelcome (Connect with a Chalky Consultant)
// Step 2: StepRegion (Which office are you contacting?)
// Step 3: StepEnquiry (What are you enquiring about?)
// Step 4: StepContactForm (Direct inputs & Submit)
*/

const OFFICES = [
  { id: 'london', label: 'London, UK (HQ)' },
  { id: 'chennai', label: 'Chennai, IN' },
  { id: 'thoothukudi', label: 'Thoothukudi, IN' },
];

const INQUIRY_TYPES = [
  { id: 'client', label: 'Talent & Team Solutions' },
  { id: 'candidate', label: 'Career & CV Submission' },
  { id: 'general', label: 'General / Business Inquiry' },
];

export default function ContactForm() {
  const [office, setOffice] = useState('london');
  const [enquiryType, setEnquiryType] = useState('client');
  const [customEnquiry, setCustomEnquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileObj, setFileObj] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : null);
    setFileObj(f || null);
  };

  const clearFile = () => {
    setFileName(null);
    setFileObj(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const selectedOffice = OFFICES.find((o) => o.id === office)?.label || 'London';
      const typeLabel = enquiryType === 'other' ? (customEnquiry || 'Custom Inquiry') : (INQUIRY_TYPES.find((t) => t.id === enquiryType)?.label || 'General Inquiry');
      const subject = `[${typeLabel} - ${selectedOffice}] Contact from ${formData.firstName} ${formData.lastName}`;


      await sendEmail({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject,
        message: `Office Preferred: ${selectedOffice}\nPhone Number: ${formData.phone}\n\nMessage:\n${formData.message}`,
        company: formData.organisation || 'N/A',
        serviceType: typeLabel,
        file: fileObj || undefined,
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1F5C]/10 border border-[#7A1F5C]/20 mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#7A1F5C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A1F5C]">
              Direct Contact
            </span>
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Connect with <span className="text-[#7A1F5C]">Chalky</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Fill out the form below to reach our talent specialists and enterprise consulting desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Direct Single-Step Form (Left / 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            
            {/* Top decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7A1F5C]/15 to-transparent rounded-bl-full pointer-events-none" />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
                  Thank you for reaching out. A Chalky InfoTech representative will respond to your request within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFileName(null);
                    setFileObj(null);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', organisation: '', message: '' });
                  }}
                  className="inline-flex items-center gap-2 text-sm text-[#7A1F5C] font-bold hover:underline"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Office & Type Selection Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2 border-b border-gray-100">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#7A1F5C]" /> Target Office *
                    </label>
                    <select
                      value={office}
                      onChange={(e) => setOffice(e.target.value)}
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    >
                      {OFFICES.map((o) => (
                        <option key={o.id} value={o.id}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#7A1F5C]" /> Inquiry Type *
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => {
                        setEnquiryType(e.target.value);
                        if (e.target.value !== 'other') {
                          setCustomEnquiry('');
                        }
                      }}
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    >
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t.id} value={t.id}>{t.label}</option>
                      ))}
                      <option value="other">Custom / Specify Other</option>
                    </select>

                    {enquiryType === 'other' && (
                      <input
                        type="text"
                        required
                        value={customEnquiry}
                        onChange={(e) => setCustomEnquiry(e.target.value)}
                        placeholder="Please enter custom inquiry type..."
                        className="mt-2 w-full bg-white border border-[#7A1F5C]/40 rounded-xl px-3.5 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                      />
                    )}
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Info Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 20 1234 5678"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Company / Organisation Name
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Chalky InfoTech Ltd"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors"
                  />
                </div>

                {/* File Upload (Optional / Candidate) */}
                {enquiryType === 'candidate' && (
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-semibold text-[#1A1A1A]">
                      Attach CV / Resume (Optional)
                    </label>
                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl px-4 py-3 border border-gray-200">
                      <span className="text-xs text-gray-600 truncate max-w-[220px]">
                        {fileName ? fileName : 'No file selected (.pdf, .doc, .docx)'}
                      </span>
                      {fileName ? (
                        <button
                          type="button"
                          onClick={clearFile}
                          className="w-7 h-7 flex items-center justify-center bg-[#7A1F5C] text-white rounded-full hover:bg-[#C2185B] transition-colors"
                        >
                          <Trash2 size={12} />
                        </button>
                      ) : (
                        <div className="relative cursor-pointer">
                          <input
                            ref={fileRef}
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={handleFile}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-[#1A1A1A] hover:bg-gray-50">
                            Browse <Upload size={12} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or inquiry details..."
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7A1F5C] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#5E1847] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Submit Message'}
                    <ArrowRight size={16} />
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 pt-2">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy-policy" className="underline hover:text-[#7A1F5C]">Privacy Policy</Link> and{' '}
                  <Link href="/terms-conditions" className="underline hover:text-[#7A1F5C]">Terms of Service</Link>.
                </p>

              </form>
            )}

          </div>

          {/* Right Column Image & Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
              <Image
                src={formsideimage}
                alt="Contact Chalky InfoTech"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Direct Contact Info Showcase */}
            <div className="w-full bg-[#FAF5FF] border border-[#7A1F5C]/15 rounded-2xl p-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A1F5C] flex items-center gap-2">
                <Building2 size={14} /> Direct Contacts & Support
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Emails */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">General Desk</span>
                    <a href="mailto:info@chalkyinfo.com" className="text-[#1A1A1A] font-bold hover:text-[#7A1F5C] transition-colors flex items-center gap-1.5 mt-0.5">
                      <MailIcon size={12} className="text-[#7A1F5C]" /> info@chalkyinfo.com
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Careers Desk</span>
                    <a href="mailto:talent@chalkyinfo.com" className="text-[#1A1A1A] font-bold hover:text-[#7A1F5C] transition-colors flex items-center gap-1.5 mt-0.5">
                      <MailIcon size={12} className="text-[#7A1F5C]" /> talent@chalkyinfo.com
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">India Office</span>
                    <a href="tel:+918072357581" className="text-[#1A1A1A] font-bold hover:text-[#7A1F5C] transition-colors flex items-center gap-1.5 mt-0.5">
                      <PhoneIcon size={12} className="text-[#7A1F5C]" /> +91 80723 57581
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">UK Office</span>
                    <a href="tel:+447503140975" className="text-[#1A1A1A] font-bold hover:text-[#7A1F5C] transition-colors flex items-center gap-1.5 mt-0.5">
                      <PhoneIcon size={12} className="text-[#7A1F5C]" /> +44 7503 140975
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
