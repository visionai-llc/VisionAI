import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const KaizenDhara: React.FC = () => (
  <ServiceDetailPage
    title="Kaizen Dhara"
    tagline="Kaizen + Dhara for software delivery"
    heroDescription="AI-powered platform for legacy modernization, bilingual delivery, and continuous improvement across enterprise software programs."
    highlights={[
      {
        label: 'Platform overview:',
        text: 'Our proprietary platform brings continuous improvement (Kaizen) and flow (Dhara) to software delivery. Kaizen Dhara automates the most time-consuming stages of legacy modernization — analysis, code conversion, and bilingual documentation — cutting project timelines significantly.',
      },
      {
        label: 'Five-stage automated pipeline:',
        text: 'Discovery -> analysis -> conversion -> validation -> deployment.',
      },
      {
        label: 'LLM-agnostic architecture:',
        text: 'Bilingual AI agents operating in English and Japanese.',
      },
      {
        label: 'Enterprise-ready controls:',
        text: 'GitHub integration and compliance-ready audit trails for regulated industries.',
      },
    ]}
    benefits={[
      'Significantly faster modernization timelines.',
      'Consistent bilingual outputs for cross-border teams.',
      'Stronger auditability for regulated environments.',
      'Higher delivery flow from analysis to deployment.',
    ]}
    heroGradientClass="from-indigo-700 via-blue-700 to-purple-800 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300"
    buttonGradientClass="from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
    heroImageSrc="/KD.jpg"
  />
);

export default KaizenDhara;
