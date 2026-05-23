import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { BookmarkCheck, Tag, Repeat, Send, Handshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export async function Proposals() {
  const t = await getTranslations('logistics');

  const proposals: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: BookmarkCheck, title: t('proposal_1_title'), description: t('proposal_1_desc') },
    { icon: Tag,           title: t('proposal_2_title'), description: t('proposal_2_desc') },
    { icon: Repeat,        title: t('proposal_3_title'), description: t('proposal_3_desc') },
    { icon: Send,          title: t('proposal_4_title'), description: t('proposal_4_desc') },
    { icon: Handshake,     title: t('proposal_5_title'), description: t('proposal_5_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('proposals_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              {t('proposals_title')}
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {proposals.map((prop, index) => (
            <FadeIn key={prop.title} delay={index * 0.08}>
              <div className="group flex items-start gap-6 p-6 lg:p-8 rounded-sm border border-sage-500/15 bg-cream hover:border-sage-500 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-2xl font-light text-sage-500/40 w-8 tabular-nums">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white border border-sage-500/30 flex items-center justify-center group-hover:bg-sage-500 group-hover:scale-110 transition-all duration-500">
                    <prop.icon
                      className="w-5 h-5 text-forest-500 group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-navy-700 mb-2 tracking-tight">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-ink/60 font-light leading-relaxed">
                    {prop.description}
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
