import type { LucideIcon } from 'lucide-react';
import { Sprout, ShieldCheck, Package, FileCheck, Ship, MapPin } from 'lucide-react';

export type LocalizedString = { fr: string; en: string };
export function getLocalized(field: LocalizedString, locale: string): string {
  return locale === 'en' ? field.en : field.fr;
}

export interface ProcessStep {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  image: string;
  imageAlt: LocalizedString;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: { fr: 'Sourcing', en: 'Sourcing' },
    description: {
      fr: "Identification et sélection rigoureuse des producteurs partenaires en Afrique de l'Ouest, au plus proche des terroirs.",
      en: 'Rigorous identification and selection of partner producers in West Africa, close to the source.',
    },
    icon: Sprout,
    image: '/images/process/sourcing.jpg',
    imageAlt: {
      fr: "Sourcing des matières premières en Afrique de l'Ouest",
      en: 'Raw material sourcing in West Africa',
    },
  },
  {
    number: '02',
    title: { fr: 'Contrôle qualité', en: 'Quality control' },
    description: {
      fr: 'Inspection physique, analyses microbiologiques et tests de conformité pour garantir des standards irréprochables.',
      en: 'Physical inspection, microbiological analyses and compliance tests to guarantee impeccable standards.',
    },
    icon: ShieldCheck,
    image: '/images/process/controle-qualite.jpg',
    imageAlt: {
      fr: 'Contrôle qualité matières premières agricoles export',
      en: 'Quality control of agricultural raw materials for export',
    },
  },
  {
    number: '03',
    title: { fr: 'Conditionnement', en: 'Packaging' },
    description: {
      fr: 'Mise en sachets, conteneurs ou vrac industriel selon vos spécifications et vos canaux de distribution.',
      en: 'Bagging, containerisation or industrial bulk according to your specifications and distribution channels.',
    },
    icon: Package,
    image: '/images/process/conditionnement.jpg',
    imageAlt: {
      fr: 'Conditionnement matières premières agricoles export',
      en: 'Packaging of agricultural raw materials for export',
    },
  },
  {
    number: '04',
    title: { fr: 'Documentation', en: 'Documentation' },
    description: {
      fr: "Certificats phytosanitaires, d'origine, analyses et fiches techniques — un dossier export complet pour chaque expédition.",
      en: 'Phytosanitary certificates, certificates of origin, analyses and product sheets — a complete export dossier for every shipment.',
    },
    icon: FileCheck,
    image: '/images/process/documentation.jpg',
    imageAlt: {
      fr: "Documentation export certificats phytosanitaires Côte d'Ivoire",
      en: "Export documentation phytosanitary certificates Côte d'Ivoire",
    },
  },
  {
    number: '05',
    title: { fr: 'Export FOB / CIF', en: 'Export FOB / CIF' },
    description: {
      fr: "Expédition depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam ou d'autres destinations mondiales.",
      en: 'Shipment from the port of Abidjan to Marseille, Antwerp, Rotterdam or other global destinations.',
    },
    icon: Ship,
    image: '/images/process/export.jpg',
    imageAlt: {
      fr: 'Export maritime depuis Abidjan',
      en: 'Maritime export from Abidjan',
    },
  },
  {
    number: '06',
    title: { fr: 'Livraison', en: 'Delivery' },
    description: {
      fr: "Suivi maritime jusqu'à votre port de destination, dans les délais convenus, en toute sérénité.",
      en: 'Maritime tracking to your destination port, within agreed timelines, with full peace of mind.',
    },
    icon: MapPin,
    image: '/images/process/livraison.jpg',
    imageAlt: {
      fr: 'Livraison conteneur port européen Marseille Anvers',
      en: 'Container delivery European port Marseille Antwerp',
    },
  },
];
