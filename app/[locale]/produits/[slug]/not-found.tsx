'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';

export default function ProductNotFound() {
  const t = useTranslations('product_detail');

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-cream py-24">
      <div className="text-center max-w-xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-sage-700 mb-6">Erreur 404</p>
        <h1 className="text-5xl md:text-6xl font-light text-navy-700 tracking-tight mb-6">
          Produit introuvable
        </h1>
        <p className="text-lg text-ink/70 font-light mb-10">
          Le produit que vous cherchez n&apos;existe pas ou a été déplacé.
        </p>
        <Link href="/produits">
          <Button variant="primary" size="lg">
            {t('related_cta')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
