import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { FileSpreadsheet, Container, Ship, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export async function LogisticsProcess() {
  const t = await getTranslations('logistics');

  const steps: { icon: LucideIcon; number: string; title: string; description: string }[] = [
    { icon: FileSpreadsheet, number: '01', title: t('process_step_1_title'), description: t('process_step_1_desc') },
    { icon: Container,       number: '02', title: t('process_step_2_title'), description: t('process_step_2_desc') },
    { icon: Ship,            number: '03', title: t('process_step_3_title'), description: t('process_step_3_desc') },
    { icon: MapPin,          number: '04', title: t('process_step_4_title'), description: t('process_step_4_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('process_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('process_title')}
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-sage-500/25" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.12}>
                <div className="group text-center">
                  <div className="relative flex justify-center mb-6">
                    <div className="w-28 h-28 rounded-full bg-white border-2 border-sage-500/30 flex items-center justify-center group-hover:border-sage-500 group-hover:shadow-xl transition-all duration-500 relative z-10">
                      <step.icon
                        className="w-10 h-10 text-forest-500 group-hover:scale-110 transition-transform"
                        strokeWidth={1.2}
                      />
                    </div>
                    <div className="absolute -top-2 right-[calc(50%-56px+8px)] w-8 h-8 rounded-full bg-navy-900 border border-sage-500/30 flex items-center justify-center z-20">
                      <span className="text-[10px] font-medium text-sage-300">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-navy-700 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <blockquote className="mt-16 max-w-2xl mx-auto pl-6 border-l-2 border-sage-500">
            <p className="text-base text-navy-700/70 font-light italic leading-relaxed">
              &ldquo;{t('process_quote')}&rdquo;
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
