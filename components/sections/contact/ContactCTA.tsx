import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';
import { Package, ArrowRight } from 'lucide-react';

export async function ContactCTA() {
  const t = await getTranslations('contact');

  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full bg-forest-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">{t('cta_eyebrow')}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8">
            {t('cta_title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12">
            {t('cta_body')}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                <Package className="w-4 h-4" />
                {t('cta_products')}
              </Button>
            </Link>
            <Link
              href="/qualite"
              className="inline-flex items-center gap-2 text-white/70 font-medium hover:text-sage-300 transition-colors group"
            >
              {t('cta_quality')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
