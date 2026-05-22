import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'CHAP & CO — Négoce & exportation de matières premières agricoles depuis Abidjan',
  description:
    "CHAP & CO, négoce de matières premières agricoles depuis Abidjan. Attiéké, karité, huile de palme, hévéa. Exportateur Afrique de l'Ouest. Devis sous 48h.",
};
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Guarantees } from '@/components/sections/Guarantees';
import { Process } from '@/components/sections/Process';
import { ProductsPreview } from '@/components/sections/ProductsPreview';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Guarantees />
      <Process />
      <ProductsPreview />
      <CTASection />
    </>
  );
}
