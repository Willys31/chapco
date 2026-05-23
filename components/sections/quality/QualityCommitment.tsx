import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';

export async function QualityCommitment() {
  const t = await getTranslations('quality');

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
                {t('commitment_eyebrow')}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.1]">
                {t('commitment_title')}
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-lg text-ink/70 font-light leading-relaxed">
                {t.rich('commitment_body_1', {
                  strong: (chunks) => <strong className="text-navy-700 font-medium">{chunks}</strong>,
                })}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-ink/70 font-light leading-relaxed">
                {t.rich('commitment_body_2', {
                  strong: (chunks) => <strong className="text-navy-700 font-medium">{chunks}</strong>,
                })}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <blockquote className="mt-8 pl-6 border-l-2 border-sage-500">
                <p className="text-base text-navy-700/80 font-light italic leading-relaxed">
                  &ldquo;{t('commitment_quote')}&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
