export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  label: string;
  icon: string;
  desc: string;
}

export interface Industry {
  slug: string;
  label: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Remote' | 'Onsite' | 'Hybrid';
  category: string;
  salary: string;
  posted: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
