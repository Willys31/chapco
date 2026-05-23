import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { OurStory } from '@/components/sections/about/OurStory';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { Positioning } from '@/components/sections/about/Positioning';
import { MarketOpportunity } from '@/components/sections/about/MarketOpportunity';
import { Founder } from '@/components/sections/about/Founder';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('about_title'),
    description: t('about_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/a-propos`,
      languages: {
        fr: `${siteConfig.url}/fr/a-propos`,
        en: `${siteConfig.url}/en/a-propos`,
      },
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Positioning />
      <MarketOpportunity />
      <Founder />
      <AboutCTA />
    </>
  );
}
