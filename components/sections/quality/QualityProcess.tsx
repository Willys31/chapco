'use client';

import { FadeIn } from '@/components/animations/FadeIn';

const qualitySteps = [
  {
    number: '01',
    title: 'Sélection à la source',
    description: 'Visite des filières partenaires, vérification des conditions de production et de récolte.',
  },
  {
    number: '02',
    title: 'Inspection physique',
    description:
      'Contrôle visuel des produits : aspect, calibrage, humidité, intégrité, absence de corps étrangers.',
  },
  {
    number: '03',
    title: 'Analyses laboratoire',
    description: 'Tests microbiologiques et analyses chimiques pour garantir la conformité sanitaire.',
  },
  {
    number: '04',
    title: 'Conditionnement contrôlé',
    description:
      'Mise en sachets, conteneurs ou vrac selon les exigences clients, avec étiquetage conforme.',
  },
  {
    number: '05',
    title: 'Documentation complète',
    description:
      'Édition des certificats, fiches techniques et documents douaniers pour le pays de destination.',
  },
  {
    number: '06',
    title: 'Validation pré-expédition',
    description:
      'Dernière vérification avant chargement : scellage, marquage, remise des documents au transporteur.',
  },
];

export function QualityProcess() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">Notre processus</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Six étapes de <em className="italic text-forest-500">contrôle</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Liste alternée */}
        <div className="space-y-4">
          {qualitySteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div
                className={`group flex flex-col md:flex-row items-start gap-6 p-6 lg:p-8 bg-white rounded-sm border border-sage-500/15 hover:border-sage-500 hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Numéro */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cream border-2 border-sage-500 flex items-center justify-center group-hover:bg-sage-500 transition-colors duration-500">
                    <span className="text-sm font-medium text-sage-700 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Texte */}
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-medium text-navy-700 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
