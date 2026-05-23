export type ProductCategory = 'consommable' | 'non-consommable';

export type LocalizedString = { fr: string; en: string };
export function getLocalized(field: LocalizedString, locale: string): string {
  return locale === 'en' ? field.en : field.fr;
}

export interface ProductPackaging {
  format: string;
  target: LocalizedString;
}

export interface ProductDerivative {
  category: LocalizedString;
  items: LocalizedString[];
}

export interface Product {
  slug: string;
  name: LocalizedString;
  category: ProductCategory;
  categoryLabel: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  benefits?: LocalizedString[];
  packaging?: ProductPackaging[];
  targetSegments?: LocalizedString[];
  opportunities?: LocalizedString[];
  uses?: LocalizedString[];
  derivatives?: ProductDerivative[];
  applications?: LocalizedString[];
}

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // PRODUITS CONSOMMABLES (ALIMENTAIRE)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: 'attieke-deshydrate',
    name: { fr: 'Attiéké Déshydraté', en: 'Dehydrated Attieke' },
    category: 'consommable',
    categoryLabel: { fr: 'Produit alimentaire', en: 'Food product' },
    shortDescription: {
      fr: 'Semoule de manioc fermentée puis déshydratée.',
      en: 'Fermented cassava semolina, then dehydrated.',
    },
    fullDescription: {
      fr: "L'attiéké déshydraté est une semoule de manioc fermentée puis séchée. Plat emblématique ivoirien, il bénéficie d'une longue conservation et d'une facilité de transport qui en font un produit phare pour l'export, particulièrement plébiscité par la diaspora africaine à travers le monde.",
      en: "Dehydrated attieke is fermented cassava semolina that has been dried. This iconic Ivorian dish benefits from a long shelf life and ease of transport, making it a flagship export product, particularly popular among the African diaspora worldwide.",
    },
    image: '/images/products/attieke.jpg',
    imageAlt: {
      fr: "Attiéké déshydraté export Côte d'Ivoire en sachet",
      en: 'Dehydrated attieke export from Ivory Coast, in bag',
    },
    benefits: [
      { fr: '100 % naturel', en: '100% natural' },
      { fr: 'Longue conservation', en: 'Long shelf life' },
      { fr: 'Facilité de transport', en: 'Easy to transport' },
      { fr: 'Forte demande auprès de la diaspora africaine', en: 'High demand from the African diaspora' },
    ],
    packaging: [
      { format: '500g – 1kg', target: { fr: 'Grande distribution', en: 'Retail distribution' } },
      { format: '5kg – 10kg', target: { fr: 'Grossistes', en: 'Wholesalers' } },
      { format: 'Vrac industriel', target: { fr: 'Industrie', en: 'Industry' } },
    ],
  },

  {
    slug: 'huile-rouge-palme',
    name: { fr: 'Huile Rouge de Palme', en: 'Red Palm Oil' },
    category: 'consommable',
    categoryLabel: { fr: 'Produit alimentaire', en: 'Food product' },
    shortDescription: {
      fr: 'Huile naturelle riche en bêta-carotène et vitamines A & E.',
      en: 'Natural oil rich in beta-carotene and vitamins A & E.',
    },
    fullDescription: {
      fr: "L'huile rouge de palme est une huile alimentaire naturelle, particulièrement riche en bêta-carotène et en vitamines A & E. Elle est utilisée aussi bien en cuisine domestique que dans l'industrie agroalimentaire pour ses propriétés nutritionnelles et sa coloration caractéristique.",
      en: "Red palm oil is a natural edible oil, particularly rich in beta-carotene and vitamins A & E. It is used in both domestic cooking and the food industry for its nutritional properties and characteristic colouring.",
    },
    image: '/images/products/huile-palme.jpg',
    imageAlt: {
      fr: "Huile rouge de palme naturelle export Côte d'Ivoire",
      en: "Natural red palm oil export from Côte d'Ivoire",
    },
    targetSegments: [
      { fr: 'Grande distribution', en: 'Retail distribution' },
      { fr: 'Grossistes spécialisés', en: 'Specialist wholesalers' },
      { fr: 'Industrie agroalimentaire', en: 'Food industry' },
    ],
    packaging: [
      { format: '1L – 5L', target: { fr: 'Détail', en: 'Retail' } },
      { format: '20L', target: { fr: 'Industrie', en: 'Industry' } },
    ],
  },

  {
    slug: 'farine-manioc',
    name: { fr: 'Farine de Manioc', en: 'Cassava Flour' },
    category: 'consommable',
    categoryLabel: { fr: 'Produit alimentaire', en: 'Food product' },
    shortDescription: {
      fr: 'Farine obtenue à partir de manioc séché et broyé.',
      en: 'Flour obtained from dried and ground cassava.',
    },
    fullDescription: {
      fr: 'La farine de manioc est obtenue à partir de tubercules de manioc séchés puis finement broyés. Naturellement sans gluten, elle constitue une alternative idéale aux farines traditionnelles et trouve sa place dans de nombreuses préparations industrielles et artisanales.',
      en: 'Cassava flour is obtained from dried cassava tubers that are finely ground. Naturally gluten-free, it is an ideal alternative to traditional flours and finds its place in many industrial and artisanal preparations.',
    },
    image: '/images/products/farine-manioc.jpg',
    imageAlt: {
      fr: "Farine de manioc sans gluten export Côte d'Ivoire",
      en: "Gluten-free cassava flour export from Côte d'Ivoire",
    },
    opportunities: [
      { fr: 'Segment sans gluten', en: 'Gluten-free segment' },
      { fr: 'Substitut aux farines traditionnelles', en: 'Substitute for traditional flours' },
      { fr: 'Adaptée à la transformation industrielle', en: 'Suitable for industrial processing' },
    ],
    packaging: [
      { format: '1kg – 5kg', target: { fr: 'Détail', en: 'Retail' } },
      { format: '25kg', target: { fr: 'Industrie', en: 'Industry' } },
    ],
  },

  {
    slug: 'feuilles-hibiscus',
    name: { fr: "Feuilles d'Hibiscus", en: 'Hibiscus Leaves' },
    category: 'consommable',
    categoryLabel: { fr: 'Produit alimentaire', en: 'Food product' },
    shortDescription: {
      fr: 'Hibiscus rouge & blanc, naturel pour infusions et boissons.',
      en: 'Red & white hibiscus, natural for infusions and beverages.',
    },
    fullDescription: {
      fr: "Les feuilles d'hibiscus, disponibles en variétés rouge et blanche, sont un produit naturel polyvalent. Séchées avec soin, elles sont prêtes à être utilisées en infusions, dans des boissons traditionnelles ou intégrées à des préparations industrielles alimentaires et cosmétiques.",
      en: "Hibiscus leaves, available in red and white varieties, are a versatile natural product. Carefully dried, they are ready to be used in infusions, traditional beverages or incorporated into industrial food and cosmetic preparations.",
    },
    image: '/images/products/hibiscus-feuilles.jpg',
    imageAlt: {
      fr: "Feuilles d'hibiscus séchées export Afrique de l'Ouest",
      en: 'Dried hibiscus leaves export West Africa',
    },
    uses: [
      { fr: 'Infusions', en: 'Infusions' },
      { fr: 'Boissons naturelles', en: 'Natural beverages' },
      { fr: 'Industrie alimentaire', en: 'Food industry' },
      { fr: 'Cosmétique', en: 'Cosmetics' },
    ],
    packaging: [
      { format: 'Sachets retail', target: { fr: 'Détail', en: 'Retail' } },
      { format: 'Vrac export', target: { fr: 'Industrie', en: 'Industry' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRODUITS NON CONSOMMABLES (MATIÈRES PREMIÈRES)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: 'graine-palme',
    name: { fr: 'Graine de Palme', en: 'Palm Kernel' },
    category: 'non-consommable',
    categoryLabel: { fr: 'Matière première', en: 'Raw material' },
    shortDescription: {
      fr: "Matière première essentielle pour les industries agroalimentaire, cosmétique et énergétique.",
      en: "Essential raw material for food, cosmetics and energy industries.",
    },
    fullDescription: {
      fr: "La graine de palme provient du fruit du palmier à huile. Elle est une matière première essentielle pour l'industrie agroalimentaire, cosmétique et énergétique. Sa polyvalence en fait l'une des matières premières les plus stratégiques au monde.",
      en: "The palm kernel comes from the fruit of the oil palm tree. It is an essential raw material for the food, cosmetics and energy industries. Its versatility makes it one of the most strategic raw materials in the world.",
    },
    image: '/images/products/graine-palme.jpg',
    imageAlt: {
      fr: "Graines de palme matière première export Côte d'Ivoire",
      en: "Palm kernel raw material export from Côte d'Ivoire",
    },
    derivatives: [
      {
        category: { fr: 'Dérivés alimentaires', en: 'Food derivatives' },
        items: [
          { fr: 'Huile de palme rouge (cuisine, industrie alimentaire)', en: 'Red palm oil (cooking, food industry)' },
          { fr: 'Huile raffinée (margarine, biscuits, plats préparés)', en: 'Refined oil (margarine, biscuits, ready meals)' },
          { fr: 'Huile de palmiste (confiserie, chocolat, graisses végétales)', en: 'Palm kernel oil (confectionery, chocolate, vegetable fats)' },
        ],
      },
      {
        category: { fr: 'Dérivés cosmétiques', en: 'Cosmetic derivatives' },
        items: [
          { fr: 'Savons', en: 'Soaps' },
          { fr: 'Crèmes hydratantes', en: 'Moisturising creams' },
          { fr: 'Produits capillaires', en: 'Hair products' },
          { fr: 'Beurres corporels', en: 'Body butters' },
        ],
      },
      {
        category: { fr: 'Autres dérivés industriels', en: 'Other industrial derivatives' },
        items: [
          { fr: 'Biocarburants', en: 'Biofuels' },
          { fr: 'Bougies', en: 'Candles' },
          { fr: 'Détergents', en: 'Detergents' },
          { fr: 'Lubrifiants industriels', en: 'Industrial lubricants' },
        ],
      },
    ],
    applications: [
      { fr: 'Industrie agroalimentaire', en: 'Food industry' },
      { fr: 'Cosmétique', en: 'Cosmetics' },
      { fr: 'Industrie chimique', en: 'Chemical industry' },
      { fr: 'Énergie', en: 'Energy' },
    ],
  },

  {
    slug: 'coco',
    name: { fr: 'Coco', en: 'Coconut' },
    category: 'non-consommable',
    categoryLabel: { fr: 'Matière première', en: 'Raw material' },
    shortDescription: {
      fr: 'Matière première polyvalente utilisée dans plusieurs industries.',
      en: 'Versatile raw material used across several industries.',
    },
    fullDescription: {
      fr: "Le coco est une matière première polyvalente utilisée dans plusieurs industries grâce à ses nombreuses transformations possibles. De la pulpe à la fibre, en passant par l'eau et la coque, chaque partie du fruit trouve son application industrielle.",
      en: "Coconut is a versatile raw material used across several industries thanks to its many possible transformations. From the pulp to the fibre, through the water and the shell, every part of the fruit has its industrial application.",
    },
    image: '/images/products/coco.jpg',
    imageAlt: {
      fr: "Noix de coco matière première coprah export Afrique",
      en: 'Coconut raw material copra export Africa',
    },
    derivatives: [
      {
        category: { fr: 'Dérivés alimentaires', en: 'Food derivatives' },
        items: [
          { fr: 'Huile de coco', en: 'Coconut oil' },
          { fr: 'Lait de coco', en: 'Coconut milk' },
          { fr: 'Farine de coco', en: 'Coconut flour' },
          { fr: 'Sucre de coco', en: 'Coconut sugar' },
        ],
      },
      {
        category: { fr: 'Dérivés cosmétiques', en: 'Cosmetic derivatives' },
        items: [
          { fr: 'Huile de coco cosmétique', en: 'Cosmetic coconut oil' },
          { fr: 'Soins capillaires', en: 'Hair care' },
          { fr: 'Produits hydratants', en: 'Moisturising products' },
          { fr: 'Savons', en: 'Soaps' },
        ],
      },
      {
        category: { fr: 'Autres dérivés industriels', en: 'Other industrial derivatives' },
        items: [
          { fr: 'Charbon actif', en: 'Activated charcoal' },
          { fr: 'Fibres de coco (cordes, matelas)', en: 'Coconut fibres (ropes, mattresses)' },
          { fr: 'Substrats agricoles', en: 'Agricultural substrates' },
          { fr: 'Biomatériaux', en: 'Biomaterials' },
        ],
      },
    ],
    applications: [
      { fr: 'Agroalimentaire', en: 'Food & agriculture' },
      { fr: 'Cosmétique', en: 'Cosmetics' },
      { fr: 'Industrie écologique', en: 'Ecological industry' },
    ],
  },

  {
    slug: 'hibiscus',
    name: { fr: 'Hibiscus', en: 'Hibiscus' },
    category: 'non-consommable',
    categoryLabel: { fr: 'Matière première', en: 'Raw material' },
    shortDescription: {
      fr: 'Plante naturelle pour alimentation, cosmétique et boissons.',
      en: 'Natural plant for food, cosmetics and beverages.',
    },
    fullDescription: {
      fr: "L'hibiscus est une plante naturelle aux multiples usages, particulièrement appréciée pour la richesse de ses fleurs et de ses extraits. Utilisée dans l'alimentation, la cosmétique et les boissons, elle représente une matière première à fort potentiel.",
      en: "Hibiscus is a natural plant with multiple uses, particularly valued for the richness of its flowers and extracts. Used in food, cosmetics and beverages, it represents a high-potential raw material.",
    },
    image: '/images/products/hibiscus.jpg',
    imageAlt: {
      fr: "Fleurs d'hibiscus séchées en gros export Afrique",
      en: 'Dried hibiscus flowers wholesale export Africa',
    },
    derivatives: [
      {
        category: { fr: 'Dérivés alimentaires', en: 'Food derivatives' },
        items: [
          { fr: 'Infusions', en: 'Infusions' },
          { fr: 'Boissons naturelles', en: 'Natural beverages' },
          { fr: 'Colorants alimentaires', en: 'Food colourants' },
        ],
      },
      {
        category: { fr: 'Dérivés cosmétiques', en: 'Cosmetic derivatives' },
        items: [
          { fr: 'Soins capillaires', en: 'Hair care' },
          { fr: 'Produits de beauté', en: 'Beauty products' },
          { fr: 'Extraits naturels', en: 'Natural extracts' },
        ],
      },
      {
        category: { fr: 'Autres utilisations', en: 'Other uses' },
        items: [
          { fr: 'Compléments alimentaires', en: 'Dietary supplements' },
          { fr: 'Industrie pharmaceutique', en: 'Pharmaceutical industry' },
        ],
      },
    ],
    applications: [
      { fr: 'Agroalimentaire', en: 'Food & agriculture' },
      { fr: 'Cosmétique', en: 'Cosmetics' },
      { fr: 'Bien-être', en: 'Wellness' },
    ],
  },

  {
    slug: 'hevea',
    name: { fr: 'Hévéa', en: 'Rubber Tree (Hevea)' },
    category: 'non-consommable',
    categoryLabel: { fr: 'Matière première', en: 'Raw material' },
    shortDescription: {
      fr: "Latex naturel indispensable pour les industries automobile, médicale et manufacturière.",
      en: "Natural latex essential for automotive, medical and manufacturing industries.",
    },
    fullDescription: {
      fr: "L'hévéa est une matière première issue du latex, utilisée pour produire du caoutchouc naturel, indispensable dans de nombreuses industries. De la production de pneus aux gants médicaux, en passant par le mobilier en bois d'hévéa, cette ressource est stratégique à l'échelle mondiale.",
      en: "Hevea is a raw material derived from latex, used to produce natural rubber, essential in many industries. From tyre production to medical gloves, through to hevea wood furniture, this resource is strategically important on a global scale.",
    },
    image: '/images/products/hevea.jpg',
    imageAlt: {
      fr: "Récolte de latex hévéa caoutchouc naturel Côte d'Ivoire",
      en: "Hevea latex harvest natural rubber Côte d'Ivoire",
    },
    derivatives: [
      {
        category: { fr: 'Dérivés industriels', en: 'Industrial derivatives' },
        items: [
          { fr: 'Caoutchouc brut (RSS, TSR)', en: 'Raw rubber (RSS, TSR)' },
          { fr: 'Caoutchouc transformé', en: 'Processed rubber' },
          { fr: 'Latex concentré', en: 'Concentrated latex' },
        ],
      },
      {
        category: { fr: 'Dérivés produits finis', en: 'Finished product derivatives' },
        items: [
          { fr: 'Pneus', en: 'Tyres' },
          { fr: 'Gants médicaux', en: 'Medical gloves' },
          { fr: 'Préservatifs', en: 'Condoms' },
          { fr: 'Semelles de chaussures', en: 'Shoe soles' },
          { fr: 'Élastiques', en: 'Elastic bands' },
        ],
      },
      {
        category: { fr: 'Autres dérivés', en: 'Other derivatives' },
        items: [
          { fr: "Bois d'hévéa (mobilier)", en: 'Hevea wood (furniture)' },
          { fr: 'Biomasse énergétique', en: 'Energy biomass' },
        ],
      },
    ],
    applications: [
      { fr: 'Industrie automobile', en: 'Automotive industry' },
      { fr: 'Industrie médicale', en: 'Medical industry' },
      { fr: 'Industrie manufacturière', en: 'Manufacturing industry' },
    ],
  },

  {
    slug: 'karite',
    name: { fr: 'Karité', en: 'Shea' },
    category: 'non-consommable',
    categoryLabel: { fr: 'Matière première', en: 'Raw material' },
    shortDescription: {
      fr: 'Noix africaine produisant un beurre végétal premium pour cosmétique et alimentaire.',
      en: 'African nut producing a premium vegetable butter for cosmetics and food.',
    },
    fullDescription: {
      fr: "Le karité est une noix africaine utilisée pour produire du beurre végétal riche, très recherché dans les industries alimentaire et cosmétique. Symbole du savoir-faire africain, il est particulièrement plébiscité sur le marché cosmétique mondial pour ses vertus hydratantes et nourrissantes.",
      en: "Shea is an African nut used to produce rich vegetable butter, highly sought after in the food and cosmetics industries. A symbol of African expertise, it is particularly popular on the global cosmetics market for its moisturising and nourishing properties.",
    },
    image: '/images/products/karite.jpg',
    imageAlt: {
      fr: "Beurre de karité brut Côte d'Ivoire export cosmétique",
      en: "Raw shea butter Côte d'Ivoire cosmetics export",
    },
    derivatives: [
      {
        category: { fr: 'Dérivés cosmétiques', en: 'Cosmetic derivatives' },
        items: [
          { fr: 'Beurre de karité brut', en: 'Raw shea butter' },
          { fr: 'Crèmes hydratantes', en: 'Moisturising creams' },
          { fr: 'Baumes corporels', en: 'Body balms' },
          { fr: 'Produits capillaires', en: 'Hair products' },
          { fr: 'Savons naturels', en: 'Natural soaps' },
        ],
      },
      {
        category: { fr: 'Dérivés alimentaires', en: 'Food derivatives' },
        items: [
          { fr: 'Beurre de karité alimentaire', en: 'Food-grade shea butter' },
          { fr: 'Substitut de beurre de cacao (chocolaterie & pâtisserie)', en: 'Cocoa butter substitute (chocolate & pastry)' },
          { fr: 'Graisse végétale', en: 'Vegetable fat' },
        ],
      },
      {
        category: { fr: 'Autres dérivés', en: 'Other derivatives' },
        items: [
          { fr: 'Produits pharmaceutiques', en: 'Pharmaceutical products' },
          { fr: 'Compléments naturels', en: 'Natural supplements' },
        ],
      },
    ],
    applications: [
      { fr: 'Cosmétique (marché majeur)', en: 'Cosmetics (major market)' },
      { fr: 'Pharmaceutique', en: 'Pharmaceuticals' },
      { fr: 'Agroalimentaire', en: 'Food industry' },
    ],
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
    label: { fr: 'Produits consommables', en: 'Consumable products' },
    sublabel: { fr: 'Alimentaire', en: 'Food' },
    description: {
      fr: "Produits prêts à l'usage alimentaire direct, du conditionnement détail au vrac industriel.",
      en: 'Ready-to-use food products, from retail packaging to industrial bulk.',
    },
    count: products.filter((p) => p.category === 'consommable').length,
  },
  'non-consommable': {
    id: 'non-consommable',
    label: { fr: 'Produits non consommables', en: 'Non-consumable products' },
    sublabel: { fr: 'Matières premières', en: 'Raw materials' },
    description: {
      fr: 'Matières premières destinées à la transformation industrielle, cosmétique et pharmaceutique.',
      en: 'Raw materials for industrial, cosmetic and pharmaceutical processing.',
    },
    count: products.filter((p) => p.category === 'non-consommable').length,
  },
} as const;
