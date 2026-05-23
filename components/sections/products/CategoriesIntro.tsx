import { Utensils, Factory } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { productCategories, getLocalized } from '@/data/products';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};

export async function CategoriesIntro() {
  const t = await getTranslations('categories_intro');
  const locale = await getLocale();

  const consumable = productCategories.consommable;
  const nonConsumable = productCategories['non-consommable'];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t.rich('title', richOptions)}
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="group relative overflow-hidden rounded-sm bg-cream border border-sage-500/20 hover:border-sage-500/40 transition-all duration-500">
              <div className="p-10 lg:p-12 flex flex-col min-h-[380px]">
                <div className="w-16 h-16 rounded-full bg-sage-500/10 border border-sage-500/30 flex items-center justify-center mb-8 group-hover:bg-sage-500/20 transition-all duration-500">
                  <Utensils className="w-7 h-7 text-sage-700" strokeWidth={1.5} />
                </div>
                <p className="text-xs tracking-[0.25em] uppercase text-sage-700 font-medium mb-4">
                  {consumable.count} {t('count_suffix')}
                </p>
                <h3 className="text-2xl md:text-3xl font-light text-navy-700 mb-2 tracking-tight">
                  {getLocalized(consumable.label, locale)}
                </h3>
                <p className="text-base font-medium text-forest-500 mb-6 tracking-wide">
                  {getLocalized(consumable.sublabel, locale)}
                </p>
                <p className="text-sm text-ink/60 font-light leading-relaxed flex-1">
                  {getLocalized(consumable.description, locale)}
                </p>
                <div className="mt-8 flex items-center gap-2 text-navy-700 font-medium text-sm group-hover:text-sage-700 transition-colors">
                  {t('cta')}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-sage-500 to-forest-500 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group relative overflow-hidden rounded-sm bg-navy-900 transition-all duration-500">
              <div className="p-10 lg:p-12 flex flex-col min-h-[380px]">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-all duration-500">
                  <Factory className="w-7 h-7 text-sage-300" strokeWidth={1.5} />
                </div>
                <p className="text-xs tracking-[0.25em] uppercase text-sage-300 font-medium mb-4">
                  {nonConsumable.count} {t('count_suffix')}
                </p>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-tight">
                  {getLocalized(nonConsumable.label, locale)}
                </h3>
                <p className="text-base font-medium text-sage-300 mb-6 tracking-wide">
                  {getLocalized(nonConsumable.sublabel, locale)}
                </p>
                <p className="text-sm text-white/60 font-light leading-relaxed flex-1">
                  {getLocalized(nonConsumable.description, locale)}
                </p>
                <div className="mt-8 flex items-center gap-2 text-white/70 font-medium text-sm group-hover:text-sage-300 transition-colors">
                  {t('cta')}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-sage-500 to-sage-300 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
