import { Check } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Product } from '@/data/products';

export function ProductFeatures({ product }: { product: Product }) {
  if (product.category === 'consommable') {
    return <ConsumableFeatures product={product} />;
  }
  return <NonConsumableFeatures product={product} />;
}

// ─────────────────────────────────────────────────────
// VERSION CONSOMMABLE
// ─────────────────────────────────────────────────────
function ConsumableFeatures({ product }: { product: Product }) {
  type FeatureType = 'benefits' | 'segments' | 'opportunities' | 'uses';

  const featureType: FeatureType = product.benefits
    ? 'benefits'
    : product.targetSegments
    ? 'segments'
    : product.opportunities
    ? 'opportunities'
    : 'uses';

  const features =
    product.benefits ??
    product.targetSegments ??
    product.opportunities ??
    product.uses ??
    [];

  const titleMap: Record<FeatureType, { eyebrow: string; title: string }> = {
    benefits: { eyebrow: 'Atouts du produit', title: 'Pourquoi choisir ce produit' },
    segments: { eyebrow: 'Segments cibles', title: "À qui s'adresse ce produit" },
    opportunities: { eyebrow: 'Opportunités', title: 'Les opportunités du marché' },
    uses: { eyebrow: 'Utilisations', title: 'Ses multiples usages' },
  };

  const { eyebrow, title } = titleMap[featureType];

  if (features.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* COLONNE GAUCHE — Titre */}
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">{eyebrow}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.15]">
                {title}.
              </h2>
            </FadeIn>
          </div>

          {/* COLONNE DROITE — Liste */}
          <div className="lg:col-span-7">
            <ul>
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <li className="flex items-start gap-4 py-6 border-b border-sage-500/15 last:border-0">
                    <span className="text-xs uppercase tracking-[0.2em] text-sage-700 font-medium pt-1 min-w-[40px]">
                      0{index + 1}
                    </span>
                    <p className="text-lg text-ink/80 font-light leading-relaxed flex-1">
                      {feature}
                    </p>
                    <Check className="w-5 h-5 text-sage-500 mt-1 shrink-0" strokeWidth={1.5} />
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
// VERSION NON CONSOMMABLE (DÉRIVÉS)
// ─────────────────────────────────────────────────────
function NonConsumableFeatures({ product }: { product: Product }) {
  if (!product.derivatives) return null;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Filière complète
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.15] mb-6">
              Une matière première,
              <br />
              <em className="italic text-forest-500">de multiples dérivés</em>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/60 font-light">
              {product.name} se transforme en de nombreux produits finis et semi-finis utilisés
              dans des industries variées à travers le monde.
            </p>
          </FadeIn>
        </div>

        {/* Grid des catégories de dérivés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.derivatives.map((derivative, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative bg-cream p-8 lg:p-10 rounded-sm border border-sage-500/15 hover:border-sage-500/50 hover:shadow-xl transition-all duration-500 h-full">
                {/* Numéro en filigrane */}
                <div className="absolute top-6 right-6 text-5xl font-light text-sage-500/15 group-hover:text-sage-500/30 transition-colors leading-none">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-medium text-navy-700 mb-6 tracking-tight relative">
                  {derivative.category}
                </h3>

                <ul className="space-y-3">
                  {derivative.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-ink/70 font-light leading-relaxed"
                    >
                      <span className="text-sage-500 mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
