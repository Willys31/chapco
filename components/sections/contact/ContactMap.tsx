'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { MapPin, ExternalLink } from 'lucide-react';

export function ContactMap() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Notre siège
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Au cœur d&apos;<em className="italic text-forest-500">Abidjan</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Carte */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-sm overflow-hidden shadow-xl border border-sage-500/15">
            {/* Google Maps embed */}
            <div className="aspect-[16/7] bg-sage-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.55921777986!2d-4.082692!3d5.359952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHAP & CO — Abidjan, Côte d'Ivoire"
              />
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-sm shadow-xl p-5 border border-sage-500/20 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sage-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-sage-700">Siège social</p>
                  <p className="text-sm font-medium text-navy-700">CHAP & CO</p>
                </div>
              </div>

              <p className="text-sm text-ink/70 font-light mb-3">
                Abidjan, Côte d&apos;Ivoire 🇨🇮
              </p>

              <a
                href="https://maps.google.com/?q=Abidjan,Cote+d'Ivoire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sage-700 font-medium hover:text-navy-700 transition-colors"
              >
                Ouvrir dans Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
