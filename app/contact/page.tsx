import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactSection } from '@/components/sections/contact/ContactSection';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { ContactMap } from '@/components/sections/contact/ContactMap';
import { ContactCTA } from '@/components/sections/contact/ContactCTA';

export const metadata: Metadata = {
  title: 'Contact | CHAP & CO — Devis, échantillons, partenariats',
  description:
    "Contactez CHAP & CO pour vos projets d'approvisionnement en matières premières d'Afrique de l'Ouest. Devis, échantillons, partenariats sous 48h.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
