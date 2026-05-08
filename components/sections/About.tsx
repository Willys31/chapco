import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function About() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image avec cadre décoratif */}
          <FadeIn direction="left">
            <div className="relative ml-6 mt-6">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-sage-500/30 rounded-sm" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?w=1200&q=90"
                  alt="Agriculture africaine — CHAP & CO"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          {/* Texte */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-8">
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700">
                Qui sommes-nous
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.15]">
                L&apos;interface stratégique entre l&apos;Afrique
                <br />
                et le <em className="italic text-forest-500">monde</em>
              </h2>

              <p className="text-lg text-ink/70 font-light leading-relaxed">
                CHAP &amp; CO est une société ivoirienne créée en 2023, spécialisée dans la
                structuration et l&apos;exportation de matières premières agricoles d&apos;Afrique
                de l&apos;Ouest. Nous connectons producteurs locaux et acteurs majeurs du marché
                mondial — industriels, distributeurs, transformateurs.
              </p>

              <blockquote className="border-l-2 border-sage-500 pl-6 py-2 italic text-navy-700 text-lg">
                &ldquo;Notre ambition : établir des partenariats durables avec les leaders
                du marché mondial.&rdquo;
              </blockquote>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors group"
              >
                Découvrir notre histoire
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
