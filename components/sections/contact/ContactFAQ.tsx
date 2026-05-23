'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/FadeIn';
import { Plus, Minus } from 'lucide-react';

export function ContactFAQ() {
  const t = useTranslations('contact');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') },
    { question: t('faq_q4'), answer: t('faq_a4') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('faq_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('faq_title')}
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div
                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-sage-500 bg-white'
                    : 'border-sage-500/15 bg-cream hover:border-sage-500/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-left"
                >
                  <span className="text-base font-medium text-navy-700 leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-cream border border-sage-500/30 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-sage-700" />
                    ) : (
                      <Plus className="w-4 h-4 text-sage-700" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-400 ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 lg:px-8 pb-6 text-sm text-ink/60 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
