export interface RoleDetail {
  title: string;
  focus: string;
}

export interface TechGroup {
  category: string;
  type: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  name: string;
  desc: string;
}

export interface HiringModel {
  type: string;
  description: string;
  icon: string;
  href: string;
}
export interface BusinessImpactItem {
  title: string;
  description: string;
}
export interface CapabilityData {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  positioning: string;
  heroDesc: string;
 seoTitle?: string;
seoDescription?: string;
seoKeywords?: string[];
  rolesDetailed: RoleDetail[];
  expertiseTags: string[];
  techEcosystem: TechGroup[];
  businessImpact: {
  label: string;
  heading: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
};
 hero: {
    badge: string;
    ctaLabel: string;
    secondaryLabel: string;
    imageAlt: string;
  };
  intro: {
  label: string;
  heading: string;
  content: string;
};
  useCases: string[];
  whyChooseList: string[];
  features: { title: string; desc: string }[];
  roles: {
    label: string;
    heading: string;
    description: string;
  };
  domainCompetencies: {
  label: string;
  heading: string;
  description: string;
};
technologyStack: {
  label: string;
  heading: string;
  description: string;
};

   whyChoose: {
    label: string;
    heading: string;
    description: string;
  };
  recruitmentProcess: {
  label: string;
  heading: string;
  description: string;
  steps: ProcessStep[];
};
hiringSection: {
  label: string;
  heading: string;
  description: string;
  viewAllLabel: string;
  viewAllHref: string;
};
  hiringModels: HiringModel[];

   finalCta: {
     badge: string;
    title: string;
    subtitle: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  footerNewsletter: {
  title: string;
  description: string;
  inputPlaceholder: string;
  subscribeLabel: string;
  successMessage: string;
  privacyText: string;
  privacyLinkLabel: string;
};
}


 export const CAPABILITIES_DATA: CapabilityData[] = [
  {
    slug: 'ai-machine-learning',
    hero: {
  badge: 'Specialized AI & Machine Learning Talent',
  ctaLabel: 'Hire AI & Machine Learning Talent',
  secondaryLabel: 'Explore AI & Machine Learning Roles',
  imageAlt: 'Chalky Infotech AI and Machine Learning talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Specialist Machine Learning Recruitment Services for UK Businesses',
  content: "As artificial intelligence and machine learning continue to transform industries, businesses need professionals with the right technical knowledge and practical experience. However, finding candidates with specialised AI and machine learning skills can be challenging.\n\nChalky's Machine Learning Recruitment Services UK help organisations connect with qualified professionals across Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Large Language Models, Natural Language Processing, and Computer Vision.\n\nWhether you are hiring an individual machine learning engineer, expanding an AI department, or building a specialist technical team, we support your recruitment requirements by identifying candidates whose skills and experience align with your business objectives.",
},
    title: 'AI & Machine Learning Recruitment Services UK',

seoTitle: 'Machine Learning Recruitment Services UK ',
seoDescription:
  "Find skilled AI and machine learning professionals with Chalky's Machine Learning Recruitment Services UK. Hire experienced specialists for your business.",
seoKeywords: [
  'Machine Learning Recruitment Agency UK',
  'AI Recruitment Services UK',
  'Machine Learning Recruiters UK',
  'AI and Machine Learning Recruitment',
  'Machine Learning Talent Acquisition',
  'AI Talent Recruitment UK',
  'Machine Learning Staffing Services UK',
  'AI Engineer Recruitment UK',
  'Machine Learning Specialist Recruitment',
  'Artificial Intelligence Recruitment UK',
  'Machine Learning Hiring Solutions',
  'Contract Machine Learning Recruitment UK'
],
  
    subtitle: 'Specialized AI, Deep Learning & LLM Talent',
    icon: 'Cpu ',
    positioning: 'AI & Machine Learning Talent',
    heroDesc: 'Connect with skilled AI and machine learning professionals through specialist recruitment solutions. Chalky helps UK businesses find experienced talent to support AI projects, machine learning initiatives, and technology team expansion',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'AI & Machine Learning Professionals We Recruit',
  description: 'We help businesses find experienced AI and machine learning professionals for specialist technical positions, permanent opportunities, and contract-based requirements.'
},
rolesDetailed: [
      { title: 'AI Engineer', focus: 'AI applications & intelligent systems' },
      { title: 'Machine Learning Engineer', focus: 'ML models & production systems' },
      { title: 'Generative AI Engineer', focus: 'GenAI applications & solutions' }, 
      { title: 'LLM Engineer', focus: 'Large language models & AI applications' },
      { title: 'Data Scientist', focus: 'Predictive analytics & ML' },
      { title: 'NLP Engineer', focus: 'Natural language processing' },
      { title: 'Computer Vision Engineer', focus: 'Image & video intelligence' },
      { title: 'MLOps Engineer', focus: 'AI/ML deployment & infrastructure' },
      { title: 'AI Research Engineer', focus: 'Advanced AI research & development' }
    ],
domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Skills Across AI & Machine Learning',
  description: 'Bring together point-of-sale, e-commerce, inventory and customer data. Create a unified view of business performance to support reporting and demand planning.'
},
technologyStack: {
  label: 'Technology Stack',
  heading: 'Technologies Our AI & Machine Learning Professionals Work With',
  description: 'We source professionals with experience in the programming languages, frameworks, platforms, and tools commonly used across AI and machine learning environments.'
},
businessImpact: {
  label: 'Real-World Impact',
  heading: 'Machine Learning Recruitment Across Business Applications',
  description: 'We help organisations recruit professionals with the skills required to support different AI and machine learning applications.',
 items: [
  {
    title: 'Generative AI Recruitment',
    description:
      'Find specialists experienced in generative AI technologies, LLM applications and AI-powered solutions.',
  },
  {
    title: 'AI Automation Recruitment',
    description:
      'Recruit AI professionals who can support intelligent automation and process improvement initiatives.',
  },
  {
    title: 'Intelligent Chatbot & Assistant Recruitment',
    description:
      'Connect with conversational AI developers and NLP specialists.',
  },
  {
    title: 'Recommendation System Recruitment',
    description:
      'Find machine learning professionals experienced in recommendation engines and personalisation systems.',
  },
  {
    title: 'Predictive Analytics Recruitment',
    description:
      'Hire data scientists and machine learning engineers with forecasting and predictive modelling expertise.',
  },
  {
    title: 'Document Intelligence Recruitment',
    description:
      'Source professionals experienced in document processing, information extraction and intelligent data handling.',
  },
  {
    title: 'Computer Vision & OCR Recruitment',
    description:
      'Find specialists in image processing, optical character recognition and computer vision technologies.',
  },
  {
    title: 'Natural Language Processing Recruitment',
    description:
      'Recruit NLP engineers with experience in language processing, text analysis and language models.',
  },
  {
    title: 'Enterprise AI Recruitment',
    description:
      'Identify AI professionals who can support enterprise technology teams and large-scale AI initiatives.',
  },
  {
    title: 'AI Product Development Recruitment',
    description:
      'Connect with technical talent experienced in developing and supporting AI-powered products.',
  },
],
},
    
