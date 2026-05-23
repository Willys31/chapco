'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import gsap from 'gsap';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { MagneticButton } from '@/components/effects/MagneticButton';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { products, getLocalized } from '@/data/products';

gsap.registerPlugin(useGSAP);

const InteractiveGlobe = dynamic(
  () => import('@/components/animations/InteractiveGlobe').then((m) => ({ default: m.InteractiveGlobe })),
  { ssr: false, loading: () => null }
);

const richOptions = {
  em: (chunks: React.ReactNode) => <em className="italic text-sage-300">{chunks}</em>,
};

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);

  const tickerItems = products.flatMap((p) => [getLocalized(p.name, locale), '•']);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from('.hero-line', { y: 80, opacity: 0, stagger: 0.1, duration: 1.2, ease: 'expo.out' })
      .from('.hero-subtitle', { y: 24, opacity: 0, duration: 0.8, ease: 'expo.out' }, '-=0.6')
      .from('.hero-cta', { y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'expo.out' }, '-=0.5')
      .from('.hero-globe', { scale: 0.75, opacity: 0, duration: 1.6, ease: 'expo.out' }, '<-1.2')
      .from('.hero-scroll', { opacity: 0, y: 12, duration: 0.6, ease: 'expo.out' }, '-=0.3');
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #1E2A5E 0%, #0F1530 60%, #050816 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <ArrowsBackground baseOpacity={1} />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(90,138,90,0.12) 0%, transparent 70%)', top: '20%', right: '10%' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,42,94,0.4) 0%, transparent 70%)', bottom: '10%', left: '5%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen"
      >
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-light tracking-tight leading-[1.06] text-white mb-8">
            <span className="hero-line block overflow-hidden"><span className="block">{t('line1')}</span></span>
            <span className="hero-line block overflow-hidden">
              <span className="block">{t.rich('line2', richOptions)}</span>
            </span>
            <span className="hero-line block overflow-hidden"><span className="block">{t('line3')}</span></span>
          </h1>

          <p className="hero-subtitle text-base md:text-lg font-light text-cream/60 tracking-wide mb-12 max-w-md mx-auto lg:mx-0">
            {t('subtitle')}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
            <MagneticButton className="hero-cta">
              <Link href="/produits">
                <Button variant="primary" size="md" className="flex items-center gap-2">
                  {t('cta_products')}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton className="hero-cta">
              <Link
                href="/a-propos"
                className="group text-white/75 text-sm font-light hover:text-sage-300 transition-colors duration-300 flex items-center gap-2"
              >
                {t('cta_about')}
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </MagneticButton>
          </div>

          <motion.div
            className="mt-14 h-px w-20 bg-gradient-to-r from-sage-300/40 to-transparent mx-auto lg:mx-0"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.div
          style={{ scale: globeScale, opacity: globeOpacity }}
          className="hero-globe order-1 lg:order-2 h-[340px] md:h-[460px] lg:h-[580px] w-full relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="absolute w-[110%] h-[110%] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(90,138,90,0.18) 0%, transparent 65%)' }}
            />
          </div>
          <InteractiveGlobe />
        </motion.div>
      </motion.div>

      <div className="hero-scroll absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">{t('scroll')}</span>
        <div className="w-px h-8 overflow-hidden">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-sage-300/60 to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 py-2.5 z-10">
        <div className="flex gap-8 animate-ticker whitespace-nowrap w-max">
          {Array.from({ length: 6 }, (_, gi) =>
            tickerItems.map((item, i) => (
              <span
                key={`${gi}-${i}`}
                className={`text-[9px] tracking-[0.3em] uppercase font-light flex-shrink-0 ${item === '•' ? 'text-sage-300/30' : 'text-white/12'}`}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
