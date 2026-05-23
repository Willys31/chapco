'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/data/products';
import { getLocalized } from '@/data/products';
import { getProductIcon } from '@/lib/product-icons';

interface ProductCardProps {
  product: Product;
  locale: string;
}

export function ProductCard({ product, locale }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const t = useTranslations('products_grid');
  const Icon = getProductIcon(product.slug);
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-7deg', '7deg']);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const name = getLocalized(product.name, locale);
  const categoryLabel = getLocalized(product.categoryLabel, locale);
  const shortDescription = getLocalized(product.shortDescription, locale);
  const imageAlt = getLocalized(product.imageAlt, locale);

  return (
    <div className="[perspective:1000px]" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <motion.div ref={ref} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <Link href={`/produits/${product.slug}`} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-sm mb-5">
            {!imageError ? (
              <img
                src={product.image}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <PlaceholderImage Icon={Icon} slug={product.slug} />
            )}

            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-500" />

            <div className="absolute top-4 left-4">
              <span className={`text-xs tracking-[0.2em] uppercase backdrop-blur-md px-3 py-1.5 rounded-full font-medium ${
                product.category === 'consommable'
                  ? 'bg-sage-500/90 text-white'
                  : 'bg-navy-700/90 text-white'
              }`}>
                {categoryLabel}
              </span>
            </div>

            <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <div className="w-full bg-white/90 backdrop-blur-sm rounded-sm px-4 py-3 flex items-center justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-navy-700 text-xs font-medium tracking-[0.15em] uppercase">
                  {t('view_product')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-navy-700" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-lg font-medium text-navy-700 tracking-tight group-hover:text-sage-700 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-ink/60 font-light leading-relaxed">
              {shortDescription}
            </p>
            <p className="text-xs text-sage-700 font-medium pt-1 flex items-center gap-1">
              {t('view_sheet')}
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

function PlaceholderImage({
  Icon,
  slug,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  slug: string;
}) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cream to-sage-100 flex flex-col items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`dots-${slug}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#1E2A5E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${slug})`} />
      </svg>
      <div className="relative flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm border border-sage-500/30 flex items-center justify-center shadow-sm">
          <Icon className="w-9 h-9 text-sage-600" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
}
