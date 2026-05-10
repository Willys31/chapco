import type { Metadata } from 'next';
import { QualityHero } from '@/components/sections/quality/QualityHero';
import { QualityCommitment } from '@/components/sections/quality/QualityCommitment';
import { QualityDocuments } from '@/components/sections/quality/QualityDocuments';
import { EuropeanStandards } from '@/components/sections/quality/EuropeanStandards';
import { QualityProcess } from '@/components/sections/quality/QualityProcess';
import { QualityCTA } from '@/components/sections/quality/QualityCTA';

export const metadata: Metadata = {
  title: 'Qualité & Conformité | CHAP & CO — Standards et certifications',
  description:
    "CHAP & CO garantit traçabilité, certificats phytosanitaires, analyses microbiologiques et alignement aux normes européennes pour vos approvisionnements depuis la Côte d'Ivoire.",
};

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <QualityCommitment />
      <QualityDocuments />
      <EuropeanStandards />
      <QualityProcess />
      <QualityCTA />
    </>
  );
}
