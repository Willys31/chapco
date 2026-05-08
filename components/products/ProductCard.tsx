'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const Icon = product.icon;

  return (
    <Link href={`/produits/${product.slug}`} className="group block">
      {/* Zone image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-sm mb-5">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <PlaceholderImage Icon={Icon} name={product.name} />
        )}

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/15 transition-colors duration-500" />

        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs tracking-[0.2em] uppercase backdrop-blur-md px-3 py-1.5 rounded-full font-medium ${
              product.category === 'consommable'
                ? 'bg-sage-500/90 text-white'
                : 'bg-navy-700/90 text-white'
            }`}
          >
            {product.categoryLabel}
          </span>
        </div>

        {/* Flèche au hover */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-navy-700" />
        </div>
      </div>

      {/* Infos */}
      <div className="space-y-1.5">
        <h3 className="text-lg font-medium text-navy-700 tracking-tight group-hover:text-sage-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-ink/60 font-light leading-relaxed">
          {product.shortDescription}
        </p>
        <p className="text-xs text-sage-700 font-medium pt-1 flex items-center gap-1">
          Voir la fiche
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
// Placeholder élégant (affiché tant que l'image n'est pas fournie)
// ─────────────────────────────────────────────────────────────
function PlaceholderImage({
  Icon,
  name,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  name: string;
}) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cream to-sage-100 flex flex-col items-center justify-center">
      {/* Pattern de points */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`dots-${name}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#1E2A5E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${name})`} />
      </svg>

      {/* Icône centrale */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm border border-sage-500/30 flex items-center justify-center shadow-sm">
          <Icon className="w-9 h-9 text-sage-600" strokeWidth={1.2} />
        </div>
        <span className="text-xs tracking-[0.25em] uppercase text-navy-700/40 font-medium">
          Image à venir
        </span>
      </div>
    </div>
  );
}
