import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';

export async function QualityProcess() {
  const t = await getTranslations('quality');

  const steps = [
    { number: '01', title: t('process_step_1_title'), description: t('process_step_1_desc') },
    { number: '02', title: t('process_step_2_title'), description: t('process_step_2_desc') },
    { number: '03', title: t('process_step_3_title'), description: t('process_step_3_desc') },
    { number: '04', title: t('process_step_4_title'), description: t('process_step_4_desc') },
    { number: '05', title: t('process_step_5_title'), description: t('process_step_5_desc') },
    { number: '06', title: t('process_step_6_title'), description: t('process_step_6_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">{t('process_eyebrow')}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('process_title')}
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div
                className={`group flex flex-col md:flex-row items-start gap-6 p-6 lg:p-8 bg-white rounded-sm border border-sage-500/15 hover:border-sage-500 hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cream border-2 border-sage-500 flex items-center justify-center group-hover:bg-sage-500 transition-colors duration-500">
                    <span className="text-sm font-medium text-sage-700 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-medium text-navy-700 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
