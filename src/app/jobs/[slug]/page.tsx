import type { Metadata } from 'next';
import { MapPin, Briefcase, Clock, PoundSterling, Share2, Printer, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import FAQSchema from '@/components/FAQSchema';
import { buildPageMetadataWithImage } from '@/lib/seo-images';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: 'it-staffing' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return buildPageMetadataWithImage({
    title: `${title} | Chalky Infotech Careers`,
    description: `Apply for the ${title} role at Chalky Infotech. Partnering with top-tier organizations globally.`,
    keywords: [title, 'careers', 'jobs', 'recruitment', 'staffing', 'Chalky Infotech'],
    url: `/jobs/${slug}`,
    path: '/hero-jobs.png',
    alt: `Career opportunity for ${title} at Chalky Infotech`
  });
}

async function JobDetailPageContent({ params }: Props) {
  const { slug } = await params;
  const jobTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const jobFaqs = [
    {
      question: 'What is the recruitment process for this position?',
      answer: 'Our process begins with an initial CV review by our technology recruiters. Shortlisted applicants will participate in a brief phone screening, followed by a technical assessment (coding test or portfolio review) and a final round interview with the hiring manager.'
    },
    {
      question: 'Does Chalky Infotech support visa sponsorship or relocation?',
      answer: 'Relocation support and visa sponsorship depend on the hiring company and the applicant\'s eligibility. Please mention your current work authorization status and relocation preferences during your initial screening call.'
    },
    {
      question: 'What benefits and remote work policies are offered?',
      answer: 'This role offers a hybrid working model (typically 2-3 days in the London office). Benefits include a competitive pension scheme, private health insurance, annual bonuses, and structured career progression pathways.'
    }
  ];

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobTitle,
    description: `We are currently partnering with a globally recognized enterprise to identify a highly skilled ${jobTitle}. In this critical role, you will be responsible for driving technical innovation, optimizing existing architectures, and collaborating with cross-functional teams to deliver scalable solutions.`,
    datePosted: '2026-07-04',
    validThrough: '2026-10-04',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Chalky Infotech',
      sameAs: 'https://chalkyinfo.com',
      logo: 'https://chalkyinfo.com/icon.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressRegion: 'Greater London',
        addressCountry: 'GB',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'GBP',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 90000,
        maxValue: 120000,
        unitText: 'YEAR',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <FAQSchema items={jobFaqs} />

      <div className="bg-[#7A1F5C] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link>
            <span>/</span>
            <span className="text-white">{jobTitle}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Technology</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{jobTitle}</h1>
              <div className="flex flex-wrap gap-6 text-sm font-medium">
                <span className="flex items-center gap-2"><MapPin size={16} className="opacity-70"/> London, UK (Hybrid)</span>
                <span className="flex items-center gap-2"><Briefcase size={16} className="opacity-70"/> Full-Time</span>
                <span className="flex items-center gap-2"><Clock size={16} className="opacity-70"/> Posted 2 days ago</span>
                <span className="flex items-center gap-2"><PoundSterling size={16} className="opacity-70"/> £90,000 - £120,000</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-[#7A1F5C] px-8 py-4 rounded-xl font-bold hover:bg-[#F5F0E8] transition-all flex items-center gap-2 shadow-lg">
                Apply Now <ArrowUpRight size={18} />
              </button>
              <button className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 bg-white p-8 md:p-12 rounded-[2rem] border border-[#EFE7DD] shadow-sm">
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">About The Role</h2>
              <p className="text-[#555555] leading-relaxed mb-4">
                We are currently partnering with a globally recognized enterprise to identify a highly skilled <strong>{jobTitle}</strong>. In this critical role, you will be responsible for driving technical innovation, optimizing existing architectures, and collaborating with cross-functional teams to deliver scalable solutions.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Our client is known for its forward-thinking culture, investment in modern tech stacks, and commitment to employee growth. This is a unique opportunity to make a measurable impact on a platform used by millions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Key Responsibilities</h2>
              <ul className="space-y-4">
                {[
                  'Lead the design, development, and deployment of robust software architectures.',
                  'Collaborate with product managers and stakeholders to translate business requirements into technical specifications.',
                  'Mentor junior engineers and foster a culture of continuous learning and code quality.',
                  'Optimize application performance and ensure high availability of critical systems.',
                  'Participate in agile ceremonies, code reviews, and architecture planning sessions.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555555] leading-relaxed">
                    <CheckCircle2 size={20} className="text-[#7A1F5C] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Requirements</h2>
              <ul className="space-y-4">
                {[
                  'Minimum 5 years of professional experience in a similar senior role.',
                  'Deep expertise in modern programming languages, cloud platforms (AWS/GCP/Azure), and microservices architecture.',
                  'Proven track record of delivering complex, high-scale projects from inception to production.',
                  'Strong problem-solving skills and the ability to communicate technical concepts to non-technical stakeholders.',
                  'Bachelor\'s or Master\'s degree in Computer Science, Engineering, or a related field (or equivalent practical experience).'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555555] leading-relaxed">
                    <CheckCircle2 size={20} className="text-[#7A1F5C] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-8 border-t border-[#EFE7DD]">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {jobFaqs.map((faq, i) => (
                  <div key={i} className="bg-[#F9F9F9] p-6 rounded-2xl border border-[#EFE7DD]">
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{faq.question}</h3>
                    <p className="text-sm text-[#555555] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-[#EFE7DD] shadow-sm">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Job Summary</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Industry</p>
                  <p className="font-semibold text-[#1A1A1A]">Technology</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Location</p>
                  <p className="font-semibold text-[#1A1A1A]">London, UK</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Employment Type</p>
                  <p className="font-semibold text-[#1A1A1A]">Full-Time, Hybrid</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Salary Range</p>
                  <p className="font-semibold text-[#7A1F5C]">£90,000 - £120,000</p>
                </div>
              </div>
              <button className="w-full mt-8 bg-[#7A1F5C] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#C2185B] transition-all flex items-center justify-center gap-2 shadow-lg">
                Apply For This Role <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-[2rem]">
               <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Need Assistance?</h3>
               <p className="text-[#555555] text-sm leading-relaxed mb-6">
                 If you have questions regarding this role or the application process, our recruitment team is here to help.
               </p>
               <Link href="/contact" className="text-[#7A1F5C] font-bold text-sm hover:underline flex items-center gap-2">
                 Contact Recruiter <ArrowUpRight size={14} />
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobDetailPage({ params }: Props) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
        <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/15 border-t-[#7A1F5C] animate-spin mb-4"></div>
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A1F5C]/60">Loading job details...</p>
      </div>
    }>
      <JobDetailPageContent params={params} />
    </Suspense>
  );
}
