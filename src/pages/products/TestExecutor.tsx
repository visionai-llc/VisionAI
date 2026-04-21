import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const TestExecutor: React.FC = () => (
  <ServiceDetailPage
    title="Test Executor"
    tagline="Automated execution and reporting"
    heroDescription="Run and orchestrate automated test suites with actionable insights that help teams detect, prioritize, and resolve issues faster."
    highlights={[
      { label: 'Execution engine:', text: 'Run tests at scale across environments and release pipelines.' },
      { label: 'Actionable reporting:', text: 'Get clear pass/fail analytics and defect-focused insights.' },
      { label: 'Release confidence:', text: 'Support rapid, reliable go/no-go decisions.' },
    ]}
    benefits={[
      'Faster feedback loops for development teams.',
      'Greater confidence in release quality.',
      'Reduced manual execution effort.',
      'Improved visibility for stakeholders.',
    ]}
    heroGradientClass="from-cyan-700 via-sky-700 to-blue-800 dark:from-gray-900 dark:via-cyan-900 dark:to-blue-950"
    titleGradientClass="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300"
    buttonGradientClass="from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700"
    heroImageSrc="/TE.jpg"
  />
);

export default TestExecutor;
