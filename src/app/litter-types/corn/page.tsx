import { Metadata } from 'next';
import CornContent from './CornContent';

export const metadata: Metadata = {
  title: 'Corn Cat Litter | Natural Clumping Litter Guide',
  description: 'Everything about corn cat litter: natural clumping action, excellent odor control, and renewable corn-based formula. Pros, cons, safety info, and best brands.',
  keywords: [
    'corn cat litter',
    'corn cob cat litter',
    'natural corn litter',
    'worlds best cat litter',
    'corn based cat litter',
    'clumping corn litter',
    'biodegradable corn litter',
    'flushable corn litter',
    'corn litter review',
    'corn vs clay litter'
  ],
  openGraph: {
    title: 'Corn Cat Litter: Complete Guide',
    description: 'Discover corn cat litter: exceptional clumping, natural odor control, and sustainable ingredients from agricultural byproducts.',
    type: 'article',
  },
};

export default function CornLitterPage() {
  return <CornContent />;
}
