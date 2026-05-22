import { AboutHero } from '@/components/sections/about/AboutHero';
import { OurStory } from '@/components/sections/about/OurStory';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { Positioning } from '@/components/sections/about/Positioning';
import { MarketOpportunity } from '@/components/sections/about/MarketOpportunity';
import { Founder } from '@/components/sections/about/Founder';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export const metadata = {
  title: 'À propos | CHAP & CO — Négoce et exportation depuis Abidjan',
  description:
    "CHAP IMPORT CO, entreprise ivoirienne de négoce export créée en 2023. Interface producteurs africains et industriels mondiaux. Contactez-nous.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Positioning />
      <MarketOpportunity />
      <Founder />
      <AboutCTA />
    </>
  );
}
