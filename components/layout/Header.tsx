'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { company } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export function Header() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentY > 20);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        <motion.header
          className={cn(
            'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm'
              : 'bg-transparent'
          )}
          animate={{ y: hidden ? -100 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Container>
            <div className="flex items-center justify-between h-20 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <LogoText scrolled={scrolled} />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {company.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group',
                      scrolled
                        ? 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                    <span className={cn(
                      'absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left',
                      scrolled ? 'bg-navy-700' : 'bg-sage-300'
                    )} />
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <LanguageSwitcher scrolled={scrolled} />
                <Link href="/contact">
                  <Button
                    type="button"
                    variant={scrolled ? 'primary' : 'outline-white'}
                    size="sm"
                  >
                    {tCommon('cta_quote')}
                  </Button>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200',
                  scrolled
                    ? 'text-navy-700 hover:bg-navy-50'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label={t('open_menu')}
              >
                <Menu size={22} />
              </button>
            </div>
          </Container>
        </motion.header>
      </AnimatePresence>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function LogoText({ scrolled }: { scrolled: boolean }) {
  return (
    <div className={cn(
      'transition-all duration-300 rounded-xl',
      !scrolled && 'bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm'
    )}>
      <Image
        src="/chapco-logo.png"
        alt="CHAP & CO"
        width={110}
        height={51}
        className="h-11 w-auto object-contain"
        priority
      />
    </div>
  );
}
