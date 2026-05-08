'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';

const InteractiveGlobe = dynamic(
  () => import('@/components/animations/InteractiveGlobe').then((m) => ({ default: m.InteractiveGlobe })),
  { ssr: false, loading: () => null }
);

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, #1E2A5E 0%, #0F1530 60%, #050816 100%)',
      }}
    >
      {/* Arrows signature — très subtiles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <ArrowsBackground baseOpacity={1} />
      </div>

      {/* Grid principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">

        {/* ── COLONNE TEXTE (ordre 2 sur mobile, 1 sur desktop) ── */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <FadeIn delay={0.7} duration={0.9}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.07] text-white mb-7">
              Le meilleur du terroir{' '}
              <em className="italic text-sage-300">africain</em>
              <br />
              aux marchés du monde
            </h1>
          </FadeIn>

          <FadeIn delay={1.1}>
            <p className="text-base md:text-lg font-light text-cream/65 tracking-wide mb-10 max-w-md mx-auto lg:mx-0">
              Négoce de matières premières agricoles &amp; alimentaires
            </p>
          </FadeIn>

          <FadeIn delay={1.4}>
            <div className="flex items-center justify-center lg:justify-start gap-8 flex-wrap">
              <Button variant="primary" size="md">
                Découvrir nos produits
              </Button>
              <Link
                href="/a-propos"
                className="group text-white/80 text-sm font-light hover:text-sage-300 transition-colors duration-300"
              >
                Notre histoire{' '}
                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* ── COLONNE GLOBE (ordre 1 sur mobile, 2 sur desktop) ── */}
        <FadeIn
          delay={0.3}
          duration={1.5}
          className="order-1 lg:order-2 h-[360px] md:h-[480px] lg:h-[600px] w-full"
        >
          <InteractiveGlobe />
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-white/25 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-sage-300/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
