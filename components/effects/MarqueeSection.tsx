'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MarqueeSectionProps {
  text: string;
  dark?: boolean;
  className?: string;
}

export function MarqueeSection({ text, dark = false, className = '' }: MarqueeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-25%']);

  const repeated = `${text} — ${text} — ${text} — ${text} — ${text} —`;

  return (
    <div
      ref={ref}
      className={`overflow-hidden py-12 border-y ${dark ? 'bg-navy-900 border-white/10' : 'bg-cream border-sage-500/20'} ${className}`}
    >
      <motion.p
        style={{ x }}
        className={`whitespace-nowrap font-light tracking-[0.08em] uppercase text-[clamp(1.5rem,4vw,3rem)] leading-none ${dark ? 'text-white/20' : 'text-navy-700/20'}`}
      >
        {repeated}
      </motion.p>
    </div>
  );
}
