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

  // Define styles for sticky notes
  const PIN_STYLES = [
    { 
      tint: "bg-[#FFF4E5]", 
      text: "text-[#EA580C]", 
      pin: "from-[#FB923C] to-[#C2410C]",
      shadow: "shadow-[#FB923C]/20"
    },
    { 
      tint: "bg-[#EDF2FF]", 
      text: "text-[#4F46E5]", 
      pin: "from-[#60A5FA] to-[#1D4ED8]",
      shadow: "shadow-[#60A5FA]/20"
    },
    { 
      tint: "bg-[#F5EEFF]", 
      text: "text-[#9333EA]", 
      pin: "from-[#A855F7] to-[#6B21A8]",
      shadow: "shadow-[#A855F7]/20"
    },
    { 
      tint: "bg-[#FFE8F0]", 
      text: "text-[#E53888]", 
      pin: "from-[#F472B6] to-[#BE185D]",
      shadow: "shadow-[#F472B6]/20"
    }
  ];

  const ROTATIONS = [
    "rotate-[-3deg]",
    "rotate-[2deg]",
    "rotate-[-1deg]",
    "rotate-[3deg]"
  ];

  return (
    <div className="relative">
      {/* Decorative Dashed Path (Hidden on mobile) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 pointer-events-none">
        <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
          <path 
            d="M 0,0 Q 300,100 600,0 T 1200,0" 
            fill="none" 
            stroke="#D1D5DB" 
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10 pt-4 pb-8">
        {displayCategories.map((cat, idx) => {
          const style = PIN_STYLES[idx % PIN_STYLES.length];
          const rotation = ROTATIONS[idx % ROTATIONS.length];
          const numberStr = String(idx + 1).padStart(2, '0'); // "01", "02"

          return (
            <Link
              key={cat.slug}
              href={`/insights/${cat.slug}`}
              className={`block group transition-all duration-500 hover:z-20 hover:scale-[1.03] ${rotation}`}
            >
              {/* The White Sticky Note Base */}
              <div className="bg-white p-3.5 rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] h-[320px] flex flex-col relative transition-shadow duration-500">
                
                {/* 3D Pin Container */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  {/* Pin Head (Sphere) */}
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${style.pin} shadow-lg ${style.shadow} border border-white/20 relative z-10`}>
                    {/* Sphere Highlight */}
                    <div className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/50 blur-[0.5px]"></div>
                  </div>
                  {/* Pin shadow projected downwards */}
                  <div className="w-1.5 h-3 bg-black/15 blur-[1.5px] -mt-1 rounded-b-full"></div>
                </div>

                {/* The Inner Colored Area */}
                <div className={`flex-1 rounded-[1.25rem] p-6 flex flex-col ${style.tint}`}>
                  {/* Stylized Number */}
                  <div className={`text-2xl font-semibold italic mb-4 opacity-90 ${style.text}`} style={{ fontFamily: 'Georgia, serif' }}>
                    {numberStr}
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {cat.name}
                  </h4>
                  
                  <p className="text-[#4A4A4A] text-[13px] leading-relaxed mb-6 line-clamp-4">
                    {getPremiumCategoryDescription(cat.slug, cat.description || '')}
                  </p>

                  <span className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${style.text}`}>
                    View Content <LucideIcons.ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
