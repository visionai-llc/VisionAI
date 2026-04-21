import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const DataMigration: React.FC = () => (
  <ServiceDetailPage
    title="Data Migration AI"
    tagline="Legacy System Modernization"
    heroDescription="A data migration and code translation AI product that converts legacy formats to modern tech stacks."
    highlights={[
      {
        label: 'Reads legacy code:',
        text: 'Natively understands historical and complex code formats such as COBOL and Assembler.',
      },
      {
        label: 'Understands business logic + data structures:',
        text: 'Extracts the core business rules and data models embedded deep within the legacy code.',
      },
      {
        label: 'Converts it into modern languages:',
        text: 'Automatically translates code into modern languages (e.g. COBOL ➝ Java, Assembler ➝ Java, Assembler ➝ COBOL).',
      },
      {
        label: 'Migrates data + databases to modern platforms:',
        text: 'Seamlessly migrates data structures and legacy databases to modern relational and cloud platforms.',
      },
    ]}
    benefits={[
      'De-risk and accelerate legacy modernization efforts.',
      'Reduce the total cost of ownership by moving off mainframes.',
      'Future-proof applications by unlocking data for advanced AI capabilities.',
      'Minimize manual conversion errors.',
    ]}
    heroGradientClass="from-indigo-700 via-blue-700 to-purple-800 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
    buttonGradientClass="from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
    heroImageSrc="/DM.jpg"
  />
);

export default DataMigration;
