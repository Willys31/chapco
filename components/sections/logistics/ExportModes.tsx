'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Anchor, Container, Check } from 'lucide-react';

const fobItems = [
  "Marchandise dédouanée à l'export",
  'Transport pris en charge à votre arrivée',
  'Idéal pour les acheteurs avec leur propre logistique',
  'Coûts maritimes à votre charge',
];

const cifItems = [
  'Marseille, Anvers, Rotterdam et autres',
  'Coût, assurance et fret inclus',
  'Idéal pour les importateurs sans logistique maritime',
  "Tranquillité maximale jusqu'au port d'arrivée",
];

export function ExportModes() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Conditions commerciales
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Deux modes d&apos;export,{' '}
              <em className="italic text-forest-500">votre choix.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Grid 2 modes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* FOB Abidjan */}
          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-sage-500/20 bg-white overflow-hidden h-full flex flex-col">
              <div className="p-8 lg:p-10 flex-1">
                <span className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-sage-100 text-sage-700 font-medium mb-6">
                  Incoterm FOB
                </span>

                <div className="w-16 h-16 rounded-full bg-cream border border-sage-500/30 flex items-center justify-center mb-6">
                  <Anchor className="w-7 h-7 text-forest-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-light text-navy-700 mb-4 tracking-tight">
                  FOB Abidjan
                </h3>

                <p className="text-ink/70 font-light leading-relaxed mb-6">
                  Free On Board — Vous prenez livraison de la marchandise une fois
                  chargée sur le navire au port d&apos;Abidjan.
                </p>

                <ul className="space-y-3 mb-8">
                  {fobItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/60">
                      <Check className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-sage-500/15">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-700 mb-1">
                    Port de chargement
                  </p>
                  <p className="text-sm font-medium text-navy-700">
                    Port d&apos;Abidjan, Côte d&apos;Ivoire
                  </p>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-sage-400 to-sage-600" />
            </div>
          </FadeIn>

          {/* CIF Europe */}
          <FadeIn delay={0.2}>
            <div className="rounded-sm overflow-hidden h-full flex flex-col">
              <div className="bg-navy-900 p-8 lg:p-10 flex-1">
                <span className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-sage-500/20 text-sage-300 border border-sage-300/30 font-medium mb-6">
                  Incoterm CIF
                </span>

                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Container className="w-7 h-7 text-sage-300" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-light text-white mb-4 tracking-tight">
                  CIF Ports européens
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-6">
                  Cost, Insurance, Freight — Nous prenons en charge le coût,
                  l&apos;assurance et le fret jusqu&apos;au port de destination.
                </p>

                <ul className="space-y-3 mb-8">
                  {cifItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-300 mb-1">
                    Ports de destination
                  </p>
                  <p className="text-sm font-medium text-white">
                    Marseille • Anvers • Rotterdam
                  </p>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-forest-500 to-sage-500" />
            </div>
          </FadeIn>
        </div>

        {/* Note */}
        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-ink/50 font-light mt-10">
            D&apos;autres incoterms (CFR, EXW) ou destinations peuvent être étudiés selon
            vos besoins. Contactez-nous pour discuter de votre cas spécifique.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
