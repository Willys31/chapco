import type { LucideIcon } from 'lucide-react';
import { Sprout, BarChart3, ShieldCheck, Search, FileCheck, Ship } from 'lucide-react';

export interface Engagement {
  number: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  keyPoints: string[];
  image: string;
  imageAlt: string;
}

export const engagements: Engagement[] = [
  {
    number: '01',
    slug: 'selection-filieres',
    icon: Sprout,
    title: 'Sélection rigoureuse des filières',
    shortDescription: 'Le choix minutieux des producteurs et des terroirs.',
    longDescription:
      "Notre rôle commence bien avant la récolte. Nous identifions, visitons et sélectionnons rigoureusement chaque filière partenaire en Afrique de l'Ouest. Cette sélection repose sur trois piliers : la qualité du terroir, l'expertise des producteurs, et leur capacité à fournir des volumes constants dans le temps.",
    keyPoints: [
      'Visites systématiques des sites de production',
      'Évaluation de la qualité du terroir et des pratiques agricoles',
      'Sélection de producteurs partenaires fiables et engagés',
      'Suivi régulier des conditions de récolte',
    ],
    image: '/images/engagements/selection-filieres.jpg',
    imageAlt: "Sélection filières agricoles Côte d'Ivoire export CHAP & CO",
  },
  {
    number: '02',
    slug: 'maitrise-volumes',
    icon: BarChart3,
    title: 'Maîtrise des volumes',
    shortDescription: 'Du conditionnement détail au vrac industriel.',
    longDescription:
      "Que vous soyez une enseigne de grande distribution, un grossiste spécialisé ou un industriel transformateur, nous adaptons précisément nos volumes à vos besoins. Notre flexibilité va du sachet retail de 500g au conteneur 40 pieds en vrac industriel.",
    keyPoints: [
      'Conditionnements multiples adaptés à chaque canal',
      "Volumes contractuels planifiés sur l'année",
      'Flexibilité du détail au vrac industriel',
      "Capacité d'évolution selon votre croissance",
    ],
    image: '/images/engagements/maitrise-volumes.jpg',
    imageAlt: 'Maîtrise des volumes de matières premières CHAP & CO',
  },
  {
    number: '03',
    slug: 'controle-qualite',
    icon: ShieldCheck,
    title: 'Contrôle qualité avant expédition',
    shortDescription: "Vérifications systématiques pour vous garantir l'excellence.",
    longDescription:
      "Aucun produit ne quitte le port d'Abidjan sans avoir passé nos contrôles qualité rigoureux. Inspection physique, analyses microbiologiques en laboratoire agréé, vérification de la conformité aux standards internationaux — chaque étape est documentée.",
    keyPoints: [
      'Inspection physique systématique avant chargement',
      'Analyses microbiologiques en laboratoires agréés',
      'Conformité aux standards internationaux',
      'Documentation complète des contrôles effectués',
    ],
    image: '/images/engagements/controle-qualite.jpg',
    imageAlt: 'Contrôle qualité matières premières export CHAP & CO',
  },
  {
    number: '04',
    slug: 'tracabilite',
    icon: Search,
    title: 'Traçabilité des produits',
    shortDescription: 'De la ferme au conteneur, chaque maillon est identifiable.',
    longDescription:
      "La traçabilité n'est pas une simple promesse marketing chez CHAP & CO : c'est un système structuré qui permet, pour chaque expédition, de remonter au producteur d'origine, au lot de récolte et aux conditions de transformation. Une transparence indispensable pour les marchés exigeants.",
    keyPoints: [
      'Identification précise du producteur et du lot',
      'Suivi des conditions de récolte et de stockage',
      'Documentation transparente sur toute la chaîne',
      'Accessibilité des informations sur demande',
    ],
    image: '/images/engagements/tracabilite.jpg',
    imageAlt: 'Traçabilité produits agricoles export CHAP & CO',
  },
  {
    number: '05',
    slug: 'documentation-export',
    icon: FileCheck,
    title: 'Documentation export complète',
    shortDescription: 'Certificats, fiches techniques, douane — tout est fourni.',
    longDescription:
      "Pour chaque expédition, nous fournissons un dossier documentaire complet selon les exigences de votre marché : certificat phytosanitaire, certificat d'origine, analyses microbiologiques, fiches techniques produits et documentation douanière. Notre objectif est l'alignement progressif avec les normes européennes.",
    keyPoints: [
      'Certificat phytosanitaire officiel',
      "Certificat d'origine de la Côte d'Ivoire",
      'Analyses microbiologiques par laboratoire agréé',
      'Fiches techniques détaillées par produit',
      'Documentation douanière complète',
    ],
    image: '/images/engagements/documentation-export.jpg',
    imageAlt: 'Documentation export certificats phytosanitaires CHAP & CO',
  },
  {
    number: '06',
    slug: 'logistique-maritime',
    icon: Ship,
    title: 'Logistique maritime sécurisée',
    shortDescription: 'Transport en conteneurs protégés selon vos contrats.',
    longDescription:
      "Depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam ou d'autres destinations mondiales, nous orchestrons une logistique maritime rigoureuse. Conteneurs scellés, planification des volumes selon vos contrats, modes FOB ou CIF — tout est pensé pour la sécurité de votre approvisionnement.",
    keyPoints: [
      'Transport maritime en conteneurs sécurisés et scellés',
      'Planification des volumes selon contrat',
      "Modes d'export FOB Abidjan ou CIF ports européens",
      'Coordination avec transitaires de destination',
    ],
    image: '/images/engagements/logistique-maritime.jpg',
    imageAlt: 'Logistique maritime FOB CIF export Abidjan CHAP & CO',
  },
];
