'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { products, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

type FilterValue = 'all' | ProductCategory;

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Tous nos produits' },
  { value: 'consommable', label: 'Consommables' },
  { value: 'non-consommable', label: 'Non consommables' },
];

export function ProductsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredProducts =
    activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                Catalogue complet
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
                Nos <em className="italic text-forest-500">9 produits</em>
              </h2>
            </FadeIn>
          </div>

          {/* Compteur dynamique */}
          <FadeIn delay={0.2}>
            <p className="text-sm text-ink/50 font-light">
              <span className="text-navy-700 font-medium">{filteredProducts.length}</span>{' '}
              produit{filteredProducts.length > 1 ? 's' : ''}
              {activeFilter !== 'all' && (
                <span className="ml-1">
                  · {activeFilter === 'consommable' ? 'Consommables' : 'Non consommables'}
                </span>
              )}
            </p>
          </FadeIn>
        </div>

        {/* Onglets de filtre */}
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

        {/* Grille produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredProducts.map((product, index) => (
            <FadeIn
              key={`${product.slug}-${activeFilter}`}
              delay={index * 0.06}
            >
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-ink/40 font-light">
            Aucun produit dans cette catégorie.
          </div>
        )}
      </div>
    </section>
  );
}
