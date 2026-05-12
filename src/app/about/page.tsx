import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Award, Clock, Globe, Users, Target, Eye, TrendingUp, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Chalky Infotech',
  description:
    'Learn about Chalky Infotech — our story, mission, leadership and why over 500 companies trust us for specialist technology and digital recruitment.',
};

const stats = [
  { value: '2009', label: 'Founded' },
  { value: '500+', label: 'Clients Served' },
  { value: '10K+', label: 'Placements' },
  { value: '15+', label: 'Countries' },
];

const team = [
  { name: 'Ramesh Kumar', role: 'CEO & Founder', initials: 'RK', color: '#7A1F5C' },
  { name: 'Priya Nair', role: 'Head of Technology Recruitment', initials: 'PN', color: '#C2185B' },
  { name: 'James Wilson', role: 'UK Director', initials: 'JW', color: '#4A1238' },
  { name: 'Anjali Shah', role: 'Head of Talent Solutions', initials: 'AS', color: '#D14D72' },
];

const timeline = [
  { year: '2009', title: 'Founded in Chennai', desc: 'Chalky Infotech was born with a vision to transform technology recruitment.' },
  { year: '2013', title: 'UK Expansion', desc: 'Opened our London office, establishing a global footprint.' },
  { year: '2017', title: '100th Enterprise Client', desc: 'Crossed a major milestone serving Fortune 500 companies.' },
  { year: '2021', title: 'AI & Data Practice Launched', desc: 'Pioneered specialist AI/ML and Data Engineering recruitment.' },
  { year: '2024', title: '10,000+ Placements', desc: "A decade of connecting talent with the world's best organisations." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
        badge="Our Story"
        title="Building the Future of"
        titleHighlight="Talent Acquisition"
        subtitle="For over 15 years, we have been the trusted recruitment partner for the world's most ambitious technology organisations — connecting exceptional talent with great companies."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
        imageSrc="/hero-about.png"
        imageAlt="Chalky Infotech team meeting"
      />

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Our Journey</span>
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-6">
                From a Small Team to a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">Global Force</span>
              </h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                Chalky Infotech was founded in 2009 in Chennai, India, with a simple but powerful idea — that great companies deserve great talent, and great professionals deserve the right opportunities.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                We started as a small team of passionate recruiters with deep technology backgrounds. Over the years, we grew into a specialist recruitment consultancy with offices in London and Chennai, serving clients across 15+ countries.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed">
                Today, Chalky Infotech is recognised as one of the leading specialist technology and digital recruitment partners — trusted by startups, scale-ups and global enterprises alike.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#F5F0E8] rounded-2xl p-8 text-center border border-[#EFE7DD] hover:shadow-lg transition-all duration-300">
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] mb-2">{s.value}</p>
                  <p className="text-[#8A8A8A] text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Milestones</span>
            <h2 className="text-4xl font-black text-[#1A1A1A]">Our Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7A1F5C] to-[#C2185B]" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="text-white font-bold text-xs">{item.year}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-[#EFE7DD] hover:shadow-lg hover:border-[#7A1F5C]/20 transition-all duration-300">
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-[#8A8A8A] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#7A1F5C] to-[#4A1238] rounded-3xl p-10 text-white">
              <Target size={32} className="text-[#D14D72] mb-6" />
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">To be the most trusted recruitment partner for technology organisations worldwide — delivering exceptional talent with speed, precision and integrity.</p>
            </div>
            <div className="bg-gradient-to-br from-[#C2185B] to-[#D14D72] rounded-3xl p-10 text-white">
              <Eye size={32} className="text-white/80 mb-6" />
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">A world where every organisation thrives through the right talent, and every professional finds a role where they can grow, contribute and lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Leadership</span>
            <h2 className="text-4xl font-black text-[#1A1A1A]">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">Team</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center border border-[#EFE7DD] hover:shadow-xl hover:shadow-[#7A1F5C]/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${member.color}, #C2185B)` }}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base">{member.name}</h3>
                <p className="text-[#8A8A8A] text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Trust</span>
            <h2 className="text-4xl font-black text-[#1A1A1A]">Why Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">Trust Us</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Certified Consultants', desc: 'Our team holds industry certifications in HR, technology and compliance.' },
              { icon: Shield, title: 'Fully Compliant', desc: 'GDPR, IR35, Right to Work — fully auditable processes throughout.' },
              { icon: Globe, title: 'Global Network', desc: '250,000+ professionals in our talent network across 15+ countries.' },
              { icon: TrendingUp, title: 'Proven Track Record', desc: '10,000+ successful placements with 98% client satisfaction.' },
              { icon: Clock, title: 'Speed & Precision', desc: 'Average 18-day hire time — without cutting corners.' },
              { icon: Users, title: 'Dedicated Teams', desc: 'A dedicated consultant for each client for a personalised experience.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-[#F5F0E8] border border-[#EFE7DD] hover:shadow-lg hover:border-[#7A1F5C]/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h3>
                  <p className="text-[#8A8A8A] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Partner With Us?" subtitle="Join 500+ organisations who trust Chalky Infotech for their most critical hires." />
    </>
  );
}
