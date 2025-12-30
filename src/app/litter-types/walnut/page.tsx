import { Metadata } from 'next';
import WalnutContent from './WalnutContent';

export const metadata: Metadata = {
  title: 'Walnut Shell Cat Litter | Natural Dark Litter Guide',
  description: 'Complete guide to walnut shell cat litter: superior odor absorption, dark color hides stains, and upcycled from walnut industry. Pros, cons, and best brands.',
  keywords: [
    'walnut cat litter',
    'walnut shell litter',
    'black cat litter',
    'dark cat litter',
    'naturally fresh litter',
    'walnut based litter',
    'upcycled cat litter',
    'walnut odor control',
    'walnut litter review',
    'walnut vs clay litter'
  ],
  openGraph: {
    title: 'Walnut Shell Cat Litter: Complete Guide',
    description: 'Upcycled walnut shells provide superior odor control and a distinctive dark color that hides stains naturally.',
    type: 'article',
  },
};

export default function WalnutLitterPage() {
  return <WalnutContent />;
}
