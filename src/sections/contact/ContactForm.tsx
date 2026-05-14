'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Phone, Clock } from 'lucide-react';
import { CONTACT } from '@/constants';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
          >
            Get in <span className="text-[#7A1F5C]">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg max-w-2xl mx-auto"
          >
            Fill out the form below and one of our dedicated recruitment specialists will respond within 24 hours to discuss your unique needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-xl shadow-[#7A1F5C]/5 border border-[#EFE7DD]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-3">Message Sent!</h3>
                <p className="text-[#8A8A8A]">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm placeholder:text-[#8A8A8A]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm placeholder:text-[#8A8A8A]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Company</label>
                    <input name="company" value={form.company} onChange={handleChange}
                      placeholder="Company Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm placeholder:text-[#8A8A8A]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+44 7503 000000"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm placeholder:text-[#8A8A8A]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm text-[#8A8A8A]">
                    <option value="">Select a service...</option>
                    <option>IT Recruitment</option>
                    <option>Cloud & DevOps</option>
                    <option>AI & Data Engineering</option>
                    <option>Financial Services</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Message *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your hiring needs or career goals..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border-transparent focus:bg-white focus:border-[#7A1F5C] focus:ring-2 focus:ring-[#7A1F5C]/20 outline-none transition-all text-sm placeholder:text-[#8A8A8A] resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#7A1F5C] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#C2185B] transition-all duration-300">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Quick Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-[#EFE7DD] shadow-sm h-full flex flex-col justify-center space-y-10"
            >
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-2xl mb-2">Direct Contact</h3>
                <p className="text-[#8A8A8A] text-sm">Prefer to reach out directly? Use the channels below.</p>
              </div>

              <div className="space-y-8">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F0E8] flex items-center justify-center group-hover:bg-[#7A1F5C] transition-colors duration-300">
                    <Mail size={24} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-medium mb-1">Email Us</p>
                    <p className="text-[#1A1A1A] font-bold text-lg">{CONTACT.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F0E8] flex items-center justify-center">
                    <Phone size={24} className="text-[#7A1F5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-medium mb-1">Call Us</p>
                    <p className="text-[#1A1A1A] font-bold text-lg">{CONTACT.phoneUK} <span className="text-[#8A8A8A] text-sm font-medium">(UK)</span></p>
                    <p className="text-[#1A1A1A] font-bold text-lg">{CONTACT.phoneIN} <span className="text-[#8A8A8A] text-sm font-medium">(IN)</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F0E8] flex items-center justify-center">
                    <Clock size={24} className="text-[#7A1F5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-medium mb-1">Business Hours</p>
                    <p className="text-[#1A1A1A] font-bold text-lg">Mon–Fri: 9am – 6pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
