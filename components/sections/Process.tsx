'use client';

import { useRef, useState, useEffect, forwardRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';
import { processSteps, type ProcessStep, getLocalized } from '@/data/process';
import type { LucideIcon } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

function buildSerpentinePath(points: Point[]): string {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const midY = (p1.y + p2.y) / 2;
    d += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};

export function Process() {
  const t = useTranslations('process_section');
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgPath, setSvgPath] = useState('');
  const [svgDims, setSvgDims] = useState({ width: 0, height: 0 });
  const [connectionPoints, setConnectionPoints] = useState<Point[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const buildPath = () => {
      const container = containerRef.current;
      if (!container) return;
      if (stepRefs.current.some((r) => !r)) return;

      const w = container.clientWidth;
      const h = container.clientHeight;
      setSvgDims({ width: w, height: h });

      const containerRect = container.getBoundingClientRect();
      const points: Point[] = stepRefs.current.map((ref, i) => {
        const rect = ref!.getBoundingClientRect();
        const y = rect.top - containerRect.top + rect.height * 0.15;
        const x = i % 2 === 0 ? 40 : w - 40;
        return { x, y };
      });

      setConnectionPoints(points);
      setSvgPath(buildSerpentinePath(points));
    };

    buildPath();
    window.addEventListener('resize', buildPath);
    return () => window.removeEventListener('resize', buildPath);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">{t('eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.15]">
            {t.rich('title', richOptions)}
          </h2>
        </FadeIn>

        <div ref={containerRef} className="relative">
          {svgPath && svgDims.width > 0 && (
            <svg
              className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-visible"
              width={svgDims.width}
              height={svgDims.height}
              viewBox={`0 0 ${svgDims.width} ${svgDims.height}`}
            >
              <path
                d={svgPath}
                fill="none"
                stroke="rgba(168, 201, 168, 0.2)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.path
                d={svgPath}
                fill="none"
                stroke="#A8C9A8"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              {connectionPoints.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="10" fill="white" stroke="#A8C9A8" strokeWidth="2" />
                  <circle cx={p.x} cy={p.y} r="5" fill="#A8C9A8" />
                </g>
              ))}
            </svg>
          )}

          <div className="space-y-20 lg:space-y-32">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                step={step}
                index={index}
                isReversed={index % 2 === 1}
                locale={locale}
                stepLabel={t('step_label')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isReversed: boolean;
  locale: string;
  stepLabel: string;
}

const ProcessCard = forwardRef<HTMLDivElement, ProcessCardProps>(function ProcessCard(
  { step, index, isReversed, locale, stepLabel },
  ref
) {
  const [imageError, setImageError] = useState(false);
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <FadeIn direction={isReversed ? 'right' : 'left'}>
        <div className={`relative z-10 ${isReversed ? 'lg:pl-16' : 'lg:pr-16'}`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm group">
            {!imageError ? (
              <Image
                src={step.image}
                alt={getLocalized(step.imageAlt, locale)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <PlaceholderProcessImage Icon={Icon} number={step.number} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                <span className="text-xs tracking-[0.25em] uppercase text-white font-medium">
                  {step.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} direction={isReversed ? 'left' : 'right'}>
        <div
          className={`flex flex-col justify-center z-10 ${
            isReversed ? 'lg:pr-16' : 'lg:pl-16'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-sage-500/10 border border-sage-500/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-forest-500" strokeWidth={1.5} />
            </div>
            <span className="text-xs tracking-[0.25em] uppercase text-sage-700 font-medium">
              {stepLabel} {step.number}
            </span>
          </div>

          <h3 className="text-3xl lg:text-4xl font-light text-navy-700 tracking-tight leading-[1.2] mb-5">
            {getLocalized(step.title, locale)}
          </h3>

          <p className="text-base lg:text-lg text-ink/70 font-light leading-relaxed max-w-md">
            {getLocalized(step.description, locale)}
          </p>
        </div>
      </FadeIn>
    </div>
  );
});

function PlaceholderProcessImage({
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
            <pattern id={`process-grid-${number}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5A8A5A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#process-grid-${number})`} />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[160px] font-light text-sage-500/10 tracking-tighter leading-none">
          {number}
        </span>
      </div>

      <div className="relative flex flex-col items-center gap-3 z-10">
        <div className="w-20 h-20 rounded-full bg-white/70 border border-sage-500/30 flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-10 h-10 text-forest-500" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
