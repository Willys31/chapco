import { Hero } from '@/components/sections/Hero';
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
