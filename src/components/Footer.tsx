'use client';

import Link from 'next/link';
import Image from 'next/image';
import ctaImage from '../assets/About/cta.png';
import logoImage from '../assets/logo/logo.png';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send, Share2, Globe, MessageSquare, AtSign } from 'lucide-react';
import { SERVICES, INDUSTRIES, CONTACT } from '@/constants';

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-40">
      {/* 3D Newsletter Floating Card */}
      <div className="absolute left-0 right-0 -top-20 sm:-top-24 lg:-top-28 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-3xl p-6 md:p-8 shadow-[0_15px_30px_-10px_rgba(194,24,91,0.5)] flex flex-col md:flex-row items-center gap-6 lg:gap-10">
            {/* Background effects container (clipped) */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Left Side: 3D Graphic Area */}
            <div className="hidden md:flex flex-col flex-[0.6] justify-center relative items-center min-h-[140px]">
              <Image
                src={ctaImage}
                alt="Newsletter Graphic"
                priority
                className="absolute bottom-0 w-full h-auto max-w-[200px] lg:max-w-[240px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-4 hover:scale-105 -top-16 lg:-top-20 z-30"
              />
            </div>

            {/* Right Side: Content & Form */}
            <div className="flex-[1.5] relative z-10 w-full py-2">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                Subscribe for tech insights
              </h3>
              <p className="text-white/80 text-sm mb-5 max-w-lg leading-relaxed">
                Get exclusive job alerts and recruitment trends delivered right to your inbox. Stay ahead of the curve.
              </p>

              <form className="flex items-center bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 w-full max-w-md shadow-inner transition-all focus-within:bg-white/20 focus-within:border-white/40">
                <div className="pl-4 text-white/60">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-transparent text-white placeholder:text-white/60 focus:outline-none text-sm font-medium w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#7A1F5C] px-5 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-white/50 text-xs mt-3">
                You can unsubscribe at any time. Read our privacy policy <Link href="/privacy" className="underline hover:text-white">here</Link>.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center border-b border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready To Build Future-Ready Teams?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-[#7A1F5C] hover:bg-[#C2185B] text-white px-8 py-3.5 rounded-full font-bold transition-colors text-sm shadow-lg shadow-[#7A1F5C]/20">
            Contact Us
          </Link>
          <Link href="/services" className="bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3.5 rounded-full font-bold transition-all text-sm">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Col 1: Company Overview */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src={logoImage} 
                alt="Chalky Infotech Logo" 
                width={180} 
                height={50} 
                className="w-auto h-12 object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Chalky Infotech is a global recruitment and workforce solutions partner supporting organizations with scalable hiring solutions across technology, healthcare, finance, retail, manufacturing, and emerging industries.
            </p>
            <p className="text-[#C2185B] text-xs font-semibold uppercase tracking-wider mb-6 border-l-2 border-[#C2185B] pl-3 leading-relaxed">
              Strategic workforce solutions supporting organizations across diverse industries globally.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-[#7A1F5C]" /> India Operations</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-[#7A1F5C]" /> UK Workforce Support</li>
              <li className="flex items-center gap-2"><Globe size={14} className="text-[#7A1F5C]" /> Global Talent Solutions</li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-gray-300 hover:text-[#C2185B] text-sm transition-colors block">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-4">
              {INDUSTRIES.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="text-gray-300 hover:text-[#C2185B] text-sm transition-colors block">
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Industries', href: '/industries' },
                { label: 'Insights', href: '/insights' },
                { label: 'Jobs', href: '/jobs' },
                { label: 'Contact', href: '/contact' },
                { label: 'Case Studies', href: '/insights' },
                { label: 'Careers', href: '/jobs' },
                { label: 'FAQs', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#C2185B] text-sm transition-colors block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-[#C2185B] transition-colors">{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phoneUK}`} className="hover:text-[#C2185B] transition-colors">{CONTACT.phoneUK}</a></li>
              <li><a href={`tel:${CONTACT.phoneIN}`} className="hover:text-[#C2185B] transition-colors">{CONTACT.phoneIN}</a></li>
            </ul>
            
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs text-gray-500">Office Info</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-8">
              <li>UK Operations</li>
              <li>India Delivery Center</li>
              <li>Global Workforce Support</li>
            </ul>

            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs text-gray-500">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#C2185B] text-sm font-medium transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-[#C2185B] text-sm font-medium transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-[#C2185B] text-sm font-medium transition-colors">Facebook</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-gray-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Chalky Infotech. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {['Privacy Policy', 'Terms', 'Cookies', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-gray-400 hover:text-[#C2185B] text-sm transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
