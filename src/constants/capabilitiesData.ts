export interface RoleDetail {
  title: string;
  focus: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface CapabilityData {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  positioning: string;
  heroDesc: string;
  introHeading: string;
  introContent: string;
  rolesDetailed: RoleDetail[];
  expertiseTags: string[];
  techEcosystem: TechGroup[];
  useCases: string[];
  whyChooseList: string[];
  features: { title: string; desc: string }[];
}

export const CAPABILITIES_DATA: CapabilityData[] = [
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    subtitle: 'Specialized AI, Deep Learning & LLM Talent',
    icon: 'Cpu',
    positioning: 'AI & Machine Learning Talent',
    heroDesc: 'Connect with highly skilled AI and machine learning professionals who help organizations build intelligent solutions, accelerate innovation, and unlock new possibilities through emerging technologies.',
    introHeading: 'Building Teams for the AI-Driven Future',
    introContent: 'From Generative AI and large language models to machine learning and intelligent automation, we connect organizations with specialized professionals who bring the technical expertise needed to turn AI opportunities into real-world business outcomes.',
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
    expertiseTags: [
      'Generative AI', 'Machine Learning', 'Deep Learning', 'Large Language Models',
      'Natural Language Processing', 'Computer Vision', 'Predictive Analytics',
      'Intelligent Automation', 'MLOps', 'AI Agents', 'AI Engineering', 'Model Development'
    ],
    techEcosystem: [
      { category: 'Languages', items: ['Python', 'Java', 'R', 'TypeScript', 'C++', 'SQL'] },
      { category: 'AI & ML Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Keras', 'ONNX'] },
      { category: 'GenAI & LLM Tools', items: ['LLMs', 'RAG Pipelines', 'LangChain', 'AI Agents', 'Vector Databases', 'Prompt Engineering'] },
      { category: 'Cloud AI', items: ['Azure AI Services', 'AWS Bedrock / SageMaker', 'Google Cloud Vertex AI'] },
      { category: 'Data & MLOps', items: ['Databricks', 'Spark', 'MLflow', 'Kubeflow', 'Pinecone', 'Weaviate'] }
    ],
    useCases: [
      'Generative AI Applications', 'AI-Powered Automation', 'Intelligent Chatbots & Assistants',
      'Recommendation Systems', 'Predictive Analytics', 'Document Intelligence',
      'Computer Vision & OCR', 'Natural Language Processing', 'Enterprise AI Integration', 'AI-Powered Products'
    ],
    whyChooseList: [
      'AI & technology-focused recruitment specialization',
      'Specialized talent sourcing across global AI networks',
      'Deep understanding of technical AI/ML roles & stacks',
      'Pre-screened candidates evaluated by domain experts',
      'Flexible hiring models (Permanent, Contract, Remote)',
      'Fast candidate identification within 48-72 hours',
      'Global talent reach spanning UK, EU, US, and Asia',
      'Long-term talent partnerships for scaling tech teams'
    ],
    features: [
      { title: 'Generative AI & LLM Specialists', desc: 'Engineers experienced in fine-tuning foundation models, RAG pipelines, and enterprise AI integration.' },
      { title: 'MLOps & Scalable Deployment', desc: 'Experts who take AI models from research prototypes to production-grade, low-latency microservices.' },
      { title: 'Computer Vision & NLP', desc: 'Talent specializing in document intelligence, speech synthesis, image segmentation, and multi-modal AI.' }
    ]
  },
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    subtitle: 'Full-Stack, Backend & Frontend Developers',
    icon: 'Code2',
    positioning: 'Software Engineering Talent',
    heroDesc: 'Build high-performing engineering teams with experienced developers and technical specialists across modern programming languages, frameworks, and architectures.',
    introHeading: 'Building Teams for Digital Innovation',
    introContent: 'From high-throughput cloud microservices to intuitive mobile and frontend interfaces, we connect enterprises with engineers who write clean, scalable, and maintainable software.',
    rolesDetailed: [
      { title: 'Full Stack Developer', focus: 'End-to-end web & product development' },
      { title: 'Frontend Developer', focus: 'Modern UI/UX & responsive web apps' },
      { title: 'Backend Developer', focus: 'High-scale APIs, microservices & databases' },
      { title: 'Software Engineer', focus: 'Core algorithms & application logic' },
      { title: 'Java Developer', focus: 'Enterprise Java, Spring Boot & microservices' },
      { title: 'Python Developer', focus: 'Python backend, Django, FastAPI & scripting' },
      { title: '.NET Developer', focus: 'C#, .NET Core & enterprise Microsoft stack' },
      { title: 'Node.js Developer', focus: 'Asynchronous JavaScript backend APIs' },
      { title: 'React Developer', focus: 'React, Next.js & modern frontend ecosystems' },
      { title: 'Mobile App Developer', focus: 'iOS, Android, React Native & Flutter' },
      { title: 'Technical Lead', focus: 'Engineering team guidance & code quality' },
      { title: 'Solution Architect', focus: 'System design, scalability & tech strategy' }
    ],
    expertiseTags: [
      'Microservices', 'REST & GraphQL APIs', 'Frontend Systems', 'Cloud Native Apps',
      'Distributed Systems', 'Clean Architecture', 'Event-Driven Architecture',
      'Mobile Development', 'DevOps Integration', 'Design Patterns'
    ],
    techEcosystem: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Java / Spring', 'Python / FastAPI', '.NET Core', 'Go', 'Rust'] },
      { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
      { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'] },
      { category: 'Architecture', items: ['Microservices', 'GraphQL', 'gRPC', 'Serverless', 'Kafka'] }
    ],
    useCases: [
      'SaaS Platform Development', 'Enterprise Application Modernization', 'Mobile App Launch',
      'High-Frequency API Gateways', 'E-Commerce Engines', 'Fintech Core Banking Integration'
    ],
    whyChooseList: [
      'Proven track record in scaling engineering teams',
      'Evaluation of modern frameworks and clean code standards',
      'Pre-vetted developers across senior and lead tiers',
      'Rapid shortlist turnaround in under 5 business days',
      'Customized recruitment for specific tech stacks',
      'Support for full lifecycle product development'
    ],
    features: [
      { title: 'Modern Frontend & Mobile', desc: 'Craft responsive, intuitive user interfaces with Next.js, React, React Native, and Flutter.' },
      { title: 'High-Throughput Backend', desc: 'Architect resilient APIs and serverless microservices handling millions of requests with ease.' },
      { title: 'Technical Leadership', desc: 'Proven Tech Leads and Architects who drive clean code, pair programming, and engineering rigor.' }
    ]
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Cloud Infrastructure & Automation Experts',
    icon: 'Cloud',
    positioning: 'Cloud & DevOps Talent',
    heroDesc: 'Access skilled cloud and DevOps professionals who enable scalable infrastructure, automated delivery, resilient systems, and modern cloud transformation.',
    introHeading: 'Building Scalable & Resilient Infrastructure',
    introContent: 'Empower your engineering teams with cloud architects, site reliability engineers, and DevOps specialists who automate CI/CD pipelines and guarantee 99.99% system availability.',
    rolesDetailed: [
      { title: 'Cloud Engineer', focus: 'Cloud environment management & migration' },
      { title: 'Cloud Architect', focus: 'Enterprise cloud strategy & landing zones' },
      { title: 'DevOps Engineer', focus: 'CI/CD automation & release engineering' },
      { title: 'AWS Engineer', focus: 'AWS cloud services & infrastructure' },
      { title: 'Azure Engineer', focus: 'Microsoft Azure cloud architecture' },
      { title: 'GCP Engineer', focus: 'Google Cloud Platform ecosystems' },
      { title: 'Kubernetes Engineer', focus: 'Container orchestration & service meshes' },
      { title: 'Site Reliability Engineer', focus: 'System availability, SLIs/SLOs & monitoring' },
      { title: 'Platform Engineer', focus: 'Internal developer platforms & tooling' },
      { title: 'Infrastructure Engineer', focus: 'IaC, Terraform & network automation' }
    ],
    expertiseTags: [
      'Infrastructure as Code', 'Container Orchestration', 'CI/CD Automation',
      'Site Reliability Engineering', 'Cloud Migration', 'Multi-Cloud Architecture',
      'Observability & APM', 'FinOps & Cost Optimization'
    ],
    techEcosystem: [
      { category: 'Cloud Providers', items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform'] },
      { category: 'Containerization', items: ['Kubernetes', 'Docker', 'Helm', 'Istio'] },
      { category: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'] },
      { category: 'CI/CD Pipelines', items: ['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD'] },
      { category: 'Monitoring & Logs', items: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'] }
    ],
    useCases: [
      'Cloud Migration & Re-architecture', 'Zero-Downtime CI/CD Implementation',
      'Kubernetes Cluster Optimization', 'High-Availability Infrastructure Setup'
    ],
    whyChooseList: [
      'Certified cloud professionals (AWS, Azure, GCP certified)',
      'Expertise in security compliance and zero trust',
      'Specialized sourcing for SRE and Platform Engineering',
      'Flexible contract and permanent placement solutions'
    ],
    features: [
      { title: 'Infrastructure as Code (IaC)', desc: 'Automate zero-downtime deployments and cloud provisioning using Terraform and CloudFormation.' },
      { title: 'Site Reliability & Observability', desc: 'SRE specialists focused on 99.99% uptime, incident response, SLIs/SLOs, and APM monitoring.' },
      { title: 'Containerization & Orchestration', desc: 'Certified Kubernetes and Docker professionals building modern cloud-native service meshes.' }
    ]
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    subtitle: 'Data Engineering, BI & Analytics Specialists',
    icon: 'Database',
    positioning: 'Data & Analytics Talent',
    heroDesc: 'Connect with data professionals who transform complex information into reliable insights, intelligent decisions, and measurable business outcomes.',
    introHeading: 'Unlocking Business Value Through Data',
    introContent: 'Build data-driven organizations with engineers, architects, and analysts who design modern data lakes, real-time streaming pipelines, and self-service BI platforms.',
    rolesDetailed: [
      { title: 'Data Engineer', focus: 'Data pipelines & ETL/ELT processing' },
      { title: 'Data Analyst', focus: 'Business metrics & statistical analysis' },
      { title: 'Data Scientist', focus: 'Predictive modeling & machine learning' },
      { title: 'BI Developer', focus: 'Dashboards, reporting & data visualization' },
      { title: 'Analytics Engineer', focus: 'Data modeling with dbt & warehouse transformation' },
      { title: 'Big Data Engineer', focus: 'Spark, Hadoop & high-volume data streams' },
      { title: 'Data Architect', focus: 'Enterprise data modeling & lakehouse design' },
      { title: 'ETL Developer', focus: 'Data integration & pipeline maintenance' },
      { title: 'Database Administrator', focus: 'Database tuning, backup & performance' },
      { title: 'Data Governance Specialist', focus: 'Data quality, lineage & GDPR compliance' }
    ],
    expertiseTags: [
      'Modern Data Lakehouse', 'Real-Time Streaming', 'ETL/ELT Transformation',
      'Business Intelligence', 'Data Governance', 'Predictive Modeling',
      'Data Warehouse Optimization', 'Data Quality Management'
    ],
    techEcosystem: [
      { category: 'Data Warehouses', items: ['Snowflake', 'Databricks', 'Google BigQuery', 'Amazon Redshift'] },
      { category: 'ETL & Transformation', items: ['dbt', 'Apache Spark', 'Airflow', 'Fivetran'] },
      { category: 'Business Intelligence', items: ['Power BI', 'Tableau', 'Looker', 'Metabase'] },
      { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'Oracle', 'Cassandra'] }
    ],
    useCases: [
      'Enterprise Data Warehouse Migration', 'Executive Dashboard Development',
      'Customer Analytics & Churn Prediction', 'Real-Time Event Stream Processing'
    ],
    whyChooseList: [
      'Specialized sourcing across Snowflake, Databricks, and dbt ecosystems',
      'Vetted data architects with proven enterprise scale experience',
      'Rigorous evaluation of SQL, data modeling, and pipeline design'
    ],
    features: [
      { title: 'Modern Data Stack & Lakes', desc: 'Build scalable data pipelines, warehouses, and real-time streaming architectures.' },
      { title: 'Advanced Business Intelligence', desc: 'Transform raw enterprise databases into actionable executive dashboards and self-service analytics.' },
      { title: 'Data Governance & Compliance', desc: 'Ensure data quality, lineage, privacy, and regulatory compliance across all storage layers.' }
    ]
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Security Infrastructure, SOC & Risk Experts',
    icon: 'ShieldCheck',
    positioning: 'Cybersecurity Talent',
    heroDesc: 'Strengthen your security capabilities with specialized professionals across cybersecurity, cloud security, application protection, governance, and risk.',
    introHeading: 'Protecting Enterprise Assets & Reputation',
    introContent: 'Guard against evolving cyber threats with certified security engineers, SOC analysts, and penetration testers who enforce robust security postures and regulatory compliance.',
    rolesDetailed: [
      { title: 'Cybersecurity Engineer', focus: 'Security posture & network defense' },
      { title: 'Security Analyst', focus: 'Vulnerability assessment & monitoring' },
      { title: 'SOC Analyst', focus: '24/7 incident detection & response' },
      { title: 'Cloud Security Engineer', focus: 'AWS/Azure cloud security architecture' },
      { title: 'Application Security Engineer', focus: 'SAST/DAST & DevSecOps pipelines' },
      { title: 'Security Architect', focus: 'Zero Trust architecture & enterprise defense' },
      { title: 'Penetration Tester', focus: 'Ethical hacking & exploit testing' },
      { title: 'GRC Specialist', focus: 'Governance, risk & compliance auditing' },
      { title: 'IAM Engineer', focus: 'Identity, access & single sign-on (SSO)' },
      { title: 'Information Security Manager', focus: 'InfoSec policy & CISO leadership' }
    ],
    expertiseTags: [
      'Zero Trust Architecture', 'SOC Operations', 'Penetration Testing',
      'DevSecOps', 'Cloud Security Posture', 'Identity & Access Management',
      'ISO 27001 & SOC2 Compliance', 'Incident Response'
    ],
    techEcosystem: [
      { category: 'SIEM & SOAR', items: ['Splunk', 'Microsoft Sentinel', 'QRadar', 'Elastic SIEM'] },
      { category: 'Endpoint & Network', items: ['CrowdStrike', 'Palo Alto', 'Fortinet', 'Zscaler'] },
      { category: 'IAM & Auth', items: ['Okta', 'Ping Identity', 'Azure AD', 'CyberArk'] },
      { category: 'AppSec', items: ['Burp Suite', 'SonarQube', 'Snyk', 'Veracode'] }
    ],
    useCases: [
      '24/7 SOC Operations Setup', 'SOC2 & ISO 27001 Audit Readiness',
      'Cloud Security Hardening', 'DevSecOps Pipeline Integration'
    ],
    whyChooseList: [
      'Access to cleared and certified security specialists (CISSP, CISM, CEH)',
      'Rigorous vetting of ethical security testing credentials',
      'Rapid placement for emergency incident response needs'
    ],
    features: [
      { title: 'Threat Intelligence & Detection', desc: '24/7 SOC Analysts and Incident Responders protecting critical enterprise assets from breaches.' },
      { title: 'AppSec & DevSecOps', desc: 'Embed security into code pipelines with SAST/DAST testing and vulnerability assessments.' },
      { title: 'Identity & Access Management (IAM)', desc: 'Enforce strict Zero Trust architecture, RBAC policies, and Single Sign-On integrations.' }
    ]
  },
  {
    slug: 'enterprise-technology',
    title: 'Enterprise Technology',
    subtitle: 'SAP, Salesforce & Integration Specialists',
    icon: 'Building2',
    positioning: 'Enterprise Technology Talent',
    heroDesc: 'Find experienced technology professionals who support enterprise modernization, systems integration, digital transformation, and large-scale technology initiatives.',
    introHeading: 'Accelerating Enterprise Modernization',
    introContent: 'Transform business operations with experienced consultants and developers specializing in SAP S/4HANA, Salesforce, MuleSoft, Workday, and enterprise integration.',
    rolesDetailed: [
      { title: 'Enterprise Architect', focus: 'Enterprise technology roadmaps & standards' },
      { title: 'Solution Architect', focus: 'Custom enterprise software solutions' },
      { title: 'Technical Architect', focus: 'Technical design & system integration' },
      { title: 'SAP Consultant', focus: 'SAP S/4HANA, FICO, MM, SD modules' },
      { title: 'Salesforce Developer', focus: 'Apex, LWC, Sales Cloud & Service Cloud' },
      { title: 'CRM Consultant', focus: 'CRM implementation & workflow optimization' },
      { title: 'ERP Consultant', focus: 'ERP migration & business process design' },
      { title: 'Integration Engineer', focus: 'MuleSoft, Kafka & API integration' },
      { title: 'API Developer', focus: 'REST/SOAP API gateways & microservices' },
      { title: 'Technical Consultant', focus: 'Enterprise tech advice & customization' }
    ],
    expertiseTags: [
      'ERP Modernization', 'CRM Customization', 'Enterprise API Integration',
      'Digital Transformation', 'Legacy System Migration', 'Business Process Design'
    ],
    techEcosystem: [
      { category: 'ERP Systems', items: ['SAP S/4HANA', 'Oracle Cloud ERP', 'Microsoft Dynamics 365'] },
      { category: 'CRM & Cloud', items: ['Salesforce', 'ServiceNow', 'Workday'] },
      { category: 'Integration', items: ['MuleSoft', 'Apache Kafka', 'Dell Boomi', 'Apigee'] }
    ],
    useCases: [
      'SAP S/4HANA Cloud Migration', 'Salesforce Multi-Cloud Implementation',
      'MuleSoft API Gateway Integration', 'Enterprise ERP Rollout'
    ],
    whyChooseList: [
      'Pre-vetted certified consultants (SAP certified, Salesforce MVPs)',
      'Proven experience in global enterprise transformation projects',
      'Tailored permanent and contract consultant deployment'
    ],
    features: [
      { title: 'ERP & CRM Ecosystems', desc: 'Certified consultants driving SAP, Salesforce, ServiceNow, and Workday implementations.' },
      { title: 'Systems Integration & APIs', desc: 'Connect legacy systems with cloud platforms using MuleSoft, Kafka, and microservice gateways.' },
      { title: 'Legacy Modernization', desc: 'Architects guiding enterprise migrations from legacy monoliths to agile cloud environments.' }
    ]
  },
  {
    slug: 'quality-engineering',
    title: 'Quality Engineering & Testing',
    subtitle: 'SDETs, Test Automation & Performance Experts',
    icon: 'CheckCircle2',
    positioning: 'Quality Engineering Talent',
    heroDesc: 'Build quality-focused teams with testing professionals who improve software reliability, automation coverage, performance, and release confidence.',
    introHeading: 'Elevating Software Reliability & Speed',
    introContent: 'Accelerate release cycles and guarantee flawless user experiences with automation engineers, SDETs, and performance testers who embed quality into every sprint.',
    rolesDetailed: [
      { title: 'QA Engineer', focus: 'Test planning & execution' },
      { title: 'Automation Tester', focus: 'Automated test script creation' },
      { title: 'SDET', focus: 'Software design & test framework engineering' },
      { title: 'Performance Tester', focus: 'Stress testing & bottleneck analysis' },
      { title: 'Manual Tester', focus: 'Exploratory & functional test verification' },
      { title: 'API Tester', focus: 'REST/GraphQL API test automation' },
      { title: 'Mobile Tester', focus: 'iOS & Android app testing' },
      { title: 'Test Architect', focus: 'Enterprise test strategy & framework architecture' },
      { title: 'QA Lead', focus: 'QA team management & release metrics' }
    ],
    expertiseTags: [
      'Shift-Left Testing', 'Test Automation Frameworks', 'Performance & Load Testing',
      'Continuous Integration Testing', 'API Automation', 'Zero-Defect Delivery'
    ],
    techEcosystem: [
      { category: 'Automation Tools', items: ['Selenium', 'Cypress', 'Playwright', 'Appium'] },
      { category: 'Performance Tools', items: ['JMeter', 'k6', 'Gatling', 'LoadRunner'] },
      { category: 'API & CI Testing', items: ['Postman', 'RestAssured', 'JUnit', 'TestNG'] }
    ],
    useCases: [
      'CI/CD Automated Regression Testing', 'High-Load Event Performance Benchmarking',
      'Mobile App Multi-Device Testing', 'Shift-Left QA Culture Implementation'
    ],
    whyChooseList: [
      'Specialized SDETs proficient in Java, Python, and JavaScript frameworks',
      'Focus on automation coverage and reduction of release cycle times',
      'Flexible staffing for peak pre-release testing cycles'
    ],
    features: [
      { title: 'Automation Engineering (SDET)', desc: 'Build scalable test automation frameworks for web, mobile, and API layers in CI/CD.' },
      { title: 'Performance & Stress Testing', desc: 'Benchmark system limits under peak loads using JMeter, Locust, and k6.' },
      { title: 'End-to-End Quality Strategy', desc: 'Define QA metrics, shift-left testing practices, and zero-defect release criteria.' }
    ]
  },
  {
    slug: 'product-technology-leadership',
    title: 'Product & Technology Leadership',
    subtitle: 'CTOs, Engineering Managers & Product Leads',
    icon: 'Award',
    positioning: 'Technology Leadership Talent',
    heroDesc: 'Identify experienced technology and product leaders who bring strategic direction, technical expertise, and execution excellence to growing organizations.',
    introHeading: 'Steering Technology Strategy & Execution',
    introContent: 'Drive technical excellence and organizational scale with executive technology leaders, VPs of Engineering, CTOs, and Product Directors who align tech vision with commercial goals.',
    rolesDetailed: [
      { title: 'Product Manager', focus: 'Product strategy & backlog prioritization' },
      { title: 'Technical Product Manager', focus: 'Technical specs & developer alignment' },
      { title: 'Project Manager', focus: 'Timeline, budget & scope management' },
      { title: 'Program Manager', focus: 'Multi-stream initiative governance' },
      { title: 'Scrum Master', focus: 'Agile coaching & sprint facilitation' },
      { title: 'Engineering Manager', focus: 'Engineering talent mentorship & delivery' },
      { title: 'Delivery Manager', focus: 'Client delivery & operational cadence' },
      { title: 'Technology Director', focus: 'Departmental leadership & tech roadmap' },
      { title: 'CTO', focus: 'Executive technology vision & architecture' },
      { title: 'VP Engineering', focus: 'Scaling engineering teams & organizational design' }
    ],
    expertiseTags: [
      'Executive Leadership', 'Product Strategy', 'Agile Transformation',
      'Engineering Culture', 'Scaling Tech Teams', 'OKR Governance'
    ],
    techEcosystem: [
      { category: 'Agile & Governance', items: ['Agile / Scrum', 'Kanban', 'SAFe', 'OKRs'] },
      { category: 'Management Tools', items: ['Jira', 'Confluence', 'Asana', 'Productboard'] },
      { category: 'Product Frameworks', items: ['User Research', 'A/B Testing', 'Roadmapping'] }
    ],
    useCases: [
      'Engineering Division Scaling (10 to 100+)', 'Product Roadmap Realignment',
      'Agile Transformation Rollout', 'Interim & Fractional CTO Placement'
    ],
    whyChooseList: [
      'Discreet executive search network for senior technology leaders',
      'Deep evaluation of leadership style and commercial acumen',
      'High-retention leadership placements backed by warranty guarantees'
    ],
    features: [
      { title: 'Executive Technology Leadership', desc: 'Vetted CTOs and VPs of Engineering capable of scaling technology divisions and driving strategy.' },
      { title: 'Product Vision & Roadmap', desc: 'Technical Product Managers who bridge business goals, user feedback, and engineering execution.' },
      { title: 'Agile Delivery & Program Management', desc: 'Scrum Masters and Program Managers who optimize sprint velocity and delivery cadence.' }
    ]
  }
];
