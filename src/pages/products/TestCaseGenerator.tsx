import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const TestCaseGenerator: React.FC = () => (
  <ServiceDetailPage
    title="Test Case Generator"
    tagline="AI-driven quality engineering"
    heroDescription="Generate structured, consistent, and traceable test cases from requirements and user stories to improve release quality."
    highlights={[
      { label: 'Automated generation:', text: 'Create test scenarios and edge-case coverage with AI assistance.' },
      { label: 'Traceability:', text: 'Map generated test cases back to requirements and acceptance criteria.' },
      { label: 'Team productivity:', text: 'Reduce manual test design effort while maintaining quality standards.' },
    ]}
    benefits={[
      'Faster test planning cycles.',
      'More complete functional coverage.',
      'Improved requirement-to-test traceability.',
      'Lower QA preparation overhead.',
    ]}
    heroGradientClass="from-violet-700 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-950"
    titleGradientClass="bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300"
    buttonGradientClass="from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
    heroImageSrc="/test.jpg"
  />
);

export default TestCaseGenerator;
