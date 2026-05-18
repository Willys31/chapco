# CHAP & CO — Site officiel

Site web corporate de **CHAP & CO** (CHAP IMPORT & CO), entreprise ivoirienne de négoce et d'exportation de matières premières agricoles & alimentaires, basée à Abidjan, Côte d'Ivoire.

🌍 **Site en production :** [chapco.ci](https://chapco.ci)

---

## Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 + GSAP 3 + Lenis |
| 3D | Three.js + React Three Fiber |
| Formulaires | React Hook Form + Zod |
| Emails | Resend |
| Déploiement | Vercel |
| DNS | Oxahost |

---

## Installation locale

### Prérequis
- Node.js 18+
- npm

```bash
# 1. Cloner le repo
git clone https://github.com/TON-USERNAME/chapco-website.git
cd chapco-website

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local et remplir RESEND_API_KEY

# 4. Lancer le serveur de développement
npm run dev --turbo
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Structure du projet

```
chapco-website/
├── app/                          # Pages Next.js (App Router)
│   ├── page.tsx                  # Accueil
│   ├── a-propos/                 # Page À propos
│   ├── produits/                 # Catalogue + fiches produits dynamiques
│   ├── qualite/                  # Page Qualité
│   ├── logistique/               # Page Logistique
│   ├── contact/                  # Page Contact
│   ├── api/contact/              # Backend formulaire (Resend)
│   ├── sitemap.ts                # Sitemap SEO auto-généré
│   ├── robots.ts                 # Robots.txt
│   ├── manifest.ts               # Manifest PWA
│   └── layout.tsx                # Layout racine
├── components/
│   ├── animations/               # FadeIn, ArrowsBackground, InteractiveGlobe
│   ├── effects/                  # CustomCursor, LoadingScreen, PageTransition, MagneticButton
│   ├── layout/                   # Header, Footer, MobileMenu
│   ├── providers/                # SmoothScrollProvider, ToasterProvider
│   ├── sections/                 # Sections de chaque page
│   ├── products/                 # ProductCard, ProductsPreview
│   ├── ui/                       # Button, Container
│   └── seo/                      # JsonLd (données structurées Schema.org)
├── data/
│   ├── products.ts               # Données des 9 produits
│   └── company.ts                # Infos entreprise centralisées
├── lib/
│   ├── seo.ts                    # Config SEO + helper generateMetadata
│   ├── product-icons.ts          # Icônes par slug produit
│   └── validations/contact.ts   # Schéma Zod du formulaire de contact
└── public/
    ├── images/products/          # Photos produits (slug.jpg)
    ├── CHAP LOGO.png             # Logo principal (fond blanc)
    └── LOGO CHAP foot.png        # Logo footer (fond sombre)
```

---

## Modifier le contenu

### Ajouter / modifier un produit

Éditer `data/products.ts`. Chaque produit suit cette interface :

```ts
{
  slug: 'nouveau-produit',          // URL : /produits/nouveau-produit
  name: 'Nouveau Produit',
  category: 'consommable',          // ou 'non-consommable'
  categoryLabel: 'Alimentaire',
  shortDescription: '...',
  image: '/images/products/nouveau-produit.jpg',
  imageAlt: '...',
  // ...
}
```

### Ajouter une photo de produit

1. Placer la photo dans `public/images/products/`
2. Nommer le fichier selon le slug : `nouveau-produit.jpg`
3. Format recommandé : JPG, ratio 4:5, résolution min 800×1000 px
4. La photo s'affiche automatiquement dans ProductCard (sinon placeholder)

### Modifier les coordonnées de contact

Éditer `data/company.ts` et `lib/seo.ts` → `siteConfig.contact`.

---

## Déploiement

### Production (automatique)

Chaque `git push` sur la branche `main` déclenche un déploiement automatique sur Vercel.

### Variables d'environnement Vercel

À configurer dans **Vercel Dashboard → Settings → Environment Variables** :

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email de réception des formulaires |
| `NEXT_PUBLIC_SITE_URL` | URL de production (`https://chapco.ci`) |

### Configuration DNS Oxahost

Dans le panel Oxahost, configurer les enregistrements DNS :

| Type | Nom | Valeur |
|------|-----|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

La propagation DNS prend 5 min à 24h. Vérifier sur [dnschecker.org](https://dnschecker.org).

---

## Dépannage

**Le formulaire de contact ne fonctionne pas**
- Vérifier que `RESEND_API_KEY` est définie dans Vercel
- Consulter : Vercel Dashboard → Deployments → Functions → Logs

**Page blanche au chargement**
- Vérifier la console navigateur pour les erreurs framer-motion
- Les `ease: 'expo.out'` dans les blocs `gsap.timeline()` sont valides ; dans `motion.div` utiliser `[0.16, 1, 0.3, 1]`

**Erreur de build**
```bash
# Nettoyer le cache et rebuilder
rm -rf .next
npm run build
```

---

## Contact projet

- **Client :** Cedric Messou — cmessou@chapco.ci — +225 07 04 76 76 76
- **Hébergement :** Vercel
- **DNS :** Oxahost
- **Emails transactionnels :** Resend

---

© 2025 CHAP IMPORT & CO. Tous droits réservés.
