import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

export interface RouteMapMilestone {
  year: string;
  phase: string;
  bullets: string[];
  isVision?: boolean;
}

const MILESTONES: RouteMapMilestone[] = [
  {
    year: '2025',
    phase: 'Inception',
    bullets: ['Company establishment', 'Core team building', 'Initial partnerships'],
  },
  {
    year: '2026',
    phase: 'Growth',
    bullets: [
      'AI product development',
      'Seed funding: $25M',
      'Team: 1,000 associates',
      'Kaizen Dhara Alpha launch',
    ],
  },
  {
    year: '2027',
    phase: 'Expansion',
    bullets: ['Market expansion', 'Series A funding', 'Team: 3,500 associates', 'Enterprise partnerships', 'Kaizen Dhara Beta launch'],
  },
  {
    year: '2028',
    phase: 'Acceleration',
    bullets: ['Service diversification', 'Team: 5,000+ associates', 'Regional expansion', 'Kaizen Dhara MainStream'],
  },
  {
    year: '2029',
    phase: 'Scale',
    bullets: ['Team: 7,500+ associates', 'IPO preparation', 'APAC expansion'],
  },
  {
    year: '2030',
    phase: 'Vision achieved',
    isVision: true,
    bullets: [
      '10,000+ associates',
      'Industry leadership',
      'Strategic acquisitions',
      '$250M revenue target',
    ],
  },
];

const RouteMap: React.FC = () => {
  return (
    <section
      className="relative border-t border-gray-200/80 bg-gray-50 py-14 dark:border-gray-700/80 dark:bg-gray-800 sm:py-16"
      aria-labelledby="route-map-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_-10%,rgba(59,130,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_55%_45%_at_50%_-10%,rgba(99,102,241,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-3xl lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.35 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2
            id="route-map-heading"
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl"
          >
            Strategic roadmap
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent dark:via-blue-500/50" />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Workforce plan · <span className="tabular-nums">2025</span>–<span className="tabular-nums">2030</span>
          </p>
        </motion.header>

        {/* Vertical timeline */}
        <div className="relative">
          <div
            className="absolute left-5 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-slate-200 to-indigo-300 dark:from-blue-900 dark:via-slate-600 dark:to-indigo-900"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-0 p-0">
            {MILESTONES.map((milestone, index) => (
              <motion.li
                key={milestone.year}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.2) }}
                className="relative pb-10 last:pb-0"
              >
                <div className="flex gap-4 sm:gap-5">
                  {/* Year node */}
                  <div className="relative z-[1] flex w-10 shrink-0 flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gray-50 text-[11px] font-semibold tabular-nums shadow-sm ring-4 ring-gray-50 dark:bg-gray-800 dark:ring-gray-800 sm:text-xs ${
                        milestone.isVision
                          ? 'border-indigo-400 text-indigo-800 dark:border-indigo-500 dark:text-indigo-200'
                          : 'border-blue-200 text-blue-900 dark:border-blue-700/80 dark:text-blue-100'
                      }`}
                    >
                      {milestone.year}
                    </div>
                  </div>

                  <MilestoneCard milestone={milestone} />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

function MilestoneCard({ milestone }: { milestone: RouteMapMilestone }) {
  const { phase, bullets, isVision } = milestone;
  return (
    <article
      className={`min-w-0 flex-1 rounded-lg border bg-white/90 p-5 shadow-sm ring-1 ring-gray-950/[0.04] transition-shadow duration-200 hover:shadow-md dark:bg-gray-900/90 dark:ring-white/[0.06] sm:p-6 ${
        isVision
          ? 'border-indigo-200/90 border-l-[3px] border-l-indigo-600 dark:border-indigo-800/80 dark:border-l-indigo-400'
          : 'border-gray-200/90 border-l-[3px] border-l-blue-600 dark:border-gray-600 dark:border-l-blue-500'
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        {isVision && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
            <Target className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
        )}
        <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white sm:text-[1.05rem]">
          <span className="sr-only">{milestone.year}: </span>
          {phase}
        </h3>
      </div>
      <ul className="m-0 list-none space-y-2.5 border-t border-gray-100 pt-4 dark:border-gray-700/80">
        {bullets.map((line) => (
          <li key={line} className="flex gap-3 text-sm leading-snug text-gray-600 dark:text-gray-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-sm bg-slate-300 dark:bg-slate-500" aria-hidden />
            <span className="min-w-0">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default RouteMap;
