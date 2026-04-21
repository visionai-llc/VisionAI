import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ServiceDetailHighlight {
  label: string;
  text: string;
}

export interface ServiceDetailPageProps {
  title: string;
  tagline: string;
  heroDescription: string;
  highlights: ServiceDetailHighlight[];
  benefits: string[];
  heroGradientClass: string;
  titleGradientClass: string;
  buttonGradientClass: string;
  heroImageSrc?: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  title,
  tagline,
  heroDescription,
  highlights,
  benefits,
  heroGradientClass,
  titleGradientClass,
  buttonGradientClass,
  heroImageSrc,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.dispatchEvent(new Event('force-route-transition'));
    setTimeout(() => navigate(path), 100);
  };

  return (
    <div>
      <section
        className={`relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${heroGradientClass} py-24`}
      >
        {heroImageSrc ? (
          <img
            src={heroImageSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/70 z-10" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)] z-[5]" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80 mb-3 font-medium">
            {tagline}
          </p>
          <h1
            className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text ${titleGradientClass} drop-shadow-lg mb-5`}
          >
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-medium max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
          <button
            type="button"
            onClick={() => handleNavigate('/contact')}
            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${buttonGradientClass} text-white font-bold rounded-lg transition-all duration-200 shadow-lg text-base mt-2`}
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What we deliver</h2>
          <ul className="space-y-5 text-lg text-gray-700 dark:text-gray-200 mb-10">
            {highlights.map((h) => (
              <li key={h.label}>
                <span className="font-semibold text-gray-900 dark:text-white">{h.label}</span>{' '}
                {h.text}
              </li>
            ))}
          </ul>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Outcomes</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-200 space-y-2">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
