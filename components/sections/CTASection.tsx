import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { FadeIn } from '@/components/animations/FadeIn';

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-navy-900">
      {/* Image de fond floutée */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494412574745-7e8b58e0e2d2?w=1920&q=90"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-900/95" />
      </div>

      {/* Flèches signature */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            Construisons ensemble
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
            Prêt à établir un
            <br />
            partenariat <em className="italic text-sage-300">durable</em> ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto mb-12">
            Échantillons, fiches techniques détaillées, étude tarifaire — nous sommes prêts à
            répondre à vos besoins spécifiques.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="lg">
              Demander un devis
            </Button>
            <Link
              href="/contact"
              className="group text-white font-light hover:text-sage-300 transition-colors flex items-center gap-2"
            >
              Nous appeler{' '}
              <span className="text-sage-300">+225 07 04 76 76 76</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
