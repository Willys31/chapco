'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Globe, ArrowRight, Award } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Traçabilité' },
  { value: '5', label: 'Documents fournis' },
  { value: '48h', label: 'Réactivité' },
  { value: '∞', label: 'Engagement qualité' },
];

export function EuropeanStandards() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-sage-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-forest-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              Standards internationaux
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              De l&apos;Afrique vers l&apos;Europe,
              <br />
              <em className="italic text-sage-300">avec les mêmes exigences.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Notre objectif est l&apos;alignement progressif avec les normes européennes
              en matière de sécurité alimentaire et industrielle.
            </p>
          </FadeIn>
        </div>

        {/* Schéma 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">

          {/* Origine */}
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-sm border border-white/10 bg-white/5 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">Origine</p>
              <h3 className="text-xl font-medium text-white mb-3">Afrique de l&apos;Ouest</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Sourcing rigoureux dans les filières ivoiriennes et ouest-africaines
              </p>
            </div>
          </FadeIn>

          {/* Contrôle */}
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-sm border border-sage-500/40 bg-sage-500/15 text-center relative h-full">
              <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center">
                <ArrowRight className="w-8 h-8 text-sage-400" />
              </div>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center">
                <ArrowRight className="w-8 h-8 text-sage-400" />
              </div>

              <div className="w-16 h-16 rounded-full bg-sage-500/30 border border-sage-300/50 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">Contrôle</p>
              <h3 className="text-xl font-medium text-white mb-3">CHAP & CO</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Sélection, contrôle qualité, documentation, traçabilité
              </p>
            </div>
          </FadeIn>

          {/* Destination */}
          <FadeIn delay={0.3}>
            <div className="p-8 rounded-sm border border-white/10 bg-white/5 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">Destination</p>
              <h3 className="text-xl font-medium text-white mb-3">Marchés mondiaux</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Conformité aux normes européennes et internationales
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-light text-sage-300 mb-2">{item.value}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
