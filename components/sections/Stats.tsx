'use client';

import CountUp from 'react-countup';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
  br: () => <br />,
};

export function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { value: 3, suffix: '', label: t('years_label'), description: t('years_desc') },
    { value: 9, suffix: '+', label: t('sectors_label'), description: t('sectors_desc') },
    { value: 15, suffix: '+', label: t('countries_label'), description: t('countries_desc') },
    { value: 100, suffix: '%', label: t('traceability_label'), description: t('traceability_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
            {t('section_eyebrow')}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
            {t.rich('section_title', richOptions)}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center group">
                <div className="text-6xl lg:text-7xl font-light text-navy-700 mb-3 tracking-tighter">
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-sage-500">{stat.suffix}</span>
                </div>
                <div className="w-12 h-px bg-sage-500 mx-auto mb-4 group-hover:w-20 transition-all duration-500" />
                <p className="text-sm uppercase tracking-[0.2em] text-navy-700 font-medium mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-ink/60 font-light">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
