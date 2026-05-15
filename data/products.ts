export type ProductCategory = 'consommable' | 'non-consommable';

export interface ProductPackaging {
  format: string;
  target: string;
}

export interface ProductDerivative {
  category: string;
  items: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  benefits?: string[];
  packaging?: ProductPackaging[];
  targetSegments?: string[];
  opportunities?: string[];
  uses?: string[];
  derivatives?: ProductDerivative[];
  applications?: string[];
}

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // 🍽️ PRODUITS CONSOMMABLES (ALIMENTAIRE)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: 'attieke-deshydrate',
    name: 'Attiéké Déshydraté',
    category: 'consommable',
    categoryLabel: 'Produit alimentaire',
    shortDescription: 'Semoule de manioc fermentée puis déshydratée.',
    fullDescription:
      "L'attiéké déshydraté est une semoule de manioc fermentée puis séchée. Plat emblématique ivoirien, il bénéficie d'une longue conservation et d'une facilité de transport qui en font un produit phare pour l'export, particulièrement plébiscité par la diaspora africaine à travers le monde.",
    image: '/images/products/attieke.jpg',
    imageAlt: 'Attiéké déshydraté en sachet',
    benefits: [
      '100 % naturel',
      'Longue conservation',
      'Facilité de transport',
      'Forte demande auprès de la diaspora africaine',
    ],
    packaging: [
      { format: '500g – 1kg', target: 'Grande distribution' },
      { format: '5kg – 10kg', target: 'Grossistes' },
      { format: 'Vrac industriel', target: 'Industrie' },
    ],
  },

  {
    slug: 'huile-rouge-palme',
    name: 'Huile Rouge de Palme',
    category: 'consommable',
    categoryLabel: 'Produit alimentaire',
    shortDescription: 'Huile naturelle riche en bêta-carotène et vitamines A & E.',
    fullDescription:
      "L'huile rouge de palme est une huile alimentaire naturelle, particulièrement riche en bêta-carotène et en vitamines A & E. Elle est utilisée aussi bien en cuisine domestique que dans l'industrie agroalimentaire pour ses propriétés nutritionnelles et sa coloration caractéristique.",
    image: '/images/products/huile-palme.jpg',
    imageAlt: 'Huile rouge de palme en bouteille',
    targetSegments: [
      'Grande distribution',
      'Grossistes spécialisés',
      'Industrie agroalimentaire',
    ],
    packaging: [
      { format: '1L – 5L', target: 'Détail' },
      { format: '20L', target: 'Industrie' },
    ],
  },

  {
    slug: 'farine-manioc',
    name: 'Farine de Manioc',
    category: 'consommable',
    categoryLabel: 'Produit alimentaire',
    shortDescription: 'Farine obtenue à partir de manioc séché et broyé.',
    fullDescription:
      'La farine de manioc est obtenue à partir de tubercules de manioc séchés puis finement broyés. Naturellement sans gluten, elle constitue une alternative idéale aux farines traditionnelles et trouve sa place dans de nombreuses préparations industrielles et artisanales.',
    image: '/images/products/farine-manioc.jpg',
    imageAlt: 'Farine de manioc en sachet',
    opportunities: [
      'Segment sans gluten',
      'Substitut aux farines traditionnelles',
      'Adaptée à la transformation industrielle',
    ],
    packaging: [
      { format: '1kg – 5kg', target: 'Détail' },
      { format: '25kg', target: 'Industrie' },
    ],
  },

  {
    slug: 'feuilles-hibiscus',
    name: "Feuilles d'Hibiscus",
    category: 'consommable',
    categoryLabel: 'Produit alimentaire',
    shortDescription: 'Hibiscus rouge & blanc, naturel pour infusions et boissons.',
    fullDescription:
      "Les feuilles d'hibiscus, disponibles en variétés rouge et blanche, sont un produit naturel polyvalent. Séchées avec soin, elles sont prêtes à être utilisées en infusions, dans des boissons traditionnelles ou intégrées à des préparations industrielles alimentaires et cosmétiques.",
    image: '/images/products/hibiscus-feuilles.jpg',
    imageAlt: "Feuilles d'hibiscus rouge et blanc",
    uses: ['Infusions', 'Boissons naturelles', 'Industrie alimentaire', 'Cosmétique'],
    packaging: [
      { format: 'Sachets retail', target: 'Détail' },
      { format: 'Vrac export', target: 'Industrie' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏭 PRODUITS NON CONSOMMABLES (MATIÈRES PREMIÈRES)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: 'graine-palme',
    name: 'Graine de Palme',
    category: 'non-consommable',
    categoryLabel: 'Matière première',
    shortDescription:
      "Matière première essentielle pour les industries agroalimentaire, cosmétique et énergétique.",
    fullDescription:
      "La graine de palme provient du fruit du palmier à huile. Elle est une matière première essentielle pour l'industrie agroalimentaire, cosmétique et énergétique. Sa polyvalence en fait l'une des matières premières les plus stratégiques au monde.",
    image: '/images/products/graine-palme.jpg',
    imageAlt: 'Graines de palme rouges',
    derivatives: [
      {
        category: 'Dérivés alimentaires',
        items: [
          'Huile de palme rouge (cuisine, industrie alimentaire)',
          'Huile raffinée (margarine, biscuits, plats préparés)',
          'Huile de palmiste (confiserie, chocolat, graisses végétales)',
        ],
      },
      {
        category: 'Dérivés cosmétiques',
        items: ['Savons', 'Crèmes hydratantes', 'Produits capillaires', 'Beurres corporels'],
      },
      {
        category: 'Autres dérivés industriels',
        items: ['Biocarburants', 'Bougies', 'Détergents', 'Lubrifiants industriels'],
      },
    ],
    applications: ['Industrie agroalimentaire', 'Cosmétique', 'Industrie chimique', 'Énergie'],
  },

  {
    slug: 'coco',
    name: 'Coco',
    category: 'non-consommable',
    categoryLabel: 'Matière première',
    shortDescription: 'Matière première polyvalente utilisée dans plusieurs industries.',
    fullDescription:
      "Le coco est une matière première polyvalente utilisée dans plusieurs industries grâce à ses nombreuses transformations possibles. De la pulpe à la fibre, en passant par l'eau et la coque, chaque partie du fruit trouve son application industrielle.",
    image: '/images/products/coco.jpg',
    imageAlt: 'Noix de coco fraîches',
    derivatives: [
      {
        category: 'Dérivés alimentaires',
        items: ['Huile de coco', 'Lait de coco', 'Farine de coco', 'Sucre de coco'],
      },
      {
        category: 'Dérivés cosmétiques',
        items: [
          'Huile de coco cosmétique',
          'Soins capillaires',
          'Produits hydratants',
          'Savons',
        ],
      },
      {
        category: 'Autres dérivés industriels',
        items: [
          'Charbon actif',
          'Fibres de coco (cordes, matelas)',
          'Substrats agricoles',
          'Biomatériaux',
        ],
      },
    ],
    applications: ['Agroalimentaire', 'Cosmétique', 'Industrie écologique'],
  },

  {
    slug: 'hibiscus',
    name: 'Hibiscus',
    category: 'non-consommable',
    categoryLabel: 'Matière première',
    shortDescription: 'Plante naturelle pour alimentation, cosmétique et boissons.',
    fullDescription:
      "L'hibiscus est une plante naturelle aux multiples usages, particulièrement appréciée pour la richesse de ses fleurs et de ses extraits. Utilisée dans l'alimentation, la cosmétique et les boissons, elle représente une matière première à fort potentiel.",
    image: '/images/products/hibiscus.jpg',
    imageAlt: "Fleurs d'hibiscus séchées",
    derivatives: [
      {
        category: 'Dérivés alimentaires',
        items: ['Infusions', 'Boissons naturelles', 'Colorants alimentaires'],
      },
      {
        category: 'Dérivés cosmétiques',
        items: ['Soins capillaires', 'Produits de beauté', 'Extraits naturels'],
      },
      {
        category: 'Autres utilisations',
        items: ['Compléments alimentaires', 'Industrie pharmaceutique'],
      },
    ],
    applications: ['Agroalimentaire', 'Cosmétique', 'Bien-être'],
  },

  {
    slug: 'hevea',
    name: 'Hévéa',
    category: 'non-consommable',
    categoryLabel: 'Matière première',
    shortDescription:
      "Latex naturel indispensable pour les industries automobile, médicale et manufacturière.",
    fullDescription:
      "L'hévéa est une matière première issue du latex, utilisée pour produire du caoutchouc naturel, indispensable dans de nombreuses industries. De la production de pneus aux gants médicaux, en passant par le mobilier en bois d'hévéa, cette ressource est stratégique à l'échelle mondiale.",
    image: '/images/products/hevea.jpg',
    imageAlt: "Récolte de latex sur arbre d'hévéa",
    derivatives: [
      {
        category: 'Dérivés industriels',
        items: ['Caoutchouc brut (RSS, TSR)', 'Caoutchouc transformé', 'Latex concentré'],
      },
      {
        category: 'Dérivés produits finis',
        items: [
          'Pneus',
          'Gants médicaux',
          'Préservatifs',
          'Semelles de chaussures',
          'Élastiques',
        ],
      },
      {
        category: 'Autres dérivés',
        items: ["Bois d'hévéa (mobilier)", 'Biomasse énergétique'],
      },
    ],
    applications: ['Industrie automobile', 'Industrie médicale', 'Industrie manufacturière'],
  },

  {
    slug: 'karite',
    name: 'Karité',
    category: 'non-consommable',
    categoryLabel: 'Matière première',
    shortDescription:
      'Noix africaine produisant un beurre végétal premium pour cosmétique et alimentaire.',
    fullDescription:
      "Le karité est une noix africaine utilisée pour produire du beurre végétal riche, très recherché dans les industries alimentaire et cosmétique. Symbole du savoir-faire africain, il est particulièrement plébiscité sur le marché cosmétique mondial pour ses vertus hydratantes et nourrissantes.",
    image: '/images/products/karite.jpg',
    imageAlt: 'Noix et beurre de karité',
    derivatives: [
      {
        category: 'Dérivés cosmétiques',
        items: [
          'Beurre de karité brut',
          'Crèmes hydratantes',
          'Baumes corporels',
          'Produits capillaires',
          'Savons naturels',
        ],
      },
      {
        category: 'Dérivés alimentaires',
        items: [
          'Beurre de karité alimentaire',
          'Substitut de beurre de cacao (chocolaterie & pâtisserie)',
          'Graisse végétale',
        ],
      },
      {
        category: 'Autres dérivés',
        items: ['Produits pharmaceutiques', 'Compléments naturels'],
      },
    ],
    applications: ['Cosmétique (marché majeur)', 'Pharmaceutique', 'Agroalimentaire'],
  },
];

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export const productCategories = {
  consommable: {
    id: 'consommable',
    label: 'Produits consommables',
    sublabel: 'Alimentaire',
    description:
      "Produits prêts à l'usage alimentaire direct, du conditionnement détail au vrac industriel.",
    count: products.filter((p) => p.category === 'consommable').length,
  },
  'non-consommable': {
    id: 'non-consommable',
    label: 'Produits non consommables',
    sublabel: 'Matières premières',
    description:
      'Matières premières destinées à la transformation industrielle, cosmétique et pharmaceutique.',
    count: products.filter((p) => p.category === 'non-consommable').length,
  },
} as const;
