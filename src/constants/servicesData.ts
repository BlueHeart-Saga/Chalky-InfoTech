import itStaffingImg from '@/assets/Services-heros/1.png';
import executiveSearchImg from '@/assets/Services-heros/2.png';
import contractStaffingImg from '@/assets/Services-heros/3.png';
import permanentHiringImg from '@/assets/Services-heros/4.png';
import temporaryRecruitmentImg from '@/assets/Services-heros/5.png';
import onSiteRecruitmentImg from '@/assets/Services-heros/6.png';
import managedServicesImg from '@/assets/Services-heros/7.png';
import remoteHiringImg from '@/assets/Services-heros/8.png';
import techAlignImg from '@/assets/Services-details-page/1.png';
import stratPartImg from '@/assets/Services-details-page/2.png';
import qaImg from '@/assets/Services-details-page/3.png';
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
  metaInfo?: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  overview: {
     headingLabel: string;
  title: string;
  description: string;
 
  benefitsHeadingLabel: string;
benefitsTitle: string;
benefitsDescription: string;
advantageHeadingLabel: string;

  trustStats: {
    value: string;
    label: string;
  }[];

  featureCards: {
    title: string;
    headline: string;
    description: string;
    
    tag: string;
  }[];

  differentiators: string[];

  whyChooseTitle: string;
  whyChooseDescription: string;
  partnershipDescription: string;


 advantageTitle: string;
advantageTitleHighlight: string;
  advantageDescription: string;
  partnerHeadingLabel: string;
partnerTitle: string;
partnerTitleHighlight: string;
partnerDescription: string;

  outcomesTitle: string;
  outcomesDescription: string;
  bottomAdvantageTitle: string;
  bottomAdvantageDescription: string;
  bottomOutcomesTitle: string;
  bottomOutcomesDescription: string;

  supportHeadingLabel: string;
  supportTitle: string;
  supportDescription: string;
  supportSecondDescription: string;
  supportClientTitle: string;
  supportClientDescription: string;
 processHeadingLabel: string;
processTitle: string;
processDescription: string;
  industries: string[];
};
  benefits: {
  title: string;
  description: string;
}[];
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
    label: 'IT Staffing Solution',
    icon: 'Code2',
    desc: 'An IT staffing solution is more than filling a vacancy. It\'s a strategic approach to connecting businesses with verified, skilled technology professionals on demand, at speed, without compromise.',
    hero: {
      badge: 'Elite Tech Talent',
      title: 'IT Staffing Solution',
      subtitle: 'An IT staffing solution is more than filling a vacancy. It\'s a strategic approach to connecting businesses with verified, skilled technology professionals on demand, at speed, without compromise.',
      image: itStaffingImg.src,
    },
    metaInfo: {
      title: 'IT Staffing Solutions UK | Hire IT Talent',
      description: 'Looking for reliable IT staffing in the UK? We connect businesses with pre-vetted tech professionals—fast, flexible, and tailored to your needs.',
      keywords: 'IT staffing solution UK, IT staffing services UK, IT recruitment UK, contract IT staffing UK, technology staffing solution UK, hire IT professionals UK, IT talent solutions UK, permanent IT staffing UK, tech recruitment agency UK, IT workforce solution UK, software developer staffing UK, cloud engineer staffing UK, IT contract staffing London, DevOps staffing UK, IT hiring solution Uk',
      ogTitle: 'IT Staffing Solution UK | Verified Tech Talent',
      ogDescription: 'Trusted IT staffing solution across the UK. Pre-vetted professionals. 48-hour matching. Contract, C2H & Full-Time hiring.'
    },
  overview: {
  headingLabel: 'IT-Staffing  in UK',
  title: 'What Is an IT Staffing Solution?',

  description:
    'An IT staffing solution is more than filling a vacancy. It\'s a strategic approach to connecting businesses with verified, skilled technology professionals on demand, at speed, without compromise. \n\n• Talent on Demand: Access pre-screened IT professionals ready to deploy within days.\n• Flexible Engagement: Contract, Contract-to-Hire, or Full-Time — your call.\n• Business-Aligned Hiring: Every placement is matched to your tech stack, team culture, and project goals.',

  trustStats: [
    { value: '98%', label: 'Placement Success Rate' },
    { value: '48h', label: 'Average Talent Match' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
    {
      title: 'Technical Alignment',
      headline: 'Precision Skill Matching',
      description:
        'Every candidate we put forward for IT staffing goes through our 3-stage vetting framework — a technical challenge, a live advisory interview, and a code quality review — so you get production-ready professionals from day one.',
     
      tag: 'Vetting',
    },
    {
      title: 'Strategic Partnership',
      headline: 'Business-First Recruitment',
      description:
        'Our UK-based consultants work as strategic talent advisors, shaping every IT staffing search around your long-term roadmap, culture and growth goals to deliver hires that create real business impact.',
    
      tag: 'Advisory',
    },
    {
      title: 'Quality Assurance',
      headline: 'Zero-Compromise Standards',
      description:
        'From bacRecruitmentkground checks to multi-stage competency evaluation and cultural fit profiling, our quality assurance process keeps talent standards consistently high across every UK IT staffing engagement.',
      
      tag: 'Excellence',
    },
  ],

 differentiators: [
  'Domain-specialist recruiters dedicated to your industry vertical',
  'Transparent, compliance-first models — IR35 & EOR ready',
  'Zero replacement fee — we re-engage at no extra cost',
  'UK & India registered for seamless cross-border delivery',
  'Real-time pipeline visibility & weekly performance reports',
  'Contract, Permanent, Temp, On-Site & Remote hiring models',
],

 whyChooseTitle:
  'Why Choose Chalky Infotech for <span class="text-[#7A1F5C]">IT Staffing Solution</span>?',

whyChooseDescription: `
  At <strong class="text-[#000000]">Chalky Infotech</strong>, our
  <strong class="text-[#7A1F5C]">IT staffing solution services</strong>
  are built on a simple belief — recruitment done right is a strategic advantage.
  We combine <strong class="text-[#7A1F5C]">deep industry knowledge</strong>
  with rigorous assessment science to ensure every hire is an investment, not a risk.
`,

partnershipDescription: `
  With registered operations across the <strong class="text-[#000000]">UK and India</strong>
  and a talent network spanning 12+ industries, we deliver measurable outcomes at every
  level — from graduate intake to board appointment. We operate as a true extension of
  your team, not a vendor at arm's length.
`,
advantageHeadingLabel: 'The Chalky Advantage',
  advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'IT Staffing Solutions',
  advantageDescription:
    'We provide specialized workforce solutions designed to help your organization access top-tier talent, optimize hiring workflows, and achieve sustainable operational growth through our expert it staffing solution framework.',

  outcomesTitle:
    'Measurable Outcomes from IT Staffing',

  outcomesDescription:
    'Every IT staffing engagement runs on clear SLAs, transparent reporting, and a structured post-placement support window. We continuously track time-to-hire, retention rate, candidate satisfaction, and cost-per-hire.',

bottomAdvantageTitle: 'The Chalky Infotech IT Staffing Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech because our it staffing solution methodology blends behavioural analytics, domain-expert knowledge, and live market intelligence. We treat every engagement as a long-term partnership — not a transactional search.
  </p>

  <p>
    From fast-growing SaaS startups to FTSE-listed enterprises, our <strong style="color:#7A1F5C">IT staffing solutions</strong> is calibrated to your sector, your culture, and the calibre of talent you deserve.
  </p>
`,

bottomOutcomesTitle: 'Measurable IT Staffing Outcomes',

bottomOutcomesDescription: `
  <p>
    Every it staffing solution engagement is underpinned by clear SLAs, transparent reporting, and a structured post-placement support window. We track time-to-hire, retention rate, candidate satisfaction, and cost-per-hire continuously.
  </p>

  <p>
    Our <strong style="color:#7A1F5C">full recruitment services </strong>
    — spanning IT Staffing, Executive Search, Contract & Permanent Hiring, Remote Hiring, and Managed Workforce Solutions — scale with your ambitions at every stage of growth.
  </p>
`,
    benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Permanent Recruitment Benefits',
benefitsDescription:

  'Our specialized approach delivers measurable impact, helping UK organizations achieve operational efficiency and access genuine talent excellence.',


supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border IT Staffing & Industry Expertise',

supportDescription:
  'We provide seamless workforce management and specialised IT recruitment support across international borders, ensuring your organisation has the right technology talent in every major global hub.',

supportSecondDescription:
  '',
supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',   
processHeadingLabel: 'Service Workflow',

processTitle: 'How We <strong style="color:#7A1F5C; font-weight:700">Deliver Value</strong>',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our it staffing solution expertise is built on years of delivering high-impact recruitment strategies for enterprise leaders across technical and professional domains globally.",

  industries: ['Software', 'Fintech', 'Cloud Computing', 'AI & Data'],
},  

  benefits: [
  {
    title: 'Faster Project Delivery',
    description:
      'Skilled professionals onboard quickly, reducing time-to-productivity.',
  },
  {
    title: 'Reduced Hiring Risk',
    description:
      'Pre-vetted talent means fewer failed hires and costly replacements.',
  },
  {
    title: 'Scalable Teams',
    description:
      'Scale up or down based on project demand without long-term overhead.',
  },
  {
    title: 'Cost Efficiency',
    description:
      'Cut recruitment costs by up to 40% with our managed staffing model.',
  },
  {
    title: 'Focus on Core Business',
    description:
      'We handle the hiring complexity. You focus on building.',
  },
  {
    title: 'Compliance & Security',
    description:
      'Rigorous technical vetting and background checks for all placements.',
  },
],
    process: [
      { title: 'Understand', desc: 'We deep-dive into your role, tech stack & team dynamics.' },
      { title: 'Source & Screen', desc: 'We identify, assess & shortlist from our verified talent pool.' },
      { title: 'Match & Present', desc: 'You receive 2–3 curated profiles, not a pile of resumes.' },
      { title: 'Place & Support', desc: 'We manage onboarding and stay with you post-placement.' }
    ],
    faqs: [
      { q: 'What types of IT roles do you staff?', a: 'We staff across the full technology spectrum  software developers, cloud engineers, DevOps, cybersecurity, data engineers, QA, and IT project managers.' },
      { q: 'How quickly can you provide candidates?', a: 'In most cases, we present shortlisted profiles within 24 to 48 hours of receiving your requirement.' },
      { q: 'Do you offer contract and permanent staffing?', a: 'Yes. We offer Contract, Contract-to-Hire, and Full-Time staffing models tailored to your business needs.' },
      { q: 'How do you ensure candidate quality?', a: 'Every candidate goes through a 3-layer screening  technical assessment, communication evaluation, and cultural fit review before they reach you.' },
      { q: 'What if the placed candidate doesn\'t work out?', a: 'We offer a structured replacement guarantee. If a placement doesn\'t meet expectations, we re-engage at no additional cost.' },
      { q: 'How does Chalky Infotech handle IR35 compliance and payroll for contract IT staffing in the UK?', a: 'We provide complete IR35 assessment support and payroll management for our UK-based IT contractors. We partner with fully certified umbrella companies and employment legal specialists to ensure 100% compliance with HMRC regulations, protecting your business from potential legal and tax liabilities.' },
      { q: 'Can you support hybrid or fully remote IT staffing models across the UK and India?', a: 'Absolutely. We support on-site, hybrid, and fully remote IT staffing setups. With physical operations and registered entities in both the UK and India, we can manage cross-border remote developers, handle local payroll compliance, and set up robust infrastructure support for your distributed engineering teams.' },
      { q: 'What tech stacks and developer domains do you specialize in sourcing?', a: 'Our domain-specific recruiters cover the entire modern tech ecosystem, including Cloud Engineers (AWS, Azure, GCP), DevOps Specialists, Software Engineers (React, Node, Python, Java, .NET), Data Engineers & Architects, AI/ML Engineers, QA Automation Specialists, and IT Support Professionals.' },
      { q: 'What is the cost structure for your IT staffing solution?', a: 'For contract staffing, we operate on a transparent margin-inclusive day-rate basis. For permanent IT recruitment, our fee is calculated as a percentage of the candidate\'s first-year base salary. We offer competitive tiered pricing and volume discounts for enterprises building dedicated squads.' },
      { q: 'How do you conduct technical assessment to verify developer skills?', a: 'We use a 3-tier assessment workflow: first, an automated technical coding challenge tailored to your stack; second, a live technical interview led by our senior engineering advisors; and third, code quality reviews and reference verifications to guarantee practical hands-on capabilities.' }
    ],
    features: [
      { title: '48-Hour Talent Matching', desc: 'No long waiting cycles.', icon: 'Clock' },
      { title: '3-Layer Candidate Vetting', desc: 'Only qualified professionals reach you.', icon: 'ShieldCheck' },
      { title: 'Dedicated Account Manager', desc: 'One point of contact, zero confusion.', icon: 'UserCircle' },
      { title: 'Domain-Specific Recruiters', desc: 'We know your tech stack, not just job titles.', icon: 'Code2' },
      { title: 'Zero Replacement Fee', desc: 'Wrong fit? We fix it at no extra cost.', icon: 'Zap' }
    ]
  },
  {
    slug: 'executive-search',
    label: 'Executive Recruitment Services',
    icon: 'TrendingUp',
    desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.',
    hero: {
      badge: 'Leadership & Strategy',
      title: 'Executive Recruitment Services',
      subtitle: 'Connecting you with exceptional executive talent to strengthen leadership, accelerate growth, and achieve long-term success.',
      image: executiveSearchImg.src,
    },
    metaInfo: {
      title: ' Executive Recruitment Services UK | C-Suite Hiring | Chalky Infotech',
      description: 'Expert executive recruitment services across the UK. We attract and hire top C-suite leaders and senior executives who drive growth and long-term success.',
      keywords: 'executive recruitment UK, C-suite recruitment UK,senior executive hiring UK, CEO recruitment UK,CFO recruitment UK,CTO hiring UK,leadership recruitment UK,headhunting UK,board director recruitment UK,executive search UK',
      ogTitle: 'Executive Search UK | World-Class Leadership Acquisition',
      ogDescription: 'Confidential C-suite & senior leadership search across the UK. Deep market mapping, behavioural assessment & board-aligned cultural fit. Results in 8–12 weeks.'
    },
    overview: {
    headingLabel: 'Executive Search',
  title: 'Strategic Excellence in Executive Search Solutions',

  description: `The right leader drives performance, inspires teams, and delivers sustainable growth. Our confidential, high-impact executive recruitment services are designed for organisations that seek exceptional leadership and long-term success.

• Confidential Search: Strict confidentiality protocols ensure your business and leadership needs remain private at every stage of the search.
• Global Talent Network: Access to a wide network of C-suite executives, VPs and senior leaders, including passive candidates not active in the job market.
• Leadership Assessment: Data-driven evaluation of leadership capability, cultural fit, and strategic impact to ensure the right long-term appointment.`,
  trustStats: [
    { value: '98%', label: 'Executive Placement Success' },
    { value: '8–12', label: 'Weeks to Leadership Appointment' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

 featureCards: [
  {
    title: 'Technical Alignment',
    headline: 'Precision Skill Matching',
    description:
      'Every candidate we put forward for IT staffing goes through our 3-stage vetting framework — a technical challenge, a live advisory interview, and a code quality review — so you get production-ready professionals from day one.',
    tag: 'Vetting',
  },
  {
    title: 'Strategic Partnership',
    headline: 'Business-First Recruitment',
    description:
      'Our consultants act as strategic talent advisors, aligning every IT staffing search with your technology roadmap, team culture, project requirements, and long-term growth goals to deliver hires that create real business impact.',
    tag: 'Advisory',
  },
  {
    title: 'Quality Assurance',
    headline: 'Zero-Compromise Standards',
    description:
      'From background checks to multi-stage technical evaluation and cultural fit assessment, our quality assurance process keeps talent standards consistently high across every IT staffing engagement.',
    tag: 'Excellence',
  },
],
differentiators: [
  'Domain-specialist recruiters dedicated to your industry vertical',
  'Transparent, compliance-first models — IR35 & EOR ready',
  'Zero replacement fee — we re-engage at no extra cost',
  'UK & India registered for seamless cross-border delivery',
  'Real-time pipeline visibility & weekly performance reports',
  'Contract, Permanent, Temp, On-Site & Remote hiring models',
],

  whyChooseTitle:
  'Why Choose Chalky Infotech for <span class="text-[#7A1F5C]">Executive Recruitment Services</span>?',
whyChooseDescription: `
At Chalky Infotech, our <strong class="text-[#1A1A1A]">executive recruitment services</strong>
deliver more than just candidates — we deliver leaders who transform businesses.
We combine <strong class="text-[#1A1A1A]">deep industry knowledge</strong> with robust
assessment methodologies to ensure every leadership hire creates measurable value.
`,
  partnershipDescription:
    'From the initial leadership brief through appointment and onboarding, our specialists work closely with boards, founders, and senior stakeholders to ensure every executive appointment supports the organisation’s long-term objectives.',
advantageHeadingLabel: 'The Chalky Advantage',
  advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'Executive Recruitment Services',
advantageDescription: `
<p>
We deliver tailored workforce solutions that connect your organization with exceptional talent, streamline hiring processes, and drive long-term business success through our proven <strong style="color:#7A1F5C"> executive recruitment expertise</strong>.
</p>

<p>

</p>
`,

outcomesTitle: 'Measurable Executive Recruitment Outcomes',
outcomesDescription: `
<p>
We believe great hiring outcomes are measurable. Our
<strong style="color:#7A1F5C"> executive recruitment services </strong>
are backed by defined SLAs, transparent communication, and a structured post-hire
support framework. We track key metrics including time-to-hire, quality of hire,
retention rate, candidate experience, and cost-per-hire to ensure continuous improvement.
</p>

<p>
Our end-to-end <strong style="color:#7A1F5C">recruitment services</strong>
— including IT Staffing, Executive Recruitment, Contract & Permanent Hiring,
Remote Hiring, and Managed Workforce Solutions — help you build high-performing
leadership teams that accelerate growth and create lasting value.
</p>
`,
bottomAdvantageTitle: 'The Chalky Infotech Executive Recruitment Advantage',

bottomAdvantageDescription: `
  <p>
   Organisations across the UK and India partner with Chalky Infotech because our executive recruitment approach combines deep industry expertise, advanced assessment tools, and real-time market insights. We focus on finding leaders who not only fit the role but also drive culture, performance, and long-term business impact.
  </p>

  <p>
    From scale-ups to global enterprises, our 
    <strong style="color:#7A1F5C">executive recruitment services</strong> are tailored to your business goals, leadership needs, and organizational ambitions.
  </p>
`,

bottomOutcomesTitle: 'Measurable Executive Search Outcomes',

bottomOutcomesDescription: `
  <p>
    We believe great hiring outcomes are measurable. Our <strong style="color:#7A1F5C"> executive recruitment services </strong> are backed by defined SLAs, transparent communication, and a structured post-hire support framework. We track key metrics including time-to-hire, quality of hire, retention rate, candidate experience, and cost-per-hire to ensure continuous improvement.
  </p>

  <p>
    Our end-to-end <strong style="color:#7A1F5C"> recruitment services </strong> — including IT Staffing, Executive Recruitment, Contract & Permanent Hiring, Remote Hiring, and Managed Workforce Solutions — help you build high-performing leadership teams that accelerate growth and create lasting value.
  </p>
`,
benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Executive Recruitment Services Benefits',
benefitsDescription:
  'Our tailored recruitment solutions deliver measurable impact, helping your organisation build high-performing teams and achieve long-term success.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Executive Recruitment Services & Industry Expertise',

supportDescription:
  'We deliver seamless workforce solutions and expert recruitment services across international borders, connecting you with top executive talent and specialized professionals in every major global hub.',

supportSecondDescription:
  '',
 supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
  processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
 partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our recruitment expertise is built on years of delivering high-impact hiring strategies for enterprises worldwide.",

  industries: ['Enterprise', 'Banking', 'Technology', 'Healthcare'],
  }, 
 
 benefits: [
  {
    title: 'Discreet Search',
    description:
      'Strict confidentiality protects sensitive leadership transitions and active executive searches.',
  },
  {
    title: 'Global Network',
    description:
      'Tap into our private pipeline of passive C-suite and executive leaders across major tech hubs.',
  },
  {
    title: 'Behavioral Assessment',
    description:
      'Evaluate candidates on strategic alignment, leadership quality, and cultural fit.',
  },
  {
    title: 'Market Mapping',
    description:
      'Gain deep intelligence on candidate compensation, competitor structures, and executive availability.',
  },
  {
    title: 'Board Consulting',
    description:
      'Align board-level expectations with prospective leaders for long-term governance success.',
  },
  {
    title: 'Cultural Alignment',
    description:
      'Ensure new executive placements share your corporate values and fit the existing board.',
  },
],
    process: [
      { title: 'Strategic Briefing', desc: 'Defining the leadership vision and requirements.' },
      { title: 'Confidential Search', desc: 'Engaging top-tier passive candidates discreetly.' },
      { title: 'Executive Review', desc: 'Multi-stage leadership potential assessments.' },
      { title: 'Appointment', desc: 'Comprehensive offer and onboarding management.' }
    ],
    faqs: [
      { q: 'How does Chalky Infotech ensure confidentiality during an executive recruitment services?', a: 'We maintain the highest level of confidentiality throughout our executive recruitment services. We use strict non-disclosure agreements, secure data handling practices, and discreet communication protocols to safeguard the interests of both our clients and prospective candidates.' },
      { q: 'What is your success rate for executive recruitment services?', a: ' We maintain a 98% success rate for executive recruitment services, driven by our deep industry expertise, rigorous candidate evaluation, and a proven, data-driven recruitment methodology.' },
      { q: 'How do you identify and attract top talent for executive recruitment services globally?', a: 'Our expert recruiters leverage deep industry networks, advanced sourcing tools, and a rigorous screening process to identify and engage high-calibre professionals, ensuring the right talent matches your organization’s unique needs across global markets.' },
      { q: 'What methodology do you use for leadership and behavioral assessments in executive recruitment services?', a: ' We use a structured and data-driven assessment methodology that combines behavioral interviewing, psychometric tools, and leadership competency frameworks to evaluate a candidate’s skills, potential, cultural fit, and ability to create long-term impact.' },
      { q: 'Can you provide benchmarking and market mapping for executive recruitment services?', a: 'Yes, we offer comprehensive market intelligence, salary benchmarking, and talent mapping to help you make informed hiring decisions and stay competitive in attracting and retaining top executive talent.' },
      { q: 'How do you ensure cultural alignment between executive hires and the board?', a: ' We use a structured cultural assessment framework to evaluate alignment across values, leadership style, and organizational goals — ensuring every executive we place integrates seamlessly with your board and leadership team.' },
      { q: 'What is the typical duration of a high-impact executive recruitment services project?', a: ' Our executive recruitment services projects typically take between 4 to 10 weeks, depending on the role complexity, market availability, and specific client requirements.' },
      { q: 'Do you offer post-placement onboarding support for new executive hires?', a: ' Yes, we provide tailored post-placement support, including onboarding guidance and regular check-ins during the first 90 days, to help new executives integrate successfully and deliver early impact.' },
      { q: 'How do you handle executive recruitment services projects for sensitive "confidential replacement" roles?', a: '  We manage sensitive and confidential recruitment projects with the highest level of discretion, using strict confidentiality protocols, limited communication channels, and a careful, targeted approach to protect your organization’s interests and brand reputation.' }
    ],
    features: [
      { title: 'Global Talent Access', desc: 'Salary and competency benchmarking across international leadership markets.', icon: 'Globe' },
      { title: 'Data-Driven Assessment', desc: 'Evidence-based frameworks to evaluate strategic vision, EQ and board-readiness.', icon: 'Brain' },
      { title: 'Leadership Hiring Solutions', desc: 'Strategic counsel aligned with shareholder and governance expectations.', icon: 'Briefcase' },
      { title: 'Retention & Succession Planning', desc: '90-day post-placement support ensuring long-term leadership stability.', icon: 'ShieldCheck' },
      { title: 'Confidential Pipeline', desc: 'Discreet engagement of passive candidates not visible on the open market.', icon: 'Lock' }
    ]
  },
  {
    slug: 'contract-staffing',
    label: 'Contract recruitment',
    icon: 'Clock',
    desc: 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.',
    hero: {
      badge: 'Flexible Workforce',
      title: 'Contract Recruitment Services in uk',
      subtitle: 'Flexible recruitment services that connect organizations with top talent for short-term, long-term, or project-based roles.',
      image: contractStaffingImg.src,
    },
    metaInfo: {
      title: 'Contract Recruitment Services UK | Flexible Project-Based Talent | Chalky Infotech',
      description: 'Flexible contract recruitment in the UK. Connect with pre-vetted professionals for project-based roles with full IR35 compliance and fast turnaround.',
      keywords: 'contract recruitment UK,contract recruitment services UK ,project recruitment UK, IR35 compliant recruitment UK, contingent workforce UK,contract hiring UK,flexible recruitment UK,project talent recruitment UK',
      ogTitle: 'Contract Staffing UK | Agile Talent for Project Demands',
      ogDescription: 'Pre-vetted contract specialists deployed in 48–72 hours. Full IR35 compliance, managed payroll and scalable workforce support across the UK.'
    },
   overview: {
    headingLabel: 'Contract Recruitment Services uk ',
  title: 'Flexible Talent Solutions — Specialist Expertise On Demand',

 description: `The right talent shouldn't wait. Our contract recruitment services UK help organisations quickly connect with skilled professionals — exactly when, where, and for as long as they're needed.

• Faster Time to Hire: Pre-vetted contract professionals ready to join on-site or remotely within 48–72 hours of your requirement.
• End-to-End Compliance: IR35 assessment, payroll, and contractor management handled seamlessly from start to finish.
• Flexible & Cost-Efficient: Scale your workforce up or down based on project needs — without long-term commitments or added overheads.`,
  trustStats: [
    { value: '98%', label: 'Placement Success Rate' },
    { value: '48h', label: 'Average Talent Match' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
    
  ],

 featureCards: [
  {
    title: 'TECHNICAL ALIGNMENT',
    headline: 'Precision Skill Matching',
    description:
      'Every candidate is assessed through our 3-layer vetting framework — technical challenge, live advisory interview, and code quality review — ensuring production-ready professionals from day one.',
  
    tag: 'VETTING',
  },
  {
    title: 'STRATEGIC PARTNERSHIP',
    headline: 'Business-First Recruitment',
    description:
      'Our consultants act as strategic talent advisors, aligning every search with your long-term roadmap, culture, and growth objectives to deliver hires that drive measurable business outcomes.',
   
    tag: 'ADVISORY',
  },
  {
    title: 'QUALITY ASSURANCE',
    headline: 'Zero-Compromise Standards',
    description:
      'From background verification to multi-stage competency evaluation and cultural fit profiling, our QA protocols ensure consistently high talent quality across every engagement.',
   
    tag: 'EXCELLENCE',
  },
],

differentiators: [
  'Domain-specialist recruiters dedicated to your industry vertical',
  'Transparent, compliance-first models — IR35 & EOR ready',
  'Zero replacement fee — we re-engage at no extra cost',
  'UK & India registered for seamless cross-border delivery',
  'Real-time pipeline visibility & weekly performance reports',
  'Contract, Permanent, Temp, On-Site & Remote hiring models',
],

 whyChooseTitle:
  'Why Choose Chalky Infotech for <strong class="text-[#7A1F5C]">Contract Recruitment Services</strong>?',

whyChooseDescription: `
At <strong class="text-[#1A1A1A]">Chalky Infotech</strong>, our
<strong class="text-[#1A1A1A]"> contract recruitment services in UK </strong>
are designed around a simple belief — the right talent, matched right, creates real business impact.
We combine <strong class="text-[#1A1A1A]">deep industry knowledge</strong> with
<strong class="text-[#1A1A1A]"> data-driven assessment </strong>
to ensure every hire adds value from day one.
`,
  partnershipDescription:
    '',
advantageHeadingLabel: 'The Chalky Advantage',
 advantageTitle: 'Strategic Excellence in',
advantageTitleHighlight: 'Contract Recruitment Services',
advantageDescription: `
<p>
We deliver tailored recruitment solutions that connect your business with the right talent, streamline hiring processes, and drive long-term success through our proven contract recruitment framework.
</p>

<p>

</p>
`,

outcomesTitle: 'Measurable Contract Staffing Outcomes',

outcomesDescription: `
<p>
Every contract staffing engagement is underpinned by clear SLAs, transparent
reporting, and a structured post-placement support window. We track time-to-hire,
retention rate, candidate satisfaction, and cost-per-hire continuously.
</p>

<p>
Our <strong style="color:#7A1F5C">full recruitment services</strong> — spanning
IT Staffing, Executive Search, Contract & Permanent Hiring, Remote Hiring, and
Managed Workforce Solutions — scale with your ambitions at every stage of growth.
</p>
`,
bottomAdvantageTitle: 'The Chalky Infotech Contract Staffing Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech because our
    contract staffing methodology blends behavioural analytics, domain-expert
    knowledge, and live market intelligence. We treat every engagement as a
    long-term partnership — not a transactional search.
  </p>

  <p>
    From fast-growing SaaS startups to FTSE-listed enterprises, our
    <strong style="color:#7A1F5C">contract staffing solution</strong>
    is calibrated to your sector, your culture, and the calibre of talent you deserve.
  </p>
`,

bottomOutcomesTitle: 'Measurable Contract Staffing Outcomes',

bottomOutcomesDescription: `
  <p>
    Every contract staffing engagement is underpinned by clear SLAs, transparent
    reporting, and a structured post-placement support window. We track time-to-hire,
    retention rate, candidate satisfaction, and cost-per-hire continuously.
  </p>

  <p>
    Our <strong style="color:#7A1F5C">full recruitment services</strong> — spanning
    IT Staffing, Executive Search, Contract & Permanent Hiring, Remote Hiring,
    and Managed Workforce Solutions — scale with your ambitions at every stage of growth.
  </p>
`,

benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Contract Recruitment Services in uk Benefits',
benefitsDescription:
  'Our specialized approach delivers measurable impact, helping your organization secure the right talent, reduce time-to-hire, and drive sustainable growth.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Contract Staffing & Industry Expertise',

supportDescription:
  'We provide seamless workforce management and specialized recruitment support across international borders, ensuring your organization has the right talent in every major global hub.',

supportSecondDescription:
  '',
  supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
 processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our recruitment expertise is built on years of delivering high-impact hiring strategies for enterprises worldwide.",

  industries: ['Technology', 'Healthcare', 'Finance', 'Retail'],
  },
   benefits: [
  {
    title: 'Rapid Deployment',
    description:
      'Get pre-vetted, ready-to-work contract specialists deployed within 48 to 72 hours.',
  },
  {
    title: 'Flexible Models',
    description:
      'Scale your workforce up or down dynamically depending on active project phases.',
  },
  {
    title: 'Reduced Overhead',
    description:
      'Avoid long-term payroll commitments and benefits costs by using contract professionals.',
  },
  {
    title: 'Specialist Network',
    description:
      'Access niche technical experts for specific project deliverables and cloud migrations.',
  },
  {
    title: 'Scalable Support',
    description:
      'Quickly expand team bandwidth to handle seasonal demands or tight project deadlines.',
  },
  {
    title: 'Fast Onboarding',
    description:
      'Streamline the transition process so external talent starts delivering value from day one.',
  },
],
    process: [
      { title: 'Project Scoping', desc: 'Understanding your specific project deliverables.' },
      { title: 'Rapid Sourcing', desc: 'Identifying available contract professionals.' },
      { title: 'Compliance', desc: 'Managing contracts and IR35 compliance.' },
      { title: 'Deployment', desc: 'Fast onboarding and project start.' }
    ],
    faqs: [
      { q: 'How quickly can Chalky Infotech fill urgent project-based contract roles?', a: ' Through our contract recruitment service, we can typically present pre-vetted, ready-to-work contract specialists within 48 to 72 hours for most technical and operational requirements.' },
      { q: 'Do you manage payroll and compliance for all contract staff?', a: 'Yes, our contract recruitment service includes end-to-end payroll processing and full compliance management, ensuring you focus on projects while we handle the rest.' },
      { q: 'What are the benefits of using contract staffing for agile project delivery?', a: 'Our contract recruitment service gives you rapid access to specialized talent, ensuring on-time delivery, flexibility, and cost efficiency. You can scale your team up or down as per project needs without long-term commitments.' },
      { q: 'How do you handle IR35 compliance and other local labor regulations?', a: ' Our contract recruitment service ensures full IR35 compliance and adherence to all local labor regulations. We manage assessments, documentation, and ongoing compliance, so you remain protected and audit-ready.' },
      { q: 'Can I scale my contract workforce up or down based on project needs?', a: ' Yes, our contract recruitment service is designed for flexibility. You can quickly scale your team up or down based on project requirements—ensuring the right talent at the right time without long-term commitments.' },
      { q: 'What technical specialties do you provide through your contract network?', a: 'Our contract recruitment service spans 12+ industries, including IT, Engineering, BFSI, Healthcare, Retail, Manufacturing, and more. We tailor solutions to match your industry-specific talent needs.' },
      { q: 'How do you ensure contract professionals integrate seamlessly with internal teams?', a: 'As part of our contract recruitment service, we conduct a thorough onboarding process, set clear expectations, and provide ongoing support to ensure smooth collaboration and alignment with your team’s goals.' },
      { q: 'What is the maximum duration for a contract staffing engagement?', a: 'Our contract recruitment service offers flexible engagement durations. We support short-term, long-term, and project-based hiring based on your specific business needs.' },
      { q: 'Do you offer temp-to-perm conversion options for contract hires?', a: 'Yes, our contract recruitment service includes temp-to-perm conversion options, allowing you to evaluate performance and transition top talent to permanent roles.' }
    ],
    features: [
      { title: '48–72hr Time-to-Hire', desc: 'Contract specialists on-site or remote within two to three business days.', icon: 'Clock' },
      { title: 'IR35 & EOR Compliance', desc: 'Full status determination and payroll management for every UK engagement.', icon: 'ShieldCheck' },
      { title: 'Scalable Talent Solutions', desc: 'Increase or decrease headcount instantly as project phases evolve.', icon: 'Users' },
      { title: 'Flexible Engagement Models', desc: 'Convert high-performing contractors into permanent hires seamlessly.', icon: 'TrendingUp' },
      { title: 'Zero Admin Burden', desc: 'We handle contracts, taxes and compliance — you focus on delivery.', icon: 'CheckCircle' }
    ]
  },
  {
    slug: 'permanent-hiring',
    label: 'Permanent Recruitment',
    icon: 'Users',
    desc: 'Strategic permanent placement services to build your long-term success with high-retention talent.',
    hero: {
      badge: 'Long-term Success',
      title: 'Permanent Recruitment Services',
      subtitle: 'Find the right talent with trusted permanent recruitment services in UK. Connect with Skilled professionals for a Better fit and Long-term hiring.',
      image: permanentHiringImg.src,
    },
    metaInfo: {
      title: 'Permanent Recruitment Services UK | Chalky Infotech',
      description: 'Expert permanent recruitment services for UK businesses, backed by global delivery. Precision-vetted, culture-fit talent from graduate to board level.',
      keywords: 'permanent hiring UK, permanent recruitment UK, headhunting UK, direct hire UK, permanent placement UK, full-time recruitment UK, cultural alignment hiring UK, senior permanent recruitment UK',
      ogTitle: 'Permanent Hiring UK | Strategic Talent for Long-Term Success',
      ogDescription: 'High-retention permanent placements across all UK sectors. Deep cultural mapping, targeted headhunting and guaranteed placement support.'
    },
    overview: {
      headingLabel: 'Permanent Recruitment in UK',
     
  title: 'A Strategic Talent Investment Built for Retention',

  description:
    'A permanent hire is never just another name on the payroll — it is a long-term investment in where your organisation is heading. We use data-led talent mapping so every placement fits on both skills and values, not skills alone.\n\n• Targeted Headhunting: Reaching strong, passive candidates who are not actively job-hunting but would consider the right opportunity.\n• Multi-Stage Vetting: A thorough technical, cultural, and motivational assessment before any candidate reaches your desk.\n• Retention by Design: Our permanent placements are built around career goals, organisational values, and long-term cultural alignment.',

  trustStats: [
    { value: '98%', label: 'Placement Success Rate' },
    { value: '3+', label: 'Years Average Retention' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
    {
      title: 'TECHNICAL ALIGNMENT',
      headline: 'Precision Skill Matching',
      description:
        'Every candidate we put forward for permanent recruitment goes through our 3-stage vet-ting framework a technical challenge, a live advisory interview, and a code quality re-view  so you get production-ready professionals from day one.',
      
      tag: 'VETTING',
    },
    {
      title: 'STRATEGIC PARTNERSHIP',
      headline: 'Business-First Recruitment',
      description:
        'Our UK-based consultants work as strategic talent advisors, shaping every permanent re-cruitment search around your long-term roadmap, culture and growth goals to deliver hires that create real business impact.',
     
      tag: 'ADVISORY',
    },
    {
      title: 'QUALITY ASSURANCE',
      headline: 'Zero-Compromise Standards',
      description:
        'From background checks to multi-stage competency evaluation and cultural fit profiling, our quality assurance process keeps talent standards consistently high across every UK permanent recruitment engagement.',
     
      tag: 'EXECELLENCE',
    },
  ],

  differentiators: [
    'Recruiters who specialise in your exact industry, not generalists',
    'Transparent, compliance-first approach  fully IR35 and EOR ready',
    'No replacement fee  we step back in at zero extra cost',
    'Registered across the UK and India for seamless cross-border hiring',
    'Live pipeline visibility, backed by weekly performance reporting',
    'Flexible hiring models contract, permanent, temporary, on-site and remote',
  ],

 whyChooseTitle:
  'Why Choose Chalky Infotech for <strong class="text-[#7A1F5C]">Permanent Recruitment Services</strong>?',
 whyChooseDescription: `
At <strong class="text-[#000000]">Chalky Infotech</strong>, our
<strong class="text-[#7A1F5C]"> permanent recruitment services </strong>
in the UK are grounded in one simple belief — hiring done well is a genuine strategic advantage.
We bring together
<strong class="text-[#7A1F5C]"> deep industry knowledge </strong>
and rigorous, evidence-based assessment so every hire strengthens your business rather than putting it at risk.
`,
 partnershipDescription: `
With registered operations spanning the <strong class="text-[#000000]">UK and India</strong>, and a talent network across 12+ industries, we deliver measurable outcomes at every stage of hiring  from graduate in-take to board-level appointments. We work as a genuine extension of your UK team, not as an outside vendor.
`,
advantageHeadingLabel: 'The Chalky Advantage',
  advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'Permanent Recruitment Solutions',
  advantageDescription: `
<p>

</p>

<p>

</p>
`,
  outcomesTitle: 'Measurable Outcomes from Permanent Recruitment',
  outcomesDescription: `
<p>
Every permanent recruitment engagement runs on clear SLAs, transparent reporting, and a structured post-placement support window. We continuously track time-to-hire, retention rate, candidate satisfaction, and cost-per-hire.
</p>

<p>
Our <strong style="color:#7A1F5C">full recruitment services</strong> covering IT staffing, executive search, contract and permanent recruitment, remote hiring, and managed workforce solutions scale with UK businesses at every stage of growth.
</p>
`,
bottomAdvantageTitle: 'The Chalky Infotech Permanent Recruitment Advantage',

bottomAdvantageDescription: `
  <p>
    Businesses across the UK and India choose Chalky Infotech because our approach to permanent recruitment combines behavioural analytics, sector-specific expertise, and live market intelligence. We treat every engagement as a long-term partnership, not a one-off transaction.
  </p>

  <p>
    From fast-growing SaaS startups to FTSE-listed enterprises, our <strong style="color:#7A1F5C"> permanent recruitment </strong> solution is tailored to your sector, your culture, and the calibre of talent your UK busi-ness deserves.
  </p>
`,

bottomOutcomesTitle: 'Measurable Outcomes from Permanent Recruitment',

bottomOutcomesDescription: `
  <p>
   Every permanent recruitment engagement runs on clear SLAs, transparent reporting, and a structured post-placement support window. We continuously track time-to-hire, reten-tion rate, candidate satisfaction, and cost-per-hire.
  </p>

  <p>
    Our <strong style="color:#7A1F5C"> full recruitment services </strong>  covering IT staffing, executive search, contract and per-manent recruitment, remote hiring, and managed workforce solutions scale with UK businesses at every stage of growth.
  </p>
`,
  
  benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Permanent Recruitment Benefits',
benefitsDescription:
  'Our specialised approach delivers measurable impact, helping UK organisations achieve operational efficiency and access genuine talent excellence.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Permanent Recruitment & Industry Expertise',

supportDescription:
  'We provide seamless workforce management and specialised permanent recruitment support across international borders, ensuring UK organisations have the right talent in every major global hub.',

supportSecondDescription:
  '',
 supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
 processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement with UK businesses.',  
 partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our permanent recruitment expertise is built on years of delivering high-impact hiring strategies for enterprise leaders across technical and professional domains worldwide.",
 
  industries: ['All Sectors', 'Fintech', 'Retail', 'Education'],
  },
    benefits: [
  {
    title: 'High Retention',
    description:
      'A focus on career goals and culture fit means hires stay and grow with your business.',
  },
  {
    title: 'Cultural Alignment',
    description:
      "We map your organisation's environment to match candidates who share your core values.",
  },
  {
    title: 'Cost Efficiency',
    description:
      'Reduce time-to-hire and costly replacement cycles for stronger return on investment.',
  },
  {
    title: 'Targeted Headhunting',
    description:
      "We proactively approach passive candidates who aren't job-hunting but fit your profile.",
  },
  {
    title: 'Brand Advocacy',
    description:
      'We represent your employer brand professionally, leaving candidates with a lasting positive impression.',
  },
  {
    title: 'Replacement Support',
    description:
      'If a placement doesn\'t work out, we step back in to help you find the right fit.',
  },
],
    process: [
      { title: 'Culture Deep-dive', desc: 'Mapping your internal culture and values.' },
      { title: 'Targeted Search', desc: 'Sourcing talent that wants to grow with you.' },
      { title: 'Multi-stage Vetting', desc: 'Deep-dive interviews and reference checks.' },
      { title: 'Placement', desc: 'Ensuring a smooth transition and onboarding.' }
    ],
    faqs: [
      { q: 'What is a permanent recruitment service?', a: 'A service that helps UK businesses find and hire full-time, long-term employees, han-dling sourcing, vetting, and onboarding support.' },
      { q: 'How is permanent recruitment different from contract recruitment?', a: 'Permanent recruitment fills ongoing, full-time roles; contract recruitment covers short-term or project-based work.' },
      { q: 'How much do UK permanent recruitment agencies charge?', a: 'Usually 15–25% of the candidate\'s first-year salary, paid once the hire is confirmed.' },
      { q: 'How long does permanent recruitment take?', a: 'Typically 4–8 weeks from brief to offer, longer for senior or highly technical roles.' },
      { q: 'What industries do permanent recruitment agencies cover?', a: 'Most commonly IT, finance, engineering, healthcare, legal, and executive hiring.' },
      { q: 'Do agencies offer a replacement guarantee?', a: 'Many offer a replacement period at no extra cost if a hire doesn\'t work out terms vary by agency.' },
      { q: 'What is passive headhunting?', a: 'Approaching skilled candidates who aren\'t actively job-hunting but may consider the right role.' },
      { q: 'Can a UK recruitment agency hire internationally?', a: 'Yes  many, including cross-border agencies, also source and place talent overseas.' },
      { q: 'Does IR35 apply to permanent recruitment?', a: 'No, IR35 targets contractors, not permanent employees, though agencies stay compliant across all hiring models.' },
      { q: 'How do I choose the right permanent recruitment agency?', a: 'Look at their industry specialism, vetting process, retention track record, and fee trans-parency.' }
    ],
    features: [
      { title: 'Cultural Mapping', desc: 'Deep-dive analysis of your values, environment and team dynamics before search begins.', icon: 'Heart' },
      { title: 'Passive Headhunting', desc: 'Targeted outreach to high-calibre professionals not active on the open market.', icon: 'Target' },
      { title: 'Multi-Stage Vetting', desc: 'Technical, motivational and cultural fit assessment before any profile is presented.', icon: 'ShieldCheck' },
      { title: 'Retention Focused', desc: 'Placements averaging 3+ years tenure through precision alignment methodology.', icon: 'TrendingUp' },
      { title: 'Placement Guarantee', desc: 'Structured re-engagement at no additional cost if a hire does not meet expectations.', icon: 'Award' }
    ]
  },
  {
    slug: 'temporary-recruitment',
    label: 'Temporary Recruitment',
    icon: 'UserPlus',
    desc: 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.',
    hero: {
      badge: 'Rapid Response',
      title: 'Temporary Staffing Services',
      subtitle: 'Scaling your workforce quickly with qualified professionals to meet seasonal demands and short-term staffing needs.',
      image: temporaryRecruitmentImg.src,
    },
    metaInfo: {
      title: 'Temporary Staffing Services UK | Rapid Workforce Scaling | Chalky Infotech',
      description: 'Fast, flexible temporary staffing in the UK. Deploy vetted temp staff in 24–48 hours for seasonal peaks and high-volume demands.',
      keywords: 'temporary staffing UK, temp staffing services UK, temporary workers UK, seasonal staffing UK, high volume temp staffing UK, temp staffing agency UK, flexible temp workforce UK, temp to perm UK',
      ogTitle: 'Temporary Recruitment UK | Vetted Staff in 24–48 Hours',
      ogDescription: 'Rapid-response temporary staffing across logistics, retail, customer support and manufacturing. Fully managed payroll, compliance and on-site coordination.'
    },
   overview: {
    headingLabel: 'Temporary Staffing',
  title: 'Instant Operational Scaling — Ready to Deploy in 24–48 Hours',

  description: `Seasonal peaks, project demands and unexpected workload increases require a staffing partner who responds quickly. Our temporary staffing solutions provide access to a pre-vetted talent pool ready for same-day or next-day deployment.

• Rapid Deployment: Pre-screened temporary professionals available across the UK within one to two business days.

• Seamless Administration: Contracts, payroll, tax compliance and on-site coordination managed efficiently from day one.

• Flexible Cost Model: Pay only for hours worked, helping protect your permanent team from burnout and reduce unnecessary fixed overheads.`,
  trustStats: [
    { value: '48h', label: 'Average Talent Matching' },
    { value: '98%', label: 'Placement Success Rate' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
  {
    title: 'TECHNICAL ALIGNMENT',
    headline: 'Precision Skill Matching',
    description:
      'Every temporary professional is assessed through our structured vetting framework — including skills screening, experience validation, and role-specific evaluation — ensuring reliable talent ready to contribute from day one.',
   
    tag: 'VETTING',
  },
  {
    title: 'STRATEGIC PARTNERSHIP',
    headline: 'Business-First Staffing',
    description:
      'Our consultants align every temporary staffing requirement with your workload, project timelines, culture, and workforce goals to provide adaptable talent exactly when your business needs it.',
    
    tag: 'ADVISORY',
  },
  {
    title: 'QUALITY ASSURANCE',
    headline: 'Zero-Compromise Standards',
    description:
      'From background verification to competency checks and cultural fit assessment, our quality protocols ensure consistently dependable temporary professionals across every engagement.',
   
    tag: 'EXCELLENCE',
  },
],

  differentiators: [
  'Industry-focused recruiters with expertise across multiple sectors',
  'Clear and compliant temporary staffing processes',
  'Quick replacement support to maintain workforce continuity',
  'UK & India reach for efficient talent sourcing and delivery',
  'Live candidate pipeline updates with regular performance tracking',
  'Contract, Permanent, Temporary, On-Site & Remote staffing options',
],

 whyChooseTitle:
  'Why Choose Chalky Infotech for <span class="text-[#7A1F5C]">Temporary Staffing</span>?',

whyChooseDescription: `
At <strong class="text-[#1A1A1A]">Chalky Infotech</strong>, our
<strong class="text-[#7A1F5C]"> temporary staffing services </strong>
are designed to connect businesses with skilled talent when they need it most.
We combine <strong class="text-[#1A1A1A]">deep industry knowledge</strong>
with rigorous screening processes to ensure every placement supports productivity,
flexibility, and business continuity.

With established operations across the
<strong class="text-[#1A1A1A]"> UK and India </strong>
and an extensive talent network covering diverse industries, we provide reliable
staffing support at every level. We become an integrated part of your team,
delivering adaptable talent solutions that match your evolving workforce needs.
`,
  partnershipDescription:
    'We manage sourcing, candidate screening, coordination, and placement support so your organisation can maintain workforce continuity while responding to changing business requirements.',
advantageHeadingLabel: 'The Chalky Advantage',
   advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'Temporary Staffing Solutions',
  advantageDescription:
    'We deliver flexible workforce solutions designed to help your organization access exceptional talent, streamline staffing processes, and drive long-term business success through our proven temporary staffing framework.',

  outcomesTitle: 'Outcomes That Keep Your Business Moving',
  outcomesDescription:
    'Our temporary recruitment solutions help reduce vacancy disruption, maintain productivity, support seasonal demand, and give organisations greater control over workforce capacity.',

bottomAdvantageTitle: 'The Chalky Infotech Temporary Staffing Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech because our temporary staffing approach combines behavioural insights, industry expertise, and current market intelligence. We view every engagement as a long-term partnership — not simply a transactional staffing requirement
  </p>

  <p>
    From growing SaaS startups to FTSE-listed enterprises, our <strong class="text-[#1A1A1A]"> temporary staffing solution </strong> is aligned with your sector, workplace culture, and the quality of talent your business requires.
  </p>
`,

bottomOutcomesTitle: 'Measurable Temporary Staffing Outcomes',

bottomOutcomesDescription: `
  <p>
    Every temporary staffing engagement is supported by defined SLAs, clear reporting, and structured post-placement assistance. We continuously monitor time-to-hire, retention rate, candidate satisfaction, and cost-per-hire to deliver consistent staffing results.
  </p>

  <p>
   Our  <strong class="text-[#1A1A1A]"> full staffing services </strong> — spanning IT Staffing, Executive Search, Contract & Permanent Hiring, Remote Hiring, and Managed Workforce Solutions — scale alongside your business needs at every stage of growth.
  </p>
`,
    benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Temporary Staffing Benefits',
benefitsDescription:
  'Our tailored approach connects you with the right talent at the right time, helping your organisation stay agile, productive, and future-ready.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Temporary Staffing & Industry Expertise',

supportDescription:
  'We deliver seamless workforce solutions and specialized staffing support across international markets, helping organizations access qualified talent quickly while adapting to changing business demands. ',

supportSecondDescription:
  '',
  supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
 processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
 partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our recruitment expertise is built on years of delivering high-impact hiring strategies for enterprises worldwide.",

  industries: ['Logistics', 'Retail', 'Customer Support', 'Manufacturing'],
  }, 
    benefits: [
  {
    title: 'Immediate Availability',
    description:
      'Mobilize temporary talent pools within 24 to 48 hours for urgent workforce demands.',
  },
  {
    title: 'Flexible Contracts',
    description:
      'Scale staff levels hour-by-hour to respond to peaks without long-term contracts.',
  },
  {
    title: 'Managed Payroll',
    description:
      'We handle timesheets, compliance, payroll, and direct wage payments for temporary workers.',
  },
  {
    title: 'High-Volume Capacity',
    description:
      'Seamlessly coordinate bulk staffing for logistics hubs, retail surges, or support centers.',
  },
  {
    title: 'Vetted Professionals',
    description:
      'Every candidate is identity-checked and skill-assessed before arriving on-site.',
  },
  {
    title: 'Zero Admin Overhead',
    description:
      'We manage compliance, HR paperwork, and onboarding administrative burdens.',
  },
],
    process: [
      { title: 'Demand Planning', desc: 'Forecasting your temp requirements.' },
      { title: 'Rapid Sourcing', desc: 'Tapping into our "ready-to-go" talent pool.' },
      { title: 'Deployment', desc: 'Getting staff on-site within 24-48 hours.' },
      { title: 'Support', desc: 'Ongoing management of temp cohorts.' }
    ],
    faqs: [
      { q: 'How fast can you deploy vetted temporary staffing for seasonal peaks?', a: 'For unpredictable demand, we can typically deploy pre-vetted temporary staffing cohorts within 24 to 48 hours, ensuring your operations stay agile duringpeak periods.' },
      { q: 'Do you manage the complete administrative and payroll responsibilities for temporary staff?', a: 'Yes, Chalky Infotech oversees essential staffing administration, including employee contracts, payroll processing, tax compliance, and ongoing administrative assistance.' },
      { q: 'Can temporary staff be converted into permanent employees later?', a: 'Yes, our flexible temporary staffing model allows businesses to evaluate performance and fit, making it easier to transition high-performing staff into permanent team members.' },
      { q: 'What industries do you support with high-volume temporary staffing?', a: 'We deliver temporary staffing solutions across Logistics, Retail (seasonal demand), Customer Service operations, and Manufacturing environments.' },
      { q: 'How do you ensure temporary workers are fully vetted and ready to work?', a: 'All temporary staff undergo a structured screening process, including background verification, reference checks, and role-specific skills assessments to ensure they are qualified and prepared for deployment.' },
      { q: 'What is the minimum and maximum duration for temporary staffing assignments?', a: 'Our temporary staffing options are flexible, covering short-term assignments through multi-month projects, based entirely on your operational requirements.' },
      { q: 'How does temporary staffing help manage sudden operational spikes?', a: 'It provides a flexible, on-demand workforce that you can scale up or down instantly, protecting your permanent team from burnout and ensuring productivity and service levels are maintained during spikes.' },
      { q: 'Can you provide managed temp cohorts for warehouse or retail operations?', a: 'Yes, our temporary staffing solutions support large workforce groups, with on-site coordination that maintains productivity, consistency, and smooth operational integration across locations.' },
      { q: 'What support do you offer for on-site management of temporary staffing?', a: 'For larger staffing needs, we provide dedicated on-site coordinators who manage daily attendance, performance tracking, compliance, and workforce coordination.' }
    ],
    features: [
      { title: '24–48hr Mobilisation', desc: 'Pre-vetted temporary cohorts deployed within one to two business days UK-wide.', icon: 'Zap' },
      { title: 'High Volume Capacity', desc: 'Managing hundreds of simultaneous placements across multiple client sites.', icon: 'Layers' },
      { title: 'Fully Vetted Pool', desc: 'Identity, reference and role-specific competency checks for every temporary worker.', icon: 'CheckCircle' },
      { title: 'Managed Payroll', desc: 'Complete payroll, tax and administrative management for all temporary staff.', icon: 'BarChart' },
      { title: 'Temp-to-Perm Pathway', desc: 'Seamless conversion for top-performing temporaries into long-term permanent roles.', icon: 'TrendingUp' }
    ]
  },
  {
    slug: 'on-site-recruitment',
    label: 'OnSite Recruitment',
    icon: 'MapPin',
    desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.',
    hero: {
      badge: 'Embedded Partnership',
      title: 'On-Site Recruitment Solutions in the UK',
      subtitle: 'Benefit from dedicated recruiters working on-site as a seamless extension of your internal HR and hiring teams.',
      image: onSiteRecruitmentImg.src,
    },
    metaInfo: {
      title: 'Onsite Recruitment Services in UK | Dedicated Hiring Support',
      description: 'Get onsite recruitment services in UK with dedicated talent partners, streamlined hiring support, and tailored workforce solutions aligned with your business needs.',
      keywords: 'on-site recruitment UK, embedded recruitment UK, RPO UK, on-site recruiter UK, recruitment process outsourcing UK, dedicated recruiter UK, in-house recruitment UK, on-site hiring UK',
      ogTitle: 'On-Site Recruitment UK | Embedded Talent Acquisition Partnership',
      ogDescription: 'Dedicated recruiters working as a seamless extension of your internal HR team. Lower cost-per-hire, faster cycles and real-time hiring analytics.'
    },
   overview: {
    headingLabel: 'OnSite Recruitment:',
  title: 'Embedded Talent Partnership Recruitment From Within',

 description: `An onsite recruitment partnership means our consultants don't just work for your business — they work alongside it, embedded within your culture, your systems, and your hiring strategy.

• Deep Cultural Integration: Our recruiters act as an extension of your employer brand, delivering candidate expe-riences that reflect your values from first contact through to offer acceptance.
• Process Optimisation: We review and refine your hiring workflows to remove bottlenecks, cut time-to-hire, and bring down your cost-per-hire.
• Real-Time Reporting: Live dashboards covering time-to-hire, source quality, diversity metrics and cost-per-hire, giving UK hiring teams full visibility throughout.`,
  trustStats: [
    { value: '48h', label: 'Average Talent Matching' },
    { value: '98%', label: 'Placement Success Rate' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
  {
    title: 'TECHNICAL ALIGNMENT',
    headline: 'Precision Skill Matching',
    description:
      'Every candidate we place for UK businesses is assessed through our 3-stage vetting framework a technical challenge, a live advisory interview, and a code quality review ensuring production-ready professionals from day one.',
   
    tag: 'TECHNICAL ALIGNMENT',
  },
  {
    title: 'STRATEGIC PARTNERSHIP',
    headline: 'Business-First Recruitment',
    description:
      'Our consultants act as strategic talent advisors, aligning every UK search with your long-term roadmap, culture and growth objectives to deliver hires that drive measurable business outcomes.',
    
    tag: 'STRATEGIC PARTNERSHIP',
  },
  {
    title: 'QUALITY ASSURANCE',
    headline: 'Zero-Compromise Standards',
    description:
      'From background verification to multi-stage competency evaluation and cultural fit profiling, our QA protocols ensure consistently high talent quality across every engagement with UK organisations.',
    
    tag: 'QUALITY ASSURANCE',
  },
],

  differentiators: [
  'Recruiters who specialise in your specific industry, not generalists',
  'Transparent, compliance-first approach — fully IR35 and EOR ready for UK hiring',
  'No replacement fee — we step back in to help you find the right fit',
  'Registered across the UK and India for seamless cross-border delivery',
  'Live pipeline visibility, backed by weekly performance reporting',
  'Flexible hiring models — contract, permanent, temporary, on-site and remote across the UK',
],

  whyChooseTitle: 'Why Choose Chalky Infotech for On-Site Recruitment in the UK?',
  whyChooseDescription: `
At <strong class="text-[#000000]">Chalky Infotech</strong>, our
<strong class="text-[#7A1F5C]"> on-site recruitment services </strong>
are built on one simple belief — recruitment done properly becomes a genuine strategic advantage.
We combine
<strong class="text-[#7A1F5C]"> deep industry knowledge </strong>
with rigorous, evidence-based assessment so every hire strengthens your UK business rather than adding risk.
`,

partnershipDescription: `
With registered operations across the <strong class="text-[#000000]">UK and India</strong>, and a talent network spanning 12+ industries, we deliver measurable outcomes at every level from graduate intake through to board appointment for organisations across the UK. We work as a genuine extension of your team, not as a distant vendor.
`,
advantageHeadingLabel: 'The Chalky Advantage',
advantageTitle: 'Embedded Excellence in',
advantageTitleHighlight: 'Onsite Recruitment',


advantageDescription:
  'We place dedicated recruiters directly within your team, giving you faster hiring cycles, deeper cultural fit, and a workforce strategy built for lasting growth.',
  
  outcomesTitle: 'Measurable On-Site Recruitment Outcomes',

outcomesDescription: `
<p>
Every on-site recruitment engagement is underpinned by clear SLAs, transparent reporting, and a structured post-placement support window. We track time-to-hire, retention rate, candidate satisfaction, and cost-per-hire continuously.
</p>

<p>
Our <strong style="color:#7A1F5C">full recruitment services</strong> spanning IT staffing, executive search, contract and permanent hiring, remote hiring, and managed workforce solutions scale with UK businesses at every stage of growth.
</p>
`,
bottomAdvantageTitle: 'The Chalky Infotech Onsite Recruitment Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech for onsite
    recruitment because our approach combines dedicated recruitment expertise,
    on-location workforce support, structured candidate assessment, and live
    market intelligence.
  </p>

  <p>
    From project-based workforce requirements to long-term hiring needs, our
    <strong style="color:#7A1F5C">onsite recruitment solutions</strong> provide
    dedicated talent aligned with your business environment, culture, and operational goals.
  </p>
`,

bottomOutcomesTitle: 'Measurable Onsite Recruitment Outcomes',

bottomOutcomesDescription: `
  <p>
    Every onsite recruitment engagement is supported by clear SLAs, transparent
    reporting, continuous workforce coordination, and structured post-placement
    support. We focus on hiring speed, candidate quality, workforce retention,
    satisfaction, and operational efficiency.
  </p>

  <p>
    Our onsite recruitment model helps organisations strengthen workforce
    management, improve hiring efficiency, and maintain the right talent
    capacity as business requirements evolve.
  </p>
`,
benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Permanent Recruitment Benefits',
benefitsDescription:
  'Our specialised approach delivers measurable impact, helping UK organisations achieve peak operational efficiency and talent excellence.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Onsite Recruitment & Industry Expertise',

supportDescription:
  'We provide seamless workforce management and specialised onsite recruitment support across international borders, helping organisations build dedicated teams aligned with their operational requirements.',

supportSecondDescription:
  'Our onsite recruitment approach combines dedicated recruitment expertise, structured candidate assessment, workforce coordination, and live market intelligence to provide talent that fits your business environment, culture, and long-term workforce goals.',
  supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
 processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
 partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our recruitment expertise is built on years of delivering high-impact hiring strategies for enterprises worldwide.",

  industries: ['Tech Scale-ups', 'Large Enterprise', 'Manufacturing'],
  }, 
   benefits: [
  {
    title: 'On-Site Integration',
    description:
      'Recruiters work alongside your UK HR team, acting as genuine internal brand ambassadors.',
  },
  {
    title: 'Lower Cost-Per-Hire',
    description:
      'A streamlined hiring process reduces agency dependency and cuts direct costs.',
  },
  {
    title: 'Accelerated Cycles',
    description:
      'Embedded recruiters resolve bottlenecks in real time, closing UK roles faster.',
  },
  {
    title: 'Premium Candidate Experience',
    description:
      'High-touch communication and clear feedback loops throughout the process.',
  },
  {
    title: 'Strategic Alignment',
    description:
      'Hiring aligned directly to your corporate growth goals and long-term project needs.',
  },
  {
    title: 'Process Optimisation',
    description:
      'Continuous review of your ATS workflows and interview pipelines for peak efficiency.',
  },
],
    process: [
      { title: 'Integration', desc: 'Embedding our team into your culture.' },
      { title: 'Audit & Design', desc: 'Optimizing your existing hiring workflow.' },
      { title: 'Execution', desc: 'Full-cycle management from within.' },
      { title: 'Reporting', desc: 'Data-driven insights on hiring performance.' }
    ],
    faqs: [
      { q: 'How does an on-site recruitment model improve the overall hiring quality?', a: 'By working from within your organization, our recruiters develop a deep understanding of your culture and team dynamics, leading to more accurate and successful talent matches.' },
      { q: 'Can you scale the number of on-site recruiters based on our hiring volume?', a: 'Yes, our model is flexible. We can increase or decrease the number of dedicated on-site recruiters as your hiring requirements fluctuate throughout the year.' },
      { q: 'What is the typical duration of an on-site recruitment partnership?', a: 'On-site partnerships typically range from 3 months for specific projects to multi-year engagements for continuous high-volume hiring.' },
      { q: 'How do your on-site recruiters integrate with our internal HR systems?', a: 'Our team is trained to work with all major ATS and HR platforms, ensuring that all data remains within your systems while we manage the process.' },
      { q: 'Does an on-site model help in reducing the overall cost-per-hire?', a: 'Yes, by streamlining processes and reducing reliance on external agencies, an on-site partnership significantly lowers the overall cost of acquiring talent.' },
      { q: 'Can you optimize our existing recruitment processes while on-site?', a: 'Absolutely. Part of our value is performing a "Process Audit" to identify bottlenecks and implement best-in-class workflows that improve hiring speed and candidate quality.' },
      { q: 'How do you handle the candidate experience when representing our brand?', a: 'Our on-site recruiters act as your brand ambassadors, providing a consistent and high-quality experience that reflects your company values at every stage of the journey.' },
      { q: 'What kind of reporting and data analytics do you provide for on-site services?', a: 'We provide real-time dashboards and weekly reports on key metrics like time-to-hire, source quality, diversity statistics, and overall cost-per-hire.' },
      { q: 'Is the on-site model suitable for tech scale-ups and mid-sized firms?', a: 'Yes, it is highly effective for scale-ups undergoing rapid growth, providing the structure and expertise needed to build a sustainable talent pipeline quickly.' }
    ],
    features: [
      { title: 'Brand Ambassador', desc: 'Our recruiters represent your employer brand as a true internal team member.', icon: 'Award' },
      { title: 'Process Optimisation', desc: 'Workflow audit and redesign to eliminate hiring bottlenecks and cut delays.', icon: 'Settings' },
      { title: 'Cost Reduction', desc: 'Significantly lower cost-per-hire through embedded, high-volume delivery.', icon: 'TrendingDown' },
      { title: 'ATS Integration', desc: 'Native compatibility with all major HR and applicant tracking platforms.', icon: 'Database' },
      { title: 'Live Analytics', desc: 'Real-time dashboards on time-to-hire, diversity statistics and spend performance.', icon: 'BarChart' }
    ]
  },
  {
    slug: 'managed-services',
    label: 'Managed Recruitment',
    icon: 'Settings',
    desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.',
    hero: {
      badge: 'Operational Excellence',
      title: 'Managed Recruitment Service',
      subtitle: 'Optimize your entire talent supply chain with strategic managed recruitment services and workforce technology. ',
      image: managedServicesImg.src,
    },
    metaInfo: {
      title: 'Managed Recruitment Services UK | MSP & Contingent Hiring | Chalky Infotech ',
      description: 'Streamline hiring with managed recruitment services in the UK. Improve workforce efficiency, simplify contingent recruitment, and control hiring costs. ',
     keywords: 'managed recruitment services UK, managed recruitment provider UK, managed recruitment UK, recruitment services UK, contingent workforce management UK, VMS integration UK, workforce outsourcing UK, talent supply chain UK',
      ogTitle: 'Managed Workforce Solutions UK | Enterprise MSP Partner',
      ogDescription: 'Centralise your entire contingent workforce with our enterprise MSP model. Full compliance, 10–15% cost savings and unified workforce analytics across the UK.'
    },
   overview: {
    headingLabel: 'Managed Recruitment Service',
  title: 'Enterprise Workforce Optimisation — Complete Supply Chain Control',

 description: `Managing a large contingent workforce across multiple vendors is complex, costly, and compliance-heavy. Our Managed Service Provider (MSP) model transforms that complexity into a unified, efficient and fully controlled talent ecosystem.

• Centralised Talent Management: We act as your single point of accountability across your entire recruitment supply chain, providing standardised recruitment processes, clear SLAs, quality benchmarks, and consistent performance management.

• Technology-Driven Recruitment Visibility: Our Managed Recruitment Service uses technology and VMS integration to provide real-time visibility into hiring pipelines, recruitment spend, compliance, workforce data, and performance analytics, enabling better and faster hiring decisions.

• Recruitment Compliance: Automated background screening, Right-to-Work verification, IR35 management, and structured governance processes help maintain compliance throughout the recruitment lifecycle.`,
  trustStats: [
    { value: '98%', label: 'Placement Success Rate' },
    { value: '48h', label: 'Average Talent Matching' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
  {
    title: 'Technical Alignment',
    headline: 'Precision Skill Matching',
    description:
      'Every candidate is assessed through our 3-layer vetting framework — technical challenge, live advisory interview, and code quality review — ensuring production-ready professionals from day one.',
    tag: 'Vetting',
  },
  {
    title: 'Strategic Partnership',
    headline: 'Business-First Recruitment',
    description:
      'Our consultants act as strategic talent advisors, aligning every search with your long-term roadmap, culture, and growth objectives to deliver hires that drive measurable business outcomes.',
    tag: 'Advisory',
  },
  {
    title: 'Quality Assurance',
    headline: 'Zero-Compromise Standards',
    description:
      'From background verification to multi-stage competency evaluation and cultural fit profiling, our QA protocols ensure consistently high talent quality across every engagement.',
    tag: 'Excellence',
  },
],
differentiators: [
  'Industry-specialist recruiters dedicated to your sector and hiring requirements',
  'Transparent, compliance-focused recruitment models supporting IR35 and EOR requirements',
  'Replacement support designed to provide continuity throughout the hiring lifecycle',
  'UK and India operations supporting cross-border recruitment requirements',
  'Real-time recruitment pipeline visibility with regular performance reporting',
  'Flexible hiring models including Contract, Permanent, Temporary, On-Site, and Remote recruitment',
],

 whyChooseTitle:
  'Why Choose Chalky Infotech for <span class="text-[#7A1F5C]">Managed Recruitment Service</span>?',

whyChooseDescription: `
  At <strong class="text-[#1A1A1A]">Chalky Infotech</strong>, our
  <strong class="text-[#7A1F5C]">Managed Recruitment Service</strong>
  is designed to deliver strategic hiring outcomes rather than simply filling
  vacancies. We combine recruitment expertise, industry knowledge, data-driven
  assessment, and technology-enabled processes to help organisations attract
  and retain the right talent.

  <br /><br />

  With established operations across the
  <strong class="text-[#7A1F5C]">UK and India</strong>
  and access to a broad talent network across multiple industries, we provide
  flexible recruitment support designed around your workforce requirements.
  Our <strong class="text-[#7A1F5C]">Managed Recruitment Service</strong>
  works as an extension of your internal team, providing greater visibility,
  consistency, and control throughout the hiring process.
`,

  partnershipDescription:
    '',
advantageHeadingLabel: 'The Chalky Advantage',
 advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'Managed Recruitment Services Solutions',
  advantageDescription:
    'Our Managed Recruitment Service provides specialised workforce solutions designed to help your organisation attract, hire, and retain top-tier talent. We streamline recruitment workflows, improve hiring efficiency, and support sustainable workforce growth through a structured and technology-enabled recruitment framework.',

  outcomesTitle: 'Outcomes That Strengthen Recruitment Operations',
  outcomesDescription:
    'Our managed services approach helps improve recruitment consistency, reduce internal workload, accelerate talent acquisition, and create a more scalable workforce delivery model.',
bottomAdvantageTitle: 'The Chalky Infotech Managed Services Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech because our Managed Recruitment Service combines data-driven insights, domain expertise, and real-time market intelligence to deliver the right talent for evolving business needs. We build long-term recruitment partnerships that align hiring strategies with your workforce goals rather than treating recruitment as a transactional process.
  </p>

  <p>
   From fast-growing SaaS companies to established enterprises, our <strong class="text-[#7A1F5C]"> Managed Recruitment Service </strong> is tailored to your industry, organisational culture, and workforce requirements. This approach helps create a consistent talent pipeline while improving hiring efficiency, candidate quality, and overall recruitment performance.
  </p>
`,

bottomOutcomesTitle: 'Measurable Managed Services Outcomes',

bottomOutcomesDescription: `
  <p>
    Every <strong class="text-[#7A1F5C]"> Managed Recruitment Service </strong> engagement is supported by clear SLAs, transparent reporting, and structured post-placement support. We continuously evaluate key recruitment metrics such as time-to-hire, retention, candidate quality, hiring manager satisfaction, and cost-per-hire to help ensure consistent and measurable outcomes.
  </p>

  <p>
    Our end-to-end <strong class="text-[#7A1F5C]"> Managed Recruitment Service </strong> can support a wide range of hiring requirements, including IT staffing, executive search, contract and permanent recruitment, remote hiring, and recruitment process outsourcing. These solutions can scale with your workforce requirements and help you build a flexible, high-quality talent pipeline.
  </p>
`,
benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Managed Recruitment Benefits',
benefitsDescription:
  'Our specialized approach delivers measurable impact, helping UK organizations achieve operational efficiency and access genuine talent excellence.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Managed Recruitment Services & Industry Expertise',

supportDescription:
  'Our <strong class="font-semibold text-[#7A1F5C]">Managed Recruitment Service</strong> delivers seamless talent acquisition and workforce solutions across international borders. We combine local market knowledge with a global recruitment framework to ensure your organisation attracts, hires, and retains the right talent in every major global hub.',

supportSecondDescription:
  '',
  supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious businesses across the <strong class="text-[#7A1F5C]">financial and technology sectors</strong>, delivering strategic talent solutions that help organizations <strong class="text-[#7A1F5C]">build high-performing teams, access specialized expertise, and achieve sustainable growth</strong>.',
  processHeadingLabel: 'Service Workflow',

processTitle: 'How We <strong class="font-semibold text-[#7A1F5C]"> Deliver Value </strong>',

processDescription:
  'Our streamlined methodology ensures <strong class="text-[#7A1F5C]">precision, transparency, and rapid delivery</strong> at every stage of your engagement with UK businesses.',  
  partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Recruitment Operations",
  partnerDescription:
    "Our Managed Recruitment Service expertise is built on years of delivering strategic recruitment solutions for organisations across technical and professional domains globally. We combine industry knowledge, talent intelligence, and structured recruitment processes to help businesses build high-performing teams.",

  industries: ['Large Enterprise', 'Public Sector', 'Financial Services'],
  }, 
    
 benefits: [
  {
    title: 'Centralized Vendors',
    description:
      'Simplify operations with a single point of accountability for all staffing suppliers.',
  },
  {
    title: 'Compliance & Vetting',
    description:
      'Automated background checks, Right-to-Work, and IR35 compliance audits.',
  },
  {
    title: 'Cost Management',
    description:
      'Optimize contingent workforce spend to save 10-15% on agency margins.',
  },
  {
    title: 'Unified Analytics',
    description:
      'Gain clear visibility into supplier performance, total spend, and headcounts.',
  },
  {
    title: 'Strategic Planning',
    description:
      'Use historical workforce metrics to forecast future resource requirements.',
  },
  {
    title: 'Quality Improvement',
    description:
      'Align SLA metrics to ensure vendors consistently submit high-tier talent.',
  },
],
    process: [
      { title: 'Strategy', desc: 'We understand your hiring requirements, business goals, and talent needs to create a recruitment approach aligned with your organization. ' },
      { title: 'Sourcing', desc: 'We identify and connect you with qualified professionals through targeted sourcing strategies tailored to your specific roles and industry requirements. ' },
      { title: 'Selection', desc: 'Our recruitment team manages screening, evaluation, and shortlisting to help you identify candidates with the right skills, experience, and cultural fit. ' },
      { title: 'Support', desc: 'We streamline the final hiring process and provide ongoing support to help you build a reliable, skilled, and high-performing workforce. ' }
    ],
    faqs: [
      { q: 'What are the core benefits of implementing a Managed Recruitment Service model?', a: 'A Managed Recruitment Service centralises and streamlines your recruitment operations, providing greater control over the talent supply chain while improving hiring efficiency, compliance, cost management, and visibility across your workforce.' },
      { q: 'How do you manage and coordinate a tier-1 network of partner agencies?', a: 'Our Managed Recruitment Service centralizes partner coordination, streamlines candidate delivery, maintains consistent hiring standards, and ensures agencies meet your specific quality and compliance requirements.' },
      { q: 'What technology and Managed Recruitment Service platforms do you integrate with?', a: 'We are technology-agnostic and integrate with leading VMS platforms to streamline Managed Recruitment Service delivery through automated reporting and real-time visibility.' },
      { q: 'How does Managed Recruitment Service ensure full compliance across a contingent workforce?', a: ' Managed Recruitment Service ensures compliance through standardized screening, document verification, ongoing workforce monitoring, and adherence to applicable employment, tax, and regulatory requirements.' },
      { q: 'Can Managed Recruitment Service deliver significant cost savings for your business?', a: 'Yes, our Managed Recruitment Service reduces hiring inefficiencies, streamlines vendor coordination, improves workforce planning, and delivers measurable savings while maintaining quality and compliance.' },
      { q: 'How does Managed Recruitment Service improve visibility across your workforce and hiring spend? ', a: 'Our Managed Recruitment Service provides visibility into recruitment spending, vendor performance, hiring trends, compliance metrics, and workforce data, enabling informed decisions and stronger cost control.' },
      { q: 'What is your approach to transitioning from a decentralized hiring process?', a: 'Our Managed Recruitment Service follows a structured transition plan that maintains business continuity, aligns stakeholders, standardizes recruitment workflows, and brings vendors together under a unified hiring framework.' },
      { q: 'Can your Managed Recruitment Service support our long-term workforce strategy?', a: 'Yes, our Managed Recruitment Service uses data-driven insights and labour market intelligence to forecast talent needs, identify skill gaps, and develop future-ready recruitment strategies aligned with your business objectives.' },
      { q: 'Is Managed Recruitment Service suitable for businesses of all sizes?', a: 'Yes, our Managed Recruitment Service is designed for startups, mid-sized businesses, and large enterprises, providing scalable recruitment solutions that improve hiring efficiency, strengthen compliance, and support long-term workforce growth.' }
    ],
    features: [
      { title: 'Vendor Centralisation', desc: 'Single accountability across your entire staffing supplier network.', icon: 'Settings' },
      { title: '100% Compliance', desc: 'Automated IR35, Right-to-Work and background checks for every worker.', icon: 'ShieldCheck' },
      { title: 'VMS Integration', desc: 'Tech-agnostic compatibility with Beeline, Fieldglass and all major platforms.', icon: 'Database' },
      { title: '10–15% Cost Savings', desc: 'Typical first-year cost reduction through centralised spend and vendor negotiation.', icon: 'TrendingDown' },
      { title: 'Workforce Analytics', desc: 'Unified dashboards for spend, vendor performance and compliance status.', icon: 'BarChart' }
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
      image: remoteHiringImg.src,
    },
    metaInfo: {
      title: 'Global Remote Hiring UK | Remote Talent',
      description: 'Build borderless tech teams with Chalky Infotech. Cross-border compliance, EOR payroll, and remote-first vetting across global talent hubs.',
      keywords: 'remote hiring UK, global remote recruitment UK, remote staffing UK, borderless hiring UK, EOR UK, employer of record UK, remote tech talent UK, global talent acquisition UK, distributed team hiring UK',
      ogTitle: 'Global Remote Hiring UK | Build Borderless High-Performance Teams',
      ogDescription: 'Access world-class remote talent across UK, India, Europe and North America. Full cross-border compliance, EOR payroll and remote-first vetting.'
    },
overview: {
  headingLabel: 'remote hiring in UK',
  title: 'Remote Hiring Solutions for Global Talent Access',

  description:
    'Remote hiring enables organisations to build high-performing teams beyond geographical boundaries while maintaining access to specialised professionals across different locations.\n\n• Global Talent Access: Connect with skilled professionals beyond traditional geographic hiring boundaries.\n• Remote Workforce Flexibility: Build distributed teams that support changing business and project requirements.\n• Structured Remote Recruitment: Identify, assess, and onboard professionals based on skills, experience, communication, and remote-work readiness.',

  trustStats: [
    { value: '48h', label: 'Average Talent Matching' },
    { value: '98%', label: 'Placement Success Rate' },
    { value: '500+', label: 'Enterprises Served' },
    { value: '12+', label: 'Industries Covered' },
  ],

  featureCards: [
    {
      title: 'Global Talent Sourcing',
      headline: 'Access skilled professionals beyond borders',
      description:
        'Our talent network helps organisations identify qualified professionals across locations, expanding access to specialised skills and experience.',
     
      tag: 'Global Talent',
    },
    {
      title: 'Remote-Ready Professionals',
      headline: 'Hire people prepared for distributed teams',
      description:
        'Candidates are evaluated not only for technical capability but also for communication, collaboration, adaptability, and remote-work readiness.',
     
      tag: 'Remote Workforce',
    },
    {
      title: 'Seamless Remote Hiring',
      headline: 'Build distributed teams with confidence',
      description:
        'From sourcing and assessment to interview coordination and onboarding support, we help create a structured remote recruitment experience.',
      
      tag: 'Remote Recruitment',
    },
  ],

  differentiators: [
    'Access to global talent pools',
    'Remote-ready candidate assessment',
    'Cross-location talent sourcing',
    'Technical and communication evaluation',
    'Flexible distributed workforce solutions',
    'End-to-end remote recruitment support',
  ],

  whyChooseTitle: 'Why Choose Our Remote Hiring Service',
  whyChooseDescription:
    'Remote hiring allows organisations to access a wider talent pool while building flexible and distributed teams. Our recruitment approach combines technical assessment with communication, collaboration, and remote-work suitability.',

  partnershipDescription:
    'We work closely with your hiring teams to understand role requirements, identify suitable remote professionals, coordinate interviews, and support the hiring process from initial sourcing through onboarding.',
advantageHeadingLabel: 'The Chalky Advantage',
  advantageTitle: 'Strategic Excellence in',
  advantageTitleHighlight: 'Remote Hiring Solutions',

  advantageDescription:
    'Expand your talent reach beyond geographical limitations and build distributed teams with professionals selected for both technical capability and remote collaboration.',

  outcomesTitle: 'Outcomes That Enable Distributed Growth',
  outcomesDescription:
    'Our remote hiring solutions help organisations expand their talent pool, access specialised expertise, improve workforce flexibility, and build effective distributed teams.',
bottomAdvantageTitle: 'The Chalky Infotech Remote Hiring Advantage',

bottomAdvantageDescription: `
  <p>
    Organisations across the UK and India choose Chalky Infotech for remote hiring
    because our approach combines global talent sourcing, structured candidate
    assessment, technology expertise, and live market intelligence.
  </p>

  <p>
    From remote-first startups to distributed enterprise teams, our
    <strong style="color:#7A1F5C">remote hiring solutions</strong> connect
    businesses with skilled professionals who align with your role requirements,
    culture, communication standards, and long-term workforce goals.
  </p>
`,

bottomOutcomesTitle: 'Measurable Remote Hiring Outcomes',

bottomOutcomesDescription: `
  <p>
    Every remote hiring engagement is supported by clear SLAs, transparent
    reporting, rigorous candidate screening, and structured post-placement support.
    We focus on time-to-hire, candidate quality, retention, satisfaction, and cost efficiency.
  </p>

  <p>
    Our remote recruitment approach helps organisations access wider talent pools,
    build high-performing distributed teams, and scale their workforce efficiently
    without geographical limitations.
  </p>
`,
benefitsHeadingLabel: 'Core Advantages',
benefitsTitle: 'Strategic Permanent Recruitment Benefits',
benefitsDescription:
  'Our specialized approach delivers measurable impact, helping UK organizations achieve operational efficiency and access genuine talent excellence.',
supportHeadingLabel: 'Global Sector Support',

supportTitle: 'Cross-Border Remote Hiring & Industry Expertise',

supportDescription:
  'We provide seamless workforce management and specialised remote hiring support across international borders, helping organisations access skilled professionals without geographical limitations.',

supportSecondDescription:
  'Our remote hiring approach combines global talent sourcing, technology expertise, structured candidate assessment, and live market intelligence to connect businesses with professionals who align with their role requirements, culture, communication standards, and workforce goals.',
  supportClientTitle: 'Trusted by Global Leaders',

supportClientDescription:
  'We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.',
 processHeadingLabel: 'Service Workflow',

processTitle: 'How We Deliver Value',

processDescription:
  'Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.',  
partnerHeadingLabel: "Partner Excellence",
  partnerTitle: "Scale Your",
  partnerTitleHighlight: "Global Operations",
  partnerDescription:
    "Our recruitment expertise is built on years of delivering high-impact hiring strategies for enterprises worldwide.",

  industries: ['SaaS', 'Digital Agencies', 'Tech Startups'],
},
  benefits: [
  {
    title: 'Faster Project Delivery',
    description:
      'Skilled professionals onboard quickly, reducing time-to-productivity.',
  },
  {
    title: 'Reduced Hiring Risk',
    description:
      'Pre-vetted talent means fewer failed hires and costly replacements.',
  },
  {
    title: 'Scalable Teams',
    description:
      'Scale up or down based on project demand without long-term overhead.',
  },
  {
    title: 'Cost Efficiency',
    description:
      'Cut recruitment costs by up to 40% with our managed staffing model.',
  },
  {
    title: 'Focus on Core Business',
    description:
      'We handle the hiring complexity. You focus on building.',
  },
  {
    title: 'Compliance & Security',
    description:
      'Rigorous technical vetting and background checks for all placements.',
  },
],
    process: [
      { title: 'Global Mapping', desc: 'Identifying the best talent hubs globally.' },
      { title: 'Vetting', desc: 'Remote-first competency assessments.' },
      { title: 'Compliance', desc: 'Handling international labor laws.' },
      { title: 'Onboarding', desc: 'Setting up remote teams for success.' }
    ],
    faqs: [
      { q: 'How does Chalky Infotech handle international payroll for global remote hires?', a: 'We partner with leading Employer of Record (EOR) providers to manage localized payroll, taxes, and benefits, ensuring full compliance in the candidate’s home country.' },
      { q: 'Can you source specialized tech talent from major global innovation hubs?', a: 'Yes, we map talent in major hubs across India, the UK, Europe, and North America, connecting you with specialists who possess the exact skills your project requires.' },
      { q: 'How do you ensure security and technical vetting for remote professionals?', a: 'We use secure remote-proctoring for technical tests and conduct multi-stage video interviews to verify both technical competency and remote-work readiness.' },
      { q: 'What are the legal and compliance requirements for hiring across borders?', a: 'We navigate the complex landscape of international labor laws, ensuring all contracts and employment practices meet the specific regulations of the country where the talent is based.' },
      { q: 'How do you match remote teams to our specific time zone and hours?', a: 'We prioritize sourcing talent in compatible time zones and vet candidates for their willingness and ability to work during your core business hours for seamless collaboration.' },
      { q: 'What support do you offer for remote-first onboarding and integration?', a: 'We provide remote-ready onboarding kits, guidance on digital collaboration tools, and cultural integration support to ensure your remote hires feel connected from day one.' },
      { q: 'Can you help us build a completely borderless, global engineering team?', a: 'Absolutely. We specialize in building distributed teams that allow you to tap into the world’s best talent without being limited by geographic location.' },
      { q: 'What are the infrastructure cost benefits of a remote-first hiring strategy?', a: 'By hiring remotely, you significantly reduce overhead costs associated with office space, local infrastructure, and regional salary premiums in expensive tech hubs.' },
      { q: 'How do you handle cultural alignment for professionals working in different regions?', a: 'We use specialized behavioral assessments to find candidates who thrive in global, multicultural environments and have the communication skills needed for remote success.' }
    ],
    features: [
      { title: 'EOR Payroll Management', desc: 'Compliant localised payroll across every country your remote hire is based in.', icon: 'Globe' },
      { title: 'Remote-First Vetting', desc: 'Secure proctored assessments verifying technical and remote-work competency.', icon: 'UserCheck' },
      { title: 'Timezone Matching', desc: 'Talent sourced and vetted for compatibility with your core business hours.', icon: 'Clock' },
      { title: 'Global Compliance', desc: 'International labour law, visa and right-to-work management handled end-to-end.', icon: 'ShieldCheck' },
      { title: 'Remote Onboarding', desc: 'Digital onboarding kits and cultural integration support from day one.', icon: 'Zap' }
    ]
  }
];
