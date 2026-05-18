import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

export function ProductsHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy-900 overflow-hidden flex items-center pt-40 pb-20">
      {/* Flèches signature */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      {/* Halo lumineux */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[55%] h-[55%] rounded-full bg-forest-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            Notre gamme complète
          </p>
        </FadeIn>

        {/* Titre */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
            Le terroir africain
            <br />
            <em className="italic text-sage-300">en neuf filières.</em>
          </h1>
        </FadeIn>

        {/* Sous-titre */}
        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Du produit alimentaire prêt à l&apos;export aux matières premières destinées à la
            transformation industrielle, cosmétique et pharmaceutique.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
