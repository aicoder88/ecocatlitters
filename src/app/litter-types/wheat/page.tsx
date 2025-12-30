import { Metadata } from 'next';
import WheatContent from './WheatContent';

export const metadata: Metadata = {
  title: 'Wheat Cat Litter | Natural Grain-Based Litter Guide',
  description: 'Everything about wheat cat litter: natural enzymes for odor control, excellent clumping, and gentle on paws. Compare sWheat Scoop and other wheat litter brands.',
  keywords: [
    'wheat cat litter',
    'wheat based cat litter',
    'swheat scoop litter',
    'grain cat litter',
    'natural wheat litter',
    'wheat clumping litter',
    'biodegradable wheat litter',
    'wheat litter odor control',
    'wheat litter review',
    'wheat vs corn litter'
  ],
  openGraph: {
    title: 'Wheat Cat Litter: Complete Guide',
    description: 'Natural wheat enzymes neutralize odors while providing excellent clumping. A renewable grain-based alternative to clay.',
    type: 'article',
  },
};

export default function WheatLitterPage() {
  return <WheatContent />;
}
