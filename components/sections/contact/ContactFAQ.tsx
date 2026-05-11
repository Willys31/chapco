'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Quel est le délai de réponse à ma demande ?',
    answer:
      'Toute demande reçue via notre formulaire est traitée sous 48h ouvrées. Pour les demandes urgentes, nous vous recommandons de nous contacter directement par téléphone au +225 07 04 76 76 76.',
  },
  {
    question: "Puis-je recevoir un échantillon avant de commander ?",
    answer:
      "Oui, nous envoyons des échantillons sur demande pour permettre à nos partenaires d'évaluer la qualité de nos produits. Les frais d'expédition peuvent vous être facturés selon le volume demandé.",
  },
  {
    question: "Quels documents fournissez-vous pour l'export ?",
    answer:
      "Nous fournissons selon vos exigences : certificat phytosanitaire, certificat d'origine, analyses microbiologiques, fiches techniques produits, et l'ensemble de la documentation douanière.",
  },
  {
    question: "Quels sont vos modes d'export ?",
    answer:
      "Nous proposons deux modes : FOB Abidjan (livraison au port d'embarquement) et CIF ports européens (Marseille, Anvers, Rotterdam — coût, assurance, fret inclus). D'autres incoterms peuvent être étudiés selon vos besoins.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
              Questions fréquentes
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
              Tout savoir avant de{' '}
              <em className="italic text-forest-500">nous contacter</em>.
            </h2>
          </FadeIn>
        </div>

        {/* FAQ */}
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
