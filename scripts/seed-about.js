import mongoose from 'mongoose';
import dotenv from 'dotenv';
import About from '../server/models/About.js';

dotenv.config();

const aboutData = {
  companyInfo: {
    mission: 'To support enterprise modernization with practical, bilingual delivery and AI-enabled engineering workflows.',
    vision: 'To be a trusted Japan-focused partner for legacy modernization and technology transformation.',
    description: 'Vision AI provides modernization, engineering, and delivery support services for enterprise technology programs.',
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

async function seedAbout() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing about data
    await About.deleteMany({});
    console.log('Cleared existing about data');

    // Insert new about data
    const insertedAbout = await About.create(aboutData);
    console.log('Successfully inserted about data:');
    console.log(`- Company: ${insertedAbout.companyInfo.mission.substring(0, 50)}...`);
    console.log(`- Directors: ${insertedAbout.directors.length} team members`);
    console.log(`- Stats: ${insertedAbout.stats.projectsCompleted} projects completed`);

  } catch (error) {
    console.error('Error seeding about data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedAbout();
