import { FadeIn } from '@/components/animations/FadeIn';

const steps = [
  {
    number: '01',
    title: 'Sourcing',
    description:
      "Identification et sélection rigoureuse des producteurs partenaires en Afrique de l'Ouest.",
  },
  {
    number: '02',
    title: 'Contrôle qualité',
    description: 'Inspection physique, analyses microbiologiques et tests de conformité.',
  },
  {
    number: '03',
    title: 'Conditionnement',
    description: 'Mise en sachets, conteneurs ou vrac selon vos spécifications.',
  },
  {
    number: '04',
    title: 'Documentation',
    description:
      "Certificats phytosanitaires, d'origine, fiches techniques — dossier complet.",
  },
  {
    number: '05',
    title: 'Export FOB / CIF',
    description:
      "Expédition depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam ou autres.",
  },
  {
    number: '06',
    title: 'Livraison',
    description:
      "Suivi maritime jusqu'à votre port de destination, dans les délais convenus.",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
            Notre processus
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
            Six étapes, <em className="italic text-forest-500">une promesse</em>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Ligne connectrice — desktop uniquement */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-500 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative text-center group">
                  <div className="relative mx-auto mb-6 w-16 h-16">
                    <div className="absolute inset-0 bg-cream border-2 border-sage-500 rounded-full group-hover:bg-sage-500 transition-colors duration-500" />
                    <div className="relative h-full flex items-center justify-center">
                      <span className="text-lg font-medium text-navy-700 group-hover:text-white transition-colors duration-500">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-medium text-navy-700 mb-3 tracking-tight">
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
      </div>
    </section>
  );
}
