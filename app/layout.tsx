import type { Metadata } from 'next';
import './globals.css';
import { ToasterProvider } from '@/components/providers/ToasterProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { PageTransition } from '@/components/effects/PageTransition';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'CHAP & CO — Négoce et exportation de matières premières agricoles | Abidjan',
  description:
    "CHAP & CO, entreprise ivoirienne spécialisée dans l'exportation de matières premières agricoles et alimentaires d'Afrique de l'Ouest vers le monde. Attiéké, huile de palme, karité, hévéa, hibiscus, coco.",
  keywords: [
    'négoce agricole',
    "export Côte d'Ivoire",
    'matières premières Afrique',
    'attiéké',
    'karité',
    'huile de palme',
    'hévéa',
    'hibiscus',
  ],
  openGraph: {
    title: 'CHAP & CO — De la terre africaine aux marchés du monde',
    description:
      'Négoce et exportation de matières premières agricoles & alimentaires depuis Abidjan',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          <Header />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
