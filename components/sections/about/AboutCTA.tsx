import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-forest-500">{chunks}</em>,
};

export async function AboutCTA() {
  const t = await getTranslations('about_cta');

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            {t('eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-8">
            {t.rich('title', richOptions)}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-ink/70 font-light max-w-2xl mx-auto mb-12">
            {t('body')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                {t('button_1')}
              </Button>
            </Link>
            <Link
              href="/contact"
              className="group text-navy-700 font-medium hover:text-sage-700 transition-colors flex items-center gap-2"
            >
              {t('button_2')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
