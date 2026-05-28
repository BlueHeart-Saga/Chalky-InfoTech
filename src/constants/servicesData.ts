import itStaffingImg from '@/assets/Services-heros/1.jpg';
import executiveSearchImg from '@/assets/Services-heros/2.jpg';
import contractStaffingImg from '@/assets/Services-heros/3.jpg';
import permanentHiringImg from '@/assets/Services-heros/4.jpg';
import temporaryRecruitmentImg from '@/assets/Services-heros/5.jpg';
import onSiteRecruitmentImg from '@/assets/Services-heros/6.jpg';
import managedServicesImg from '@/assets/Services-heros/7.jpg';
import remoteHiringImg from '@/assets/Services-heros/8.jpg';

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
      title: 'IT Staffing Solution in the UK | Hire Verified IT Talent',
      description: 'Looking for a reliable IT Staffing Solution in the UK? We connect businesses with pre-vetted IT professionals  fast, flexible & tailored to your tech needs. Get matched in 48 hours.',
      keywords: 'IT staffing solution UK, IT staffing services UK, IT recruitment UK, contract IT staffing UK, technology staffing solution UK, hire IT professionals UK, IT talent solutions UK, permanent IT staffing UK, tech recruitment agency UK, IT workforce solution UK, software developer staffing UK, cloud engineer staffing UK, IT contract staffing London, DevOps staffing UK, IT hiring solution Uk',
      ogTitle: 'IT Staffing Solution UK | Verified Tech Talent',
      ogDescription: 'Trusted IT staffing solution across the UK. Pre-vetted professionals. 48-hour matching. Contract, C2H & Full-Time hiring.'
    },
    overview: {
      title: 'What Is an IT Staffing Solution?',
      description: 'An IT staffing solution is more than filling a vacancy. It\'s a strategic approach to connecting businesses with verified, skilled technology professionals on demand, at speed, without compromise. \n\n• Talent on Demand: Access pre-screened IT professionals ready to deploy within days.\n• Flexible Engagement: Contract, Contract-to-Hire, or Full-Time  your call.\n• Business-Aligned Hiring: Every placement is matched to your tech stack, team culture, and project goals.',
    },
    benefits: [
      'Faster Project Delivery: Skilled professionals onboard quickly, reducing time-to-productivity',
      'Reduced Hiring Risk: Pre-vetted talent means fewer failed hires and costly replacements',
      'Scalable Teams: Scale up or down based on project demand without long-term overhead',
      'Cost Efficiency: Cut recruitment costs by up to 40% with our managed staffing model',
      'Focus on Core Business: We handle the hiring complexity. You focus on building.',
      'Compliance & Security: Rigorous technical vetting and background checks for all placements'
    ],
    industries: ['Software', 'Fintech', 'Cloud Computing', 'AI & Data'],
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
    label: 'Executive Search',
    icon: 'TrendingUp',
    desc: 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.',
    hero: {
      badge: 'Leadership & Strategy',
      title: 'Executive Search & Leadership Advisory',
      subtitle: 'Attracting world-class C-suite leaders and strategic visionaries to drive your organizational transformation.',
      image: executiveSearchImg.src,
    },
    metaInfo: {
      title: 'Executive Search & Leadership Advisory UK | C-Suite Recruitment',
      description: 'Discreet, high-impact executive search across the UK. We identify world-class C-suite leaders and senior executives aligned with your long-term vision. 98% placement success rate.',
      keywords: 'executive search UK, C-suite recruitment UK, leadership hiring UK, senior executive search UK, CEO recruitment UK, CFO hiring UK, CTO search UK, headhunting UK, board director recruitment UK, leadership advisory UK',
      ogTitle: 'Executive Search UK | World-Class Leadership Acquisition',
      ogDescription: 'Confidential C-suite & senior leadership search across the UK. Deep market mapping, behavioural assessment & board-aligned cultural fit. Results in 8–12 weeks.'
    },
    overview: {
      title: 'Strategic Leadership Acquisition — Beyond Conventional Recruitment',
      description: 'The right leader reshapes culture, accelerates strategy, and creates lasting enterprise value. Our discreet, high-impact executive search practice is built for organisations that refuse to compromise on leadership quality.\n\n• Confidential Search: Rigorous privacy protocols protect your business and the candidate throughout every stage of the process.\n• Global Leadership Network: Access to passive C-suite executives, NEDs and strategic visionaries not visible on the open market.\n• Behavioural Science: Evidence-based leadership assessments measuring strategic vision, emotional intelligence, and board-readiness.',
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
      { q: 'How does Chalky Infotech ensure confidentiality during an executive search?', a: 'We operate with the highest level of discretion, using non-disclosure agreements and private communication channels to protect the interests of both the client and the prospective leader.' },
      { q: 'What is your success rate for C-suite leadership placements?', a: 'We maintain a 98% successful placement rate for our executive searches, driven by our deep industry insights and rigorous vetting methodology.' },
      { q: 'How do you identify and attract world-class leadership talent globally?', a: 'Our global leadership network and proprietary database allow us to identify visionary leaders who may not be active in the open market, engaging them through high-touch, personal outreach.' },
      { q: 'What methodology do you use for leadership and behavioral assessments?', a: 'We use evidence-based behavioral interviews and leadership competency models to evaluate a candidate’s strategic vision, emotional intelligence, and ability to drive organizational change.' },
      { q: 'Can you provide benchmarking and market mapping for executive roles?', a: 'Yes, we provide detailed market analysis and salary benchmarking to ensure your leadership offers are competitive and aligned with current global standards.' },
      { q: 'How do you ensure cultural alignment between leadership hires and the board?', a: 'We perform deep-dive cultural mapping of your organization to ensure that every executive hire shares your values and can collaborate effectively with your existing board and leadership team.' },
      { q: 'What is the typical duration of a high-impact executive search project?', a: 'While every search is unique, a typical high-impact executive search takes between 8 to 12 weeks from the initial brief to the final appointment.' },
      { q: 'Do you offer post-placement onboarding support for new executive hires?', a: 'Yes, we provide ongoing support during the critical first 90 days to ensure a smooth transition and rapid alignment with your organization’s strategic goals.' },
      { q: 'How do you handle search projects for sensitive "confidential replacement" roles?', a: 'We specialize in discreet "succession planning" and confidential replacements, ensuring that the search process does not disrupt your internal operations or external brand reputation.' }
    ],
    features: [
      { title: 'Global Benchmarking', desc: 'Salary and competency benchmarking across international leadership markets.', icon: 'Globe' },
      { title: 'Behavioural Assessment', desc: 'Evidence-based frameworks to evaluate strategic vision, EQ and board-readiness.', icon: 'Brain' },
      { title: 'Board-Level Advisory', desc: 'Strategic counsel aligned with shareholder and governance expectations.', icon: 'Briefcase' },
      { title: 'Retention Focus', desc: '90-day post-placement support ensuring long-term leadership stability.', icon: 'ShieldCheck' },
      { title: 'Confidential Pipeline', desc: 'Discreet engagement of passive candidates not visible on the open market.', icon: 'Lock' }
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
      image: contractStaffingImg.src,
    },
    metaInfo: {
      title: 'Contract Staffing Solutions UK | Flexible Project-Based Talent',
      description: 'Agile contract staffing solutions across the UK. Access pre-vetted specialists for project-based needs with full IR35 compliance, managed payroll and rapid 48–72 hour deployment.',
      keywords: 'contract staffing UK, contract recruitment UK, project staffing UK, IR35 compliant staffing UK, contingent workforce UK, contract IT staffing UK, flexible staffing UK, contract professionals UK',
      ogTitle: 'Contract Staffing UK | Agile Talent for Project Demands',
      ogDescription: 'Pre-vetted contract specialists deployed in 48–72 hours. Full IR35 compliance, managed payroll and scalable workforce support across the UK.'
    },
    overview: {
      title: 'Agile Workforce Solutions — Specialist Expertise On Demand',
      description: "Today's project timelines don't wait. Our contract staffing solutions give organisations instant access to battle-tested specialists — exactly when, where, and for as long as they're needed.\n\n• Rapid Deployment: Pre-vetted contract professionals on-site or remote within 48–72 hours of instruction.\n• Full Compliance Management: IR35 status determination, payroll processing and contractor administration handled end-to-end.\n• True Scalability: Scale headcount up or down as project phases evolve — without permanent overhead or long-term commitment.",
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
      { q: 'How quickly can Chalky Infotech fill urgent project-based contract roles?', a: 'We can typically present pre-vetted, ready-to-work contract specialists within 48 to 72 hours for most technical and operational requirements.' },
      { q: 'Do you manage payroll and compliance for all contract staff?', a: 'Yes, we handle the entire payroll process, tax compliance, and administrative management for all contract professionals, allowing you to focus on project delivery.' },
      { q: 'What are the benefits of using contract staffing for agile project delivery?', a: 'Contract staffing provides instant access to specialized expertise without long-term overhead, allowing your team to remain agile and respond quickly to changing project demands.' },
      { q: 'How do you handle IR35 compliance and other local labor regulations?', a: 'We have a dedicated compliance team that ensures all contract engagements meet local regulations, including IR35 in the UK, providing peace of mind for both clients and contractors.' },
      { q: 'Can I scale my contract workforce up or down based on project needs?', a: 'Absolutely. Our model is built for scalability, allowing you to increase or decrease your team size rapidly as project phases evolve.' },
      { q: 'What technical specialties do you provide through your contract network?', a: 'Our network includes experts in cloud engineering, cybersecurity, software development, project management, and specialized financial and healthcare operations.' },
      { q: 'How do you ensure contract professionals integrate seamlessly with internal teams?', a: 'We vet candidates for their "contractor mindset"the ability to hit the ground running, adapt to new cultures quickly, and deliver value from day one.' },
      { q: 'What is the maximum duration for a contract staffing engagement?', a: 'Contract engagements can range from a few weeks to several years. We provide flexible extension options to ensure project continuity.' },
      { q: 'Do you offer temp-to-perm conversion options for contract hires?', a: 'Yes, we facilitate temp-to-perm models if you decide that a high-performing contractor would be a valuable long-term addition to your permanent team.' }
    ],
    features: [
      { title: '48–72hr Deployment', desc: 'Contract specialists on-site or remote within two to three business days.', icon: 'Clock' },
      { title: 'IR35 Compliance', desc: 'Full status determination and payroll management for every UK engagement.', icon: 'ShieldCheck' },
      { title: 'Scalable Teams', desc: 'Increase or decrease headcount instantly as project phases evolve.', icon: 'Users' },
      { title: 'Temp-to-Perm Option', desc: 'Convert high-performing contractors into permanent hires seamlessly.', icon: 'TrendingUp' },
      { title: 'Zero Admin Burden', desc: 'We handle contracts, taxes and compliance — you focus on delivery.', icon: 'CheckCircle' }
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
      image: permanentHiringImg.src,
    },
    metaInfo: {
      title: 'Permanent Hiring Solutions UK | High-Retention Talent Placement',
      description: 'Strategic permanent recruitment across the UK. Data-driven cultural alignment and deep headhunting to secure high-retention talent that drives long-term business value.',
      keywords: 'permanent hiring UK, permanent recruitment UK, headhunting UK, direct hire UK, permanent placement UK, full-time recruitment UK, cultural alignment hiring UK, senior permanent recruitment UK',
      ogTitle: 'Permanent Hiring UK | Strategic Talent for Long-Term Success',
      ogDescription: 'High-retention permanent placements across all UK sectors. Deep cultural mapping, targeted headhunting and guaranteed placement support.'
    },
    overview: {
      title: 'Strategic Talent Investment — Engineered for Retention',
      description: 'Permanent hires are not just headcount — they are long-term investments in your organisation\'s future. We apply data-driven insight and deep cultural mapping to ensure every placement is a high-retention match, not just a skills match.\n\n• Targeted Headhunting: Engaging passive, high-calibre candidates not actively seeking roles but open to the right strategic opportunity.\n• Multi-Stage Vetting: Comprehensive technical, cultural and motivational assessment before any profile is presented to you.\n• Retention by Design: Our permanent placements average 3+ years tenure — because we align careers and values, not just CVs.',
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
      { q: 'What is your strategy for finding high-retention talent for permanent roles?', a: 'We look beyond technical skills, focusing on long-term career aspirations and cultural alignment. This ensures that every hire we make is committed to growing with your organization.' },
      { q: 'How do you ensure deep cultural alignment between candidates and clients?', a: 'Our consultants take the time to understand your company values, work environment, and team dynamics, using these insights to find talent that will thrive in your specific culture.' },
      { q: 'Do you provide a placement guarantee for permanent hires?', a: 'Yes, we stand by the quality of our work. We offer a comprehensive placement guarantee period to ensure your new hire is the right fit for the long term.' },
      { q: 'What is your process for headhunting specialized talent in competitive markets?', a: 'We use targeted search techniques to engage "passive" candidateshighly skilled individuals who aren\'t actively looking but are open to the right strategic career move.' },
      { q: 'How does permanent hiring through an agency reduce long-term recruitment costs?', a: 'By reducing time-to-hire, improving quality-of-hire, and ensuring higher retention rates, we significantly lower the total cost of talent acquisition over time.' },
      { q: 'Can you manage high-volume permanent recruitment drives for new offices?', a: 'Yes, we have the capacity to coordinate large-scale permanent hiring projects for new regional hubs, ensuring consistent quality and brand-aligned recruitment.' },
      { q: 'What data-driven insights do you use to improve permanent hire quality?', a: 'We analyze market trends, candidate feedback, and historical placement data to continuously refine our search parameters and improve the accuracy of our matches.' },
      { q: 'How do you handle the negotiation and offer management for senior hires?', a: 'Our consultants act as expert intermediaries, managing the delicate negotiation process to ensure a successful outcome that satisfies both the client\'s budget and the candidate\'s expectations.' },
      { q: 'Do you support permanent recruitment across all major global industries?', a: 'Yes, we have specialized divisions for IT, Finance, Healthcare, Retail, and Manufacturing, ensuring sector-specific expertise for every permanent placement.' }
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
      title: 'Temporary Recruitment Services',
      subtitle: 'Scaling your operational capacity instantly with vetted professionals for seasonal peaks and high-volume needs.',
      image: temporaryRecruitmentImg.src,
    },
    metaInfo: {
      title: 'Temporary Recruitment Services UK | Rapid Workforce Scaling',
      description: 'Fast, flexible temporary recruitment across the UK. Deploy fully vetted temporary professionals within 24–48 hours for seasonal peaks, operational spikes and high-volume project demands.',
      keywords: 'temporary recruitment UK, temp staffing UK, temporary workers UK, seasonal staffing UK, high volume temp recruitment UK, temp agency UK, flexible temp workforce UK, temp to perm UK',
      ogTitle: 'Temporary Recruitment UK | Vetted Staff in 24–48 Hours',
      ogDescription: 'Rapid-response temporary staffing across logistics, retail, customer support and manufacturing. Fully managed payroll, compliance and on-site coordination.'
    },
    overview: {
      title: 'Instant Operational Scaling — Ready to Deploy in 24–48 Hours',
      description: 'Seasonal peaks, project surges and unexpected demand spikes require a workforce partner who responds at pace. Our temporary recruitment solutions give you access to a pre-vetted talent pool ready for same-day or next-day mobilisation.\n\n• 24–48hr Deployment: Pre-screened temporary cohorts on-site across the UK within one to two business days.\n• Fully Managed Administration: Contracts, payroll, tax compliance and on-site coordination handled from day one.\n• Variable Cost Model: Pay only for hours worked — protecting your permanent team from burnout and your budget from fixed overheads.',
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
      { q: 'How fast can you deploy vetted temporary staff for seasonal peaks?', a: 'For high-volume needs, we can often deploy pre-vetted temporary cohorts within 24 to 48 hours, ensuring your operations never slow down during peak periods.' },
      { q: 'Do you handle the entire administrative and payroll burden for temp workers?', a: 'Yes, Chalky Infotech manages all aspects of employment for temporary staff, including contracts, payroll, taxes, and general administrative support.' },
      { q: 'Can temporary staff be converted into permanent employees later?', a: 'Absolutely. Many of our clients use our temporary model as a "try-before-you-buy" strategy, converting top-performing temps into permanent team members.' },
      { q: 'What industries do you support with high-volume temporary staffing?', a: 'We provide temporary staffing primarily for Logistics, Retail (peak surges), Customer Support hubs, and Manufacturing facilities.' },
      { q: 'How do you ensure temporary workers are fully vetted and ready to work?', a: 'Every temporary candidate undergoes a thorough screening process, including identity checks, reference verification, and role-specific competency tests before they are cleared for deployment.' },
      { q: 'What is the minimum and maximum duration for a temporary placement?', a: 'Our temporary placements are flexible, ranging from single-day assignments to multi-month projects, depending entirely on your operational needs.' },
      { q: 'How does temporary recruitment help manage sudden operational spikes?', a: 'It provides a variable cost workforce that you can scale up or down instantly, protecting your permanent staff from burnout and ensuring service levels are maintained during spikes.' },
      { q: 'Can you provide managed temp cohorts for warehouse or retail operations?', a: 'Yes, we specialize in building and managing large groups of temporary staff, providing on-site coordination to ensure high productivity and seamless integration.' },
      { q: 'What support do you offer for on-site management of temporary staff?', a: 'For larger cohorts, we can provide dedicated on-site account managers who handle daily attendance, performance monitoring, and team coordination.' }
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
    label: 'On-Site Recruitment',
    icon: 'MapPin',
    desc: 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.',
    hero: {
      badge: 'Embedded Partnership',
      title: 'On-Site Recruitment Solutions',
      subtitle: 'Benefit from dedicated recruiters working as a seamless extension of your internal HR and hiring teams.',
      image: onSiteRecruitmentImg.src,
    },
    metaInfo: {
      title: 'On-Site Recruitment Solutions UK | Embedded HR Partnership',
      description: 'Dedicated on-site recruiters embedded within your organisation across the UK. Full-cycle talent acquisition managed from inside your office — reducing cost-per-hire and accelerating hiring cycles.',
      keywords: 'on-site recruitment UK, embedded recruitment UK, RPO UK, on-site recruiter UK, recruitment process outsourcing UK, dedicated recruiter UK, in-house recruitment UK, on-site hiring UK',
      ogTitle: 'On-Site Recruitment UK | Embedded Talent Acquisition Partnership',
      ogDescription: 'Dedicated recruiters working as a seamless extension of your internal HR team. Lower cost-per-hire, faster cycles and real-time hiring analytics.'
    },
    overview: {
      title: 'Embedded Talent Partnership — Recruitment From Within',
      description: "An on-site recruitment partnership means our consultants don't just work for you — they work with you, embedded in your culture, your systems, and your strategy.\n\n• Deep Cultural Integration: Our recruiters become your employer brand ambassadors, delivering candidate experiences that reflect your values from first contact to offer acceptance.\n• Process Optimisation: We audit and redesign your hiring workflows to eliminate bottlenecks, reduce time-to-hire and significantly lower your cost-per-hire.\n• Real-Time Reporting: Live dashboards tracking time-to-hire, source quality, diversity metrics and cost-per-hire for complete hiring transparency.",
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
    label: 'Managed Services',
    icon: 'Settings',
    desc: 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.',
    hero: {
      badge: 'Operational Excellence',
      title: 'Managed Workforce Solutions (MSP)',
      subtitle: 'Optimizing your entire talent supply chain through strategic managed services and workforce technology.',
      image: managedServicesImg.src,
    },
    metaInfo: {
      title: 'Managed Workforce Solutions UK | MSP & Contingent Workforce Management',
      description: 'End-to-end managed staffing solutions (MSP) for enterprises across the UK. Centralise your contingent workforce, reduce costs by 10–15% and achieve 100% compliance through a single managed framework.',
      keywords: 'managed staffing UK, MSP UK, managed service provider recruitment UK, contingent workforce management UK, VMS integration UK, workforce outsourcing UK, talent supply chain UK, managed workforce UK',
      ogTitle: 'Managed Workforce Solutions UK | Enterprise MSP Partner',
      ogDescription: 'Centralise your entire contingent workforce with our enterprise MSP model. Full compliance, 10–15% cost savings and unified workforce analytics across the UK.'
    },
    overview: {
      title: 'Enterprise Workforce Optimisation — Complete Supply Chain Control',
      description: 'Managing a large contingent workforce across multiple vendors is complex, costly, and compliance-heavy. Our Managed Service Provider (MSP) model transforms that complexity into a unified, efficient and fully controlled talent ecosystem.\n\n• Centralised Vendor Management: Single point of accountability across your entire supplier network — standardised terms, quality controls and performance metrics enforced consistently.\n• Technology-Driven Visibility: VMS integration providing real-time spend visibility, compliance dashboards and strategic workforce analytics.\n• Guaranteed Compliance: Automated background checks, Right-to-Work verification and IR35 management across every single contractor engagement.',
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
      { q: 'What are the core benefits of implementing a Managed Service Provider (MSP) model?', a: 'An MSP model centralizes your entire contingent workforce management, leading to improved compliance, reduced costs, and complete visibility into your talent supply chain.' },
      { q: 'How do you manage and coordinate a tier-1 network of partner agencies?', a: 'We act as the single point of contact, managing agency relationships, negotiating standardized terms, and ensuring all vendors meet your specific quality and compliance standards.' },
      { q: 'What technology and Vendor Management Systems (VMS) do you integrate with?', a: 'We are tech-agnostic and can integrate with any leading VMS platform (e.g., Beeline, Fieldglass) to provide automated reporting and real-time visibility.' },
      { q: 'How does an MSP model ensure 100% compliance across a contingent workforce?', a: 'We implement rigorous, automated compliance checks for every worker, ensuring that background checks, Right To Work, and tax regulations (like IR35) are strictly followed.' },
      { q: 'Can you achieve significant cost savings through a managed service model?', a: 'Yes, by centralizing spend, negotiating better rates with vendors, and reducing administrative overhead, we typically achieve 10-15% cost savings in the first year.' },
      { q: 'What kind of visibility and analytics will I have into my workforce spend?', a: 'You will have access to unified dashboards showing exactly where your budget is being spent, vendor performance metrics, and compliance status across your entire organization.' },
      { q: 'How do you handle the transition from a decentralized to a managed model?', a: 'We use a phased implementation approach, managing the transition carefully to ensure project continuity while gradually bringing all vendors under a single managed framework.' },
      { q: 'Do you provide strategic workforce planning as part of your managed services?', a: 'Yes, we use the data gathered through the MSP to provide insights on future workforce trends, helping you plan for long-term talent needs and cost stability.' },
      { q: 'Is the MSP model only for large global enterprises?', a: 'While common in large enterprises, any organization with a significant contingent workforce can benefit from the cost control and compliance certainty provided by an MSP.' }
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
      title: 'Global Remote Hiring Services UK | Borderless Talent Acquisition',
      description: 'Build high-performance borderless teams with Chalky Infotech. Cross-border compliance, EOR payroll management and remote-first vetting across UK, India, Europe and North America.',
      keywords: 'remote hiring UK, global remote recruitment UK, remote staffing UK, borderless hiring UK, EOR UK, employer of record UK, remote tech talent UK, global talent acquisition UK, distributed team hiring UK',
      ogTitle: 'Global Remote Hiring UK | Build Borderless High-Performance Teams',
      ogDescription: 'Access world-class remote talent across UK, India, Europe and North America. Full cross-border compliance, EOR payroll and remote-first vetting.'
    },
    overview: {
      title: 'The Future of Work is Borderless — Access Global Talent Today',
      description: 'Geographic boundaries no longer define where great talent lives. Our global remote hiring practice connects your organisation with the world\'s best professionals — managed compliantly, onboarded digitally, and productive from day one.\n\n• Cross-Border Compliance: International labour law navigation, Employer of Record (EOR) payroll management and localised contract structuring across every jurisdiction.\n• Remote-First Vetting: Secure remote-proctored technical assessments and multi-stage video interviews verifying both competency and remote-work readiness.\n• Global Talent Mapping: Active sourcing from major innovation hubs in the UK, India, Europe and North America, matched to your time zone and collaboration model.',
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
