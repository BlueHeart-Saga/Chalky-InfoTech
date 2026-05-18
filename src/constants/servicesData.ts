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
      { q: 'How does Chalky Infotech source the top 1% of specialized technical talent?', a: 'We use advanced talent mapping and AI-driven sourcing to identify high-performing engineers. Our focus is on "passive" candidates who aren\'t actively looking but possess the niche skills required for complex digital projects.' },
      { q: 'What technical stacks and languages do your IT recruitment experts cover?', a: 'Our experts cover all modern stacks including Java, Python, Node.js, React, Golang, and specialized cloud-native architectures on AWS, Azure, and GCP.' },
      { q: 'How do you ensure candidate quality through your technical vetting process?', a: 'Every candidate undergoes a multi-stage technical evaluation, including live coding, architectural reviews, and soft-skill assessments conducted by our in-house technical consultants.' },
      { q: 'Can you provide specialized IT staffing for cloud and DevOps engineering roles?', a: 'Yes, cloud and DevOps are our core strengths. we source architects and engineers who understand Kubernetes, Terraform, and modern CI/CD pipelines to drive your infrastructure automation.' },
      { q: 'What is the average time-to-hire for niche technical positions like AI or Data Science?', a: 'Due to our proactive talent pipelining, we typically present a qualified shortlist for niche AI or Data Science roles within 14-18 days.' },
      { q: 'Do you support IT recruitment for both early-stage startups and global enterprises?', a: 'Absolutely. We scale our services to meet the needs of seed-stage startups building their first engineering teams, as well as enterprises undergoing massive digital transformations.' },
      { q: 'How does your agency handle the sourcing of passive tech talent?', a: 'We build long-term relationships with top engineers globally, engaging them through technical communities and specialized networks rather than just job boards.' },
      { q: 'Can you build complete, cross-functional engineering squads for digital projects?', a: 'Yes, our "Squad Hiring" model allows us to deploy ready-to-work teams including developers, product managers, and QA specialists for immediate project impact.' },
      { q: 'What interview preparation do you provide for IT candidates?', a: 'We provide candidates with detailed technical briefs, company culture insights, and mock interview sessions to ensure they can effectively showcase their value to your team.' }
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
      { q: 'How quickly can Chalky Infotech fill urgent project-based contract roles?', a: 'We can typically present pre-vetted, ready-to-work contract specialists within 48 to 72 hours for most technical and operational requirements.' },
      { q: 'Do you manage payroll and compliance for all contract staff?', a: 'Yes, we handle the entire payroll process, tax compliance, and administrative management for all contract professionals, allowing you to focus on project delivery.' },
      { q: 'What are the benefits of using contract staffing for agile project delivery?', a: 'Contract staffing provides instant access to specialized expertise without long-term overhead, allowing your team to remain agile and respond quickly to changing project demands.' },
      { q: 'How do you handle IR35 compliance and other local labor regulations?', a: 'We have a dedicated compliance team that ensures all contract engagements meet local regulations, including IR35 in the UK, providing peace of mind for both clients and contractors.' },
      { q: 'Can I scale my contract workforce up or down based on project needs?', a: 'Absolutely. Our model is built for scalability, allowing you to increase or decrease your team size rapidly as project phases evolve.' },
      { q: 'What technical specialties do you provide through your contract network?', a: 'Our network includes experts in cloud engineering, cybersecurity, software development, project management, and specialized financial and healthcare operations.' },
      { q: 'How do you ensure contract professionals integrate seamlessly with internal teams?', a: 'We vet candidates for their "contractor mindset"—the ability to hit the ground running, adapt to new cultures quickly, and deliver value from day one.' },
      { q: 'What is the maximum duration for a contract staffing engagement?', a: 'Contract engagements can range from a few weeks to several years. We provide flexible extension options to ensure project continuity.' },
      { q: 'Do you offer temp-to-perm conversion options for contract hires?', a: 'Yes, we facilitate temp-to-perm models if you decide that a high-performing contractor would be a valuable long-term addition to your permanent team.' }
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
      { q: 'What is your strategy for finding high-retention talent for permanent roles?', a: 'We look beyond technical skills, focusing on long-term career aspirations and cultural alignment. This ensures that every hire we make is committed to growing with your organization.' },
      { q: 'How do you ensure deep cultural alignment between candidates and clients?', a: 'Our consultants take the time to understand your company values, work environment, and team dynamics, using these insights to find talent that will thrive in your specific culture.' },
      { q: 'Do you provide a placement guarantee for permanent hires?', a: 'Yes, we stand by the quality of our work. We offer a comprehensive placement guarantee period to ensure your new hire is the right fit for the long term.' },
      { q: 'What is your process for headhunting specialized talent in competitive markets?', a: 'We use targeted search techniques to engage "passive" candidates—highly skilled individuals who aren\'t actively looking but are open to the right strategic career move.' },
      { q: 'How does permanent hiring through an agency reduce long-term recruitment costs?', a: 'By reducing time-to-hire, improving quality-of-hire, and ensuring higher retention rates, we significantly lower the total cost of talent acquisition over time.' },
      { q: 'Can you manage high-volume permanent recruitment drives for new offices?', a: 'Yes, we have the capacity to coordinate large-scale permanent hiring projects for new regional hubs, ensuring consistent quality and brand-aligned recruitment.' },
      { q: 'What data-driven insights do you use to improve permanent hire quality?', a: 'We analyze market trends, candidate feedback, and historical placement data to continuously refine our search parameters and improve the accuracy of our matches.' },
      { q: 'How do you handle the negotiation and offer management for senior hires?', a: 'Our consultants act as expert intermediaries, managing the delicate negotiation process to ensure a successful outcome that satisfies both the client\'s budget and the candidate\'s expectations.' },
      { q: 'Do you support permanent recruitment across all major global industries?', a: 'Yes, we have specialized divisions for IT, Finance, Healthcare, Retail, and Manufacturing, ensuring sector-specific expertise for every permanent placement.' }
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
      { title: 'Timezone Sync', desc: 'Matching teams to your hours.', icon: 'Clock' },
      { title: 'Global Vetting', desc: 'Verified international credentials.', icon: 'UserCheck' }
    ]
  }
];
