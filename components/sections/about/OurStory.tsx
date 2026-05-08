import { FadeIn } from '@/components/animations/FadeIn';

export function OurStory() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Eyebrow */}
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            Notre histoire
          </p>
        </FadeIn>

        {/* Titre + date en filigrane */}
        <div className="relative mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] max-w-3xl">
              Une <em className="italic text-forest-500">vision</em> claire,
              <br />
              une ambition mondiale.
            </h2>
          </FadeIn>

          {/* Date 2023 en filigrane */}
          <div className="absolute -top-8 right-0 text-[200px] lg:text-[280px] font-light text-sage-500/10 tracking-tighter pointer-events-none select-none leading-none hidden lg:block">
            2023
          </div>
        </div>

        {/* Texte narratif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Fondée en <strong className="text-navy-700 font-medium">2023 à Abidjan</strong>,
              CHAP &amp; CO est née de la conviction que l&apos;Afrique de l&apos;Ouest, riche de son
              terroir et de ses producteurs, mérite une interface professionnelle et
              rigoureuse pour rayonner sur les marchés internationaux.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Notre rôle&nbsp;:{' '}
              <strong className="text-navy-700 font-medium">structurer l&apos;export</strong> des
              matières premières agricoles et alimentaires en garantissant qualité,
              traçabilité et conformité — du champ ivoirien aux ports européens,
              asiatiques et américains.
            </p>
          </FadeIn>
        </div>

        {/* Ligne décorative */}
        <FadeIn delay={0.8}>
          <div className="mt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-sage-500/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-sage-700">
              Abidjan — Côte d&apos;Ivoire
            </span>
            <div className="h-px flex-1 bg-sage-500/30" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
