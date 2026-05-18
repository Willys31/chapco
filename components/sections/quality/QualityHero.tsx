'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { ShieldCheck } from 'lucide-react';

export function QualityHero() {
  return (
    <section className="relative min-h-[70vh] bg-navy-900 overflow-hidden flex items-center pt-40 pb-20">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-forest-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Texte */}
          <div className="lg:col-span-7 space-y-8">

            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-300">
                Qualité & Conformité
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05]">
                La rigueur
                <br />
                <em className="italic text-sage-300">au service de votre confiance.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                De la sélection des filières à la documentation export, chaque étape
                est pensée pour répondre aux exigences des marchés internationaux.
              </p>
            </FadeIn>
          </div>

          {/* Icône décorative */}
          <FadeIn delay={0.4} className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div
                className="absolute w-full h-full rounded-full border border-sage-500/10 animate-ping"
                style={{ animationDuration: '3s' }}
              />
              <div className="absolute w-3/4 h-3/4 rounded-full border border-sage-500/20" />
              <div className="absolute w-1/2 h-1/2 rounded-full border border-sage-500/30" />
              <div className="w-28 h-28 rounded-full bg-sage-500/15 border border-sage-300/30 flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="w-14 h-14 text-sage-300" strokeWidth={1} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
