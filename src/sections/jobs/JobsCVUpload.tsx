'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, UploadCloud, CheckCircle2, Trash2, Send,
  Briefcase, Mail as MailIcon, Phone as PhoneIcon, Building2,
  FileText, User, ArrowRight
} from 'lucide-react';
import { sendEmail } from '@/services/sendmail';

const OFFICES = [
  { id: 'london', label: 'London, UK (HQ)' },
  { id: 'chennai', label: 'Chennai, IN' },
  { id: 'thoothukudi', label: 'Thoothukudi, IN' },
];

export default function JobsCVUpload() {
  const [office, setOffice] = useState('london');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileObj, setFileObj] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileObj(file);
    }
  };

  const clearFile = () => {
    setFileName(null);
    setFileObj(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const officeLabel = OFFICES.find((o) => o.id === office)?.label || 'Global';
      await sendEmail({
        fullName,
        email,
        subject: `CV Upload - ${officeLabel}`,
        message: `Candidate Name: ${fullName}\nEmail Address: ${email}\nPhone Number: ${phone}\nTarget Office: ${officeLabel}\n\nAdditional Notes:\n${message || 'N/A'}`,
        serviceType: 'CV Submission',
        file: fileObj || undefined,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setOffice('london');
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setFileName(null);
    setFileObj(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-[1.1] mb-6">
              Can't find a <br />
              <span className="text-[#7A1F5C]">Suitable Role?</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#7A1F5C] rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl font-medium">
            Submit your CV directly to our global recruitment team. We actively match
            candidates with unlisted, high-impact opportunities across leading technology and enterprise sectors.
          </p>
        </div>

        {/* ── Main Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* ── Single-Step Form Card (Left / 7 cols) ── */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col justify-between">
            
            {/* Top decorative gradient accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#7A1F5C]/15 to-transparent rounded-bl-full pointer-events-none" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16 my-auto"
              >
                <div className="w-20 h-20 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-3">CV Uploaded Successfully!</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md mb-8 leading-relaxed font-medium">
                  Thank you for submitting your CV. Our talent acquisition consultants will review your background and reach out regarding suitable career matches.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 text-sm text-[#7A1F5C] font-bold hover:underline cursor-pointer"
                >
                  Submit another CV →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                {/* Form Header */}
                <div className="pb-4 border-b border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-1">
                    Submit Your Resume / CV
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    Fill out your contact details below to join the Chalky InfoTech global talent pool.
                  </p>
                </div>

                {/* Office Dropdown Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#7A1F5C]" /> Preferred Office Location *
                  </label>
                  <select
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/10 transition-colors"
                  >
                    {OFFICES.map((o) => (
                      <option key={o.id} value={o.id}>{o.label}</option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] font-semibold focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] font-semibold focus:outline-none focus:border-[#7A1F5C] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 20 7946 0958 or +91 98765 43210"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] font-semibold focus:outline-none focus:border-[#7A1F5C] transition-colors"
                  />
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Upload Resume / CV (PDF or Word) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-5 flex flex-col items-center justify-center bg-[#F9FAFB] hover:border-[#7A1F5C]/50 hover:bg-white transition-colors cursor-pointer overflow-hidden">
                    <input
                      ref={fileRef}
                      type="file"
                      required={!fileObj}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    
                    {fileName ? (
                      <div className="flex items-center gap-3 w-full justify-between px-2">
                        <div className="flex items-center gap-2 truncate">
                          <FileText size={20} className="text-[#7A1F5C] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-[#7A1F5C] truncate">{fileName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); clearFile(); }}
                          className="w-7 h-7 rounded-full bg-[#7A1F5C] text-white flex items-center justify-center hover:bg-[#C2185B] transition-colors shrink-0"
                          title="Remove file"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <UploadCloud size={28} className="text-[#7A1F5C] mb-2" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                          Click or drag file to upload
                        </span>
                        <span className="text-[11px] text-gray-400 mt-0.5">
                          Supports PDF, DOC, DOCX (Max 10MB)
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Cover Note / Current Job Title (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly state your preferred role, domain expertise, or availability..."
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] font-medium focus:outline-none focus:border-[#7A1F5C] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7A1F5C] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#C2185B] transition-all shadow-lg shadow-[#7A1F5C]/20 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? 'Uploading Application...' : 'Submit Application'}
                    <Send size={15} />
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 pt-1">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy-policy" className="underline hover:text-[#7A1F5C]">Privacy Policy</Link> and{' '}
                  <Link href="/terms-conditions" className="underline hover:text-[#7A1F5C]">Terms of Service</Link>.
                </p>

              </form>
            )}

          </div>

          {/* ── Stat Card & Office Info (Right / 5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">

            {/* Stat Highlight Card */}
            <div className="bg-[#F5F0E8] rounded-3xl p-8 sm:p-10 border border-[#EFE7DD] text-center flex flex-col items-center justify-center shadow-sm relative overflow-hidden flex-1">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
                Proven Track Record
              </span>
              <h2 className="text-6xl sm:text-7xl font-black text-[#1A1A1A] mb-4 tracking-tighter">
                1 in 4
              </h2>
              <p className="text-gray-700 text-sm sm:text-base font-semibold max-w-[240px] mx-auto leading-relaxed">
                CVs submitted by Chalky to clients results in a successful candidate hire.
              </p>
            </div>

            {/* Global Offices Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A1F5C] flex items-center gap-2">
                <Building2 size={15} /> Global Recruitment Desks
              </h4>

              <div className="space-y-3 divide-y divide-gray-100 text-xs sm:text-sm">
                
                {/* London */}
                <div className="pt-2 first:pt-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#7A1F5C]" /> London (UK HQ)
                    </span>
                    <span className="text-[11px] font-semibold text-[#7A1F5C]">European Desk</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 pl-4.5">128, City Road, London EC1V 2NX</p>
                </div>

                {/* Chennai */}
                <div className="pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#7A1F5C]" /> Chennai (India)
                    </span>
                    <span className="text-[11px] font-semibold text-[#7A1F5C]">Corporate Desk</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 pl-4.5">110, Anna Salai, Guindy, Chennai – 600 032</p>
                </div>

                {/* Thoothukudi */}
                <div className="pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#7A1F5C]" /> Thoothukudi (India)
                    </span>
                    <span className="text-[11px] font-semibold text-[#7A1F5C]">Tech Center</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 pl-4.5">4/392, Rajeev Colony, Passuvanthani, TN</p>
                </div>

              </div>

              {/* Direct Careers Email */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">Direct Careers Desk:</span>
                <a href="mailto:talent@chalkyinfo.com" className="text-xs font-bold text-[#7A1F5C] hover:underline flex items-center gap-1">
                  <MailIcon size={12} /> talent@chalkyinfo.com
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
