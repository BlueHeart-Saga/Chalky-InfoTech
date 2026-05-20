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
      { q: 'What core tech stacks and programming languages does Chalky Infotech cover?', a: 'We cover the full spectrum of modern development stacks, including React, Next.js, Node.js, Java, Python, Golang, and specialized frameworks. Our database includes experts in cloud-native development across AWS, Azure, and Google Cloud Platform.' },
      { q: 'How do you source specialized cloud and DevOps engineering talent?', a: 'Our sourcing strategy involves deep-web mapping and participation in niche technical communities. We identify "passive" talent—top engineers who aren\'t actively looking but are open to the right high-impact opportunity.' },
      { q: 'Can you build project-based "squads" for digital transformation initiatives?', a: 'Yes, we specialize in "Squad Hiring," providing complete, cross-functional teams (Developers, QA, Product, and DevOps) that can integrate immediately into your digital transformation lifecycle.' },
      { q: 'What is your process for technical vetting and competency assessments?', a: 'Every candidate undergoes a multi-stage technical evaluation, including live coding sessions or architectural reviews conducted by our in-house technical consultants who have backgrounds in engineering.' },
      { q: 'Do you provide recruitment support for early-stage tech startups?', a: 'We have a dedicated "Startup Growth" model that helps early-stage companies find their first "founding" engineers—professionals who bring both high-level technical skill and the necessary startup mindset.' },
      { q: 'How does your agency handle remote team integration for tech firms?', a: 'We assist in the entire remote onboarding process, providing guidance on global collaboration tools, cultural integration, and ensuring that remote hires are fully aligned with your local team\'s agile workflows.' },
      { q: 'What is the average time-to-fill for a niche software developer role?', a: 'Our average time-to-fill for niche roles (e.g., Rust, AI, or Blockchain engineers) is 18-24 days, significantly faster than the industry average due to our proactive talent pipelining.' },
      { q: 'Do you support international talent acquisition for UK or India-based tech hubs?', a: 'Yes, we operate global talent corridors, helping UK firms tap into the vast engineering talent in India and assisting Indian tech hubs in finding international specialized expertise.' },
      { q: 'How do you keep pace with rapidly evolving technology trends?', a: 'Our consultants are continuously trained on emerging technologies. We also host tech-focused webinars and maintain a network of industry advisors who keep us updated on the latest shifts in software and cloud engineering.' }
    ],
    capabilities: [
      { title: 'Agile Delivery', desc: 'Teams optimized for modern sprint cycles.', icon: 'Zap' },
      { title: 'Tech Vetting', desc: 'Deep technical assessments for every role.', icon: 'ShieldCheck' },
      { title: 'Cloud Architects', desc: 'Sourcing specialists for AWS, Azure, and GCP platforms.', icon: 'Cloud' },
      { title: 'DevOps Pipelines', desc: 'Architecting CI/CD pipelines and infrastructure as code.', icon: 'GitBranch' }
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
      { q: 'Do you support large-scale 5G rollout and network infrastructure projects?', a: 'Yes, we have a proven track record of providing specialized RF engineers, network planners, and project leads for 5G deployments across major regional territories.' },
      { q: 'Can you manage high-volume field hiring for regional telecom expansions?', a: 'Our recruitment engine is built for scale. We can coordinate large-scale hiring drives for field technicians and engineers, ensuring consistent quality across high-volume requirements.' },
      { q: 'What types of specialized engineering roles do you recruit for in telecom?', a: 'We specialize in RF engineering, Network Operations Center (NOC) roles, Core Network engineering, Fiber-to-the-Home (FTTH) specialists, and infrastructure project management.' },
      { q: 'How do you verify technical certifications for RF and network engineers?', a: 'We perform rigorous credential verification for all specialized certifications (e.g., CCNA, CCNP, and vendor-specific 5G certifications) to ensure our candidates are fully qualified for critical infrastructure work.' },
      { q: 'Do you provide on-site recruitment support for telecom infrastructure firms?', a: 'Yes, our on-site model places dedicated telecom recruiters within your team to streamline the high-volume hiring needed for massive infrastructure rollouts.' },
      { q: 'How does Chalky Infotech handle multi-regional coordination for telecom hiring?', a: 'We utilize a centralized recruitment platform to manage candidates across different regions, ensuring that local field requirements are met while maintaining global quality standards.' },
      { q: 'What is your experience in sourcing talent for fiber-optic network deployments?', a: 'We have supported numerous national and regional fiber-optic rollouts, sourcing specialized surveyors, planners, and installers who understand the technical nuances of FTTP/FTTH deployments.' },
      { q: 'How do you ensure candidates understand the latest network security protocols?', a: 'We vet all telecom engineering candidates for their knowledge of modern security standards, including 3GPP security architectures and encrypted network protocols.' },
      { q: 'Can you provide contract specialists for short-term telecom project peaks?', a: 'Absolutely. We provide flexible contract staffing solutions that allow you to bring in expert engineers for critical project phases without long-term commitment.' }
    ],
    capabilities: [
      { title: 'Field Ready', desc: 'Staff vetted for on-site infrastructure work.', icon: 'MapPin' },
      { title: 'Network Insight', desc: 'Consultants with core telecom backgrounds.', icon: 'Cpu' },
      { title: '5G Deployments', desc: 'Specialists for next-generation network architecture.', icon: 'Radio' },
      { title: 'Infrastructure Rollout', desc: 'Talent experienced in large-scale fiber and RF rollout.', icon: 'Layers' }
    ]
  },
  {
    slug: 'engineering-infrastructure',
    label: 'Engineering & Infrastructure',
    icon: 'HardHat',
    hero: {
      badge: 'Engineering Workforce',
      title: 'Engineering & Infrastructure Solutions',
      subtitle: 'Supporting large-scale engineering, civil, industrial, and technical workforce requirements.',
      image: 'https://images.unsplash.com/photo-1541888086225-ee82fb067eb8?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Strategic Engineering Talent',
      description: 'We connect businesses with highly specialized engineers and project managers to drive critical infrastructure and industrial projects.',
    },
    challenges: [
      'Complex project lifecycles',
      'Technical talent scarcity',
      'Stringent safety regulations',
      'Global supply chain shifts'
    ],
    roles: [
      'Civil Engineers',
      'Mechanical Engineers',
      'Project Managers',
      'Health & Safety Managers',
      'Site Reliability Engineers',
      'Electrical Engineers'
    ],
    services: [
      'Permanent Hiring',
      'Contract Engineering',
      'Executive Search',
      'Project-Based Staffing'
    ],
    faqs: [
      { q: 'What types of engineering roles do you specialize in?', a: 'We specialize in civil, mechanical, electrical, and structural engineering roles across major infrastructure projects.' },
      { q: 'How do you vet technical engineering talent?', a: 'We conduct comprehensive technical interviews, verify certifications, and review past project portfolios to ensure competency and safety.' }
    ],
    capabilities: [
      { title: 'Technical Vetting', desc: 'Rigorous assessment of engineering credentials.', icon: 'CheckCircle2' },
      { title: 'Project Ready', desc: 'Candidates prepared for fast-paced infrastructure deployments.', icon: 'Zap' },
      { title: 'Safety First', desc: 'Deep understanding of global safety regulations.', icon: 'Shield' },
      { title: 'Global Reach', desc: 'Sourcing engineering talent from international markets.', icon: 'Globe' }
    ]
  },
  {
    slug: 'media-digital-services',
    label: 'Media & Digital Services',
    icon: 'MonitorPlay',
    hero: {
      badge: 'Digital Talent',
      title: 'Media & Digital Services Recruitment',
      subtitle: 'Connecting businesses with talent across digital platforms, content, and technology ecosystems.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop',
    },
    overview: {
      title: 'Creative & Digital Experts',
      description: 'We source top-tier creative, digital, and media professionals to help brands thrive in the rapidly evolving digital landscape.',
    },
    challenges: [
      'Fast-paced digital trends',
      'High demand for creative tech talent',
      'Platform algorithm shifts',
      'Content scalability'
    ],
    roles: [
      'Digital Marketing Managers',
      'Content Strategists',
      'UX/UI Designers',
      'Media Planners',
      'Video Producers',
      'Social Media Directors'
    ],
    services: [
      'Permanent Placement',
      'Freelance Network',
      'Executive Search',
      'Campaign-Based Staffing'
    ],
    faqs: [
      { q: 'How do you source creative digital talent?', a: 'We map digital ecosystems, review portfolios, and engage with passive talent who drive leading digital campaigns and platforms.' },
      { q: 'Can you provide freelance talent for short-term campaigns?', a: 'Yes, we maintain a robust network of freelance creatives and digital specialists ready to deploy for immediate campaign needs.' }
    ],
    capabilities: [
      { title: 'Creative Portfolios', desc: 'In-depth review of past digital campaigns.', icon: 'Eye' },
      { title: 'Agile Deployment', desc: 'Fast placement of freelance creative talent.', icon: 'Activity' },
      { title: 'Platform Expertise', desc: 'Specialists in modern digital ecosystems.', icon: 'Monitor' },
      { title: 'Strategic Growth', desc: 'Identifying leaders to scale digital presence.', icon: 'TrendingUp' }
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
      { q: 'How do you support the recruitment needs of rapidly growing Fintech startups?', a: 'We specialize in scaling Fintech teams from seed to Series C and beyond, sourcing product-minded engineers who understand the pace and regulatory needs of digital finance.' },
      { q: 'Can you manage high-volume compliance and risk management hiring drives?', a: 'Yes, we have a specialized division for Financial Crime and Compliance, capable of building large-scale AML and KYC teams for global banking institutions.' },
      { q: 'What is your expertise in sourcing talent for core banking system transformations?', a: 'We source specialized consultants and engineers who have experience migrating legacy banking systems to modern, cloud-native architectures like Mambu or Thought Machine.' },
      { q: 'How do you vet candidates for their understanding of global financial regulations?', a: 'We ensure our financial professionals have a working knowledge of major regulations such as MiFID II, Dodd-Frank, and local FCA or RBI guidelines depending on the jurisdiction.' },
      { q: 'Do you provide contract specialists for seasonal financial reporting peaks?', a: 'Yes, we provide highly skilled contract accountants and financial analysts who can assist with year-end reporting, auditing, and tax cycles on a flexible basis.' },
      { q: 'How does Chalky Infotech bridge the gap between traditional finance and digital tech?', a: 'Our recruiters are "bi-lingual"—they understand both the rigorous culture of traditional banking and the agile, innovative culture of technology, ensuring a perfect cultural fit.' },
      { q: 'Can you source specialized talent for quantitative analysis and treasury?', a: 'We have a niche desk for "Quant" talent, sourcing specialists in algorithmic trading, risk modeling, and advanced treasury management for investment banks and hedge funds.' },
      { q: 'What security and background verification standards do you apply to finance hires?', a: 'For finance roles, we conduct enhanced background screening, including credit checks, criminal record checks, and 5-10 year employment history verification as standard.' },
      { q: 'How do you handle executive search for senior banking leadership?', a: 'Our finance executive search team operates with the highest level of discretion, targeting C-suite leaders who can navigate the complexities of modern global finance.' }
    ],
    capabilities: [
      { title: 'Regulatory Insight', desc: 'Candidates vetted for industry compliance.', icon: 'Scale' },
      { title: 'Fintech Core', desc: 'Bridging traditional finance and digital tech.', icon: 'Zap' },
      { title: 'AML / KYC Compliance', desc: 'Professionals vetted for financial crime mitigation.', icon: 'ShieldCheck' },
      { title: 'Quantitative Trading', desc: 'Algorithmic and mathematical specialists for market markets.', icon: 'Activity' }
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
      { q: 'How do you verify medical credentials and clinical certifications for hires?', a: 'Our medical compliance team performs primary-source verification of all clinical licenses and certifications, ensuring that every healthcare professional we place is fully authorized to practice.' },
      { q: 'Can you support rapid scaling for seasonal healthcare or clinical trial demands?', a: 'Yes, we maintain a large pool of pre-vetted temporary healthcare staff and clinical research associates who can be deployed quickly for seasonal peaks or new trial launches.' },
      { q: 'What is your experience in sourcing Health IT and medical technology specialists?', a: 'We are leaders in the Health IT space, sourcing developers and analysts for EHR migrations, telemedicine platforms, and specialized medical imaging software.' },
      { q: 'How do you ensure candidates meet strict medical compliance and safety standards?', a: 'Every healthcare hire undergoes a rigorous safety and compliance screening, including occupational health checks and adherence to local health authority guidelines (e.g., CQC or JCI).' },
      { q: 'Do you provide recruitment for specialized biotech and pharmaceutical roles?', a: 'Yes, we source for the entire drug discovery lifecycle, from lab-based researchers and clinical trial managers to regulatory affairs and pharmaceutical sales specialists.' },
      { q: 'How does Chalky Infotech handle the global shortage of clinical research talent?', a: 'We bridge the talent gap by sourcing clinical talent globally and assisting with relocation or remote management, ensuring your trials are never delayed by staffing shortages.' },
      { q: 'Can you build temporary workforce cohorts for large healthcare providers?', a: 'We specialize in "Managed Workforce" solutions for large hospitals and clinics, providing a scalable and cost-effective alternative to traditional nursing agencies.' },
      { q: 'What is your process for sourcing executive leadership in Life Sciences?', a: 'Our Life Sciences search team identifies scientific and operational leaders who possess the rare combination of scientific expertise and commercial business acumen.' },
      { q: 'How do you support the recruitment of specialized nursing and medical staff?', a: 'We provide specialized recruitment for intensive care, theater, and other high-acuity nursing roles, ensuring that providers have the specialized staff needed for complex patient care.' }
    ],
    capabilities: [
      { title: 'Clinical Vetting', desc: 'Specialized medical competency reviews.', icon: 'HeartPulse' },
      { title: 'Pharma Focus', desc: 'Sourcing talent for drug discovery and trials.', icon: 'FlaskConical' },
      { title: 'Health IT', desc: 'Developers experienced in EHR systems and telehealth.', icon: 'Laptop' },
      { title: 'Clinical Trials', desc: 'Professionals vetted for regulatory clinical research.', icon: 'Clipboard' }
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
      { q: 'How does your agency handle high-volume hiring for Black Friday or seasonal peaks?', a: 'We specialize in "Peak Scaling," providing high-volume temporary cohorts for warehouse operations, customer service, and digital platform support to manage seasonal commerce surges.' },
      { q: 'Do you have specialized talent pools for platforms like Shopify, Magento, and Salesforce?', a: 'Yes, we have dedicated desks for major e-commerce ecosystems, ensuring we can provide developers and architects who are certified and experienced in your specific commerce stack.' },
      { q: 'Can you source experts in omnichannel retail and supply chain technology?', a: 'We source the talent that connects the digital and physical worlds—experts in WMS, OMS, and ERP systems who ensure a seamless omnichannel experience for your customers.' },
      { q: 'What is your process for vetting UX/UI designers focused on the consumer journey?', a: 'We evaluate designers based on their portfolio of conversion-driven work, ensuring they understand how to use design to reduce friction and drive sales in a retail environment.' },
      { q: 'How do you support retail organizations transitioning to digital-first models?', a: 'We provide strategic talent consultancy, helping traditional retailers find the digital leadership and engineering talent needed to build and scale their online presence successfully.' },
      { q: 'Can you provide managed recruitment services (RPO) for global retail brands?', a: 'Yes, our RPO model provides an embedded recruitment team that handles the entire hiring lifecycle for global retail brands, ensuring consistency and brand-aligned hiring at scale.' },
      { q: 'What is your expertise in sourcing Digital Marketing and E-commerce leads?', a: 'We source performance-driven marketing talent—specialists in SEO, PPC, and data-driven customer acquisition who understand how to drive traffic and ROI for e-commerce platforms.' },
      { q: 'How do you ensure candidates understand the complexities of modern logistics?', a: 'We vet our supply chain professionals for their experience with modern logistics challenges, including last-mile delivery, sustainable packaging, and global freight management.' },
      { q: 'What is the typical turnaround for filling retail operations management roles?', a: 'For critical retail management roles, we typically present a high-quality shortlist of candidates within 7-10 business days, leveraging our extensive network of retail professionals.' }
    ],
    capabilities: [
      { title: 'Customer First', desc: 'Candidates focused on the user journey.', icon: 'UserCircle' },
      { title: 'Supply Chain Ready', desc: 'Talent that understands modern logistics.', icon: 'Truck' },
      { title: 'Omnichannel Commerce', desc: 'Architects experienced in multi-channel conversions.', icon: 'ShoppingBag' },
      { title: 'Conversion Rate Opt', desc: 'UX/UI specialists focused on driving consumer sales.', icon: 'TrendingUp' }
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
      { q: 'Do you specialize in sourcing talent for Industry 4.0 and smart factory projects?', a: 'Yes, we are at the forefront of industrial recruitment, sourcing specialists in IoT integration, industrial automation, and the data analysts who drive smart factory efficiency.' },
      { q: 'Can you provide on-site recruitment management for large manufacturing plants?', a: 'Our on-site model is designed for large facilities, placing dedicated recruiters on-the-ground to manage everything from volume hiring to shift coordination and onboarding.' },
      { q: 'How do you vet candidates for technical engineering and operational safety skills?', a: 'Every industrial hire undergoes a rigorous technical assessment and safety compliance review to ensure they meet the high standards required for modern manufacturing environments.' },
      { q: 'What is your expertise in recruiting for automation and robotics roles?', a: 'We have a specialized desk for Automation and Robotics, sourcing the engineers and technicians who design, build, and maintain the robotic systems driving modern production lines.' },
      { q: 'How does Chalky Infotech support the transition from legacy to automated manufacturing?', a: 'We help manufacturers find "Transitional Talent"—engineers who understand legacy systems but have the skills to implement and manage the transition to automated, digital manufacturing.' },
      { q: 'Can you source specialized talent for supply chain and lean manufacturing?', a: 'Yes, we source experts in Six Sigma, Lean, and modern supply chain management who can optimize production processes and increase operational resilience.' },
      { q: 'What is your process for identifying high-impact plant and process engineers?', a: 'We use targeted sourcing to find engineers with proven track records in process optimization, cost reduction, and quality improvement within specific manufacturing verticals.' },
      { q: 'Do you provide contract engineering support for short-term industrial projects?', a: 'Absolutely. Our contract engineering model provides flexible, high-level expertise for plant upgrades, new line installations, or critical maintenance shutdowns.' },
      { q: 'How do you ensure candidates meet high operational and environmental safety standards?', a: 'We vet all manufacturing candidates for their knowledge of H&S regulations (e.g., OSHA, NEBOSH) and their commitment to maintaining a safe and environmentally responsible workplace.' }
    ],
    capabilities: [
      { title: 'Engineering Focus', desc: 'Rigorous vetting for technical industrial roles.', icon: 'Settings' },
      { title: 'Operational Safety', desc: 'Ensuring candidates meet high safety standards.', icon: 'HardHat' },
      { title: 'Industry 4.0 Automation', desc: 'IoT integration and automation systems specialists.', icon: 'Cpu' },
      { title: 'Lean Manufacturing', desc: 'Six Sigma certified process optimization experts.', icon: 'Gauge' }
    ]
  }
];
