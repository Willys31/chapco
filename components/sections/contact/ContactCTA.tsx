'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';
import { Package, ArrowRight } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full bg-forest-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">En attendant</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8">
            Explorez notre gamme
            <br />
            <em className="italic text-sage-300">de neuf filières.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12">
            Découvrez en détail chacun de nos produits, leurs dérivés et leurs applications
            dans nos fiches techniques en ligne.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                <Package className="w-4 h-4" />
                Voir tous nos produits
              </Button>
            </Link>
            <Link
              href="/qualite"
              className="inline-flex items-center gap-2 text-white/70 font-medium hover:text-sage-300 transition-colors group"
            >
              Notre démarche qualité
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
