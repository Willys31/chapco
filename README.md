# CHAP & CO — Site Web Corporate

Site web de **CHAP & CO** (CHAP IMPORT & CO), entreprise ivoirienne de négoce et d'exportation de matières premières agricoles et alimentaires, basée à Abidjan, Côte d'Ivoire.

## Démarrage

```bash
# Démarrage standard (Turbopack)
NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max-old-space-size=4096" npm run dev

# Ou directement
npx next dev --port 3030
```

Ouvrir [http://localhost:3030](http://localhost:3030)

## Stack technique

- **Framework** : Next.js 16 (App Router, Turbopack)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion 12
- **Icons** : Lucide React
- **TypeScript**

## Structure

```
app/
├── layout.tsx          # Layout principal (Header + Footer)
├── page.tsx            # Page d'accueil
└── globals.css         # Variables CSS (couleurs CHAP & CO)

components/
├── layout/
│   ├── Header.tsx      # Header sticky avec scroll behavior
│   ├── Footer.tsx      # Footer 4 colonnes
│   └── MobileMenu.tsx  # Menu mobile fullscreen
├── ui/
│   ├── Button.tsx      # Bouton avec variants (CVA)
│   └── Container.tsx   # Conteneur responsive
├── sections/
│   └── Hero.tsx        # Hero immersif 100vh
└── animations/
    ├── ArrowsBackground.tsx  # Flèches signature import/export
    └── FadeIn.tsx            # Wrapper Framer Motion

data/
└── company.ts          # Infos entreprise centralisées
```

## Contact

- **Cedric Messou** — Directeur Général
- Tél : +225 07 04 76 76 76
- Email : Cmessou@chapco.ci
