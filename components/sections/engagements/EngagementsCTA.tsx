import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';
import { Package, MessageSquare } from 'lucide-react';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
  br: () => <br />,
};

export async function EngagementsCTA() {
  const t = await getTranslations('engagements');

  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-500/15 blur-[120px]" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            {t('cta_eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8">
            {t.rich('cta_title', richOptions)}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-cream/70 font-light max-w-2xl mx-auto mb-12">
            {t('cta_body')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/produits">
              <Button variant="primary" size="lg">
                <Package className="w-4 h-4" />
                {t('cta_products')}
              </Button>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white rounded-md hover:bg-white/10 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="font-medium">{t('cta_contact')}</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
