'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe } from 'lucide-react';
import { CONTACT } from '@/constants';

const offices = [
  { flag: '🇬🇧', country: 'United Kingdom', city: 'London', phone: '+44 7503 140975', email: 'uk@chalkyinfo.com', hours: 'Mon–Fri: 9am – 6pm GMT' },
  { flag: '🇮🇳', country: 'India', city: 'Chennai', phone: '+91 8072357581', email: 'india@chalkyinfo.com', hours: 'Mon–Fri: 9am – 6pm IST' },
];

export default function ContactPage() {
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
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
        badge="Get In Touch"
        title="Let's Start the"
        titleHighlight="Conversation"
        subtitle="Whether you're looking to hire exceptional talent or find your next career move — our specialist consultants are ready to help you make the right move."
        ctaLabel="Call Us Now"
        ctaHref="tel:+447503140975"
        secondaryLabel="Browse Jobs"
        secondaryHref="/jobs"
        imageSrc="/hero-contact.png"
        imageAlt="Professional recruitment consultation"
      />

      {/* Contact Grid */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-[#7A1F5C]/10 border border-[#EFE7DD]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] mb-3">Message Sent!</h3>
                  <p className="text-[#8A8A8A]">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-[#1A1A1A] mb-2">Send Us a Message</h2>
                  <p className="text-[#8A8A8A] text-sm mb-8">Fill in the form below and a specialist consultant will respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm placeholder:text-[#8A8A8A]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Email *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm placeholder:text-[#8A8A8A]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Company</label>
                        <input name="company" value={form.company} onChange={handleChange}
                          placeholder="Company Ltd"
                          className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm placeholder:text-[#8A8A8A]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+44 7503 000000"
                          className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm placeholder:text-[#8A8A8A]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-2">Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm text-[#8A8A8A]">
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
                        className="w-full px-4 py-3 rounded-xl border border-[#EFE7DD] focus:outline-none focus:ring-2 focus:ring-[#7A1F5C]/30 text-sm placeholder:text-[#8A8A8A] resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-[#7A1F5C]/40 hover:scale-[1.01] transition-all duration-300">
                      Send Message <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info Panel */}
            <div className="space-y-6">
              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-[#EFE7DD] shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-6">Quick Contact</h3>
                <div className="space-y-5">
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#7A1F5C]/10 flex items-center justify-center group-hover:bg-[#7A1F5C] transition-colors duration-300">
                      <Mail size={20} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-medium">Email</p>
                      <p className="text-[#1A1A1A] font-semibold text-sm">{CONTACT.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7A1F5C]/10 flex items-center justify-center">
                      <Phone size={20} className="text-[#7A1F5C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-medium">Phone</p>
                      <p className="text-[#1A1A1A] font-semibold text-sm">{CONTACT.phoneUK} (UK)</p>
                      <p className="text-[#1A1A1A] font-semibold text-sm">{CONTACT.phoneIN} (IN)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7A1F5C]/10 flex items-center justify-center">
                      <Clock size={20} className="text-[#7A1F5C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A8A] font-medium">Business Hours</p>
                      <p className="text-[#1A1A1A] font-semibold text-sm">Mon–Fri: 9am – 6pm</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Global Offices */}
              {offices.map((office, i) => (
                <motion.div key={office.country}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-[#EFE7DD] shadow-sm hover:shadow-lg hover:border-[#7A1F5C]/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A]">{office.country}</h4>
                      <p className="text-[#8A8A8A] text-sm">{office.city}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-[#8A8A8A]">
                      <Phone size={14} className="text-[#7A1F5C]" /> {office.phone}
                    </div>
                    <div className="flex items-center gap-2 text-[#8A8A8A]">
                      <Mail size={14} className="text-[#7A1F5C]" /> {office.email}
                    </div>
                    <div className="flex items-center gap-2 text-[#8A8A8A]">
                      <Clock size={14} className="text-[#7A1F5C]" /> {office.hours}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-gradient-to-br from-[#7A1F5C]/10 to-[#C2185B]/10 flex items-center justify-center border-t border-[#EFE7DD]">
        <div className="text-center">
          <Globe size={48} className="text-[#7A1F5C] mx-auto mb-3 opacity-50" />
          <p className="text-[#8A8A8A] font-medium">Global Operations: UK & India</p>
          <p className="text-[#8A8A8A] text-sm">London · Chennai · Remote</p>
        </div>
      </section>
    </>
  );
}
