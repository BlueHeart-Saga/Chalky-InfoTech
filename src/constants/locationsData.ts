export interface LocationData {
  slug: string;
  city: string;
  service: string;
  description: string;
  keywords?: string[];
  areaServedType?: 'City' | 'Country';
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'ai-machine-learning-recruitment-services-uk',
    city: 'United Kingdom',
    service: 'AI & Machine Learning Recruitment Services',
    description: 'Hire AI engineers, machine learning engineers, generative AI specialists, LLM engineers and data scientists across the UK with Chalky Infotech. We provide permanent, contract and specialist recruitment support for AI and machine learning teams.',
    keywords: [
      'AI & Machine Learning Recruitment Services UK',
      'AI & Machine Learning Recruitment Services UK recruitment',
      'AI & Machine Learning Recruitment Services UK staffing',
      'AI Engineer',
      'Machine Learning Engineer',
      'Generative AI Engineer',
      'LLM Engineer',
      'Data Scientist',
    ],
    areaServedType: 'Country',
  },
  {
    slug: 'it-recruitment-services-chennai',
    city: 'Chennai',
    service: 'IT Recruitment Services',
    description: 'Hire top-tier IT talent and pre-vetted engineers in Chennai with Chalky Infotech. We specialize in contract staffing and permanent IT recruitment tailored to Chennai\'s rapidly growing tech ecosystem.',
  },
  {
    slug: 'tech-staffing-london',
    city: 'London',
    service: 'Tech Staffing',
    description: 'Connect with elite software developers, cloud architects, and tech leaders in London. Chalky Infotech provides premium tech staffing and executive search services across the UK.',
  }
];
