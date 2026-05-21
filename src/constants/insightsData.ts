export interface InsightDetail {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: {
    type: 'text' | 'heading' | 'quote' | 'list' | 'image';
    value: string | string[];
  }[];
  relatedInsights: string[];
}

export const INSIGHTS_SUMMARY = [
  {
    slug: 'future-of-ai-recruitment-2026',
    title: 'The Future of AI in Global Recruitment: Trends for 2026',
    category: 'Blogs',
    date: 'May 14, 2026',
    excerpt: 'How artificial intelligence is reshaping talent acquisition and what enterprise leaders need to know to stay competitive.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    readTime: '6 min read'
  },
  {
    slug: 'scaling-healthcare-workforces',
    title: 'Scaling Healthcare Workforces in a Post-Pandemic World',
    category: 'Case Studies',
    date: 'May 10, 2026',
    excerpt: 'Strategic approaches to clinical staffing and operational excellence in rapidly evolving medical environments.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    readTime: '5 min read'
  },
  {
    slug: 'fintech-talent-war',
    title: 'Winning the Fintech Talent War: A Strategic Guide',
    category: 'Newsletters',
    date: 'May 05, 2026',
    excerpt: 'Why traditional banking and fintech startups are competing for the same elite engineering talent and how to win.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    readTime: '8 min read'
  }
];

export const INSIGHTS_DETAILED: InsightDetail[] = [
  {
    slug: 'future-of-ai-recruitment-2026',
    title: 'The Future of AI in Global Recruitment: Trends for 2026',
    category: 'Blogs',
    date: 'May 14, 2026',
    author: {
      name: 'James Wilson',
      role: 'Director of Strategy',
      image: '/team/team-6.png'
    },
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'How artificial intelligence is reshaping talent acquisition and what enterprise leaders need to know to stay competitive.',
    content: [
      { type: 'text', value: 'As we move deeper into 2026, the intersection of artificial intelligence and recruitment has transitioned from a theoretical advantage to a core operational necessity. Enterprise organizations that have successfully integrated AI into their talent workflows are seeing a 40% reduction in time-to-hire and a significant improvement in candidate quality.' },
      { type: 'heading', value: '1. Predictive Talent Mapping' },
      { type: 'text', value: 'Modern AI systems are no longer just scanning resumes; they are predicting talent availability before a role even opens. By analyzing market trends, project cycles, and individual career trajectories, AI allows recruitment partners like Chalky Infotech to build "ready-now" talent pipelines for our clients.' },
      { type: 'quote', value: 'AI doesn’t replace the human recruiter; it provides the recruiter with the data-driven superpowers needed to make better human decisions.' },
      { type: 'heading', value: '2. Bias Mitigation & Ethical Sourcing' },
      { type: 'text', value: 'One of the most significant shifts in 2026 is the use of AI to actively remove unconscious bias. Through blind screening algorithms and performance-based matching, we are helping our clients build more diverse and inclusive workforces across the UK and India.' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop' },
      { type: 'heading', value: '3. The Rise of the AI-First Candidate' },
      { type: 'text', value: 'Candidates are also using AI to find the right roles. This means that job descriptions and employer branding must be "algorithm-friendly" while remaining deeply authentic. At Chalky Infotech, we help organizations bridge this gap by optimizing their digital footprint for the modern talent ecosystem.' }
    ],
    relatedInsights: ['fintech-talent-war', 'scaling-healthcare-workforces']
  },
  {
    slug: 'scaling-healthcare-workforces',
    title: 'Scaling Healthcare Workforces in a Post-Pandemic World',
    category: 'Case Studies',
    date: 'May 10, 2026',
    author: {
      name: 'Priya Nair',
      role: 'Head of Talent Acquisition',
      image: '/team/team-4.png'
    },
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Strategic approaches to clinical staffing and operational excellence in rapidly evolving medical environments.',
    content: [
      { type: 'text', value: 'The healthcare sector continues to face unprecedented staffing challenges. As operational demands increase, the need for a scalable, flexible workforce has never been more critical. Traditional recruitment models are often too slow to react to the dynamic needs of modern medical institutions.' },
      { type: 'heading', value: 'Addressing the Clinical Shortage' },
      { type: 'text', value: 'By leveraging global talent pools and specialized clinical vetting processes, we enable healthcare providers to fill critical gaps in their nursing and allied health teams within days rather than months.' },
      { type: 'list', value: ['Credential verification automation', 'Global nursing pipelines', 'Cross-border compliance management', 'Scalable temporary staffing cohorts'] }
    ],
    relatedInsights: ['future-of-ai-recruitment-2026']
  },
  {
    slug: 'fintech-talent-war',
    title: 'Winning the Fintech Talent War: A Strategic Guide',
    category: 'Newsletters',
    date: 'May 05, 2026',
    author: {
      name: 'Himanshu Mudgal',
      role: 'Head of Client Success',
      image: '/team/himanshu-mudgal.png'
    },
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Why traditional banking and fintech startups are competing for the same elite engineering talent and how to win.',
    content: [
      { type: 'text', value: 'The battle for engineering talent in the financial sector has reached a tipping point. With traditional banks undergoing massive digital transformations and fintech startups scaling at light speed, the competition for specialized developers and architects is fierce.' },
      { type: 'heading', value: 'The Hybrid Advantage' },
      { type: 'text', value: 'Candidates today are looking for more than just a competitive salary. They want stability paired with innovation. We help our financial clients build value propositions that appeal to the "hybrid" professionalthose who understand the rigor of finance and the speed of tech.' }
    ],
    relatedInsights: ['future-of-ai-recruitment-2026']
  }
];
