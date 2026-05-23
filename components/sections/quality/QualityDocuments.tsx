import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { FileCheck2, FileBadge, Microscope, ScrollText, Stamp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export async function QualityDocuments() {
  const t = await getTranslations('quality');

  const documents: { icon: LucideIcon; title: string; description: string; issuer: string }[] = [
    { icon: FileBadge,  title: t('doc_1_title'), description: t('doc_1_desc'), issuer: t('doc_1_issuer') },
    { icon: ScrollText, title: t('doc_2_title'), description: t('doc_2_desc'), issuer: t('doc_2_issuer') },
    { icon: Microscope, title: t('doc_3_title'), description: t('doc_3_desc'), issuer: t('doc_3_issuer') },
    { icon: FileCheck2, title: t('doc_4_title'), description: t('doc_4_desc'), issuer: t('doc_4_issuer') },
    { icon: Stamp,      title: t('doc_5_title'), description: t('doc_5_desc'), issuer: t('doc_5_issuer') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              {t('docs_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight mb-6">
              {t('docs_title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-lg text-ink/60 font-light">
              {t('docs_body')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const isDark = index === 4;
            return (
              <FadeIn
                key={doc.title}
                delay={index * 0.1}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
              >
                <div
                  className={`group relative p-8 lg:p-10 rounded-sm border transition-all duration-500 h-full ${
                    isDark
                      ? 'bg-navy-900 border-navy-900 text-white'
                      : 'bg-cream border-sage-500/15 hover:border-sage-500 hover:shadow-xl'
                  }`}
                >
                  <div
                    className={`absolute top-6 right-6 text-6xl font-light pointer-events-none select-none transition-colors ${
                      isDark
                        ? 'text-white/10'
                        : 'text-sage-500/10 group-hover:text-sage-500/25'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      isDark
                        ? 'bg-sage-500/20 border border-sage-300/30'
                        : 'bg-white border border-sage-500/30 group-hover:bg-sage-500 group-hover:scale-110'
                    }`}
                  >
                    <doc.icon
                      className={`w-6 h-6 transition-colors ${
                        isDark ? 'text-sage-300' : 'text-forest-500 group-hover:text-white'
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className={`relative text-xl font-medium mb-4 tracking-tight ${
                      isDark ? 'text-white' : 'text-navy-700'
                    }`}
                  >
                    {doc.title}
                  </h3>

                  <p
                    className={`relative text-sm font-light leading-relaxed mb-4 ${
                      isDark ? 'text-white/70' : 'text-ink/60'
                    }`}
                  >
                    {doc.description}
                  </p>

                  <p
                    className={`relative text-xs uppercase tracking-[0.2em] font-medium pt-4 border-t ${
                      isDark ? 'text-sage-300 border-white/10' : 'text-sage-700 border-sage-500/15'
                    }`}
                  >
                    {doc.issuer}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.55}>
          <p className="text-center text-sm text-ink/50 font-light mt-10 max-w-2xl mx-auto">
            {t('docs_footer')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
