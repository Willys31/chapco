import { Sprout, Globe } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const valueProps = [
  { label: 'Accès direct', detail: 'Aux matières premières africaines' },
  { label: 'Multi-industries', detail: 'Alimentaire, cosmétique, industriel' },
  { label: 'Flexibilité', detail: 'Approvisionnement adapté' },
  { label: 'Solutions sur mesure', detail: 'Pour marchés internationaux' },
];

export function Positioning() {
  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Notre positionnement
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight mb-6">
              Au cœur de la chaîne de{' '}
              <em className="italic text-forest-500">valeur</em>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light">
              Nous orchestrons la rencontre entre les terroirs africains et les marchés
              internationaux.
            </p>
          </FadeIn>
        </div>

        {/* Schéma à 3 colonnes */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center">

            {/* COLONNE 1 — Producteurs locaux */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center shadow-lg mb-6">
                <Sprout className="w-10 h-10 text-forest-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">
                Producteurs locaux
              </h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed mb-4">
                Filières sélectionnées rigoureusement en Afrique de l&apos;Ouest
              </p>
              <ul className="text-xs text-ink/50 space-y-1">
                <li>Côte d&apos;Ivoire</li>
                <li>Ghana · Nigeria</li>
                <li>Sénégal · Bénin</li>
              </ul>
            </div>

            {/* COLONNE 2 — CHAP & CO (centre, mis en avant) */}
            <div className="text-center relative">
              {/* Connecteurs horizontaux (desktop) */}
              <div className="hidden md:block absolute top-12 right-full w-full h-px bg-gradient-to-r from-transparent via-sage-500/50 to-sage-500 -translate-y-1/2 pr-4" />
              <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-l from-transparent via-sage-500/50 to-sage-500 -translate-y-1/2 pl-4" />

              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 rounded-full bg-sage-500/20 blur-xl animate-pulse" />
                <div className="relative w-32 h-32 mx-auto rounded-full bg-navy-900 border-2 border-sage-300 flex items-center justify-center shadow-2xl">
                  <span className="text-white font-medium text-sm tracking-widest text-center leading-tight">
                    CHAP<br />&amp; CO
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">
                Interface stratégique
              </h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed">
                Sélection · Qualité · Traçabilité · Logistique
              </p>
            </div>

            {/* COLONNE 3 — Marchés internationaux */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center shadow-lg mb-6">
                <Globe className="w-10 h-10 text-forest-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">
                Acteurs internationaux
              </h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed mb-4">
                Industriels, distributeurs et transformateurs mondiaux
              </p>
              <ul className="text-xs text-ink/50 space-y-1">
                <li>Europe (Marseille, Anvers, Rotterdam)</li>
                <li>Asie · Amériques</li>
                <li>Industries locales</li>
              </ul>
            </div>

          </div>
        </FadeIn>

        {/* 4 propositions de valeur */}
        <FadeIn delay={0.7}>
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-sage-500/20">
            {valueProps.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-medium text-navy-700 mb-2 tracking-wide">
                  {item.label}
                </p>
                <p className="text-xs text-ink/60 font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
