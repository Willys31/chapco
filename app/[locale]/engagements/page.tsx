import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { EngagementsHero } from '@/components/sections/engagements/EngagementsHero';
import { EngagementsIntro } from '@/components/sections/engagements/EngagementsIntro';
import { EngagementsTimeline } from '@/components/sections/engagements/EngagementsTimeline';
import { EngagementsCTA } from '@/components/sections/engagements/EngagementsCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('engagements_title'),
    description: t('engagements_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/engagements`,
      languages: {
        fr: `${siteConfig.url}/fr/engagements`,
        en: `${siteConfig.url}/en/engagements`,
      },
    },
  };
}

export default function EngagementsPage() {
  return (
    <>
      <EngagementsHero />
      <EngagementsIntro />
      <EngagementsTimeline />
      <EngagementsCTA />
    </>
  );
}
