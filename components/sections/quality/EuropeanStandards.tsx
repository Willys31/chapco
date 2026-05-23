import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Globe, ArrowRight, Award } from 'lucide-react';

export async function EuropeanStandards() {
  const t = await getTranslations('quality');

  const stats = [
    { value: t('standards_stat_1_value'), label: t('standards_stat_1_label') },
    { value: t('standards_stat_2_value'), label: t('standards_stat_2_label') },
    { value: t('standards_stat_3_value'), label: t('standards_stat_3_label') },
    { value: t('standards_stat_4_value'), label: t('standards_stat_4_label') },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-sage-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-forest-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              {t('standards_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              {t('standards_title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              {t('standards_body')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">

          <FadeIn delay={0.1}>
            <div className="p-8 rounded-sm border border-white/10 bg-white/5 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">{t('standards_col1_label')}</p>
              <h3 className="text-xl font-medium text-white mb-3">{t('standards_col1_title')}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {t('standards_col1_desc')}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 rounded-sm border border-sage-500/40 bg-sage-500/15 text-center relative h-full">
              <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center">
                <ArrowRight className="w-8 h-8 text-sage-400" />
              </div>
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center">
                <ArrowRight className="w-8 h-8 text-sage-400" />
              </div>

              <div className="w-16 h-16 rounded-full bg-sage-500/30 border border-sage-300/50 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">{t('standards_col2_label')}</p>
              <h3 className="text-xl font-medium text-white mb-3">{t('standards_col2_title')}</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {t('standards_col2_desc')}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="p-8 rounded-sm border border-white/10 bg-white/5 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sage-300" strokeWidth={1.2} />
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-sage-300 mb-2">{t('standards_col3_label')}</p>
              <h3 className="text-xl font-medium text-white mb-3">{t('standards_col3_title')}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {t('standards_col3_desc')}
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-light text-sage-300 mb-2">{item.value}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
