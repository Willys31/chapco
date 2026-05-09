import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductBySlug } from '@/data/products';
import { ProductDetailHero } from '@/components/sections/product-detail/ProductDetailHero';
import { ProductDescription } from '@/components/sections/product-detail/ProductDescription';
import { ProductFeatures } from '@/components/sections/product-detail/ProductFeatures';
import { ProductPackagingSection } from '@/components/sections/product-detail/ProductPackagingSection';
import { ProductApplications } from '@/components/sections/product-detail/ProductApplications';
import { ProductCTA } from '@/components/sections/product-detail/ProductCTA';
import { RelatedProducts } from '@/components/sections/product-detail/RelatedProducts';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Produit non trouvé | CHAP & CO' };
  }

  return {
    title: `${product.name} | CHAP & CO — ${product.categoryLabel}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — CHAP & CO`,
      description: product.fullDescription,
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isConsumable = product.category === 'consommable';

  return (
    <>
      <ProductDetailHero product={product} />
      <ProductDescription product={product} />
      <ProductFeatures product={product} />

      {isConsumable && product.packaging && (
        <ProductPackagingSection product={product} />
      )}

      {!isConsumable && product.applications && (
        <ProductApplications product={product} />
      )}

      <ProductCTA product={product} />
      <RelatedProducts currentSlug={product.slug} category={product.category} />
    </>
  );
}
