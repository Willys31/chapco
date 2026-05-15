'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('chapco_loaded')) return;
    setIsLoading(true);

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(prev + Math.random() * 14 + 3, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              setIsLoading(false);
              sessionStorage.setItem('chapco_loaded', 'true');
            }, 900);
          }, 300);
        }
        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden" style={{ background: '#0F1530' }}>
      {/* Exit: 3 panels sweep up */}
      <AnimatePresence>
        {exiting && (
          <div className="absolute inset-0 flex z-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="flex-1"
                style={{ background: '#1E2A5E' }}
                initial={{ y: '100%' }}
                animate={{ y: '-100%' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.76, 0, 0.24, 1] }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-0 flex flex-col items-center gap-10 text-center">
        <div>
          <motion.p
            className="text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ color: '#A8C9A8' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Abidjan — Côte d'Ivoire
          </motion.p>
          <motion.h1
            className="text-white text-5xl md:text-7xl font-light tracking-[0.12em]"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            CHAP & CO
          </motion.h1>
        </div>

        <motion.div
          className="w-56 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="absolute -top-5 right-0 text-[10px] font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {Math.round(Math.min(progress, 100)).toString().padStart(3, '0')}
          </p>
          <div className="h-px overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="h-full"
              style={{ background: '#A8C9A8' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'linear', duration: 0.08 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
