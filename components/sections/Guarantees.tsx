'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';


export function Guarantees() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
            Nos engagements
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.15] mb-6">
            Six piliers pour des partenariats{' '}
            <em className="italic text-sage-300">durables</em>
          </h2>
          <p className="text-lg text-white/60 font-light">
            De la sélection à l&apos;expédition, chaque étape est pensée pour sécuriser votre
            approvisionnement.
          </p>
        </FadeIn>

        {/* Image hero cinématographique */}
        <FadeIn delay={0.3}>
          <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto my-16 overflow-hidden rounded-sm group">
            {/* Fallback élégant (toujours présent en arrière-plan) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8E0C8" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
              </div>
              <div className="relative flex flex-col items-center gap-3 z-10">
                <ShieldCheck className="w-12 h-12 text-sage-500/40" strokeWidth={1} />
                <p className="text-xs uppercase tracking-[0.3em] text-sage-500/40">Image à venir</p>
              </div>
            </div>

            {/* Image principale */}
            <Image
              src="/images/engagements/hero-engagements.jpg"
              alt="Nos engagements qualité - CHAP & CO"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 1280px"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Overlay dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />

            {/* Texte flottant bas-gauche */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="max-w-md">
                <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-2">
                  Vue d&apos;ensemble
                </p>
                <p className="text-lg md:text-xl font-light text-white leading-snug">
                  De la ferme au conteneur,
                  <br />
                  chaque maillon est maîtrisé.
                </p>
              </div>
            </div>

            {/* Flèches décoratives */}
            <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
              <ArrowRight className="w-8 h-8 text-sage-300" strokeWidth={1} />
            </div>
          </div>
        </FadeIn>

        {/* CTA vers la page dédiée */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <Link
              href="/engagements"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-navy-700 text-white text-lg font-semibold rounded-xl hover:bg-navy-900 hover:scale-[1.02] shadow-md hover:shadow-xl transition-all duration-300"
            >
              Découvrir nos engagements en détail
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-white/50 font-light">
              Plongez dans chaque promesse, étape par étape.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
