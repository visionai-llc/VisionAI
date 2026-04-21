import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const BusinessRequirementEngineering: React.FC = () => (
  <ServiceDetailPage
    title="Business Requirement Engineering"
    tagline="Backward & Forward BRE"
    heroDescription="Getting requirements right is the hardest part of any project. Our BRE practice works both directions — backward (reverse-engineering requirements from existing systems) and forward (defining requirements for new capabilities) — so nothing falls through the gaps."
    highlights={[
      {
        label: 'Backward BRE:',
        text: 'Extract and document requirements from undocumented legacy systems.',
      },
      {
        label: 'Forward BRE:',
        text: 'Structured elicitation, gap analysis, and requirement traceability matrices.',
      },
      {
        label: 'Bilingual handoff:',
        text: 'Documentation for seamless collaboration between Japan and global teams.',
      },
    ]}
    benefits={[
      'Fewer defects and rework by anchoring delivery to verified requirements.',
      'Shared understanding across business, IT, and vendor stakeholders.',
      'Traceability from business intent through testing and release.',
      'Artifacts ready for audit, compliance, and long-term maintenance.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/BRE.jpg"
  />
);

export default BusinessRequirementEngineering;
