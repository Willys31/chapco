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
    "Export FOB Abidjan ou CIF Europe : CHAP & CO assure la logistique maritime sécurisée depuis Abidjan vers Marseille, Anvers, Rotterdam. Devis.",
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
