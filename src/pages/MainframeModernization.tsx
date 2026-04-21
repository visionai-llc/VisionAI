import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const MainframeModernization: React.FC = () => (
  <ServiceDetailPage
    title="AI Led Mainframe Modernization"
    tagline="COBOL · JCL · Fujitsu z/OS"
    heroDescription="We translate Japan's most critical legacy systems — COBOL, JCL, and Fujitsu mainframes — into modern, maintainable architectures without disrupting live operations. Our engineers have hands-on mainframe experience and the Japanese language skills to work directly with your teams."
    highlights={[
      {
        label: 'Analysis & documentation:',
        text: 'Legacy code analysis, conversion, and documentation in English and Japanese.',
      },
      {
        label: 'Mission-critical migration:',
        text: 'Zero-downtime migration strategies for banking and insurance systems where availability is non-negotiable.',
      },
      {
        label: 'Accountable delivery:',
        text: 'End-to-end delivery responsibility — not just consulting advice.',
      },
    ]}
    benefits={[
      'Reduced operational risk during modernization with controlled cutover planning.',
      'Maintainable target architectures your teams can own for the long term.',
      'Clear traceability from legacy behavior to modern components.',
      'Collaboration with Japanese stakeholders in their language and yours.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/MM.jpg"
  />
);

export default MainframeModernization;
