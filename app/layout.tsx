import './globals.css';
import { generateMetadata as generateSiteMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { ToasterProvider } from '@/components/providers/ToasterProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { PageTransition } from '@/components/effects/PageTransition';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = generateSiteMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:bg-navy-700 focus:text-white focus:px-6 focus:py-3 focus:rounded-md focus:font-medium focus:text-sm"
        >
          Aller au contenu principal
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
      </body>
    </html>
  );
}
