import mongoose from 'mongoose';
import Service from '../models/Service.js';
import Job from '../models/Job.js';
import Contact from '../models/Contact.js';
import About from '../models/About.js';
import dotenv from 'dotenv';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await Job.deleteMany({});
    await Contact.deleteMany({});
    await About.deleteMany({});

    // Create sample services
    const services = [
      {
        title: 'AI-Powered Business Intelligence',
        description: 'Transform your business data into actionable insights with our advanced AI analytics platform.',
        pricing: '$999/month',
        status: 'ACTIVE',
        featured: true,
        category: 'Analytics',
        features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
        order: 1,
        slug: 'ai-powered-business-intelligence'
      },
      {
        title: 'Agentic AI Systems',
        description: 'Autonomous AI agents that can handle complex tasks and workflows.',
        pricing: '$1499/month',
        status: 'ACTIVE',
        featured: true,
        category: 'Automation',
        features: ['Autonomous agents', 'Workflow automation', 'Multi-agent coordination', 'Custom agent training'],
        order: 2,
        slug: 'agentic-ai-systems'
      },
      {
        title: 'Data-Driven Analytics',
        description: 'Comprehensive data analytics solution for modern businesses.',
        pricing: '$799/month',
        status: 'ACTIVE',
        featured: false,
        category: 'Analytics',
        features: ['Data visualization', 'Statistical analysis', 'Report generation', 'Data integration'],
        order: 3,
        slug: 'data-driven-analytics'
      }
    ];

    await Service.insertMany(services);
    console.log('Services created');

    // Create sample jobs
    const jobs = [
      {
        role: 'Senior AI Engineer',
        description: 'We are looking for an experienced AI Engineer to join our growing team.',
        location: 'San Francisco, CA',
        type: 'FULL_TIME',
        department: 'Engineering',
        experience: '5+ years',
        salary: '$150,000 - $200,000',
        status: 'OPEN',
        featured: true,
        requirements: ['5+ years of AI/ML experience', 'Strong Python skills', 'Experience with cloud platforms'],
        responsibilities: ['Design and implement AI solutions', 'Lead technical projects', 'Mentor junior engineers'],
        benefits: ['Health insurance', '401(k)', 'Remote work options', 'Professional development'],
        order: 1,
        slug: 'senior-ai-engineer'
      },
      {
        role: 'Product Manager - AI Solutions',
        description: 'Join our product team to drive AI product development.',
        location: 'New York, NY',
        type: 'FULL_TIME',
        department: 'Product',
        experience: '3+ years',
        salary: '$120,000 - $160,000',
        status: 'OPEN',
        featured: false,
        requirements: ['Product management experience', 'AI/ML knowledge', 'Strong communication skills'],
        responsibilities: ['Product strategy', 'Roadmap development', 'Stakeholder management'],
        benefits: ['Health insurance', '401(k)', 'Flexible work hours', 'Stock options'],
        order: 2,
        slug: 'product-manager-ai-solutions'
      }
    ];

    await Job.insertMany(jobs);
    console.log('Jobs created');

    // Create sample contacts
    const contacts = [
      {
        name: 'John Smith',
        email: 'john.smith@company.com',
        subject: 'AI Implementation Inquiry',
        message: 'We are interested in implementing AI solutions for our manufacturing business.',
        type: 'contact',
        status: 'NEW'
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah.j@startup.io',
        subject: 'Demo Request',
        message: 'Would like to schedule a demo of your AI platform.',
        type: 'demo',
        status: 'IN_PROGRESS'
      },
      {
        name: 'Michael Chen',
        email: 'mchen@enterprise.com',
        subject: 'Partnership Opportunity',
        message: 'We would like to explore partnership opportunities.',
        type: 'contact',
        status: 'COMPLETED'
      }
    ];

    await Contact.insertMany(contacts);
    console.log('Contacts created');

    // Create sample about data
    const aboutData = {
      companyInfo: {
        mission: 'To support enterprise modernization with practical, bilingual delivery and AI-enabled engineering workflows.',
        vision: 'To be a trusted Japan-focused partner for legacy modernization and technology transformation.',
        description: 'Vision AI (visionai.jp) is an independent company providing modernization, engineering, and delivery support services for enterprise technology programs.',
        foundedYear: 2025,
        teamSize: 'Small specialist team',
        headquarters: 'Tsukuba, Ibaraki, Japan'
      },
      contactInfo: {
        email: 'sales@visionai.jp',
        phone: '+81-50-8894-4567',
        address: '305-0861, Ibaraki, Tsukuba, Yatabe 1077-58',
        mapUrl: 'https://maps.google.com/?q=Tsukuba+Ibaraki+Japan'
      },
      directors: [],
      stats: {
        projectsCompleted: 0,
        clientsServed: 0,
        yearsExperience: 1,
        teamMembers: 0
      }
    };

    await About.create(aboutData);
    console.log('About data created');

    console.log('Sample data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
