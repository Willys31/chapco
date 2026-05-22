import type { Metadata } from 'next';
import { EngagementsHero } from '@/components/sections/engagements/EngagementsHero';
import { EngagementsIntro } from '@/components/sections/engagements/EngagementsIntro';
import { EngagementsTimeline } from '@/components/sections/engagements/EngagementsTimeline';
import { EngagementsCTA } from '@/components/sections/engagements/EngagementsCTA';

export const metadata: Metadata = {
  title: 'Nos engagements | CHAP & CO — Six promesses pour votre approvisionnement',
  description:
    "Six engagements CHAP & CO : sélection des filières, maîtrise volumes, contrôle qualité, traçabilité et logistique maritime sécurisée. Découvrez.",
};

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
