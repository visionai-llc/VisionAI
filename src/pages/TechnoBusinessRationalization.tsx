import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const TechnoBusinessRationalization: React.FC = () => (
  <ServiceDetailPage
    title="Techno-Business Rationalization"
    tagline="Align IT investment to business value"
    heroDescription="Many enterprises carry IT portfolios filled with overlapping, underused, or misaligned systems. We cut through the complexity — mapping your technology landscape to real business outcomes and identifying where to invest, consolidate, or retire."
    highlights={[
      {
        label: 'Portfolio assessment:',
        text: 'Value mapping, redundancy identification, and prioritization across applications.',
      },
      {
        label: 'Decision support:',
        text: 'Cost-benefit analysis and business case development for rationalization decisions.',
      },
      {
        label: 'Roadmap:',
        text: 'A practical path to a leaner, higher-performing technology estate.',
      },
    ]}
    benefits={[
      'Clear visibility into where IT spend supports — or distracts from — strategic goals.',
      'Prioritized initiatives with defensible financial and risk rationale.',
      'Reduced complexity and cost through consolidation and retirement.',
      'Executive-ready narratives for investment committees and boards.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/tech.jpg"
  />
);

export default TechnoBusinessRationalization;
