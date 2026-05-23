import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { Anchor, Container, Check } from 'lucide-react';

export async function ExportModes() {
  const t = await getTranslations('logistics');

  const fobItems = [t('fob_point_1'), t('fob_point_2'), t('fob_point_3'), t('fob_point_4')];
  const cifItems = [t('cif_point_1'), t('cif_point_2'), t('cif_point_3'), t('cif_point_4')];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('modes_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('modes_title')}
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-sage-500/20 bg-white overflow-hidden h-full flex flex-col">
              <div className="p-8 lg:p-10 flex-1">
                <span className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-sage-100 text-sage-700 font-medium mb-6">
                  {t('fob_badge')}
                </span>

                <div className="w-16 h-16 rounded-full bg-cream border border-sage-500/30 flex items-center justify-center mb-6">
                  <Anchor className="w-7 h-7 text-forest-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-light text-navy-700 mb-4 tracking-tight">
                  {t('fob_title')}
                </h3>

                <p className="text-ink/70 font-light leading-relaxed mb-6">
                  {t('fob_desc')}
                </p>

                <ul className="space-y-3 mb-8">
                  {fobItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/60">
                      <Check className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-sage-500/15">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-700 mb-1">
                    {t('fob_footer_label')}
                  </p>
                  <p className="text-sm font-medium text-navy-700">
                    {t('fob_footer_value')}
                  </p>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-sage-400 to-sage-600" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-sm overflow-hidden h-full flex flex-col">
              <div className="bg-navy-900 p-8 lg:p-10 flex-1">
                <span className="inline-block text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-sage-500/20 text-sage-300 border border-sage-300/30 font-medium mb-6">
                  {t('cif_badge')}
                </span>

                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Container className="w-7 h-7 text-sage-300" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-light text-white mb-4 tracking-tight">
                  {t('cif_title')}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-6">
                  {t('cif_desc')}
                </p>

                <ul className="space-y-3 mb-8">
                  {cifItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-300 mb-1">
                    {t('cif_footer_label')}
                  </p>
                  <p className="text-sm font-medium text-white">
                    {t('cif_footer_value')}
                  </p>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-forest-500 to-sage-500" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-ink/50 font-light mt-10">
            {t('modes_footer')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
