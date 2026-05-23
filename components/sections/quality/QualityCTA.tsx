import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { FileText, Phone } from 'lucide-react';
import { company } from '@/data/company';

export async function QualityCTA() {
  const t = await getTranslations('quality');
  const phoneHref = `tel:${company.contact.phone.replace(/\s/g, '')}`;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">
            {t('cta_eyebrow')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-700 tracking-tight leading-[1.1] mb-8">
            {t('cta_title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg text-ink/60 font-light max-w-2xl mx-auto mb-12">
            {t('cta_body')}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact?type=qualite">
              <Button variant="primary" size="lg">
                <FileText className="w-4 h-4" />
                {t('cta_button')}
              </Button>
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {company.contact.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
