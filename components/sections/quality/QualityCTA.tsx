'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { FileText, Phone } from 'lucide-react';

export function QualityCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            Besoin de précisions ?
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-8">
            Demandez un dossier qualité
            <br />
            <em className="italic text-forest-500">sur mesure.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg text-ink/60 font-light max-w-2xl mx-auto mb-12">
            Précisez votre produit, votre marché de destination et vos exigences
            spécifiques — nous préparons un dossier de conformité adapté.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact?type=qualite">
              <Button variant="primary" size="lg">
                <FileText className="w-4 h-4" />
                Demander un dossier qualité
              </Button>
            </Link>
            <a
              href="tel:+22507047676"
              className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +225 07 04 76 76 76
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
