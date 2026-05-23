import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { CategoriesIntro } from '@/components/sections/products/CategoriesIntro';
import { ProductsGrid } from '@/components/sections/products/ProductsGrid';
import { ProductsCTA } from '@/components/sections/products/ProductsCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('products_title'),
    description: t('products_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/produits`,
      languages: {
        fr: `${siteConfig.url}/fr/produits`,
        en: `${siteConfig.url}/en/produits`,
      },
    },
  };
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <CategoriesIntro />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}
