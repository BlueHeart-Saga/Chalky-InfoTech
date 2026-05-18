'use client';

import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface Category {
  name: string;
  slug: string;
  description?: string;
}

interface Section {
  name: string;
  slug: string;
  categories: Category[];
}

interface Props {
  siteStructure: Section[];
}

const FALLBACK_CATEGORIES = [
  {
    name: 'Technology & Cloud',
    description: 'Deep dives into engineering trends, cloud migration, AI adoption, and modern software talent scaling.',
    slug: 'it-technology',
    bg: 'bg-[#C2DDE5]/30',
    icon: 'Cpu'
  },
  {
    name: 'Executive & C-Suite',
    description: 'Attracting and retaining global leadership, C-level compensation trends, and leadership placement models.',
    slug: 'executive-search',
    bg: 'bg-[#DBCB89]/20',
    icon: 'Award'
  },
  {
    name: 'Workforce & Scaling',
    description: 'Contract staffing efficiency, managed services supply chains, and onboarding high-retention cohorts.',
    slug: 'contract-staffing',
    bg: 'bg-[#7A1F5C]/10',
    icon: 'Layers'
  },
  {
    name: 'Global Remote Hiring',
    description: 'Compliance and borderless talent hubs, remote team productivity, and international payroll structures.',
    slug: 'remote-hiring',
    bg: 'bg-[#7A1F5C]/5',
    icon: 'Globe'
  }
];

function getPremiumCategoryDescription(slug: string, fallback: string) {
  const s = slug.toLowerCase();
  if (!fallback || fallback.startsWith('Explore our') || fallback.includes('description') || fallback.trim() === "") {
    if (s.includes('blog')) return "Thought leadership, industry insights, and strategic perspectives on global tech recruitment.";
    if (s.includes('case-studies') || s.includes('case-study') || s.includes('stories')) return "Real-world success stories, digital transformation journeys, and metric-driven talent acquisition solutions.";
    if (s.includes('newsletter') || s.includes('letter')) return "Stay ahead with our monthly briefing on engineering hiring trends, compliance guidelines, and market forecasts.";
    if (s.includes('podcast')) return "Conversations with industry leaders, C-suite executives, and talent innovators on building world-class teams.";
    if (s.includes('achievement') || s.includes('award') || s.includes('milestone')) return "Celebrating our team's recognition, industry awards, and compliance excellence milestones.";
    if (s.includes('announcement') || s.includes('news')) return "Official company updates, strategic expansions, compliance hubs, and executive appointments.";
    if (s.includes('event') || s.includes('industry-events')) return "Upcoming webinars, leadership roundtables, and international staffing conferences hosted by Chalky Tech.";
    if (s.includes('celebration') || s.includes('party')) return "Behind-the-scenes looks at our team celebrations, social impact, and core value expressions.";
    if (s.includes('community') || s.includes('life')) return "Our active participation in global community programs, education initiatives, and social development.";
    if (s.includes('culture') || s.includes('team')) return "Discover the collaborative, inclusive and high-performance culture that drives Chalky Tech.";
    if (s.includes('client-transformation') || s.includes('transformation')) return "Deep-dive case studies showcasing how we assist global enterprise clients to scale tech teams and drive technical excellence.";
    if (s.includes('impact-metric') || s.includes('metric')) return "Strategic operational metrics tracking onboarding efficiency, retention achievements, and cost-to-hire benchmarks.";
    if (s.includes('testimonial')) return "Firsthand feedback and reviews from our global enterprise clients, executive hires, and software engineers.";
    if (s.includes('poster')) return "Visual updates, campaign posters, and creative media showcasing Chalky's unique corporate presence and brand values.";
    if (s.includes('it-staffing')) return "Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.";
    if (s.includes('executive-search')) return "Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.";
    if (s.includes('contract-staffing')) return "Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.";
    if (s.includes('remote-hiring')) return "Global remote hiring services enabling you to build borderless teams with top-tier international professionals.";
  }
  return fallback;
}

function getCategoryDesign(slug: string, index: number) {
  const s = slug.toLowerCase();
  
  let icon = 'Cpu';
  let bg = 'bg-[#C2DDE5]/30';
  
  const presets = [
    { bg: 'bg-[#C2DDE5]/30', icon: 'Cpu' },
    { bg: 'bg-[#DBCB89]/20', icon: 'Award' },
    { bg: 'bg-[#7A1F5C]/10', icon: 'Layers' },
    { bg: 'bg-[#7A1F5C]/5', icon: 'Globe' }
  ];
  
  const preset = presets[index % presets.length];
  bg = preset.bg;
  icon = preset.icon;

  if (s.includes('blog')) {
    icon = 'BookOpen';
    bg = 'bg-[#FAF0E6]';
  } else if (s.includes('case') || s.includes('stories')) {
    icon = 'FileText';
    bg = 'bg-[#7A1F5C]/10';
  } else if (s.includes('newsletter') || s.includes('mail')) {
    icon = 'Mail';
    bg = 'bg-[#C2DDE5]/20';
  } else if (s.includes('podcast')) {
    icon = 'Mic';
    bg = 'bg-[#DBCB89]/30';
  } else if (s.includes('event')) {
    icon = 'Calendar';
    bg = 'bg-[#FAF8F5]';
  }

  return { icon, bg };
}

export default function SectorCategories({ siteStructure }: Props) {
  // Aggregate all unique categories dynamically from backend siteStructure
  const dynamicCategories = siteStructure
    ? siteStructure.flatMap(sec => sec.categories || [])
    : [];

  const displayCategories = dynamicCategories.length > 0 ? dynamicCategories : FALLBACK_CATEGORIES;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayCategories.map((cat, idx) => {
        // Resolve dynamic design or fallback properties
        const design = 'bg' in cat 
          ? { icon: (cat as any).icon, bg: (cat as any).bg } 
          : getCategoryDesign(cat.slug, idx);

        const CategoryIcon = (LucideIcons as any)[design.icon] || LucideIcons.Layers;

        return (
          <Link
            key={cat.slug}
            href={`/insights/${cat.slug}`}
            className="relative flex flex-col justify-between p-8 pt-10 pb-12 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#EFE7DD] bg-white rounded-[2rem_0.5rem_2rem_0.5rem] group"
          >
            <div>
              {/* Organic circular badge around icon */}
              <div className={`w-12 h-12 rounded-xl ${design.bg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <CategoryIcon size={22} className="text-[#7A1F5C]" />
              </div>

              <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors mb-3">
                {cat.name}
              </h4>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {getPremiumCategoryDescription(cat.slug, cat.description || '')}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#7A1F5C] uppercase tracking-widest group-hover:underline mt-auto">
              View Articles <LucideIcons.ArrowRight size={13} />
            </span>

          </Link>
        );
      })}
    </div>
  );
}
