import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const SystemDevelopment: React.FC = () => (
  <ServiceDetailPage
    title="System Development"
    tagline="Full-cycle · Cloud-ready · Bilingual"
    heroDescription="We build enterprise systems from the ground up — or extend and integrate what you already have. Our development teams work on-site or remotely, embedded with your stakeholders, with Vision AI holding full accountability for delivery quality and timelines."
    highlights={[
      {
        label: 'Modern stacks:',
        text: 'Custom application development across Java, Python, cloud-native, and modern web stacks.',
      },
      {
        label: 'Integration:',
        text: 'Legacy system integration through APIs, middleware, and data migration.',
      },
      {
        label: 'Agile delivery:',
        text: 'Bilingual sprint reviews, documentation, and stakeholder reporting.',
      },
    ]}
    benefits={[
      'Shipping increments that match business priority and compliance needs.',
      'Integration paths that respect existing mainframe and package systems.',
      'Transparent communication across Japanese and global teams.',
      'One accountable partner for quality, scope, and schedule.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/SD.jpg"
  />
);

export default SystemDevelopment;
