/** Used when GET /api/about is unavailable (e.g. Vite-only dev without API/MongoDB). */

export const FALLBACK_ABOUT = {
  _id: 'fallback-about',
  companyInfo: {
    mission:
      'To help enterprises in Japan and globally modernize critical systems, align technology with business outcomes, and deliver transformation programs with clarity and accountability.',
    vision:
      'To be the trusted partner for bilingual, enterprise-grade IT transformation — from mainframe and legacy estates to cloud-ready, AI-enabled architectures.',
    description:
      'Vision AI is an independent IT services and consulting company operating at visionai.jp. We support Japan-focused enterprise delivery with bilingual execution across legacy platforms (COBOL, JCL, mainframe) and modern engineering programs.',
    foundedYear: 2025,
    teamSize: 'Small specialist team',
    headquarters: 'Tsukuba, Ibaraki, Japan',
  },
  contactInfo: {
    email: 'sales@visionai.jp',
    phone: '+81-50-8894-4567',
    address: '305-0861, Ibaraki, Tsukuba, Yatabe 1077-58',
    mapUrl: 'https://maps.google.com/?q=Tsukuba+Ibaraki+Japan',
  },
  directors: [] as {
    _id: string;
    name: string;
    designation: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
    order: number;
    isActive: boolean;
  }[],
  stats: {
    projectsCompleted: 0,
    clientsServed: 0,
    yearsExperience: 1,
    teamMembers: 0,
  },
};
