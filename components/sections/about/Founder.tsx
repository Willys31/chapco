import { UserCircle, Phone, Mail } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function Founder() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">

          {/* COLONNE GAUCHE — Photo placeholder */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="relative mr-6 mb-6">
              {/* Cadre décoratif */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sage-500/30 rounded-sm" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                  <div className="text-center text-white/30">
                    <UserCircle className="w-32 h-32 mx-auto mb-4" strokeWidth={0.5} />
                    <p className="text-xs tracking-widest uppercase">Photo à venir</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* COLONNE DROITE — Texte */}
          <div className="lg:col-span-3 space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700">
                Notre fondateur
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.1]">
                Cedric <em className="italic text-forest-500">Messou</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-base uppercase tracking-[0.2em] text-sage-700 font-medium">
                Fondateur &amp; Dirigeant
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="space-y-6 text-lg text-ink/70 font-light leading-relaxed">
                <p>
                  À la tête de CHAP &amp; CO depuis sa création en 2023, Cedric Messou
                  porte une vision claire&nbsp;: faire du terroir africain une référence
                  mondiale en matières premières agricoles et alimentaires.
                </p>
                <p>
                  Sa double connaissance des{' '}
                  <strong className="text-navy-700 font-medium">filières ivoiriennes</strong> et
                  des{' '}
                  <strong className="text-navy-700 font-medium">
                    exigences des marchés internationaux
                  </strong>{' '}
                  lui permet d&apos;orchestrer une chaîne d&apos;export rigoureuse, où chaque
                  maillon — du producteur au conteneur — est maîtrisé.
                </p>
              </div>
            </FadeIn>

            {/* Coordonnées */}
            <FadeIn delay={0.7}>
              <div className="pt-8 border-t border-sage-500/20 space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-sage-700 mb-4">
                  Contact direct
                </p>
                <a
                  href="tel:+2250704767676"
                  className="flex items-center gap-3 text-navy-700 hover:text-sage-700 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="font-light">+225 07 04 76 76 76</span>
                </a>
                <a
                  href="mailto:Cmessou@chapco.ci"
                  className="flex items-center gap-3 text-navy-700 hover:text-sage-700 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="font-light">Cmessou@chapco.ci</span>
                </a>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
