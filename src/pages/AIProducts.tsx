import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Bot, ClipboardList, PlayCircle, Database } from 'lucide-react';

const products = [
  {
    title: 'Kaizen Dhara',
    slug: 'kaizendhara',
    icon: Bot,
    description:
      'AI modernization platform for analysis, transformation, and delivery workflows across enterprise legacy estates.',
  },
  {
    title: 'Test Case Generator',
    slug: 'test-case-generator',
    icon: ClipboardList,
    description:
      'Automatically generate high-quality, traceable test cases from requirements, user stories, and existing documentation.',
  },
  {
    title: 'Test Executor',
    slug: 'test-executor',
    icon: PlayCircle,
    description:
      'Execute and monitor automated test suites with actionable reporting for faster release confidence.',
  },
  {
    title: 'Data Migration AI',
    slug: 'data-migration',
    icon: Database,
    description:
      'A data migration and code translation AI product that reads legacy code (COBOL, Assembler), understands business logic, and converts it to modern languages (Java) while migrating databases.',
  },
];

const AIProducts: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.dispatchEvent(new Event('force-route-transition'));
    setTimeout(() => navigate(path), 100);
  };

  return (
    <div>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-800 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-24">
        <video
          src="/Product.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-5">
            AI Products
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 leading-relaxed mb-8">
            Productized AI capabilities built for enterprise modernization, quality engineering, and delivery acceleration.
          </p>
          <button
            type="button"
            onClick={() => handleNavigate('/contact')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
          >
            Request a Demo
          </button>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.slug}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                <Link
                  to={`/ai-products/${product.slug}`}
                  className="inline-flex items-center px-5 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-24 h-24 bg-white/20 rounded-lg"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <div className="w-32 h-32 bg-white/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Build the future of enterprise AI with us. We are looking for
            innovators across engineering, product, and delivery.
          </p>
          <button
            type="button"
            onClick={() => handleNavigate('/careers')}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg font-semibold"
          >
            Explore Careers
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIProducts;
