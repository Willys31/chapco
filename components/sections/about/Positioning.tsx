import { Sprout, Globe } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};

export async function Positioning() {
  const t = await getTranslations('positioning');

  const valueProps = [
    { label: t('value_1_label'), detail: t('value_1_detail') },
    { label: t('value_2_label'), detail: t('value_2_detail') },
    { label: t('value_3_label'), detail: t('value_3_detail') },
    { label: t('value_4_label'), detail: t('value_4_detail') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight mb-6">
              {t.rich('title', richOptions)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light">{t('body')}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center shadow-lg mb-6">
                <Sprout className="w-10 h-10 text-forest-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">{t('col1_title')}</h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed mb-4">{t('col1_desc')}</p>
              <ul className="text-xs text-ink/50 space-y-1">
                <li>{t('col1_country_1')}</li>
                <li>{t('col1_country_2')}</li>
                <li>{t('col1_country_3')}</li>
              </ul>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-12 right-full w-full h-px bg-gradient-to-r from-transparent via-sage-500/50 to-sage-500 -translate-y-1/2 pr-4" />
              <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-l from-transparent via-sage-500/50 to-sage-500 -translate-y-1/2 pl-4" />
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 rounded-full bg-sage-500/20 blur-xl animate-pulse" />
                <div className="relative w-32 h-32 mx-auto rounded-full bg-navy-900 border-2 border-sage-300 flex items-center justify-center shadow-2xl">
                  <span className="text-white font-medium text-sm tracking-widest text-center leading-tight">
                    CHAP<br />&amp; CO
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">{t('col2_title')}</h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed">{t('col2_desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center shadow-lg mb-6">
                <Globe className="w-10 h-10 text-forest-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">{t('col3_title')}</h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed mb-4">{t('col3_desc')}</p>
              <ul className="text-xs text-ink/50 space-y-1">
                <li>{t('col3_region_1')}</li>
                <li>{t('col3_region_2')}</li>
                <li>{t('col3_region_3')}</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-sage-500/20">
            {valueProps.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-medium text-navy-700 mb-2 tracking-wide">{item.label}</p>
                <p className="text-xs text-ink/60 font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
