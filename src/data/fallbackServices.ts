/** Shown when /api/services is unavailable or returns no active services (e.g. dev without MongoDB). */
export interface FallbackServiceRecord {
  _id: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
  category: string;
  status: 'ACTIVE';
  featured: boolean;
  order: number;
  icon?: string;
}

export const FALLBACK_SERVICES: FallbackServiceRecord[] = [
  {
    _id: 'fb-end-to-end',
    title: 'End-to-End Solution Implementation',
    description:
      'Comprehensive delivery from strategy to execution, ensuring seamless integration across systems, processes, and teams.',
    slug: 'end-to-end-solution-implementation',
    category: 'Implementation',
    status: 'ACTIVE',
    featured: true,
    features: [
      'Strategy-to-execution delivery',
      'Seamless system/process/team integration',
      'Cross-functional execution',
      'Change management support',
      'Continuous improvement',
      'Risk mitigation throughout lifecycle',
    ],
    order: 1,
    icon: 'Brain',
  },
  {
    _id: 'fb-ai-bi',
    title: 'AI - Powered Business Intelligence',
    description:
      'Transform raw data into actionable insights using advanced analytics, predictive modeling, and intelligent dashboards.',
    slug: 'ai-powered-business-intelligence',
    category: 'Analytics',
    status: 'ACTIVE',
    featured: true,
    features: [
      'Advanced analytics & dashboards',
      'Predictive modeling',
      'Data visualization',
      'Automated reporting',
      'Real-time insights',
      'KPI tracking',
    ],
    order: 2,
    icon: 'TrendingUp',
  },
  {
    _id: 'fb-agentic',
    title: 'Agentic AI Systems',
    description:
      'Deploy autonomous AI agents that plan, decide, and execute tasks with minimal human intervention—driving efficiency and innovation.',
    slug: 'agentic-ai-systems',
    category: 'AI Systems',
    status: 'ACTIVE',
    featured: true,
    features: [
      'Autonomous AI agents',
      'Task planning & execution',
      'Minimal human intervention',
      'Continuous learning',
      'Workflow automation',
      'Innovation acceleration',
    ],
    order: 3,
    icon: 'Zap',
  },
  {
    _id: 'fb-data',
    title: 'Data-Driven Analytics',
    description:
      'Leverage structured and unstructured data to uncover trends, optimize operations, and support informed decision-making.',
    slug: 'data-driven-analytics',
    category: 'Analytics',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Structured/unstructured data analysis',
      'Trend discovery',
      'Operational optimization',
      'Decision support',
      'Custom analytics solutions',
      'Data pipeline design',
    ],
    order: 4,
    icon: 'TrendingUp',
  },
  {
    _id: 'fb-bot',
    title: 'BOT Setup (Build-Operate-Transfer)',
    description:
      'Establish offshore delivery centers with a clear path to ownership, enabling scalability, cost efficiency, and long-term control.',
    slug: 'bot-setup',
    category: 'Setup',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Offshore delivery center setup',
      'Build-operate-transfer model',
      'Scalability & cost efficiency',
      'Knowledge transfer',
      'Ownership transition',
      'Long-term control',
    ],
    order: 5,
    icon: 'Brain',
  },
  {
    _id: 'fb-legacy',
    title: 'Legacy to Future Transformation',
    description:
      'Modernize outdated systems and processes by migrating to cloud-native, AI-enabled architectures that future-proof your business.',
    slug: 'legacy-to-future-transformation',
    category: 'Transformation',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Legacy system modernization',
      'Cloud-native migration',
      'AI-enabled architectures',
      'Process reengineering',
      'Future-proofing',
      'Risk-managed transformation',
    ],
    order: 6,
    icon: 'Zap',
  },
  {
    _id: 'fb-mainframe',
    title: 'AI Led Mainframe Modernization',
    description:
      "We translate Japan's most critical legacy systems — COBOL, JCL, and Fujitsu mainframes — into modern, maintainable architectures without disrupting live operations. Our engineers have hands-on mainframe experience and the Japanese language skills to work directly with your teams.",
    slug: 'mainframe-modernization',
    category: 'Mainframe',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Legacy code analysis, conversion, and documentation in English and Japanese',
      'Zero-downtime migration strategies for mission-critical banking and insurance systems',
      'End-to-end delivery responsibility — not just consulting advice',
    ],
    order: 7,
    icon: 'Server',
  },
  {
    _id: 'fb-bre',
    title: 'Business requirement engineering',
    description:
      'Getting requirements right is the hardest part of any project. Our BRE practice works both directions — backward (reverse-engineering requirements from existing systems) and forward (defining requirements for new capabilities) — so nothing falls through the gaps.',
    slug: 'business-requirement-engineering',
    category: 'Requirements',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Backward BRE: extract and document requirements from undocumented legacy systems',
      'Forward BRE: structured elicitation, gap analysis, and requirement traceability matrices',
      'Bilingual documentation for seamless handoff between Japan and global teams',
    ],
    order: 8,
    icon: 'FileText',
  },
  {
    _id: 'fb-tbr',
    title: 'Techno-business rationalization',
    description:
      'Many enterprises carry IT portfolios filled with overlapping, underused, or misaligned systems. We cut through the complexity — mapping your technology landscape to real business outcomes and identifying where to invest, consolidate, or retire.',
    slug: 'techno-business-rationalization',
    category: 'Strategy',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Application portfolio assessment: value mapping, redundancy identification, and prioritization',
      'Cost-benefit analysis and business case development for rationalization decisions',
      'Roadmap to a leaner, higher-performing technology estate',
    ],
    order: 9,
    icon: 'PieChart',
  },
  {
    _id: 'fb-sysdev',
    title: 'System development',
    description:
      'We build enterprise systems from the ground up — or extend and integrate what you already have. Our development teams work on-site or remotely, embedded with your stakeholders, with Vision AI holding full accountability for delivery quality and timelines.',
    slug: 'system-development',
    category: 'Development',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Custom application development across Java, Python, cloud-native, and modern web stacks',
      'Legacy system integration: APIs, middleware, and data migration',
      'Agile delivery with bilingual sprint reviews, documentation, and stakeholder reporting',
    ],
    order: 11,
    icon: 'Code2',
  },
  {
    _id: 'fb-pm',
    title: 'Program management',
    description:
      'Large transformation programs fail not from lack of talent, but lack of coordination. Our program managers bring structure, visibility, and accountability to complex, multi-workstream IT programs — bridging the communication gap between Japanese executives and engineering teams.',
    slug: 'program-management',
    category: 'Program Management',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Program governance frameworks: steering committees, RAID logs, and milestone tracking',
      'Bilingual status reporting and executive dashboard management',
      'Vendor coordination, budget oversight, and schedule risk management',
    ],
    order: 12,
    icon: 'Kanban',
  },
  {
    _id: 'fb-ba',
    title: 'Business Analytics',
    description:
      'Our business analysts sit at the intersection of your business and your technology teams. Bilingual and domain-trained, they translate business intent into precise technical specifications — and keep both sides aligned throughout delivery.',
    slug: 'business-analysts',
    category: 'Consulting',
    status: 'ACTIVE',
    featured: false,
    features: [
      'Stakeholder workshops, process mapping, and as-is / to-be analysis',
      'User stories, use cases, and functional specifications in English and Japanese',
      'UAT planning, test scenario design, and sign-off facilitation',
    ],
    order: 13,
    icon: 'Users',
  },
];

export function sortServicesByOrder<T extends { order?: number }>(list: T[]): T[] {
  return [...list].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
