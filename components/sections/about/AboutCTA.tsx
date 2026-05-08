import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

export function AboutCTA() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            Construisons ensemble
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-8">
            Vous partagez notre{' '}
            <em className="italic text-forest-500">vision</em>&nbsp;?
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-ink/70 font-light max-w-2xl mx-auto mb-12">
            Découvrez notre gamme de produits ou échangez directement avec nous pour
            construire un partenariat sur mesure.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                Voir nos produits
              </Button>
            </Link>
            <Link
              href="/contact"
              className="group text-navy-700 font-medium hover:text-sage-700 transition-colors flex items-center gap-2"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
