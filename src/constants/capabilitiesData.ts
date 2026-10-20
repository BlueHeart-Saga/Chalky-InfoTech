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
  heading: 'Building Teams for the AI-Driven Future',
  content: 'AI is changing how businesses build products, automate processes, analyze information, and make decisions. Finding professionals with the right combination of technical skills and practical experience, however, can be challenging.\n\nOur AI & Machine Learning recruitment services UK are designed to connect organizations with experienced professionals across Artificial Intelligence, Machine Learning, Generative AI, Large Language Models, Natural Language Processing, Computer Vision, and intelligent automation.\n\nFrom individual specialist hiring to building complete AI teams, we focus on finding candidates whose skills, experience, and technical background match the requirements of the role.',
},
    title: 'AI & Machine Learning Recruitment Services UK',

seoTitle: 'AI & Machine Learning Recruitment Services UK | Chalky Infotech',
seoDescription:
  'AI & Machine Learning recruitment services UK connecting businesses with skilled AI, ML, Generative AI, and automation professionals for critical technology roles.',
   
    subtitle: 'Specialized AI, Deep Learning & LLM Talent',
    icon: 'Cpu ',
    positioning: 'AI & Machine Learning Talent',
    heroDesc: 'Connect with highly skilled AI and machine learning professionals who bring the exper-tise businesses need to develop intelligent solutions, accelerate innovation, and adopt emerging technologies.',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'AI & Machine Learning Talent We Provide',
  description: 'We connect organisations with skilled AI engineers, machine learning professionals, ar-chitects, and specialists who match your technology needs and project requirements.'
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
  heading: 'Specialized AI & Machine Learning Expertise',
  description: 'Our candidate search targets deep domain mastery across key AI and machine learning disciplines.'
},
technologyStack: {
  label: 'Technology Stack',
  heading: 'Technologies Our AI & Machine Learning Professionals Work With',
  description: 'We work with professionals experienced across the tools, platforms, frameworks, and technologies used to develop and deliver modern AI and machine learning solutions.'
},
businessImpact: {
  label: 'Real-World Impact',
  heading: 'AI & Machine Learning Recruitment Across Business Use Cases ',
  description: 'Experienced AI professionals helping businesses apply intelligent technologies to real-world challenges.',
 items: [
  {
    title: 'Generative AI Applications',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Intelligent Chatbots & Assistants',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Recommendation Systems',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Document Intelligence',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Computer Vision & OCR',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'Enterprise AI Integration',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
  },
  {
    title: 'AI-Powered Products',
    description:
      'Specialized professionals ready to deliver solutions in this domain.',
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
      'Specialized AI & Machine Learning recruitment expertise',
      'Access to specialized AI and ML professionals across global talent networks',
      'Strong understanding of AI, machine learning, and emerging technology roles',
      'Candidates screened for technical skills, experience, and role fit',
      'Flexible recruitment options for Permanent, Contract, and Remote hiring',
      'Efficient candidate sourcing for urgent and specialist AI recruitment needs',
      'Talent reach across the UK, EU, US, and Asia',
      'Long-term AI talent recruitment partnerships for growing technology teams'
    ],
     features: [
      { title: 'Generative AI & LLM Specialists', desc: 'Engineers experienced in fine-tuning foundation models, RAG pipelines, and enterprise AI integration.' },
      { title: 'MLOps & Scalable Deployment', desc: 'Experts who take AI models from research prototypes to production-grade, low-latency microservices.' },
      { title: 'Computer Vision & NLP', desc: 'Talent specializing in document intelligence, speech synthesis, image segmentation, and multi-modal AI.' }
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From AI & Machine Learning Need to the Right Hire',
  description:
    'A structured approach to identifying, assessing, and matching specialized AI talent.',
  steps: [
    {
      step: '01',
      name: 'Understand',
      desc: 'Understand your technical requirements and business objectives.',
    },
    {
      step: '02',
      name: 'Identify',
      desc: 'Source specialized AI & Machine Learning professionals from our talent network.',
    },
    {
      step: '03',
      name: 'Assess',
      desc: 'Evaluate technical expertise, experience, and role suitability.',
    },
    {
      step: '04',
      name: 'Match',
      desc: 'Present candidates aligned with your technology stack and requirements.',
    },
    {
      step: '05',
      name: 'Hire',
      desc: 'Support the recruitment process through selection and onboarding.',
    },
  ],
},
whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'AI & Machine Learning Talent Focused on the Right Fit',
  description:
    'We combine technical understanding with a practical recruitment approach to connect you with AI and machine learning professionals who fit your role, team, and technology needs.',
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'Flexible Hiring Models for Software Engineering',
  description:
    'Choose the right engagement model tailored to your project timeline and talent requirements.',
   viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Hiring',
    description: 'Build long-term AI and machine learning teams with experienced permanent professionals.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Hiring',
    description: 'Access specialized AI talent for short-term projects, transformation programmes, and urgent requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Hiring',
    description: 'Expand your access to AI specialists through flexible remote recruitment solutions.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Flexible Hiring',
    description: 'Choose flexible engagement options based on your project scope, timeline, and talent requirements.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your AI Team",
  title: 'Build Your AI & Machine Learning Team',
  subtitle:
    'Connect with specialized AI professionals who can help accelerate innovation and deliver your technology goals.',
  primaryLabel: 'Hire AI Talent',
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
  heading: 'Building High-Impact Engineering Teams',
  content: 'From scalable cloud services and distributed applications to intuitive web and mobile experiences, we connect businesses with engineers who build reliable, maintainable, and future-ready software.',
},
    title: 'Software Engineering Professionals',
    subtitle: 'Full-Stack, Backend & Frontend Developers',
    icon: 'Code2',
    positioning: 'Software Engineering Talent',
    heroDesc: 'Build agile, high-performing engineering teams with skilled developers and technical experts across modern languages, frameworks, and software architectures.',
    
   roles: {
  label: 'Specialized Roles',
  heading: 'Software Engineering Professionals We Deliver',
  description:
    'We connect businesses with skilled developers, architects, and technical specialists aligned with your specific technology environment.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Software Engineering Capabilities',
  description:
    'Our talent search focuses on proven expertise across the core areas of modern software development.',
},

technologyStack: {
  label: 'Technology EXPERTISE',
  heading: 'Technology Skills Across Our Talent Network',
  description:
    'Our candidates bring hands-on experience across leading technology environments, assessed through a thorough technical screening process.',
},

businessImpact: {
  label: 'BUSINESS APPLICATIONS',
  heading: 'Software Engineering Talent Across Business Applications',
  description:
    'Experienced software professionals helping businesses build scalable products, modernize applications, and deliver reliable digital solutions.',
  items: [
    {
      title: 'SaaS Product Engineering',
      description:
        'Experienced specialists equipped to build and enhance scalable solutions in this area.',
    },
    {
      title: 'Enterprise Software Modernization',
      description:
        'Skilled professionals prepared to support modernisation initiatives across enterprise systems.',
    },
    {
      title: 'Mobile Product Development',
      description:
        'Specialist talent ready to create and deliver high-quality mobile applications.',
    },
    {
      title: 'API & Integration Engineering',
      description:
        'Experienced engineers focused on building reliable, high-performance APIs and integrations.',
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
      'Proven success in building high-calibre engineering teams',
      'Strong knowledge of modern frameworks and quality coding practices',
      'Pre-screened developers across experienced and leadership levels',
      'Fast candidate shortlists delivered within five working days',
      'Tailored recruitment aligned to your technology environment',
      'End-to-end talent support for complete product development'
    ],
    recruitmentProcess: {
  label: 'OUR TALENT ACQUISITION APPROACH',
  heading: 'From Software Requirements to the Right Professional',
  description:
    'A structured approach to identifying, assessing, and matching software engineering professionals.',
  steps: [
    {
      step: '01',
      name: 'DISCOVER',
      desc: 'We learn your technical needs, team structure, and wider business priorities.ectives.',
    },
    {
      step: '02',
      name: 'SOURCE',
      desc: 'We identify experienced software professionals through our specialist talent network.',
    },
    {
      step: '03',
      name: 'EVALUATE',
      desc: 'We review technical capability, relevant experience, and alignment with the position.',
    },
    {
      step: '04',
      name: 'SELECT',
      desc: 'We introduce qualified candidates who match your technology environment and role requirements.',
    },
    {
      step: '05',
      name: 'ONBOARD',
      desc: 'We support the hiring journey through candidate selection and successful onboarding.',
    },
  ],
},
    whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Specialist Software Engineering Talent. Carefully Matched',
  description:
    'We combine technical understanding with focused recruitment expertise to connect businesses with dependable, high-performing engineering professionals.',
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'Flexible Talent Solutions for Software Engineering',
  description:
    'Select a hiring approach that fits your project goals, timelines, and workforce requirements.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Hiring',
    description:
      'Build lasting engineering teams with proven professionals committed to long-term growth..',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Staffing',
    description:
      'Strengthen project teams with skilled specialists available for flexible contract assignments.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Hiring',
    description:
      'Connect with specialist technology professionals across locations through flexible remote recruitment.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Secure experienced senior leaders and technology executives for critical, high-impact positions.',
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
  title: 'Build Your Software Engineering Team with Exceptional Talent',
  subtitle:
    'Share the software engineering expertise you’re looking for, and we’ll connect you with professionals equipped to strengthen your technology initiatives and deliver lasting results.',
  primaryLabel: 'Hire Software Engineering Professionals ',
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
  heading: 'Enabling Scalable & Reliable Cloud Operations',
  content: 'Strengthen your technology teams with cloud architects, reliability engineers, and DevOps professionals who streamline CI/CD delivery, improve system resilience, and support dependable cloud environments.',
},
    title: 'Cloud Engineering & DevOps Talent',
    subtitle: 'Cloud Infrastructure & Automation Experts',
    icon: 'Cloud',
    positioning: 'Cloud & DevOps Talent',
    heroDesc: 'Connect with experienced cloud and DevOps professionals who support scalable infrastructure, streamlined delivery, resilient platforms, and successful cloud transformation.',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Cloud & DevOps Professionals We Deliver',
  description:
    'We connect businesses with experienced engineers, architects, and specialists selected to complement your technology environment and infrastructure needs.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Cloud & DevOps Capability Areas',
  description:
    'Our talent searches focus on proven expertise across critical cloud and DevOps disciplines.',
},

technologyStack: {
  label: 'Technology Stack',
  heading: 'Technology Platforms Our Talent Supports',
  description:
    'Our candidates are experienced across leading technology environments and assessed through a thorough technical screening process.',
},

businessImpact: {
  label: 'Real-World APPLICATIONS',
  heading: 'Cloud & DevOps Talent for Business-Critical Needs',
  description:
    'Experienced cloud and DevOps professionals helping businesses improve scalability, reliability, deployment efficiency, and cloud operations.',
 items: [
    {
      title: 'Cloud Transformation & Modernization',
      description:
        'Qualified specialists equipped to support cloud migration and infrastructure modernization initiatives.',
    },
    {
      title: 'Automated Delivery & Release Management',
      description:
        ' Experienced professionals ready to streamline deployment workflows and improve delivery efficiency.',
    },
    {
      title: 'Kubernetes Performance & Optimization',
      description:
        ' Skilled talent prepared to strengthen container platforms, reliability, and operational performance.',
    },
    {
      title: 'Resilient Infrastructure & Availability',
      description:
        'Specialist professionals available to build dependable, scalable, and highly available environments.',
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
      'Certified cloud specialists across AWS, Azure and GCP',
      'Proven expertise in cloud security, compliance and Zero Trust',
      'Targeted sourcing for SRE and platform engineering roles',
      'Flexible contract and permanent hiring options'
    ],
    recruitmentProcess: {
  label: 'OUR TALENT ACQUISITION APPROACH',
  heading: 'From Cloud & DevOps Requirements to the Right Professional',
  description:
    'A structured approach to identifying, assessing, and matching specialized cloud and DevOps professionals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Clarify your technical needs, team priorities, and business goals.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify experienced Cloud & DevOps specialists through our talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Review technical capabilities, relevant experience, and overall role alignment.',
    },
    {
      step: '04',
      name: 'Select',
      desc: 'Introduce professionals whose expertise matches your environment and requirements.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Guide the hiring journey through selection, offer management, and onboarding.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Specialist Cloud & DevOps Talent. Matched with Precision.',
  description:
    'We combine technical expertise with focused recruitment to deliver dependable, long-term talent.',
},
hiringSection: {
  label: 'Engagement OPTIONS',
  heading: 'Flexible Hiring Solutions for Cloud & DevOps',
  description:
    'Select an engagement approach that fits your project goals, timeline and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Build lasting technology teams with experienced professionals selected for long-term fit.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Staffing',
    description:
      'Add specialist expertise for critical projects, milestones and changing delivery needs.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with skilled technology professionals worldwide through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Flexible Hiring',
    description:
      'Find senior technology leaders and high-impact professionals for critical leadership roles.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'Build Your Cloud & DevOps Team with the Right Talent',
  subtitle:
    'Get Exclusive job alerts and recruitment trends delivered right to your inbox. Stay ahead of the curve.',
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
  heading: 'Turning Data into Measurable Business Value',
  content: 'Build high-performing data teams with skilled engineers, architects, and analysts who develop scalable data platforms, real-time pipelines, and intelligent analytics solutions.',
},
    title: 'Data & Analytics',
    subtitle: 'Data Engineering, BI & Analytics Specialists',
    icon: 'Database',
    positioning: 'Data & Analytics Talent',
   
    heroDesc: 'Work with data and analytics experts who turn complex information into strategic insights, smarter decisions, and real business outcomes.',
    
   roles: {
  label: 'Specialized Roles',
  heading: 'Data & Analytics Talent We Provide',
  description:
    'We connect businesses with experienced data professionals, engineers, and specialists who match your technology environment and specific business requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Comprehensive Expertise Across the Data Landscape',
  description:
    'Our talent network covers specialized skills across the full spectrum of data and analytics.',
},

technologyStack: {
  label: 'Technology Stack',
  heading: 'Technologies Our Professionals Work With',
  description:
    'Key technology tools and platforms assessed through our comprehensive technical screening process.',
},

businessImpact: {
  label: 'REAL-WORLD IMPACT',
  heading: 'Data & Analytics Expertise Driving Business Outcomes',
  description:
    'Experienced specialists equipped to support organizations with practical data and analytics solutions.',
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
      'Targeted talent sourcing across leading data platforms and analytics ecosystems',
      'Experienced data architects with proven enterprise-scale delivery experience',
      'Thorough assessment of SQL, data modelling, and pipeline engineering capabilities'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Data & Analytics Requirements to the Ideal Candidate',
  description:
    '',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Clarify your technical needs and organizational goals.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Find specialized Data & Analytics professionals through our talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Review technical capabilities, professional experience, and position alignment.',
    },
    {
      step: '04',
      name: 'Select',
      desc: ' Recommend candidates matching your technology environment and requirements.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Guide the hiring journey through final selection and successful onboarding. ',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Exceptional Data & Analytics Professionals. Precisely Aligned.',
  description:
    'We combine specialist expertise with hiring accuracy to deliver high-performing talent.',
},
hiringSection: {
  label: 'TALENT ENGAGEMENT OPTIONS',
  heading: 'Adaptable Hiring Solutions for Data & Analytics',
  description:
    'Select the ideal hiring approach aligned with your project requirements, timeline, and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Placement',
    description:
      'Build dedicated long-term technology teams with experienced, high-performing professionals.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Recruitment',
    description:
      'Expand specialist capabilities for defined project milestones with flexible contract professionals.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Global Talent Sourcing',
    description:
      'Connect with skilled technology professionals worldwide through flexible remote recruitment.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Leadership Recruitment',
    description:
      'Identify exceptional senior data leaders and strategic technology executives for critical roles.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's work together",
  title: 'Build Your Data & Analytics Team with the Right Professionals',
  subtitle:
    'Tell us the Data & Analytics expertise your business requires, and we’ll connect you with skilled professionals who can help accelerate your technology goals.',
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
  heading: 'Strengthening Enterprise Security & Resilience',
  content: 'Protect critical business assets against evolving cyber risks with certified security engineers, SOC specialists, and penetration testing professionals who build resilient security frameworks and support regulatory requirements.',
},
    title: 'Cybersecurity Professionals',
    subtitle: 'Security Infrastructure, SOC & Risk Experts',
    icon: 'ShieldCheck',
    positioning: 'Cybersecurity Talent',
   
    heroDesc: 'Strengthen your security capabilities with experienced specialists across cyber defence, cloud security, application protection, governance, compliance, and risk.',
   
    roles: {
  label: 'Specialized Roles',
  heading: 'Cybersecurity Specialists  We Provide',
  description:
    'We connect businesses with experienced security professionals, engineers, architects, and specialists aligned with their technology environment and security requirements.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialized Cybersecurity Capabilities',
  description:
    'Our talent search focuses on proven security expertise across critical disciplines and modern enterprise protection practices.',
},

technologyStack: {
  label: 'Technology EXPERTISE',
  heading: 'Technology Platforms Our Security Talent Supports',
  description:
    'Our cybersecurity professionals bring experience across leading security technologies and environments, assessed through a structured technical screening process.',
},

businessImpact: {
  label: 'Real-World APPLICATIONS',
  heading: 'Cybersecurity Professionals for Critical Business Needs',
  description:
    'Connect with proven security specialists who bring the expertise required to address complex cybersecurity priorities and strengthen your organization’s protection.',
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
      'Access to vetted and certified cybersecurity professionals  (CISSP, CISM, CEH)',
      'Thorough verification of ethical security testing experience and credentials',
      'Fast-track hiring support for urgent cybersecurity and incident response requirements'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Cybersecurity Requirements to the Right Talent',
  description:
    'A structured approach to identifying, assessing, and matching specialized cybersecurity professionals.',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Define your cybersecurity priorities, technical requirements, and business objectives.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify experienced cybersecurity specialists from our trusted talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Assess technical expertise, certifications, industry experience, and role alignment.',
    },
    {
      step: '04',
      name: 'Recommend',
      desc: 'Present security professionals who match your technology environment and hiring needs.',
    },
    {
      step: '05',
      name: '05 Onboard',
      desc: 'Support the hiring journey through candidate selection, offer management, and seamless onboarding.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Specialist Cybersecurity Talent. Carefully Matched.',
  description:
    'We combine specialist security expertise with focused recruitment to deliver high-quality talent that stays.',
},
hiringSection: {
  label: 'Engagement OPTIONS',
  heading: 'Flexible Recruitment Models for Cybersecurity Talent',
  description:
    'Select a hiring approach designed around your workforce needs, project priorities, and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Build lasting security teams with experienced professionals selected for long-term fit and retention.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Staffing',
    description:
      'Strengthen your security function for key projects with flexible contract specialists.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with specialist cybersecurity professionals worldwide through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Secure high-impact cybersecurity leaders for senior C-suite and VP-level positions.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'BUILD YOUR CYBERSECURITY TEAM WITH THE RIGHT EXPERTISE',
  subtitle:
    'Tell us the security capabilities you’re looking for, and we’ll connect you with experienced professionals who can strengthen your cybersecurity initiatives.',
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
  heading: 'Advancing Enterprise Digital Transformation',
  content: 'Empower business operations with skilled consultants and developers experienced in SAP S/4HANA, Salesforce, MuleSoft, Workday, and enterprise systems integration.',
},
    title: 'Enterprise Technology Professionals',
    subtitle: 'SAP, Salesforce & Integration Specialists',
    icon: 'Building2',
    positioning: 'Enterprise Technology Talent',
   
    heroDesc: 'Connect with experienced technology specialists who drive enterprise modernization, systems integration, digital transformation, and complex technology initiatives.',
   
    roles: {
  label: 'Specialized Roles',
  heading: 'Enterprise Technology Professionals We Recruit',
  description:
    'We connect businesses with experienced engineers, architects, and technology specialists aligned with your specific technology environment.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Focused Enterprise Technology Capabilities',
  description:
    'Our talent search focuses on proven expertise across essential enterprise technology disciplines.',
},

technologyStack: {
  label: 'TECHNOLOGY EXPERTISE',
  heading: 'Technology Platforms Our Professionals Support',
  description:
    'We assess technology expertise across established enterprise platforms through a thorough technical screening process.',
},

businessImpact: {
  label: 'REAL-WORLD APPLICATIONS',
  heading: 'Enterprise Technology Talent Across Business Applications',
  description:
    'Experienced professionals equipped to support complex technology initiatives across key business environments.',
 items: [
    {
      title: 'SAP S/4HANA Cloud Migration',
      description:
        'Experienced specialists prepared to deliver effective solutions within this environment.',
    },
    {
      title: 'Salesforce Multi-Cloud Implementation',
      description:
        'Experienced specialists prepared to deliver effective solutions within this environment.',
    },
    {
      title: 'MuleSoft API Gateway Integration',
      description:
        'Experienced specialists prepared to deliver effective solutions within this environment.',
    },
    {
      title: 'Enterprise ERP Deployment',
      description:
        'Experienced specialists prepared to deliver effective solutions within this environment.',
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
      'Verified certified specialists (SAP certified, Salesforce MVPs)',
      'Established expertise across global enterprise transformation programmes',
      'Flexible permanent and contract talent solutions'
    ],
    recruitmentProcess: {
  label: 'OUR TALENT ACQUISITION PROCESS',
  heading: 'From Enterprise Technology Demand to the Ideal Candidate',
  description:
    '',
  steps: [
    {
      step: '01',
      name: 'Discover',
      desc: 'Gain clarity on your technology needs, role expectations, and business priorities.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify qualified Enterprise Technology specialists through our established talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Review technical capabilities, relevant experience, and alignment with the position.',
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Introduce professionals who closely match your technology environment and requirements.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: ' Guide the hiring journey from candidate selection through a smooth onboarding process.',
    },
  ],
},

whyChoose: {
  label: 'WHY CHOOSE CHALKY',
  heading: 'Specialist Enterprise Technology Professionals. Precisely Aligned.',
  description:
    'We combine technical expertise with focused recruitment to build dependable, high-performing teams.',
},
hiringSection: {
  label: 'ENGAGEMENT OPTIONS',
  heading: 'Adaptable Talent Models for Enterprise Technology',
  description:
    'Select an engagement approach designed around your delivery schedule, workforce requirements, and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Long-Term Recruitment',
    description:
      'Develop established technology teams with experienced professionals committed to sustained business growth.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Flexible Contract Staffing',
    description:
      'Expand project capacity for defined delivery periods with experienced contract specialists.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Distributed Talent Hiring',
    description:
      'Connect with skilled technology professionals worldwide through flexible, location-independent recruitment.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Leadership Talent Search',
    description:
      'Secure exceptional senior technology leaders and executive-level professionals for critical business roles.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "LET'S CREATE TOGETHER",
  title: 'Strengthen Your Enterprise Technology Team with Exceptional Professionals',
  subtitle:
    'Share the Enterprise Technology expertise your organisation requires, and we will introduce you to experienced specialists who can help advance your technology programmes and business priorities.',
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
  heading: 'Strengthening Software Quality & Delivery',
  content: 'Support faster releases and dependable digital experiences with skilled automation engineers, SDETs, and performance testing specialists who bring quality into every stage of development.',
},
    title: 'Quality Engineering & Testing Professionals',
    subtitle: 'SDETs, Test Automation & Performance Experts',
    icon: 'CheckCircle2',
    positioning: 'Quality Engineering Talent',
    
    heroDesc: 'Strengthen your technology teams with skilled QA and testing specialists who enhance software quality, expand automation capabilities, optimize performance, and support dependable releases.',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Quality Assurance & Testing Specialists Available',
  description:
    'We help businesses build high-performing technology teams by connecting them with experienced engineers, architects, and testing professionals aligned with their systems and delivery needs.',
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialist Quality Assurance & Testing Capabilities',
  description:
    'Our talent search focuses on proven expertise across essential testing disciplines and quality-focused delivery practices.',
},

technologyStack: {
  label: 'TECHNOLOGY EXPERTISE',
  heading: 'Technology Platforms Our Specialists Support',
  description:
    'Our candidates bring hands-on experience across leading technology environments, assessed through a thorough technical screening process.',
},

businessImpact: {
  label: 'REAL-WORLD APPLICATIONS',
  heading: 'Quality Engineering & Testing Talent for Diverse Business Needs',
  description:
    'We connect businesses with experienced QA professionals equipped to support critical testing initiatives across modern digital environments.',
  items: [
    {
      title: 'CI/CD Quality Automation',
      description:
        'Skilled professionals who strengthen automated regression testing across continuous delivery pipelines.',
    },
    {
      title: 'High-Volume Performance Testing',
      description:
        'Experienced specialists prepared to assess system performance under demanding workloads and peak usage.',
    },
    {
      title: 'Cross-Platform Mobile QA',
      description:
        'Qualified testers who validate mobile applications consistently across multiple devices and operating systems.',
    },
    {
      title: 'Shift-Left Quality Adoption',
      description:
        'Specialists who help embed quality practices earlier across development and delivery workflows.',
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
      'Skilled SDETs experienced with Java, Python, and JavaScript testing frameworks',
      'Strong focus on automation to expand coverage and shorten release cycles',
      'Flexible staffing options to support high-demand pre-release testing periods'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Quality Engineering Requirements to the Ideal Hire',
  description:
    'A structured approach to identifying, assessing, and matching specialized quality engineering professionals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Clarify your technical needs, project priorities, and business goals.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Connect with experienced Quality Engineering & Testing specialists from our talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Review technical skills, relevant experience, and suitability for the role.',
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Introduce professionals who match your technology environment and hiring requirements.',
    },
    {
      step: '05',
      name: 'Onboard',
      desc: 'Support the selection process and help ensure a smooth transition into the team.',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Quality Engineering & Testing Talent. Matched With Precision.',
  description:
    'We combine technical expertise with focused recruitment to connect you with high-performing, long-term talent.',
},
hiringSection: {
  label: 'Engagement Solutions',
  heading: 'FLEXIBLE RECRUITMENT OPTIONS FOR QUALITY ENGINEERING & TESTING',
  description:
    'Select an engagement approach that fits your project requirements, hiring goals, and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Recruitment',
    description:
      'Strengthen your core technology teams with experienced professionals committed to long-term growth.',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Staffing',
    description:
      'Bring in skilled specialists to meet project deadlines, manage workload peaks, and support changing requirements.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Recruitment',
    description:
      'Connect with qualified technology professionals beyond local markets through flexible remote hiring.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Secure experienced senior leaders and C-suite professionals for critical technology and business roles.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your Team",
  title: 'Build Your Quality Engineering & Testing Team with the Right Talent',
  subtitle:
    'Tell us what Quality Engineering & Testing expertise you need, and we will connect you with professionals who can help move your technology initiatives forward.',
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
  heading: 'Steering Technology Strategy & Execution',
  content: 'Drive technical excellence and organizational scale with executive technology leaders, VPs of Engineering, CTOs, and product Directors who align tech vision with commercial goals',
},
    title: 'Product & Technology Leadership  Professionals',
    subtitle: 'CTOs, Engineering Managers & Product Leads',
    icon: 'Award',
    positioning: 'Technology Leadership Talent',
   
    heroDesc: 'Connect with accomplished product and technology leaders who bring strategic vision, technical depth, and strong execution to support business growth.',
    
    roles: {
  label: 'Specialized Roles',
  heading: 'Product & Technology Leadership Talent We Provide',
  description:'We connect organizations with specialized engineers, architects, and specialists tailored to your precise tech stack.'
},

domainCompetencies: {
  label: 'Domain Competencies',
  heading: 'Specialized Product & Technology Leadership Capabilities',
  description:
    'Our talent search focuses on proven leadership expertise across critical product, technology, and organizational disciplines.',
},

technologyStack: {
  label: 'Technology LANDSCAPE',
  heading: 'Technology Environments Our Leaders Understand',
  description:
    'Our leadership candidates bring experience across diverse technology ecosystems, assessed through a structured technical and leadership evaluation process.',
},

businessImpact: {
  label: 'BUSINESS IMPACT',
  heading: 'Product & Technology Leadership Talent for Key Business Priorities',
  description:
    'We provide experienced leaders who can support critical product, technology, and organizational initiatives.',
 items: [
    {
      title: 'Engineering Team Expansion(10 to 100+)',
      description:
        'Experienced leaders equipped to scale engineering functions and build effective teams',
    },
    {
      title: 'Product Roadmap Transformation',
      description:
        'Proven professionals ready to realign product priorities with changing business objectives.',
    },
    {
      title: 'Enterprise Agile Adoption',
      description:
        'Skilled leaders prepared to guide agile transformation across teams and delivery functions.',
    },
    {
      title: 'Interim & Fractional CTO Support',
      description:
        'Experienced technology executives available to provide strategic leadership when you need it.',
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
      'Established executive search network for senior technology leadership appointments',
      'Thorough assessment of leadership approach, strategic thinking, and commercial capability',
      'High-retention leadership appointments supported by placement warranty guarantees'
    ],
    recruitmentProcess: {
  label: 'Our Recruitment Process',
  heading: 'From Product & Technology Leadership Requirements to the Right Appointment',
  description:
    'A structured approach to identifying, assessing, and matching experienced product and technology leadership professionals.',
  steps: [
    {
      step: '01',
      name: 'Define',
      desc: 'Clarify your leadership requirements, technical priorities, and business objectives.',
    },
    {
      step: '02',
      name: 'Source',
      desc: 'Identify proven Product & Technology leaders from our specialist talent network.',
    },
    {
      step: '03',
      name: 'Evaluate',
      desc: 'Assess leadership capability, industry experience, and suitability for the position.',
    },
    {
      step: '04',
      name: 'Align',
      desc: 'Present executives whose expertise matches your technology strategy and organisational needs.',
    },
    {
      step: '05',
      name: 'Appoint',
      desc: 'Support candidate selection, offer management, and a smooth onboarding process.',
    },
  ],
},

whyChoose: {
  label: 'Why Partner With Chalky',
  heading: 'Product & Technology Leadership Talent. Matched With Precision.',
  description:
    'We combine sector knowledge with focused executive recruitment to deliver high-calibre leaders who create lasting business value.',
    
},
hiringSection: {
  label: 'ENGAGEMENT OPTIONS',
  heading: 'Flexible Recruitment Models for Product & Technology Leadership',
  description:
    'Select the right hiring approach based on your leadership requirements, project timeline, and budget.',
    viewAllLabel: 'View All Hiring Solutions',
  viewAllHref: '/services',
},
hiringModels: [
  {
    type: 'Permanent Leadership Hiring',
    description:
      'Build lasting leadership teams with experienced product and technology professionals who support long-term growth',
    icon: 'Users',
    href: '/hiring-solutions/permanent-recruitment',
  },
  {
    type: 'Contract Leadership Staffing',
    description:
      'Add experienced leadership expertise for defined initiatives, transformation programmes, or critical delivery periods.',
    icon: 'Clock',
    href: '/hiring-solutions/contract-recruitment',
  },
  {
    type: 'Remote Leadership Hiring',
    description:
      'Access accomplished product and technology leaders across global markets through flexible remote recruitment.',
    icon: 'Globe',
    href: '/hiring-solutions/remote-recruitment',
  },
  {
    type: 'Executive Search',
    description:
      'Identify exceptional C-suite executives and senior technology leaders for high-impact strategic appointments.',
    icon: 'TrendingUp',
    href: '/hiring-solutions',
  },
],

finalCta: {
   badge: "Let's Build Your AI Team",
  title: 'Build your Product & Technology Leadership Team with the right expertise',
  subtitle:
    'Share the Product & Technology leadership capabilities you are looking for, and we will connect you with experienced professionals who can strengthen your technology strategy and support business growth.',
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
