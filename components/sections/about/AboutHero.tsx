import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] bg-navy-900 overflow-hidden flex items-center pt-40 pb-20">
      {/* Flèches signature */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      {/* Halo lumineux */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full bg-sage-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 w-full">

        {/* Eyebrow */}
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            Qui sommes-nous
          </p>
        </FadeIn>

        {/* Titre principal */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
            L&apos;Afrique en partage,
            <br />
            <em className="italic text-sage-300">le monde en horizon.</em>
          </h1>
        </FadeIn>

        {/* Sous-titre */}
        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Une société ivoirienne spécialisée dans la structuration et l&apos;exportation
            de matières premières agricoles d&apos;Afrique de l&apos;Ouest vers le monde.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
