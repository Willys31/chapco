'use client';

import { motion } from 'framer-motion';

interface ArrowConfig {
  id: number;
  x: string;
  y: string;
  size: number;
  direction: 'right' | 'left';
  delay: number;
  duration: number;
  color: string;
  opacity: number;
  rotate: number;
}

const arrows: ArrowConfig[] = [
  { id: 1, x: '8%', y: '20%', size: 80, direction: 'right', delay: 0, duration: 12, color: '#C8E0C8', opacity: 0.25, rotate: 0 },
  { id: 2, x: '75%', y: '15%', size: 60, direction: 'left', delay: 1.5, duration: 10, color: '#A8C9A8', opacity: 0.2, rotate: 180 },
  { id: 3, x: '45%', y: '70%', size: 100, direction: 'right', delay: 0.8, duration: 14, color: '#C8E0C8', opacity: 0.15, rotate: -10 },
  { id: 4, x: '88%', y: '55%', size: 70, direction: 'left', delay: 2, duration: 11, color: '#A8C9A8', opacity: 0.22, rotate: 170 },
  { id: 5, x: '20%', y: '80%', size: 55, direction: 'right', delay: 3, duration: 13, color: '#C8E0C8', opacity: 0.18, rotate: 5 },
  { id: 6, x: '60%', y: '35%', size: 85, direction: 'left', delay: 0.5, duration: 9, color: '#A8C9A8', opacity: 0.2, rotate: 185 },
];

function ArrowSVG({ size, color, opacity }: { size: number; color: string; opacity: number }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Double arrow - represents import/export */}
      <path
        d="M0 25 L85 25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M70 10 L90 25 L70 40"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Second arrow offset */}
      <path
        d="M15 13 L100 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M85 2 L102 13 L85 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

interface ArrowsBackgroundProps {
  className?: string;
  count?: number;
  baseOpacity?: number;
}

export function ArrowsBackground({ className = '', baseOpacity = 1 }: ArrowsBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {arrows.map((arrow) => (
        <motion.div
          key={arrow.id}
          className="absolute"
          style={{
            left: arrow.x,
            top: arrow.y,
            rotate: arrow.rotate,
          }}
          animate={{
            x: [0, arrow.direction === 'right' ? 20 : -20, 0],
            y: [0, -10, 0],
            opacity: [arrow.opacity * baseOpacity, arrow.opacity * baseOpacity * 0.6, arrow.opacity * baseOpacity],
          }}
          transition={{
            duration: arrow.duration,
            delay: arrow.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowSVG size={arrow.size} color={arrow.color} opacity={1} />
        </motion.div>
      ))}
    </div>
  );
}
