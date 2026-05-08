import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';

export function ProductsCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            Besoin d&apos;un échantillon ou d&apos;une cotation ?
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8">
            Recevez nos fiches techniques
            <br />
            et un <em className="italic text-sage-300">devis personnalisé</em>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto mb-12">
            Précisez vos volumes, vos conditionnements et vos exigences qualité — nous
            revenons vers vous sous 48h ouvrées.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Demander un devis
              </Button>
            </Link>
            <a
              href="tel:+2250704767676"
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors font-light"
            >
              <Phone className="w-4 h-4" />
              <span>+225 07 04 76 76 76</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
