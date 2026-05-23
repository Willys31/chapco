import type { LucideIcon } from 'lucide-react';
import { Sprout, BarChart3, ShieldCheck, Search, FileCheck, Ship } from 'lucide-react';

export type LocalizedString = { fr: string; en: string };
export function getLocalized(field: LocalizedString, locale: string): string {
  return locale === 'en' ? field.en : field.fr;
}

export interface Engagement {
  number: string;
  slug: string;
  icon: LucideIcon;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  keyPoints: LocalizedString[];
  image: string;
  imageAlt: LocalizedString;
}

export const engagements: Engagement[] = [
  {
    number: '01',
    slug: 'selection-filieres',
    icon: Sprout,
    title: {
      fr: 'Sélection rigoureuse des filières',
      en: 'Rigorous supply chain selection',
    },
    shortDescription: {
      fr: 'Le choix minutieux des producteurs et des terroirs.',
      en: 'The meticulous selection of producers and terroirs.',
    },
    longDescription: {
      fr: "Notre rôle commence bien avant la récolte. Nous identifions, visitons et sélectionnons rigoureusement chaque filière partenaire en Afrique de l'Ouest. Cette sélection repose sur trois piliers : la qualité du terroir, l'expertise des producteurs, et leur capacité à fournir des volumes constants dans le temps.",
      en: 'Our role begins well before harvest. We rigorously identify, visit and select each partner supply chain in West Africa. This selection rests on three pillars: the quality of the terroir, the expertise of producers, and their capacity to supply consistent volumes over time.',
    },
    keyPoints: [
      { fr: 'Visites systématiques des sites de production', en: 'Systematic visits to production sites' },
      { fr: 'Évaluation de la qualité du terroir et des pratiques agricoles', en: 'Assessment of terroir quality and farming practices' },
      { fr: 'Sélection de producteurs partenaires fiables et engagés', en: 'Selection of reliable and committed partner producers' },
      { fr: 'Suivi régulier des conditions de récolte', en: 'Regular monitoring of harvest conditions' },
    ],
    image: '/images/engagements/selection-filieres.jpg',
    imageAlt: {
      fr: "Sélection filières agricoles Côte d'Ivoire export CHAP & CO",
      en: "Agricultural supply chain selection Côte d'Ivoire export CHAP & CO",
    },
  },
  {
    number: '02',
    slug: 'maitrise-volumes',
    icon: BarChart3,
    title: {
      fr: 'Maîtrise des volumes',
      en: 'Volume management',
    },
    shortDescription: {
      fr: 'Du conditionnement détail au vrac industriel.',
      en: 'From retail packaging to industrial bulk.',
    },
    longDescription: {
      fr: "Que vous soyez une enseigne de grande distribution, un grossiste spécialisé ou un industriel transformateur, nous adaptons précisément nos volumes à vos besoins. Notre flexibilité va du sachet retail de 500g au conteneur 40 pieds en vrac industriel.",
      en: 'Whether you are a retail chain, a specialist wholesaler or an industrial processor, we precisely adapt our volumes to your needs. Our flexibility ranges from a 500g retail bag to a 40-foot container in industrial bulk.',
    },
    keyPoints: [
      { fr: 'Conditionnements multiples adaptés à chaque canal', en: 'Multiple packaging formats adapted to each channel' },
      { fr: "Volumes contractuels planifiés sur l'année", en: 'Contractual volumes planned over the year' },
      { fr: 'Flexibilité du détail au vrac industriel', en: 'Flexibility from retail to industrial bulk' },
      { fr: "Capacité d'évolution selon votre croissance", en: 'Capacity to scale with your growth' },
    ],
    image: '/images/engagements/maitrise-volumes.jpg',
    imageAlt: {
      fr: 'Maîtrise des volumes de matières premières CHAP & CO',
      en: 'Volume management of raw materials CHAP & CO',
    },
  },
  {
    number: '03',
    slug: 'controle-qualite',
    icon: ShieldCheck,
    title: {
      fr: 'Contrôle qualité avant expédition',
      en: 'Pre-shipment quality control',
    },
    shortDescription: {
      fr: "Vérifications systématiques pour vous garantir l'excellence.",
      en: 'Systematic checks to guarantee excellence.',
    },
    longDescription: {
      fr: "Aucun produit ne quitte le port d'Abidjan sans avoir passé nos contrôles qualité rigoureux. Inspection physique, analyses microbiologiques en laboratoire agréé, vérification de la conformité aux standards internationaux — chaque étape est documentée.",
      en: 'No product leaves the port of Abidjan without passing our rigorous quality controls. Physical inspection, microbiological analyses in an accredited laboratory, verification of compliance with international standards — every step is documented.',
    },
    keyPoints: [
      { fr: 'Inspection physique systématique avant chargement', en: 'Systematic physical inspection before loading' },
      { fr: 'Analyses microbiologiques en laboratoires agréés', en: 'Microbiological analyses in accredited laboratories' },
      { fr: 'Conformité aux standards internationaux', en: 'Compliance with international standards' },
      { fr: 'Documentation complète des contrôles effectués', en: 'Complete documentation of controls carried out' },
    ],
    image: '/images/engagements/controle-qualite.jpg',
    imageAlt: {
      fr: 'Contrôle qualité matières premières export CHAP & CO',
      en: 'Export raw materials quality control CHAP & CO',
    },
  },
  {
    number: '04',
    slug: 'tracabilite',
    icon: Search,
    title: {
      fr: 'Traçabilité des produits',
      en: 'Product traceability',
    },
    shortDescription: {
      fr: 'De la ferme au conteneur, chaque maillon est identifiable.',
      en: 'From farm to container, every link is traceable.',
    },
    longDescription: {
      fr: "La traçabilité n'est pas une simple promesse marketing chez CHAP & CO : c'est un système structuré qui permet, pour chaque expédition, de remonter au producteur d'origine, au lot de récolte et aux conditions de transformation. Une transparence indispensable pour les marchés exigeants.",
      en: "Traceability at CHAP & CO is not a mere marketing promise: it is a structured system that allows, for every shipment, tracing back to the original producer, the harvest batch and the processing conditions. An indispensable transparency for demanding markets.",
    },
    keyPoints: [
      { fr: 'Identification précise du producteur et du lot', en: 'Precise identification of producer and batch' },
      { fr: 'Suivi des conditions de récolte et de stockage', en: 'Monitoring of harvest and storage conditions' },
      { fr: 'Documentation transparente sur toute la chaîne', en: 'Transparent documentation across the entire chain' },
      { fr: 'Accessibilité des informations sur demande', en: 'Information accessible on request' },
    ],
    image: '/images/engagements/tracabilite.jpg',
    imageAlt: {
      fr: 'Traçabilité produits agricoles export CHAP & CO',
      en: 'Agricultural product traceability export CHAP & CO',
    },
  },
  {
    number: '05',
    slug: 'documentation-export',
    icon: FileCheck,
    title: {
      fr: 'Documentation export complète',
      en: 'Complete export documentation',
    },
    shortDescription: {
      fr: 'Certificats, fiches techniques, douane — tout est fourni.',
      en: 'Certificates, product sheets, customs — everything provided.',
    },
    longDescription: {
      fr: "Pour chaque expédition, nous fournissons un dossier documentaire complet selon les exigences de votre marché : certificat phytosanitaire, certificat d'origine, analyses microbiologiques, fiches techniques produits et documentation douanière. Notre objectif est l'alignement progressif avec les normes européennes.",
      en: "For every shipment, we provide a complete documentary dossier according to your market requirements: phytosanitary certificate, certificate of origin, microbiological analyses, product technical sheets and customs documentation. Our objective is the progressive alignment with European standards.",
    },
    keyPoints: [
      { fr: 'Certificat phytosanitaire officiel', en: 'Official phytosanitary certificate' },
      { fr: "Certificat d'origine de la Côte d'Ivoire", en: "Certificate of origin from Côte d'Ivoire" },
      { fr: 'Analyses microbiologiques par laboratoire agréé', en: 'Microbiological analyses by accredited laboratory' },
      { fr: 'Fiches techniques détaillées par produit', en: 'Detailed technical sheets per product' },
      { fr: 'Documentation douanière complète', en: 'Complete customs documentation' },
    ],
    image: '/images/engagements/documentation-export.jpg',
    imageAlt: {
      fr: 'Documentation export certificats phytosanitaires CHAP & CO',
      en: 'Export documentation phytosanitary certificates CHAP & CO',
    },
  },
  {
    number: '06',
    slug: 'logistique-maritime',
    icon: Ship,
    title: {
      fr: 'Logistique maritime sécurisée',
      en: 'Secure maritime logistics',
    },
    shortDescription: {
      fr: 'Transport en conteneurs protégés selon vos contrats.',
      en: 'Transport in secure containers according to your contracts.',
    },
    longDescription: {
      fr: "Depuis le port d'Abidjan vers Marseille, Anvers, Rotterdam ou d'autres destinations mondiales, nous orchestrons une logistique maritime rigoureuse. Conteneurs scellés, planification des volumes selon vos contrats, modes FOB ou CIF — tout est pensé pour la sécurité de votre approvisionnement.",
      en: 'From the port of Abidjan to Marseille, Antwerp, Rotterdam or other global destinations, we orchestrate rigorous maritime logistics. Sealed containers, volume planning according to your contracts, FOB or CIF modes — everything is designed for the security of your supply chain.',
    },
    keyPoints: [
      { fr: 'Transport maritime en conteneurs sécurisés et scellés', en: 'Maritime transport in secure, sealed containers' },
      { fr: 'Planification des volumes selon contrat', en: 'Volume planning per contract' },
      { fr: "Modes d'export FOB Abidjan ou CIF ports européens", en: 'FOB Abidjan or CIF European ports export modes' },
      { fr: 'Coordination avec transitaires de destination', en: 'Coordination with destination freight forwarders' },
    ],
    image: '/images/engagements/logistique-maritime.jpg',
    imageAlt: {
      fr: 'Logistique maritime FOB CIF export Abidjan CHAP & CO',
      en: 'Maritime logistics FOB CIF export Abidjan CHAP & CO',
    },
  },
];
