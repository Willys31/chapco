import { Sprout, BarChart3, ShieldCheck, Search, FileCheck, Ship } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

const guarantees: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sprout,
    title: 'Sélection rigoureuse des filières',
    description:
      'Choix méticuleux des producteurs et des terroirs pour garantir une qualité irréprochable.',
  },
  {
    icon: BarChart3,
    title: 'Maîtrise des volumes',
    description:
      'Gestion précise des quantités selon vos besoins, du conditionnement détail au vrac industriel.',
  },
  {
    icon: ShieldCheck,
    title: 'Contrôle qualité avant expédition',
    description:
      'Vérifications systématiques pour assurer la conformité aux standards internationaux.',
  },
  {
    icon: Search,
    title: 'Traçabilité des produits',
    description:
      'Suivi complet de la ferme au conteneur, garantissant transparence et confiance.',
  },
  {
    icon: FileCheck,
    title: 'Documentation export complète',
    description:
      "Certificats phytosanitaires, d'origine, analyses microbiologiques — tout est fourni.",
  },
  {
    icon: Ship,
    title: 'Logistique maritime sécurisée',
    description:
      'Transport en conteneurs protégés, planification précise selon vos contrats.',
  },
];

export function Guarantees() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
            Nos engagements
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.15] mb-6">
            Six piliers pour des partenariats{' '}
            <em className="italic text-sage-300">durables</em>
          </h2>
          <p className="text-lg text-white/60 font-light">
            De la sélection à l&apos;expédition, chaque étape est pensée pour sécuriser votre
            approvisionnement.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <FadeIn key={guarantee.title} delay={index * 0.08}>
                <div className="group relative p-8 lg:p-10 border border-white/10 rounded-sm hover:border-sage-500/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                  <div className="absolute top-6 right-6 text-7xl font-light text-white/5 group-hover:text-sage-500/20 transition-colors select-none leading-none">
                    0{index + 1}
                  </div>

                  <div className="relative mb-8">
                    <div className="w-14 h-14 rounded-full bg-sage-500/10 border border-sage-500/30 flex items-center justify-center group-hover:bg-sage-500/20 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-sage-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="relative text-xl font-medium text-white mb-4 tracking-tight">
                    {guarantee.title}
                  </h3>
                  <p className="relative text-sm text-white/60 font-light leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
