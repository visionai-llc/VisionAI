import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const ProgramManagement: React.FC = () => (
  <ServiceDetailPage
    title="Program Management"
    tagline="Governance · Risk · Delivery assurance"
    heroDescription="Large transformation programs fail not from lack of talent, but lack of coordination. Our program managers bring structure, visibility, and accountability to complex, multi-workstream IT programs — bridging the communication gap between Japanese executives and engineering teams."
    highlights={[
      {
        label: 'Governance:',
        text: 'Steering committees, RAID logs, and milestone tracking tuned to your culture.',
      },
      {
        label: 'Reporting:',
        text: 'Bilingual status reporting and executive dashboard management.',
      },
      {
        label: 'Delivery assurance:',
        text: 'Vendor coordination, budget oversight, and schedule risk management.',
      },
    ]}
    benefits={[
      'Single pane of visibility across workstreams, vendors, and geographies.',
      'Earlier detection and mitigation of schedule and dependency risks.',
      'Executives get clarity without losing engineering nuance.',
      'Aligned decisions between business sponsorship and delivery teams.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/PM.jpg"
  />
);

export default ProgramManagement;
