'use client';

import { useState } from 'react';
import { FileDown, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/data/products';
import { getLocalized } from '@/data/products';
import { getProductIcon } from '@/lib/product-icons';

interface ProductDetailHeroProps {
  product: Product;
  locale: string;
}

export function ProductDetailHero({ product, locale }: ProductDetailHeroProps) {
  const [imageError, setImageError] = useState(false);
  const t = useTranslations('product_detail');
  const Icon = getProductIcon(product.slug);
  const isConsumable = product.category === 'consommable';

  const name = getLocalized(product.name, locale);
  const categoryLabel = getLocalized(product.categoryLabel, locale);
  const shortDescription = getLocalized(product.shortDescription, locale);
  const imageAlt = getLocalized(product.imageAlt, locale);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-navy-900 overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <FadeIn>
          <nav className="flex items-center gap-2 text-xs text-white/50 tracking-[0.18em] uppercase mb-12">
            <Link href="/" className="hover:text-sage-300 transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <span>/</span>
            <Link href="/produits" className="hover:text-sage-300 transition-colors">
              {t('breadcrumb_products')}
            </Link>
            <span>/</span>
            <span className="text-sage-300">{name}</span>
          </nav>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <FadeIn delay={0.15}>
              <span
                className={`inline-flex text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full font-medium ${
                  isConsumable
                    ? 'bg-sage-500/20 text-sage-300 border border-sage-500/30'
                    : 'bg-white/10 text-white border border-white/20'
                }`}
              >
                {categoryLabel}
              </span>
            </FadeIn>

            <FadeIn delay={0.25}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05]">
                {name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl text-cream/75 font-light leading-relaxed max-w-xl">
                {shortDescription}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="h-px w-24 bg-sage-500" />
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-300 mb-2">{t('origin_label')}</p>
                  <p className="text-white font-light">{t('origin_value')}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-300 mb-2">
                    {t('availability_label')}
                  </p>
                  <p className="text-white font-light">{t('availability_value')}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href={`/contact?product=${product.slug}&type=devis`}>
                  <Button variant="primary" size="lg">
                    <Send className="w-4 h-4" />
                    {t('quote_button')}
                  </Button>
                </Link>
                <Link
                  href={`/contact?product=${product.slug}&type=echantillon`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white rounded-md hover:bg-white/10 transition-all font-medium text-base"
                >
                  <FileDown className="w-4 h-4" />
                  {t('sample_button')}
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.35} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sage-500/30 rounded-sm" />
              <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl">
                {!imageError ? (
                  <img
                    src={product.image}
                    alt={imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <PlaceholderDark Icon={Icon} slug={product.slug} placeholderText={t('placeholder_text')} />
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PlaceholderDark({
  Icon,
  slug,
  placeholderText,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  slug: string;
  placeholderText: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-hero-${slug}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8E0C8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-hero-${slug})`} />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-white/5 border border-sage-300/30 flex items-center justify-center">
          <Icon className="w-12 h-12 text-sage-300" strokeWidth={1} />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-sage-300/60">{placeholderText}</p>
      </div>
    </div>
  );
}
