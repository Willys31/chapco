'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { company } from '@/data/company';
import { ArrowsBackground } from '@/components/animations/ArrowsBackground';
import { Container } from '@/components/ui/Container';

const currentYear = new Date().getFullYear();

export function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');

  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      <ArrowsBackground baseOpacity={0.2} />

      <div className="relative z-10">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Col 1 — Logo & description */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <LogoText />
              </div>
              <p className="text-sage-300 text-sm leading-relaxed mb-4 font-medium italic">
                &quot;{typeof company.tagline === 'object' ? company.tagline.fr : company.tagline}&quot;
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-sage-500 shrink-0" />
                <span>{company.location.city}, {company.location.country}</span>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                {tCommon('founded_in')} {company.foundedYear}
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
                {t('navigation')}
              </h4>
              <ul className="space-y-3">
                {company.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-sage-300 transition-colors duration-200 text-sm group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-sage-300 transition-all duration-300 inline-block" />
                      {tNav(item.key as Parameters<typeof tNav>[0])}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Featured products */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
                {t('featured_products')}
              </h4>
              <ul className="space-y-3">
                {company.products.map((product) => {
                  const label = typeof product === 'object' ? product.fr : product;
                  return (
                    <li key={label}>
                      <Link
                        href="/produits"
                        className="text-gray-400 hover:text-sage-300 transition-colors duration-200 text-sm group flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-sage-500 shrink-0 group-hover:bg-sage-300 transition-colors duration-200" />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
                {t('contact')}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium text-sm mb-1">{company.contact.name}</p>
                  <p className="text-gray-500 text-xs">{t('general_manager')}</p>
                </div>
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-sage-300 transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-navy-700 group-hover:bg-sage-700 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <Phone size={14} />
                  </div>
                  <span>{company.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  suppressHydrationWarning
                  className="flex items-center gap-3 text-gray-400 hover:text-sage-300 transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-navy-700 group-hover:bg-sage-700 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <Mail size={14} />
                  </div>
                  <span suppressHydrationWarning>{company.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <Container className="py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-500 text-xs" suppressHydrationWarning>
                © {currentYear} {company.name}. {tCommon('all_rights_reserved')}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <Link href="/mentions-legales" className="hover:text-sage-300 transition-colors duration-200">
                  {t('legal')}
                </Link>
                <span className="text-gray-700">•</span>
                <Link href="/politique-confidentialite" className="hover:text-sage-300 transition-colors duration-200">
                  {t('privacy')}
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}

function LogoText() {
  return (
    <Image
      src="/chapco-logo-footer.png"
      alt="CHAP & CO"
      width={160}
      height={60}
      className="h-12 w-auto object-contain"
    />
  );
}
