import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
  br: () => <br />,
};

export async function AboutHero() {
  const t = await getTranslations('about_hero');

  return (
    <section className="relative min-h-[60vh] bg-navy-900 overflow-hidden flex items-center pt-40 pb-20">
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full bg-sage-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 w-full">
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            {t('eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
            {t.rich('title', richOptions)}
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
