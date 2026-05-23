import { TrendingUp, Leaf, Globe, Wheat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
  br: () => <br />,
};

const trendIcons: LucideIcon[] = [TrendingUp, Leaf, Globe, Wheat];

export async function MarketOpportunity() {
  const t = await getTranslations('market_opportunity');

  const trends = [
    { number: '01', title: t('trend_1_title'), description: t('trend_1_desc') },
    { number: '02', title: t('trend_2_title'), description: t('trend_2_desc') },
    { number: '03', title: t('trend_3_title'), description: t('trend_3_desc') },
    { number: '04', title: t('trend_4_title'), description: t('trend_4_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              {t('eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              {t.rich('title', richOptions)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-white/60 font-light">{t('body')}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, i) => {
            const Icon = trendIcons[i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-8 border border-white/10 rounded-sm hover:border-sage-300/50 transition-all duration-500 h-full">
                  <div className="text-sage-300/60 text-sm font-medium tracking-wider mb-6">
                    {trend.number}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-sage-500/10 flex items-center justify-center mb-6 group-hover:bg-sage-500/20 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-sage-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                    {trend.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {trend.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 text-center max-w-3xl mx-auto pt-12 border-t border-white/10">
            <blockquote className="text-xl md:text-2xl font-light text-white/90 italic leading-relaxed">
              &ldquo;{t('quote')}&rdquo;
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
