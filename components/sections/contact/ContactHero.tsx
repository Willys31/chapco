'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { MessageSquare } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative min-h-[55vh] bg-navy-900 overflow-hidden flex items-center pt-40 pb-20">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-500/8 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-8 space-y-8">
            
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-300">
                Parlons de votre projet
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05]">
                Construisons ensemble
                <br />
                <em className="italic text-sage-300">votre approvisionnement.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                Devis, échantillons, dossier qualité ou simple échange —
                nous répondons sous 48h ouvrées.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div
                className="absolute w-full h-full rounded-full border border-sage-500/15 animate-ping"
                style={{ animationDuration: '3.5s' }}
              />
              <div className="absolute w-3/4 h-3/4 rounded-full border border-sage-500/20" />
              <div className="w-24 h-24 rounded-full bg-sage-500/15 border border-sage-300/30 flex items-center justify-center backdrop-blur-sm">
                <MessageSquare className="w-11 h-11 text-sage-300" strokeWidth={1} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
