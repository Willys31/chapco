import { FadeIn } from '@/components/animations/FadeIn';
import type { Product } from '@/data/products';

const descriptionTitles: Record<string, string> = {
  'attieke-deshydrate': "Le savoir-faire ivoirien, prêt pour l'export.",
  'huile-rouge-palme': 'Une huile riche, naturelle et polyvalente.',
  'farine-manioc': "L'alternative sans gluten au cœur des cuisines modernes.",
  'feuilles-hibiscus': "Une plante aux mille usages, du bien-être à l'industrie.",
  'graine-palme': "Au cœur de l'industrie mondiale.",
  coco: 'Polyvalence et durabilité, en une seule matière première.',
  hibiscus: 'Du terroir africain aux laboratoires du monde.',
  hevea: 'La matière première essentielle aux industries modernes.',
  karite: "L'or blanc de l'Afrique, prisé dans le monde entier.",
};

export function ProductDescription({ product }: { product: Product }) {
  const title = descriptionTitles[product.slug] ?? product.shortDescription;

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            À propos du produit
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-light text-navy-700 tracking-tight leading-[1.2] mb-10">
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            {product.fullDescription}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-sage-500/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-sage-700">
              {product.categoryLabel}
            </span>
            <div className="h-px flex-1 bg-sage-500/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
