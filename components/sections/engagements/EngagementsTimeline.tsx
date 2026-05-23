'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';
import { engagements, getLocalized, type Engagement } from '@/data/engagements';
import { Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function EngagementsTimeline() {
  const t = useTranslations('engagements');
  const locale = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-32 lg:space-y-48">
            {engagements.map((engagement, index) => (
              <EngagementBlock
                key={engagement.slug}
                engagement={engagement}
                index={index}
                isReversed={index % 2 === 1}
                stepLabel={t('timeline_step')}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementBlock({
  engagement,
  index,
  isReversed,
  stepLabel,
  locale,
}: {
  engagement: Engagement;
  index: number;
  isReversed: boolean;
  stepLabel: string;
  locale: string;
}) {
  const [imageError, setImageError] = useState(false);
  const Icon = engagement.icon;

  return (
    <div id={`engagement-${engagement.slug}`} className="relative scroll-mt-20">
      <div className="hidden lg:flex absolute left-1/2 top-12 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-sage-500 ring-8 ring-white" />
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <FadeIn>
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm group">
            {!imageError ? (
              <Image
                src={engagement.image}
                alt={getLocalized(engagement.imageAlt, locale)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <PlaceholderEngagementImage Icon={Icon} number={engagement.number} />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <span className="text-xs tracking-[0.3em] uppercase text-white font-medium">
                  {stepLabel} {engagement.number}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-6xl lg:text-7xl font-light text-sage-500/30 tracking-tighter leading-none">
                {engagement.number}
              </span>
              <div className="w-14 h-14 rounded-full bg-sage-500/10 border border-sage-500/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-forest-500" strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-navy-700 tracking-tight leading-[1.15] mb-6">
              {getLocalized(engagement.title, locale)}
            </h2>

            <p className="text-lg md:text-xl font-light italic text-forest-500 mb-8">
              {getLocalized(engagement.shortDescription, locale)}
            </p>

            <p className="text-base lg:text-lg text-ink/70 font-light leading-relaxed mb-10">
              {getLocalized(engagement.longDescription, locale)}
            </p>

            <div className="space-y-3 pl-6 border-l-2 border-sage-500/30">
              <p className="text-xs uppercase tracking-[0.2em] text-sage-700 font-medium mb-4">
                {stepLabel}
              </p>
              <ul className="space-y-3">
                {engagement.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sage-500 mt-1 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm lg:text-base text-ink/70 font-light leading-relaxed">
                      {getLocalized(point, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function PlaceholderEngagementImage({
  Icon,
  number,
}: {
  Icon: LucideIcon;
  number: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sage-100 via-cream to-sage-100">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`grid-${number}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#5A8A5A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${number})`} />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[200px] font-light text-sage-500/10 tracking-tighter leading-none">
          {number}
        </span>
      </div>

      <div className="relative flex flex-col items-center gap-4 z-10">
        <div className="w-24 h-24 rounded-full bg-white/70 border border-sage-500/30 flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-12 h-12 text-forest-500" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
