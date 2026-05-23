'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export function LanguageSwitcher({ scrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const next = locale === 'fr' ? 'en' : 'fr';
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className={cn(
        'text-xs font-semibold tracking-wider px-2.5 py-1 rounded-md border transition-all duration-200 disabled:opacity-50',
        scrolled
          ? 'border-navy-200 text-navy-600 hover:bg-navy-50 hover:border-navy-400'
          : 'border-white/30 text-white/80 hover:text-white hover:bg-white/10'
      )}
      aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      {locale === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
