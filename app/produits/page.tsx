import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { CategoriesIntro } from '@/components/sections/products/CategoriesIntro';
import { ProductsGrid } from '@/components/sections/products/ProductsGrid';
import { ProductsCTA } from '@/components/sections/products/ProductsCTA';

export const metadata = {
  title: 'Nos produits | CHAP & CO — Matières premières agricoles & alimentaires',
  description:
    "Découvrez les 9 produits de CHAP & CO : attiéké déshydraté, huile rouge de palme, farine de manioc, hibiscus, karité, hévéa, coco, graine de palme. Export Afrique vers le monde.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <CategoriesIntro />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}
