'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface TextRevealProps {
  children: string;
  as?: Tag;
  className?: string;
  delay?: number;
  splitBy?: 'words' | 'chars';
  trigger?: 'load' | 'scroll';
}

export function TextReveal({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  splitBy = 'words',
  trigger = 'scroll',
}: TextRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tagEl = wrapRef.current?.querySelector(Tag) as HTMLElement | null;
      if (!tagEl) return;

      import('split-type').then(({ default: SplitType }) => {
        const split = new SplitType(tagEl, {
          types: splitBy === 'chars' ? 'chars' : 'words',
          tagName: 'span',
        });
        const items = (splitBy === 'chars' ? split.chars : split.words) ?? [];
        if (!items.length) return;

        gsap.set(items, { y: '110%', opacity: 0 });

        const anim = gsap.to(items, {
          y: '0%',
          opacity: 1,
          duration: 1.1,
          stagger: 0.04,
          ease: 'expo.out',
          delay,
          paused: trigger === 'scroll',
        });

        if (trigger === 'scroll' && wrapRef.current) {
          ScrollTrigger.create({
            trigger: wrapRef.current,
            start: 'top 88%',
            onEnter: () => anim.play(),
          });
        }
      });
    },
    { scope: wrapRef, dependencies: [children, splitBy, trigger, delay, Tag] }
  );

  return (
    <div ref={wrapRef} style={{ overflow: 'hidden' }}>
      <Tag className={className}>{children}</Tag>
    </div>
  );
}
