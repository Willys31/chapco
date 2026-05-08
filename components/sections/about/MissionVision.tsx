import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

export function MissionVision() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Mission &amp; Ambition
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Ce qui nous <em className="italic text-forest-500">guide</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Grid 2 colonnes contrastées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-sage-500/20 rounded-sm overflow-hidden">

          {/* COLONNE 1 — NOTRE MISSION (clair) */}
          <FadeIn>
            <div className="bg-cream p-12 lg:p-16 h-full flex flex-col">
              <div className="text-6xl font-light text-sage-500 mb-8 leading-none">I</div>

              <h3 className="text-2xl md:text-3xl font-light text-navy-700 mb-6 tracking-tight">
                Notre mission
              </h3>

              <p className="text-lg text-ink/70 font-light leading-relaxed mb-8 flex-1">
                Être{' '}
                <strong className="text-navy-700 font-medium">l&apos;interface stratégique</strong>{' '}
                entre les producteurs locaux d&apos;Afrique de l&apos;Ouest et les industriels,
                distributeurs et transformateurs du marché mondial.
              </p>

              <ul className="space-y-3 text-sm text-ink/60">
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-0.5">→</span>
                  <span>Connecter producteurs locaux et industriels locaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-0.5">→</span>
                  <span>Connecter producteurs locaux et industriels internationaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-0.5">→</span>
                  <span>Distribuer à l&apos;étranger avec des standards rigoureux</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* COLONNE 2 — NOTRE AMBITION (sombre) */}
          <FadeIn delay={0.2}>
            <div className="bg-navy-900 text-white p-12 lg:p-16 h-full flex flex-col relative overflow-hidden">
              {/* Flèches en filigrane */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <ArrowsBackground baseOpacity={1} />
              </div>

              <div className="text-6xl font-light text-sage-300 mb-8 leading-none relative">II</div>

              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight relative">
                Notre ambition
              </h3>

              <blockquote className="text-lg text-white/80 font-light leading-relaxed mb-8 flex-1 relative">
                <span className="text-sage-300 text-4xl leading-none">&ldquo;</span>
                Établir des{' '}
                <em className="italic text-sage-300">partenariats durables</em> avec des
                acteurs majeurs du marché mondial.
                <span className="text-sage-300 text-4xl leading-none">&rdquo;</span>
              </blockquote>

              <ul className="space-y-3 text-sm text-white/60 relative">
                <li className="flex items-start gap-3">
                  <span className="text-sage-300 mt-0.5">→</span>
                  <span>Référencement de produits à fort potentiel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-300 mt-0.5">→</span>
                  <span>Développement en marque distributeur (MDD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-300 mt-0.5">→</span>
                  <span>Approvisionnement contractuel régulier</span>
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
