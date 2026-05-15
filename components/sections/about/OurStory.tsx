'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

export function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yearY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const yearOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 0.1, 0.1, 0]);
  const yearScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.9]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* 2023 en immense en arrière-plan */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        style={{ y: yearY, opacity: yearOpacity, scale: yearScale }}
        aria-hidden
      >
        <span
          className="font-light text-navy-700 leading-none pr-8 hidden lg:block"
          style={{ fontSize: 'clamp(8rem, 22vw, 20rem)', letterSpacing: '-0.05em' }}
        >
          2023
        </span>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            Notre histoire
          </p>
        </FadeIn>

        <div className="relative mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] max-w-3xl">
              Une <em className="italic text-forest-500">vision</em> claire,
              <br />
              une ambition mondiale.
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Fondée en <strong className="text-navy-700 font-medium">2023 à Abidjan</strong>,
              CHAP &amp; CO est née de la conviction que l&apos;Afrique de l&apos;Ouest, riche de son
              terroir et de ses producteurs, mérite une interface professionnelle et
              rigoureuse pour rayonner sur les marchés internationaux.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Notre rôle&nbsp;:{' '}
              <strong className="text-navy-700 font-medium">structurer l&apos;export</strong> des
              matières premières agricoles et alimentaires en garantissant qualité,
              traçabilité et conformité — du champ ivoirien aux ports européens,
              asiatiques et américains.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.8}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-sage-500/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-sage-700">
              Abidjan — Côte d&apos;Ivoire
            </span>
            <div className="h-px flex-1 bg-sage-500/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
