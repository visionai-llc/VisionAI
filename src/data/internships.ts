export interface Internship {
  id: string;
  title: string;
  /** e.g. Internship · Tokyo / Remote · 3–6 months · Immediate start */
  metaLine: string;
  tagline: string;
  aboutTheRole: string;
  whatYouWillDo: string[];
  whatWeAreLookingFor: string[];
  niceToHave: string[];
}

export const INTERNSHIPS: Internship[] = [
  {
    id: 'ai-engineer-intern',
    title: 'AI Engineer Intern',
    metaLine: 'Internship · Tokyo / Remote · 3–6 months · Immediate start',
    tagline: "Build real AI pipelines that power Japan's legacy modernization.",
    aboutTheRole:
      'You will work alongside our engineering team to develop, test, and improve AI-driven features within the Kaizen Dhara platform. This is a hands-on role — you will write real code, work with LLMs, and see your work used in live projects.',
    whatYouWillDo: [
      'Develop and test AI/ML components including LLM integrations and prompt pipelines',
      'Assist in building automated code analysis and conversion features for legacy systems',
      'Write clean, documented Python code and contribute to code reviews',
      'Support data preparation, evaluation, and model benchmarking tasks',
      'Collaborate with senior engineers on architecture and implementation decisions',
    ],
    whatWeAreLookingFor: [
      'Pursuing a degree in Computer Science, Engineering, or a related field',
      'Hands-on experience with Python and at least one ML/AI framework (LangChain, Hugging Face, etc.)',
      'Basic understanding of LLMs, prompt engineering, or NLP concepts',
      'Curiosity, initiative, and the ability to learn fast in a startup environment',
      'English proficiency; Japanese is a plus',
    ],
    niceToHave: [
      'Exposure to cloud platforms (AWS, GCP, or Azure)',
      'Familiarity with GitHub workflows and agile development',
      "Interest in Japan's enterprise IT landscape",
    ],
  },
  {
    id: 'full-stack-engineer-intern',
    title: 'Full Stack Engineer Intern',
    metaLine: 'Internship · Tokyo / Remote · 3–6 months · Immediate start',
    tagline: 'Build features that enterprise clients in Japan depend on daily.',
    aboutTheRole:
      'As a Full Stack Engineer Intern, you will contribute to web application development across both frontend and backend, working on real features shipped to production. You will be part of an agile delivery team and get exposure to enterprise-grade system development.',
    whatYouWillDo: [
      'Develop and maintain frontend interfaces using modern frameworks (React or Vue)',
      'Build and integrate backend APIs using Node.js, Python, or Java',
      'Write unit and integration tests and participate in peer code reviews',
      'Work with databases (SQL and/or NoSQL) for data modelling and queries',
      'Collaborate with designers, BAs, and senior engineers in sprint ceremonies',
    ],
    whatWeAreLookingFor: [
      'Pursuing a degree in Computer Science, Software Engineering, or equivalent',
      'Working knowledge of HTML, CSS, JavaScript, and at least one backend language',
      'Experience with REST APIs and basic database concepts',
      'Comfortable using Git and working in a team-based development environment',
      'Strong problem-solving mindset and attention to detail',
    ],
    niceToHave: [
      'Experience with React, Next.js, or Vue.js',
      'Familiarity with Docker or cloud deployment basics',
      'Japanese language ability is an advantage',
    ],
  },
  {
    id: 'project-management-intern',
    title: 'Project Management Intern',
    metaLine: 'Internship · Tokyo / Remote · 3–6 months · Immediate start',
    tagline: "Support real enterprise IT programs and learn how Japan's top companies deliver.",
    aboutTheRole:
      "This role gives you hands-on exposure to program and project delivery in Japan's enterprise IT sector. You will assist project managers in planning, tracking, and reporting across active client engagements, learning how large-scale transformation programs are run end to end.",
    whatYouWillDo: [
      'Assist in maintaining project plans, RAID logs, and milestone trackers',
      'Prepare status reports and meeting minutes for internal and client stakeholders',
      'Support scheduling, resource tracking, and action item follow-up',
      'Help coordinate across engineering, BA, and client teams',
      'Contribute to process documentation and delivery templates',
    ],
    whatWeAreLookingFor: [
      'Pursuing a degree in Business, Management, Information Systems, or a related field',
      'Strong organizational skills and ability to manage multiple tasks simultaneously',
      'Proficiency in Microsoft Office (Excel, Word, PowerPoint)',
      'Clear written and verbal communication in English',
      'Willingness to learn Japanese business culture and communication practices',
    ],
    niceToHave: [
      'Familiarity with project management tools (Jira, Asana, or similar)',
      'Understanding of agile or waterfall delivery methodologies',
      'Japanese language ability is highly valued',
    ],
  },
  {
    id: 'project-management-support-intern',
    title: 'Project Management Support Intern',
    metaLine: 'Internship · Tokyo / Remote · 3–6 months · Immediate start',
    tagline: 'Keep projects on track — the backbone of every successful delivery.',
    aboutTheRole:
      'The Project Management Support Intern provides essential administrative and operational support to our delivery teams. This is an ideal entry point for someone looking to build a career in project or program management within enterprise IT.',
    whatYouWillDo: [
      'Maintain project trackers, schedules, and documentation repositories',
      'Prepare and distribute meeting agendas, minutes, and action logs',
      'Track open actions and follow up with team members on deadlines',
      'Support onboarding of new team members and manage access logistics',
      'Assist with client-facing reports, presentations, and status decks',
    ],
    whatWeAreLookingFor: [
      'Pursuing a degree in Business Administration, Management, or a related field',
      'Detail-oriented with strong written communication skills',
      'Comfortable with Microsoft Office tools, especially Excel and PowerPoint',
      'Proactive attitude and ability to handle multiple tasks under deadlines',
      'English proficiency required; Japanese is a strong plus',
    ],
    niceToHave: [
      'Prior internship or part-time experience in an office environment',
      'Exposure to project tools such as Confluence, Notion, or MS Project',
      'Interest in IT delivery and digital transformation',
    ],
  },
  {
    id: 'bilingual-bridge-engineer-intern',
    title: 'Bilingual Bridge Engineer Intern',
    metaLine: 'Internship · Tokyo · 3–6 months · Immediate start',
    tagline: 'Bridge the gap between Japanese clients and our engineering teams.',
    aboutTheRole:
      'This is a unique role combining technical skills with Japanese language ability. As a Bilingual Bridge Engineer Intern, you will serve as the communication link between Japanese-speaking stakeholders and our engineering team — translating requirements, facilitating meetings, and ensuring nothing is lost in translation.',
    whatYouWillDo: [
      'Participate in client meetings and translate technical discussions between Japanese and English',
      'Support the translation and localization of technical documents, specifications, and reports',
      'Assist engineers in understanding Japanese business requirements and client feedback',
      'Review bilingual deliverables for accuracy, tone, and technical correctness',
      'Help build glossaries and translation references for ongoing project use',
    ],
    whatWeAreLookingFor: [
      'Business-level proficiency in both Japanese (JLPT N2 or above) and English',
      'Basic understanding of software development concepts or IT systems',
      'Strong interpersonal and communication skills',
      'Ability to work in a fast-paced, multicultural team environment',
      'Pursuing a degree in Engineering, IT, Linguistics, or a related field',
    ],
    niceToHave: [
      'Prior experience working with Japanese enterprise clients or in a Japanese company',
      'Familiarity with software development lifecycle (SDLC) concepts',
      'Technical writing experience in both languages',
    ],
  },
  {
    id: 'bilingual-tester-intern',
    title: 'Bilingual Tester Intern',
    metaLine: 'Internship · Tokyo / Remote · 3–6 months · Immediate start',
    tagline: 'Ensure quality across systems that matter — in two languages.',
    aboutTheRole:
      'As a Bilingual Tester Intern, you will support quality assurance across software delivery projects, conducting testing activities in both English and Japanese. You will work closely with developers, BAs, and clients to validate that systems meet requirements before go-live.',
    whatYouWillDo: [
      'Execute test cases, log defects, and track resolution in both English and Japanese',
      'Support UAT sessions with Japanese-speaking clients — explain issues clearly in both languages',
      'Assist in writing and reviewing test plans, test scripts, and test reports',
      'Perform functional, regression, and exploratory testing across web and enterprise applications',
      'Liaise between the development team and client stakeholders on defect status',
    ],
    whatWeAreLookingFor: [
      'Business-level proficiency in Japanese (JLPT N2 or above) and English',
      'Basic knowledge of software testing concepts and QA processes',
      'Methodical and thorough approach to finding and documenting issues',
      'Pursuing a degree in Computer Science, Information Systems, or a related field',
      'Comfortable working in a structured delivery environment with defined processes',
    ],
    niceToHave: [
      'Exposure to test management tools (TestRail, Zephyr, or similar)',
      'Knowledge of SQL for basic data validation',
      'Understanding of agile testing practices',
    ],
  },
  {
    id: 'bilingual-business-system-analyst-intern',
    title: 'Bilingual Business System Analyst Intern',
    metaLine: 'Internship · Tokyo · 3–6 months · Immediate start',
    tagline: 'Translate Japanese business needs into precise technical specifications.',
    aboutTheRole:
      'This role combines business analysis with bilingual capability, supporting our BA team in bridging the gap between Japanese enterprise clients and technical delivery teams. You will help gather, document, and communicate requirements across the full project lifecycle.',
    whatYouWillDo: [
      'Participate in requirements workshops with Japanese-speaking stakeholders and document outcomes',
      'Translate and localise requirement documents, user stories, and specifications between Japanese and English',
      'Assist in process mapping, as-is / to-be analysis, and gap documentation',
      'Support the creation of use cases, functional specifications, and acceptance criteria',
      'Facilitate communication between Japanese clients and the development team throughout delivery',
    ],
    whatWeAreLookingFor: [
      'Business-level proficiency in Japanese (JLPT N2 or above) and English',
      'Pursuing a degree in Business, IT, Information Systems, or a related field',
      'Strong analytical thinking and structured approach to problem-solving',
      'Ability to translate complex technical or business concepts across languages clearly',
      'Excellent written communication skills in both Japanese and English',
    ],
    niceToHave: [
      'Prior experience in business analysis, consulting, or requirements gathering',
      'Familiarity with tools like Confluence, JIRA, or Lucidchart',
      'Understanding of SDLC methodologies (agile or waterfall)',
    ],
  },
];

export function internshipApplyLabel(title: string): string {
  return `Internship: ${title}`;
}
