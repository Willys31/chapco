import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { CategoriesIntro } from '@/components/sections/products/CategoriesIntro';
import { ProductsGrid } from '@/components/sections/products/ProductsGrid';
import { ProductsCTA } from '@/components/sections/products/ProductsCTA';

export const metadata = {
  title: 'Nos produits | CHAP & CO — Matières premières agricoles & alimentaires',
  description:
    "Catalogue matières premières agricoles export : attiéké, karité, huile de palme, hévéa, hibiscus. Certifiés d'Afrique de l'Ouest. Devis.",
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
