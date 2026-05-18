import { Phone, Mail } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function Founder() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            Notre fondateur
          </p>
        </FadeIn>

        <div className="mb-10">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1]">
              Cedric <em className="italic text-forest-500">Messou</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-sage-700 font-medium">
              Fondateur &amp; Dirigeant
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              À la tête de CHAP &amp; CO depuis sa création en 2023, Cedric Messou
              porte une vision claire&nbsp;: faire du terroir africain une référence
              mondiale en matières premières agricoles et alimentaires.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Sa double connaissance des{' '}
              <strong className="text-navy-700 font-medium">filières ivoiriennes</strong> et
              des{' '}
              <strong className="text-navy-700 font-medium">
                exigences des marchés internationaux
              </strong>{' '}
              lui permet d&apos;orchestrer une chaîne d&apos;export rigoureuse, où chaque
              maillon — du producteur au conteneur — est maîtrisé.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="border-t border-sage-500/20 pt-8 space-y-3">
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
              href="mailto:cmessou@chapco.ci"
              className="flex items-center gap-3 text-navy-700 hover:text-sage-700 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="font-light">cmessou@chapco.ci</span>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
