import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/seo';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactSection } from '@/components/sections/contact/ContactSection';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { ContactMap } from '@/components/sections/contact/ContactMap';
import { ContactCTA } from '@/components/sections/contact/ContactCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('contact_title'),
    description: t('contact_desc'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/contact`,
      languages: {
        fr: `${siteConfig.url}/fr/contact`,
        en: `${siteConfig.url}/en/contact`,
      },
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
