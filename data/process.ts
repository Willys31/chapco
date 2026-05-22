import type { LucideIcon } from 'lucide-react';
import { Sprout, ShieldCheck, Package, FileCheck, Ship, MapPin } from 'lucide-react';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Sourcing',
    description:
      "Identification et sélection rigoureuse des producteurs partenaires en Afrique de l'Ouest, au plus proche des terroirs.",
    icon: Sprout,
    image: '/images/process/sourcing.jpg',
    imageAlt: "Sourcing des matières premières en Afrique de l'Ouest",
  },
  {
    number: '02',
    title: 'Contrôle qualité',
    description:
      'Inspection physique, analyses microbiologiques et tests de conformité pour garantir des standards irréprochables.',
    icon: ShieldCheck,
    image: '/images/process/controle-qualite.jpg',
    imageAlt: 'Contrôle qualité matières premières agricoles export',
  },
  {
    number: '03',
    title: 'Conditionnement',
    description:
      'Mise en sachets, conteneurs ou vrac industriel selon vos spécifications et vos canaux de distribution.',
    icon: Package,
    image: '/images/process/conditionnement.jpg',
    imageAlt: 'Conditionnement matières premières agricoles export',
  },
  {
    number: '04',
    title: 'Documentation',
    description:
      "Certificats phytosanitaires, d'origine, analyses et fiches techniques — un dossier export complet pour chaque expédition.",
    icon: FileCheck,
    image: '/images/process/documentation.jpg',
    imageAlt: "Documentation export certificats phytosanitaires Côte d'Ivoire",
  },
  {
    number: '05',
    title: 'Export FOB / CIF',
    description:
      "Expédition depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam ou d'autres destinations mondiales.",
    icon: Ship,
    image: '/images/process/export.jpg',
    imageAlt: "Export maritime depuis Abidjan",
  },
  {
    number: '06',
    title: 'Livraison',
    description:
      "Suivi maritime jusqu'à votre port de destination, dans les délais convenus, en toute sérénité.",
    icon: MapPin,
    image: '/images/process/livraison.jpg',
    imageAlt: 'Livraison conteneur port européen Marseille Anvers',
  },
];
