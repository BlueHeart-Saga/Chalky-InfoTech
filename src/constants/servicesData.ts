export interface ServiceDetail {
  slug: string;
  label: string;
  icon: string;
  desc: string;
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
  benefits: string[];
  industries: string[];
  process: {
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export const SERVICES_DETAILED: ServiceDetail[] = [
  {
    slug: 'it-staffing',
    label: 'IT Staffing',
    icon: 'Code2',
    desc: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.',
    hero: {
      badge: 'Elite Tech Talent',
      title: 'Specialized IT Staffing Solutions',
      subtitle: 'Building high-performance technology teams through precision recruitment of software, cloud, and data engineering professionals.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Digital Transformation Talent',
      description: 'In the rapidly evolving tech landscape, having the right engineers is the ultimate competitive advantage. Our IT staffing solutions focus on deep technical vetting and cultural alignment.',
    },
    benefits: [
      'Access to elite 1% tech talent',
      'Specialized technical vetting',
      'Reduced time-to-hire for niche roles',
      'Scalable engineering teams',
      'Future-proof technology skills',
      'Project-aligned talent delivery'
    ],
    industries: ['Software', 'Fintech', 'Cloud Computing', 'AI & Data'],
    process: [
      { title: 'Technical Briefing', desc: 'Understanding your tech stack and architecture.' },
      { title: 'Market Mapping', desc: 'Identifying top passive talent in the sector.' },
      { title: 'Vetting', desc: 'Rigorous technical and behavioral assessments.' },
      { title: 'Placement', desc: 'Seamless integration into your sprint cycles.' }
    ],
    faqs: [
      { q: 'How do you vet technical talent?', a: 'We use a combination of technical coding challenges and deep-dive architectural interviews led by sector specialists.' },
      { q: 'Can you provide remote developers?', a: 'Yes, we have a global network of remote-ready engineers across UK and India hubs.' }
    ],
    features: [
      { title: 'Full-Stack Expertise', desc: 'From frontend to backend and DevOps.', icon: 'Layers' },
      { title: 'Rapid Deployment', desc: 'Filling critical roles within 14-21 days.', icon: 'Zap' }
    ]
  },
  {
    slug: 'executive-search',
    label: 'Executive Search',
    icon: 'TrendingUp',
    desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.',
    hero: {
      badge: 'Leadership & Strategy',
      title: 'Executive Search & Leadership Advisory',
      subtitle: 'Attracting world-class C-suite leaders and strategic visionaries to drive your organizational transformation.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Strategic Leadership Acquisition',
      description: 'The right leader can reshape an entire organization. Our discreet, high-impact executive search services are designed to identify leaders who align with your long-term vision.',
    },
    benefits: [
      'Discreet and confidential search',
      'Global leadership network',
      'In-depth behavioral assessment',
      'Market mapping and insights',
      'Board-level consulting',
      'Strategic cultural alignment'
    ],
    industries: ['Enterprise', 'Banking', 'Technology', 'Healthcare'],
    process: [
      { title: 'Strategic Briefing', desc: 'Defining the leadership vision and requirements.' },
      { title: 'Confidential Search', desc: 'Engaging top-tier passive candidates discreetly.' },
      { title: 'Executive Review', desc: 'Multi-stage leadership potential assessments.' },
      { title: 'Appointment', desc: 'Comprehensive offer and onboarding management.' }
    ],
    faqs: [
      { q: 'Is the search process confidential?', a: 'Absolutely. We operate with the highest level of discretion for both the client and the candidate.' },
      { q: 'What is your success rate for C-suite roles?', a: 'We maintain a 98% successful placement rate for our executive searches.' }
    ],
    features: [
      { title: 'Global Benchmarking', desc: 'Comparing talent across international markets.', icon: 'Globe' },
      { title: 'Retention Focus', desc: 'Ensuring long-term leadership stability.', icon: 'ShieldCheck' }
    ]
  },
  {
    slug: 'contract-staffing',
    label: 'Contract Staffing',
    icon: 'Clock',
    desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.',
    hero: {
      badge: 'Flexible Workforce',
      title: 'Contract Staffing Solutions',
      subtitle: 'Scalable contract staffing services helping organizations access highly skilled professionals for project-based needs.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Agile Workforce Support',
      description: 'Our contract staffing solutions enable businesses to scale teams efficiently while maintaining operational flexibility and access to specialized expertise.',
    },
    benefits: [
      'Rapid workforce deployment',
      'Flexible hiring models',
      'Reduced operational overhead',
      'Access to specialized professionals',
      'Scalable workforce support',
      'Fast project onboarding'
    ],
    industries: ['Technology', 'Healthcare', 'Finance', 'Retail'],
    process: [
      { title: 'Project Scoping', desc: 'Understanding your specific project deliverables.' },
      { title: 'Rapid Sourcing', desc: 'Identifying available contract professionals.' },
      { title: 'Compliance', desc: 'Managing contracts and IR35 compliance.' },
      { title: 'Deployment', desc: 'Fast onboarding and project start.' }
    ],
    faqs: [
      { q: 'How quickly can roles be filled?', a: 'Most contract roles are filled within 5-7 business days.' },
      { q: 'Do you handle payroll?', a: 'Yes, we manage all payroll and compliance for contract staff.' }
    ],
    features: [
      { title: 'Scalable Teams', desc: 'Adjust capacity based on project load.', icon: 'Users' },
      { title: 'Low Risk', desc: 'Flexible engagement terms.', icon: 'CheckCircle' }
    ]
  },
  {
    slug: 'permanent-hiring',
    label: 'Permanent Hiring',
    icon: 'Users',
    desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.',
    hero: {
      badge: 'Long-term Success',
      title: 'Permanent Placement Services',
      subtitle: 'Building the foundation of your success with high-retention talent aligned with your culture and technical needs.',
      image: 'https://images.unsplash.com/photo-1522071823991-b5ae72647c46?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Strategic Talent Investment',
      description: 'Permanent hires are an investment in your company’s future. We use data-driven insights to ensure every hire is a long-term cultural and technical success.',
    },
    benefits: [
      'High retention rates',
      'Deep cultural alignment',
      'Reduced long-term hiring costs',
      'Specialized headhunting',
      'Brand-aligned recruitment',
      'Guaranteed placement support'
    ],
    industries: ['All Sectors', 'Fintech', 'Retail', 'Education'],
    process: [
      { title: 'Culture Deep-dive', desc: 'Mapping your internal culture and values.' },
      { title: 'Targeted Search', desc: 'Sourcing talent that wants to grow with you.' },
      { title: 'Multi-stage Vetting', desc: 'Deep-dive interviews and reference checks.' },
      { title: 'Placement', desc: 'Ensuring a smooth transition and onboarding.' }
    ],
    faqs: [
      { q: 'What is your guarantee?', a: 'We provide a comprehensive placement guarantee to ensure long-term satisfaction.' },
      { q: 'How do you find passive candidates?', a: 'Through our proprietary network and specialized headhunting techniques.' }
    ],
    features: [
      { title: 'Cultural Mapping', desc: 'Ensuring perfect team integration.', icon: 'Heart' },
      { title: 'Retention Focused', desc: 'High-quality, long-term hires.', icon: 'Target' }
    ]
  },
  {
    slug: 'temporary-recruitment',
    label: 'Temporary Recruitment',
    icon: 'UserPlus',
    desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.',
    hero: {
      badge: 'Rapid Response',
      title: 'Temporary Recruitment Services',
      subtitle: 'Scaling your operational capacity instantly with vetted professionals for seasonal peaks and high-volume needs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Instant Operational Scaling',
      description: 'Whether it’s seasonal demand or a sudden project spike, our temporary recruitment solutions provide vetted talent exactly when you need it.',
    },
    benefits: [
      'Immediate talent availability',
      'Flexible contract terms',
      'Seamless payroll management',
      'Scalable high-volume hiring',
      'Vetted professional pool',
      'Reduced administrative burden'
    ],
    industries: ['Logistics', 'Retail', 'Customer Support', 'Manufacturing'],
    process: [
      { title: 'Demand Planning', desc: 'Forecasting your temp requirements.' },
      { title: 'Rapid Sourcing', desc: 'Tapping into our "ready-to-go" talent pool.' },
      { title: 'Deployment', desc: 'Getting staff on-site within 24-48 hours.' },
      { title: 'Support', desc: 'Ongoing management of temp cohorts.' }
    ],
    faqs: [
      { q: 'Can temp staff be hired permanently?', a: 'Yes, we offer flexible temp-to-perm conversion models.' },
      { q: 'How fast can you provide staff?', a: 'We can often deploy staff within 24 hours for urgent needs.' }
    ],
    features: [
      { title: 'High Volume', desc: 'Managing hundreds of placements.', icon: 'Layers' },
      { title: 'Fully Vetted', desc: 'Pre-screened and ready to work.', icon: 'CheckCircle' }
    ]
  },
  {
    slug: 'on-site-recruitment',
    label: 'On-Site Recruitment',
    icon: 'MapPin',
    desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.',
    hero: {
      badge: 'Embedded Partnership',
      title: 'On-Site Recruitment Solutions',
      subtitle: 'Benefit from dedicated recruiters working as a seamless extension of your internal HR and hiring teams.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Internal Team Extension',
      description: 'Our on-site recruiters integrate with your culture, processes, and systems to deliver a fully managed talent acquisition service from within your office.',
    },
    benefits: [
      'Deep organizational integration',
      'Reduced cost-per-hire',
      'Faster hiring cycles',
      'Improved candidate experience',
      'Strategic hiring alignment',
      'Process optimization'
    ],
    industries: ['Tech Scale-ups', 'Large Enterprise', 'Manufacturing'],
    process: [
      { title: 'Integration', desc: 'Embedding our team into your culture.' },
      { title: 'Audit & Design', desc: 'Optimizing your existing hiring workflow.' },
      { title: 'Execution', desc: 'Full-cycle management from within.' },
      { title: 'Reporting', desc: 'Data-driven insights on hiring performance.' }
    ],
    faqs: [
      { q: 'How many recruiters do we get?', a: 'We scale the dedicated team based on your hiring volume and complexity.' },
      { q: 'Is there a minimum contract?', a: 'We offer flexible on-site models ranging from 3 months to multi-year partnerships.' }
    ],
    features: [
      { title: 'Cost Efficient', desc: 'Lower fees through high volume.', icon: 'TrendingDown' },
      { title: 'Brand First', desc: 'Candidates see us as your team.', icon: 'Award' }
    ]
  },
  {
    slug: 'managed-services',
    label: 'Managed Services',
    icon: 'Settings',
    desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.',
    hero: {
      badge: 'Operational Excellence',
      title: 'Managed Workforce Solutions (MSP)',
      subtitle: 'Optimizing your entire talent supply chain through strategic managed services and workforce technology.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Enterprise Workforce Optimization',
      description: 'We manage your entire contingent workforce, from supplier management to compliance and cost control, delivering a unified and efficient talent ecosystem.',
    },
    benefits: [
      'Centralized vendor management',
      'Full compliance & risk control',
      'Significant cost savings',
      'Unified reporting & analytics',
      'Strategic workforce planning',
      'Quality of hire improvement'
    ],
    industries: ['Large Enterprise', 'Public Sector', 'Financial Services'],
    process: [
      { title: 'Supply Chain Audit', desc: 'Analyzing your current vendor ecosystem.' },
      { title: 'Tech Integration', desc: 'Deploying VMS and reporting tools.' },
      { title: 'Management', desc: 'Daily coordination of all staffing needs.' },
      { title: 'Optimization', desc: 'Continuous cost and quality improvement.' }
    ],
    faqs: [
      { q: 'Do you work with other agencies?', a: 'Yes, as an MSP we manage a tier-1 network of partner agencies for you.' },
      { q: 'What technology do you use?', a: 'We integrate with leading VMS (Vendor Management Systems) for full visibility.' }
    ],
    features: [
      { title: 'Risk Control', desc: '100% compliance across all staff.', icon: 'ShieldCheck' },
      { title: 'Data Driven', desc: 'Full visibility on workforce spend.', icon: 'BarChart' }
    ]
  },
  {
    slug: 'remote-hiring',
    label: 'Remote Hiring',
    icon: 'Globe',
    desc: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.',
    hero: {
      badge: 'Borderless Talent',
      title: 'Global Remote Hiring Services',
      subtitle: 'Build high-performance borderless teams by accessing the world’s best talent, anywhere.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'The Future of Work is Global',
      description: 'We help you access top-tier professionals across international borders, managing everything from sourcing to global compliance and remote onboarding.',
    },
    benefits: [
      'Access to global talent pool',
      'Cross-border compliance',
      '24/7 global productivity',
      'Reduced infrastructure costs',
      'Diverse team building',
      'Seamless remote onboarding'
    ],
    industries: ['SaaS', 'Digital Agencies', 'Tech Startups'],
    process: [
      { title: 'Global Mapping', desc: 'Identifying the best talent hubs globally.' },
      { title: 'Vetting', desc: 'Remote-first competency assessments.' },
      { title: 'Compliance', desc: 'Handling international labor laws.' },
      { title: 'Onboarding', desc: 'Setting up remote teams for success.' }
    ],
    faqs: [
      { q: 'How do you handle payroll?', a: 'We work with EOR (Employer of Record) partners to manage global payroll.' },
      { q: 'Is remote hiring secure?', a: 'Yes, we include security vetting as part of our remote recruitment process.' }
    ],
    features: [
      { title: 'Timezone Sync', desc: 'Matching teams to your hours.', icon: 'Clock' },
      { title: 'Global Vetting', desc: 'Verified international credentials.', icon: 'UserCheck' }
    ]
  }
];
