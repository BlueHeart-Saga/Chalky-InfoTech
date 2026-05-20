// Brand colors
export const colors = {
  primary: '#7A1F5C',
  darkPlum: '#4A1238',
  magenta: '#C2185B',
  cream: '#F5F0E8',
  beige: '#EFE7DD',
  rose: '#D14D72',
  textDark: '#1A1A1A',
  grayText: '#8A8A8A',
  white: '#FFFFFF',
};

export const SITE_NAME = 'Chalky Infotech';
export const SITE_URL = 'https://www.chalkyinfo.com';
export const SITE_DESCRIPTION =
  'Chalky Infotech is a specialist technology and digital recruitment partner supporting organisations with high-quality talent across cloud, data, software and transformation.';

export const CONTACT = {
  email: 'info@chalkyinfo.com',
  phoneUK: '+44 7503 140975',
  phoneIN: '+91 8072357581',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export * from './servicesData';

export const SERVICES = [
  { slug: 'it-staffing', label: 'IT Staffing', icon: 'Code2', desc: 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.' },
  { slug: 'executive-search', label: 'Executive Search', icon: 'TrendingUp', desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.' },
  { slug: 'contract-staffing', label: 'Contract Staffing', icon: 'Clock', desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.' },
  { slug: 'permanent-hiring', label: 'Permanent Hiring', icon: 'Users', desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.' },
  { slug: 'temporary-recruitment', label: 'Temporary Recruitment', icon: 'UserPlus', desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.' },
  { slug: 'on-site-recruitment', label: 'On-Site Recruitment', icon: 'MapPin', desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.' },
  { slug: 'managed-services', label: 'Managed Services', icon: 'Settings', desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.' },
  { slug: 'remote-hiring', label: 'Remote Hiring', icon: 'Globe', desc: 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.' },
];

export * from './industriesData';

export const INDUSTRIES = [
  { slug: 'it-technology', label: 'IT & Technology', icon: 'Cpu' },
  { slug: 'telecommunications', label: 'Telecommunications', icon: 'Radio' },
  { slug: 'engineering-infrastructure', label: 'Engineering & Infrastructure', icon: 'HardHat' },
  { slug: 'media-digital-services', label: 'Media & Digital Services', icon: 'MonitorPlay' },
  { slug: 'banking-finance', label: 'Banking & Finance', icon: 'Landmark' },
  { slug: 'healthcare-life-sciences', label: 'Healthcare & Life Sciences', icon: 'Activity' },
  { slug: 'retail-ecommerce', label: 'Retail & E-Commerce', icon: 'ShoppingCart' },
  { slug: 'manufacturing', label: 'Manufacturing', icon: 'Factory' },
];

export * from './insightsData';

export const STATS = [
  { value: '500+', label: 'Clients Served' },
  { value: '10K+', label: 'Candidates Placed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const RECRUITMENT_STEPS = [
  { title: 'Requirement', icon: 'FileText', desc: 'Analysing and defining role-specific needs.' },
  { title: 'Sourcing', icon: 'Search', desc: 'Targeted talent hunt across global networks.' },
  { title: 'Screening', icon: 'UserCheck', desc: 'AI-powered technical and soft-skill evaluation.' },
  { title: 'Shortlist', icon: 'Star', desc: 'Identifying the top-tier candidates for review.' },
  { title: 'Interview', icon: 'Users', desc: 'Direct behavioral and expert-led assessments.' },
  { title: 'Onboarding', icon: 'CheckCircle2', desc: 'Ensuring a smooth and productive start.' }
];
