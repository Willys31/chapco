'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface KineticTitleProps {
  children: string;
  className?: string;
  reverse?: boolean;
}

export function KineticTitle({ children, className = '', reverse = false }: KineticTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['-5%', '5%'] : ['5%', '-5%']
  );

  return (
    <div ref={ref} className="overflow-hidden py-6 select-none">
      <motion.p
        style={{ x }}
        className={`whitespace-nowrap font-light text-[clamp(3rem,10vw,8rem)] leading-none tracking-tight ${className}`}
      >
        {children}
      </motion.p>
    </div>
  );
}
