'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';

const Globe3D = dynamic(
  () => import('@/components/animations/Globe3D').then((m) => ({ default: m.Globe3D })),
  { ssr: false, loading: () => null }
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
      style={{
        background:
          'radial-gradient(ellipse at center, #1E2A5E 0%, #0F1530 65%, #050816 100%)',
      }}
    >
      {/* ── Couche 1 : Globe 3D ────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: globeY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Globe3D />
      </motion.div>

      {/* ── Couche 2 : Vignette overlay ────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 25%, rgba(5, 8, 22, 0.55) 75%, rgba(5, 8, 22, 0.85) 100%)',
        }}
      />

      {/* ── Couche 3 : Flèches signature (très discrètes) ──────────────────── */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.07]">
        <ArrowsBackground baseOpacity={1} />
      </div>

      {/* ── Couche 4 : Contenu textuel ─────────────────────────────────────── */}
      <motion.div
        className="relative z-[4] text-center max-w-4xl mx-auto px-6"
        style={{ y: textY, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-sage-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
        >
          Abidjan — Côte d&apos;Ivoire
        </motion.p>

        {/* Titre */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Le Meilleur du Terroir{' '}
          <em className="italic text-sage-300">Africain</em>
          <br />
          aux marchés du monde
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-base md:text-lg font-light text-cream/70 tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
        >
          Négoce de matières premières agricoles &amp; alimentaires
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.1, ease: 'easeOut' }}
        >
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
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ───────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.8 }}
      >
        <span className="text-white/25 text-[10px] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-sage-300/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
