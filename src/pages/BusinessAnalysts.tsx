import React from 'react';
import ServiceDetailPage from '../components/ServiceDetailPage';

const BusinessAnalysts: React.FC = () => (
  <ServiceDetailPage
    title="Business Analytics"
    tagline="Embedded · Bilingual · Domain-fluent"
    heroDescription="Our business analysts sit at the intersection of your business and your technology teams. Bilingual and domain-trained, they translate business intent into precise technical specifications — and keep both sides aligned throughout delivery."
    highlights={[
      {
        label: 'Discovery:',
        text: 'Stakeholder workshops, process mapping, and as-is / to-be analysis.',
      },
      {
        label: 'Specifications:',
        text: 'User stories, use cases, and functional specifications in English and Japanese.',
      },
      {
        label: 'Quality:',
        text: 'UAT planning, test scenario design, and sign-off facilitation.',
      },
    ]}
    benefits={[
      'Requirements that developers can build and testers can verify.',
      'Less rework from ambiguous or conflicting expectations.',
      'Smoother UAT and production acceptance with clear scenarios.',
      'Ongoing alignment as scope and priorities evolve.',
    ]}
    heroGradientClass="from-indigo-600 via-blue-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400"
    buttonGradientClass="from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
    heroImageSrc="/BA.jpg"
  />
);

export default BusinessAnalysts;
