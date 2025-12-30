import { Metadata } from 'next';
import TofuContent from './TofuContent';

export const metadata: Metadata = {
  title: 'Tofu Cat Litter | Flushable Soy-Based Litter Guide',
  description: 'Everything about tofu cat litter: truly flushable, excellent clumping from soy-based formula, and safe if ingested. Popular in Asia, now available worldwide.',
  keywords: [
    'tofu cat litter',
    'soy cat litter',
    'flushable cat litter',
    'tofu litter review',
    'pidan tofu litter',
    'soy based litter',
    'safe cat litter',
    'edible cat litter',
    'tofu clumping litter',
    'tofu vs clay litter'
  ],
  openGraph: {
    title: 'Tofu Cat Litter: Complete Guide',
    description: 'Truly flushable and safe if accidentally ingested. Learn why tofu litter is gaining popularity worldwide.',
    type: 'article',
  },
};

export default function TofuLitterPage() {
  return <TofuContent />;
}
