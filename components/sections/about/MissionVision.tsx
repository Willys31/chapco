import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};
const richOptionsDark = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
};

export async function MissionVision() {
  const t = await getTranslations('mission_vision');

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-sage-500/20 rounded-sm overflow-hidden">
          <FadeIn>
            <div className="bg-cream p-12 lg:p-16 h-full flex flex-col">
              <div className="text-6xl font-light text-sage-500 mb-8 leading-none">I</div>
              <h3 className="text-2xl md:text-3xl font-light text-navy-700 mb-6 tracking-tight">
                {t('mission_heading')}
              </h3>
              <p className="text-lg text-ink/70 font-light leading-relaxed mb-8 flex-1">
                {t.rich('mission_body', {
                  strong: (chunks) => <strong className="text-navy-700 font-medium">{chunks}</strong>,
                })}
              </p>
              <ul className="space-y-3 text-sm text-ink/60">
                {(['mission_point_1', 'mission_point_2', 'mission_point_3'] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="text-sage-500 mt-0.5">→</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-navy-900 text-white p-12 lg:p-16 h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <ArrowsBackground baseOpacity={1} />
              </div>
              <div className="text-6xl font-light text-sage-300 mb-8 leading-none relative">II</div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight relative">
                {t('ambition_heading')}
              </h3>
              <blockquote className="text-lg text-white/80 font-light leading-relaxed mb-8 flex-1 relative">
                <span className="text-sage-300 text-4xl leading-none">&ldquo;</span>
                {t.rich('ambition_quote', richOptionsDark)}
                <span className="text-sage-300 text-4xl leading-none">&rdquo;</span>
              </blockquote>
              <ul className="space-y-3 text-sm text-white/60 relative">
                {(['ambition_point_1', 'ambition_point_2', 'ambition_point_3'] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="text-sage-300 mt-0.5">→</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
