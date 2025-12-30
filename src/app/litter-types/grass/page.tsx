import { Metadata } from 'next';
import GrassContent from './GrassContent';

export const metadata: Metadata = {
  title: 'Grass Cat Litter | Ultra-Lightweight Natural Litter Guide',
  description: 'Complete guide to grass cat litter: the lightest natural litter available, exceptional clumping, and soft texture cats love. Compare grass litter brands.',
  keywords: [
    'grass cat litter',
    'grass seed litter',
    'lightweight cat litter',
    'smart cat litter',
    'natural grass litter',
    'grass clumping litter',
    'soft cat litter',
    'low tracking litter',
    'grass litter review',
    'grass vs clay litter'
  ],
  openGraph: {
    title: 'Grass Cat Litter: Complete Guide',
    description: 'The lightest natural cat litter option with tight clumping and minimal tracking. Discover why cats love the soft texture.',
    type: 'article',
  },
};

export default function GrassLitterPage() {
  return <GrassContent />;
}
