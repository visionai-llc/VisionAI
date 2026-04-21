/** Leadership copy for About — text only (no photos). */

export interface LeadershipMember {
  id: string;
  /** Primary title (e.g. Founder & CEO) */
  title: string;
  /** Teal accent line (e.g. name or function line) */
  accent: string;
  /** Supporting description */
  description: string;
  /** First card uses dark panel styling */
  variant?: 'featured';
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: '1',
    title: 'Founder & CEO',
    accent: 'Uma Kalikiri',
    description: 'Strategic vision, Japan-India business',
    variant: 'featured',
  },
  {
    id: '2',
    title: 'COO - Japan',
    accent: 'Operations Lead',
    description: 'Japan operations, client delivery',
  },
  {
    id: '3',
    title: 'CTO',
    accent: 'Technical Leadership',
    description: 'AI platform, technology strategy',
  },
  {
    id: '4',
    title: 'Legacy Modernization',
    accent: 'Digital Transformation',
    description: 'Transforming businesses',
  },
];
