'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springCfg = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springCfg);
  const y = useSpring(cursorY, springCfg);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (window.matchMedia('(hover: none)').matches || prefersReducedMotion) return;
    setIsMobile(false);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('[data-cursor="view"]')) {
        setVariant('view');
      } else if (el.closest('a, button, [role="button"]')) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={variant}
      variants={{
        default: { width: 12, height: 12, backgroundColor: '#A8C9A8', mixBlendMode: 'difference' as const },
        hover:   { width: 48, height: 48, backgroundColor: '#C8E0C8', mixBlendMode: 'difference' as const },
        view:    { width: 80, height: 80, backgroundColor: '#A8C9A8', mixBlendMode: 'normal' as const },
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.3 }}
    >
      {variant === 'view' && (
        <span className="text-navy-700 text-[9px] tracking-[0.2em] uppercase font-medium select-none">
          Voir
        </span>
      )}
    </motion.div>
  );
}
