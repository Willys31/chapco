'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showCurtain, setShowCurtain] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    setShowCurtain(true);
    const t = setTimeout(() => setShowCurtain(false), 750);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {showCurtain && (
          <div className="fixed inset-0 z-[9998] flex pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="flex-1"
                style={{ background: '#0F1530' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
