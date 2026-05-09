import { Package } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Product } from '@/data/products';

export function ProductPackagingSection({ product }: { product: Product }) {
  if (!product.packaging) return null;

  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sage-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              Conditionnements disponibles
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.15]">
              Du détail au <em className="italic text-sage-300">vrac industriel</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Grid conditionnements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {product.packaging.map((pack, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 lg:p-10 hover:bg-white/10 hover:border-sage-300/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-sage-500/10 border border-sage-300/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Package className="w-6 h-6 text-sage-300" strokeWidth={1.5} />
                </div>
                <p className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                  {pack.format}
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-sage-300 font-medium">
                  {pack.target}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.5}>
          <p className="text-center text-sm text-white/50 font-light mt-12 max-w-2xl mx-auto">
            Conditionnements personnalisables sur demande pour les commandes industrielles.
            Contactez-nous pour discuter de vos besoins spécifiques.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
