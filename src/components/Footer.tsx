'use client';

import Link from 'next/link';
import Image from 'next/image';
import ctaImage from '../assets/About/cta.png';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send, Share2, Globe, MessageSquare, AtSign } from 'lucide-react';
import { SERVICES, INDUSTRIES, CONTACT } from '@/constants';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1A0A14] via-[#2D0F22] to-[#4A1238] text-white pt-40">
      {/* 3D Newsletter Floating Card */}
      <div className="absolute left-0 right-0 -top-24 sm:-top-38 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_20px_40px_-10px_rgba(194,24,91,0.5)] flex flex-col md:flex-row items-center gap-8">
            {/* Background effects container (clipped) */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Left Side: 3D Graphic Area */}
            <div className="hidden md:flex flex-col flex-[0.8] justify-center relative items-center min-h-[160px]">
              <Image
                src={ctaImage}
                alt="Newsletter Graphic"
                priority
                className="absolute bottom-0 w-full h-auto max-w-[280px] lg:max-w-[350px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-6 hover:scale-110 -top-20 lg:-top-28 z-30"
              />
            </div>

            {/* Right Side: Content & Form */}
            <div className="flex-[1.5] relative z-10 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Subscribe for tech insights
              </h3>
              <p className="text-white/90 text-sm mb-6 max-w-lg">
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

              <p className="text-white/60 text-xs mt-3">
                You can unsubscribe at any time. Read our privacy policy <Link href="/privacy" className="underline hover:text-white">here</Link>.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Chalky Infotech</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Chalky Infotech is a specialist technology and digital recruitment partner supporting organisations with high-quality talent across cloud, data, software and transformation.
            </p>
            <div className="flex gap-3 mt-6">
              {[Share2, Globe, MessageSquare, AtSign].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#7A1F5C] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Approach */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#C2185B] mb-5">Approach & Process</h4>
            <ul className="space-y-3">
              {['Process Overview', 'Client Engagement', 'Talent Discovery', 'Candidate Screening', 'Candidate Onboarding'].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-white/60 hover:text-white text-sm flex items-center gap-2 group transition-all duration-200">
                    <ArrowRight size={12} className="text-[#C2185B] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#C2185B] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Our Clients', href: '/about' },
                { label: 'Search Jobs', href: '/jobs' },
                { label: 'Sitemap', href: '/sitemap.xml' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm flex items-center gap-2 group transition-all duration-200">
                    <ArrowRight size={12} className="text-[#C2185B] group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Policy */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#C2185B] mb-5">Policy</h4>
            <ul className="space-y-3">
              {['GDPR', 'IR35', 'Privacy Policy', 'Right to Work', 'Background Verification'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white text-sm flex items-center gap-2 group transition-all duration-200">
                    <ArrowRight size={12} className="text-[#C2185B] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#C2185B] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#C2185B] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-white text-sm transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#C2185B] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href={`tel:${CONTACT.phoneUK}`} className="block text-white/60 hover:text-white text-sm transition-colors">{CONTACT.phoneUK} (UK)</a>
                  <a href={`tel:${CONTACT.phoneIN}`} className="block text-white/60 hover:text-white text-sm transition-colors">{CONTACT.phoneIN} (IN)</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C2185B] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-white/60 text-sm">London, United Kingdom</p>
                  <p className="text-white/60 text-sm">Chennai, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Chalky Infotech Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-white/40 hover:text-white text-xs transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
