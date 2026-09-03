import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { CAPABILITIES_DATA } from '@/constants/capabilitiesData';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import { ArrowRight, Cpu, Code2, Cloud, Database, ShieldCheck, Building2, CheckCircle2, Award, Sparkles, Check, Users, Clock, Globe, TrendingUp, Search, UserCheck } from 'lucide-react';
import heroImg from '@/assets/Services/Hero/2.png';

export const metadata = buildPageMetadataWithImage({
  title: 'AI & Technology Capabilities | Specialist IT Recruitment | Chalky Infotech',
  description: 'Explore Chalky Infotech\'s specialized AI and technology talent capabilities. We connect organizations with professionals across AI, Software, Cloud, Data, Security, and Leadership.',
  keywords: ['AI recruitment', 'IT talent capabilities', 'software engineering staffing', 'cloud devops recruitment', 'data science hiring', 'cybersecurity talent', 'enterprise tech recruitment', 'technology leadership search'],
  url: '/capabilities',
  path: '/hero-capabilities.png',
  alt: 'Chalky Infotech AI and Technology Capabilities Overview'
});

const ICON_MAP: Record<string, any> = {
  Cpu,
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Award
};

const CAPABILITY_CARD_LABELS: Record<string, string> = {
  'ai-machine-learning': 'Explore AI & ML →',
  'software-engineering': 'Explore Software Engineering →',
  'cloud-devops': 'Explore Cloud & DevOps →',
  'data-analytics': 'Explore Data & Analytics →',
  'cybersecurity': 'Explore Cybersecurity →',
  'enterprise-technology': 'Explore Enterprise Technology →',
  'quality-engineering': 'Explore Quality Engineering →',
  'product-technology-leadership': 'Explore Technology Leadership →',
};

