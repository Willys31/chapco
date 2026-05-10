'use client';

import { FadeIn } from '@/components/animations/FadeIn';

export function QualityCommitment() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Colonne gauche */}
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
                Notre engagement
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.1]">
                Une traçabilité totale,
                <br />
                <em className="italic text-forest-500">de la ferme au conteneur.</em>
              </h2>
            </FadeIn>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-lg text-ink/70 font-light leading-relaxed">
                Chez CHAP & CO, la qualité n&apos;est pas une option : c&apos;est une{' '}
                <strong className="text-navy-700 font-medium">méthode</strong>.
                Chaque produit qui quitte le port d&apos;Abidjan a été sélectionné,
                contrôlé et documenté selon des standards rigoureux.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-ink/70 font-light leading-relaxed">
                Notre objectif est l&apos;alignement{' '}
                <strong className="text-navy-700 font-medium">progressif avec les normes européennes</strong>{' '}
                en matière de sécurité alimentaire — gage de sérieux pour nos partenaires internationaux.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <blockquote className="mt-8 pl-6 border-l-2 border-sage-500">
                <p className="text-base text-navy-700/80 font-light italic leading-relaxed">
                  &ldquo;Notre objectif est l&apos;alignement progressif avec les normes
                  européennes en matière de sécurité alimentaire.&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
