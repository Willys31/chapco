'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { FileSpreadsheet, Container, Ship, MapPin } from 'lucide-react';

const steps = [
  {
    icon: FileSpreadsheet,
    number: '01',
    title: 'Planification',
    description:
      "Définition des volumes, conditionnements et calendrier d'expédition selon votre contrat.",
  },
  {
    icon: Container,
    number: '02',
    title: 'Conditionnement',
    description:
      "Mise en conteneurs sécurisés, scellage et vérification pré-expédition au port d'Abidjan.",
  },
  {
    icon: Ship,
    number: '03',
    title: 'Transport maritime',
    description:
      'Chargement sur navire, suivi documentaire et coordination avec votre destinataire.',
  },
  {
    icon: MapPin,
    number: '04',
    title: 'Arrivée',
    description:
      'Coordination avec votre transitaire au port de destination pour la prise en charge.',
  },
];

export function LogisticsProcess() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Notre processus logistique
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Quatre étapes <em className="italic text-forest-500">maîtrisées</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Timeline horizontale */}
        <div className="relative">
          {/* Ligne connectrice desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-sage-500/25" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.12}>
                <div className="group text-center">
                  {/* Cercle + icône */}
                  <div className="relative flex justify-center mb-6">
                    <div className="w-28 h-28 rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center group-hover:border-sage-500 group-hover:shadow-xl transition-all duration-500 relative z-10">
                      <step.icon
                        className="w-10 h-10 text-forest-500 group-hover:scale-110 transition-transform"
                        strokeWidth={1.2}
                      />
                    </div>
                    {/* Numéro flottant */}
                    <div className="absolute -top-2 right-[calc(50%-56px+8px)] w-8 h-8 rounded-full bg-navy-900 border border-sage-500/30 flex items-center justify-center z-20">
                      <span className="text-[10px] font-medium text-sage-300">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Citation */}
        <FadeIn delay={0.5}>
          <blockquote className="mt-16 max-w-2xl mx-auto pl-6 border-l-2 border-sage-500">
            <p className="text-base text-navy-700/70 font-light italic leading-relaxed">
              &ldquo;Transport maritime en conteneurs sécurisés, planification des volumes
              selon contrat — chaque expédition est un engagement.&rdquo;
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