export default function CapabilitiesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Capabilities' },
          ]}
          badge="Specialized AI & IT Talent"
          title="Specialized AI & IT Talent for the"
          titleHighlight="Future of Technology"
          subtitle="We connect organizations with highly skilled technology professionals across AI, software engineering, cloud, data, cybersecurity, and technology leadership—helping businesses build stronger teams and accelerate innovation."
          ctaLabel="Find Talent"
          ctaHref="/contact"
          secondaryLabel="Explore Our Capabilities"
          secondaryHref="#capabilities-list"
          imageSrc={heroImg.src}
          imageAlt="Chalky Infotech AI and Technology Capabilities"
        />
      </section>

      {/* 2. SECTION 1: OUR TECHNOLOGY CAPABILITIES */}
      <section id="capabilities-list" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Our Technology Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Expertise Across the Technology Landscape
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              Our specialized recruitment expertise spans critical technology domains, enabling us to identify and connect organizations with the right professionals for evolving business and technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPABILITIES_DATA.map((cap) => {
              const IconComp = ICON_MAP[cap.icon] || Cpu;
              const linkText = CAPABILITY_CARD_LABELS[cap.slug] || `Explore ${cap.title} →`;

              return (
                <div
                  key={cap.slug}
                  className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EFE7DD] hover:border-[#7A1F5C]/40 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A1F5C]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#7A1F5C] border border-[#EFE7DD] flex items-center justify-center mb-6 group-hover:bg-[#7A1F5C] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComp size={26} />
                    </div>

                    <span className="text-xs font-semibold text-[#7A1F5C] uppercase tracking-wider block mb-2">
                      {cap.subtitle}
                    </span>

                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 group-hover:text-[#7A1F5C] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {cap.heroDesc}
                    </p>
                  </div>

                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A1F5C] uppercase tracking-wider group/link pt-4 border-t border-gray-100"
                  >
                    <span>{linkText}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: TECHNOLOGY TALENT WE CONNECT */}
      <section className="py-20 bg-[#F5F0E8]/40 border-y border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Technology Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              The Right Expertise for Every Technology Need
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
            {[
              'Artificial Intelligence', 'Generative AI', 'Software Engineering',
              'Cloud Computing', 'DevOps', 'Data & Analytics', 'Cybersecurity',
              'Enterprise Technology', 'Quality Engineering', 'Product & Technology Leadership'
            ].map((domain) => (
              <div
                key={domain}
                className="bg-white px-6 py-3.5 rounded-2xl border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-base shadow-2xs hover:border-[#7A1F5C] hover:bg-[#7A1F5C] hover:text-white transition-all cursor-default flex items-center gap-2.5"
              >
                <Sparkles size={16} className="text-[#7A1F5C] group-hover:text-white" />
                <span>{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: FROM EMERGING TECHNOLOGY TO SPECIALIZED TALENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Emerging Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Talent Aligned with Tomorrow's Technologies
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
              Technology evolves rapidly. We stay focused on emerging skills and specialized roles so organizations can access talent aligned with today's technology landscape and tomorrow's opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Stack */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD]">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 pb-3 border-b border-[#EFE7DD] flex items-center justify-between">
                <span>AI</span>
                <Cpu size={22} className="text-[#7A1F5C]" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLM', 'Machine Learning', 'AI Agents', 'MLOps'].map((tech) => (
                  <span key={tech} className="px-3.5 py-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Stack */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD]">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 pb-3 border-b border-[#EFE7DD] flex items-center justify-between">
                <span>Cloud</span>
                <Cloud size={22} className="text-[#7A1F5C]" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'AWS', 'Kubernetes', 'Terraform', 'Platform Engineering'].map((tech) => (
                  <span key={tech} className="px-3.5 py-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Stack */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD]">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 pb-3 border-b border-[#EFE7DD] flex items-center justify-between">
                <span>Data</span>
                <Database size={22} className="text-[#7A1F5C]" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Data Engineering', 'Microsoft Fabric', 'Data Science', 'Analytics', 'Business Intelligence'].map((tech) => (
                  <span key={tech} className="px-3.5 py-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Stack */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE7DD]">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 pb-3 border-b border-[#EFE7DD] flex items-center justify-between">
                <span>Engineering</span>
                <Code2 size={22} className="text-[#7A1F5C]" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', '.NET', 'React', 'Node.js', 'Microservices'].map((tech) => (
                  <span key={tech} className="px-3.5 py-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: OUR TALENT APPROACH */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Specialized Talent. Better Matches. Stronger Teams.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'We understand your business, technology stack, role requirements and team objectives.' },
              { step: '02', title: 'Source', desc: 'We identify professionals with relevant technical skills and industry experience.' },
              { step: '03', title: 'Assess', desc: 'Candidates are evaluated against the specific requirements of the role.' },
              { step: '04', title: 'Match', desc: 'We connect organizations with talent aligned to their technical and business needs.' }
            ].map((stepItem) => (
              <div key={stepItem.step} className="bg-white p-8 rounded-3xl border border-[#EFE7DD] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-bold text-[#7A1F5C] block mb-3">{stepItem.step}</span>
                  <h3 className="font-semibold text-xl text-[#1A1A1A] mb-2">{stepItem.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: BUILT AROUND YOUR HIRING NEEDS (CAPABILITIES -> SERVICES BRIDGE) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Engagement Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Built Around Your Hiring Needs
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3">
              Pair our technology talent capabilities with our flexible recruitment services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#FAF8F5] rounded-3xl border border-[#EFE7DD] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-[#EFE7DD]">
              {[
                { need: 'Build a permanent technology team', solution: 'Permanent Hiring', href: '/services/permanent-hiring' },
                { need: 'Scale for a project', solution: 'Contract Staffing', href: '/services/contract-staffing' },
                { need: 'Find specialized AI talent', solution: 'IT Staffing', href: '/services/it-staffing' },
                { need: 'Hire senior technology leaders', solution: 'Executive Search', href: '/services/executive-search' },
                { need: 'Build distributed teams', solution: 'Remote Hiring', href: '/services/remote-hiring' },
                { need: 'Add resources quickly', solution: 'Temporary Recruitment', href: '/services/temporary-recruitment' },
                { need: 'Dedicated recruitment support', solution: 'On-Site Recruitment', href: '/services/on-site-recruitment' },
              ].map((row, idx) => (
                <div key={idx} className="p-5 sm:px-8 flex items-center justify-between gap-4 hover:bg-white transition-colors">
                  <span className="text-sm sm:text-base font-semibold text-[#1A1A1A]">{row.need}</span>
                  <Link
                    href={row.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7A1F5C]/10 hover:bg-[#7A1F5C] text-[#7A1F5C] hover:text-white font-semibold text-sm transition-all shrink-0"
                  >
                    <span>{row.solution}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#7A1F5C] hover:bg-[#9D2877] text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-md"
            >
              Explore Recruitment Services →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SECTION 6: WHY CHALKY INFOTECH */}
      <section className="py-20 bg-white border-t border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-4 py-1.5 rounded-md inline-block mb-4">
                Why Chalky Infotech
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-tight">
                Your Technology Talent Partner
              </h2>
              <p className="text-base text-gray-600 mt-4 leading-relaxed">
                We combine deep technical domain insight with global recruitment reach to deliver exceptional technology matches.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'AI & IT recruitment specialization',
                'Technology-focused talent sourcing',
                'Skilled and experienced professionals',
                'Role-specific candidate assessment',
                'Flexible hiring models',
                'Global talent access',
                'Fast and focused recruitment',
                'Long-term hiring partnerships'
              ].map((bullet, idx) => (
                <div key={idx} className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EFE7DD] flex items-center gap-3 shadow-2xs hover:bg-white hover:border-[#7A1F5C]/40 transition-all">
                  <div className="w-7 h-7 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 7: FINAL CTA */}
      <section id="cta">
        <CTASection
          title="Build Your Next Technology Team"
          subtitle="Whether you're hiring AI specialists, software engineers, cloud experts, data professionals, or technology leaders, we help you find the talent you need to move forward."
          primaryLabel="Hire Technology Talent"
          primaryHref="/contact"
          secondaryLabel="Talk to Our Team"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