    expertiseTags: [
      'Generative AI', 'Machine Learning', 'Deep Learning', 'Large Language Models',
      'Natural Language Processing', 'Computer Vision', 'Predictive Analytics',
      'Intelligent Automation', 'MLOps', 'AI Agents', 'AI Engineering', 'Model Development'
    ],
    techEcosystem: [
      { category: 'Languages', type: 'TECHS', items: ['Python', 'Java', 'R', 'TypeScript', 'C++', 'SQL'] },
      { category: 'AI & ML Frameworks', type: 'TECHS', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Keras', 'ONNX'] },
      { category: 'GenAI & LLM Tools', type: 'TECHS', items: ['LLMs', 'RAG Pipelines', 'LangChain', 'AI Agents', 'Vector Databases', 'Prompt Engineering'] },
      { category: 'Cloud AI', type: 'TECHS', items: ['Azure AI Services', 'AWS Bedrock / SageMaker', 'Google Cloud Vertex AI'] },
      { category: 'Data & MLOps', type: 'TECHS', items: ['Databricks', 'Spark', 'MLflow', 'Kubeflow', 'Pinecone', 'Weaviate'] }
    ],
    useCases: [
      'Generative AI Applications', 'AI-Powered Automation', 'Intelligent Chatbots & Assistants',
      'Recommendation Systems', 'Predictive Analytics', 'Document Intelligence',
      'Computer Vision & OCR', 'Natural Language Processing', 'Enterprise AI Integration', 'AI-Powered Products'
    ],
    whyChooseList: [
      'Recruitment support focused on AI, machine learning and emerging technology positions.',
      'Connect with professionals across machine learning, deep learning, NLP, computer vision and AI engineering.',
      'We consider the technical skills, experience and responsibilities required for each position.',
      'Identify candidates based on their qualifications, technical capabilities and role suitability.',
      'Permanent, contract and remote hiring options to support different business requirements.',
      'Recruitment assistance for niche technical positions and growing AI teams.',
      'Access talent across the UK and international recruitment markets, including the EU, US and Asia.',
      'Build a reliable recruitment partnership to support your organisation\'s changing talent requirements.'
    ],
     features: [
      { title: 'Generative AI & LLM Specialists', desc: 'Engineers experienced in fine-tuning foundation models, RAG pipelines, and enterprise AI integration.' },
      { title: 'MLOps & Scalable Deployment', desc: 'Experts who take AI models from research prototypes to production-grade, low-latency microservices.' },
      { title: 'Computer Vision & NLP', desc: 'Talent specializing in document intelligence, speech synthesis, image segmentation, and multi-modal AI.' }
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'Our Machine Learning Recruitment Process',
  description:
    'Our structured recruitment approach helps businesses identify, assess and hire suitable AI and machine learning professionals.',
  steps: [
    {
      step: '01',
      name: 'Understand',
      desc: 'Understand your business goals, technical requirements, job responsibilities and hiring expectations.',
    },
    {
      step: '02',
      name: 'Identify',
      desc: 'Source suitable AI and machine learning candidates through our recruitment networks and talent search process.',
    },
    {
      step: '03',
      name: 'Assess',
      desc: 'Review candidates\' technical skills, qualifications, practical experience and suitability for the position.',
    },
    {
      step: '04',
      name: 'Match',
      desc: 'Shortlist and present candidates who align with your role requirements, technology environment and team expectations.',
    },
    {
      step: '05',
      name: 'Hire',
      desc: 'Support the recruitment journey through candidate selection, interview coordination and onboarding.',
    },
  ],
},
whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Your Recruitment Partner for Machine Learning Talent in the UK',
  description:
    'Finding the right machine learning professionals requires an understanding of both technical roles and business hiring requirements. Chalky combines specialist recruitment knowledge with a practical candidate sourcing approach to support your hiring needs.',
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'Flexible Hiring Models for Machine Learning Recruitment',
  description:
    'Choose a recruitment model that aligns with your business requirements, hiring plans and project timelines.',
   viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description: 'Find long-term AI and machine learning professionals to strengthen your in-house technical teams.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description: 'Hire experienced specialists for specific projects, temporary requirements and short-term technical assignments.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description: 'Connect with skilled professionals who can work remotely and support distributed technology teams.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Flexible Recruitment',
    description: 'Choose flexible Machine Learning Recruitment Services UK based on your project scope, timeline, and talent requirements.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your AI Team",
  title: 'Find the Right Machine Learning Talent for Your Business',
  subtitle:
    'Looking to hire experienced machine learning professionals in the UK? Chalky helps businesses identify suitable candidates for specialist AI and machine learning roles. \n\n',
  primaryLabel: 'Hire Machine Learning Professionals',
  secondaryLabel: 'Talk to Our Team',
},
footerNewsletter: {
  title: 'Stay Ahead with AI & Machine Learning Insights',
  description:
    'Receive curated AI job opportunities, industry updates, hiring trends, and recruitment insights delivered directly to your inbox.',
  inputPlaceholder: 'Enter your AI email',
  subscribeLabel: 'Subscribe to AI Insights',
  successMessage: 'Thank you for subscribing to AI insights!',
   privacyText:
    'You can unsubscribe whenever you choose. Review our AI recruitment privacy policy',
  privacyLinkLabel: 'here',
  },
},
  
  {
    slug: 'software-engineering',
    hero: {
  badge: 'TECHNOLOGY TALENT SPECIALISTS',
  ctaLabel: 'Hire Software Engineering Professionals ',
  secondaryLabel: 'View Open Roles',
  imageAlt: 'Chalky Infotech Software Engineering talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Building Skilled Software Engineering Teams for UK Businesses',
  content: 'Finding experienced software engineering professionals is essential for businesses developing digital products, modernising applications, and managing complex technology environments. However, identifying candidates with the right technical skills and industry experience can be challenging.\n\nChalky\'s Software Engineering Recruitment Services UK help organisations connect with qualified software developers, engineering specialists, technical architects, and development professionals across different technology environments.\n\nFrom individual developer recruitment to building complete engineering teams, we focus on understanding your hiring requirements and identifying candidates whose technical capabilities, experience, and career backgrounds align with your business objectives.',
},
    title: 'Software Engineering Recruitment Services UK',

seoTitle: 'Software Engineering Recruitment Services UK',
seoDescription:
  "Find skilled software engineers with Chalky's Software Engineering Recruitment Services UK. Hire experienced developers and technical professionals for your business.",
 seoKeywords: [
  'Software Engineering Recruitment Agency UK',
  'Software Developer Recruitment UK',
  'IT Engineering Recruitment Services UK',
  'Software Engineer Recruiters UK',
  'Software Developer Staffing UK',
  'Technical Recruitment Services UK',
  'Software Development Recruitment UK',
  'Software Engineering Talent Acquisition',
  'Contract Software Engineer Recruitment UK',
  'Software Engineering Staffing Solutions',
  'Software Developer Hiring Services UK',
  'IT Recruitment Agency UK'
], 

    subtitle: 'Full-Stack, Backend & Frontend Developers',
    icon: 'Code2',
    positioning: 'Software Engineering Talent',
    heroDesc: 'Chalky helps UK businesses find skilled developers, software architects, and engineering specialists to strengthen their technology teams and support business growth.',
    
   roles: {
  label: 'Specialized Roles',
  heading: 'Software Engineering Professionals We Recruit',
  description:
    'We help businesses recruit skilled software developers, architects, and engineering specialists for different technical requirements and development environments.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Software Engineering Recruitment Expertise',
  description:
    'Our software engineering recruitment focuses on identifying professionals with practical experience across the key areas of modern software development.',
},

technologyStack: {
  label: 'Technology EXPERTISE',
  heading: 'Technology Skills Across Our Software Engineering Talent Network',
  description:
    'We source software engineering candidates with experience across popular programming languages, frameworks, databases, development tools and cloud platforms.',
},

businessImpact: {
  label: 'BUSINESS APPLICATIONS',
  heading: 'Software Engineering Recruitment Across Business Applications',
  description:
    'We help businesses find engineering professionals with the technical expertise required to develop, maintain and improve software applications across different business environments.',
  items: [
    {
      title: 'SaaS Product Engineering Recruitment',
      description:
        'Find software engineers experienced in developing, maintaining and scaling Software-as-a-Service products.',
    },
    {
      title: 'Enterprise Software Modernisation',
      description:
        'Recruit developers and software architects who can support application upgrades, legacy system improvements and enterprise technology projects.',
    },
    {
      title: 'Mobile Application Development Recruitment',
      description:
        'Connect with mobile developers experienced in building and maintaining Android and iOS applications.',
    },
    {
      title: 'API & Integration Engineering Recruitment',
      description:
        'Find specialists experienced in API development, system integration and connecting business applications.',
    },
    {
      title: 'Web Application Development',
      description:
        'Hire frontend, backend and full stack developers to support responsive and functional web applications.',
    },
    {
      title: 'Cloud-Based Software Development',
      description:
        'Recruit cloud engineers and software developers experienced in building and maintaining cloud-based applications.',
    },
    {
      title: 'E-commerce Development',
      description:
        'Find developers with experience in e-commerce platforms, online stores and payment gateway integrations.',
    },
    {
      title: 'Software Testing & Quality Assurance',
      description:
        'Connect with QA engineers and automation specialists who help maintain software quality and application performance.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Full Stack Developer', focus: 'End-to-end web applications & product delivery' },
      { title: 'Frontend Developer', focus: 'Responsive interfaces & engaging user experiences' },
      { title: 'Backend Developer', focus: 'Scalable APIs, distributed services & data systems' },
      { title: 'Software Developer', focus: 'Application architecture & core development' },
      { title: 'Java Developer', focus: 'Enterprise applications, Spring Boot & service development' },
      { title: 'Python Developer', focus: 'Python applications, Django, FastAPI & automation' },
      { title: '.NET Developer', focus: 'C#, .NET Core & Microsoft technology solutions' },
      { title: 'Node.js Developer', focus: 'High-performance JavaScript services & backend APIs' },
      { title: 'React Developer', focus: 'React, Next.js & modern web application development' },
      { title: 'Mobile Application Developer', focus: 'iOS, Android, React Native & Flutter solutions' },
      { title: 'Technical Lead', focus: 'Engineering leadership, delivery & development standards' },
      { title: 'Solution Architect', focus: 'Technical design, scalability & solution strategy' }
    ],
    expertiseTags: [
      'Microservices Architecture', 'REST & GraphQL Development', 'Frontend Engineering', 'Cloud-Native Development',
      'Distributed Application Systems', 'Modern Software Architecture', 'Event-Based Systems',
      'Mobile Application Engineering', 'DevOps Enablement', 'Software Design Principles'
    ],
    techEcosystem: [
      { category: 'Client-Side Development',type: 'Technologies', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS'] },
      { category: 'Server-Side Development',type: 'Technologies', items: ['Node.js', 'Java / Spring', 'Python / FastAPI', '.NET Core', 'Go', 'Rust'] },
      { category: 'Mobile Application Development',type: 'Technologies', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
      { category: 'Data & Database Systems',type: 'Technologies', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'] },
      { category: 'Software Architecture',type: 'Technologies', items: ['Microservices', 'GraphQL', 'gRPC', 'Serverless', 'Kafka'] }
    ],
    useCases: [
      'SaaS Product Engineering', 'Enterprise Software Modernization', 'Mobile Product Development',
      'API & Integration Engineering', 'E-Commerce Development', 'Fintech & Banking Solutions'
    ],
    whyChooseList: [
      'Recruitment support focused on software development and technical engineering positions.',
      'Connect with developers, software architects, engineers and technical specialists across different technology stacks.',
      'We consider programming languages, frameworks, development environments and experience relevant to each position.',
      'Identify suitable candidates based on technical capabilities, professional experience and role requirements.',
      'Permanent, contract and remote hiring options to support different workforce requirements.',
      'Recruitment assistance for niche technical positions and challenging engineering vacancies.',
      'Access software engineering talent across the UK and international recruitment markets, including the EU, US and Asia.',
      'Build a reliable recruitment partnership to support your organisation\'s ongoing technology hiring needs.'
    ],
    recruitmentProcess: {
  label: 'OUR TALENT ACQUISITION APPROACH',
  heading: 'Our Software Engineering Recruitment Process',
  description:
    'Our structured recruitment process helps businesses identify, evaluate and hire software engineering professionals who match their technical and organisational requirements.',
  steps: [
    {
      step: '01',
      name: 'DISCOVER',
      desc: 'Understand your technical requirements, job responsibilities, team structure and business objectives.',
    },
    {
      step: '02',
      name: 'SOURCE',
      desc: 'Identify suitable software engineering professionals through our recruitment networks and targeted candidate sourcing.',
    },
    {
      step: '03',
      name: 'EVALUATE',
      desc: 'Assess candidates\' technical skills, development experience, qualifications and suitability for the position.',
    },
    {
      step: '04',
      name: 'SELECT',
      desc: 'Present qualified candidates who align with your technology stack, project requirements and team expectations.',
    },
    {
      step: '05',
      name: 'ONBOARD',
      desc: 'Support the recruitment process through candidate selection, interview coordination and onboarding.',
    },
  ],
},
    whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Your Recruitment Partner for Software Engineering Talent in the UK',
  description:
    'Finding the right software engineering professionals requires an understanding of technical roles, development environments and business requirements. Chalky combines recruitment expertise with a focused candidate sourcing approach to help businesses build capable engineering teams.',
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'Flexible Hiring Models for Software Engineering Recruitment',
  description:
    'Choose a recruitment solution that matches your business requirements, project timelines and workforce needs.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Hire experienced software engineers for long-term positions and build stable development teams that support business growth.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find skilled software engineering professionals for temporary assignments, specific projects and short-term development requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with experienced software developers and technical specialists who can work remotely across different locations.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced engineering managers, technical directors and senior technology leaders for strategic positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],
    features: [
      { title: 'Modern Frontend & Mobile', desc: 'Craft responsive, intuitive user interfaces with Next.js, React, React Native, and Flutter.' },
      { title: 'High-Throughput Backend', desc: 'Architect resilient APIs and serverless microservices handling millions of requests with ease.' },
      { title: 'Technical Leadership', desc: 'Proven Tech Leads and Architects who drive clean code, pair programming, and engineering rigor.' }
    ],
    finalCta: {
       badge: "Let's Build Together",
  title: 'Find the Right Software Engineering Talent for Your Business',
  subtitle:
    '\n\nShare your hiring requirements with our recruitment team, and let us help you identify suitable candidates who can support your technology goals and long-term business growth.',
  primaryLabel: 'Hire Software Engineering Professionals',
  secondaryLabel: 'Connect With Our Recruitment Specialists',
},
footerNewsletter: {
  title: 'Stay Ahead With Technology Insights',
  description:
    'Receive curated hiring updates, talent insights, and industry trends delivered directly to your inbox. Keep your recruitment strategy informed and competitive.',
  inputPlaceholder: 'Enter your email',
  subscribeLabel: 'Subscribe',
  successMessage: 'Thank you for subscribing to AI insights!',
   privacyText:
    'Unsubscribe whenever you choose. View our privacy policy here.',
  privacyLinkLabel: 'here',
  },
  },
  
  {
    slug: 'cloud-devops',
    hero: {
  badge: 'Specialist Technology Professionals',
  ctaLabel: 'Hire Cloud & DevOps Professionals ',
  secondaryLabel: 'View Open Positions',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Building Skilled Cloud Engineering Teams for UK Businesses ',
  content: `As businesses increasingly depend on cloud technologies, finding professionals with the right infrastructure, automation and cloud management skills has become essential. However, recruiting experienced cloud engineers and DevOps specialists with the right technical background can be challenging.Chalky's Cloud Engineering Recruitment Services UK help organisations connect with qualified professionals across cloud computing, cloud architecture, DevOps, infrastructure automation, platform engineering and site reliability engineering.Whether you need an AWS engineer, Azure specialist, cloud architect or experienced DevOps professional, we support your recruitment requirements by identifying candidates whose technical expertise and industry experience align with your business needs.`,
},
    title: 'Cloud Engineering Recruitment Services UK',
    seoTitle: 'Cloud Engineering Recruitment Services UK',
seoDescription:
  "Find skilled cloud engineers and DevOps professionals with Chalky's Cloud Engineering Recruitment Services UK. Hire experienced specialists for your business.",
 seoKeywords: [
  'Software Engineering Recruitment Agency UK',
  'Software Developer Recruitment UK',
  'IT Engineering Recruitment Services UK',
  'Software Engineer Recruiters UK',
  'Software Developer Staffing UK',
  'Technical Recruitment Services UK',
  'Software Development Recruitment UK',
  'Software Engineering Talent Acquisition',
  'Contract Software Engineer Recruitment UK',
  'Software Engineering Staffing Solutions',
  'Software Developer Hiring Services UK',
  'IT Recruitment Agency UK'
], 
    subtitle: 'Cloud Infrastructure & Automation Experts',
    icon: 'Cloud',
    positioning: 'Cloud & DevOps Talent',
    heroDesc: 'Chalky helps UK businesses find skilled technical talent to manage cloud environments, strengthen infrastructure and support digital transformation.',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Cloud Engineering & DevOps Professionals We Recruit',
  description:
    'We help businesses recruit experienced cloud engineers, architects, and infrastructure specialists for different technology environments and project requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Cloud Engineering & DevOps Recruitment Expertise',
  description:
    'Our cloud engineering recruitment focuses on identifying professionals with practical experience across essential cloud and infrastructure disciplines.',
},

technologyStack: {
  label: 'Technology Stack',
  heading: 'Technologies Across Our Cloud Engineering Talent Network',
  description:
    'We source professionals with experience across leading cloud platforms, infrastructure tools, automation technologies and DevOps environments.',
},

businessImpact: {
  label: 'Real-World APPLICATIONS',
  heading: 'Cloud Engineering Recruitment Across Business Requirements',
  description:
    'We help businesses find cloud and DevOps professionals with the expertise required to support infrastructure operations, application delivery and cloud transformation initiatives.',
 items: [
    {
      title: 'Cloud Migration & Modernisation Recruitment',
      description:
        'Find cloud engineers and architects experienced in migrating applications, workloads and infrastructure to modern cloud environments.',
    },
    {
      title: 'DevOps & CI/CD Recruitment',
      description:
        'Recruit DevOps specialists who can support automated development workflows, deployment pipelines and release management.',
    },
    {
      title: 'Kubernetes & Container Engineering',
      description:
        'Connect with Kubernetes engineers and container specialists experienced in managing scalable application environments.',
    },
    {
      title: 'Cloud Infrastructure & Architecture',
      description:
        'Hire infrastructure engineers and cloud architects with experience in designing and maintaining reliable cloud platforms.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Cloud Solutions Engineer', focus: 'Cloud platform management & migration' },
      { title: 'Cloud Solutions  Architect', focus: 'Enterprise cloud planning & environment design' },
      { title: 'DevOps Specialist', focus: 'CI/CD delivery automation & release management' },
      { title: 'AWS Cloud  Engineer', focus: 'AWS infrastructure & cloud service management' },
      { title: 'Azure Cloud Specialist', focus: 'Microsoft Azure infrastructure & solution design' },
      { title: 'GCP Cloud Engineer', focus: 'Google Cloud infrastructure & platform services' },
      { title: 'Kubernetes Specialist', focus: 'Container orchestration & cloud-native platforms' },
      { title: 'Site Reliability Specialist', focus: 'Platform resilience, SLIs/SLOs & performance monitoring' },
      { title: 'Platform Engineer', focus: 'Developer platforms, automation & engineering tools' },
      { title: 'Infrastructure Engineer', focus: 'Infrastructure as code, Terraform & network automation' }
    ],
    expertiseTags: [
      'Infrastructure Automation', 'Container Platform Management', 'CI/CD Delivery Automation',
      'Site Reliability Engineering', 'Cloud Migration Services', 'Multi-Cloud Solution Architecture',
      'Observability & Application Performance', 'FinOps & Cloud Cost Management'
    ],
    techEcosystem: [
      { category: 'Cloud Technologies', type: 'TECHNOLOGIES', items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform'] },
      { category: 'Container Technologies', type: 'TECHNOLOGIES', items: ['Kubernetes', 'Docker', 'Helm', 'Istio'] },
      { category: 'Infrastructure Automation', type: 'TECHNOLOGIES', items: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'] },
      { category: 'Continuous Delivery', type: 'TECHNOLOGIES', items: ['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD'] },
      { category: 'Observability Tools', type: 'TECHNOLOGIES', items: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'] }
    ],
    useCases: [
      'Cloud Transformation & Modernization', 'Automated Delivery & Release Management',
      'Kubernetes Performance & Optimization', 'Resilient Infrastructure & Availability'
    ],
    whyChooseList: [
      'Recruitment support focused on cloud computing, infrastructure and DevOps positions.',
      'Connect with experienced AWS, Azure, GCP and cloud infrastructure specialists.',
      'We consider relevant cloud platforms, automation tools, container technologies and infrastructure skills when identifying candidates.',
      'Identify professionals based on their technical knowledge, certifications, experience and role requirements.'
    ],
    recruitmentProcess: {
  label: 'Our Cloud Engineering Recruitment Process',
  heading: 'From Cloud & DevOps Requirements to the Right Professional',
  description:
    'Our structured recruitment process helps businesses identify, assess and hire cloud engineering professionals who match their technical requirements and organisational goals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Understand your cloud environment, technical requirements, team structure and business objectives.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable cloud engineers, DevOps specialists and infrastructure professionals through targeted recruitment and talent sourcing.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Assess candidates technical capabilities, cloud certifications, professional experience and role suitability.',
    },
    {
      step: '04',
      name: 'Select',
      desc: 'Present qualified candidates whose skills align with your cloud platforms, infrastructure requirements and team expectations.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Support the hiring journey through candidate selection, interview coordination and onboarding.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Your Recruitment Partner for Cloud Engineering Talent in the UK',
  description:
    'Recruiting the right cloud engineering professionals requires an understanding of cloud platforms, infrastructure technologies and business requirements. Chalky combines technical role knowledge with focused recruitment expertise to help businesses build capable cloud and DevOps teams.',
},
hiringSection: {
  label: 'Engagement OPTIONS',
  heading: 'Flexible Hiring Solutions for Cloud Engineering Recruitment',
  description:
    'Choose a recruitment model that aligns with your project requirements, hiring timelines and workforce needs.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Hire experienced cloud engineers, DevOps specialists and infrastructure professionals for long-term positions.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find specialist cloud professionals for infrastructure projects, cloud migration assignments and short-term technical requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with skilled cloud engineering professionals who can support your technology operations through flexible remote working arrangements.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced cloud architects, engineering managers and senior technology leaders for critical leadership positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'Find the Right Cloud Engineering Talent for Your Business ',
  subtitle:
    `Share your hiring requirements with our recruitment team, and let us help you find the right professionals to support your cloud transformation, infrastructure operations and long-term business goals.`,
  primaryLabel: 'Hire Cloud & DevOps Talent',
  secondaryLabel: 'Talk to Our Recruitment Team',
},
footerNewsletter: {
  title: 'Subscribe for Tech Insights.',
  description:
    'Receive curated AI job opportunities, industry updates, hiring trends, and recruitment insights delivered directly to your inbox.',

    inputPlaceholder: 'Enter your email',
    subscribeLabel: 'Subscribe',
    successMessage: 'Thank you for subscribing to AI insights!',
     privacyText:
    'You can unsubscribe at any time. Read our privacy policy',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'Infrastructure as Code (IaC)', desc: 'Automate zero-downtime deployments and cloud provisioning using Terraform and CloudFormation.' },
      { title: 'Site Reliability & Observability', desc: 'SRE specialists focused on 99.99% uptime, incident response, SLIs/SLOs, and APM monitoring.' },
      { title: 'Containerization & Orchestration', desc: 'Certified Kubernetes and Docker professionals building modern cloud-native service meshes.' }
    ]
  },
  {
    slug: 'data-analytics',
    hero: {
  badge: 'Specialized Technology Talent',
  ctaLabel: 'Hire Cloud & DevOps Talent',
  secondaryLabel: 'Explore Cloud & DevOps Roles',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Building Skilled Data & Analytics Teams for UK Businesses',
  content: `Data plays an important role in business planning, performance measurement and strategic decision-making. Finding professionals who can manage complex datasets, develop analytical solutions and translate information into meaningful insights is essential for organisations. 

Chalky's Data Analytics Recruitment Services UK help businesses connect with qualified professionals across data analytics, data engineering, data science, business intelligence, data architecture and database management. 
\n\n We support your hiring requirements by identifying candidates whose technical skills, industry experience and professional background align with your business objectives.`,
},
    title: 'Data Analytics Recruitment Services UK',
    seoTitle: 'Data Analytics Recruitment Services UK',
seoDescription:
  "Find skilled data analysts, engineers and business intelligence professionals with Chalky's Data Analytics Recruitment Services UK. Hire experienced specialists for your business.",
  seoKeywords: [
  'Data Analytics Recruitment Agency UK',
  'Data Analyst Recruitment UK',
  'Data Engineering Recruitment UK',
  'Data Science Recruitment Services UK',
  'Data Talent Acquisition UK',
  'Data Specialist Recruitment UK',
  'Business Intelligence Recruitment UK',
  'Data Engineer Staffing UK',
  'Analytics Recruitment Agency UK',
  'Contract Data Analyst Recruitment UK',
  'Data Management Recruitment UK',
  'Big Data Recruitment Services UK'
],
    subtitle: 'Data Engineering, BI & Analytics Specialists',
    icon: 'Database',
    positioning: 'Data & Analytics Talent',
   
    heroDesc: 'Chalky helps UK businesses find skilled data and analytics talent to strengthen their teams, improve data management and support informed business decisions.',
    
   roles: {
  label: 'Specialized Roles',
  heading: 'Data & Analytics Professionals We Recruit',
  description:
    'We help businesses find experienced data professionals, analysts, engineers and technical specialists for different business and technology requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Data & Analytics Recruitment Expertise',
  description:
    'Our data and analytics recruitment focuses on identifying professionals with practical experience across key data disciplines.',
},

technologyStack: {
  label: 'Technology Stack',
  heading: 'Technologies Across Our Data & Analytics Talent Network',
  description:
    'We source professionals with experience across leading data platforms, analytics tools, programming languages and business intelligence technologies.',
},

businessImpact: {
  label: 'REAL-WORLD IMPACT',
  heading: 'Data & Analytics Recruitment Across Business Requirements',
  description:
    'We help organisations recruit data professionals with the expertise required to manage information, improve reporting and support data-driven business operations.',
  items: [
    {
      title: 'Scalable Data Infrastructure Buildout',
      description:
        'Experienced professionals ready to deliver results in this area.',
    },
    {
      title: 'Data-Driven Decision Support',
      description:
        'Experienced professionals ready to deliver results in this area.',
    },
    {
      title: 'Personalized Marketing & Retention Analytics',
      description:
        'Experienced professionals ready to deliver results in this area.',
    },
    {
      title: 'Live Data Ingestion & Processing',
      description:
        'Experienced professionals ready to deliver results in this area.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Data Engineer', focus: 'Build and maintain scalable data pipelines' },
      { title: 'Data Analyst', focus: 'Deliver insights through business and data analysis' },
      { title: 'Data Scientist', focus: 'Develop predictive models and intelligent solutions' },
      { title: 'BI Developer', focus: 'Create dashboards, reports and data visualisations' },
      { title: 'Analytics Engineer', focus: 'Transform and structure data for modern analytics' },
      { title: 'Big Data Engineer', focus: ' Manage large-scale data processing and platforms' },
      { title: 'Data Architect', focus: ' Design scalable enterprise data architectures' },
      { title: 'ETL Developer', focus: 'Develop reliable data integration and transformation pipelines' },
      { title: 'Database Administrator', focus: 'Ensure database security, reliability and performance' },
      { title: 'Data Governance Specialist', focus: 'Maintain data quality, compliance and governance standards' }
    ],
    expertiseTags: [
      'Data Platform Engineering', 'Real-Time Data Processing', 'Data Integration & Transformation',
      'Analytics & Reporting', 'Data Governance & Compliance', 'Advanced Analytics & AI',
      'Data Infrastructure Optimization', 'Data Quality & Management'
    ],
    techEcosystem: [
      { category: 'Cloud Data Platforms',type: 'TOOLS', items: ['Amazon S3', 'Azure Synapse', 'Google Cloud Storage', ' Apache Iceberg'] },
      { category: 'Data Processing & Orchestration', type: 'TOOLS', items: ['Apache Airflow', 'Apache Spark', 'Databricks', 'Prefect'] },
      { category: 'Data Analytics & Visualization', type: 'TOOLS', items: ['Power BI', 'Tableau', 'Qlik Sense', 'Looker'] },
      { category: 'Data Storage & Databases', type: 'TOOLS', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch'] }
    ],
    useCases: [
      'Scalable Data Infrastructure Buildout', 'Data-Driven Decision Support',
      'Personalized Marketing & Retention Analytics', 'Live Data Ingestion & Processing'
    ],
    whyChooseList: [
      'Recruitment support focused on data analytics, data engineering, business intelligence and data science positions.',
      'Connect with experienced data analysts, engineers, architects and analytics specialists',
      `We consider candidates' experience with SQL, Python, data platforms, reporting tools and analytics technologies.`
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'Our Data Analytics Recruitment Process',
  description:
    'Our structured recruitment approach helps businesses identify, assess and hire suitable data and analytics professionals based on their technical and organisational requirements.',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Understand your business objectives, technical requirements, job responsibilities and data environment.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable data analysts, engineers, scientists and analytics specialists through targeted recruitment and talent sourcing.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: `Assess candidates technical skills, qualifications, professional experience and role suitability.`,
    },
    {
      step: '04',
      name: 'Select',
      desc: 'Present shortlisted candidates whose expertise matches your technology stack, business requirements and team expectations.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Support the recruitment journey through candidate selection, interview coordination and onboarding.',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Your Recruitment Partner for Data & Analytics Talent in the UK',
  description:
    'Finding the right data professionals requires an understanding of analytical tools, data technologies and business requirements. Chalky combines specialist recruitment knowledge with a focused candidate sourcing approach to help organisations build capable data and analytics teams.',
},
hiringSection: {
  label: 'TALENT ENGAGEMENT OPTIONS',
  heading: 'Flexible Hiring Solutions for Data & Analytics Recruitment',
  description:
    'Choose a recruitment model that aligns with your hiring requirements, project timelines and workforce needs.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Hire experienced data analysts, engineers and analytics professionals for long-term positions and strengthen your in-house teams.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find specialist data professionals for temporary assignments, defined projects and short-term technical requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with skilled data and analytics professionals across different locations through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced data leaders, analytics managers and senior technology professionals for strategic positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's work together",
  title: 'Find the Right Data & Analytics Talent for Your Business',
  subtitle:
    `Share your hiring requirements with our recruitment team, and let us help you find suitable professionals who can strengthen your data capabilities and support your business objectives. `,
  primaryLabel: 'Find Data & Analytics Talent ',
  secondaryLabel: 'Connect With Our Hiring Specialists',
},
footerNewsletter: {
  title: 'Stay Ahead with Technology Insights',
  description:
    'Receive curated job opportunities, industry updates, and recruitment insights delivered directly to your inbox. Keep informed about the latest trends and opportunities.',

    inputPlaceholder: 'Enter your email',
    subscribeLabel: 'Subscribe',
    successMessage: 'Thank you for subscribing to technology insights!',
     privacyText:
    'You can unsubscribe whenever you choose. Review our AI recruitment privacy policy',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'Modern Data Stack & Lakes', desc: 'Build scalable data pipelines, warehouses, and real-time streaming architectures.' },
      { title: 'Advanced Business Intelligence', desc: 'Transform raw enterprise databases into actionable executive dashboards and self-service analytics.' },
      { title: 'Data Governance & Compliance', desc: 'Ensure data quality, lineage, privacy, and regulatory compliance across all storage layers.' }
    ]
  },
  {
    slug: 'cybersecurity',
    hero: {
  badge: 'Specialized Technology Talent',
  ctaLabel: 'Hire Cybersecurity Professionals ',
  secondaryLabel: 'Explore Cybersecurity Roles',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Building Strong Cybersecurity Teams for UK Businesses ',
  content: `As cyber threats continue to evolve, businesses need experienced professionals who can protect digital assets, manage security risks and maintain reliable information security practices. However, finding candidates with the right technical expertise, certifications and industry experience can be challenging. 
\n\nChalky's Cybersecurity Recruitment Services UK help organisations connect with qualified professionals across cyber defence, security operations, penetration testing, cloud security, application security and information security management. 
\n\nWe support your hiring requirements by identifying candidates whose technical skills, professional experience and security knowledge align with your business needs.`,
},
    title: 'Cybersecurity Recruitment Services UK',
    seoTitle: 'Cybersecurity Recruitment Services UK',

seoDescription: "Find skilled cybersecurity professionals with Chalky's Cybersecurity Recruitment Services UK. Hire experienced security engineers, analysts and specialists.",

seoKeywords: [
  'Cybersecurity Recruitment Agency UK',
  'Cyber Security Recruitment UK',
  'Cyber Security Recruiters UK',
  'Information Security Recruitment UK',
  'Cybersecurity Staffing Services UK',
  'IT Security Recruitment Agency UK',
  'Cybersecurity Talent Acquisition UK',
  'Security Engineer Recruitment UK',
  'SOC Analyst Recruitment UK',
  'Penetration Tester Recruitment UK',
  'Contract Cybersecurity Recruitment UK',
  'Cybersecurity Specialist Recruitment UK'
],
    subtitle: 'Security Infrastructure, SOC & Risk Experts',
    icon: 'ShieldCheck',
    positioning: 'Cybersecurity Talent',
   
    heroDesc: 'Chalky helps UK businesses find skilled security professionals to strengthen cyber defence, protect critical systems and manage evolving security risks.',
   
    roles: {
  label: 'Specialized Roles',
  heading: 'Cybersecurity Professionals We Recruit',
  description:
    'We help businesses find experienced cybersecurity engineers, analysts, architects and information security specialists for different security environments and organisational requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Cybersecurity Recruitment Expertise',
  description:
    'Our cybersecurity recruitment focuses on identifying professionals with practical experience across essential security disciplines.',
},

technologyStack: {
  label: 'Technology EXPERTISE',
  heading: 'Technologies Across Our Cybersecurity Talent Network',
  description:
    'We source professionals with experience across leading cybersecurity platforms, security tools and enterprise protection technologies.',
},

businessImpact: {
  label: 'Real-World APPLICATIONS',
  heading: 'Cybersecurity Recruitment Across Business Requirements',
  description:
    'We help organisations recruit security professionals with the expertise required to strengthen protection, manage cyber risks and support business security operations.',
  items: [
    {
      title: '24/7 Security Operations Deployment',
      description:
        'Skilled professionals equipped to establish and support reliable security operations.',
    },
    {
      title: 'SOC 2 & ISO 27001 Compliance Readiness',
      description:
        'Experienced specialists prepared to strengthen controls and support audit requirements.',
    },
    {
      title: 'Cloud Security Enhancement',
      description:
        'Qualified cybersecurity talent ready to improve cloud protection and reduce security risks.',
    },
    {
      title: 'DevSecOps Pipeline Integration',
      description:
        'Specialized talent ready to embed security into development workflows and strengthen application delivery.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Cybersecurity Specialist', focus: 'Threat protection & network security' },
      { title: 'Information Security Analyst', focus: 'Security monitoring & vulnerability management' },
      { title: 'SOC Specialist', focus: 'Continuous threat detection & incident response' },
      { title: 'Cloud Security Specialist', focus: 'AWS & Azure security architecture' },
      { title: 'Application Security Specialist', focus: 'Secure development & application testing' },
      { title: 'Cybersecurity  Architect', focus: 'Enterprise security design & Zero Trust strategy' },
      { title: 'Penetration Testing Specialist', focus: 'Ethical hacking & security assessments' },
      { title: 'GRC Specialist', focus: 'Security governance, risk & compliance' },
      { title: 'Identity & Access Engineer', focus: 'Identity management, access control & SSO' },
      { title: 'Information Security Manager', focus: 'Security strategy & CISO-level leadership' }
    ],
    expertiseTags: [
      'Zero Trust Security Architecture', 'Security Operations & Monitoring', 'Offensive Security Testing',
      'Secure DevOps Practices', 'Cloud Security Strategy', 'Identity & Access Controls',
      'Security Standards & Compliance', 'Cyber Incident Response'
    ],
    techEcosystem: [
      { category: 'SIEM & SOAR', type: 'TECHS',items: ['Splunk', 'Microsoft Sentinel', 'QRadar', 'Elastic SIEM'] },
      { category: 'Endpoint & Network', type: 'TECHS', items: ['CrowdStrike', 'Palo Alto', 'Fortinet', 'Zscaler'] },
      { category: 'IAM & Authentication', type: 'TECHS', items: ['Okta', 'Ping Identity', 'Azure AD', 'CyberArk'] },
      { category: 'Application Security', type: 'TOOLS', items: ['Burp Suite', 'SonarQube', 'Snyk', 'Veracode'] }
    ],
    useCases: [
      '24/7 Security Operations Deployment', 'SOC 2 & ISO 27001 Compliance Readiness',
      'Cloud Security Enhancement', 'DevSecOps Pipeline Integration'
    ],
    whyChooseList: [
      'Recruitment support focused on cyber defence, information security and enterprise security positions.',
      'Connect with experienced security engineers, SOC analysts, penetration testers and information security specialists.',
      `We consider candidates' experience with SIEM, endpoint protection, cloud security and vulnerability management platforms.`,
      'Identify suitable professionals based on technical skills, certifications, industry experience and role requirements.'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'Our Cybersecurity Recruitment Process',
  description:
    'Our structured recruitment process helps businesses identify, assess and hire cybersecurity professionals who match their security requirements and organisational objectives.',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Understand your security priorities, technical requirements, job responsibilities and business objectives.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable cybersecurity engineers, analysts and specialists through targeted recruitment and talent sourcing.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: `Assess candidates' technical capabilities, security certifications, practical experience and suitability for the position.`,
    },
    {
      step: '04',
      name: 'Recommend',
      desc: 'Present shortlisted candidates whose expertise aligns with your security environment, technology requirements and team expectations.',
    },
    {
      step: '05',
      name: '05 Onboard',
      desc: 'Support the recruitment journey through candidate selection, interview coordination and onboarding.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Your Recruitment Partner for Cybersecurity Talent in the UK.',
  description:
    'Recruiting cybersecurity professionals requires an understanding of security technologies, industry standards and evolving threat environments. Chalky combines specialist recruitment knowledge with a focused candidate sourcing approach to help businesses build capable security teams.',
},
hiringSection: {
  label: 'Engagement OPTIONS',
  heading: 'Flexible Hiring Solutions for Cybersecurity Recruitment',
  description:
    'Choose a recruitment model that aligns with your security requirements, workforce needs and project timelines.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Hire experienced cybersecurity professionals for long-term positions and build dedicated security teams.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find specialist security professionals for temporary assignments, security projects and urgent technical requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with skilled cybersecurity professionals across different locations through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced CISOs, cybersecurity directors, security managers and senior information security leaders for strategic positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'Find the Right Cybersecurity Talent for Your Business',
  subtitle:
    `Share your hiring requirements with our recruitment team, and let us help you identify suitable professionals who can strengthen your security capabilities and support your business protection goals.`,
  primaryLabel: 'Find Cybersecurity Professionals',
  secondaryLabel: 'Connect With Our Recruitment Specialists',
},
footerNewsletter: {
  title: 'Stay Ahead With Cybersecurity Insights',
  description:
    'Receive relevant hiring updates, talent trends, and cybersecurity recruitment insights delivered directly to your inbox. Keep your team ahead of evolving demands.',

    inputPlaceholder: 'Enter your email',
    subscribeLabel: 'Sign Up',
    successMessage: 'Thank you for subscribing to AI insights!',
     privacyText:
    'You can unsubscribe whenever you choose. View our privacy policy here.',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'Threat Intelligence & Detection', desc: '24/7 SOC Analysts and Incident Responders protecting critical enterprise assets from breaches.' },
      { title: 'AppSec & DevSecOps', desc: 'Embed security into code pipelines with SAST/DAST testing and vulnerability assessments.' },
      { title: 'Identity & Access Management (IAM)', desc: 'Enforce strict Zero Trust architecture, RBAC policies, and Single Sign-On integrations.' }
    ]
  },
  {
    slug: 'enterprise-technology',
    hero: {
  badge: 'SPECIALIST TECHNOLOGY PROFESSIONALS',
  ctaLabel: 'Hire Enterprise Technology Experts ',
  secondaryLabel: ' Discover Opportunities',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Building Skilled Enterprise Technology Teams for UK Businesses',
  content: `Enterprise technology plays an important role in managing business operations, integrating systems and supporting digital transformation. Finding professionals with the right platform knowledge, technical expertise and implementation experience can be challenging. 

Chalky's Enterprise Technology Recruitment Services UK help organisations connect with qualified professionals across SAP, Salesforce, MuleSoft, Workday, enterprise resource planning (ERP), customer relationship management (CRM) and enterprise systems integration. 

Whether you need an SAP consultant, Salesforce developer, enterprise architect or integration specialist, we support your hiring requirements by identifying candidates whose technical capabilities, professional experience and platform knowledge align with your business objectives.`
},
    title: 'Enterprise Technology Recruitment Services UK ',
    seoTitle: 'Enterprise Technology Recruitment Services UK',

seoDescription: "Find skilled enterprise technology professionals with Chalky's Enterprise Technology Recruitment Services UK. Hire experienced SAP, Salesforce and ERP specialists.",

seoKeywords: [
  'Enterprise Technology Recruitment Agency UK',
  'Enterprise IT Recruitment UK',
  'Enterprise Systems Recruitment UK',
  'SAP Recruitment Services UK',
  'Salesforce Recruitment Agency UK',
  'ERP Recruitment Services UK',
  'Enterprise Software Recruitment UK',
  'Technology Specialist Recruitment UK',
  'Enterprise Applications Recruitment UK',
  'MuleSoft Recruitment UK',
  'Workday Recruitment Services UK',
  'Enterprise Technology Staffing UK'
],
    subtitle: 'SAP, Salesforce & Integration Specialists',
    icon: 'Building2',
    positioning: 'Enterprise Technology Talent',
   
    heroDesc: 'Chalky helps UK businesses find skilled professionals to support enterprise systems, technology modernisation, software integration and digital transformation initiatives.',
   
    roles: {
  label: 'Specialized Roles',
  heading: 'Enterprise Technology Professionals We Recruit',
  description:
    'We help businesses recruit experienced enterprise consultants, developers, architects and technical specialists for different platforms and business technology requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Enterprise Technology Recruitment Expertise',
  description:
    'Our enterprise technology recruitment focuses on identifying professionals with practical experience across key enterprise technology disciplines.',
},

technologyStack: {
  label: 'TECHNOLOGY EXPERTISE',
  heading: 'Technologies Across Our Enterprise Technology Talent Network',
  description:
    'We source professionals with experience across leading enterprise platforms, software applications, integration technologies and business systems.',
},

businessImpact: {
  label: 'REAL-WORLD APPLICATIONS',
  heading: 'Enterprise Technology Recruitment Across Business Requirements',
  description:
    'We help organisations recruit enterprise technology professionals with the expertise required to manage business platforms, improve system integration and support technology transformation projects.',
 items: [
    {
      title: 'SAP & ERP Recruitment',
      description:
        'Find SAP consultants, ERP developers and implementation specialists experienced in enterprise resource planning systems and business process management.',
    },
    {
      title: 'Salesforce Recruitment',
      description:
        'Connect with Salesforce developers, administrators and architects experienced in CRM customisation, implementation and platform management.',
    },
    {
      title: 'Enterprise Integration Recruitment',
      description:
        'Hire MuleSoft developers and integration engineers experienced in API development, middleware and connecting enterprise applications.',
    },
    {
      title: 'Workday Recruitment',
      description:
        'Find Workday consultants and specialists experienced in HCM, financial management and enterprise HR platforms.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Enterprise Solutions Architect', focus: 'Strategic technology planning & enterprise standards' },
      { title: 'Technology Solutions Architect', focus: 'Tailored enterprise application solutions' },
      { title: 'Systems Architect', focus: 'Technology architecture & platform integration' },
      { title: 'SAP Technology Consultant', focus: 'SAP S/4HANA, FICO, MM & SD expertise' },
      { title: 'Salesforce Application Developer', focus: 'Apex, LWC, Sales Cloud & Service Cloud expertise' },
      { title: 'Customer Technology Consultant', focus: 'CRM deployment & process enhancement' },
      { title: 'Enterprise Systems Consultant', focus: 'ERP transformation & business process strategy' },
      { title: 'Systems Integration Engineer', focus: 'MuleSoft, Kafka & enterprise API integration' },
      { title: 'API Solutions Developer', focus: 'REST/SOAP services & microservices development' },
      { title: 'Enterprise Technology Consultant', focus: 'Technology strategy & solution customization' }
    ],
    expertiseTags: [
      'ERP Transformation', 'CRM Enhancement', 'Enterprise API Connectivity',
      'Digital Business Transformation', 'Legacy Platform  Migration', 'Operational Process Engineering'
    ],
    techEcosystem: [
      { category: 'ERP Systems',type: 'TECHS', items: ['SAP S/4HANA', 'Oracle Cloud ERP', 'Microsoft Dynamics 365'] },
      { category: 'CRM & Cloud',type: 'TECHS', items: ['Salesforce', 'ServiceNow', 'Workday'] },
      { category: 'Integration',type: 'TECHS', items: ['MuleSoft', 'Apache Kafka', 'Dell Boomi', 'Apigee'] }
    ],
    useCases: [
      'SAP S/4HANA Cloud Migration', 'Salesforce Multi-Cloud Implementation',
      'MuleSoft API Gateway Integration', 'Enterprise ERP Deployment'
    ],
    whyChooseList: [
      'Recruitment support focused on ERP, CRM, enterprise applications and systems integration positions.',
      'Connect with experienced SAP, Salesforce, MuleSoft, Workday and enterprise technology professionals',
      'We consider platform knowledge, implementation experience, technical skills and business system requirements when identifying candidates.',
      'Identify suitable professionals based on technical capabilities, certifications, professional experience and role suitability. '
    ],
    recruitmentProcess: {
  label: 'OUR TALENT ACQUISITION PROCESS',
  heading: 'Our Enterprise Technology Recruitment Process',
  description:
    'Our structured recruitment approach helps businesses identify, assess and hire enterprise technology professionals who match their platform requirements and business objectives. ',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Understand your technology environment, hiring requirements, role responsibilities and organisational priorities.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable enterprise technology consultants, developers and specialists through targeted recruitment and talent sourcing.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: `Assess candidates' technical skills, platform knowledge, professional experience and relevant certifications.`,
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Present shortlisted professionals whose expertise matches your enterprise systems, technology stack and role requirements.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Support the recruitment journey through candidate selection, interview coordination and onboarding.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Your Recruitment Partner for Enterprise Technology Talent in the UK',
  description:
    'Finding the right enterprise technology professionals requires an understanding of business platforms, enterprise applications and complex technology environments. Chalky combines specialist recruitment knowledge with a focused candidate sourcing approach to help businesses build capable enterprise technology teams.',
},
hiringSection: {
  label: 'ENGAGEMENT OPTIONS',
  heading: 'Flexible Hiring Solutions for Enterprise Technology Recruitment',
  description:
    'Choose a recruitment model that aligns with your project requirements, hiring timelines and workforce needs.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Hire experienced enterprise technology consultants, developers and architects for long-term positions and strengthen your internal teams.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find specialist enterprise technology professionals for implementation projects, system upgrades and short-term technical assignments.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with skilled enterprise technology professionals across different locations through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced CIOs, CTOs, enterprise architects and senior technology leaders for strategic positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "LET'S CREATE TOGETHER",
  title: 'Find the Right Enterprise Technology Talent for Your Business',
  subtitle:
    `Share your hiring requirements with our recruitment team, and let us help you find suitable professionals who can support your enterprise systems, technology transformation and long-term business goals.`,
  primaryLabel: 'Recruit Enterprise Technology Professionals',
  secondaryLabel: 'Connect With Our Talent Team',
},
footerNewsletter: {
  title: 'Stay Updated on Technology Insights',
  description:
    'Receive curated job opportunities and the latest recruitment updates directly in your inbox. Keep informed about emerging technology talent trends.',

    inputPlaceholder: 'Your email address',
    subscribeLabel: 'Join Now',
    successMessage: 'Thank you for subscribing to technology insights!',
     privacyText:
    'You may leave our mailing list whenever you choose. View our privacy policy here.',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'ERP & CRM Ecosystems', desc: 'Certified consultants driving SAP, Salesforce, ServiceNow, and Workday implementations.' },
      { title: 'Systems Integration & APIs', desc: 'Connect legacy systems with cloud platforms using MuleSoft, Kafka, and microservice gateways.' },
      { title: 'Legacy Modernization', desc: 'Architects guiding enterprise migrations from legacy monoliths to agile cloud environments.' }
    ]
  },
  {
    slug: 'quality-engineering',
    hero: {
  badge: 'Specialized Technology Talent',
  ctaLabel: 'Hire QA & Testing Professionals ',
  secondaryLabel: 'View Open Positions',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Connecting Businesses with Skilled Quality Engineering Professionals',
  content: `Software quality plays an important role in delivering reliable applications and digital products. Businesses need experienced testing professionals who can identify issues, improve test coverage, and support development teams throughout the software delivery lifecycle. 

Chalky helps organisations recruit qualified quality engineering and testing professionals with the technical knowledge and practical experience required for their projects. From manual testing and test automation to performance testing and quality assurance leadership, we connect businesses with suitable talent.`,
},
    title: 'Quality Engineering Recruitment Services UK',
    seoTitle: 'Quality Engineering Recruitment Services UK',

seoDescription: "Find skilled QA engineers and testing specialists with Chalky's Quality Engineering Recruitment Services UK. Hire experienced professionals for your team.",

seoKeywords: [
  'Quality Engineering Recruitment Agency UK',
  'QA Recruitment Services UK',
  'Software Testing Recruitment UK',
  'Quality Assurance Recruitment UK',
  'QA Engineer Recruitment UK',
  'Automation Testing Recruitment UK',
  'Test Automation Recruitment UK',
  'Software Tester Recruitment Agency UK',
  'Performance Testing Recruitment UK',
  'SDET Recruitment Services UK',
  'Contract QA Recruitment UK',
  'Quality Assurance Staffing UK',
  'QA and Testing Talent Acquisition UK',
  'Quality Engineering Staffing Solutions UK'
],
    subtitle: 'SDETs, Test Automation & Performance Experts',
    icon: 'CheckCircle2',
    positioning: 'Quality Engineering Talent',
    
    heroDesc: `Chalky's Quality Engineering Recruitment Services UK help businesses find experienced professionals who support software quality, reliable testing, and successful project delivery. `,
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Quality Assurance & Testing Professionals Available',
  description:
    'Our Quality Engineering Recruitment Services UK cover a range of technical roles to support different testing requirements and business environments. ',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Quality Assurance & Testing Capabilities',
  description:
    'We focus on finding candidates with relevant experience across key quality engineering disciplines.',
},

technologyStack: {
  label: 'TECHNOLOGY EXPERTISE',
  heading: 'Technology Platforms Our QA Specialists Work With',
  description:
    'We connect businesses with candidates who have practical experience using widely adopted testing tools, frameworks, and development technologies.',
},

businessImpact: {
  label: 'REAL-WORLD APPLICATIONS',
  heading: 'Quality Engineering & Testing Talent for Diverse Business Needs',
  description:
    'Chalky helps businesses find QA and testing professionals who can support different software development and quality assurance requirements.',
  items: [
    {
      title: 'CI/CD Quality Automation',
      description:
        'Recruit automation engineers who can develop and maintain test scripts, support automated regression testing, and integrate quality checks into delivery pipelines.',
    },
    {
      title: 'High-Volume Performance Testing',
      description:
        'Find performance testing specialists experienced in evaluating application speed, scalability, stability, and behaviour under demanding workloads.',
    },
    {
      title: 'Cross-Platform Mobile QA',
      description:
        'Hire mobile QA professionals who can validate application functionality across different devices, screen sizes, browsers, and operating systems.',
    },
    {
      title: 'Shift-Left Quality Adoption',
      description:
        'Connect with QA specialists who understand early-stage testing, test planning, and collaboration with development teams to identify defects earlier in the development lifecycle.',
    },
  ],
},
    rolesDetailed: [
      { title: 'QA Specialist', focus: 'Quality planning & validation' },
      { title: 'Test Automation Specialist', focus: 'Automated testing & script development' },
      { title: 'Software Development Test Engineer', focus: 'Test framework design & engineering' },
      { title: 'Performance Testing Specialist', focus: 'Load testing & performance analysis' },
      { title: 'Quality Assurance Analyst', focus: 'Functional & exploratory test validation' },
      { title: 'API Testing Specialist', focus: 'REST & GraphQL service validation' },
      { title: 'Mobile QA Specialist', focus: 'iOS & Android application testing' },
      { title: 'Test Solutions Architect', focus: 'Enterprise testing strategy & framework design' },
      { title: 'QA Team Lead', focus: 'Quality team leadership & delivery oversight' }
    ],
    expertiseTags: [
      'Quality-Focused Testing', 'Test Automation Solutions', 'Performance & Load Assurance',
      'Continuous Integration QA', 'API Test Engineering', 'Defect Prevention & Quality Delivery'
    ],
    techEcosystem: [
      { category: 'AUTOMATION & TESTING TOOLS', type: 'SKILLS',items: ['Selenium', 'Cypress', 'Playwright', 'Appium'] },
      { category: 'PERFORMANCE ENGINEERING TOOLS', type: 'SKILLS', items: ['JMeter', 'k6', 'Gatling', 'LoadRunner'] },
      { category: 'API & INTEGRATION TESTING', type: 'SKILLS', items: ['Postman', 'RestAssured', 'JUnit', 'TestNG'] }
    ],
    useCases: [
      'CI/CD Quality Automation', 'High-Volume Performance Testing',
      'Cross-Platform Mobile QA', 'Shift-Left Quality Adoption'
    ],
    whyChooseList: [
      'Access professionals experienced in manual testing, automation, performance testing, and software quality assurance.',
      'Focus on relevant tools, programming languages, testing frameworks, and practical experience.',
      'Find candidates for individual testing positions as well as wider quality engineering teams.',
      'Recruit permanent, contract, remote, and senior-level professionals based on your requirements.'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Quality Engineering Requirements to the Right Hire',
  description:
    'Our structured recruitment approach helps businesses identify and select quality engineering professionals based on their technical requirements and hiring goals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Understand your role requirements, technical environment, project scope, experience expectations, and hiring priorities.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable QA engineers, automation specialists, SDETs, and testing professionals through targeted candidate sourcing',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Assess candidates based on their technical skills, testing knowledge, professional experience, and suitability for the position.',
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Present relevant candidates who match your team structure, project requirements, and business expectations.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Support the selection and hiring process to help your chosen professionals transition smoothly into your organisation.',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Quality Engineering Recruitment. Matched With the Right Expertise.',
  description:
    `Finding suitable testing professionals requires an understanding of both technical skills and business requirements. Chalky focuses on connecting organisations with candidates who match their specific quality engineering needs.`,
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'FLEXIBLE RECRUITMENT OPTIONS FOR QUALITY ENGINEERING & TESTING',
  description:
    'Choose a recruitment approach that suits your business requirements, project timelines, and workforce needs.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Build your long-term technology team with experienced QA engineers, test automation specialists, SDETs, and quality assurance professionals.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Find contract QA and testing professionals to support project deadlines, temporary workloads, software releases, and specialist testing requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Access qualified quality engineering professionals from wider talent markets through flexible remote hiring arrangements.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Recruit experienced QA managers, quality engineering leaders, test directors, and senior technology professionals for strategic positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'Build Your Quality Engineering & Testing Team with the Right Talent',
  subtitle:
    'Looking to hire experienced QA engineers, automation testers, or software testing specialists? Tell us about your recruitment requirements, and Chalky will help you connect with professionals whose skills align with your business needs.',
  primaryLabel: 'Hire Quality Engineering & Testing Talent',
  secondaryLabel: 'Talk to Our Recruitment Team',
},
footerNewsletter: {
  title: 'Stay Ahead with AI & Machine Learning Insights',
  description:
    'Get exclusive job alerts and recruitment trends delivered right to your inbox. Stay ahead of the curve.',

    inputPlaceholder: 'Enter your email',
    subscribeLabel: 'Subscribe to tech Insights',
    successMessage: 'Thank you for subscribing to AI insights!',
     privacyText:
    'You can unsubscribe whenever you choose. Review our AI recruitment privacy policy',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'Automation Engineering (SDET)', desc: 'Build scalable test automation frameworks for web, mobile, and API layers in CI/CD.' },
      { title: 'Performance & Stress Testing', desc: 'Benchmark system limits under peak loads using JMeter, Locust, and k6.' },
      { title: 'End-to-End Quality Strategy', desc: 'Define QA metrics, shift-left testing practices, and zero-defect release criteria.' }
    ]
  },
  {
    slug: 'product-technology-leadership',
    hero: {
  badge: 'SPECIALIZED TECHNOLOGY EXPERTISE',
  ctaLabel: 'Hire Product & Technology Leaders ',
  secondaryLabel: 'View Leadership Roles',
  imageAlt: 'Chalky Infotech Cloud and DevOps talent recruitment',
},
intro: {
  label: 'Executive Overview',
  heading: 'Connecting Businesses with Skilled Product Management Professionals',
  content: `Effective product management requires a combination of strategic thinking, market understanding, communication, and delivery experience. Businesses need professionals who can identify customer requirements, define product priorities, and work with cross-functional teams to bring products to market. 

Chalky helps organisations recruit experienced product management professionals who understand business objectives and technology environments. From product managers and product owners to senior product leaders, we connect businesses with candidates whose experience matches their hiring requirements.`,
},
    title: 'Product Management Recruitment Services UK',
    seoTitle: 'Product Management Recruitment Services UK',

seoDescription: "Find experienced product managers and product leaders with Chalky's Product Management Recruitment Services UK. Hire skilled professionals for your business.",

seoKeywords: [
  'Product Management Recruitment Agency UK',
  'Product Manager Recruitment UK',
  'Product Management Recruiters UK',
  'Product Management Staffing UK',
  'Senior Product Manager Recruitment UK',
  'Technical Product Manager Recruitment UK',
  'Digital Product Manager Recruitment UK',
  'Product Leadership Recruitment UK',
  'Product Owner Recruitment UK',
  'Head of Product Recruitment UK',
  'Product Director Recruitment UK',
  'Contract Product Manager Recruitment UK',
  'Product Talent Acquisition UK',
  'Product Management Hiring Solutions UK'
],
    subtitle: 'CTOs, Engineering Managers & Product Leads',
    icon: 'Award',
    positioning: 'Technology Leadership Talent',
   
    heroDesc:`Chalky's Product Management Recruitment Services UK help businesses find skilled candidates who can shape product strategies, manage roadmaps, understand customer needs, and support business growth.`,
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Product Management Professionals We Recruit',
  description:'Our Product Management Recruitment Services UK cover a range of roles across digital products, software platforms, enterprise applications, and technology-driven businesses.'
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Product Management Capabilities',
  description:
    'We focus on identifying candidates with relevant experience across essential product management disciplines and business priorities.',
},

technologyStack: {
  label: 'Technology LANDSCAPE',
  heading: 'Technology Environments Our Product Managers Understand ',
  description:
    'We connect businesses with product management candidates who have experience working across different technology platforms, tools, and development environments.',
},

businessImpact: {
  label: 'BUSINESS IMPACT',
  heading: 'Product Management Talent for Key Business Priorities',
  description:
    'Chalky helps organisations find product management professionals who can support important business initiatives and product development goals.',
 items: [
    {
      title: 'Product Roadmap Development',
      description:
        'Recruit product managers with experience in defining product roadmaps, prioritising features, and aligning development plans with business objectives.',
    },
    {
      title: 'Digital Product Development',
      description:
        'Find professionals who understand digital platforms, software products, customer requirements, and collaboration with engineering and design teams.',
    },
    {
      title: 'Product Portfolio Management',
      description:
        'Hire experienced product leaders who can oversee multiple products, manage priorities, and support consistent product direction across business units.',
    },
    {
      title: 'Product Transformation & Innovation',
      description:
        'Connect with specialists who can guide product improvements, support new product initiatives, and adapt product strategies to changing market requirements.',
    },
  ],
},
    rolesDetailed: [
      { title: 'Product Strategy Manager', focus: 'Product vision & roadmap prioritization' },
      { title: 'Technical Product Lead', focus: 'Technical planning & engineering alignment' },
      { title: 'Project Delivery Manager', focus: 'Schedule, budget & scope oversight' },
      { title: 'Programme  Manager', focus: 'Cross-functional programme governance' },
      { title: 'Agile Delivery Lead', focus: 'Sprint planning & team facilitation' },
      { title: 'Engineering Team Manager', focus: 'Technical leadership & team development' },
      { title: 'Delivery Lead', focus: 'Client delivery & operational management' },
      { title: 'Technology Director', focus: 'Technology strategy & organisational leadership' },
      { title: 'Chief Technology Officer', focus: 'Technology vision & enterprise architecture' },
      { title: 'VP of Engineering', focus: 'Engineering team growth & organisational strategy' }
    ],
    expertiseTags: [
      'Strategic Technology Leadership', 'Product Vision & Strategy', 'Agile Business Transformation',
      'Engineering Team Culture', 'Technology Team Expansion', 'Performance & Goal Governance'
    ],
    techEcosystem: [
      { category: 'AGILE DELIVERY & GOVERNANCE',type: 'CORE AREAS', items: ['Agile / Scrum', 'Kanban', 'SAFe', 'OKRs'] },
      { category: 'PROJECT & TEAM MANAGEMENT', type: 'CORE AREAS', items: ['Jira', 'Confluence', 'Asana', 'Productboard'] },
      { category: 'PRODUCT DEVELOPMENT FRAMEWORKS', type: 'CORE AREAS', items: ['User Research', 'A/B Testing', 'Product Roadmapping'] }
    ],
    useCases: [
      'Engineering Team Expansion (10 to 100+)', 'Product Roadmap Transformation',
      'Enterprise Agile Adoption', 'Interim & Fractional CTO Support'
    ],
    whyChooseList: [
      'Access professionals experienced in product management, digital products, technical products, and product leadership.',
      'Find candidates for product manager, product owner, Head of Product, and senior leadership positions.',
      'Evaluate relevant experience, strategic thinking, communication, and product management knowledge.',
      'Identify candidates with experience relevant to your business sector and technology environment. '
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Product Management Requirements to the Right Hire',
  description:
    ' Our structured recruitment approach helps businesses identify and appoint product management professionals based on their role requirements and organisational goals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Understand your product management requirements, business objectives, team structure, and expected experience level.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify suitable product managers, product owners, and senior product leaders through targeted candidate sourcing.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Assess candidates based on product strategy knowledge, technical understanding, communication skills, leadership experience, and relevant achievements.',
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Present professionals whose experience and capabilities match your product environment and hiring expectations.',
    },
    {
      step: '05',
      name: 'Appoint',
      desc: 'Support the candidate selection and hiring process to help ensure a smooth transition into your organisation.',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Product Management Talent. Matched With the Right Expertise.',
  description:
    'Hiring the right product management professionals requires an understanding of business priorities, product strategy, and technology environments. Chalky focuses on connecting organisations with candidates who match their specific requirements.',
    
},
hiringSection: {
  label: 'ENGAGEMENT OPTIONS',
  heading: 'Flexible Recruitment Options for Product Management',
  description:
    'Choose a recruitment approach that suits your business goals, team requirements, and hiring timelines.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Build a long-term product team with experienced product managers, product owners, and senior product professionals who can support ongoing business growth.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Hire contract product management professionals to support specific projects, product launches, transformation programmes, and temporary resource requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Access qualified product management professionals from wider talent markets through flexible remote hiring arrangements.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify experienced Heads of Product, Product Directors, Chief Product Officers, and other senior leaders for strategic appointments.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your AI Team",
  title: 'Build Your Product Management Team with the Right Talent',
  subtitle:
    'Looking to hire experienced product managers, product owners, or senior product leaders? Share your hiring requirements with Chalky, and we will help you connect with professionals who can support your product strategy and business objectives.',
  primaryLabel: 'Hire Product & Technology Leadership Talent',
  secondaryLabel: 'Speak With Our Recruitment Specialists',
},
footerNewsletter: {
  title: 'STAY INFORMED WITH THE LATEST TECH INSIGHTS',
  description:
    'Receive relevant job opportunities, leadership hiring updates, and recruitment insights directly in your inbox. Keep informed about the evolving technology talent market.',

    inputPlaceholder: 'Enter your email',
    subscribeLabel: 'Subscribe',
    successMessage: 'Thank you for subscribing to AI insights!',
     privacyText:
    'You can unsubscribe whenever you choose. View our privacy policy here.',
  privacyLinkLabel: 'here',
  },
    features: [
      { title: 'Executive Technology Leadership', desc: 'Vetted CTOs and VPs of Engineering capable of scaling technology divisions and driving strategy.' },
      { title: 'Product Vision & Roadmap', desc: 'Technical Product Managers who bridge business goals, user feedback, and engineering execution.' },
      { title: 'Agile Delivery & Program Management', desc: 'Scrum Masters and Program Managers who optimize sprint velocity and delivery cadence.' }
    ]
  }
];
