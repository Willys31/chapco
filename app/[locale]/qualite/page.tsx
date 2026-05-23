import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { QualityHero } from '@/components/sections/quality/QualityHero';
import { QualityCommitment } from '@/components/sections/quality/QualityCommitment';
import { QualityDocuments } from '@/components/sections/quality/QualityDocuments';
import { EuropeanStandards } from '@/components/sections/quality/EuropeanStandards';
import { QualityProcess } from '@/components/sections/quality/QualityProcess';
import { QualityCTA } from '@/components/sections/quality/QualityCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('quality_title'),
    description: t('quality_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/qualite`,
      languages: {
        fr: `${siteConfig.url}/fr/qualite`,
        en: `${siteConfig.url}/en/qualite`,
      },
    },
  };
}

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <QualityCommitment />
      <QualityDocuments />
      <EuropeanStandards />
      <QualityProcess />
      <QualityCTA />
    </>
  );
}
