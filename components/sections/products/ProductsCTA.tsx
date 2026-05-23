import { ArrowRight, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
  br: () => <br />,
};

export async function ProductsCTA() {
  const t = await getTranslations('products_cta');
  const phoneHref = `tel:${company.contact.phone.replace(/\s/g, '')}`;

  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-6">
            {t('eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-8">
            {t.rich('title', richOptions)}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto mb-12">
            {t('body')}
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t('button')}
              </Button>
            </Link>
            <a
              href={phoneHref}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors font-light"
            >
              <Phone className="w-4 h-4" />
              <span>{company.contact.phone}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
