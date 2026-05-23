import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Product } from '@/data/products';
import { getLocalized } from '@/data/products';

const descriptionTitles: Record<string, { fr: string; en: string }> = {
  'attieke-deshydrate': {
    fr: "Le savoir-faire ivoirien, prêt pour l'export.",
    en: "Ivorian know-how, ready for export.",
  },
  'huile-rouge-palme': {
    fr: 'Une huile riche, naturelle et polyvalente.',
    en: 'A rich, natural and versatile oil.',
  },
  'farine-manioc': {
    fr: "L'alternative sans gluten au cœur des cuisines modernes.",
    en: 'The gluten-free alternative at the heart of modern kitchens.',
  },
  'feuilles-hibiscus': {
    fr: "Une plante aux mille usages, du bien-être à l'industrie.",
    en: 'A plant with a thousand uses, from wellness to industry.',
  },
  'graine-palme': {
    fr: "Au cœur de l'industrie mondiale.",
    en: 'At the heart of global industry.',
  },
  coco: {
    fr: 'Polyvalence et durabilité, en une seule matière première.',
    en: 'Versatility and sustainability in a single raw material.',
  },
  hibiscus: {
    fr: 'Du terroir africain aux laboratoires du monde.',
    en: 'From African terroir to laboratories worldwide.',
  },
  hevea: {
    fr: 'La matière première essentielle aux industries modernes.',
    en: 'The essential raw material for modern industries.',
  },
  karite: {
    fr: "L'or blanc de l'Afrique, prisé dans le monde entier.",
    en: "Africa's white gold, prized worldwide.",
  },
};

interface ProductDescriptionProps {
  product: Product;
  locale: string;
}

export async function ProductDescription({ product, locale }: ProductDescriptionProps) {
  const t = await getTranslations({ locale, namespace: 'product_detail' });

  const titleEntry = descriptionTitles[product.slug];
  const title = titleEntry
    ? locale === 'en' ? titleEntry.en : titleEntry.fr
    : getLocalized(product.shortDescription, locale);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            {t('desc_eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-light text-navy-700 tracking-tight leading-[1.2] mb-10">
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            {getLocalized(product.fullDescription, locale)}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-sage-500/30" />
            <span className="text-xs tracking-[0.3em] uppercase text-sage-700">
              {getLocalized(product.categoryLabel, locale)}
            </span>
            <div className="h-px flex-1 bg-sage-500/30" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
