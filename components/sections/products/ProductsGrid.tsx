'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';
import { products, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

type FilterValue = 'all' | ProductCategory;

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};

export function ProductsGrid() {
  const t = useTranslations('products_grid');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: t('filter_all') },
    { value: 'consommable', label: t('filter_consumable') },
    { value: 'non-consommable', label: t('filter_non_consumable') },
  ];

  const filteredProducts =
    activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                {t('eyebrow')}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
                {t.rich('title', richOptions)}
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-sm text-ink/50 font-light">
              <span className="text-navy-700 font-medium">{filteredProducts.length}</span>{' '}
              {filteredProducts.length > 1 ? t('count_plural') : t('count_singular')}
              {activeFilter !== 'all' && (
                <span className="ml-1">
                  · {activeFilter === 'consommable' ? t('filter_consumable') : t('filter_non_consumable')}
                </span>
              )}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-navy-700 text-white shadow-lg'
                    : 'bg-white text-navy-700 border border-navy-700/20 hover:border-navy-700/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredProducts.map((product, index) => (
            <FadeIn
              key={`${product.slug}-${activeFilter}`}
              delay={index * 0.06}
            >
              <ProductCard product={product} locale={locale} />
            </FadeIn>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-ink/40 font-light">
            {t('empty')}
          </div>
        )}
      </div>
    </section>
  );
}
