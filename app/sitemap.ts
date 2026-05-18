import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url,                           lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteConfig.url}/a-propos`,             lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/produits`,             lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteConfig.url}/qualite`,              lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/logistique`,           lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/contact`,              lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteConfig.url}/produits/${product.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
