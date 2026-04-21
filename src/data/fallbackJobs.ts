/** Shown when /api/jobs is unavailable or returns no open roles (e.g. dev without MongoDB). */

export interface FallbackJobRecord {
  _id: string;
  role: string;
  description: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  salary: string;
  status: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  featured: boolean;
  slug: string;
  order: number;
}

export const FALLBACK_JOBS: FallbackJobRecord[] = [
  {
    _id: 'fb-job-ga',
    role: 'General Affairs Representative',
    description:
      'Support company operations and administration. Requires Japanese language skills and organizational ability.',
    location: 'Japan',
    type: 'FULL_TIME',
    department: 'General Affairs',
    experience: 'Entry level to Mid level',
    salary: 'JPY 3M',
    status: 'OPEN',
    featured: true,
    slug: 'general-affairs-representative',
    requirements: [
      'Fluent in Japanese and English',
      'Strong organizational and communication skills',
      'Experience in general affairs or administration preferred',
    ],
    responsibilities: [
      'Manage daily administrative operations',
      'Coordinate with various departments',
      'Handle documentation and reporting',
      'Support office management tasks',
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Transportation allowance',
      'Professional development opportunities',
    ],
    order: 1,
  },
  {
    _id: 'fb-job-ai',
    role: 'Bilingual Generative AI Developer',
    description:
      'Develop and deploy generative AI models. Requires bilingual (Japanese/English) skills.',
    location: 'Japan',
    type: 'FULL_TIME',
    department: 'Engineering',
    experience: 'Mid level to Senior',
    salary: 'JPY 6M',
    status: 'OPEN',
    featured: true,
    slug: 'bilingual-generative-ai-developer',
    requirements: [
      'Experience with AI/ML and generative models',
      'Fluent in Japanese and English',
      'Strong programming skills (Python preferred)',
    ],
    responsibilities: [
      'Develop and implement AI models',
      'Work with cross-functional teams',
      'Optimize model performance',
      'Stay updated with latest AI research',
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Health insurance',
      'Flexible working hours',
      'AI conference attendance',
    ],
    order: 2,
  },
  {
    _id: 'fb-job-pm',
    role: 'Bilingual Program Manager',
    description:
      'Lead AI projects and manage cross-functional teams. Requires bilingual (Japanese/English) skills.',
    location: 'Japan',
    type: 'FULL_TIME',
    department: 'Management',
    experience: 'Senior level',
    salary: 'JPY 8M to 10M',
    status: 'OPEN',
    featured: true,
    slug: 'bilingual-program-manager',
    requirements: [
      'Project management experience',
      'Fluent in Japanese and English',
      'Strong leadership and communication skills',
    ],
    responsibilities: [
      'Lead AI project implementation',
      'Manage cross-functional teams',
      'Coordinate with clients and stakeholders',
      'Ensure project delivery on time and budget',
    ],
    benefits: [
      'Competitive salary',
      'Performance bonuses',
      'Health insurance',
      'Company car',
      'Leadership training programs',
    ],
    order: 3,
  },
];

export function sortJobsByOrder<T extends { order?: number }>(list: T[]): T[] {
  return [...list].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
