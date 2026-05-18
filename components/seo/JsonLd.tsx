import { siteConfig } from '@/lib/seo';
import { products } from '@/data/products';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/CHAP LOGO.png`,
    description: siteConfig.description,
    foundingDate: `${siteConfig.foundedYear}-01-01`,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
      jobTitle: 'Fondateur & Dirigeant',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'sales',
      availableLanguage: ['French', 'English'],
      areaServed: 'Worldwide',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: 'B2B',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'fr-FR',
    description: siteConfig.description,
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catalogue produits CHAP & CO',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.shortDescription,
        url: `${siteConfig.url}/produits/${product.slug}`,
        category: product.categoryLabel,
        manufacturer: {
          '@type': 'Organization',
          name: siteConfig.legalName,
        },
        countryOfOrigin: {
          '@type': 'Country',
          name: "Côte d'Ivoire",
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}
