import { Metadata } from 'next';
import WoodContent from './WoodContent';

export const metadata: Metadata = {
  title: 'Wood & Pine Cat Litter | Pellet & Clumping Options Guide',
  description: 'Complete guide to wood cat litter: pine pellets, cedar shavings, and wood clumping formulas. Learn about natural odor control, FSC certification, and switching tips.',
  keywords: [
    'wood cat litter',
    'pine pellet cat litter',
    'wood pellet litter',
    'pine cat litter',
    'cedar cat litter',
    'natural wood litter',
    'sawdust cat litter',
    'feline pine litter',
    'wood clumping litter',
    'FSC certified cat litter'
  ],
  openGraph: {
    title: 'Wood & Pine Cat Litter: Complete Guide',
    description: 'Natural odor control from sustainable wood sources. Compare pine pellets, cedar, and clumping wood formulas.',
    type: 'article',
  },
};

export default function WoodLitterPage() {
  return <WoodContent />;
}
