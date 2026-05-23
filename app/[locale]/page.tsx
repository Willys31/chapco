import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Guarantees } from '@/components/sections/Guarantees';
import { Process } from '@/components/sections/Process';
import { ProductsPreview } from '@/components/sections/ProductsPreview';
import { CTASection } from '@/components/sections/CTASection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('home_title'),
    description: t('home_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        fr: `${siteConfig.url}/fr`,
        en: `${siteConfig.url}/en`,
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Guarantees />
      <Process />
      <ProductsPreview />
      <CTASection />
    </>
  );
}
