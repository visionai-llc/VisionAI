import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from '../server/models/Service.js';

dotenv.config();

const servicesData = [
  {
    title: 'End-to-End Solution Implementation',
    description: 'Comprehensive delivery from strategy to execution, ensuring seamless integration across systems, processes, and teams.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: true,
    slug: 'end-to-end-solution-implementation',
    category: 'Implementation',
    features: [
      'Strategy-to-execution delivery',
      'Seamless system/process/team integration',
      'Cross-functional execution',
      'Change management support',
      'Continuous improvement',
      'Risk mitigation throughout lifecycle'
    ],
    order: 1,
    icon: 'Brain'
  },
  {
    title: 'AI-Powered Business Intelligence',
    description: 'Transform raw data into actionable insights using advanced analytics, predictive modeling, and intelligent dashboards.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: true,
    slug: 'ai-powered-business-intelligence',
    category: 'Analytics',
    features: [
      'Advanced analytics & dashboards',
      'Predictive modeling',
      'Data visualization',
      'Automated reporting',
      'Real-time insights',
      'KPI tracking'
    ],
    order: 2,
    icon: 'TrendingUp'
  },
  {
    title: 'Agentic AI Systems',
    description: 'Deploy autonomous AI agents that plan, decide, and execute tasks with minimal human intervention—driving efficiency and innovation.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: true,
    slug: 'agentic-ai-systems',
    category: 'AI Systems',
    features: [
      'Autonomous AI agents',
      'Task planning & execution',
      'Minimal human intervention',
      'Continuous learning',
      'Workflow automation',
      'Innovation acceleration'
    ],
    order: 3,
    icon: 'Zap'
  },
  {
    title: 'Data-Driven Analytics',
    description: 'Leverage structured and unstructured data to uncover trends, optimize operations, and support informed decision-making.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'data-driven-analytics',
    category: 'Analytics',
    features: [
      'Structured/unstructured data analysis',
      'Trend discovery',
      'Operational optimization',
      'Decision support',
      'Custom analytics solutions',
      'Data pipeline design'
    ],
    order: 4,
    icon: 'TrendingUp'
  },
  {
    title: 'BOT Setup (Build-Operate-Transfer)',
    description: 'Establish offshore delivery centers with a clear path to ownership, enabling scalability, cost efficiency, and long-term control.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'bot-setup',
    category: 'Setup',
    features: [
      'Offshore delivery center setup',
      'Build-operate-transfer model',
      'Scalability & cost efficiency',
      'Knowledge transfer',
      'Ownership transition',
      'Long-term control'
    ],
    order: 5,
    icon: 'Brain'
  },
  {
    title: 'Legacy to Future Transformation',
    description: 'Modernize outdated systems and processes by migrating to cloud-native, AI-enabled architectures that future-proof your business.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'legacy-to-future-transformation',
    category: 'Transformation',
    features: [
      'Legacy system modernization',
      'Cloud-native migration',
      'AI-enabled architectures',
      'Process reengineering',
      'Future-proofing',
      'Risk-managed transformation'
    ],
    order: 6,
    icon: 'Zap'
  },
  {
    title: 'Mainframe modernization',
    description:
      "We translate Japan's most critical legacy systems — COBOL, JCL, and Fujitsu mainframes — into modern, maintainable architectures without disrupting live operations. Our engineers have hands-on mainframe experience and the Japanese language skills to work directly with your teams.",
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'mainframe-modernization',
    category: 'Mainframe',
    features: [
      'Legacy code analysis, conversion, and documentation in English and Japanese',
      'Zero-downtime migration strategies for mission-critical banking and insurance systems',
      'End-to-end delivery responsibility — not just consulting advice'
    ],
    order: 7,
    icon: 'Server'
  },
  {
    title: 'Business requirement engineering',
    description:
      'Getting requirements right is the hardest part of any project. Our BRE practice works both directions — backward (reverse-engineering requirements from existing systems) and forward (defining requirements for new capabilities) — so nothing falls through the gaps.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'business-requirement-engineering',
    category: 'Requirements',
    features: [
      'Backward BRE: extract and document requirements from undocumented legacy systems',
      'Forward BRE: structured elicitation, gap analysis, and requirement traceability matrices',
      'Bilingual documentation for seamless handoff between Japan and global teams'
    ],
    order: 8,
    icon: 'FileText'
  },
  {
    title: 'Techno-business rationalization',
    description:
      'Many enterprises carry IT portfolios filled with overlapping, underused, or misaligned systems. We cut through the complexity — mapping your technology landscape to real business outcomes and identifying where to invest, consolidate, or retire.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'techno-business-rationalization',
    category: 'Strategy',
    features: [
      'Application portfolio assessment: value mapping, redundancy identification, and prioritization',
      'Cost-benefit analysis and business case development for rationalization decisions',
      'Roadmap to a leaner, higher-performing technology estate'
    ],
    order: 9,
    icon: 'PieChart'
  },
  {
    title: 'System development',
    description:
      'We build enterprise systems from the ground up — or extend and integrate what you already have. Our development teams work on-site or remotely, embedded with your stakeholders, with Vision AI holding full accountability for delivery quality and timelines.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'system-development',
    category: 'Development',
    features: [
      'Custom application development across Java, Python, cloud-native, and modern web stacks',
      'Legacy system integration: APIs, middleware, and data migration',
      'Agile delivery with bilingual sprint reviews, documentation, and stakeholder reporting'
    ],
    order: 11,
    icon: 'Code2'
  },
  {
    title: 'Program management',
    description:
      'Large transformation programs fail not from lack of talent, but lack of coordination. Our program managers bring structure, visibility, and accountability to complex, multi-workstream IT programs — bridging the communication gap between Japanese executives and engineering teams.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'program-management',
    category: 'Program Management',
    features: [
      'Program governance frameworks: steering committees, RAID logs, and milestone tracking',
      'Bilingual status reporting and executive dashboard management',
      'Vendor coordination, budget oversight, and schedule risk management'
    ],
    order: 12,
    icon: 'Kanban'
  },
  {
    title: 'Business analysts',
    description:
      'Our business analysts sit at the intersection of your business and your technology teams. Bilingual and domain-trained, they translate business intent into precise technical specifications — and keep both sides aligned throughout delivery.',
    pricing: 'Custom Pricing',
    status: 'ACTIVE',
    featured: false,
    slug: 'business-analysts',
    category: 'Consulting',
    features: [
      'Stakeholder workshops, process mapping, and as-is / to-be analysis',
      'User stories, use cases, and functional specifications in English and Japanese',
      'UAT planning, test scenario design, and sign-off facilitation'
    ],
    order: 13,
    icon: 'Users'
  }
];

async function seedServices() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing services
    await Service.deleteMany({});
    console.log('Cleared existing services');

    // Insert new services
    const insertedServices = await Service.insertMany(servicesData);
    console.log(`Successfully inserted ${insertedServices.length} services:`);
    
    insertedServices.forEach((service, index) => {
      console.log(`${index + 1}. ${service.title} (${service.slug})`);
    });

  } catch (error) {
    console.error('Error seeding services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedServices();
