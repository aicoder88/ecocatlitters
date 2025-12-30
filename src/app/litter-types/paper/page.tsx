import { Metadata } from 'next';
import PaperContent from './PaperContent';

export const metadata: Metadata = {
  title: 'Paper Cat Litter | Recycled & Dust-Free Litter Guide',
  description: 'Complete guide to paper cat litter: made from recycled newspapers, virtually dust-free, and ultra-soft for sensitive paws. Ideal for post-surgery cats.',
  keywords: [
    'paper cat litter',
    'recycled paper litter',
    'newspaper cat litter',
    'dust free cat litter',
    'paper pellet litter',
    'yesterdays news litter',
    'soft cat litter',
    'post surgery cat litter',
    'hypoallergenic cat litter',
    'paper litter review'
  ],
  openGraph: {
    title: 'Paper Cat Litter: Complete Guide',
    description: 'Recycled, dust-free, and gentle on paws. Learn why paper litter is ideal for cats with sensitivities.',
    type: 'article',
  },
};

export default function PaperLitterPage() {
  return <PaperContent />;
}
