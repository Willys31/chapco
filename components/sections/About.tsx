import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
  br: () => <br />,
};

export async function About() {
  const t = await getTranslations('about_home');

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="relative ml-6 mt-6">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-sage-500/30 rounded-sm" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?w=1200&q=90"
                  alt={t('image_alt')}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-8">
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700">
                {t('eyebrow')}
              </p>

              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight leading-[1.15]">
                {t.rich('title', richOptions)}
              </h2>

              <p className="text-lg text-ink/70 font-light leading-relaxed">
                {t('body')}
              </p>

              <blockquote className="border-l-2 border-sage-500 pl-6 py-2 italic text-navy-700 text-lg">
                &ldquo;{t('quote')}&rdquo;
              </blockquote>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors group"
              >
                {t('cta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
