import { Factory } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Product } from '@/data/products';

export function ProductApplications({ product }: { product: Product }) {
  if (!product.applications) return null;

  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sage-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-300 mb-4">
              Applications principales
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.15]">
              Des secteurs <em className="italic text-sage-300">stratégiques</em>.
            </h2>
          </FadeIn>
        </div>

        {/* Liste des applications */}
        <div className="space-y-4">
          {product.applications.map((app, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group flex items-center gap-6 p-6 lg:p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-sage-300/30 transition-all duration-500">
                {/* Numéro */}
                <span className="text-3xl md:text-4xl font-light text-sage-300/40 group-hover:text-sage-300/80 transition-colors min-w-[60px]">
                  0{index + 1}
                </span>

                {/* Icône */}
                <div className="w-12 h-12 rounded-full bg-sage-500/10 border border-sage-300/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Factory className="w-5 h-5 text-sage-300" strokeWidth={1.5} />
                </div>

                {/* Titre */}
                <h3 className="text-xl md:text-2xl font-light text-white tracking-tight flex-1">
                  {app}
                </h3>

                {/* Flèche */}
                <span className="text-sage-300 text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
