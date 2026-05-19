import { FadeIn } from '@/components/animations/FadeIn';

export function EngagementsIntro() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container max-w-5xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">Notre méthode</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-12 max-w-4xl">
            Six étapes, <em className="italic text-forest-500">une promesse</em>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Chez CHAP &amp; CO, la qualité n&apos;est pas un argument commercial : c&apos;est une{' '}
              <strong className="text-navy-700 font-medium">méthode structurée</strong> qui
              s&apos;applique à chaque expédition, sans exception.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Découvrez en détail nos six engagements — concrets, mesurables, et conçus pour bâtir
              des{' '}
              <strong className="text-navy-700 font-medium">partenariats durables</strong> avec les
              acteurs majeurs du marché mondial.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
