import { StaticImageData } from 'next/image';

export interface IndustryDetail {
  slug: string;
  label: string;
  icon: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    image: StaticImageData | string;
  };
  metaInfo?: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
 overview: {
  title: string;
  description: string;
  advantageTitle: string;
  advantageDescription: string;
  outcomesTitle: string;
  outcomesDescription: string;
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
  contentOverrides?: {
    recruitmentIntro?: {
      paragraphs: string[];
      differentiators: string[];
    };
    challenges?: {
      intro: string;
      descriptions: string[];
    };
    roleDescriptions?: string[];
    sourcing?: {
      paragraphs: string[];
    };
    process?: {
      description: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
  };
}

import itTechImg from '@/assets/Industries-heros/IT and Technology.png';
import telecomImg from '@/assets/Industries-heros/Telecom.png';
import engineeringImg from '@/assets/Industries-heros/Engineering and infrastructure.png';
import mediaImg from '@/assets/Industries-heros/Media and digital.png';
import bankingImg from '@/assets/Industries-heros/Banking and Finnace.png';
import healthcareImg from '@/assets/Industries-heros/Heathcare.png';
import retailImg from '@/assets/Industries-heros/Retail -E-commerce.png';
import manufacturingImg from '@/assets/Industries-heros/Manufacturing.png';

export const INDUSTRIES_DETAILED: IndustryDetail[] = [
  {
    slug: 'it-technology',
    label: 'IT & Technology',
    icon: 'Cpu',
    hero: {
      badge: 'Tech Workforce Solutions',
      title: 'IT & Technology Recruitment Solutions',
      subtitle: 'Specialized workforce solutions supporting software engineering, cloud operations, and digital transformation initiatives.',
      image: itTechImg,
    },
    metaInfo: {
      title: 'IT & Technology Recruitment UK | Tech',
      description: 'Specialist IT and technology recruitment across the UK. Pre-vetted software engineers, cloud architects, DevOps specialists and AI professionals matched in 48 hours.',
      keywords: 'IT recruitment UK, technology staffing UK, software developer recruitment UK, cloud engineer recruitment UK, DevOps recruitment UK, tech talent UK, digital transformation staffing UK',
      ogTitle: 'IT & Technology Recruitment UK | Expert Tech Talent Solutions',
      ogDescription: 'Specialist IT and technology workforce solutions across the UK. Pre-vetted engineers, cloud specialists and digital talent matched in 48 hours.'
    },
    overview: {
      title: 'Digital Innovation Talent — Built for Modern Tech Organisations',
      description: 'Technology moves fast. Your recruitment partner needs to move faster. We help IT and technology organisations secure highly skilled professionals aligned with agile delivery, cloud infrastructure, and emerging tech initiatives.\n\n• Precision Tech Vetting: Multi-stage assessments — live coding, architectural reviews and domain interviews — conducted by our in-house engineering advisors.\n• Squad Hiring Capability: We build complete cross-functional teams (Developers, QA, Product, DevOps) ready to integrate into your digital transformation lifecycle.\n• Proactive Talent Pipelining: Live-ready pools of pre-screened tech talent reduce average time-to-fill for niche roles to under 24 days.',
      advantageTitle: 'The Chalky Infotech IT & Technology Talent Advantage',

  advantageDescription: `
    <p>
      Organisations across the UK and India choose Chalky Infotech for
      <strong style="color:#7A1F5C"> IT & Technology recruitment </strong>
      because our approach combines deep technical expertise, structured candidate assessment,
      and real-time talent market intelligence.
    </p>

    <p>
      From fast-growing technology startups to established digital enterprises, our
      <strong style="color:#7A1F5C"> IT & Technology hiring solutions </strong>
      are aligned with your technology stack, delivery model, and long-term growth objectives.
    </p>
  `,

  outcomesTitle: 'Measurable IT & Technology Recruitment Outcomes',

  outcomesDescription: `
    <p>
      Every
      <strong style="color:#7A1F5C"> IT & Technology recruitment </strong>
      engagement is supported by clear SLAs, transparent reporting, and structured
      post-placement support. We track key metrics including time-to-hire, quality of hire,
      retention, candidate experience, and cost-per-hire.
    </p>

    <p>
      Our recruitment solutions across contract staffing, permanent hiring, executive search,
      managed services, and remote teams help technology organisations build high-performing
      workforces while maintaining the flexibility to scale.
    </p>
  `,
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
      { q: 'How do you source specialized cloud and DevOps engineering talent?', a: 'Our sourcing strategy involves deep-web mapping and participation in niche technical communities. We identify "passive" talenttop engineers who aren\'t actively looking but are open to the right high-impact opportunity.' },
      { q: 'Can you build project-based "squads" for digital transformation initiatives?', a: 'Yes, we specialize in "Squad Hiring," providing complete, cross-functional teams (Developers, QA, Product, and DevOps) that can integrate immediately into your digital transformation lifecycle.' },
      { q: 'What is your process for technical vetting and competency assessments?', a: 'Every candidate undergoes a multi-stage technical evaluation, including live coding sessions or architectural reviews conducted by our in-house technical consultants who have backgrounds in engineering.' },
      { q: 'Do you provide recruitment support for early-stage tech startups?', a: 'We have a dedicated "Startup Growth" model that helps early-stage companies find their first "founding" engineersprofessionals who bring both high-level technical skill and the necessary startup mindset.' },
      { q: 'How does your agency handle remote team integration for tech firms?', a: 'We assist in the entire remote onboarding process, providing guidance on global collaboration tools, cultural integration, and ensuring that remote hires are fully aligned with your local team\'s agile workflows.' },
      { q: 'What is the average time-to-fill for a niche software developer role?', a: 'Our average time-to-fill for niche roles (e.g., Rust, AI, or Blockchain engineers) is 18-24 days, significantly faster than the industry average due to our proactive talent pipelining.' },
      { q: 'Do you support international talent acquisition for UK or India-based tech hubs?', a: 'Yes, we operate global talent corridors, helping UK firms tap into the vast engineering talent in India and assisting Indian tech hubs in finding international specialized expertise.' },
      { q: 'How do you keep pace with rapidly evolving technology trends?', a: 'Our consultants are continuously trained on emerging technologies. We also host tech-focused webinars and maintain a network of industry advisors who keep us updated on the latest shifts in software and cloud engineering.' }
    ],
    capabilities: [
      { title: 'Agile Delivery', desc: 'Cross-functional squads optimised for modern sprint cycles and rapid product delivery.', icon: 'Zap' },
      { title: 'Tech Vetting', desc: 'Multi-stage assessments including live coding challenges and architectural reviews.', icon: 'ShieldCheck' },
      { title: 'Cloud Architects', desc: 'Specialists sourced and vetted for AWS, Azure and GCP cloud-native environments.', icon: 'Cloud' },
      { title: 'DevOps Pipelines', desc: 'Engineers experienced in CI/CD automation, infrastructure as code and site reliability.', icon: 'GitBranch' }
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
      image: telecomImg,
    },
    metaInfo: {
      title: 'Telecoms Recruitment UK | 5G & Networks',
      description: 'Specialist telecommunications recruitment across the UK. RF engineers, network specialists and infrastructure project managers sourced for 5G rollout, FTTH deployment and connectivity programmes.',
      keywords: 'telecommunications recruitment UK, telecom staffing UK, 5G recruitment UK, network engineer recruitment UK, RF engineer staffing UK, FTTH specialists UK, infrastructure recruitment UK',
      ogTitle: 'Telecommunications Recruitment UK | 5G & Network Specialists',
      ogDescription: 'Specialist telecom workforce solutions across the UK. RF engineers, 5G specialists and infrastructure project managers for your network projects.'
    },
    overview: {
      title: 'Connected Future Talent — Specialists for the 5G Era',
      description: 'The telecommunications industry is undergoing its most significant transformation in decades. We connect operators and infrastructure firms with specialist engineering talent to design, deploy and manage next-generation connectivity.\n\n• 5G & FTTH Expertise: Proven track record sourcing RF engineers, network planners and fibre specialists for large-scale national rollout programmes.\n• Credential Verification: Rigorous validation of CCNA, CCNP, 3GPP and vendor-specific certifications before any candidate is presented.\n• Scalable Field Hiring: Our high-volume model deploys pre-vetted field technicians and engineers across multiple regions simultaneously.',
    advantageTitle: 'The Chalky Infotech Telecommunications Talent Advantage',

advantageDescription: `
  <p>
    Telecommunications organisations across the UK and India rely on Chalky Infotech
    for <strong style="color:#7A1F5C"> specialist telecom recruitment </strong>
    because we combine deep network-domain knowledge, rigorous technical screening,
    and scalable talent sourcing.
  </p>

  <p>
    From 5G rollout programmes and FTTH deployments to network operations and
    infrastructure projects, our <strong style="color:#7A1F5C">
    telecommunications hiring solutions </strong> are aligned with project timelines,
    technical requirements, and long-term workforce objectives.
  </p>
`,

outcomesTitle: 'Measurable Telecommunications Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every <strong style="color:#7A1F5C"> telecommunications recruitment </strong>
    engagement is supported by structured screening, transparent reporting,
    and clear delivery standards. We track key outcomes including time-to-hire,
    technical fit, deployment readiness, retention, and candidate experience.
  </p>

  <p>
    Our contract staffing, permanent hiring, project recruitment, and on-site
    workforce solutions help telecom organisations scale specialist teams faster
    while maintaining operational continuity across regional and large-scale
    infrastructure programmes.
  </p>
`,
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
      { title: 'Field Ready', desc: 'Pre-vetted staff cleared for on-site infrastructure and field operations across the UK.', icon: 'MapPin' },
      { title: 'Network Insight', desc: 'Consultants with active telecom backgrounds and deep core network domain expertise.', icon: 'Cpu' },
      { title: '5G Deployments', desc: 'RF engineers and network planners for next-generation architecture rollout programmes.', icon: 'Radio' },
      { title: 'Infrastructure Rollout', desc: 'Experienced talent for large-scale fibre, FTTH and RF infrastructure deployments.', icon: 'Layers' }
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
      image: engineeringImg,
    },
    metaInfo: {
      title: 'Engineering & Infrastructure Recruitment UK',
      description: 'Specialist engineering and infrastructure recruitment across the UK. Civil, mechanical, electrical and structural engineers sourced for major infrastructure, industrial and construction projects.',
      keywords: 'engineering recruitment UK, civil engineer recruitment UK, mechanical engineer staffing UK, infrastructure recruitment UK, project manager engineering UK, electrical engineer recruitment UK, technical staffing UK',
      ogTitle: 'Engineering & Infrastructure Recruitment UK | Technical Workforce Solutions',
      ogDescription: 'Specialist engineering talent for civil, mechanical, electrical and infrastructure projects across the UK. Pre-vetted professionals with proven project experience.'
    },
    overview: {
      title: 'Strategic Engineering Talent — Precision-Matched for Critical Projects',
      description: 'Major infrastructure and engineering projects demand professionals who combine technical mastery with operational delivery capability. We connect organisations with highly specialised engineers and project managers ready to contribute from day one.\n\n• Credential-First Vetting: Rigorous review of engineering certifications, professional memberships (CEng, MICE, IMechE) and past project portfolios before presentation.\n• Safety-Compliant Professionals: Every candidate screened for adherence to NEBOSH, OSHA and sector-specific H&S regulations as a non-negotiable standard.\n• Full Lifecycle Coverage: From RIBA Stage 1 through to commissioning — we source engineers experienced across every phase of the project lifecycle.',
    advantageTitle: 'The Chalky Infotech Engineering & Infrastructure Talent Advantage',

advantageDescription: `
  <p>
    Engineering and infrastructure organisations choose Chalky Infotech for
    <strong style="color:#7A1F5C"> specialist engineering recruitment </strong>
    because we combine technical domain expertise, credential verification,
    and project-focused talent sourcing.
  </p>

  <p>
    From civil and structural engineering to mechanical, electrical, and large-scale
    infrastructure programmes, our
    <strong style="color:#7A1F5C"> engineering workforce solutions </strong>
    are aligned with project requirements, safety standards, delivery timelines,
    and long-term operational goals.
  </p>
`,

outcomesTitle: 'Measurable Engineering & Infrastructure Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every <strong style="color:#7A1F5C"> engineering recruitment </strong>
    engagement is supported by structured technical assessments, certification
    checks, transparent reporting, and project-ready candidate validation.
    We track outcomes including time-to-hire, technical fit, project readiness,
    retention, and candidate experience.
  </p>

  <p>
    Our permanent hiring, contract engineering, executive search, and project-based
    staffing solutions help organisations secure specialist professionals faster
    while maintaining safety, quality, and delivery standards across critical projects.
  </p>
`,
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
      { title: 'Technical Vetting', desc: 'Credential review including certifications, memberships and full project portfolio assessment.', icon: 'CheckCircle2' },
      { title: 'Project Ready', desc: 'Engineers experienced across the full lifecycle from design and planning to commissioning.', icon: 'Zap' },
      { title: 'Safety First', desc: 'All candidates screened for NEBOSH, OSHA and sector H&S compliance before placement.', icon: 'Shield' },
      { title: 'Global Reach', desc: 'Sourcing specialist engineering talent from international markets to fill niche project demands.', icon: 'Globe' }
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
      image: mediaImg,
    },
    metaInfo: {
      title: 'Media & Digital Recruitment UK | Creative',
      description: 'Specialist media and digital recruitment across the UK. UX/UI designers, content strategists, digital marketers and media professionals sourced for agencies, brands and digital-first businesses.',
      keywords: 'media recruitment UK, digital marketing recruitment UK, UX designer recruitment UK, content strategist staffing UK, digital talent UK, creative recruitment UK, digital agency recruitment UK',
      ogTitle: 'Media & Digital Services Recruitment UK | Creative & Digital Talent',
      ogDescription: 'Specialist media and digital workforce solutions across the UK. UX designers, content strategists and digital marketing specialists for agencies and brands.'
    },
    overview: {
      title: 'Creative & Digital Experts — Talent That Drives Digital Growth',
      description: 'In a landscape where digital channels evolve overnight, brands need talent that combines creative vision with data-driven precision. We source top-tier media and digital professionals who help organisations thrive in the modern digital economy.\n\n• Portfolio-Led Assessment: In-depth evaluation of past campaigns, design work and digital performance metrics before any candidate is presented.\n• Platform-Specific Expertise: Talent vetted for Meta, Google, HubSpot, Adobe Creative Suite and major CMS platforms relevant to your tech stack.\n• Agile Creative Deployment: Freelance, contract and permanent placement models available for campaign-based or long-term digital team requirements.',
    advantageTitle: 'The Chalky Infotech Media & Digital Talent Advantage',

advantageDescription: `
  <p>
    Media and digital organisations choose Chalky Infotech for
    <strong style="color:#7A1F5C"> specialist digital recruitment </strong>
    because we combine creative-sector expertise, portfolio-led assessment,
    and access to professionals across the evolving digital ecosystem.
  </p>

  <p>
    From digital marketing and UX/UI design to content, media, and platform
    specialists, our <strong style="color:#7A1F5C">
    Media & Digital hiring solutions </strong> are aligned with your brand,
    technology platforms, campaign requirements, and long-term digital growth.
  </p>
`,

outcomesTitle: 'Measurable Media & Digital Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every <strong style="color:#7A1F5C"> Media & Digital recruitment </strong>
    engagement is supported by portfolio evaluation, platform-specific screening,
    transparent reporting, and structured candidate assessment. We track outcomes
    including time-to-hire, creative quality, technical fit, retention,
    and candidate experience.
  </p>

  <p>
    Our permanent placement, freelance, executive search, and campaign-based
    staffing solutions help organisations build agile digital teams, respond
    quickly to changing campaign demands, and strengthen their digital performance.
  </p>
`,
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
      { title: 'Creative Portfolios', desc: 'In-depth review of past campaigns, design work and measurable digital performance outcomes.', icon: 'Eye' },
      { title: 'Agile Deployment', desc: 'Fast placement of freelance and contract creative talent for campaign-based project needs.', icon: 'Activity' },
      { title: 'Platform Expertise', desc: 'Specialists vetted for Meta, Google, HubSpot, Adobe and major digital platform ecosystems.', icon: 'Monitor' },
      { title: 'Strategic Growth', desc: 'Digital leaders identified to scale brand presence, audience reach and commercial performance.', icon: 'TrendingUp' }
    ]
  },
  {
    slug: 'banking-finance',
    label: 'Banking & Finance',
    icon: 'Landmark',
    hero: {
      badge: 'Financial Talent',
      title: 'Banking & Finance Recruitment Services UK',
      subtitle: 'Connecting UK financial institutions, banks, and fintech organisations with experienced professionals across banking operations, financial management, compliance, and digital finance.',
      image: bankingImg,
    },
    metaInfo: {
      title: 'Banking & Finance Recruitment UK',
      description:`Find skilled banking and finance professionals with Chalky's Banking & Finance Recruitment Services UK. Hire experienced financial services talent.`,
      keywords: 'Banking Recruitment Agency UK, Finance Recruitment Services UK, Banking Recruitment Services UK, Financial Services Recruitment UK, Banking and Finance Recruitment Agency UK, Financial Recruitment Consultants UK, Fintech Recruitment Services UK, Compliance Recruitment UK, Risk Management Recruitment UK, Investment Banking Recruitment UK, Financial Analyst Recruitment UK, Banking Operations Recruitment UK, Contract Finance Recruitment UK, Finance Staffing Solutions UK, Financial Technology Recruitment UK',
      ogTitle: 'Banking & Finance Recruitment UK | Fintech & Financial Services Talent',
      ogDescription: 'Specialist financial services recruitment across the UK. Compliance, risk, fintech and core banking professionals sourced for global institutions and scale-ups.'
    },
    overview: {
      title: 'Building Skilled Financial Teams — From Fintech to Core Banking',
      description: `The banking and financial services sector requires professionals with strong financial knowledge, regulatory awareness, and the ability to adapt to changing industry demands. We help organisations recruit skilled candidates who support financial operations, risk management, regulatory compliance, and digital transformation. \n\n• Regulatory Awareness: We identify candidates with relevant knowledge of FCA, MiFID II, Dodd-Frank, RBI, and other financial regulations according to their role and jurisdiction..\n• Traditional Banking & Fintech Expertise: Traditional Banking & Fintech Expertise:Our recruitment approach covers both established banking operations and modern financial technology environments, helping businesses find candidates with relevant industry experience.\n• Structured Candidate Screening: We assess professional experience, qualifications, role-specific knowledge, and background verification requirements based on each client's hiring standards.`,
    advantageTitle: 'The Chalky Infotech Banking & Finance Talent Advantage',

advantageDescription: `
  <p>Banking and financial services organisations choose Chalky Infotech for specialist banking and finance recruitment because we understand the importance of industry experience, professional qualifications, and regulatory awareness when hiring financial professionals.</p>
  <p>From traditional banking and financial operations to fintech, compliance, risk management, and digital finance, our Banking & Finance hiring solutions are aligned with your workforce requirements, business objectives, and long-term growth plans.</p>
`,

outcomesTitle: 'Measurable Banking & Finance Recruitment Outcomes',

outcomesDescription: `
  <p>Every Banking & Finance recruitment engagement begins with an understanding of the position, required experience, and organisational expectations. We focus on candidate suitability, technical and financial knowledge, relevant qualifications, and the experience needed for each role.</p>
  <p>Our permanent recruitment, executive search, contract staffing, and flexible hiring solutions help financial organisations identify suitable professionals while supporting operational requirements, workforce planning, and business growth.</p>
`,
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
    contentOverrides: {
      recruitmentIntro: {
        paragraphs: [
          'At Chalky Infotech, our banking and finance recruitment expertise focuses on connecting financial organisations with qualified professionals who understand the demands of the sector. We combine industry knowledge with targeted candidate sourcing and structured assessments to identify talent suited to your business requirements.',
          'With operations across the UK and India and recruitment experience spanning multiple industries, we support hiring needs at different levels — from specialist finance professionals to senior management and executive positions. We work closely with your team to understand your requirements and identify suitable candidates.'
        ],
        differentiators: [
          'Recruitment support for banking, financial services, and fintech roles',
          'Focus on relevant industry knowledge and regulatory awareness',
          'Structured candidate screening and role-specific assessments',
          'Recruitment support across the UK and India',
          'Candidate pipeline updates and regular recruitment reporting',
          'Contract, permanent, temporary, on-site, and remote hiring options'
        ]
      },
      challenges: {
        intro: 'We understand the recruitment challenges faced by financial organisations and help address them by connecting businesses with professionals who have relevant industry knowledge and experience.',
        descriptions: [
          'Find compliance professionals with experience in financial regulations, AML, KYC, and regulatory reporting requirements.',
          'Recruit banking technology specialists and consultants who understand core banking platforms, system upgrades, and financial technology environments.',
          'Connect with experienced risk managers, fraud analysts, and information security professionals who support financial risk and operational controls.',
          'Identify fintech, financial data, and analytics professionals who can support digital banking, financial reporting, and technology-led business initiatives.'
        ]
      },
      roleDescriptions: [
        'Professionals experienced in regulatory requirements, financial crime prevention, AML, KYC, and compliance monitoring.',
        'Specialists who assess financial, operational, credit, and market risks while supporting effective risk management practices.',
        'Experienced professionals with knowledge of investment banking, capital markets, financial modelling, and corporate finance.',
        'Technology professionals experienced in developing and supporting digital banking platforms, financial applications, and fintech solutions.',
        'Candidates skilled in cash management, liquidity planning, treasury operations, and financial risk management.',
        'Professionals experienced in financial modelling, budgeting, forecasting, reporting, and business performance analysis.'
      ],
      sourcing: {
        paragraphs: [
          'We use targeted sourcing and a network of professionals to help financial organisations identify candidates with the right experience, qualifications, and industry knowledge.',
          'Our recruitment approach considers technical skills, financial expertise, professional background, and organisational fit. Whether you need to fill a specialist compliance vacancy, recruit financial analysts, or expand a fintech team, we work to identify candidates who match your requirements.'
        ]
      },
      process: {
        description: 'Our structured recruitment process helps identify and present suitable professionals who understand your sector, role requirements, and business priorities.',
        steps: [
          { title: 'Sector Analysis', description: 'Understand your organisation, financial services environment, hiring objectives, and specific role requirements.' },
          { title: 'Talent Mapping', description: 'Identify relevant professionals across banking, finance, fintech, compliance, and financial operations.' },
          { title: 'Deep Sourcing', description: 'Connect with suitable active and passive candidates through targeted recruitment networks and sourcing channels.' },
          { title: 'Evaluation', description: 'Assess professional experience, financial knowledge, technical capabilities, qualifications, and role suitability.' },
          { title: 'Coordination', description: 'Manage candidate introductions, interview arrangements, feedback, and communication throughout the selection process.' }
        ]
      }
    },
    services: [
      'Permanent Hiring',
      'Executive Search',
      'Contract Specialists',
      'Managed Workforce'
    ],
    faqs: [
      { q: 'How do you support the recruitment needs of growing fintech companies?', a: 'We help growing fintech businesses identify professionals across software development, financial technology, product management, compliance, and digital banking. Our recruitment approach considers the technical skills, financial knowledge, and experience required to support different stages of business growth.' },
      { q: 'Can you support high-volume compliance and risk management recruitment?', a: 'Yes. We support recruitment for compliance, AML, KYC, fraud prevention, and risk management positions. We work with businesses to understand the number of vacancies, required experience, and relevant regulatory knowledge before sourcing suitable candidates.' },
      { q: 'What is your experience in recruiting professionals for core banking transformation projects?', a: 'We help organisations find banking technology professionals, business analysts, project managers, and consultants with experience in core banking systems, financial applications, and banking technology transformation initiatives.' },
      { q: "How do you assess candidates' understanding of financial regulations?", a: "We review candidates' professional experience, relevant qualifications, and knowledge of regulations applicable to the role. Depending on the position and location, this may include experience with FCA requirements, MiFID II, Dodd-Frank, RBI guidelines, AML, and KYC processes." },
      { q: 'Do you provide contract finance professionals for temporary business requirements?', a: 'Yes. We support contract recruitment for financial analysts, accountants, compliance specialists, treasury professionals, and other finance roles. This can help organisations manage temporary workloads, reporting periods, audits, and project-based requirements.' },
      { q: 'How does Chalky support recruitment across traditional banking and fintech?', a: 'Our recruitment approach covers both traditional financial services and technology-driven finance environments. We identify candidates based on their relevant experience, whether the requirement involves banking operations, financial management, digital banking, or fintech development.' },
      { q: 'Can you recruit specialists in quantitative analysis and treasury management?', a: "Yes. We support recruitment for quantitative analysts, financial risk specialists, treasury professionals, and investment banking talent. We consider candidates' experience in financial modelling, market analysis, risk assessment, and treasury operations." },
      { q: 'What background verification is considered for banking and finance hires?', a: 'Background verification requirements depend on the employer, position, and applicable regulations. We work with clients to understand the required checks, which may include employment history, identity, qualifications, references, and other relevant screening procedures.' },
      { q: 'How do you handle executive search for senior banking leadership?', a: 'We support senior-level and executive recruitment for financial institutions seeking experienced leaders. Our approach focuses on identifying professionals with relevant industry experience, leadership capabilities, strategic understanding, and the ability to support organisational objectives.' }
    ],
    capabilities: [
      { title: 'Regulatory Insight', desc: 'Candidates vetted for FCA, MiFID II, Dodd-Frank and global financial compliance requirements.', icon: 'Scale' },
      { title: 'Fintech Core', desc: 'Bridging traditional banking and digital finance with bi-lingual consultant expertise.', icon: 'Zap' },
      { title: 'AML / KYC Compliance', desc: 'Specialists in financial crime mitigation, AML programme management and KYC operations.', icon: 'ShieldCheck' },
      { title: 'Quantitative Trading', desc: 'Algorithmic, risk modelling and treasury specialists for investment banking and hedge funds.', icon: 'Activity' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    label: 'Healthcare & Life Sciences',
    icon: 'Activity',
    hero: {
      badge: 'Healthcare Workforce',
      title: 'Healthcare & Life Sciences Recruitment Services UK',
      subtitle: 'Specialised recruitment solutions connecting healthcare providers, biotechnology companies, and pharmaceutical organisations with qualified professionals across clinical services, medical research, and life sciences operations.',
      image: healthcareImg,
    },
    metaInfo: {
      title: 'Healthcare & Life Sciences Recruitment Services UK',
      description:`Find skilled healthcare and life sciences professionals with Chalky's Healthcare & Life Sciences Recruitment Services UK. Hire qualified talent for your organisation.`,
      keywords: 'Healthcare Recruitment Agency UK, Life Sciences Recruitment UK, Healthcare Staffing Services UK, Medical Recruitment Services UK, Clinical Recruitment Agency UK, Pharmaceutical Recruitment UK, Biotechnology Recruitment Services UK, Healthcare Professionals Recruitment UK, Clinical Research Recruitment UK, Health IT Recruitment UK, Medical Staff Recruitment UK, Healthcare Executive Search UK, Contract Healthcare Recruitment UK, Life Sciences Staffing Solutions UK',
      ogTitle: 'Healthcare & Life Sciences Recruitment UK | Clinical & Biotech Talent',
      ogDescription: 'Specialist healthcare and life sciences workforce solutions across the UK. Clinical, biotech and health IT professionals sourced with full compliance verification.'
    },
    overview: {
      title: 'Life-Saving Talent Strategy — Clinical Excellence at Every Level',
      description: 'Healthcare and life sciences organisations depend on skilled professionals to maintain service quality, support medical research, and meet industry standards. We help healthcare providers, biotech firms, and pharmaceutical companies recruit experienced candidates who understand clinical requirements, regulatory responsibilities, and the demands of modern healthcare environments.\n\n• Clinical Qualification Awareness: We identify candidates with relevant clinical qualifications, professional registrations, certifications, and experience according to the requirements of each position.\n• Healthcare & Regulatory Knowledge: Our recruitment approach considers relevant standards and requirements, including CQC, NHS guidelines, GCP, and other applicable regulatory frameworks.\n• Flexible Workforce Recruitment: We support permanent, contract, and temporary hiring requirements to help organisations manage changing workloads and specialist staffing needs.',
    advantageTitle: 'The Chalky Infotech Healthcare & Life Sciences Talent Advantage',

advantageDescription: `
  <p>
    Healthcare and life sciences organisations choose Chalky Infotech for specialist healthcare recruitment because we understand the importance of relevant qualifications, clinical experience, professional standards, and industry knowledge when hiring healthcare professionals.
  </p>

  <p>
    From clinical services and healthcare operations to biotechnology, pharmaceuticals, clinical research, and Health IT, our Healthcare & Life Sciences hiring solutions are aligned with your workforce requirements, organisational priorities, and long-term business objectives.
  </p>
`,

outcomesTitle: 'Measurable Healthcare & Life Sciences Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every Healthcare & Life Sciences recruitment engagement begins with an understanding of the position, required qualifications, experience, and organisational expectations. We focus on candidate suitability, professional credentials, relevant industry knowledge, and the screening requirements specified by each employer.
  </p>

  <p>
    Our permanent recruitment, temporary staffing, contract hiring, and executive search solutions help healthcare and life sciences organisations identify suitable professionals while supporting workforce planning, operational continuity, and organisational growth.
  </p>
`,
    },
    contentOverrides: {
      recruitmentIntro: {
        paragraphs: [
          'At Chalky Infotech, our healthcare & life sciences recruitment expertise focuses on connecting organisations with professionals who understand the demands of healthcare, biotechnology, and pharmaceutical environments. We combine sector knowledge with targeted sourcing and structured candidate assessments to identify talent suited to your hiring requirements.',
          'With operations across the UK and India and recruitment experience spanning multiple industries, we support hiring needs at different levels — from specialist healthcare professionals to experienced managers and senior leadership. We work closely with your organisation to understand its workforce requirements and identify suitable candidates.'
        ],
        differentiators: [
          'Recruiters focused on sector-specific hiring requirements',
          'Candidate assessments based on relevant qualifications and professional experience',
          'Recruitment support for healthcare, biotechnology, and pharmaceutical roles',
          'UK and India recruitment support for wider talent sourcing',
          'Candidate pipeline updates and regular recruitment reporting',
          'Contract, permanent, temporary, on-site, and remote hiring options'
        ]
      },
      challenges: {
        intro: 'We understand the recruitment challenges faced by healthcare providers and life sciences organisations. Our recruitment approach helps address critical workforce requirements by connecting businesses with professionals who have relevant qualifications and industry experience.',
        descriptions: [
          'Identify qualified healthcare professionals through targeted sourcing and specialist recruitment networks to support critical staffing requirements.',
          'Find candidates with relevant experience in clinical compliance, quality assurance, healthcare standards, and regulatory requirements.',
          'Recruit experienced scientific and technical professionals who can support research activities, pharmaceutical operations, and biotechnology development.',
          'Connect with professionals experienced in healthcare administration, clinical operations, laboratory management, and Health IT environments.'
        ]
      },
      roleDescriptions: [
        'Professionals experienced in clinical trial coordination, research documentation, study monitoring, and clinical research requirements.',
        'Experienced leaders responsible for healthcare administration, operational planning, workforce coordination, and service management.',
        'Qualified specialists with experience in medical laboratory operations, diagnostic technologies, clinical equipment, and testing procedures.',
        'Professionals experienced in healthcare compliance, quality documentation, regulatory procedures, and industry standards.',
        'Specialists with experience in biotechnology processes, laboratory systems, bioprocessing, and scientific technology environments.',
        'Technology professionals experienced in healthcare information systems, electronic health records, healthcare applications, and digital health platforms.'
      ],
      sourcing: {
        paragraphs: [
          'We use targeted candidate sourcing and recruitment networks to help healthcare and life sciences organisations identify professionals with the right qualifications, experience, and specialist knowledge.',
          'Our consultative approach considers technical expertise, professional credentials, organisational culture, and role-specific requirements. Whether filling a critical clinical vacancy, recruiting pharmaceutical specialists, or expanding a clinical research team, we work to identify candidates who match your workforce needs.'
        ]
      },
      process: {
        description: 'Our structured recruitment process helps identify and present suitable professionals who understand the requirements of healthcare and life sciences environments.',
        steps: [
          { title: 'Sector Analysis', description: "Understanding your organisation's healthcare environment, workforce requirements, and specific hiring objectives." },
          { title: 'Talent Mapping', description: 'Identifying suitable professionals across clinical services, biotechnology, pharmaceuticals, and healthcare operations.' },
          { title: 'Deep Sourcing', description: 'Connecting with qualified professionals through targeted sourcing channels and specialist recruitment networks.' },
          { title: 'Evaluation', description: 'Assessing relevant qualifications, professional experience, technical skills, and suitability for the required position.' },
          { title: 'Coordination', description: 'Managing candidate introductions, interview arrangements, feedback, and communication throughout the recruitment process.' },
          { title: 'Placement', description: 'Supporting the final hiring journey, onboarding coordination, and candidate placement.' }
        ]
      }
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
      { q: 'How do you verify medical qualifications and clinical certifications for healthcare hires?', a: 'We work with employers to understand the qualification and professional registration requirements for each role. Candidate assessments may include reviewing relevant qualifications, certifications, professional registrations, employment history, and other verification requirements. Additional checks can be coordinated according to employer policies and applicable regulations.' },
      { q: 'Can you support rapid recruitment for seasonal healthcare requirements or clinical research projects?', a: 'Yes. We support temporary and contract recruitment for healthcare providers and life sciences organisations. We help identify suitable professionals for increased workloads, temporary staffing requirements, clinical research projects, and other time-sensitive hiring needs.' },
      { q: 'What is your experience in sourcing Health IT and medical technology specialists?', a: 'We support recruitment for Health IT and medical technology positions, including healthcare IT specialists, software professionals, data analysts, and application support specialists. We focus on candidates with experience in electronic health records, telemedicine platforms, medical software, and healthcare information systems.' },
      { q: 'How do you ensure candidates meet healthcare compliance and safety requirements?', a: 'We assess candidates against the qualifications, experience, and screening requirements specified by the employer. Depending on the position, this may include relevant knowledge of CQC standards, NHS requirements, occupational health procedures, clinical guidelines, and other applicable regulatory expectations.' },
      { q: 'Do you provide recruitment for specialised biotechnology and pharmaceutical roles?', a: 'Yes. We support recruitment across biotechnology and pharmaceutical functions, including laboratory research, clinical trials, quality assurance, regulatory affairs, pharmaceutical operations, and scientific research. We identify candidates based on their specialist knowledge and relevant industry experience.' },
      { q: 'How does Chalky Infotech support organisations facing shortages of clinical research professionals?', a: 'We help organisations identify clinical research professionals through targeted candidate sourcing and specialist recruitment networks. Our recruitment support covers roles such as Clinical Research Associates, Clinical Trial Managers, Clinical Data Managers, and other research specialists.' },
      { q: 'Can you recruit temporary workforce teams for large healthcare providers?', a: 'Yes. We support temporary and contract recruitment for healthcare organisations with changing workforce requirements. Depending on the hiring needs, we can help source clinical support professionals, healthcare administrators, operations specialists, and other relevant staff.' },
      { q: 'What is your process for sourcing executive leadership in Life Sciences?', a: 'Our senior-level recruitment approach focuses on identifying experienced professionals with relevant scientific, operational, and commercial leadership backgrounds. We support recruitment for senior positions across biotechnology, pharmaceutical operations, clinical research, and healthcare management.' },
      { q: 'How do you support recruitment for specialised nursing and medical staff?', a: 'We help healthcare providers identify nursing and medical professionals based on their required qualifications, clinical experience, professional registration, and specialist skills. Recruitment requirements can include nursing, intensive care, operating theatre, and other specialised clinical positions.' }
    ],
    capabilities: [
      { title: 'Clinical Vetting', desc: 'Primary-source verification of medical credentials, licences and clinical competency before placement.', icon: 'HeartPulse' },
      { title: 'Pharma Focus', desc: 'Drug discovery, clinical trial and regulatory affairs specialists sourced and placed compliantly.', icon: 'FlaskConical' },
      { title: 'Health IT', desc: 'Developers experienced in EHR migrations, telemedicine platforms and medical imaging software.', icon: 'Laptop' },
      { title: 'Clinical Trials', desc: 'CRA, regulatory and trial management professionals vetted for GCP compliance requirements.', icon: 'Clipboard' }
    ]
  },
  {
    slug: 'retail-ecommerce',
    label: 'Retail & E-Commerce',
    icon: 'ShoppingCart',
    hero: {
      badge: 'Commerce Solutions',
      title: 'Retail & E-Commerce Recruitment Services UK',
      subtitle: "Chalky's Retail & E-Commerce Recruitment Services UK help organisations find skilled candidates who understand changing consumer expectations and the demands of modern retail.",
      image: retailImg,
    },
    metaInfo: {
      title: 'Retail & E-Commerce Recruitment Services UK',
      description: `Find skilled retail and e-commerce professionals with Chalky's Retail & E-Commerce Recruitment Services UK. Hire experienced talent for your business.`,
      keywords: 'Retail Recruitment Agency UK, E-Commerce Recruitment Services UK, Retail Staffing Solutions UK, E-Commerce Recruitment Agency UK, Retail Talent Acquisition UK, Digital Commerce Recruitment UK, Retail Operations Recruitment UK, E-Commerce Specialist Recruitment UK, Omnichannel Retail Recruitment UK, Supply Chain Recruitment UK, Shopify Recruitment Agency UK, Digital Marketing Recruitment for Retail UK, Contract Retail Recruitment UK, Retail and E-Commerce Staffing UK',
      ogTitle: 'Retail & E-Commerce Recruitment UK | Omnichannel Talent Solutions',
      ogDescription: 'Specialist retail and e-commerce workforce solutions across the UK. Omnichannel, supply chain and digital commerce specialists for modern retail brands.'
    },
    overview: {
      title: 'Omnichannel Future Talent — Commerce Expertise for the Digital Age',
      description: 'Modern retail requires professionals who understand both physical stores and digital commerce. Businesses need skilled people to manage e-commerce platforms, improve customer experiences, coordinate omnichannel operations and support changing supply chain requirements.\n\n• Platform-Specialist Talent: Recruit professionals with experience across Shopify, Magento, Salesforce Commerce Cloud and other e-commerce platforms.\n• Flexible Seasonal Hiring: Source temporary and contract professionals to support Black Friday, seasonal demand, warehouse operations and changing workforce requirements.\n• Customer-Focused UX Recruitment: Find designers with relevant experience in user experience, customer journeys, website usability and conversion optimisation.',
    advantageTitle: 'The Chalky Infotech Retail & E-Commerce Talent Advantage',

advantageDescription: `
  <p>
    Retail and e-commerce organisations choose Chalky Infotech for specialist retail recruitment because we focus on relevant industry experience, role requirements and candidate suitability.
  </p>

  <p>
    From e-commerce platforms and omnichannel operations to supply chain management, UX, digital marketing and customer experience, our Retail & E-Commerce hiring solutions help businesses find professionals who match their technology environment, customer strategy and workforce requirements.
  </p>
`,

outcomesTitle: 'Measurable Retail & E-Commerce Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every Retail & E-Commerce recruitment engagement is supported by requirement-based sourcing, structured candidate assessment and clear communication throughout the hiring process. We focus on relevant outcomes such as time-to-hire, candidate suitability, role alignment and hiring experience.
  </p>

  <p>
    Our temporary workforce recruitment, contract staffing and permanent hiring support help retail organisations respond to seasonal demand, strengthen digital commerce teams and recruit professionals for their operational and long-term business needs.
  </p>
`,
    },
    contentOverrides: {
      recruitmentIntro: {
        paragraphs: [
          'At Chalky Infotech, our retail & e-commerce recruitment expertise is built around understanding the changing needs of retail businesses and digital commerce teams. We connect employers with professionals whose skills and experience align with their operational and technology requirements.',
          'With registered operations across the UK and India and recruitment experience across multiple industries, we support hiring at different levels, from specialist contributors to experienced management professionals. Our approach focuses on understanding your requirements and identifying candidates who can contribute to your organisation.'
        ],
        differentiators: [
          'Recruiters with an understanding of retail and e-commerce roles',
          'Candidate sourcing aligned with employer requirements',
          'Recruitment support for permanent, contract and temporary positions',
          'Access to UK and India talent markets',
          'Structured candidate assessment and recruitment updates',
          'On-site, remote and flexible hiring options'
        ]
      },
      challenges: {
        intro: 'We understand the recruitment challenges facing modern retail organisations and help businesses find professionals with the skills and experience needed to address them.',
        descriptions: [
          'Finding professionals with experience in e-commerce operations, digital platforms and online retail environments.',
          'Recruiting specialists who understand the connection between online stores, physical retail operations and customer experiences.',
          'Sourcing temporary and contract professionals to support increased hiring needs during busy retail periods.',
          'Connecting businesses with supply chain, inventory and warehouse specialists who understand modern retail operations.'
        ]
      },
      roleDescriptions: [
        'Professionals experienced in managing online stores, digital commerce strategies, platform operations and e-commerce performance.',
        'Candidates with experience in procurement, inventory planning, logistics, warehouse coordination and supply chain operations.',
        'Design professionals who understand website usability, customer journeys, digital experiences and e-commerce interface design.',
        'Specialists experienced in retail marketing, search engine optimisation, paid campaigns, customer acquisition and digital growth.',
        'Professionals who oversee store operations, workforce coordination, retail processes and day-to-day business activities.',
        'Experienced leaders who manage customer experience strategies, service operations, customer engagement and experience improvement.'
      ],
      sourcing: {
        paragraphs: [
          'We use targeted candidate sourcing and structured assessment to connect retail organisations with professionals who match their hiring requirements.',
          'Our consultative recruitment approach considers job responsibilities, industry experience, technical knowledge and organisational culture. Whether you are hiring for a specialist e-commerce position, strengthening retail operations or building a wider team, we help identify suitable professionals for your business.'
        ]
      },
      process: {
        description: 'Our sector-focused recruitment process helps identify candidates whose skills and experience match the specific requirements of retail and e-commerce organisations.',
        steps: [
          { title: 'Sector Analysis', description: 'Understanding your retail business, hiring objectives, team structure and role requirements.' },
          { title: 'Talent Mapping', description: 'Identifying relevant professionals with experience in retail, e-commerce and digital commerce environments.' },
          { title: 'Deep Sourcing', description: 'Reaching suitable candidates through targeted sourcing methods and professional talent networks.' },
          { title: 'Evaluation', description: 'Assessing candidate experience, role-specific knowledge, communication and suitability for the position.' },
          { title: 'Coordination', description: 'Supporting interview scheduling, employer feedback and communication throughout the selection process.' },
          { title: 'Placement', description: 'Supporting the final hiring process and helping selected candidates transition into their new roles.' }
        ]
      }
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
      { q: 'How does Chalky support high-volume hiring during Black Friday or seasonal peaks?', a: 'Chalky supports retail businesses with temporary and contract recruitment for seasonal workforce requirements. We help source candidates for warehouse operations, customer service, retail support and e-commerce roles based on hiring volumes, timelines and job requirements.' },
      { q: 'Can you recruit professionals experienced in Shopify, Magento and Salesforce Commerce Cloud?', a: 'Yes. We help businesses recruit professionals with relevant experience across major e-commerce platforms, including Shopify, Magento and Salesforce Commerce Cloud. Candidate selection is based on the technical skills and experience required for each position.' },
      { q: 'Can you source experts in omnichannel retail and supply chain technology?', a: 'Yes. We source candidates with experience in omnichannel retail operations, warehouse management systems (WMS), order management systems (OMS), enterprise resource planning (ERP) and supply chain coordination.' },
      { q: 'How do you assess UX/UI designers for retail and e-commerce businesses?', a: "We review candidates' portfolios, relevant project experience, design knowledge and understanding of customer journeys. This helps employers identify designers whose skills match their website, e-commerce and user experience requirements." },
      { q: 'How does Chalky support retailers moving towards digital-first business models?', a: 'We help traditional and growing retail businesses recruit digital commerce professionals, e-commerce managers, platform specialists and technology talent who can support their transition towards online and omnichannel operations.' },
      { q: 'Can Chalky provide managed recruitment services for retail businesses?', a: 'Chalky can discuss recruitment support based on your workforce requirements, hiring volumes and business objectives. Contact our team to explore suitable recruitment arrangements for your organisation.' },
      { q: 'How long does it take to recruit retail operations management professionals?', a: 'Recruitment timelines depend on the role, experience level, location and availability of suitable candidates. Chalky works with employers to understand their requirements, source relevant professionals and coordinate the selection process.' },
      { q: 'How do you ensure candidates understand the complexities of modern retail and e-commerce?', a: 'Through our Retail & E-Commerce Recruitment Services UK, we assess candidates for their experience in modern retail operations, last-mile delivery, inventory management, omnichannel systems, and e-commerce environments.' },
      { q: 'What is the typical turnaround for filling retail operations management roles?', a: 'Timelines depend on role requirements and candidate availability. We use targeted sourcing and our retail talent network to identify and present suitable professionals for retail operations management positions.' }
    ],
    capabilities: [
      { title: 'Customer First', desc: 'Candidates assessed on their track record of improving customer journey and satisfaction metrics.', icon: 'UserCircle' },
      { title: 'Supply Chain Ready', desc: 'Specialists experienced in WMS, OMS, last-mile logistics and global freight management.', icon: 'Truck' },
      { title: 'Omnichannel Commerce', desc: 'Architects and managers experienced in seamless multi-channel commerce integration.', icon: 'ShoppingBag' },
      { title: 'Conversion Rate Opt', desc: 'UX/UI and digital marketing specialists focused on data-driven consumer sales growth.', icon: 'TrendingUp' }
    ]
  },
  {
    slug: 'manufacturing',
    label: 'Manufacturing',
    icon: 'Factory',
    hero: {
      badge: 'Industrial Talent',
      title: 'Manufacturing Recruitment Services UK',
      subtitle: "Chalky's Manufacturing Recruitment Services UK help organisations find skilled candidates who understand modern manufacturing, industrial automation and changing production requirements.",
      image: manufacturingImg,
    },
    metaInfo: {
      title: 'Manufacturing Recruitment Services UK',
      description: `Find skilled manufacturing professionals with Chalky's Manufacturing Recruitment Services UK. Hire experienced engineers, automation specialists and operational talent.`,
      keywords:'Manufacturing Recruitment Agency UK, Engineering Recruitment Services UK, Industrial Recruitment Agency UK, Manufacturing Staffing Solutions UK, Manufacturing Talent Acquisition UK, Manufacturing Engineer Recruitment UK, Industrial Engineering Recruitment UK, Automation Recruitment Services UK, Robotics Recruitment Agency UK, Production Manager Recruitment UK, Plant Manager Recruitment UK, Quality Engineer Recruitment UK, Supply Chain Recruitment UK, Contract Manufacturing Recruitment UK',
      ogTitle: 'Manufacturing Recruitment UK | Industry 4.0 & Advanced Manufacturing Talent',
      ogDescription: 'Specialist manufacturing workforce solutions across the UK. Automation, process engineering and operational talent for Industry 4.0 and smart factory initiatives.'
    },
    overview: {
      title: 'Advanced Industrial Workforce — Driving Industry 4.0 Transformation',
      description: 'The manufacturing sector is evolving through automation, advanced engineering and smart factory technologies. Businesses need professionals who can manage production processes, improve operational efficiency and support Industry 4.0 initiatives. \n\n• Safety-Aware Candidate Screening: Identify industrial professionals with relevant knowledge of workplace health and safety, NEBOSH, IOSH and applicable industry standards, depending on role requirements.\n• Automation & Robotics Talent: Recruit engineers and technicians with experience in industrial automation, robotics, control systems and connected production environments.\n• Lean & Six Sigma Professionals: Find process engineers and operational specialists experienced in continuous improvement, quality management and production efficiency.',
    advantageTitle: 'The Chalky Infotech Manufacturing Talent Advantage',

advantageDescription: `
  <p>
    Manufacturing organisations choose Chalky Infotech for specialist industrial recruitment because we focus on relevant engineering knowledge, operational experience and candidate suitability.
  </p>

  <p>
    From process engineering and industrial automation to robotics, plant operations, quality management and supply chain, our Manufacturing hiring solutions help businesses find professionals who match their production requirements, Industry 4.0 initiatives and long-term workforce objectives.
  </p>
`,

outcomesTitle: 'Measurable Manufacturing Recruitment Outcomes',

outcomesDescription: `
  <p>
    Every Manufacturing recruitment engagement is supported by requirement-based sourcing, structured candidate assessment and clear communication throughout the hiring process. We focus on relevant outcomes such as time-to-hire, technical suitability, role alignment and candidate experience.
  </p>

  <p>
    Our permanent hiring, contract engineering and temporary recruitment support help manufacturers strengthen production teams, address specialist skill requirements and respond to changing operational demands while considering workplace safety, quality and efficiency requirements.
  </p>
`,
    },
    contentOverrides: {
      recruitmentIntro: {
        paragraphs: [
          'At Chalky Infotech, our manufacturing recruitment expertise focuses on understanding industrial workforce requirements and connecting businesses with relevant engineering and operational talent. We combine industry knowledge with targeted candidate sourcing to identify professionals whose experience matches your organisation.',
          'With registered operations across the UK and India and recruitment experience across multiple industries, we support hiring at different levels, from specialist engineering positions to senior operational leadership. We work closely with employers to understand their recruitment needs and identify suitable candidates.'
        ],
        differentiators: [
          'Recruiters with an understanding of manufacturing and engineering roles',
          'Candidate sourcing aligned with technical and operational requirements',
          'Recruitment support for permanent, contract and temporary positions',
          'Access to UK and India talent markets',
          'Structured candidate assessment and recruitment updates',
          'On-site, remote and flexible hiring options'
        ]
      },
      challenges: {
        intro: 'We understand the recruitment challenges facing modern manufacturers and help organisations identify professionals with the experience needed to support their production and operational goals.',
        descriptions: [
          'Finding experienced engineering and production professionals with specialist knowledge through targeted sourcing and candidate networks.',
          'Recruiting specialists with experience in industrial automation, robotics, connected machinery and modern manufacturing technologies.',
          'Identifying candidates with relevant workplace safety knowledge, industry experience and an understanding of manufacturing health and safety requirements.',
          'Connecting businesses with procurement, logistics, inventory and supply chain professionals who understand modern industrial operations.'
        ]
      },
      roleDescriptions: [
        'Professionals experienced in production process improvement, workflow optimisation, manufacturing methods and operational efficiency.',
        'Candidates with knowledge of industrial automation, robotics, control systems, PLCs and automated production environments.',
        'Experienced leaders responsible for manufacturing operations, production planning, workforce coordination and plant performance.',
        'Professionals experienced in quality assurance, inspection processes, quality management systems and manufacturing standards.',
        'Specialists who work on product design, industrial development, manufacturing requirements and design improvement.',
        'Professionals experienced in procurement, inventory management, logistics, supplier coordination and supply chain planning.'
      ],
      sourcing: {
        paragraphs: [
          'We use targeted candidate sourcing and structured assessment to connect manufacturing organisations with professionals who match their technical and operational requirements.',
          'Our consultative recruitment approach considers job responsibilities, engineering knowledge, industry experience and organisational culture. Whether filling a specialist engineering vacancy or recruiting professionals for a growing production team, we help identify candidates suited to your business requirements.'
        ]
      },
      process: {
        description: 'Our sector-focused recruitment process helps identify manufacturing professionals whose skills and experience match the specific requirements of your organisation.',
        steps: [
          { title: 'Sector Analysis', description: 'Understanding your manufacturing environment, production objectives, workplace requirements and hiring needs.' },
          { title: 'Talent Mapping', description: 'Identifying relevant engineering, production and operational professionals within your required industry and specialisation.' },
          { title: 'Deep Sourcing', description: 'Connecting with suitable candidates through targeted sourcing methods and professional talent networks.' },
          { title: 'Evaluation', description: 'Assessing technical experience, industry knowledge, relevant qualifications and suitability for the required position.' },
          { title: 'Coordination', description: 'Supporting interview scheduling, employer feedback and communication throughout the selection process.' },
          { title: 'Placement', description: 'Supporting the final hiring process and helping selected candidates transition into their new manufacturing roles.' }
        ]
      }
    },
    challenges: [
      'Technical skill gaps',
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
      { q: 'Do you specialize in sourcing talent for Industry 4.0 and smart factory projects?', a: 'Yes. Chalky helps manufacturers recruit professionals with relevant experience in industrial automation, robotics, IoT, smart manufacturing and connected production environments. Candidate requirements are matched to the technology and experience needed for each position.' },
      { q: 'Can you provide onsite recruitment support for large manufacturing plants?', a: 'We can discuss recruitment support for large manufacturing facilities based on workforce size, hiring volumes and operational requirements. Our team works with employers to understand their needs and explore suitable recruitment arrangements.' },
      { q: 'How do you assess candidates for technical engineering and operational safety skills?', a: "We assess candidates based on their relevant engineering experience, technical knowledge, qualifications and understanding of workplace safety requirements. Any additional checks or certifications are considered according to the employer's role and site requirements." },
      { q: 'What is your expertise in recruiting for automation and robotics roles?', a: 'We help businesses source automation engineers, robotics specialists, control systems engineers and technicians with relevant industrial experience. Candidate selection considers the machinery, systems and technical skills required by the employer.' },
      { q: 'How does Chalky support the transition from traditional to automated manufacturing?', a: 'We help manufacturers identify professionals who understand existing production environments as well as modern automation technologies. This includes candidates with experience in industrial systems, robotics, process improvement and digital manufacturing.' },
      { q: 'Can you source specialised talent for supply chain and lean manufacturing?', a: 'Yes. We recruit supply chain managers, procurement specialists, process improvement professionals and other candidates with experience in Lean Manufacturing, Six Sigma, inventory planning and logistics operations.' },
      { q: 'What is your process for identifying experienced plant and process engineers?', a: 'We begin by understanding the technical requirements, production environment and experience level needed. We then source and assess candidates based on their engineering background, process knowledge, operational experience and relevant achievements.' },
      { q: 'Do you provide contract engineering recruitment for short-term industrial projects?', a: 'Yes. Chalky supports contract recruitment for manufacturers that need engineering professionals for specific projects, plant upgrades, production expansion, maintenance activities and temporary workforce requirements.' },
      { q: 'How do you identify candidates with manufacturing health and safety knowledge?', a: "We consider candidates' relevant qualifications, workplace safety experience and understanding of applicable health and safety standards. Requirements such as NEBOSH or IOSH are considered where relevant to the position and employer's expectations." }
    ],
    capabilities: [
      { title: 'Engineering Focus', desc: 'Rigorous technical vetting for industrial, process and maintenance engineering roles across sectors.', icon: 'Settings' },
      { title: 'Operational Safety', desc: 'NEBOSH and OSHA-compliant candidates screened for high-standard manufacturing safety environments.', icon: 'HardHat' },
      { title: 'Industry 4.0 Automation', desc: 'IoT integration, robotics and smart manufacturing system specialists sourced and deployed.', icon: 'Cpu' },
      { title: 'Lean Manufacturing', desc: 'Six Sigma certified experts driving process optimisation, cost reduction and operational excellence.', icon: 'Gauge' }
    ]
  }
];
