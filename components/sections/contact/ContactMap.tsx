import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { MapPin, ExternalLink } from 'lucide-react';

export async function ContactMap() {
  const t = await getTranslations('contact');

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-12">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('map_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('map_title')}
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="relative rounded-sm overflow-hidden shadow-xl border border-sage-500/15">
            <div className="aspect-[16/7] bg-sage-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3571671113777!2d-3.994319425243123!3d5.362360994616423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb42e4bb618d%3A0x25b4aa074d253b4b!2sElite%20Experience!5e0!3m2!1sfr!2sci!4v1779105697456!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                className="border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('map_iframe_title')}
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-white rounded-sm shadow-xl p-5 border border-sage-500/20 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sage-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-sage-700">{t('map_card_label')}</p>
                  <p className="text-sm font-medium text-navy-700">{t('map_card_company')}</p>
                </div>
              </div>

              <p className="text-sm text-ink/70 font-light mb-3">
                {t('map_card_location')} 🇨🇮
              </p>

              <a
                href="https://www.google.com/maps/place/Elite+Experience/@5.362361,-3.9943194,17z/data=!3m1!4b1!4m6!3m5!1s0xfc1eb42e4bb618d:0x25b4aa074d253b4b!8m2!3d5.362361!4d-3.9917445!16s%2Fg%2F11v66j_l_j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sage-700 font-medium hover:text-navy-700 transition-colors"
              >
                {t('map_card_link')}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
