import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { products, type ProductCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

interface RelatedProductsProps {
  currentSlug: string;
  category: ProductCategory;
}

export function RelatedProducts({ currentSlug, category }: RelatedProductsProps) {
  const related = products
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-sage-500/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                Vous pourriez aussi aimer
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-light text-navy-700 tracking-tight">
                Autres{' '}
                <em className="italic text-forest-500">
                  {category === 'consommable' ? 'produits alimentaires' : 'matières premières'}
                </em>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <Link
              href="/produits"
              className="group inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors whitespace-nowrap"
            >
              Voir tous les produits
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((product, index) => (
            <FadeIn key={product.slug} delay={index * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
