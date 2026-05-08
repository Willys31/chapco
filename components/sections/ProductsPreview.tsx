import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const featuredProducts = [
  {
    slug: 'attieke-deshydrate',
    name: 'Attiéké Déshydraté',
    category: 'Alimentaire',
    description: 'Semoule de manioc fermentée, longue conservation.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=90',
  },
  {
    slug: 'huile-rouge-palme',
    name: 'Huile Rouge de Palme',
    category: 'Alimentaire',
    description: 'Riche en bêta-carotène et vitamines A & E.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=90',
  },
  {
    slug: 'karite',
    name: 'Karité',
    category: 'Cosmétique',
    description: "Beurre végétal premium pour l'industrie cosmétique.",
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=90',
  },
  {
    slug: 'hevea',
    name: 'Hévéa',
    category: 'Industriel',
    description: 'Caoutchouc naturel pour industries automobile et médicale.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=90',
  },
];

export function ProductsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-4">
                Notre gamme
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-navy-700 tracking-tight">
                Le terroir africain
                <br />
                en <em className="italic text-forest-500">9 filières</em>
              </h2>
            </div>
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-sage-700 transition-colors group whitespace-nowrap"
            >
              Voir tous les produits
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <Link href={`/produits/${product.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-sm mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs tracking-[0.2em] uppercase bg-cream/90 backdrop-blur-sm text-navy-700 px-3 py-1.5 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream/0 group-hover:bg-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-navy-700" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-navy-700 mb-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-ink/60 font-light">{product.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
