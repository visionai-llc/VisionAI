import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  TrendingUp,
  Zap,
  CheckCircle,
  Server,
  FileText,
  PieChart,
  Cpu,
  Code2,
  Kanban,
  Users,
  Bot,
  ClipboardList,
  PlayCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FALLBACK_SERVICES, sortServicesByOrder } from '../data/fallbackServices';
import { fetchWithTimeout } from '../utils/fetchWithTimeout';
import { toTitleCase } from '../utils/toTitleCase';

interface Service {
  _id: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
  category: string;
  status: string;
  featured: boolean;
  order: number;
  icon?: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    let next: Service[] = [];
    try {
      const response = await fetchWithTimeout(
        '/api/services?status=ACTIVE&featured=true'
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          next = data.slice(0, 6);
        }
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
    if (next.length === 0) {
      const sorted = sortServicesByOrder(FALLBACK_SERVICES);
      const featured = sorted.filter((s) => s.featured);
      const rest = sorted.filter((s) => !s.featured);
      next = [...featured, ...rest].slice(0, 6) as Service[];
    }
    setServices(next);
    setLoading(false);
  };

  const handleNavigate = (path: string) => {
    window.dispatchEvent(new Event('force-route-transition'));
    setTimeout(() => navigate(path), 100);
  };

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'TrendingUp':
        return TrendingUp;
      case 'Zap':
        return Zap;
      case 'Server':
        return Server;
      case 'FileText':
        return FileText;
      case 'PieChart':
        return PieChart;
      case 'Cpu':
        return Cpu;
      case 'Code2':
        return Code2;
      case 'Kanban':
        return Kanban;
      case 'Users':
        return Users;
      default:
        return Brain; // Default icon
    }
  };

  // Transform services for homepage display
  const homepageServices = services.map(service => ({
    icon: getIconComponent(service.icon),
    title: toTitleCase(service.title),
    description: service.description,
    link: `/services/${service.slug}`
  }));

  const globalPartners = [
    {
      name: 'Ory Folks',
      description: 'Your trusted partner in bridging the technological gap between Japan and India.',
      logo: '/oryfolkslogo.png',
      link: 'https://www.oryfolks.com/',
    },
    {
      name: 'Ideal Folks',
      description: 'A leading provider of end-to-end IT services and executive search for Global companies, with a primary focus on Japan.',
      logo: '/ideal-1.png',
      link: 'https://www.idealfolks.com/',
    },
    {
      name: 'Shinka',
      description: 'A world-class IT consulting, services, and solution provider that combines business processing experience with innovative technologies.',
      logo: '/shinka_a.png',
      link: 'https://shinkas.com/',
    },
    {
      name: 'iCRO',
      description: 'A division of Ideal Folks LLC and its Tokyo-based Clinical Research Partner that provides Clinical Research services in APAC.',
      logo: '/icro_a.png',
      link: 'https://www.icro.com/',
    },
  ];

  const aiProducts = [
    {
      icon: Bot,
      title: 'Kaizen Dhara',
      description:
        'AI modernization platform for enterprise analysis, transformation, and delivery acceleration.',
      link: '/ai-products/kaizendhara',
    },
    {
      icon: ClipboardList,
      title: 'Test Case Generator',
      description:
        'Generate structured and traceable test cases from requirements and user stories.',
      link: '/ai-products/test-case-generator',
    },
    {
      icon: PlayCircle,
      title: 'Test Executor',
      description:
        'Run automated test suites with clear execution insights and release-ready reporting.',
      link: '/ai-products/test-executor',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const container = document.getElementById('showcaseVideoContainer');
    if (!container) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            try {
              video.muted = true;
              video.play().catch(() => {});
            } catch {
              // Handle video play error
            }
          } else {
            try {
              video.pause();
              video.currentTime = 0;
            } catch {
              // Handle video pause error
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    io.observe(container);
    return () => io.disconnect();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen overflow-hidden bg-black z-20">
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-20"></div>
        
        {/* Video background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            src="/home.mov"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-24 sm:py-32 flex items-center justify-center text-center min-h-screen w-full">
          <div className="w-full max-w-4xl px-4 sm:px-6 slide-in-once slide-delay-200">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 heading-zoom">
                Welcome to Vision AI
              </h1>
            </div>
            <div className="mb-8 sm:mb-10 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-blue-100 font-medium sub-wipe slide-delay-400">
                Intelligence in sight. We craft AI experiences that are fast, reliable, and human-centered.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigate('/services')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Services
              </button>
              <button
                onClick={() => handleNavigate('/careers')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium bg-white/5 backdrop-blur-sm text-white rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/20 hover:border-white/30"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 reveal reveal-up relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              See VisionAI in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how our AI solutions are transforming businesses across industries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              id="showcaseVideoContainer"
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ paddingTop: '56.25%', backgroundColor: 'black', maxHeight: '480px' }}
            >
              <video
                ref={videoRef}
                id="showcaseVideo"
                src="/Vision Ai (9)-VEED (online-video-cutter.com).mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/VisionAILogo.png"
                controls
                controlsList="nodownload"
                aria-label="VisionAI showcase video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

  {/* About VisionAI Section */}
      <section className="py-24 bg-white dark:bg-gray-900 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 drop-shadow-lg">
              About VisionAI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vision AI bridges Japan's technological resource gap by leveraging offshore talent to deliver cutting-edge, AI-driven solutions. 
              We help clients establish focused Global Capability Centers (GCCs) that serve as execution hubs, streamline operations, and reduce the complexity of multi-vendor management through strategic resource transfer and centralized delivery.
            </p>
          </div>
          
          <div className="relative">
            {/* Shared ambient layer to visually connect all three blocks */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-500/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative text-center p-6 card-3d reveal reveal-up reveal-delay-2">
                <div className="pointer-events-none absolute right-[-2rem] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-blue-300/50 to-transparent md:block" />
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                World-class AI researchers and industry veterans with decades of experience.
              </p>
            </div>

              <motion.div
                className="relative reveal reveal-up reveal-delay-2 flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="pointer-events-none absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),rgba(99,102,241,0.22)_45%,transparent_75%)]" />
                <div className="relative w-full max-w-[360px] rounded-2xl p-[2px] bg-gradient-to-br from-cyan-300/55 via-blue-400/30 to-purple-500/45 dark:from-cyan-400/35 dark:via-blue-500/25 dark:to-purple-500/35">
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md">
                    <img
                      src="/TCG.jpg"
                      alt="Test Case Generator"
                      className="w-full h-[220px] md:h-[260px] object-cover"
                      style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-cyan-100/10" />
                  </div>
                </div>
              </motion.div>
            
              <div className="relative text-center p-6 card-3d reveal reveal-up reveal-delay-3">
                <div className="pointer-events-none absolute left-[-2rem] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-l from-blue-300/50 to-transparent md:block" />
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Latest AI technologies and frameworks to deliver state-of-the-art solutions.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>


       {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 drop-shadow-lg">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              Discover our full suite of AI-driven solutions designed to accelerate your business transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {homepageServices.map((service, index) => (
              <div
                key={index}
                className={`relative group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-3d-hover border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col reveal reveal-up reveal-delay-${(index % 3) + 1}`}
                style={{ minHeight: '340px' }}
              >
                <div className="absolute -top-8 -right-8 opacity-10 text-[8rem] pointer-events-none select-none">
                  <service.icon className="h-32 w-32" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="mt-auto pt-2">
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover text-lg font-bold"
            >
              View all services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      

      {/* AI Products Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-400 mb-6 drop-shadow-lg">
              AI Products
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              Explore our productized AI capabilities for modernization and quality engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiProducts.map((product, index) => (
              <div
                key={product.title}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-3d-hover border border-gray-100 dark:border-gray-700 flex flex-col reveal reveal-up reveal-delay-${(index % 3) + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                <div className="mt-auto">
                  <Link
                    to={product.link}
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-3d-hover text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/ai-products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-3d-hover text-lg font-bold"
            >
              View all AI products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section className="py-24 bg-white dark:bg-gray-900 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 drop-shadow-lg">
              Our Global Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading technology companies to deliver world-class AI solutions 
              that drive innovation and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {globalPartners.map((partner, index) => (
              <div
                key={index}
                className={`relative group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-3d-hover border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col items-center justify-between reveal reveal-up reveal-delay-${(index % 3) + 1}`}
                style={{ minHeight: '340px' }}
              >
                <img src={partner.logo} alt={partner.name} className="mb-6 object-contain" style={{height:'90px', width:'140px'}} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{partner.description}</p>
                <div className="mt-auto pt-2">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-200 font-semibold">Learn More</a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partnership CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in partnering with VisionAI?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 reveal reveal-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 drop-shadow-lg">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Be part of a revolutionary team that's shaping the future of AI. 
              We're looking for passionate individuals to help us transform businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work on cutting-edge AI projects that push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Career Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accelerate your career with mentorship from industry experts and continuous learning.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-3d-hover">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 pulse-3d">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make a real difference by helping businesses worldwide transform with AI.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-3d-hover"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 float-3d opacity-20">
          <div className="w-24 h-24 bg-white/20 rounded-lg rotate-3d"></div>
        </div>
        <div className="absolute bottom-10 right-10 neural-node opacity-30">
          <div className="w-32 h-32 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-3d-hover"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;