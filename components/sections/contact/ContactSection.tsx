'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';
import { ContactForm } from './ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '@/data/company';

export function ContactSection() {
  const t = useTranslations('contact');
  const phoneHref = `tel:${company.contact.phone.replace(/\s/g, '')}`;
  const emailHref = `mailto:${company.contact.email}`;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          <FadeIn className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-32">

              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                  {t('coords_eyebrow')}
                </p>
                <h2 className="text-3xl font-light text-navy-700 tracking-tight mb-4">
                  {t('coords_title')}
                </h2>
                <p className="text-sm text-ink/60 font-light leading-relaxed">
                  {t('coords_body')}
                </p>
              </div>

              <div className="bg-cream rounded-sm border border-sage-500/20 p-6">
                <p className="text-xs tracking-[0.15em] uppercase text-sage-700 mb-3">
                  {t('card_label')}
                </p>
                <p className="text-xl font-medium text-navy-700 mb-1">{t('card_name')}</p>
                <p className="text-sm text-ink/50 font-light mb-5">{t('card_role')}</p>

                <div className="space-y-4">
                  <a href={phoneHref} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-white border border-sage-500/30 flex items-center justify-center shrink-0 group-hover:bg-sage-500 group-hover:border-sage-500 transition-colors">
                      <Phone className="w-4 h-4 text-forest-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-ink/40 uppercase tracking-[0.15em] mb-0.5">{t('card_phone')}</p>
                      <p className="text-sm font-medium text-navy-700 group-hover:text-sage-700 transition-colors">
                        {company.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a href={emailHref} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-white border border-sage-500/30 flex items-center justify-center shrink-0 group-hover:bg-sage-500 group-hover:border-sage-500 transition-colors">
                      <Mail className="w-4 h-4 text-forest-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-ink/40 uppercase tracking-[0.15em] mb-0.5">{t('card_email')}</p>
                      <p className="text-sm font-medium text-navy-700 group-hover:text-sage-700 transition-colors break-all">
                        {company.contact.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-sage-500/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-forest-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-ink/40 uppercase tracking-[0.15em] mb-0.5">{t('card_location')}</p>
                      <p className="text-sm font-medium text-navy-700">
                        {t('card_location_value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-sm bg-sage-100 border border-sage-500/20">
                <div className="w-8 h-8 rounded-full bg-sage-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-sage-700" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-700 mb-1">{t('reactivity_title')}</p>
                  <p className="text-xs text-ink/60 font-light leading-relaxed">
                    {t('reactivity_body')}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-8">
            <div className="bg-cream rounded-sm border border-sage-500/15 p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-3">
                  {t('form_eyebrow')}
                </p>
                <h3 className="text-2xl font-light text-navy-700 tracking-tight">
                  {t('form_title')}
                </h3>
              </div>

              <Suspense fallback={<FormSkeleton />}>
                <ContactForm />
              </Suspense>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FormSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="h-11 bg-sage-500/10 rounded-md" />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-11 bg-sage-500/10 rounded-md" />
        <div className="h-11 bg-sage-500/10 rounded-md" />
      </div>
      <div className="h-11 bg-sage-500/10 rounded-md" />
      <div className="h-32 bg-sage-500/10 rounded-md" />
    </div>
  );
}
