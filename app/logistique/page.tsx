import type { Metadata } from 'next';
import { LogisticsHero } from '@/components/sections/logistics/LogisticsHero';
import { ExportModes } from '@/components/sections/logistics/ExportModes';
import { DestinationsMap } from '@/components/sections/logistics/DestinationsMap';
import { Proposals } from '@/components/sections/logistics/Proposals';
import { LogisticsProcess } from '@/components/sections/logistics/LogisticsProcess';
import { LogisticsCTA } from '@/components/sections/logistics/LogisticsCTA';

export const metadata: Metadata = {
  title: 'Logistique Export | CHAP & CO — FOB Abidjan, CIF Europe',
  description:
    "CHAP & CO assure le transport maritime sécurisé de vos matières premières depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam et autres ports mondiaux. Modes FOB et CIF disponibles.",
};

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
