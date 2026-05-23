import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { LogisticsHero } from '@/components/sections/logistics/LogisticsHero';
import { ExportModes } from '@/components/sections/logistics/ExportModes';
import { DestinationsMap } from '@/components/sections/logistics/DestinationsMap';
import { Proposals } from '@/components/sections/logistics/Proposals';
import { LogisticsProcess } from '@/components/sections/logistics/LogisticsProcess';
import { LogisticsCTA } from '@/components/sections/logistics/LogisticsCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('logistics_title'),
    description: t('logistics_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/logistique`,
      languages: {
        fr: `${siteConfig.url}/fr/logistique`,
        en: `${siteConfig.url}/en/logistique`,
      },
    },
  };
}

export default function LogisticsPage() {
  return (
    <>
      <LogisticsHero />
      <ExportModes />
      <DestinationsMap />
      <Proposals />
      <LogisticsProcess />
      <LogisticsCTA />
    </>
  );
}
