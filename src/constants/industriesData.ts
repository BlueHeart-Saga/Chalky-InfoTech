export interface IndustryDetail {
  slug: string;
  label: string;
  icon: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
  };
  overview: {
    title: string;
    description: string;
  };
  challenges: string[];
  roles: string[];
  services: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  capabilities: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export const INDUSTRIES_DETAILED: IndustryDetail[] = [
  {
    slug: 'it-technology',
    label: 'IT & Technology',
    icon: 'Cpu',
    hero: {
      badge: 'Tech Workforce Solutions',
      title: 'IT & Technology Recruitment Solutions',
      subtitle: 'Specialized workforce solutions supporting software engineering, cloud operations, and digital transformation initiatives.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Digital Innovation Talent',
      description: 'We help technology organizations secure highly skilled professionals aligned with agile development, cloud infrastructure, and emerging tech projects.',
    },
    challenges: [
      'Rapidly evolving tech stacks',
      'Niche skill shortages',
      'Remote team integration',
      'High talent competition'
    ],
    roles: [
      'Full Stack Developers',
      'Cloud Architects',
      'DevOps Engineers',
      'Data Scientists',
      'Product Managers',
      'Security Specialists'
    ],
    services: [
      'Contract Staffing',
      'Permanent Hiring',
      'Managed Services',
      'Remote Teams'
    ],
    faqs: [
      { q: 'What tech stacks do you cover?', a: 'We cover major stacks including React/Next.js, Java, Python, AWS, Azure, and Google Cloud.' },
      { q: 'Can you provide project-based teams?', a: 'Yes, we specialize in building project-ready squads for digital transformation.' }
    ],
    capabilities: [
      { title: 'Agile Delivery', desc: 'Teams optimized for modern sprint cycles.', icon: 'Zap' },
      { title: 'Tech Vetting', desc: 'Deep technical assessments for every role.', icon: 'ShieldCheck' }
    ]
  },
  {
    slug: 'telecommunications',
    label: 'Telecommunications',
    icon: 'Radio',
    hero: {
      badge: 'Connectivity Workforce',
      title: 'Telecommunications Recruitment Solutions',
      subtitle: 'Scaling engineering and operational teams for 5G rollout, network infrastructure, and global connectivity projects.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Connected Future Talent',
      description: 'The telecom industry requires specialized engineering expertise to manage the transition to 5G and fiber-optic networks. We connect you with professionals who understand the future of connectivity.',
    },
    challenges: [
      'Complex infrastructure rollout',
      'Spectrum management expertise',
      'Network security protocols',
      'Multi-regional coordination'
    ],
    roles: [
      'Network Engineers',
      'RF Engineers',
      'Infrastructure Project Managers',
      'Fiber Optic Specialists',
      'NOC Technicians',
      'Telecom Sales Executives'
    ],
    services: [
      'Contract Staffing',
      'Permanent Hiring',
      'On-Site Support',
      'Project Recruitment'
    ],
    faqs: [
      { q: 'Do you support 5G rollout projects?', a: 'Yes, we have a specialized network of RF and Network engineers experienced in 5G infrastructure.' },
      { q: 'Can you handle regional field hiring?', a: 'We manage large-scale field recruitment across multiple territories.' }
    ],
    capabilities: [
      { title: 'Field Ready', desc: 'Staff vetted for on-site infrastructure work.', icon: 'MapPin' },
      { title: 'Network Insight', desc: 'Consultants with core telecom backgrounds.', icon: 'Cpu' }
    ]
  },
  {
    slug: 'cybersecurity',
    label: 'Cybersecurity',
    icon: 'Shield',
    hero: {
      badge: 'Security Expertise',
      title: 'Cybersecurity Workforce Solutions',
      subtitle: 'Building elite security teams to protect critical infrastructure and enterprise data from evolving global threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Defensive Talent Strategy',
      description: 'With cyber threats becoming more sophisticated, organizations need specialized security talent. We identify the rare professionals capable of building resilient defense ecosystems.',
    },
    challenges: [
      'Severe security skill gap',
      'Rapidly evolving threat landscape',
      'Strict regulatory compliance',
      '24/7 monitoring requirements'
    ],
    roles: [
      'SOC Analysts',
      'Penetration Testers',
      'Security Architects',
      'CISO & Security Leadership',
      'Incident Response Managers',
      'Cloud Security Engineers'
    ],
    services: [
      'Executive Search',
      'Permanent Hiring',
      'Contract Specialists',
      'Managed Security Teams'
    ],
    faqs: [
      { q: 'Do you vet security clearance?', a: 'Yes, we handle initial verification and coordinate official security clearance processes.' },
      { q: 'Can you provide 24/7 SOC teams?', a: 'We specialize in building fully-staffed, multi-shift security operations centers.' }
    ],
    capabilities: [
      { title: 'Zero Trust Focus', desc: 'Candidates expert in modern security models.', icon: 'ShieldAlert' },
      { title: 'Rapid Sourcing', desc: 'Connecting with passive security talent.', icon: 'Search' }
    ]
  },
  {
    slug: 'ai-data-science',
    label: 'AI & Data Science',
    icon: 'Brain',
    hero: {
      badge: 'Intelligence Workforce',
      title: 'AI & Data Science Recruitment Solutions',
      subtitle: 'Sourcing the specialized engineers and researchers driving the next generation of artificial intelligence and data-driven innovation.',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Intelligent Future Talent',
      description: 'The race for AI supremacy depends on talent. We specialize in identifying the researchers and engineers capable of building complex LLMs and data pipelines.',
    },
    challenges: [
      'Extreme competition for AI talent',
      'High research-to-production gap',
      'Complex data privacy ethics',
      'Niche mathematical expertise'
    ],
    roles: [
      'Machine Learning Engineers',
      'Data Engineers',
      'AI Researchers',
      'NLP Specialists',
      'Computer Vision Engineers',
      'Data Architects'
    ],
    services: [
      'Permanent Hiring',
      'Research Search',
      'Project-Based Squads',
      'Remote Talent'
    ],
    faqs: [
      { q: 'Do you cover Generative AI?', a: 'Yes, we have an extensive network of specialists in LLMs, Diffusion models, and RAG architectures.' },
      { q: 'Can you source PhD-level talent?', a: 'We specialize in academic-to-industry research leadership placements.' }
    ],
    capabilities: [
      { title: 'Deep Tech Vetting', desc: 'Mathematical and algorithmic competency tests.', icon: 'Binary' },
      { title: 'Global AI Hubs', desc: 'Sourcing from major innovation centers.', icon: 'Globe' }
    ]
  },
  {
    slug: 'banking-finance',
    label: 'Banking & Finance',
    icon: 'Landmark',
    hero: {
      badge: 'Financial Talent',
      title: 'Banking & Finance Recruitment Solutions',
      subtitle: 'Connecting global financial institutions with top-tier professionals in fintech, compliance, and core banking operations.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Strategic Financial Workforce',
      description: 'We help banking and finance organizations secure highly skilled professionals aligned with digital banking, risk management, and regulatory compliance.',
    },
    challenges: [
      'Complex regulatory landscape',
      'Legacy system transformation',
      'High security requirements',
      'Data-driven financial shifts'
    ],
    roles: [
      'Compliance Officers',
      'Risk Managers',
      'Investment Bankers',
      'Fintech Developers',
      'Treasury Specialists',
      'Financial Analysts'
    ],
    services: [
      'Permanent Hiring',
      'Executive Search',
      'Contract Specialists',
      'Managed Workforce'
    ],
    faqs: [
      { q: 'Do you support Fintech startups?', a: 'Yes, we help rapid-growth fintechs scale their engineering and product teams.' },
      { q: 'Can you manage high-volume compliance hiring?', a: 'We specialize in building large-scale compliance and risk cohorts.' }
    ],
    capabilities: [
      { title: 'Regulatory Insight', desc: 'Candidates vetted for industry compliance.', icon: 'Scale' },
      { title: 'Fintech Core', desc: 'Bridging traditional finance and digital tech.', icon: 'Zap' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    label: 'Healthcare & Life Sciences',
    icon: 'Activity',
    hero: {
      badge: 'Healthcare Workforce',
      title: 'Healthcare & Life Sciences Solutions',
      subtitle: 'Specialized workforce solutions supporting healthcare providers, biotech, and pharmaceutical organizations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Life-Saving Talent Strategy',
      description: 'We help healthcare organizations secure professionals capable of driving clinical excellence and medical innovation across global markets.',
    },
    challenges: [
      'Severe clinical shortages',
      'Strict medical compliance',
      'Rapid biotech scaling',
      'Specialized operational roles'
    ],
    roles: [
      'Clinical Research Associates',
      'Healthcare Ops Managers',
      'Medical Technologists',
      'Compliance Coordinators',
      'Biotech Engineers',
      'Health IT Specialists'
    ],
    services: [
      'Permanent Hiring',
      'Temporary Workforce',
      'Contract Specialists',
      'Executive Search'
    ],
    faqs: [
      { q: 'Do you vet medical credentials?', a: 'Yes, we handle comprehensive credential verification for all medical and clinical roles.' },
      { q: 'Can you support seasonal healthcare demands?', a: 'Our temporary workforce model is designed for rapid seasonal scaling.' }
    ],
    capabilities: [
      { title: 'Clinical Vetting', desc: 'Specialized medical competency reviews.', icon: 'HeartPulse' },
      { title: 'Pharma Focus', desc: 'Sourcing talent for drug discovery and trials.', icon: 'FlaskConical' }
    ]
  },
  {
    slug: 'retail-ecommerce',
    label: 'Retail & E-Commerce',
    icon: 'ShoppingCart',
    hero: {
      badge: 'Commerce Solutions',
      title: 'Retail & E-Commerce Recruitment Solutions',
      subtitle: 'Optimizing the modern consumer journey with specialists in omnichannel retail and e-commerce technology.',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Omnichannel Future Talent',
      description: 'We help retail organizations transition to digital-first models by providing the talent needed to manage complex e-commerce and supply chain ecosystems.',
    },
    challenges: [
      'Digital-first retail shift',
      'Omnichannel complexity',
      'Seasonal demand peaks',
      'Supply chain volatility'
    ],
    roles: [
      'E-commerce Managers',
      'Supply Chain Specialists',
      'UX/UI Designers',
      'Digital Marketing Leads',
      'Retail Operations Managers',
      'Customer Experience Directors'
    ],
    services: [
      'Temporary Workforce',
      'Contract Staffing',
      'Permanent Hiring',
      'Managed Services'
    ],
    faqs: [
      { q: 'How do you handle Black Friday peaks?', a: 'We provide high-volume temporary cohorts to manage seasonal commerce surges.' },
      { q: 'Do you source Shopify or Magento experts?', a: 'Yes, we have specialized pools for all major e-commerce platforms.' }
    ],
    capabilities: [
      { title: 'Customer First', desc: 'Candidates focused on the user journey.', icon: 'UserCircle' },
      { title: 'Supply Chain Ready', desc: 'Talent that understands modern logistics.', icon: 'Truck' }
    ]
  },
  {
    slug: 'manufacturing',
    label: 'Manufacturing',
    icon: 'Factory',
    hero: {
      badge: 'Industrial Talent',
      title: 'Manufacturing Recruitment Solutions',
      subtitle: 'Delivering engineering excellence and operational leadership for Industry 4.0 and advanced manufacturing.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Advanced Industrial Workforce',
      description: 'We help manufacturing organizations secure the engineering and operational talent needed to drive automation and Industry 4.0 initiatives.',
    },
    challenges: [
      'Technical skill gap',
      'Automation transition',
      'Operational safety standards',
      'Supply chain resilience'
    ],
    roles: [
      'Process Engineers',
      'Automation Specialists',
      'Plant Managers',
      'Quality Control Leads',
      'Industrial Designers',
      'Supply Chain Managers'
    ],
    services: [
      'On-Site Support',
      'Permanent Hiring',
      'Contract Engineering',
      'Managed Workforce'
    ],
    faqs: [
      { q: 'Do you cover Industry 4.0 roles?', a: 'Yes, we specialize in sourcing IoT and Automation engineers for smart factories.' },
      { q: 'Can you provide on-site team management?', a: 'Our on-site model is perfect for large-scale manufacturing facilities.' }
    ],
    capabilities: [
      { title: 'Engineering Focus', desc: 'Rigorous vetting for technical industrial roles.', icon: 'Settings' },
      { title: 'Operational Safety', desc: 'Ensuring candidates meet high safety standards.', icon: 'HardHat' }
    ]
  }
];
