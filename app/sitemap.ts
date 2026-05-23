import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/seo';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const locales = routing.locales;

  const staticPaths = [
    { path: '',            changeFrequency: 'weekly'  as const, priority: 1.0 },
    { path: '/a-propos',   changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/produits',   changeFrequency: 'weekly'  as const, priority: 0.9 },
    { path: '/qualite',    changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/logistique', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact',    changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/engagements',changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map(({ path, changeFrequency, priority }) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }))
  );

  const productPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${siteConfig.url}/${locale}/produits/${product.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...productPages];
}
