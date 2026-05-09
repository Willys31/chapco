import { Wheat, Droplet, Cookie, Flower2, Sprout, Apple, CircleDot, Nut } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  'attieke-deshydrate': Wheat,
  'huile-rouge-palme': Droplet,
  'farine-manioc': Cookie,
  'feuilles-hibiscus': Flower2,
  'graine-palme': Sprout,
  coco: Apple,
  hibiscus: Flower2,
  hevea: CircleDot,
  karite: Nut,
};

export function getProductIcon(slug: string): LucideIcon {
  return PRODUCT_ICONS[slug] ?? Sprout;
}
