import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
  strong: (chunks: React.ReactNode) => <strong className="text-navy-700 font-medium">{chunks}</strong>,
};

export async function EngagementsIntro() {
  const t = await getTranslations('engagements');

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container max-w-5xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">{t('intro_eyebrow')}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-12 max-w-4xl">
            {t.rich('intro_title', richOptions)}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.4}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              {t.rich('intro_body_1', richOptions)}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              {t.rich('intro_body_2', richOptions)}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
