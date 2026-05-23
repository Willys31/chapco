import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToasterProvider } from '@/components/providers/ToasterProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { PageTransition } from '@/components/effects/PageTransition';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/seo';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      template: '%s | CHAP & CO',
      default: t('home_title'),
    },
    description: t('home_desc'),
    alternates: {
      languages: {
        fr: `${siteConfig.url}/fr`,
        en: `${siteConfig.url}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:bg-navy-700 focus:text-white focus:px-6 focus:py-3 focus:rounded-md focus:font-medium focus:text-sm"
          >
            {t('skip_to_content')}
          </a>
          <LoadingScreen />
          <CustomCursor />
          <SmoothScrollProvider>
            <Header />
            <PageTransition>
              <main id="main-content" className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScrollProvider>
          <ToasterProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
