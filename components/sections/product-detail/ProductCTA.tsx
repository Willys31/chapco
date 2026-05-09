import Link from 'next/link';
import { Phone, Mail, FileText, Package } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/data/products';

export function ProductCTA({ product }: { product: Product }) {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* COLONNE GAUCHE — Titre + actions */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                Passons à l&apos;action
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-6">
                Intéressé par{' '}
                <em className="italic text-forest-500">{product.name}</em>&nbsp;?
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-ink/70 font-light leading-relaxed mb-8">
                Recevez une fiche technique complète, un échantillon, ou un devis personnalisé
                selon vos besoins en volumes, conditionnements et destinations.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/contact?product=${product.slug}&type=devis`}>
                  <Button variant="primary" size="lg">
                    <FileText className="w-4 h-4" />
                    Demander un devis
                  </Button>
                </Link>
                <Link
                  href={`/contact?product=${product.slug}&type=echantillon`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy-700 text-navy-700 rounded-md hover:bg-navy-700 hover:text-white transition-all font-medium text-base"
                >
                  <Package className="w-4 h-4" />
                  Recevoir un échantillon
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* COLONNE DROITE — Carte contact Cedric */}
          <FadeIn delay={0.4} className="lg:col-span-5">
            <div className="bg-navy-900 rounded-sm p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Pattern flèches */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={`cta-pattern-${product.slug}`}
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M10 30 L50 30 M40 20 L50 30 L40 40"
                      stroke="#C8E0C8"
                      fill="none"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#cta-pattern-${product.slug})`} />
              </svg>

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-sage-300 mb-2">
                  Contact direct
                </p>
                <p className="text-2xl font-light mb-1 tracking-tight">Cedric Messou</p>
                <p className="text-sm text-white/60 mb-8 font-light">
                  Fondateur — CHAP &amp; CO
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+2250704767676"
                    className="group flex items-center gap-3 hover:text-sage-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sage-300/20 transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-light">+225 07 04 76 76 76</span>
                  </a>

                  <a
                    href={`mailto:Cmessou@chapco.ci?subject=${encodeURIComponent('Demande info ' + product.name)}`}
                    className="group flex items-center gap-3 hover:text-sage-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sage-300/20 transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-light">Cmessou@chapco.ci</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-300 mb-2">
                    Réactivité
                  </p>
                  <p className="text-sm text-white/70 font-light">Réponse sous 48h ouvrées</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
