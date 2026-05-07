'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, X } from 'lucide-react';
import { company } from '@/data/company';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' as const },
  },
};

const itemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-navy-900/80 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-navy-900 flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <LogoText />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-6 py-8 flex flex-col justify-center">
              <ul className="space-y-2">
                {company.navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 px-4 rounded-xl text-3xl font-poppins font-bold text-white/90 hover:text-sage-300 hover:bg-white/5 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                custom={company.navigation.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-8"
              >
                <Button size="lg" className="w-full justify-center">
                  Demander un devis
                </Button>
              </motion.div>
            </nav>

            {/* Contact info at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-6 border-t border-white/10 space-y-3"
            >
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-400 hover:text-sage-300 transition-colors text-sm"
              >
                <Phone size={16} className="text-sage-500" />
                <span>{company.contact.phone}</span>
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-sage-300 transition-colors text-sm"
              >
                <Mail size={16} className="text-sage-500" />
                <span>{company.contact.email}</span>
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function LogoText() {
  return (
    <div className="bg-white rounded-xl px-3 py-1.5 inline-block">
      <Image
        src="/CHAP LOGO.png"
        alt="CHAP & CO"
        width={110}
        height={51}
        className="h-9 w-auto object-contain"
      />
    </div>
  );
}
