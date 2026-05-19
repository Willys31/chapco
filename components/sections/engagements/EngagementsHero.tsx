import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { ShieldCheck } from 'lucide-react';

export function EngagementsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy-900 overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sage-500/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn delay={0.2}>
          <div className="inline-flex relative mb-10">
            <div className="absolute inset-0 bg-sage-500/30 blur-2xl rounded-full" />
            <div className="relative w-20 h-20 rounded-full bg-white/5 border border-sage-300/30 flex items-center justify-center backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 text-sage-300" strokeWidth={1.5} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            Nos six promesses
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-8">
            La <em className="italic text-sage-300">rigueur</em>
            <br />
            au service de votre confiance.
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-lg md:text-xl text-cream/70 font-light max-w-3xl mx-auto leading-relaxed">
            De la sélection des filières en Afrique de l&apos;Ouest à la livraison dans les ports
            européens, chaque étape est pensée pour sécuriser votre approvisionnement.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
