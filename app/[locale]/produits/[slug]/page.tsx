import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { products, getProductBySlug, getLocalized } from '@/data/products';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/seo';
import { ProductDetailHero } from '@/components/sections/product-detail/ProductDetailHero';
import { ProductDescription } from '@/components/sections/product-detail/ProductDescription';
import { ProductFeatures } from '@/components/sections/product-detail/ProductFeatures';
import { ProductPackagingSection } from '@/components/sections/product-detail/ProductPackagingSection';
import { ProductApplications } from '@/components/sections/product-detail/ProductApplications';
import { ProductCTA } from '@/components/sections/product-detail/ProductCTA';
import { RelatedProducts } from '@/components/sections/product-detail/RelatedProducts';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product not found | CHAP & CO' };
  }

  const name = getLocalized(product.name, locale);
  const categoryLabel = getLocalized(product.categoryLabel, locale);
  const shortDesc = getLocalized(product.shortDescription, locale).replace(/\.$/, '');

  const description =
    locale === 'en'
      ? `${name} for export from Côte d'Ivoire. ${shortDesc}. Custom packaging. Quote within 48h.`
      : `${name} à l'export depuis la Côte d'Ivoire. ${shortDesc}. Conditionnement sur mesure. Devis sous 48h.`;

  return {
    title: `${name} | CHAP & CO — ${categoryLabel}`,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}/produits/${slug}`,
      languages: {
        fr: `${siteConfig.url}/fr/produits/${slug}`,
        en: `${siteConfig.url}/en/produits/${slug}`,
      },
    },
    openGraph: {
      title: `${name} — CHAP & CO`,
      description: getLocalized(product.fullDescription, locale),
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isConsumable = product.category === 'consommable';

  return (
    <>
      <ProductDetailHero product={product} locale={locale} />
      <ProductDescription product={product} locale={locale} />
      <ProductFeatures product={product} locale={locale} />

      {isConsumable && product.packaging && (
        <ProductPackagingSection product={product} locale={locale} />
      )}

      {!isConsumable && product.applications && (
        <ProductApplications product={product} locale={locale} />
      )}

      <ProductCTA product={product} locale={locale} />
      <RelatedProducts currentSlug={product.slug} category={product.category} locale={locale} />
    </>
  );
}
