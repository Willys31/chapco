import type { Metadata } from 'next';
import { EngagementsHero } from '@/components/sections/engagements/EngagementsHero';
import { EngagementsIntro } from '@/components/sections/engagements/EngagementsIntro';
import { EngagementsTimeline } from '@/components/sections/engagements/EngagementsTimeline';
import { EngagementsCTA } from '@/components/sections/engagements/EngagementsCTA';

export const metadata: Metadata = {
  title: 'Nos engagements | CHAP & CO — Six promesses pour votre approvisionnement',
  description:
    "Découvrez les six engagements de CHAP & CO : sélection rigoureuse des filières, maîtrise des volumes, contrôle qualité, traçabilité, documentation export et logistique maritime sécurisée.",
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
