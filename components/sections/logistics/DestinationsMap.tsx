import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { MapPin, Plus } from 'lucide-react';

const destinations = [
  { name: 'Marseille', country: 'France',       region: 'Méditerranée',    highlight: true  },
  { name: 'Anvers',    country: 'Belgique',      region: 'Mer du Nord',     highlight: true  },
  { name: 'Rotterdam', country: 'Pays-Bas',      region: 'Mer du Nord',     highlight: true  },
  { name: 'Hambourg',  country: 'Allemagne',     region: 'Europe du Nord',  highlight: false },
  { name: 'Le Havre',  country: 'France',        region: 'Manche',          highlight: false },
  { name: 'Gênes',     country: 'Italie',        region: 'Méditerranée',    highlight: false },
  { name: 'New York',  country: 'États-Unis',    region: 'Amérique du Nord',highlight: false },
  { name: 'Shanghai',  country: 'Chine',         region: 'Asie-Pacifique',  highlight: false },
];

export async function DestinationsMap() {
  const t = await getTranslations('logistics');

  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-forest-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              {t('dest_eyebrow')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              {t('dest_title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              {t('dest_body')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <FadeIn key={dest.name} delay={index * 0.06}>
              <div
                className={`group relative p-6 rounded-sm border transition-all duration-500 ${
                  dest.highlight
                    ? 'bg-sage-500/10 border-sage-300/40 hover:bg-sage-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-sage-300/30'
                }`}
              >
                {dest.highlight && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-sage-300 bg-sage-500/20 px-2 py-0.5 rounded-full">
                      {t('dest_highlight_badge')}
                    </span>
                  </div>
                )}

                <MapPin
                  className={`w-5 h-5 mb-4 ${dest.highlight ? 'text-sage-300' : 'text-white/40'}`}
                  strokeWidth={1.5}
                />

                <p className={`text-lg font-medium mb-1 ${dest.highlight ? 'text-white' : 'text-white/70'}`}>
                  {dest.name}
                </p>
                <p className={`text-sm mb-1 ${dest.highlight ? 'text-white/70' : 'text-white/40'}`}>
                  {dest.country}
                </p>
                <p className={`text-xs uppercase tracking-[0.15em] ${dest.highlight ? 'text-sage-300' : 'text-white/30'}`}>
                  {dest.region}
                </p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={destinations.length * 0.06}>
            <div className="p-6 rounded-sm border border-dashed border-white/20 flex flex-col items-center justify-center text-center min-h-[140px] hover:border-sage-300/40 transition-colors">
              <Plus className="w-6 h-6 text-white/30 mb-3" strokeWidth={1.5} />
              <p className="text-sm text-white/40 font-light leading-tight">
                {t('dest_other_label')}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
