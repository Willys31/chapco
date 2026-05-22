import type { Metadata } from 'next';

export const siteConfig = {
  name: 'CHAP & CO',
  legalName: 'CHAP IMPORT & CO',
  url: 'https://chapco.ci',
  ogImage: '/og-image.jpg',
  description:
    "CHAP & CO, entreprise ivoirienne spécialisée dans la structuration et l'exportation de matières premières agricoles & alimentaires d'Afrique de l'Ouest vers le monde. Attiéké, huile de palme, karité, hévéa, hibiscus, coco.",
  founder: 'Cedric Messou',
  foundedYear: 2023,
  contact: {
    phone: '+225 07 04 76 76 76',
    email: 'cmessou@chapco.ci',
    address: {
      city: 'Abidjan',
      country: "Côte d'Ivoire",
      countryCode: 'CI',
    },
  },
  keywords: [
    "négoce agricole Côte d'Ivoire",
    'exportation matières premières Afrique',
    'fournisseur attiéké export',
    'huile de palme rouge export',
    'beurre de karité Afrique',
    'caoutchouc naturel hévéa',
    'feuilles hibiscus export',
    'farine manioc sans gluten',
    'graine de palme industrielle',
    'coco bio Afrique de l Ouest',
    'export FOB Abidjan',
    'CIF Marseille Anvers Rotterdam',
    'CHAP IMPORT CO',
  ],
};

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Négoce & exportation depuis Abidjan`;
  const fullDescription = description || siteConfig.description;
  const fullUrl = `${siteConfig.url}${path}`;
  const fullImage = image || `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.founder }],
    creator: siteConfig.founder,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: fullUrl },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [{ url: fullImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'pQ8ImpMUq0Gi7HZ3R_oZPu05Mc5B9b7aGKlWG_JWI_k',
    },
  };
}
